/**
 * 
 *  Get Zone Examples for PureClarity Implementation
 * 
 */

// Example of a getzone call for a single zone with no context
_pc("getzone", {zone:"HP-01"}, function(err, result) {
    // err is null if all ok
});

// Example of a getzone call for multiple zones with no context
_pc("getzone", {zones: ["HP-01, HP-02"]}, function(err, result) {
    // err is null if all ok
});

// Example of a getzone call for a single zone with a product context on the homepage
_pc("getzone", {zone: "HP-01", product_id: "P12345"}, function(err, result) {
    // err is null if all ok
    // result is a hashmap is IDs with HTML 
});

// Example of a getzone call for multiple zones with a product context on the Product page
_pc('getzone', { zones: ['PP-01', 'PP-02'], product_id: 'P12345' }, function(err, result) {
    // err is null if all ok
    // result is a hashmap of IDs with Html (eg. var html = result['HP-01'])
});

// Example of a getzone call for a single zone with an autocomplete term context
_pc('getzone', {zone: "AC-01", autocompleteterm: "jar"}, function (err, result) {
    // result is a hashmap of IDs with Html (eg. var html = result['AC-01'])
})

// Example of a getzone call for multiple zones with an autocomplete term context
_pc('getzone', {zones: ["AC-01", "AC-02"], autocompleteterm: "jar"}, function (err, result) {
    // result is a hashmap of IDs with Html (eg. var html = result['AC-01'])
})

// Example of a getzone call for a zone that has a the category context
_pc('getzone', {zone: "HP-01", category_id:"Accessories>Bags>Handbags"}, function (err, result) {

})

// Example of a getzone call for a zone that has a brand context
_pc('getzone', {zone: "HP-01", brand_id:"1"}, function (err, result) {

})