/*

input: 6
output:
0
10
010
1010
01010
101010

*/

#include<iostream>
using namespace std;

int changeFlag(int flag){
    if(flag==1) return 0;
    else return 1;
}

int main(){
    int n;
    cin>>n;
    int outerFlag = 0;
    for(int i=0; i<n; i++){
        int innerFlag = outerFlag;
        for(int j=0; j<=i; j++){
            cout<<innerFlag;
            innerFlag = changeFlag(innerFlag);
        }
        cout<<endl;
        outerFlag = changeFlag(outerFlag);
    }
    return 0;
}