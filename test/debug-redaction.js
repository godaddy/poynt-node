process.env.DEBUG = "poynt";

var assert = require("assert");
var helpers = require("../lib/helpers");

var logged = "";
process.stderr.write = function (chunk) {
  logged += chunk;
  return true;
};

global.fetch = function (url) {
  var payload = /\/token$/.test(url)
    ? '{"accessToken":"SECRET-RESPONSE-TOKEN"}'
    : '{"ok":true}';
  return Promise.resolve({
    status: 200,
    text: function () {
      return Promise.resolve(payload);
    },
  });
};

helpers.nakedRequest(
  {
    url: "/token",
    method: "POST",
    form: true,
    body: { assertion: "SECRET-ASSERTION" },
  },
  function () {
    helpers.nakedRequest(
      {
        url: "/businesses/b",
        method: "POST",
        accessToken: "SECRET-BEARER",
        body: { a: 1 },
      },
      function () {
        delete process.stderr.write;
        assert.ok(!/SECRET-/.test(logged), "credentials leaked into debug log");
        assert.ok(logged.indexOf('"Authorization":"[REDACTED]"') !== -1);
        assert.ok(logged.indexOf('{\\"a\\":1}') !== -1, "json body should still be logged");
        assert.ok(logged.indexOf('{"ok":true}') !== -1, "normal response should still be logged");
        console.log("debug-redaction: ok");
      }
    );
  }
);
