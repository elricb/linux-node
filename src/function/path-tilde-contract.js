module.exports = function(path) {
  return path.replace(require('os').homedir(), "~");
};
