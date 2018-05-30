window.fbAsyncInit = function() {
    $.ajaxSetup({ cache: true });
    $.getScript('https://connect.facebook.net/en_US/sdk.js', function(){
    FB.init({
      appId: '334367743627528',
      cookie     : true,
      version: 'v2.8' // or v2.1, v2.2, v2.3, ...
    }); 
    $('#loginbutton,#feedbutton').removeAttr('disabled');
        FB.getLoginStatus(function(response) {
            statusChangeCallback(response);
        });
      });
    // FB.getLoginStatus(function(response) {
    //     statusChangeCallback(response);
    // });
};

/* FUNCIONES */

function loginUsingFacebook() {
    FB.login(function(response) {
        FB.getLoginStatus(function(response) {
            statusChangeCallback(response);
        });
    }, {
    scope: 'email', 
    return_scopes: true
    });
}

function logoutFacebook() {
  FB.logout(function(response) {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  });
      
}
/* Estatus del login */
function statusChangeCallback(response) {
 
  var fbLogin = document.getElementById('loginfacebook'), 
      fbLogout = document.getElementById('logoutfacebook');
  if (response.status === 'connected') {
    // Logged into your app and Facebook.
      // Logeado en la app y en facebook.
    fbLogin.style.display = 'none';
    fbLogout.style.display = 'inline-block';
    var accessToken = response.authResponse.accessToken;
    accesoUser(accessToken);
  } else if (response.status === 'not_authorized') {
    // The person is logged into Facebook, but not your app.
    // La persona esta logeado en facebook pero no en la app.
    //fbStatus.innerHTML = 'Please log into this app.';
    //greet.innerHTML = '';
  } else {
    // The person is not logged into Facebook, so we're not sure if
    // they are logged into this app or not.
      // La persona no esta logeado en facebook y tampoco en la app.
    var user = document.getElementById('user');  
    fbLogin.style.display = 'inline';
    fbLogout.style.display = 'none';
    fbLogout.style.display = 'none';
    user.innerHTML = '';
    //fbStatus.innerHTML = 'Login Using';
  }
}

// Here we run a very simple test of the Graph API after login is
// successful.  See statusChangeCallback() for when this call is made.
//function testAPI() {
function accesoUser(a) {
    //console.log('Welcome!  Fetching your information.... ');
    FB.api('/me',{fields:'id, name, first_name, last_name, email'}, function(response) {
        //console.log('Successful login for: ' + response.name);
        document.getElementById('user').innerHTML = 'Bienvenido, ' + response.name + '!';
        
    });
}