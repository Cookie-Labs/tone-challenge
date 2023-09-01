module.exports = {
  plugins: [
    require('autoprefixer')({
      overrideBrowserslist: ['last 2 versions', 'iOS >= 8'],
    }),
  ],
};
