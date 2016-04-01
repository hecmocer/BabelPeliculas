angular.module("moviedb").service("Login", [function() {
    this.user = null;

    this.currentUser = function() {
        this.user = localStorage.getItem('user') || null;
        return this.user;
    };

    this.login = function(user) {
        this.user = localStorage.setItem('user', user);
    };

    this.logout = function() {
        localStorage.removeItem('user');
        this.user = null;
    };
}])
