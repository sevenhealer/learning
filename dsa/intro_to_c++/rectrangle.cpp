#include<iostream>
using namespace std;

int main(){
    int length, breadth, area, perimeter;
    cin>>length>>breadth;
    area = length*breadth;
    perimeter = 2*(length+breadth);
    cout<<"Area = "<<area<<endl;
    cout<<"Perimeter = "<<perimeter;
}