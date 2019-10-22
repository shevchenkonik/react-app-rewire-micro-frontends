module.exports = (config, env) => {
  config.optimization.runtimeChunk = false;
  config.optimization.splitChunks = {
    cacheGroups: {
      default: false,
    },
  };
  /**
   * Disable hash generation in production build for JS
   */
  config.output.filename = "static/js/[name].bundle.js";
  /**
   * Disable hash generation in production build for CSS
   */
  config.plugins[5].options.filename = "static/css/[name].bundle.css";
  config.externals = {
    react: 'React',
    'react-dom': 'ReactDOM'
  }
  return config;
};
