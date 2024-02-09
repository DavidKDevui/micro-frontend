const { dependencies } = require('./package.json');

module.exports = {
  name: 'sharedcomponents',
  exposes: {
    './Header': './shared/Header',
    './Footer': './shared/Footer',
  },
  filename: 'sharedcomponentsEntry.js',
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      requiredVersion: dependencies['react'],
    },
    'react-dom': {
      singleton: true,
      requiredVersion: dependencies['react-dom'],
    },
  },
};
