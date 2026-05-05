/*

input:6
output:
     *
    * *
   *   *
  *     *
 *       *
* * * * * *

*/

#include<iostream>
using namespace std;

int main(){
    int n;
    cin>>n;
    for(int i=0; i<n; i++){
        for(int k=0; k<n-1-i; k++){
            cout<<" ";
        }
        for(int j=0; j<=i; j++){
            if(j==0 || j==i){
                cout<<"* ";
            }
            else if(i==n-1){
                cout<<"* ";
            }
            else{
                cout<<"  ";
            }
        }
        cout<<endl;
    }
}