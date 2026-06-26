#include<iostream>
using namespace std;

int main(){
    string str;
    //l1
    getline(cin, str);
    cout<<str<<endl;
    //l2
    //int 2 or 4 bytes(-10^9 -> 10^9), unsigned int 4 bytes(0 -> 2*10^9), long 4 or 8 bytes(-10^12 -> 10^12), long long 8 bytes(-10^18 -> 10^18), double
    unsigned x=10;
    //l3 observation (Both are same)
    int marks1;
    cin>>marks1;
    if(marks1<40){
        cout<<"Fail"<<endl;
    }
    else if(marks1>=40 && marks1<50){
        cout<<"D"<<endl;
    }
    else if(marks1>=50 && marks1<60){
        cout<<"C"<<endl;
    }
    else if(marks1>=60 && marks1<70){
        cout<<"B"<<endl;
    }
    else if(marks1>=70 && marks1<80){
        cout<<"A"<<endl;
    }
    else if(marks1>=80 && marks1<90){
        cout<<"E"<<endl;
    }
    else if(marks1>=90 && marks1<=100){
        cout<<"O"<<endl;
    }


    int marks2;
    cin>>marks2;

    if(marks2<40){
        cout<<"Fail"<<endl;
    }
    else if(marks2<50){
        cout<<"D"<<endl;
    }
    else if(marks2<60){
        cout<<"C"<<endl;
    }
    else if(marks2<70){
        cout<<"B"<<endl;
    }
    else if(marks2<80){
        cout<<"A"<<endl;
    }
    else if(marks2<90){
        cout<<"E"<<endl;
    }
    else if(marks2<=100){
        cout<<"O"<<endl;
    }


    return 0;
}