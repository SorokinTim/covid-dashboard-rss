module.exports = {
  plugins: [
    module.require('autoprefixer')({
      browsers: ['> 0.5%', 'last 4 versions'],
    }),
  ],
};
