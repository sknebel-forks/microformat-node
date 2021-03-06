/*
Microformats Test Suite - Downloaded from github repo: microformats/tests version v0.1.26 
Mocha integration test from: microformats-v1/includes/hcarditemref
The test was built on Fri May 27 2016 13:35:35 GMT+0100 (BST)
*/

var chai = require('chai'),
   assert = chai.assert,
   helper = require('../test/helper.js');


describe('includes', function() {
   var htmlFragment = "<div class=\"vcard\" itemref=\"mozilla-org mozilla-adr\">\n    <span class=\"name\">Brendan Eich</span>\n</div>\n<div class=\"vcard\" itemref=\"mozilla-org mozilla-adr\">\n    <span class=\"name\">Mitchell Baker</span>\n</div>\n\n<p id=\"mozilla-org\" class=\"org\">Mozilla</p>\n<p id=\"mozilla-adr\" class=\"adr\">\n    <span class=\"street-address\">665 3rd St.</span>  \n    <span class=\"extended-address\">Suite 207</span>  \n    <span class=\"locality\">San Francisco</span>,  \n    <span class=\"region\">CA</span>  \n    <span class=\"postal-code\">94107</span>  \n    <span class=\"country-name\">U.S.A.</span>  \n</p>";
   var found = helper.parseHTML(htmlFragment,'http://example.com/');
   var expected = {"items":[{"type":["h-card"],"properties":{"org":["Mozilla"],"adr":[{"value":"665 3rd St.  \n    Suite 207  \n    San Francisco,  \n    CA  \n    94107  \n    U.S.A.","type":["h-adr"],"properties":{"street-address":["665 3rd St."],"extended-address":["Suite 207"],"locality":["San Francisco"],"region":["CA"],"postal-code":["94107"],"country-name":["U.S.A."]}}]}},{"type":["h-card"],"properties":{"org":["Mozilla"],"adr":[{"value":"665 3rd St.  \n    Suite 207  \n    San Francisco,  \n    CA  \n    94107  \n    U.S.A.","type":["h-adr"],"properties":{"street-address":["665 3rd St."],"extended-address":["Suite 207"],"locality":["San Francisco"],"region":["CA"],"postal-code":["94107"],"country-name":["U.S.A."]}}]}},{"type":["h-adr"],"properties":{"street-address":["665 3rd St."],"extended-address":["Suite 207"],"locality":["San Francisco"],"region":["CA"],"postal-code":["94107"],"country-name":["U.S.A."]}}],"rels":{},"rel-urls":{}};

   it('hcarditemref', function(){
       assert.deepEqual(found, expected);
   });
});
