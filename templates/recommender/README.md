# PureClarity recommender templates

The files in this folder are copies of the handlebar templates used by the PureClarity recommenders. If you are looking to create your own template based off the built in one you can use these as a reference.

## PureClarity Support

If you are building your own template PureClarity will not provide support on why it is not working. PureClarity helps setup a recommender template for you for free at the beginning of your PureClarity Plus plan. We can build custom templates for you (both recommender and custom site content) for a nominal charge - which is purely to cover our costs. Please contact support@pureclarity.com for more details.

## File structure

There are 8 different styles of recommender to choose from. They are the files with the .handlebars extension. These mirror the styles you can choose from in PureClarity.

These templates all rely on several partial templates. You can use the built-in PureClarity partials if you want, or else you can copy the partial from this repository into PureClarity and use it. You will need to give it a unique name in PureClarity, and change the reference in the template.

The templates all use the `product-card` partial, as well as partials for the CSS and the Swiper JS library. 

The product rating partials are not provided as the `loadRatingPartial` function is hardcoded to return the correct partial based on the settings in PureClarity.

## Using the templates in PureClarity

Copy the contents of the files you need into new files in the template editor in PureClarity. Click the "Add new template" - and paste in the content. 

* **You do not need the ".handlebar" extension for the templates**.
* If you are copying any partial templates, please keep the .partial extension. You will need to give your partial a unique name. 

