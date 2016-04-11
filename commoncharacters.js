commonCharacters = function(string1, string2){
  var commonChars = '';
  string1 = string1.replace(/\W/g, '').toLowerCase();
  string2 = string2.replace(/\W/g, '').toLowerCase();
  for(var i = 0; i < string1.length; i++) {
    for(var j = 0; j < string2.length; j++) {
      if(string1[i] === string2[j] && (commonChars.indexOf(string2[j]) === -1)) {
        commonChars+= string2[j];
      }
    }
  }
  return commonChars;
};
