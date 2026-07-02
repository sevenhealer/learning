/*
E 
D E 
C D E 
B C D E 
A B C D E 
*/

#include<iostream>
using namespace std;

int main(){
    int n;
    cin>>n;
    for(int i=0; i<n; i++){
        char c = 'A'+n-i-1;
        for(int j=0; j<i+1; j++){
            cout<<c<<" ";
            c++;
        }
        cout<<endl;
    }
}