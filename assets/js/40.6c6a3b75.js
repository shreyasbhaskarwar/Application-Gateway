(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{329:function(t,e,a){"use strict";a.r(e);var n=a(14),i=Object(n.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"setup-for-oag-development"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setup-for-oag-development"}},[t._v("#")]),t._v(" Setup for OAG development")]),t._v(" "),e("h2",{attrs:{id:"preparation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#preparation"}},[t._v("#")]),t._v(" Preparation")]),t._v(" "),e("ul",[e("li",[t._v("Install Java 11 or higher")]),t._v(" "),e("li",[t._v("Install Maven")]),t._v(" "),e("li",[t._v("Install Git")]),t._v(" "),e("li",[t._v("Install IntelliJ (Community Version is fine)")]),t._v(" "),e("li",[t._v("git clone the OAG repository:\n"),e("ul",[e("li",[t._v("create a new folder for OAG:")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" oag\n")])])]),e("ul",[e("li",[t._v("jump into the folder:")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" oag\n")])])]),e("ul",[e("li",[t._v("clone the repository:")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/gianlucafrei/Application-Gateway.git\n")])])])])]),t._v(" "),e("h2",{attrs:{id:"import-project"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#import-project"}},[t._v("#")]),t._v(" Import project")]),t._v(" "),e("ul",[e("li",[t._v("Start IntelliJ.")]),t._v(" "),e("li",[t._v("Open project: ../oag/Application-Gateway/oag\n"),e("ul",[e("li",[t._v("This should trigger maven and download dependencies")])])]),t._v(" "),e("li",[t._v("Build of the whole project (select Build -> Build Project in the menu).\n"),e("ul",[e("li",[t._v("You will have to select a project JDK (IntelliJ prompts for this in the upper right corner.). OAG requires a SDK/JDK >= 11 and runs on Java 11 or higher.")])])])]),t._v(" "),e("h2",{attrs:{id:"run-project"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#run-project"}},[t._v("#")]),t._v(" Run project")]),t._v(" "),e("ul",[e("li",[t._v('Verify tests are green: Right click on the top level of the project ("oag" in the Project window) and select "Run All Tests"')]),t._v(" "),e("li",[t._v("Run the gateway:\n"),e("ul",[e("li",[t._v("Open class OWASPApplicationGatewayApplication")]),t._v(" "),e("li",[t._v("Click the green triangle (Line 7) to run OWASPApplicationGatewayApplication.main().\n"),e("ul",[e("li",[t._v("note that you need 3 client secrets (i.e. registered OAG as an application in Google, GitHub and oAuth0) to be fully functional with the default sample configuration.")]),t._v(" "),e("li",[t._v("For GitHub, this means you will have to register an "),e("a",{attrs:{href:"https://github.com/settings/applications/new",target:"_blank",rel:"noopener noreferrer"}},[t._v("OAuth App in GitHub"),e("OutboundLink")],1),t._v(". Not that the app needs to reflect your local OAG that runs in IntelliJ.")]),t._v(" "),e("li",[t._v("If you do not have these 3 client secrets you will see the following in the logs:")])])])])])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("WARN  - Environment variable "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'GOOGLE_CLIENT_SECRET'")]),t._v(" does not exist\nWARN  - Environment variable "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'GITHUB_CLIENT_SECRET'")]),t._v(" does not exist\nWARN  - Environment variable "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'AUTH0_CLIENT_SECRET'")]),t._v(" does not exist\n")])])]),e("ul",[e("li",[t._v("these 3 clientID's can be set as environment variables in the operating system or directly in IntelliJ as follows:\n"),e("ul",[e("li",[t._v("Menu: Run -> Edit Configuration")]),t._v(" "),e("li",[t._v('"+" (Add new Configuration) -> Application (or edit the existing entry)')]),t._v(" "),e("li",[t._v('select "org.owasp.oag.OWASPApplicationGatewayApplication" as Main Class')]),t._v(" "),e("li",[t._v('in the text field for "environment variables:" add the 3 Secrets: "GOOGLE_CLIENT_SECRET=xxxxx;GITHUB_CLIENT_SECRET=xxxxxx;AUTH0_CLIENT_SECRET=xxxxxx"')])])])]),t._v(" "),e("ul",[e("li",[t._v("Point your browser to: "),e("code",[t._v("http://localhost:8080/echo/")]),t._v(' -> Note "X-Oag-Status: anonymous" in the returned page\n'),e("ul",[e("li",[t._v('Click on "Login with Github"')]),t._v(" "),e("li",[t._v("Enter your GitHub credentials")]),t._v(" "),e("li",[t._v('If all works fine you will end up on localhost:8080 which displays "httpbin.org"')])])]),t._v(" "),e("li",[t._v("Point your browser again to: "),e("code",[t._v("http://localhost:8080/echo/")]),t._v(' -> Note "X-Oag-Status: authenticated" in the returned page')])]),t._v(" "),e("p",[t._v("Now you are ready to develop new features in OAG.\nWith this you are ready to develop.")])])}),[],!1,null,null,null);e.default=i.exports}}]);