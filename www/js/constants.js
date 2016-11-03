/**
 * Created by john.nana on 11/3/2016.
 */
angular.module('starter.constants', [])
  .constant('API_ENDPOINT', {
    url: 'http://127.0.0.1:3000/api'
    //  For a simulator use: url: 'http://127.0.0.1:8080/api'
  })

  .constant('AUTH_EVENTS', {
    notAuthenticated: 'auth-not-authenticated',
    notAuthorized: 'auth-not-authorized'
  })

  .constant('USER_ROLES', {
    admin: 'admin_role',
    public: 'public_role'
  });

