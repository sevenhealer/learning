//n=10^9, m=10^9

#include<iostream>
using namespace std;

int main(){
    int n, m, sum, substract, division, mod;
    long long multiplication;
    cin>>n>>m;
    sum = n+m;
    substract = n-m;
    multiplication = 1LL*n*m; //multiplying with long long 1 to make everything long long 
    division = n/m;
    mod = n%m;
    cout<<n<<" + "<<m<<" = "<<sum<<endl;
    cout<<endl;
    cout<<n<<" - "<<m<<" = "<<substract<<endl;
    cout<<endl;
    cout<<n<<" * "<<m<<" = "<<multiplication<<endl;
    cout<<endl;
    cout<<n<<" / "<<m<<" = "<<division<<endl;
    cout<<endl;
    cout<<n<<" % "<<m<<" = "<<mod<<endl;
}