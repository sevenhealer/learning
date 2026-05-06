/*

input: 6
output:
*          *
**        **
***      ***
****    ****
*****  *****
************
*****  *****
****    ****
***      ***
**        **
*          *

*/

#include <iostream>
using namespace std;

int main()
{
    int n;
    cin >> n;
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j <= i; j++)
        {
            cout << "*";
        }
        for (int k = 0; k < 2 * (n - 1 - i); k++)
        {
            cout << " ";
        }
        for (int l = 0; l <= i; l++)
        {
            cout << "*";
        }
        cout << endl;
    }

    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j <= n-2-i; j++)
        {
            cout << "*";
        }
        for (int k = 0; k < 2 * (i+1); k++)
        {
            cout << " ";
        }
        for (int l = 0; l <= n-2-i; l++)
        {
            cout << "*";
        }
        cout << endl;
    }
}