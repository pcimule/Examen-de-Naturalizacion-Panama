const { getDefaultConfig } = require('expo/metro-config');
const exclusionList = require('metro-config/src/defaults/exclusionList');

const config = getDefaultConfig(__dirname);

// Evita que Metro vigile carpetas nativas generadas (Pods, builds de Xcode/Gradle),
// que no forman parte del código JS y en macOS pueden agotar los file descriptors
// disponibles (EMFILE: too many open files) cuando no hay watchman instalado.
config.resolver.blockList = exclusionList([
  /ios\/Pods\/.*/,
  /ios\/build\/.*/,
  /android\/build\/.*/,
  /android\/\.gradle\/.*/,
  /android\/app\/build\/.*/,
]);

module.exports = config;
