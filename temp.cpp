#include<iostream>
using namespace std;

int main(){
    int arr1[1] = {1};
    int *ptr1 = &arr1[0];
    int arr2[2] = {1,4};
    int *ptr2 = &arr2[0];
    int arr3[3]= {1,2,1};
    int *ptr3 = &arr3[0];
    int value = *(arr2+1);

    printf("%d", value);  //arr2[1] = *(arr2+4)
    // int* arr[3] = {ptr1, ptr2, ptr3};
    // printf("%d", arr[0][0]);
    // int* arr = (int *)malloc(5*sizeof(int));
    // cout<<sizeof(arr);
    return 0;
}