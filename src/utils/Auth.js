let isAuthorized=()=>{
    return localStorage.getItem("token")!==null;
}
export default isAuthorized;