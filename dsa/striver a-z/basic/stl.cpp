//stl library: Algorithms, Containers, *Functions, Iterators
#include<iostream>
#include<list>
#include<set>
#include<unordered_set>
#include<map>
#include<algorithm>
using namespace std;

bool comp(pair<int, int> p1, pair<int, int> p2){
        if(p1.first < p2.first ) return true;
        if(p1.first > p2.first) return false;

        if(p1.second > p2.second) return true;
        return false;
}

int main(){

    //Containers
    //Pair
    pair<int, int> p = {1, 3};
    cout<<p.first<<" "<<p.second<<endl;

    pair<int, pair<int, int>> p1 = {1, {2, 3}};
    cout<<p1.second.first<<endl;

    pair<int, char> arr[] = {{1, 'a'}, {2, 'b'}, {3, 'c'}};
    cout<<arr[1].first<<" "<<arr[1].second<<endl;

    //Vector
    vector<int> v = {1, 2, 3, 4, 5, 6, 7};
    cout<<v[0]<<" "<<v.at(1)<<endl;
    v.push_back(8);
    v.emplace_back(9);
    cout<<v.at(8)<<endl;

    //predefined size with value
    vector<pair<int, int>> vec(3, {0, 0});
    cout<<"vec[1] = {"<<vec.at(1).first<<", "<<vec[1].second<<"}"<<endl;
    vec.push_back({1, 1});
    vec.emplace_back(2, 2);


    //iterator
    vector<pair<int, int>>::iterator it = vec.begin();
    it += 3;
    cout<<"vec[3]= {"<<(*it).first<<", "<<it->second<<"}"<<endl;

    vector<pair<int, int>>::iterator it1 = vec.end(); //pointing just after last element
    it1--;
    cout<<"vec[4]= {"<<(*it1).first<<", "<<it1->second<<"}"<<endl;

    auto it2 = vec.rend(); //reverse end. pointing before the starting element
    it2 -= 1;
    cout<<"vec[1]= {"<<(*it2).first<<", "<<it2->second<<"}"<<endl;

    auto it3 = vec.rbegin(); //reverse begin. pointing after the last element
    it3 += 1;
    cout<<"vec[3]= {"<<(*it3).first<<", "<<it3->second<<"}"<<endl;

    cout<<endl;
    int count = 0;
    for(auto it = vec.begin(); it != vec.end(); it++){
        cout<<"vec["<<count<<"] = {"<<it->first<<", "<<(*it).second<<"}"<<endl;
        count++;
    }
    //for each
    cout<<endl;
    count = 0;
    for(auto n : vec){
        cout<<"vec["<<count<<"] = {"<<n.first<<", "<<n.second<<"}"<<endl;
        count++;
    }

    cout<<endl;
    
    //delete
    vec.erase(vec.begin() + 1); //delete 1th element
    count = 0;
    for(auto n : vec){
        cout<<"vec["<<count<<"] = {"<<n.first<<", "<<n.second<<"}"<<endl;
        count++;
    }

    cout<<endl;

    vec.erase(vec.begin(), vec.begin()+1);    //erase[1st_del_element, last_del_element+1)   [ele1, ele2)
    count = 0;
    for(auto n : vec){
        cout<<"vec["<<count<<"] = {"<<n.first<<", "<<n.second<<"}"<<endl;
        count++;
    }
    cout<<endl;

    //insert
    vec.insert(vec.begin()+3, {3, 3});  //insert(loc, element)

    vec.insert(vec.begin()+4, 2, {4, 4}); //insert(loc, how many same element, element)

    vector<pair<int, int>> new_vec = {{5, 5}, {6, 6}, {7, 7}};
    vec.insert(vec.begin()+6, new_vec.begin(), new_vec.end()); //insert(loc, new_vec.begin(), new_vec.end());

    count = 0;
    for(auto n : vec){
        cout<<"vec["<<count<<"] = {"<<n.first<<", "<<n.second<<"}"<<endl;
        count++;
    }
    
    cout<<endl<<"Size: "<<vec.size()<<endl;

    //pop_back
    vec.pop_back(); //remove 1st element

    new_vec.swap(vec); // new_vec = vec , vec = new_vec

    new_vec.clear(); //turn new_vec to {};
    cout<<new_vec.empty(); //return 1 or true if empty;

    cout<<endl;
    count = 0;
    for(auto n : vec){
        cout<<"vec["<<count<<"] = {"<<n.first<<", "<<n.second<<"}"<<endl;
        count++;
    }

    //list (like doubly linked-list) easy to add at front push_front()
    list<pair<int, int>> l = {{1, 1}, {2, 2}, {3, 3}};
    l.push_back({4, 4});
    l.push_front({0, 0});

    //rest same emplace_front, emplace_back, insert, erase, swap, pop_back, empty, clear;

    //deque
    cout<<endl<<"Deque: "<<endl;
    deque<int> d;
    d.push_back(1);
    d.push_front(0);
    cout<<"Back: "<<d.back()<<endl;
    cout<<"Front: "<<d.front();
    d.emplace_back(2);
    d.pop_front();
    d.pop_back();


    cout<<endl;
    count = 0;
    for(auto n : d){
        cout<<"d["<<count<<"] = {"<<n<<"}"<<endl;
        count++;
    }
    cout<<endl;

    //stack
    cout<<"Stack: "<<endl;
    stack<int> s;
    s.push(1);
    s.emplace(2);
    s.push(3);
    cout<<"Top: "<<s.top()<<endl;
    s.pop();
    cout<<endl;

    //same size, swap, empty

    //queue
    cout<<"Queue: "<<endl;
    queue<int> q;
    q.push(1);
    q.push(2);
    q.emplace(3);
    cout<<"Back: "<<q.back()<<endl;
    q.pop();
    cout<<"Front: "<<q.front()<<endl; //top is front
    cout<<endl;

    //priority_queue (maintain max on first)
    cout<<"Priority Queue: "<<endl;
    priority_queue<int> pq;
    pq.push(3);
    pq.push(2);
    pq.push(7);
    pq.push(10);
    pq.push(0);

    pq.pop();

    cout<<"Top: "<<pq.top()<<endl;

    //if need to change the order min on first
    priority_queue<int, vector<int>, greater<int>> pqr;
    pqr.push(3);
    pqr.push(2);
    pqr.push(7);
    pqr.push(10);
    pqr.push(0);

    pqr.pop();

    cout<<"Top: "<<pqr.top()<<endl;

    //Set (sorted element, same emement stored 1 time). Everything take logarithmic time 
    cout<<endl<<"Set: "<<endl;
    set<int> st;
    st.insert(1);
    st.insert(1);
    st.insert(2);
    st.insert(3);
    st.emplace(4);
    st.insert(5);
    st.emplace(6);

    st.erase(1);       //take logarithmic time
    set<int>:: iterator it4 = st.find(2);
    st.erase(it4);     //take constant time

    set<int>:: iterator it5 = st.find(3);
    set<int>:: iterator it6 = st.find(5);

    st.erase(it5, it6);

    for(set<int>::iterator it = st.begin(); it!=st.end(); it++){
        cout<<*it<<endl;
    }

    cout<<st.count(4)<<endl;

    set<int>::iterator it7 = st.lower_bound(5);
    set<int>::iterator it8 = st.upper_bound(6);


    //Multiset (sorted element, same element stored 1 time). Everything take logarithmic time 
    cout<<endl<<"Multiset: "<<endl;
    multiset<int> ms;
    ms.insert(1);
    ms.insert(1);
    ms.insert(1);
    ms.insert(2);
    ms.insert(2);
    ms.insert(2);
    ms.insert(2);
    ms.insert(3);

    ms.erase(1); ///delete all 1;

    for(set<int>::iterator it = ms.begin(); it!=ms.end(); it++){
        cout<<*it<<endl;
    }

    cout<<endl;

    ms.erase(ms.find(2), ++ms.find(2)); //ms.find(2) point to 1st 2, and ms.find(2)+2 point to last 2;

    for(set<int>::iterator it = ms.begin(); it!=ms.end(); it++){
        cout<<*it<<endl;
    }

    //unordered_set (unsorted element, same element stored 1 time). all op take mostly O(1), worst case O(n)
    unordered_set<int> us;

    //map logarithmic time
    cout<<endl<<"Map: "<<endl;
    map<int, pair<char, char>> m;

    m.insert({1, {'a', 'b'}});
    m[2] = {'b', 'c'};

    cout<<m[1].second<<endl;

    map<int, pair<char, char>>::iterator it9 = m.find(2);

    for(auto it = m.begin(); it!=m.end(); it++){
        cout<<"m["<<(*it).first<<"] = {"<<it->second.first<<", "<<(*it).second.second<<"}"<<endl;
    }

    //Multimap

    //unordered_map mostly O(1), worst_case O(n)


    //Algorithms

    cout<<endl<<"Algorithms: "<<endl;

    vector<int> ve = {5, 6, 1, 4, 12, 53, 15, 12, 8, 4};
    sort(ve.begin()+6, ve.end());

    for(auto n: ve){
        cout<<n<<" ";
    }

    sort(ve.begin(), ve.end(), greater<int>());
    cout<<endl<<"Reversed sorted: "<<endl;

    for(auto n: ve){
        cout<<n<<" ";
    }

    cout<<endl;

    //sorting my own way using comparator
    vector<pair<int, int>> v1 = {{9, 5}, {0, 4}, {5, 3}, {3, 9}, {3, 3}, {0, 6}, {9, 2}};

    sort(v1.begin(), v1.end());

    cout<<"Normal Sort: ";

    for(auto n: v1){
        cout<<"{"<<n.first<<", "<<n.second<<"}, ";
    }

    cout<<endl;

    sort(v1.begin(), v1.end(), comp);

    cout<<"Sort using comperetor: ";

    for(auto n: v1){
        cout<<"{"<<n.first<<", "<<n.second<<"}, ";
    }
    cout<<endl;
}