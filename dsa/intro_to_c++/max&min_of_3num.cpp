#include<iostream>
using namespace std;

int maxFunc(int a, int b){
    if(a>b){
        return a;
    }
    else{
        return b;
    }
}

int minFunc(int a, int b){
    if(a<b){
        return a;
    }
    else{
        return b;
    }
}

int main(){
    int a, b, c, max, min;
    cin>>a>>b>>c;
    max = maxFunc(a, maxFunc(b,c));
    min = minFunc(a, minFunc(b,c));
    cout<<"Min = "<<min<<endl;
    cout<<"Max = "<<max;
}