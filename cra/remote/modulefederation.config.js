const { dependencies } = require('./package.json');

module.exports = {
  name: 'remote',
  exposes: {
    './Button': './src/Button',
  },
  remotes: {
    sharedcomponent: 'sharedcomponent@http://localhost:3010/sharedcomponentEntry.js',
  },
  filename: 'remoteEntry.js',
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
