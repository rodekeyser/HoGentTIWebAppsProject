export default class User {
    constructor(AppConstants, $http){
        'ngInject';
        
        this._AppConstants = AppConstants;
        this._$http = $http;

        this.current = null; //when u start it, nobody will be logged in
    }

    attemptAuth(type, credentials){
        let route = (type === 'login') ? '/login' : '';
        return this._$http({
            url: this._AppConstants.api + '/users' + route,
            method: 'POST',
            data: {
                user: credentials
            }
        }).then(
            (res) => {
                this.current = res.data.user;

                return res;
            }
        )
    }

}