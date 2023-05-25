module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['module:react-native-dotenv', { moduleName: '@env', path: '.env' }],
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          'src': './src',
          '@pages': './src/pages',
          '@graphql': './src/graphql',
          '@components': './src/components',
          '@assets': './assets',
          '@utils': './src/utils',
          '@hooks': './src/hooks',
          '@theme': './src/globalStyles'
        }
      }],
    'react-native-reanimated/plugin',
  ],
};
