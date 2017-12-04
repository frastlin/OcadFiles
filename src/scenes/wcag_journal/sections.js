import React from 'react'
import { Link } from 'react-router-dom';


export default [
{title: "Preidea", contents:
	<div>
		<p>We knew we wanted to create something with audio maps.</p>
		<p>We asked ourselves,: What types of audio maps have we used before?</p>
		<p>My first thought was:</p>
		<a href="http://audiogames.net" target="blank">Audio Games.</a>
	</div>},

{title: "Exploration of audio games",
	contents: <div>
	<p>We first created</p>
	<a href="https://docs.google.com/spreadsheets/d/1dky_RhQcBes1QRmoehmKoPgLYWoLs-nMD_h2CKOqNBQ/edit" target="blank">a basic taxonomy for audio games</a>
	<p>The taxonomy looked at the type of information portrayed in audio games and categorized the different map types. Each game that was looked at had a basic letsplay attached to it.</p>
	<p>Ten games were reviewed and seven map types were identified. The types of games that were looked at include:</p>
	<ol>
	<li>Muds</li>
	<li>FPSs</li>
	<li>Strategy Games</li>
	<li>Side Scrollers</li>
	<li>Role Playing Games</li>
	<li>Arcade Games</li>
	</ol>
	<p>The types of maps that were found are:</p>
	<ol>
	<li>Mud Style</li>
	<li>First person 3D</li>
	<li>Grid Based</li>
	<li>Side Scroller</li>
	<li>List Based</li>
	<li>First Person Grid</li>
	<li>Arcade Scroller</li>
	</ol>
	<p>Each map type was used to show geographic information with different affordances. For example, a Grid Based map gives one a real feeling for walls and landscape, whereas List Based is best for presenting information in a very condensed way. Most games utilized multiple map types, primarily list based for menus combined with another map type for geographical information. A more in depth look at the different map types within audio games needs to be done to fill out the taxonomy and create a case study for the map types and their affordances.</p>
	</div>},

{title: "Deciding on a prototype",
	contents: <div>
	<p>The group started out by brainstorming what types of information would be critical to a blind person’s life. We first considered navigation, but then asked if there was critical information that was a matter of life or death. We then started thinking about natural disasters and hurricanes in particular. The question arose: How do blind people get information on if the hurricane is heading towards where they live? If blind people could watch the hurricane like everyone else, they could stop their reliance on other people to give them a filtered view of what was going on, and the blind person could interpret their danger level for themselves.</p>
	</div>},

{title: "Researching how blind people track natural disasters", contents: <div>
	<p>Researching how blind people follow natural disasters was a disaster. I sent an email to the National Federation of the blind of California asking how blind people could view the progress of natural disasters. </p>
	<p>I got no responses.  </p>
	<p>I have seen that blind people use radio and news sites like NPR to get information on natural disasters (this is how I get information as well), as well as TV, family and friends. This means that there is little to no way for a blind person to track movement of a hurricane, judge its strength or know what warning level their area is at. If they wish to know these things, they need to either use an app like be my eyes and have the proper information in front of them, or they need to ask a family member to help them read what is going on.</p>
	</div>},

{title: "Building the first grid", contents: <div>
<p>I created a rough draft of a table that used both html and aria for navigation. I then learned about tabindex selection within tables and implemented it in both tables. This allowed the user to navigate using the arrow keys. I played around with the different settings and figured out how to display elements within a table. I also noticed quite a few strange anomalies that were different between aria and html.</p>
<p>Here are the initial grids:</p>
<Link to="/aria-grid">Aria Grid</Link>
<Link to="/html-grid">Html Grid</Link>
<p>Each has its own pros and cons. The pros of the HTML grid is that there are default settings that mean the programmer doesn’t need to worry about how they look. The cons are that the programmer has little control over the look of the grid.</p>
<p>Aria has no appearance of a grid without CSS. It is fully customizable though and most programmers prefer to use it, even though it is much more difficult than html and it is almost impossible for sighted programmers to get all aspects of aria correct.</p>
</div>},

{title: "Reporting and asking for help", contents: <div>
<p>I reported the strange behavior that I noticed in aria and html to the web aim email list and asked for people to help me solve some of the issues. The only one I received help with on was the aria grid being editable. I then</p>
<a href="https://github.com/w3c/aria-practices/issues/509" target="blank">reported</a>
<p>some of the problems I found to the github page on grid for W3C examples.</p>
<p>I also asked several places about how to remove column and row announcements and just recently I saw that the</p>
<a href="https://github.com/w3c/aria/issues/667" target="blank">issue</a>
<p>Aims to address this problem.</p>
</div>},

{title: "Building my own grid", contents: <div>
	<p>I decided that the only way to get the grid that would allow me to completely customize the speech output is to remove the aria and html elements. So I redesigned the grid to be a little more component based and I removed the aria and just had normal div elements. I reviewed the result of this grid and realized that I could add aria back in and still have all the keys routed through the grid, so the user could choose to see the map through a table or in edit mode. I added back the aria and added support for header rows.</p>
	<p>The refactor of the grid aloud for quick and easy prototyping. I created an example of what a grid would look like with a hurricane at:</p>
	<a href="https://youtu.be/2trTUupyynU" target="blank">Grid demo 1</a>
	</div>},

{title: "Talking with Experts", contents: <div>
	<p>Everyone in our group got interviews with experts in the field of mapping or blindness and we asked them about their thoughts with mapping. I originally wanted to interview a para educator, someone who works one on one with a blind student all day in a classroom. Unfortunately, none of the para educators I asked could interview before the end of the class. I instead interviewed my mom who is a teacher of the blind and visually impaired (the boss of the para educators).</p>
	</div>},

{title: "What I learned from the interviews", contents: <div>
	<p>We need to have something that is easy to use and integrates with the existing platforms. For example, the guy who Lena interviewed, said they would like to have audio or tactile graphs on their new web tool, but they don’t have any knowledge of how to implement audio graphs in their existing tools. Sonja, the TVI I interviewed, said that she needs to have something that is super easy and quick, and possibly something that teachers can use to make their handouts in the first place, so the teacher’s effort isn’t duplicated. Everyone we interviewed said accessibility of charts, maps and graphs is a problem, and they would all like to be a part of figuring out an answer to the problem.</p>
	</div>},

{title: "Project Management Techniques", contents: <div>
	<p>Our group created a</p>
	<a href="https://docs.google.com/spreadsheets/d/1kdB5kpD048483h28H_V50viu4zwSMU2Hv5g7BvZqozQ/edit#gid=808815092" target="blank">Project Plan</a>
	<p>On November 19, everyone but Ale attended the Create DAV bootcamp and there was a project management workshop for 6 hours on that Sunday. As a part of that workshop, we learned how important it is to have deliverables set out for every part of our project. We learned about the need and use for a Work Breakdown Structure document, a Gantt chart, a Tracking Sheet, and a budget. We went through the last two weeks of the semester and broke down everything that we needed to have happen. It was very fascinating to go through and turn our project into quantifiable goals and see everything that needed to be done. It allowed us to properly budget our time and effort into what exactly we needed to do in order to make all the deadlines without worry of being late. For next term we are going to do a project plan at the very beginning of the semester and get all the deliverables out on the table before we do anything else. Something that was very fascinating that is not very intuitive, is that project plans should be created from the last deliverable to now, rather than from now to the last deliverable. This is to make sure important key tasks are not pushed to the very end and so key players can be freed up to work on the most important deliverables rather than focusing on something someone else can do. I think that once we are able to get a plan in place, it will really help keep us on track and actually produce something useful at the end of the term.</p>
	</div>},

{title: "Plans for next semester", contents: <div>
	<p>Everyone in our group wants to stay in our group for the next semester. We plan to have a prototype of a Doppler monitor that only uses sound, several prototypes of diagram representations Brandon can use in his Data to Perception class, and a more accurate and complete prototype of the hurricane movement system. We are also going to be meeting with Esry to see what deliverables they would like to have and we may switch our focus from hurricane to showing bylaw plots to work with the guy Lena interviewed.</p>
	</div>},
]