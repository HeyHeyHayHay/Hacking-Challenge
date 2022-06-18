

//EXAMPLE
  let examplePlainText = "0123456789 ABC abcdefghijklmnopqrstuvwxyz";
  let exampleKey = 3095;

  //encrypt the example
    let exampleCipherText = encrypt(examplePlainText, exampleKey);
    console.log(exampleCipherText);

  //decrypt the example
    let decryptedExampleCipherText = decrypt(exampleCipherText, exampleKey);
    console.log(decryptedExampleCipherText);

//FUNCTIONS

//IMPORTANT Use these functions to encrypt or decrypt a string (of lowercase letters or numbers or space) with a specific key (which is a number)
//turn plainText into cipherText. input (string, number)
function encrypt(plainText, key) {
  let cipherText = getCharCodes(plainText);
  cipherText = toLowerNumbers(cipherText);
  cipherText = encryptionAction(cipherText, key);
  cipherText = toHigherNumbers(cipherText);
  cipherText = arrayToString(cipherText);
  return cipherText;
};

//turn cipherText into plainText. input (string, number)
function decrypt(cipherText, key) {
  let plainText = getCharCodes(cipherText);
  plainText = toLowerNumbers(plainText);
  plainText = decryptionAction(plainText, key);
  plainText = toHigherNumbers(plainText);
  plainText = arrayToString(plainText);
  return plainText;
};

//The rest of these functions are subset functions of encrypt and decrypt

//modulus that gives positives. input(number, number)
function mod(n, m) {
  return ((n % m) + m) % m;
};

//turn plainText into array of Character codes. input(string)
function getCharCodes(plainText) {
  var charCodes = [];

  for (var i = 0; i < plainText.length; i++) {
    charCodes.push(plainText.charCodeAt(i));
  }

  return charCodes;
};

//turn array of character codes into 0-26. input(array)
function toLowerNumbers(array) {
  var newArray = [];

  for (var i = 0; i < array.length; i++) {

    newArray.push(array[i] - 32);

  };
  return newArray;
};

//turn 0-26 back to character codes. input(array)
function toHigherNumbers(array) {
  var newArray = [];

  for (var i = 0; i < array.length; i++) {

    newArray.push(array[i] + 32);

  };

  return newArray;
};

//turn an array of character codes into string. input(array)
function arrayToString(array) {
  return array.map(function(code) {
    return String.fromCharCode(code);
  }).join('');
}

//turn plainText array into cipherText array. input(array, number)
function encryptionAction(array, key) {
  let keyString = key.toString();
  let keyNumbers = getCharCodes(keyString);
  var keyLength = keyNumbers.length;
  var encryptedArray = [];
  for (let i = 0; i < array.length; i++){
    for (let j = 0; j < keyLength; j++){
      if (i%keyLength==j) {

        var newEntry = ( (array[i] + (10*keyNumbers[j])) % 95 )
        encryptedArray.push(newEntry);
        
      };
    };
  };
  return encryptedArray;
};

//turn cipherText array into plainText array. input(array, number)
function decryptionAction(array, key) {
  let keyString = key.toString();
  let keyNumbers = getCharCodes(keyString);
  var keyLength = keyNumbers.length;
  var decryptedArray = [];
  for (let i = 0; i < array.length; i++){

    for (let j = 0; j < keyLength; j++){

      if (i%keyLength==j) {

        var newEntry =  mod(array[i] - (10*keyNumbers[j]), 95 )

        decryptedArray.push(newEntry);

      };
    };
  };
  return decryptedArray;
};
