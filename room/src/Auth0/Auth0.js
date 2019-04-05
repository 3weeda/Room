import auth0 from "auth0-js";

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: "dev-4n7pjz1e.auth0.com",
    clientID: "GUv5L0uRp7he1BLp_zb3P-BAp6_Bt771",
    redirectUri: "http://localhost:3000/room",
    responseType: "token id_token",
    scope: "openid"
  });

  login() {
    this.auth0.authorize();
  }
}
