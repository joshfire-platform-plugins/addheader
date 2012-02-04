module.exports = {
  "startfile":function(runtime, params, callback) {
    callback(null, params["content"].replace(/(<body([^>]*)>)/i,"$1"+(params.options.headerhtml||"").replace(/\$/g,"$$$$")));
  }
};