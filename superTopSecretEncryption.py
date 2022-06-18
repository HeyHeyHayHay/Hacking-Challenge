
#Example at the bottom

#FUNCTIONS

#IMPORTANT Use these functions to encrypt or decrypt a string (of lowercase letters or numbers or space) with a specific key (which is a number)
#turn plainText into cipherText. input (string, number)
def encrypt(plainText, key):
  cipherText = getCharCodes(plainText);
  cipherText = toLowerNumbers(cipherText);
  cipherText = encryptionAction(cipherText, key);
  cipherText = toHigherNumbers(cipherText);
  cipherText = arrayToString(cipherText);
  return cipherText


#turn cipherText into plainText. input (string, number)
def decrypt(cipherText, key) :
  plainText = getCharCodes(cipherText);
  plainText = toLowerNumbers(plainText);
  plainText = decryptionAction(plainText, key);
  plainText = toHigherNumbers(plainText);
  plainText = arrayToString(plainText);
  return plainText

#The rest of these functions are subset functions of encrypt and decrypt

#modulus that gives positives. input(number, number)
def mod(n, m) :
  return ((n % m) + m) % m

#turn plainText into array of Character codes. input(string)
def getCharCodes(plainText) :
  charCodes = []

  i = 0
  while i < len(plainText):
      charCodes.append(ord(plainText[i]))
      i += 1



  return charCodes


#turn array of character codes into 0-26. input(array)
def toLowerNumbers(array) :
  newArray = []

  i = 0
  while i < len(array):

      newArray.append(array[i] - 32);

      i += 1

  return newArray


#turn 0-26 back to character codes. input(array)
def toHigherNumbers(array) :
  newArray = [];


  i = 0
  while i < len(array):

      newArray.append(array[i] + 32);

      i += 1


  return newArray


#turn an array of character codes into string. input(array)
def arrayToString(array):

    # converting character array to string
    return "".join(chr(i) for i in array)


#turn plainText array into cipherText array. input(array, number)
def encryptionAction(array, key) :
  keyString = str(key)
  keyNumbers = getCharCodes(keyString)
  keyLength = len(keyNumbers)
  encryptedArray = []

  i = 0
  while i < len(array):

      j = 0
      while j < keyLength:

          if i%keyLength==j :

              newEntry = ( (array[i] + (10*keyNumbers[j])) % 95 )
              encryptedArray.append(newEntry)
          j += 1
      i += 1


  return encryptedArray


#turn cipherText array into plainText array. input(array, number)
def decryptionAction(array, key) :
  keyString = str(key)
  keyNumbers = getCharCodes(keyString)
  keyLength = len(keyNumbers)
  decryptedArray = []

  i = 0
  while i < len(array):
      j = 0
      while j < keyLength:
          if i % keyLength == j :

              newEntry =  mod(array[i] - (10*keyNumbers[j]), 95 )
              decryptedArray.append(newEntry)
          j += 1
      i += 1
  return decryptedArray


  #EXAMPLE


examplePlainText = "0123456789 ABC abcdefghijklmnopqrstuvwxyz"
print(examplePlainText)
exampleKey = 3095
print(exampleKey)

    #encrypt the example
exampleCipherText = encrypt(examplePlainText, exampleKey)
print(exampleCipherText)

    #decrypt the example
decryptedExampleCipherText = decrypt(exampleCipherText, exampleKey)
print(decryptedExampleCipherText)
