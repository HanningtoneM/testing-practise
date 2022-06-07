function stringLength(string) {
    if (string.length > 1 && string.length < 10) {
      return true;
    }
    return string.length;
  }
  
  module.exports = stringLength;