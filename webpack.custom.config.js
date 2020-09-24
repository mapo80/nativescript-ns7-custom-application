const webpackConfig = require("./webpack.config");
const path = require("path");

module.exports = env => {

    /**
     * Plaftform root
     */
    env = env || {};

    const platform = env && (env.android && "android" || env.ios && "ios" || env.platform);
    if (!platform) {
        throw new Error("You need to provide a target platform!");
    }    

    env.appComponents = env.appComponents || [];
    env.entries = env.entries || {};

    if (platform === 'android') {
        env.entries.application = "./src/app/application.android";    
    }
    
    return webpackConfig(env);
};
