module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['module:react-native-dotenv', { moduleName: '@env', path: '.env' }],
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@pages': './src/pages',
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
