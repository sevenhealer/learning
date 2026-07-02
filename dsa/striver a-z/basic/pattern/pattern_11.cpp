/*
1
01
010
1010
10101
*/
#include<iostream>
using namespace std;

int flip(int val){
    return val==1 ? 0 : 1;
}

int main(){
    int n;
    cin>>n;
    int val = 0;
    for(int i=0; i<n; i++){
        for(int j=0; j<i+1; j++){
            val = flip(val);
            cout<<val;
        }
        cout<<endl;
    }
}