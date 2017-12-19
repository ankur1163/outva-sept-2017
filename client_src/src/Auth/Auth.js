import history from '../history';
import auth0 from 'auth0-js';


export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'app1163.auth0.com',
    clientID: '0ZxhmDKrojya1j85kPsQEdUgXUvmKdYr',
    redirectUri: 'http://localhost:3000/apphome',

    responseType: 'token id_token',
    scope: 'profile'
  });

  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.getProfile = this.getProfile.bind(this);
  }

  login() {
    this.auth0.authorize();
  }

  getAccessToken() {
      const accessToken = localStorage.getItem('access_token');
      console.log("access token from ",localStorage.getItem('access_token'))
      console.log("acces token is ",accessToken)
      if (!accessToken) {
        throw new Error('No access token found');
      }

      else{
          return accessToken;
      }

    }
  getProfile(cb) {
  //let accessToken = localStorage.getItem("accessToken");;
  console.log("inside getprofile")
  let accessToken = this.getAccessToken();

  this.auth0.client.userInfo(accessToken, (err, profile) => {
    if (profile) {
      localStorage.setItem('nickname', profile.nickname);
      localStorage.setItem('name', profile.name);
      localStorage.setItem('picture', profile.picture);
      localStorage.setItem('updated_at', profile.updated_at);
      console.log("profile is ",profile)
      this.userProfile = profile;
    }
    //cb(err, profile);
    console.log("err is ",err)
  });
}

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        history.replace('/apphome');
      } else if (err) {
        history.replace('/apphome');
        console.log(err);
        alert(`Error: ${err.error}. Check the console for further details.`);
      }
    });
  }

  setSession(authResult) {
    console.log("enetred in setsession ")

    // Set the time that the access token will expire at
    let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    console.log("entered in session")
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);

    localStorage.setItem('expires_at', expiresAt);
    console.log("access_token",authResult.accessToken,"id_token",authResult.idToken,"expires_at",expiresAt)
    console.log("access token from ",localStorage.getItem('access_token'))
    // navigate to the home route
    history.replace('/apphome');
    this.getProfile()
  }

  logout() {
    // Clear access token and ID token from local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // navigate to the home route
    history.replace('/home');
  }

  isAuthenticated() {
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    console.log("expires at ",expiresAt,new Date().getTime() < expiresAt)
    return new Date().getTime() < expiresAt;
  }
}
