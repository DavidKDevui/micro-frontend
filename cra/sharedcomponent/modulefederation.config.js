const { dependencies } = require('./package.json');

module.exports = {
  name: 'sharedcomponent',
  exposes: {
    './Header': './shared/Header',
    './Footer': './shared/Footer'
  },
  filename: 'sharedcomponentEntry.js',
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
