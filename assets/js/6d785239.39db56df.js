"use strict";(self.webpackChunkorca_website=self.webpackChunkorca_website||[]).push([[9644],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return u}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(a),u=i,h=m["".concat(l,".").concat(u)]||m[u]||c[u]||r;return a?n.createElement(h,o(o({ref:t},d),{},{components:a})):n.createElement(h,o({ref:t},d))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1850:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),o=["components"],s={id:"integration-tests",title:"Integration Tests",description:"Instructions on Developing and Running Integration Tests"},l=void 0,p={unversionedId:"developer/development-guide/code/integration-tests",id:"developer/development-guide/code/integration-tests",title:"Integration Tests",description:"Instructions on Developing and Running Integration Tests",source:"@site/docs/developer/development-guide/code/integration-tests.md",sourceDirName:"developer/development-guide/code",slug:"/developer/development-guide/code/integration-tests",permalink:"/cumulus-orca/docs/developer/development-guide/code/integration-tests",draft:!1,editUrl:"https://github.com/nasa/cumulus-orca/edit/develop/website/docs/developer/development-guide/code/integration-tests.md",tags:[],version:"current",frontMatter:{id:"integration-tests",title:"Integration Tests",description:"Instructions on Developing and Running Integration Tests"},sidebar:"dev_guide",previous:{title:"Unit Tests",permalink:"/cumulus-orca/docs/developer/development-guide/code/unit-tests"},next:{title:"Postgres Tests",permalink:"/cumulus-orca/docs/developer/development-guide/code/postgres-tests"}},d={},c=[{value:"File Structure",id:"file-structure",level:2},{value:"Running Tests",id:"running-tests",level:2},{value:"Running Locally",id:"running-locally",level:3},{value:"Running in Bamboo",id:"running-in-bamboo",level:3},{value:"Test Assumptions",id:"test-assumptions",level:2},{value:"Happy Path",id:"happy-path",level:3},{value:"Security Paths",id:"security-paths",level:3},{value:"Error Paths",id:"error-paths",level:3},{value:"What Not to Test",id:"what-not-to-test",level:2},{value:"External Integrations",id:"external-integrations",level:3},{value:"Performance",id:"performance",level:3},{value:"Needed Tests",id:"needed-tests",level:2},{value:"Internal Reconciliation",id:"internal-reconciliation",level:3},{value:"Ingest",id:"ingest",level:3},{value:"Recovery",id:"recovery",level:3},{value:"General Security",id:"general-security",level:3}],m={toc:c};function u(e){var t=e.components,a=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"While ",(0,r.kt)("a",{parentName:"p",href:"/cumulus-orca/docs/developer/development-guide/code/unit-tests"},"unit tests")," cover individual functions, this does not constitute full coverage.\nConsideration should be given to how the components of a large system interact, and how the layers fit together.\nThese tests run realistic scenarios against a full system via scripts run in Bamboo."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#structure"},"File Structure")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#running"},"Running Tests"))),(0,r.kt)("a",{name:"structure"}),(0,r.kt)("h2",{id:"file-structure"},"File Structure"),(0,r.kt)("p",null,"Tests are grouped into modules under the ",(0,r.kt)("inlineCode",{parentName:"p"},"test_packages")," folder.\nWhen adding a test group:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a new directory under ",(0,r.kt)("inlineCode",{parentName:"li"},"test_packages"),", named appropriately for your new group."),(0,r.kt)("li",{parentName:"ol"},"Copy the ",(0,r.kt)("inlineCode",{parentName:"li"},"__init__.py")," from another group into your group."),(0,r.kt)("li",{parentName:"ol"},"Modify the ",(0,r.kt)("inlineCode",{parentName:"li"},"workflow_tests/__init__.py"),", adding your new group to the list of imports."),(0,r.kt)("li",{parentName:"ol"},"You may now begin adding test files to your new directory.\nNote that each filename should begin with the ",(0,r.kt)("inlineCode",{parentName:"li"},"test")," prefix, and should contain a class of the format ",(0,r.kt)("inlineCode",{parentName:"li"},"class TestDescriptiveName(TestCase):"))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"As tests are run in parallel, it is generally good practice to have one test-per-file, to avoid any shared setup."))),(0,r.kt)("a",{name:"running"}),(0,r.kt)("h2",{id:"running-tests"},"Running Tests"),(0,r.kt)("h3",{id:"running-locally"},"Running Locally"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://nasa.github.io/cumulus-orca/docs/developer/deployment-guide/deployment"},"Deploy ORCA to AWS"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Connect to the NASA vpn.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Set the following environment variables:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"orca_API_DEPLOYMENT_INVOKE_URL")," Output from the ORCA TF module. ex: ",(0,r.kt)("inlineCode",{parentName:"li"},"https://0000000000.execute-api.us-west-2.amazonaws.com")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"orca_COPY_TO_GLACIER_STEP_FUNCTION_ARN")," ARN of the copy_to_glacier step function. ex: ",(0,r.kt)("inlineCode",{parentName:"li"},"arn:aws:states:us-west-2:000000000000:stateMachine:PREFIX-OrcaCopyToGlacierWorkflow")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the following bash command,\nreplacing ",(0,r.kt)("inlineCode",{parentName:"p"},"i-00000000000000000")," with your ec2 instance name,\nand ",(0,r.kt)("inlineCode",{parentName:"p"},"0000000000.execute-api.us-west-2.amazonaws.com")," with your API Gateway identifier:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'aws ssm start-session --target i-00000000000000000 --document-name AWS-StartPortForwardingSessionToRemoteHost --parameters \'{"host":["0000000000.execute-api.us-west-2.amazonaws.com"],"portNumber":["443"], "localPortNumber":["8000"]}\'\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the root folder ",(0,r.kt)("inlineCode",{parentName:"p"},"workflow_tests"),", run the following command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"bin/run_tests.sh\n")))),(0,r.kt)("h3",{id:"running-in-bamboo"},"Running in Bamboo"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://bugs.earthdata.nasa.gov/browse/ORCA-96"},"Not yet developed.")),(0,r.kt)("h2",{id:"test-assumptions"},"Test Assumptions"),(0,r.kt)("p",null,"These are suggestions for rules and setup procedures for integration tests.\nDocumentation below assumes that the following are applied."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Values should be randomized whenever possible.\nThis will avoid copy-pasted strings causing false-positives.\nOnly reuse resources when creating resources for each test would be problematic."),(0,r.kt)("li",{parentName:"ul"},"The higher the level, the higher the priority.\nFor example, testing a step function can theoretically cover the relevant lambdas along with their integration into the step function.\nNote that this does not fully cover the functionality of the individual components. Full run-through paths for each functionality of each component may be prohibitively time intensive both in terms of coding and test runtime, but should be considered."),(0,r.kt)("li",{parentName:"ul"},"Smaller integration tests are better suited for narrowing in on errors, and should be considered for any new feature's ",(0,r.kt)("a",{parentName:"li",href:"#happy-path"},"happy path"),"."),(0,r.kt)("li",{parentName:"ul"},"Due to automated processes and network latency, some operations may take time.\nBuild retries with timeouts into network calls when appropriate."),(0,r.kt)("li",{parentName:"ul"},"Since tests may take some time, test multiple values at once.\nFor example, if testing a flow where different file extensions are treated differently, pass multiple types into the flow and make sure they are handled properly."),(0,r.kt)("li",{parentName:"ul"},"A persistent data bucket should exist to provide files for ingest."),(0,r.kt)("li",{parentName:"ul"},"Tests should be run in parallel when possible."),(0,r.kt)("li",{parentName:"ul"},"Use realistic routes when feasible. For example, ingest files to Orca instead of placing them in the bucket manually."),(0,r.kt)("li",{parentName:"ul"},"All resources, including storage mediums, should be deleted after all tests have been run.",(0,r.kt)("div",{parentName:"li",className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"When deleted, KMS keys persist for a minimum of 7 days. In order to run tests more often\nthan every 7-8 days, a randomized prefix could be used for   deployment to avoid collision\nerrors with KMS key names within the same environment.")))),(0,r.kt)("li",{parentName:"ul"},"Initially, automated validation will not include checking Cloudwatch logs. Logs will be available for 7 days to help manually identify any errors and troubleshoot problems. In the future, automating searches for key phrases in Cloudwatch logs as validation may be used for identifying point-of-failure in processes."),(0,r.kt)("li",{parentName:"ul"},"Integration tests should be run on a regular cadence. Initial suggestion is once every 1-2 weeks.")),(0,r.kt)("p",null,"Some broad categories of tests are shown below."),(0,r.kt)("h3",{id:"happy-path"},"Happy Path"),(0,r.kt)("p",null,"These are basic tests that perform a full run-through of a feature.\nRandomized data is used to create a valid state, and a valid user is used to trigger/retrieve work."),(0,r.kt)("h3",{id:"security-paths"},"Security Paths"),(0,r.kt)("p",null,"If feasible, there should be a copy of each ",(0,r.kt)("a",{parentName:"p",href:"#happy-path"},"Happy Path")," test that checks the same route, but with one property modified so as to fail security checks.\nFor lambdas with properly specified permissions, this will involve calling the lambda with a user that does not have permission to invoke the lambda.\nFor components such as databases and S3 buckets, this will involve attempting to retrieve/delete/add data with a user that does not have the appropriate permissions."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"To improve maintainability, use a shared function for setup of the ",(0,r.kt)("a",{parentName:"p",href:"#happy-path"},"Happy Path")," and Security Path tests for a given component."))),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Due to how NGAP handles security, even resources with public access enabled cannot be accessed publicly.\nFurther research should be done to identify how to perform these tests."))),(0,r.kt)("h3",{id:"error-paths"},"Error Paths"),(0,r.kt)("p",null,"These tests verify that when an error is expected, a proper error is returned/raised.\nFor example, several entries in our ",(0,r.kt)("a",{parentName:"p",href:"/cumulus-orca/docs/developer/api/orca-api"},"API")," should properly return a 404 error code if the entry does not exist in the database.\nThe test should fail if the API returns the error in a dictionary instead of an HTTP status code, or the API returns any other error code."),(0,r.kt)("h2",{id:"what-not-to-test"},"What Not to Test"),(0,r.kt)("h3",{id:"external-integrations"},"External Integrations"),(0,r.kt)("p",null,"We do not presently test integrations with Cumulus or other external consumers.\nAs we do not want to deepen coupling with Cumulus, it is best to focus on maintaining a consistent API."),(0,r.kt)("p",null,"Manual tests should still be run with Cumulus to check for changes in Cumulus output/input schemas, Orca input/output schemas, Cumulus Message Adapter, and the Cumulus Dashboard. These manual tests should replicate the ingest/recovery tests."),(0,r.kt)("h3",{id:"performance"},"Performance"),(0,r.kt)("p",null,"While there is a desire to eventually develop performance tests, these tests should focus on functionality with generous timeouts."),(0,r.kt)("h2",{id:"needed-tests"},"Needed Tests"),(0,r.kt)("p",null,"This is a list of tests that should be created for existing Orca architecture. This list may change as tests are created and components are modified."),(0,r.kt)("h3",{id:"internal-reconciliation"},(0,r.kt)("a",{parentName:"h3",href:"/cumulus-orca/docs/developer/research/research-reconciliation"},"Internal Reconciliation")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#happy-path"},"Happy"),":",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Ingest randomized data to Orca."),(0,r.kt)("li",{parentName:"ol"},"Modify the catalog and post S3 data in the structure of an S3 inventory report to the report bucket. Include at least one of each error type comparing between the two sources.",(0,r.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"While we could wait for the automated S3 Inventory report to generate, this could take up to 24 hours, which would delay testing.\nTherefore, use a dummy report that matches the AWS report schema to perform automated testing.\nPrior to release or periodically, an S3 Inventory report should be generated through AWS mechanisms to validate the schema and style of the test report being used.")))),(0,r.kt)("li",{parentName:"ol"},"Post a mocked-up manifest to the report bucket."),(0,r.kt)("li",{parentName:"ol"},"Retry calls to the ",(0,r.kt)("a",{parentName:"li",href:"/cumulus-orca/docs/developer/api/orca-api/#internal-reconcile-report-jobs-api"},"Internal Reconcile Report API")," until job is complete."),(0,r.kt)("li",{parentName:"ol"},"Check that job is successful, and expected errors can be retrieved through the API.",(0,r.kt)("div",{parentName:"li",className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If the catalog is not reset prior to this test, or other tests run in parallel, other errors may be present.\nMake sure none of these errors contain your randomized keys.")))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#security-paths"},"Security"),":",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Follow the Happy test up to contacting the API."),(0,r.kt)("li",{parentName:"ol"},"No internal reconciliation endpoints should be publicly accessible, even if the job-id is known."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#error-paths"},"Error"),":",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Requests for a non-existent job and its reports should return HTTP Status 404.")))),(0,r.kt)("h3",{id:"ingest"},"Ingest"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"#happy-path"},"Happy"),":"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Add files to an S3 bucket that is registered with Orca.\nStructure should imitate multiple granules.",(0,r.kt)("div",{parentName:"li",className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Include a large (bigger than 250 Gb) file to make sure timeouts do not prevent ingest."))),(0,r.kt)("div",{parentName:"li",className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Test ingesting from Glacier buckets as well as regular buckets.\nMake sure that Glacier data is less than 24 hours old.\nIf older, data will be moved out of ",(0,r.kt)("inlineCode",{parentName:"p"},"recovered")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"pre-archival")," states, and ingest will incur additional costs and time penalties, possibly beyond timeout limits.")))),(0,r.kt)("li",{parentName:"ol"},"Call the OrcaCopyToGlacierWorkflow to ingest the granules to Orca.",(0,r.kt)("div",{parentName:"li",className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Make sure to cover excludedFileExtensions being set, being unset, and excluding/allowing proper files in either case.\nMay require additional tests."))),(0,r.kt)("div",{parentName:"li",className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Future work will allow us to target multiple buckets with ingest.")))),(0,r.kt)("li",{parentName:"ol"},"Check the StepFunction status until status is completed."),(0,r.kt)("li",{parentName:"ol"},"Call the ",(0,r.kt)("a",{parentName:"li",href:"/cumulus-orca/docs/developer/api/orca-api/#catalog-reporting-api"},"Catalog API")," to make sure entries are found."),(0,r.kt)("li",{parentName:"ol"},"Verify that the files are present in the proper Orca bucket."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"#security-paths"},"Security"),":"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Follow the Happy test up to calling the workflow."),(0,r.kt)("li",{parentName:"ol"},"Workflow should not be publicly accessible, even if files are valid."),(0,r.kt)("li",{parentName:"ol"},"Follow the Happy test up to contacting the API."),(0,r.kt)("li",{parentName:"ol"},"No catalog endpoints should be publicly accessible, even if the granule-id or other values are known."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"#error-paths"},"Error"),":"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Requests for catalog info on a non-existent granule/file should return HTTP Status 404.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Attempting to ingest a file that does not exist should result in ",(0,r.kt)("inlineCode",{parentName:"p"},"files does not exist"),"."))))),(0,r.kt)("h3",{id:"recovery"},"Recovery"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"#happy-path"},"Happy"),":"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Ingest randomized data to Orca.",(0,r.kt)("div",{parentName:"li",className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Include a large (bigger than 250 Gb) file to make sure timeouts do not prevent recovery.")))),(0,r.kt)("li",{parentName:"ol"},"Call the OrcaRecoveryWorkflow to restore the files from Orca to another bucket.",(0,r.kt)("div",{parentName:"li",className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Make sure to cover excludedFileExtensions being set, being unset, and excluding/allowing proper files in either case.\nMay require additional tests.\nIgnored files will not be listed in output.")))),(0,r.kt)("li",{parentName:"ol"},"Retry calls to the ",(0,r.kt)("a",{parentName:"li",href:"/cumulus-orca/docs/developer/api/orca-api/#recovery-granules-api"},"Recovery Granules API")," until entries are found, and status is ",(0,r.kt)("inlineCode",{parentName:"li"},"complete"),".",(0,r.kt)("div",{parentName:"li",className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Recovery may take up to 4 hours.")))),(0,r.kt)("li",{parentName:"ol"},"Verify that the files are present in the proper target bucket."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"#security-paths"},"Security"),":"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Follow the Happy test up to contacting the API."),(0,r.kt)("li",{parentName:"ol"},"No recovery endpoints should be publicly accessible, even if the granule-id or other values are known.")),(0,r.kt)("div",{parentName:"li",className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The following test will only be valid after completing ",(0,r.kt)("a",{parentName:"p",href:"https://bugs.earthdata.nasa.gov/browse/ORCA-351"},"ORCA-351"),"."))),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Follow the Happy test up to calling the workflow."),(0,r.kt)("li",{parentName:"ol"},"Workflow should not be publicly accessible, even if files are valid."),(0,r.kt)("li",{parentName:"ol"},"Follow the Happy test up to calling the workflow."),(0,r.kt)("li",{parentName:"ol"},"Workflow should not be able to restore files to arbitrary buckets that Orca does not have permission to write to."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"#error-paths"},"Error"),":"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Requests for recovery info on files that are not being recovered should return HTTP Status 404.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Recovering files that are in the process of being recovered should return an error.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Attempting to recover a file that does not exist should result in ",(0,r.kt)("inlineCode",{parentName:"p"},"files does not exist"),"."))))),(0,r.kt)("h3",{id:"general-security"},"General Security"),(0,r.kt)("p",null,"All Orca resources should be private, baring specific exceptions carved out for customer integration.\nTests should be created that check for errors when contacting resources from a public perspective.\nThis applies to, among others:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"S3 Buckets"),(0,r.kt)("li",{parentName:"ul"},"Lambdas"),(0,r.kt)("li",{parentName:"ul"},"Databases"),(0,r.kt)("li",{parentName:"ul"},"Step Functions"),(0,r.kt)("li",{parentName:"ul"},"SQS Queues"),(0,r.kt)("li",{parentName:"ul"},"Secret Managers")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Some of the above may be covered by other tests."))))}u.isMDXComponent=!0}}]);