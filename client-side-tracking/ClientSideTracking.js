/**
 * PureClarity Example Tracking Events
 * 
 * Example code to help clients with the implementation of PureClarity onto their site
 * 
 */

/** PRODUCT VIEW **/

 // Example of a customer viewing the homepage of the site
_pc("page_view", {
    page_type: "homepage",    
});

// Example of a customer viewing a category page
_pc("page_view", {
    page_type: "category_listing_page",
    category_id: 1234
});

/** CURRENCY **/

// Example of a customer setting thier prefered currency to USD 
_pc("currency", "USD");

/** PRODUCT VIEW **/

// Example of a customer viewing a specific product
_pc("product_view", {
    id: "P1234"
});

/** PRODUCT RATING **/

// Example of a customer rating a specific product with a value of 3
_pc("product_rate", {
    id: "P1234",
    rating: 3
})

/** SET BASKET **/

// Example of a single product being added to the sites basket
_pc("set_basket", [
    {
        id: "P1234",
        qty: 3,
        unitprice: 20
    }
])

// Example of multiple products being added to the sites basket 
_pc("set_basket", [
    {
        id: "P1234",
        qty: 3,
        unitprice: 20
    },
    {
        id:"P4567",
        qty: 1,
        unitprice: 5
    }
])

/** CUSTOMER DETAILS **/

// Example of a registered user logging into the site that provides no identifying information
_pc("customer_details", {
    userid:"USR123"
})

// Example of a registered account logging into the site that provides no identifying information
_pc("customer_details", {
    accid:"ACCID"
})

// Example of a registered user logging into the site that has a userid as the identifier
_pc("customer_details", {
    userid: "USR123",
    email: "example@example.com",
    firstname: "John",
    lastname: "Doe",
    title: "Mr"
})

// Example of a registered user logging into the site with an account as the identifier
_pc("customer_details", {
    accid: "ACCID1",
    email: "example@example.com",
    firstname: "John",
    lastname: "Doe",
    title: "Mr"
})

// Example of a registered user logging into the site with an email address as the identifier
_pc("customer_details", {
    email: "example@example.com",
    firstname: "John",
    lastname: "Doe",
    title: "Mr"
})

// Example of a registered user logging into the site with a group ID as the identifier
_pc("customer_details", {
    groupid: "group10",
    firstname: "John",
    lastname: "Doe",
    title: "Mr"
}) 

/** CUSTOMER LOGOUT **/

// Example of the current user logging out of the site
_pc("customer_logout")

/** ORDERS **/

// Example of an order with a single item being sent to pureclarity 
_pc("order", {
    orderid: "0123",
    ordertotal: "30",
    title: "Mr",
    firstname: "John",
    lastname: "Doe",
    zipcode: "90210",
    postcode: "YO10 6RB",
    dob: "1996-01-17",
    userId: "USR123",
    email: "example@example.com",
    items: [
        {
            id: "P1234",
            qty: 3,
            unitprice: 10   
        }
    ]
})

// Example of an order with multiple items being sent to pureclarity
_pc("order", {
    orderid: "0123",
    ordertotal: "35",
    title: "Mr",
    firstname: "John",
    lastname: "Doe",
    zipcode: "90210",
    postcode: "YO10 6RB",
    dob: "1996-01-17",
    userId: "USR123",
    email: "example@example.com",
    items: [
        {
            id: "P1234",
            qty: 3,
            unitprice: 10   
        },
        {
            id:"P4567",
            qty: 1,
            unitprice: 5
        }
    ]
})

// Example of an order with a group ID
_pc("order", {
    orderid: "0123",
    ordertotal: "35",
    title: "Mr",
    firstname: "John",
    lastname: "Doe",
    zipcode: "90210",
    postcode: "YO10 6RB",
    dob: "1996-01-17",
    userId: "USR123",
    email: "example@example.com",
    groupid: "group10",
    items: [
        {
            id: "P1234",
            qty: 3,
            unitprice: 10   
        }
    ]
})
