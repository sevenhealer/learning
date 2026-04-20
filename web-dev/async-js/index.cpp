#include<iostream>
using namespace std;

int sum(int a, int b){
    return a+b;
}

int subtract(int a, int b){
    return a-b;
}

int multiply(int a, int b){
    return a*b;
}

int doOperation(int a, int b, int (*s)(int, int)){
    return (*s)(a,b);
}

int (*op())(int a, int b, int (*s)(int, int)){
    return doOperation;
}

int main(){
    cout<<doOperation(10, 20, &sum)<<endl;
    cout<<op()(10, 20, sum);
}