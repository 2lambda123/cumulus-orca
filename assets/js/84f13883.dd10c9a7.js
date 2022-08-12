"use strict";(self.webpackChunkorca_website=self.webpackChunkorca_website||[]).push([[2436],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return r?a.createElement(f,i(i({ref:t},p),{},{components:r})):a.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8245:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),i=["components"],s={id:"storage-classes",title:"S3 Storage Classes in Orca",description:"Provides a brief overview on S3 storage classes available in Orca."},l=void 0,c={unversionedId:"operator/storage-classes",id:"operator/storage-classes",title:"S3 Storage Classes in Orca",description:"Provides a brief overview on S3 storage classes available in Orca.",source:"@site/docs/operator/storage-classes.md",sourceDirName:"operator",slug:"/operator/storage-classes",permalink:"/cumulus-orca/docs/operator/storage-classes",draft:!1,editUrl:"https://github.com/nasa/cumulus-orca/edit/develop/website/docs/operator/storage-classes.md",tags:[],version:"current",frontMatter:{id:"storage-classes",title:"S3 Storage Classes in Orca",description:"Provides a brief overview on S3 storage classes available in Orca."},sidebar:"ops_guide",previous:{title:"Collection Configuration",permalink:"/cumulus-orca/docs/operator/collection-configuration"}},p={},u=[{value:"GLACIER/Glacier Flexible Retrieval",id:"glacierglacier-flexible-retrieval",level:3},{value:"Retention",id:"retention",level:4},{value:"Retrieval",id:"retrieval",level:4},{value:"DEEP_ARCHIVE",id:"deep_archive",level:3},{value:"Retention",id:"retention-1",level:4}],d={toc:u};function m(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Orca can accept multiple ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/s3/storage-classes/"},"S3 storage classes")," on ingest.\nThese storage classes affect storage pricing, as well as available ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/restoring-objects-retrieval-options.html"},"retrieval options"),"."),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/cumulus-orca/docs/developer/deployment-guide/deployment-with-cumulus"},"Deployment With Cumulus")," for details on choosing a default storage class and ",(0,o.kt)("a",{parentName:"p",href:"/cumulus-orca/docs/operator/collection-configuration"},"Collection Configuration")," for setting the per-collection override value."),(0,o.kt)("h3",{id:"glacierglacier-flexible-retrieval"},"GLACIER/Glacier Flexible Retrieval"),(0,o.kt)("p",null,"This is Orca's default storage class. While the cost is higher, the retrieval time is significantly lower."),(0,o.kt)("h4",{id:"retention"},"Retention"),(0,o.kt)("p",null,"Each individual version is billed for a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-class-intro.html#sc-glacier"},"minimum of 90 days of storage"),".\nAs of the writing of this document, ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/s3/pricing/"},"the cost is .0036 per GB per month"),"."),(0,o.kt)("h4",{id:"retrieval"},"Retrieval"),(0,o.kt)("p",null,"Files stored in the ",(0,o.kt)("inlineCode",{parentName:"p"},"GLACIER")," class can be recovered in as quickly as 5 minutes using the ",(0,o.kt)("inlineCode",{parentName:"p"},"Expedited")," ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/restoring-objects-retrieval-options.html"},"option")," as needed. Cheaper options include the orca default ",(0,o.kt)("inlineCode",{parentName:"p"},"Standard")," at 5 hours, and the Bulk at up to 12 hours. For pricing details, see 'Requests & data retrievals' on the ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/s3/pricing/"},"Amazon S3 pricing")," page."),(0,o.kt)("h3",{id:"deep_archive"},"DEEP_ARCHIVE"),(0,o.kt)("h4",{id:"retention-1"},"Retention"),(0,o.kt)("p",null,"File versions stored in ",(0,o.kt)("inlineCode",{parentName:"p"},"DEEP_ARCHIVE")," ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/s3/pricing/"},"cost roughly 1/3rd")," to keep stored in S3 compared to ",(0,o.kt)("inlineCode",{parentName:"p"},"GLACIER"),",\nand are billed for ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-class-intro.html#sc-glacier"},"double the ",(0,o.kt)("inlineCode",{parentName:"a"},"GLACIER")," retention policy at 180 days"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"DEEP_ARCHIVE")," is recommended for large files that will not see frequent changes."),(0,o.kt)("h1",{id:"retrieval-1"},"Retrieval"),(0,o.kt)("p",null,"As a trade-off for their reduced cost compared to ",(0,o.kt)("inlineCode",{parentName:"p"},"GLACIER"),", ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/restoring-objects-retrieval-options.html"},(0,o.kt)("inlineCode",{parentName:"a"},"DEEP_ARCHIVE")," retrieval takes 3-4 times as long"),", and cannot be restored with the ",(0,o.kt)("inlineCode",{parentName:"p"},"Expedited")," recovery type."))}m.isMDXComponent=!0}}]);