/**
 * @fileoverview Startfile hook that prepends the HTML header to the
 * beginning of the <body>
 */
define([], function () {
  return function (runtime, params, callback) {
    params.content = runtime.bodyPrepend(
      params.content, params.options.headerhtml || '');
    callback(null, params.content);
  };
});
