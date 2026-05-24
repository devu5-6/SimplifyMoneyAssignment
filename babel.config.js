module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      // Add the jsxImportSource hint to the Expo preset
      ['babel-preset-expo', { jsxImportSource: 'nativewind' }],
      // Move NativeWind here, out of the plugins array!
      'nativewind/babel',
    ],
    plugins: [], 
  };
};