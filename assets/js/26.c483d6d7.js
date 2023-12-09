(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{320:function(t,e,a){"use strict";a.r(e);var s=a(14),n=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"login-providers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#login-providers"}},[t._v("#")]),t._v(" Login Providers")]),t._v(" "),e("p",[t._v("OWASP Application Gateway uses the concept of login providers for all kinds of authentication. With the login providers' settings, you can specify one or multiple ways users can authenticate themselves.")]),t._v(" "),e("p",[t._v("Example:")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("hosturi")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//example.com\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("loginProviders")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("youriam")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" oidc\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("authEndpoint")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//youriam.com/auth\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tokenEndpoint")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//youriam.com/token\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("clientId")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" foo\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("clientSecret")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" env"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("IAM_CLIENT_SECRET\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("scopes")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"openid"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"email"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("federatedLogoutUrl")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//youriam.com/logout"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("?")]),t._v("returnTo=https%3A%2F%2Fexample.com\n\n")])])]),e("h2",{attrs:{id:"configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),e("h3",{attrs:{id:"type"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#type"}},[t._v("#")]),t._v(" "),e("code",[t._v("type")])]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("type")]),t._v(" setting specifies which login provider implementation will be used. The "),e("code",[t._v("with")]),t._v(" settings then sets the specific configuration for this login provider.")]),t._v(" "),e("p",[t._v("Currently, the following two type providers are supported:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("oidc")]),t._v(" can be used for any public or private identity provider that implements oidc")]),t._v(" "),e("li",[e("code",[t._v("github")]),t._v(" implements GitHub Oauth2 based authentication")])]),t._v(" "),e("h4",{attrs:{id:"with"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#with"}},[t._v("#")]),t._v(" "),e("code",[t._v("with")])]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("with")]),t._v(" property specifies additional settings for the login provider. Please find the detailed configuration bellow:")]),t._v(" "),e("h2",{attrs:{id:"login-provider-types"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#login-provider-types"}},[t._v("#")]),t._v(" Login Provider Types")]),t._v(" "),e("h3",{attrs:{id:"openid-connect"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#openid-connect"}},[t._v("#")]),t._v(" OpenId-Connect")]),t._v(" "),e("p",[t._v("OWAG implements OpenId-Connect based authentication with the auth-code flow.")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("authEndpoint")]),t._v(": Specifies where URI of the authorization endpoint. The user will be redirected to this url")]),t._v(" "),e("li",[e("code",[t._v("tokenEndpoint")]),t._v(": Specifies the token endpoint from where OWAG can load the access and id token after the user was redirected back")]),t._v(" "),e("li",[e("code",[t._v("clientId")]),t._v(": Specifies the OAuth2 client id that is used by OWAG")]),t._v(" "),e("li",[e("code",[t._v("clientSecret")]),t._v(": Specifies the Oauth2 client secret that is sent by OWAG when the token endpoint is called. Danger: This is usually a sensitive value. It is therefore recommended to inject it via a PATH variable during runtime with the env: "),e("code",[t._v("prefix")]),t._v(".")]),t._v(" "),e("li",[e("code",[t._v("scopes")]),t._v(": Specifies the list of scopes that OWAG requests from the identity provider. Technically only "),e("code",[t._v("openid")]),t._v(" is required, but you can also add additional scopes like "),e("code",[t._v("email")]),t._v(" or idp specific scopes.")]),t._v(" "),e("li",[e("code",[t._v("federatedLogoutUrl")]),t._v("(optional) OIDC does not define how user can be logged out at the authorization server. However, most IPS provide a logout endpoint that can be used to log the user out, also on a IDP level. For first-party If this url is set the user will be redirected to it after the logout on OAG. If set, this overwrites the "),e("code",[t._v("redirectLogout")]),t._v(" from the session behaviour configuration.")])]),t._v(" "),e("p",[t._v("See also: "),e("a",{attrs:{href:"https://developer.okta.com/blog/2018/04/10/oauth-authorization-code-grant-type",target:"_blank",rel:"noopener noreferrer"}},[t._v("OAuth Authorization Code Grant Type"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"github"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#github"}},[t._v("#")]),t._v(" GitHub")]),t._v(" "),e("p",[t._v("Because GitHub authentication is also based on Oauth2 (Like OpenID-Connect is based on Oauth2) the configuration is very similar with the only difference that you need to request at least "),e("code",[t._v("user")]),t._v(" and "),e("code",[t._v("email")]),t._v(" as scopes. If you want to use the GitHub API on behalt of the user with your application you can specify additional scopes. You can find more information about GitHub specific scopes "),e("a",{attrs:{href:"https://developer.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"sign-in-endpoint"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sign-in-endpoint"}},[t._v("#")]),t._v(" Sign-in endpoint")]),t._v(" "),e("p",[t._v("The name of the login provider specifies the Sign-in endpoint your application needs to call to login the user. The Sign-in endpoint is always "),e("code",[t._v("/auth/{name of the login provider}/login")])]),t._v(" "),e("p",[t._v("For the example before your application need redirect the user to "),e("code",[t._v("https://example.com/auth/youriam/login")])]),t._v(" "),e("h2",{attrs:{id:"sample-configuration-for-different-identity-providers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sample-configuration-for-different-identity-providers"}},[t._v("#")]),t._v(" Sample configuration for different identity providers")]),t._v(" "),e("h3",{attrs:{id:"google"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#google"}},[t._v("#")]),t._v(" Google")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[t._v("    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("google")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" oidc\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("authEndpoint")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//accounts.google.com/o/oauth2/auth\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tokenEndpoint")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//oauth2.googleapis.com/token\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("clientId")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <google client id"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("clientSecret")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <google client secret"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("\n          "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("scopes")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"openid"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"email"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),e("h3",{attrs:{id:"auth0"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#auth0"}},[t._v("#")]),t._v(" Auth0")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[t._v("  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("auth0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" oidc\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("authEndpoint")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//<yourdomain"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v(".auth0.com/authorize\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tokenEndpoint")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//<yourdomain"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v(".auth0.com/oauth/token\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("clientId")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" < auth0 client id"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("clientSecret")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  < auth0 client secret"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("scopes")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"openid"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"email"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("federatedLogoutUrl")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//<yourdomain"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v(".auth0.com/v2/logout"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("?")]),t._v("client_id= < auth0 client id"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token important"}},[t._v("&returnTo=http%3A%2F%2Flocalhost%3A8080")]),t._v("\n")])])]),e("h3",{attrs:{id:"github-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#github-2"}},[t._v("#")]),t._v(" GitHub")]),t._v(" "),e("p",[t._v("Github does not implement OIDC. This is why we need to use the special github driver.")]),t._v(" "),e("p",[t._v("See also: "),e("a",{attrs:{href:"https://developer.github.com/apps/building-oauth-apps/creating-an-oauth-app/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Creating an OAuth app"),e("OutboundLink")],1)]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("github")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" github\n    "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("authEndpoint")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//github.com/login/oauth/authorize\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tokenEndpoint")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" https"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//github.com/login/oauth/access_token\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("clientId")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <your github client id"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("clientSecret")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" env"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("GITHUB_CLIENT_SECRET\n      "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("scopes")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"user"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"email"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);