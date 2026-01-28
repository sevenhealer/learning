export const admin = new Map();
export const user = new Map(); 
export const link=new Map();  

export function mapcheck(username) {
    let flag=false;
      admin.forEach((value,key)=>{  
         if(key==username) 
            flag=true;
      });
      return flag;
} 

//return statement in for each only returns from the for each so dont use return inside it  
//flag has to be in the loop as global flag doesnt reset 

export function passcheck(username, password) {
    return admin.get(username) == password;
};  

export function usermapcheck(username){ 
    let flag=false;
    user.forEach((value,key)=>{ 
           if(key==username) 
            flag=true;
    }); 
    return flag;
}

export function usercheck(username,password) 
{  
    return user.get(username)==password;
};