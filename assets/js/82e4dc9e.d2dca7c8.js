"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[93198],{81088:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return p}});var r=a(83117),o=a(80102),s=(a(67294),a(3905)),i=a(13904),n=["components"],l={title:"Moodle 3.0.7",tags:["Release notes","Moodle 3.0"],sidebar_position:7,moodleVersion:"3.0.7"},d=void 0,m={unversionedId:"releases/3.0/3.0.7",id:"releases/3.0/3.0.7",title:"Moodle 3.0.7",description:"Release date: 14 November 2016",source:"@site/general/releases/3.0/3.0.7.md",sourceDirName:"releases/3.0",slug:"/releases/3.0/3.0.7",permalink:"/devdocs/general/releases/3.0/3.0.7",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/3.0/3.0.7.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 3.0",permalink:"/devdocs/general/tags/moodle-3-0"}],version:"current",lastUpdatedBy:"Andrew Nicols",lastUpdatedAt:1653909330,formattedLastUpdatedAt:"30/05/2022",sidebarPosition:7,frontMatter:{title:"Moodle 3.0.7",tags:["Release notes","Moodle 3.0"],sidebar_position:7,moodleVersion:"3.0.7"},sidebar:"releaseNotes",previous:{title:"Moodle 3.0.6",permalink:"/devdocs/general/releases/3.0/3.0.6"},next:{title:"Moodle 3.0.8",permalink:"/devdocs/general/releases/3.0/3.0.8"}},u={},p=[{value:"Functional changes",id:"functional-changes",level:2},{value:"API changes",id:"api-changes",level:2},{value:"Security issues",id:"security-issues",level:2},{value:"Fixes and improvements",id:"fixes-and-improvements",level:2},{value:"Translations",id:"translations",level:2}],c={toc:p};function h(e){var t=e.components,a=(0,o.Z)(e,n);return(0,s.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(i.Z,(0,r.Z)({frontMatter:l},void 0!==m?{metadata:m}:{},{mdxType:"MoodlePageBanner"})),(0,s.kt)("p",null,"Release date: 14 November 2016"),(0,s.kt)("p",null,"Here is ",(0,s.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%223.0.7%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true"},"the full list of fixed issues in 3.0.7"),"."),(0,s.kt)("h2",{id:"functional-changes"},"Functional changes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-46946"},"MDL-46946")," - Prompt users to complete required custom user profile fields before allowing them to use the site"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-43796"},"MDL-43796")," - Assignment: When importing an assignment with blind marking into another course never reveal identities")),(0,s.kt)("h2",{id:"api-changes"},"API changes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-52051"},"MDL-52051")," - Migrate to Dropbox API v2"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-55602"},"MDL-55602")," - Sessions: Add support for Redis as a session_class_handler")),(0,s.kt)("h2",{id:"security-issues"},"Security issues"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=343275"},"MSA-16-0023")," Question engine allows access to files that should not be available"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=343276"},"MSA-16-0024")," Non-admin site managers may accidentally edit admins via web services"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=343277"},"MSA-16-0025")," Capability to view course notes is checked in the wrong context"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=343278"},"MSA-16-0026")," When debugging is enabled, error exceptions returned from webservices could contain private data.")),(0,s.kt)("h2",{id:"fixes-and-improvements"},"Fixes and improvements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-47500"},"MDL-47500")," - SCORM: Remove blank space on top"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-29332"},"MDL-29332")," - Allow calculated questions to have variables with case differences (usually affects upgrades from before Moodle 2.1)"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-56129"},"MDL-56129")," - Fix video playback with iOS 10.0 and 10.1 devices (iPad / iPhone)"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-29774"},"MDL-29774")," - When adding group members and using user search display groups of potential members"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-42041"},"MDL-42041"),' - Book: put "Turn editing on" button in a more obvious location'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-56368"},"MDL-56368")," - Fixed alignment of settings for Restrict Access when activity titles are very long"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-55858"},"MDL-55858")," - Remove unsubscribe link from notification email in forum with forced subscription"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-55505"},"MDL-55505")," - Assignment: Fixed bug when editing grades for previous submission attempts overwrites existing grades"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-56328"},"MDL-56328")," - Bootstrapbase Themes - reduce section activity indent when not editing")),(0,s.kt)("h2",{id:"translations"},"Translations"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_3.0.7"},"Notes de mise \xe0 jour de Moodle 3.0.7")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/es/Notas_de_Moodle_3.0.7"},"Notas de Moodle 3.0.7"))))}h.isMDXComponent=!0}}]);