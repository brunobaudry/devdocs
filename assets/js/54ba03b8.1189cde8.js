"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[51537],{70246:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return n},metadata:function(){return m},toc:function(){return u}});var a=r(83117),o=r(80102),i=(r(67294),r(3905)),l=r(13904),s=["components"],n={title:"Moodle 3.10.5",tags:["Release notes","Moodle 3.10"],sidebar_position:5,moodleVersion:"3.10.5"},d=void 0,m={unversionedId:"releases/3.10/3.10.5",id:"releases/3.10/3.10.5",title:"Moodle 3.10.5",description:"Release date: 12 July 2021",source:"@site/general/releases/3.10/3.10.5.md",sourceDirName:"releases/3.10",slug:"/releases/3.10/3.10.5",permalink:"/devdocs/general/releases/3.10/3.10.5",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/3.10/3.10.5.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 3.10",permalink:"/devdocs/general/tags/moodle-3-10"}],version:"current",lastUpdatedBy:"Andrew Nicols",lastUpdatedAt:1653909330,formattedLastUpdatedAt:"30/05/2022",sidebarPosition:5,frontMatter:{title:"Moodle 3.10.5",tags:["Release notes","Moodle 3.10"],sidebar_position:5,moodleVersion:"3.10.5"},sidebar:"releaseNotes",previous:{title:"Moodle 3.10.4",permalink:"/devdocs/general/releases/3.10/3.10.4"},next:{title:"Moodle 3.10.6",permalink:"/devdocs/general/releases/3.10/3.10.6"}},p={},u=[{value:"General fixes and improvements",id:"general-fixes-and-improvements",level:2},{value:"Accessibility improvements",id:"accessibility-improvements",level:2},{value:"Security fixes",id:"security-fixes",level:2},{value:"Translations",id:"translations",level:2}],c={toc:u};function h(e){var t=e.components,r=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(l.Z,(0,a.Z)({frontMatter:n},void 0!==m?{metadata:m}:{},{mdxType:"MoodlePageBanner"})),(0,i.kt)("p",null,"Release date: 12 July 2021"),(0,i.kt)("p",null,"Here is ",(0,i.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%223.10.5%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true"},"the full list of fixed issues in 3.10.5"),"."),(0,i.kt)("h2",{id:"general-fixes-and-improvements"},"General fixes and improvements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68925"},"MDL-68925")," - Quicklist items broken and cannot be used in PDF Annotator"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-65203"},"MDL-65203")," - Tab characters in event names produce malformed JSON in mustache template"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-65637"},"MDL-65637")," - Linkedin Authentication Stopped working"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67975"},"MDL-67975")," - Nextcloud integration should allow the use of aliases to files in repository"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-55243"},"MDL-55243")," - SVG files are images and should be allowed for course images, drag-drop questions, etc."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-71126"},"MDL-71126")," - Quiz manual grading: page size preference can get stuck at 0"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68915"},"MDL-68915")," - Forum and Lesson do not allow a change to max grade after a grade has been given"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-64236"},"MDL-64236")," - The content in the Grader report table is partly covered by the scrollbar in RTL mode"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67771"},"MDL-67771")," - Classic theme - unable to place blocks in Right region of activity modules"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-71694"},"MDL-71694")," - Grade validation failure causes loss of feedback comments"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-71047"},"MDL-71047")," - The cursor position is not correct when paste HTML in Atto editor"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-71113"},"MDL-71113")," - Integrate jsdoc into Grunt and allow for JS Documentation to be generated"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-70750"},"MDL-70750")," - In Survey activity the Response report -> Question doesn't work at all"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68747"},"MDL-68747")," - ChartJS quiz overview report should display numerical ranges LTR also for RTL languages"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-71644"},"MDL-71644")," - File upload still gets stuck if try to leave page mid-upload"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-71366"},"MDL-71366")," - Checkboxes/Radio Buttons within multiple choice questions become invisible or shrink"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-72010"},"MDL-72010")," - Quiz should use Moodle's mechanism for keeping the session alive"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-71947"},"MDL-71947")," - The indentation of the text must be corrected in the notice of time limit when starting a quiz"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-71789"},"MDL-71789")," - Add mform validation for invalid url when importing a calendar"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-71971"},"MDL-71971"),' - In the "Edit quiz" page, don\'t stick together the "Repaginate" and the "Select multiple items" button'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-71838"},"MDL-71838")," - Quiz overview report runs out of memory with huge courses"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-71145"},"MDL-71145")," - Drag and Drop Marker Question Type: Saves incorrect marker positions or lost markers"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-71837"},"MDL-71837")," - Export Calendar buttons become inactive after pressing 'Export' (as file)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-71060"},"MDL-71060")," - Duplicates 'Current category' text in edit question form"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69703"},"MDL-69703")," - Selected potential group member are not highlighted properly"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-71438"},"MDL-71438")," - Block deletion timeouts can occur on large sites")),(0,i.kt)("h2",{id:"accessibility-improvements"},"Accessibility improvements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-71373"},"MDL-71373")," - Localize hard coded aria-label strings in table pagination and role manager"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-71669"},"MDL-71669")," - Menus opened by Atto buttons are announced as dialog box by screen-readers"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-71813"},"MDL-71813")," - File picker \u2013 folder view file details not available using keyboard (Enter)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-71668"},"MDL-71668")," - Atto buttons do not have proper focus indicator")),(0,i.kt)("h2",{id:"security-fixes"},"Security fixes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=424797"},"MSA-21-0020")," SQL injection risk in code fetching enrolled courses"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=424798"},"MSA-21-0021")," SQL injection risk in code fetching recent courses"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=424799"},"MSA-21-0022")," Remote code execution risk when Shibboleth authentication is enabled"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=424801"},"MSA-21-0023")," Recursion denial of service possible due to recursive cURL in file repository"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=424802"},"MSA-21-0024")," Blind SSRF possible against cURL blocked hosts via redirect"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=424803"},"MSA-21-0025")," Messaging web service allows deletion of other users' messages"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=424806"},"MSA-21-0028")," IDOR allows removal of other users' calendar URL subscriptions"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=424807"},"MSA-21-0029")," Stored XSS when exporting to data formats supporting HTML via user ID number"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=424808"},"MSA-21-0030")," Insufficient escaping of users' names in account confirmation email - Note: If you have customised the language string ",(0,i.kt)("em",{parentName:"li"},"emailconfirmation"),", you will need to edit the customisation and remove the placeholder ",(0,i.kt)("code",null,"{$a->firstname}"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=424809"},"MSA-21-0031")," Messaging email notifications containing HTML may hide the final line of the email")),(0,i.kt)("h2",{id:"translations"},"Translations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_3.10.5"},"Notes de mise \xe0 jour de Moodle 3.10.5")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.moodle.org/es/Notas_de_Moodle_3.10.5"},"Notas de Moodle 3.10.5"))))}h.isMDXComponent=!0}}]);