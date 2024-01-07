
class LoginSystem {
    login(username, password) {
        try {
            window.localStorage.setItem("data", {"username": username, "password": password})
        } catch (error) {
            console.error('Error setting local storage: ', error)
        }
    } 
}

class UserHandler {

}