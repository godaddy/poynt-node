var assert = require("assert");
var invoices = require("../lib/invoices");
var applications = require("../lib/applications");
var applePay = require("../lib/apple-pay");
var collect = require("../lib/collect");

function capture(fn, options) {
  var captured;
  fn.call(
    {
      request: function (req) {
        captured = req.url;
      },
    },
    options,
    function () {}
  );
  return captured;
}

assert.strictEqual(
  capture(invoices.getInvoice, {
    businessId: "b",
    storeId: "s",
    orderId: "../../businesses/evil?x=1",
  }).split("?")[0],
  "/invoicing/invoices/..%2F..%2Fbusinesses%2Fevil%3Fx%3D1"
);

assert.strictEqual(
  capture(applications.startUnderwriting, { applicationId: "urn:aid:1?admin=true#f" }),
  "/api/services/applications/urn%3Aaid%3A1%3Fadmin%3Dtrue%23f/onboard"
);

assert.strictEqual(
  capture(applications.passOTPVerification, {
    applicationId: "a",
    code: "1",
    skip: "1&other=2",
  }),
  "/api/services/applications/a/step-ups/otp?skip=1%26other%3D2"
);

assert.strictEqual(
  capture(applePay.getApplePayRegistration, { businessId: "b/../../token" }),
  "/businesses/b%2F..%2F..%2Ftoken/apple-pay/registration"
);

assert.strictEqual(
  capture(collect.tokenizeCard, { businessId: "b/x", nonce: "n" }),
  "/businesses/b%2Fx/cards/tokenize"
);

console.log("url-encoding: ok");
