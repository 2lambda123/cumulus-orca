"use strict";(self.webpackChunkorca_website=self.webpackChunkorca_website||[]).push([[1944],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>v});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,v=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?o.createElement(v,i(i({ref:t},c),{},{components:n})):o.createElement(v,i({ref:t},c))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2247:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var o=n(7462),r=(n(7294),n(3905));const a={id:"contrib-documentation-env",title:"Development Environment",desc:"Provides basic information on setting up an ORCA documentation development environment."},i=void 0,l={unversionedId:"developer/development-guide/documentation/contrib-documentation-env",id:"developer/development-guide/documentation/contrib-documentation-env",title:"Development Environment",description:"Editing and updating the website only requires a text editor and git but, in",source:"@site/docs/developer/development-guide/documentation/documentation-dev-env.md",sourceDirName:"developer/development-guide/documentation",slug:"/developer/development-guide/documentation/contrib-documentation-env",permalink:"/cumulus-orca/docs/developer/development-guide/documentation/contrib-documentation-env",draft:!1,editUrl:"https://github.com/nasa/cumulus-orca/edit/develop/website/docs/developer/development-guide/documentation/documentation-dev-env.md",tags:[],version:"current",frontMatter:{id:"contrib-documentation-env",title:"Development Environment",desc:"Provides basic information on setting up an ORCA documentation development environment."},sidebar:"dev_guide",previous:{title:"Documentation Introduction",permalink:"/cumulus-orca/docs/developer/development-guide/documentation/contrib-documentation-intro"},next:{title:"Adding New Content",permalink:"/cumulus-orca/docs/developer/development-guide/documentation/contrib-documentation-add"}},s={},u=[{value:"Creating the Development Environment",id:"creating-the-development-environment",level:2},{value:"Installing the Test Harness",id:"installing-the-test-harness",level:2},{value:"Running the Development Server",id:"running-the-development-server",level:2},{value:"Building the ORCA Website Locally",id:"building-the-orca-website-locally",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Editing and updating the website only requires a text editor and git but, in\norder to verify links and the overall website build, a local development environment\nshould be created. This pages discusses the setup, running, building, and testing\nof the Docusarus website for the ORCA GitHub pages."),(0,r.kt)("h2",{id:"creating-the-development-environment"},"Creating the Development Environment"),(0,r.kt)("p",null,"Setting up the development environment consists of three primary tasks,"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Cloning the cumulus-orca GitHub repository"),(0,r.kt)("li",{parentName:"ul"},"Installing the proper Node.js and npm versions"),(0,r.kt)("li",{parentName:"ul"},"Installing the proper node packages for the cumulus-orca documentation.")),(0,r.kt)("p",null,"The installation steps below goes into further details."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install the latest ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nvm-sh/nvm"},"Node Version Manager (nvm)")," application to manage Node.js and npm versions."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install the proper Node.js and npm versions to your machine. Currently Node v16.15.1 should be used."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"nvm install v16.15.1\nnvm use v16.15.1\nnpm install npm@latest -g\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Clone the cumulus-orca repository to your local machine."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/nasa/cumulus-orca.git\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Move to the ",(0,r.kt)("inlineCode",{parentName:"p"},"website")," directory under the cumulus-orca local git repository."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"cd cumulus-orca/website\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install the additional node packages needed to create and validate the webpages."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install\n")))),(0,r.kt)("h2",{id:"installing-the-test-harness"},"Installing the Test Harness"),(0,r.kt)("p",null,"TBD - Automated testing that includes link checking is currently being looked into."),(0,r.kt)("h2",{id:"running-the-development-server"},"Running the Development Server"),(0,r.kt)("p",null,"To run the development web server and verify builds, contents, and styles perform\nthe following commands. More information on running a Docusaurus website can be\nfound in the ",(0,r.kt)("a",{parentName:"p",href:"https://v2.docusaurus.io/docs/installation#running-the-development-server"},"Docusaurus documentation"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"## From the repository base move to the website directory.\ncd website\n\n## Start the server on port 8080 with verbose output for debugging\nnpm run start --verbose -- --port 8080\n")),(0,r.kt)("p",null,"A new webpage should display in your default browser at ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:8080/cumulus-orca/"},"http://localhost:8080/cumulus-orca/"),"."),(0,r.kt)("h2",{id:"building-the-orca-website-locally"},"Building the ORCA Website Locally"),(0,r.kt)("p",null,"To build the cumulus-orca static website for GitHub pages locally run the\ncommands seen below. More information on building a Docusaurus website can be\nfound in the ",(0,r.kt)("a",{parentName:"p",href:"https://v2.docusaurus.io/docs/installation#build"},"Docusaurus documentation"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"## From the repository base move to the website directory.\ncd website\n\n## Build the site\nnpm run build\n")),(0,r.kt)("p",null,"The resulting site can be found in the ",(0,r.kt)("inlineCode",{parentName:"p"},"build")," directory."))}p.isMDXComponent=!0}}]);