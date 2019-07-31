class Auth {
    constructor() {
        this.authenticated = false
    }
    login(callback) {
        // fetch user, set JWT, user-id;
        this.authenticated = true;
        callback() // callback it's a function
    }
    logout(callback) {
        // clean storage, erase JWT, erase user data.
        this.authenticated = false;
        callback()
    }
    isAuthenticated(){
        // validate if the local storage data is available.
        return this.authenticated;
    }
}
export default new Auth()