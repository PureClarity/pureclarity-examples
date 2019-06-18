# Infinite Scroll

We provide limited support for infinite scroll within legacy PureClarity search.

## Changes to the client

The infinite scroll works by calling an exposed function from the PureClarity clientscript. This function automatically increments the page number and appends the products for that page to the end of the current results. 

The function call is as follows:

```javascript
window['PureClarityObject'].getNextPageResults(<selector>);
```

Note that the `<selector>` should be replaced with the element selector which would grab the individual product elements. This selector should be as specific as possible to ensure the right elements are targeted.

When to call this function will vary depending on your precise requirements. An example of how this might be done is provided below, though this is only example code and should be adjusted accordingly for your needs. The provided example includes a debounce function to limit calls as well as only making additional calls if we scroll further down than we have before on the page (within the current page visit). Note that naive implementations may result in excessive calls which may exceed our fair use policy and result in the calls been blocked.

```javascript
//Stores the current timer we're waiting on
let scrollTimer = null;
//Stores the greatest Y value so we don't fire searches if we've already gone past this point
let greatestY = 0;

_pc('prerender_callback_event', function(){
    //Reset the greatestY so that the event still fires after a filter reduces result count
    greatestY = 0;
});


$(window).on('scroll', function(){
    //If we're waiting for a previous scroll search to be performed, don't execute scroll logic
    if(!scrollTimer){

        //Point at to compare against, minus a set amount so it triggers before we see it (where possible)
        const triggerPoint = Math.max($(document).height() - 600 - $(window).height(),0);
        const scrollTop = $(window).scrollTop();

        //If current Y exceeds comparison point and we're scrolling down
        if(scrollTop > triggerPoint && scrollTop > greatestY) {
            greatestY = scrollTop;

            //Perform search and provide selector for products
            window['PureClarityObject'].getNextPageResults(".pc-products .pc-product");

            //Set a timeout so we don't execute huge amounts of searches in a short timeframe
            scrollTimer = setTimeout(function(){
                scrollTimer = null;
            }, 1000);
        }
    }
});
```

## Template Recommendations

Your template may require some minor changes for infinite scroll. Though it will work with default templates we recommend the following: 

* Pagination should be removed from the provided HTML template as infinite scroll is a replacement for this
* Any JavaScript should be scoped to use the strictest selector possible