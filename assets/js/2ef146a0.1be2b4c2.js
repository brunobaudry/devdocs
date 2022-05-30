"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[99880],{74895:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return n},metadata:function(){return m},toc:function(){return u}});var o=r(83117),a=r(80102),s=(r(67294),r(3905)),l=r(13904),i=["components"],n={title:"Moodle 2.9.6",tags:["Release notes","Moodle 2.9"],sidebar_position:6,moodleVersion:"2.9.6"},d=void 0,m={unversionedId:"releases/2.9/2.9.6",id:"releases/2.9/2.9.6",title:"Moodle 2.9.6",description:"Release date: 9 May, 2016",source:"@site/general/releases/2.9/2.9.6.md",sourceDirName:"releases/2.9",slug:"/releases/2.9/2.9.6",permalink:"/devdocs/general/releases/2.9/2.9.6",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/2.9/2.9.6.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 2.9",permalink:"/devdocs/general/tags/moodle-2-9"}],version:"current",lastUpdatedBy:"Andrew Nicols",lastUpdatedAt:1653909330,formattedLastUpdatedAt:"30/05/2022",sidebarPosition:6,frontMatter:{title:"Moodle 2.9.6",tags:["Release notes","Moodle 2.9"],sidebar_position:6,moodleVersion:"2.9.6"},sidebar:"releaseNotes",previous:{title:"Moodle 2.9.5",permalink:"/devdocs/general/releases/2.9/2.9.5"},next:{title:"Moodle 2.9.7",permalink:"/devdocs/general/releases/2.9/2.9.7"}},p={},u=[{value:"Fixes and improvements",id:"fixes-and-improvements",level:2},{value:"Security issues",id:"security-issues",level:2},{value:"Translations",id:"translations",level:2}],c={toc:u};function h(e){var t=e.components,r=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(l.Z,(0,o.Z)({frontMatter:n},void 0!==m?{metadata:m}:{},{mdxType:"MoodlePageBanner"})),(0,s.kt)("p",null,"Release date: 9 May, 2016"),(0,s.kt)("p",null,"Here is ",(0,s.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%222.9.6%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true"},"the full list of fixed issues in 2.9.6"),"."),(0,s.kt)("h2",{id:"fixes-and-improvements"},"Fixes and improvements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-51142"},"MDL-51142"),' - Assignment activity: Logging in as another user should not change the field "Last modified (submission)"'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-49861"},"MDL-49861"),' - Database activity: "Save and add another" button should not pre-populate the form with data from previous entry'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-50795"},"MDL-50795")," - Atto editor: Background color is no longer applied when pasting clipboard content because of Chrome problems"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-53538"},"MDL-53538")," - Database activity: Do not display coding error when searching a database with no entries"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-53139"},"MDL-53139")," - Upload users tool no longer breaks because of the wrong case in user email"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-53176"},"MDL-53176")," - Performance improvement to grade history report"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-51828"},"MDL-51828")," - Wikimedia repository: Allow to consistently import any .svg files"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-53402"},"MDL-53402")," - Database activity: Setting field type Number to required should allow zero value"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-53770"},"MDL-53770")," - LTI activity: Allow to uninstall ltisource plugins"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-53728"},"MDL-53728")," - Improvements to file format selector in import/export questions form")),(0,s.kt)("h2",{id:"security-issues"},"Security issues"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=333186"},"MSA-16-0013")," Users are able to change profile fields that were locked by the administrator"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=333189"},"MSA-16-0015")," Information disclosure of hidden forum names and sub-names."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=333190"},"MSA-16-0016")," User can view badges of other users without proper permissions"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=333191"},"MSA-16-0017")," Course idnumber not protected from teacher restore"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=333192"},"MSA-16-0018")," CSRF in script marking forum posts as read")),(0,s.kt)("h2",{id:"translations"},"Translations"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_2.9.6"},"Notes de mise \xe0 jour de Moodle 2.9.6")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/es/Notas_de_Moodle_2.9.6"},"Notas de Moodle 2.9.6"))))}h.isMDXComponent=!0}}]);