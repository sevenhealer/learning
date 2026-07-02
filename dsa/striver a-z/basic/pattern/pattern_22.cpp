/*
4 4 4 4 4 4 4 
4 3 3 3 3 3 4 
4 3 2 2 2 3 4 
4 3 2 1 2 3 4 
4 3 2 2 2 3 4 
4 3 3 3 3 3 4 
4 4 4 4 4 4 4 
*/
#include<iostream>
using namespace std;

int main(){
    int n;
    cin>>n;
    for(int i=0; i<2*n-1; i++){
        for(int j=0; j<2*n-1; j++){
            int distance_from_right = 2*(n-1)-j;
            int distance_from_down = 2*(n-1)-i;
            int low = min(i, min(j, min(distance_from_down, distance_from_right)));
            cout<<4-low<<" ";
        }
        cout<<endl;
    }
}