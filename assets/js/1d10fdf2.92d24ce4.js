"use strict";(self.webpackChunkorca_website=self.webpackChunkorca_website||[]).push([[2473],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return t?a.createElement(f,o(o({ref:n},p),{},{components:t})):a.createElement(f,o({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3645:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),o=["components"],l={id:"parallel-scripting",title:"Parallel Scripting",description:"Instructions on running multiple functions in a script in Parallel."},s=void 0,c={unversionedId:"developer/development-guide/code/parallel-scripting",id:"developer/development-guide/code/parallel-scripting",title:"Parallel Scripting",description:"Instructions on running multiple functions in a script in Parallel.",source:"@site/docs/developer/development-guide/code/parallel-scripting.md",sourceDirName:"developer/development-guide/code",slug:"/developer/development-guide/code/parallel-scripting",permalink:"/cumulus-orca/docs/developer/development-guide/code/parallel-scripting",draft:!1,editUrl:"https://github.com/nasa/cumulus-orca/edit/develop/website/docs/developer/development-guide/code/parallel-scripting.md",tags:[],version:"current",frontMatter:{id:"parallel-scripting",title:"Parallel Scripting",description:"Instructions on running multiple functions in a script in Parallel."},sidebar:"dev_guide",previous:{title:"ORCA Logs",permalink:"/cumulus-orca/docs/developer/development-guide/code/orca-logging"},next:{title:"Documentation Introduction",permalink:"/cumulus-orca/docs/developer/development-guide/documentation/contrib-documentation-intro"}},p={},u=[{value:"Installation",id:"installation",level:2},{value:"Scripting Basics",id:"scripting-basics",level:2},{value:"Demo",id:"demo",level:4},{value:"Alternatives",id:"alternatives",level:2},{value:"Background and Wait (&amp;)",id:"background-and-wait-",level:3},{value:"Cons",id:"cons",level:4},{value:"Demo",id:"demo-1",level:4},{value:"Xargs",id:"xargs",level:3},{value:"Cons",id:"cons-1",level:4},{value:"Demo",id:"demo-2",level:4}],d={toc:u};function m(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.gnu.org/software/parallel/man.html"},"Parallel")," is a means of running a function multiple times in different processes.\nThis can significantly increase the performance of scripts that loop with significant wait time.\nFor example, in cases with network calls such as package installation."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"For development, install via ",(0,i.kt)("a",{parentName:"p",href:"https://formulae.brew.sh/formula/parallel"},"brew"),"."),(0,i.kt)("h2",{id:"scripting-basics"},"Scripting Basics"),(0,i.kt)("p",null,"Using parallel will run multiple instances of the command in different processes.\nStandard output for each process will be buffered, and shown all at once when the process completes.\nAfter all processes exit, execution of the main script will continue.\n",(0,i.kt)("inlineCode",{parentName:"p"},"$?")," will contain how many tasks exited with a non-0 exit code."),(0,i.kt)("h4",{id:"demo"},"Demo"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--jobs 0")," indicates that as many processes as possible should run at once."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-n 1")," limits the number of parameters per process to 1."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-X")," distributes the parameters among the new processes."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--halt now,fail=1")," is used to halt all ongoing processes once 1 process exits with a non-0 exit code. Modifies ",(0,i.kt)("inlineCode",{parentName:"li"},"$?")," to return the failing process' exit code instead of how many processes failed.",(0,i.kt)("div",{parentName:"li",className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Since the exit code does not indicate which process failed, logging for individual processes should be robust."))))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'parallel --jobs 0 -n 1 -X --halt now,fail=1 function_name ::: $parameter_array\nprocess_return_code=$?\nif [ $process_return_code -ne 0 ]; then\n  echo "ERROR: process failed with code $process_return_code."\n  failure=1\nfi\n')),(0,i.kt)("h2",{id:"alternatives"},"Alternatives"),(0,i.kt)("p",null,"Some alternatives were researched, but found to be more limited."),(0,i.kt)("h3",{id:"background-and-wait-"},"Background and Wait (&)"),(0,i.kt)("p",null,"If a function is run with a ",(0,i.kt)("inlineCode",{parentName:"p"},"&")," suffix, it will start in a new process.\nThe process ID can then be captured, and used to track progress and exit codes."),(0,i.kt)("h4",{id:"cons"},"Cons"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Requires extra code for managing processes."),(0,i.kt)("li",{parentName:"ul"},"Logging is not grouped by function invocation.")),(0,i.kt)("h4",{id:"demo-1"},"Demo"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'declare -A pids\nfor param in $parameter_array\ndo\nfunction_name $param &\npids[${param}]=$!  # This assumes that all parameters are unique.\ndone\n\nfailure=0\nfor param in "${!pids[@]}"\ndo\n  wait ${pids[$param]}\n  process_return_code=$?\n  if [ $process_return_code -ne 0 ]; then\n    echo "ERROR: $param failed."\n    failure=1\n  fi\ndone\n')),(0,i.kt)("h3",{id:"xargs"},(0,i.kt)("a",{parentName:"h3",href:"https://www.man7.org/linux/man-pages/man1/xargs.1.html"},"Xargs")),(0,i.kt)("p",null,"Xargs has several useful performance optimization parameters, but is more difficult to use."),(0,i.kt)("h4",{id:"cons-1"},"Cons"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Logging is not grouped by function invocation."),(0,i.kt)("li",{parentName:"ul"},"Parameters are passed in via a single string, split on a separator character, which is rather brittle."),(0,i.kt)("li",{parentName:"ul"},"Exit codes are not passed out to main process.")),(0,i.kt)("h4",{id:"demo-2"},"Demo"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'echo "${parameter_array[@]}" | xargs -n 1 -P 0 bash -c \'function_name "$@"\' _\n')))}m.isMDXComponent=!0}}]);