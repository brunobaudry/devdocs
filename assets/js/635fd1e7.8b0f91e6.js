"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[3240],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),m=o,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||a;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8132:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),l=["components"],i={title:"NodeJS and Grunt"},s=void 0,u={unversionedId:"development/tools/nodejs",id:"development/tools/nodejs",title:"NodeJS and Grunt",description:"Moodle development tools require the installation and use of NodeJS, which is a JavaScript runtime environment available for most operating systems.",source:"@site/general/development/tools/nodejs.md",sourceDirName:"development/tools",slug:"/development/tools/nodejs",permalink:"/devdocs/general/development/tools/nodejs",editUrl:"https://github.com/moodle/devdocs/edit/main/general/development/tools/nodejs.md",tags:[],version:"current",lastUpdatedBy:"Sara Arjona",lastUpdatedAt:1653408444,formattedLastUpdatedAt:"24/05/2022",frontMatter:{title:"NodeJS and Grunt"},sidebar:"tools",previous:{title:"PHP CodeSniffer",permalink:"/devdocs/general/development/tools/phpcs"}},p={},d=[{value:"Node Version Manager",id:"node-version-manager",level:2},{value:"Grunt",id:"grunt",level:2}],c={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Moodle development tools require the installation and use of ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/en/"},"NodeJS"),", which is a JavaScript runtime environment available for most operating systems."),(0,a.kt)("p",null,"Moodle requires version 16.14 of NodeJS, which is otherwise known as ",(0,a.kt)("inlineCode",{parentName:"p"},"lts/gallium"),"."),(0,a.kt)("p",null,"Use of ",(0,a.kt)("a",{parentName:"p",href:"#node-version-manager"},"NVM")," for installation of NodeJS is highly recommended over direct installation."),(0,a.kt)("h2",{id:"node-version-manager"},"Node Version Manager"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nvm-sh/nvm"},"NVM")," is the Node Version Manager. Its purpose is to simplify the installation, and use different versions of NodeJS."),(0,a.kt)("p",null,"Moodle includes a ",(0,a.kt)("inlineCode",{parentName:"p"},".nvmrc")," which ",(0,a.kt)("inlineCode",{parentName:"p"},"nvm")," can use to select the correct version of NodeJS."),(0,a.kt)("p",null,"To use the correct version of NodeJS for the current version of Moodle, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"nvm install")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"nvm use")," commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ nvm install\nFound '/Users/nicols/Sites/public_html/sm/.nvmrc' with version <lts/gallium>\nv16.14.0 is already installed.\nNow using node v16.14.0 (npm v8.3.1)\n")),(0,a.kt)("h2",{id:"grunt"},"Grunt"),(0,a.kt)("p",null,"As part of its build stack, Moodle uses the ",(0,a.kt)("a",{parentName:"p",href:"https://gruntjs.com"},"Grunt")," task runner."),(0,a.kt)("p",null,"Grunt is composed of a set of tasks, defined within the Moodle code repository in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Gruntfile.js")," file, and a grunt CLI tool which must also be installed."),(0,a.kt)("p",null,"To install the grunt CLI tool you can install it globally using npm:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm install -g grunt-cli\n$ grunt stylelint\n")),(0,a.kt)("p",null,"You can also use the ",(0,a.kt)("inlineCode",{parentName:"p"},"npx")," command to install it on demand:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npx grunt stylelint\n")))}m.isMDXComponent=!0}}]);