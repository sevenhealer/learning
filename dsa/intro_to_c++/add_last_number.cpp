#include<iostream>
using namespace std;

int main(){
    int n,m;
    cin>>n>>m;
    int n_last, m_last;
    n_last = n%10;
    m_last = m%10;
    cout<<n_last+m_last;
}