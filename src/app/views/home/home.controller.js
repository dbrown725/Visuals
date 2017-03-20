'use strict';

var message = 'temp message';

/**
 * @ngdoc controller
 *
 * @name HomeCtrl
 *
 * @description
 * Controller for Visuals
 */
(function() {

  angular
    .module('Visuals')
    .controller('HomeCtrl', HomeCtrl);

  function HomeCtrl($scope) {
    var vm = this;
    vm.user = {};
    vm.loggedIn = false;
    vm.signOut = signOut;
    vm.inputEmail = '';
    vm.inputPassword = '';
    vm.inputRegEmail = '';
    vm.inputRegPassword = '';
    vm.message = message;
    vm.signInWithEmailAndPassword = signInWithEmailAndPassword;
    vm.resetPassword = resetPassword;
    vm.verifyEmail = verifyEmail;
    vm.signInWithGoogle = signInWithGoogle;
    vm.signInWithFacebook = signInWithFacebook;
    vm.changeEmail = changeEmail;
    vm.registerUser = registerUser;
    vm.passwordUser = false;
    vm.authenticationProvider = '';
    vm.userToken = '';
    vm.inputNewEmail = '';
    vm.changeEmailPassword = '';

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log('user signed in. user:', user);
        vm.user = user;
        vm.inputEmail = '';
        vm.inputPassword = '';
        firebase.auth().currentUser.getToken(/* forceRefresh */ true).then(function(idToken) {
          vm.userToken = idToken;
          console.log('vm.userToken', vm.userToken);
          // Send token to your backend via HTTPS
          // ...
        }).catch(function(error) {
          console.log('vm.userToken error', error);
          // Handle error
        });

        user.providerData.forEach(function (profile) {
          vm.authenticationProvider = profile.providerId;
          if(profile.providerId === 'password') {
            vm.passwordUser = true;
          }
          console.log('Sign-in provider: '+profile.providerId);
          console.log('  Provider-specific UID: '+profile.uid);
          console.log('  Name: '+profile.displayName);
          console.log('  Email: '+profile.email);
          console.log('  Photo URL: '+profile.photoURL);
        });
        vm.loggedIn = true;

      } else {
        console.log('user signed out. user:', user);
        vm.loggedIn = false;
        vm.user = {};
        // User is signed out.
        // ...
      }
      $scope.$apply();

    });

    firebase.auth().getRedirectResult().then(function(result) {
      if (result.credential) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        console.log('google/facebook access token', token);
        // ...
      }
      // The signed-in user info.
      var user = result.user;
      console.log('google/facebook user', user);
      console.log('google/facebook result', result);
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
      console.log('google/facebook getRedirectResult error', error);
    });

    function signOut() {
      console.log('in sign out');
      firebase.auth().signOut().then(function() {
        console.log('Signed Out');
        message = 'user signed out';
      }, function(error) {
        console.error('Sign Out Error', error);
        message = 'user sign out failed ' + error;
      });
    }

    function resetPassword() {
      console.log('in resetPassword');
      var user = firebase.auth().currentUser;
      firebase.auth().sendPasswordResetEmail(user.email).then(function() {
        message = 'password reset email sent';
        console.log('sendPasswordResetEmail email sent');
      }, function(error) {
        message = 'password reset email failed ' + error;
        console.log('sendPasswordResetEmail email failed!!!!!!', error);
      });
    }

    function verifyEmail() {
      console.log('in verifyEmail');
      var user = firebase.auth().currentUser;
      user.sendEmailVerification().then(function() {
         console.log('email sent');
       }, function(error) {
         console.log('email send error', error);
       });
    }

    function signInWithEmailAndPassword() {
      console.log('in sign in');
      firebase.auth().signInWithEmailAndPassword(vm.inputEmail, vm.inputPassword).catch(function(error) { //someRandomPassword4444
        // Handle Errors here.
          console.log('errorCode', error.code);
          console.log('errorMessage', error.message);
        // ...
      });
    }

    //deloitte email someRandomPassword4444
    function changeEmail() {
      console.log('in changeEmail');
      var user = firebase.auth().currentUser;
      var credential = firebase.auth.EmailAuthProvider.credential(
          user.email,
          vm.changeEmailPassword
      );
      console.log('credential', credential);
      user.reauthenticate(credential).then(function() {
        console.log('reauthenticate worked');
        var user = firebase.auth().currentUser;
        user.updateEmail(vm.inputNewEmail).then(function() {
          console.log('email update worked');
        }, function(error) {
          console.log('email update failed', error);
        });
      });
    };

    function signInWithGoogle() {
      console.log('in signInWithGoogle');
      firebase.auth().signInWithRedirect(provider);
    }

    function signInWithFacebook() {
      console.log('in signInWithFacebook');
      facebookProvider.addScope('email');
      firebase.auth().signInWithRedirect(facebookProvider);
    }

    function registerUser() {
      console.log('in registerUser vm.inputRegEmail, vm.inputRegPassword', vm.inputRegEmail, vm.inputRegPassword);
      firebase.auth().createUserWithEmailAndPassword(vm.inputRegEmail, vm.inputRegPassword).catch(function(error) { //someRandomPassword5555
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log('errorCode', errorCode);
        console.log('errorMessage', errorMessage);
      });
    }

    // User delete works
    // var user = firebase.auth().currentUser;
    // user.delete().then(function() {
    //   console.log('user deleted');
    // }, function(error) {
    //   console.log('user deletion failed!!!!!!');
    // });

    // reauthenticate works
    // Some security-sensitive actions—such as deleting an account,
    // setting a primary email address, and changing a password—require that the user has recently signed in.
    // var user = firebase.auth().currentUser;
    // var credential = firebase.auth.EmailAuthProvider.credential(
    //     user.email,
    //     'someRandomPassword3333'
    // );
    //Prompt the user to re-provide their sign-in credentials
    //user.reauthenticate(credential).then(function() {
    //   console.log('reauthenticate worked');
      //Update password works
      // var newPassword = 'someRandomPassword3333';
      // user.updatePassword(newPassword).then(function() {
      //   console.log('password changed to:', newPassword);
      // }, function(error) {
      //   console.log('password change failed!!!', error);
      // });
    // }, function(error) {
    //   console.log('reauthenticate failed', error);
    // });

    //Update password works
    // var newPassword = 'someRandomPassword3333';
    // user.updatePassword(newPassword).then(function() {
    //   console.log('password changed to:', newPassword);
    // }, function(error) {
    //   console.log('password change failed!!!', error);
    // });
  // }, function(error) {
  //   console.log('reauthenticate failed', error);
  // });

    // Update user's profile worked
    // var user = firebase.auth().currentUser;
    // user.updateProfile({
    //   displayName: 'Dave Brown',
    //   photoURL: 'https://logo.clearbit.com/target.com'
    // }).then(function() {
    //   console.log('updateProfile worked');
    // }, function(error) {
    //   console.log('updateProfile failed', error);
    // });


  }



})();
