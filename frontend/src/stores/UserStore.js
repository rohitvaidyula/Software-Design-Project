import {extendObservable} from 'mobx';


/*User store*/ 

class UserStore {
    constructor() {
        extendObservable(this, {
            loading: true,
            isLoggedIn: true,
            username: ''
        })
    }
}

export default new UserStore();