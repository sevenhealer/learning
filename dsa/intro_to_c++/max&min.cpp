#include<iostream>
using namespace std;

int main(){
    int a, b, max, min;
    cin>>a>>b;
    if(a>b){
        max = a;
        min = b;
    }else{
        max = b;
        min = a;
    }
    cout<<"Min = "<<min<<endl;
    cout<<"Max = "<<max;
}