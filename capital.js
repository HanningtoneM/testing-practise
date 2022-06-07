function capitalize(string) {
    if (Number.parseInt(string.charAt(0))){
      return "Enter a letter";
    }
    return string.charAt(0).toUpperCase() + string.slice(1); //slice takes from index1 to the end
  }
  
  module.exports = capitalize;