"use strict";(self.webpackChunkorca_website=self.webpackChunkorca_website||[]).push([[9687],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return s}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),d=p(n),s=a,h=d["".concat(l,".").concat(s)]||d[s]||c[s]||r;return n?o.createElement(h,i(i({ref:t},m),{},{components:n})):o.createElement(h,i({ref:t},m))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},631:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return s},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return c}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],u={id:"contrib-documentation-deploy",title:"Deploying Documentation",desc:"Provides basic information on deploying ORCA documentation to nasa.github.io"},l=void 0,p={unversionedId:"developer/development-guide/documentation/contrib-documentation-deploy",id:"developer/development-guide/documentation/contrib-documentation-deploy",title:"Deploying Documentation",description:"The following sections provide information to ORCA users to create automated or",source:"@site/docs/developer/development-guide/documentation/documentation-deployment.md",sourceDirName:"developer/development-guide/documentation",slug:"/developer/development-guide/documentation/contrib-documentation-deploy",permalink:"/cumulus-orca/docs/developer/development-guide/documentation/contrib-documentation-deploy",draft:!1,editUrl:"https://github.com/nasa/cumulus-orca/edit/develop/website/docs/developer/development-guide/documentation/documentation-deployment.md",tags:[],version:"current",frontMatter:{id:"contrib-documentation-deploy",title:"Deploying Documentation",desc:"Provides basic information on deploying ORCA documentation to nasa.github.io"},sidebar:"dev_guide",previous:{title:"Documentation Style Guide",permalink:"/cumulus-orca/docs/developer/development-guide/documentation/documentation-style-guide"},next:{title:"Deployment Information",permalink:"/cumulus-orca/docs/developer/deployment-guide/deployment"}},m={},c=[{value:"Automated Documentation Release on Github",id:"automated-documentation-release-on-github",level:2},{value:"Manual Documentation Release on Github",id:"manual-documentation-release-on-github",level:2}],d={toc:c};function s(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The following sections provide information to ORCA users to create automated or\nmanual releases on github. View the entire versioning and releases document\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nasa/cumulus-orca/blob/master/docs/release.md"},"here"),"."),(0,r.kt)("h2",{id:"automated-documentation-release-on-github"},"Automated Documentation Release on Github"),(0,r.kt)("p",null,"The release is automated in Bamboo, but the step must be manually started. If\nyou set the ",(0,r.kt)("inlineCode",{parentName:"p"},"RELEASE_FLAG")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),' and the build steps passed, you will be\nable to run the manual "Release" step in Bamboo.'),(0,r.kt)("p",null,"On a successful automated release, the updated documentation is committed to\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"gh-pages")," branch of the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nasa/cumulus-orca"},"Cumulus ORCA repo"),".\nThe updated documentation should be available on the Cumulus ORCA website at\n",(0,r.kt)("a",{parentName:"p",href:"https://nasa.github.io/cumulus-orca"},"https://nasa.github.io/cumulus-orca"),"."),(0,r.kt)("h2",{id:"manual-documentation-release-on-github"},"Manual Documentation Release on Github"),(0,r.kt)("p",null,"Use the following steps to update Github documentation manually. Additional\ndeployment information can be found at the ",(0,r.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/deployment"},"Docusaurus deployment page"),"."),(0,r.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Important")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"Users need ",(0,r.kt)("strong",{parentName:"li"},"Node 12.15.0")," installed to perform manaul updates to documentation."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"Deployment_Branch")," must = ",(0,r.kt)("strong",{parentName:"li"},"gh-pages"),".")))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Clone the Cumulus ORCA repo to your machine. Enter the repo directory and\nchange to the proper branch."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"git clone https://github.com/nasa/cumulus-orca.git\ncd cumulus-orca\ngit checkout release-X.Y.Z\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter the ",(0,r.kt)("inlineCode",{parentName:"p"},"website")," directory"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"cd website\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Export the needed environment variables. Make sure to use your GitHub\nusername and password."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"export DEPLOYMENT_BRANCH=gh-pages\nexport GIT_USER=$bamboo_SECRET_GITHUB_USER\nexport GIT_PASS=$bamboo_SECRET_GITHUB_TOKEN\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If your user email and username configuration is not set for git, that must\nbe done before running the deploy in order to avoid errors when pushing to\nthe GitHub repository. If the config is set, this step can be skipped."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'git config --global user.email "$bamboo_SECRET_GITHUB_EMAIL"\ngit config --global user.name "$GIT_USER"\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the deployment script via npm."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"npm run deploy\n")))))}s.isMDXComponent=!0}}]);