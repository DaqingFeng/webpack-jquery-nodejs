
module.exports = function (options) {
    if (options.loadtype == "node") {
        return require("./webpack-node.config.js");
    } else if (options.loadtype == "web") {
        return require("./webpack-web.config.js");
    }
}
