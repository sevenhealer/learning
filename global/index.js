export const admin = new Map()
export const user = new Map()
let flag = false
export function mapCheck(username){
    admin.forEach((value, key) => {
    if(key == username){
        flag = true;
    }
    });
    return flag
}
export function passCheck(username, password){
    return admin.get(username) == password
}