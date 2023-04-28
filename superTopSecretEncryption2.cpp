#include <iostream>
using namespace std;


string plainText(){
  return "abcdefghijklmnopqrstuvwxyz";
}

string key(){
  return "41355";
}

int getCharCode(char x){
  return int(x);
}


int main(){





  cout << getCharCode('a');

  return 0;
}
