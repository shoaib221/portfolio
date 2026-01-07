import '../lib/Theme/Theme.css';
import '../lib/Box/box1.css';
import { skills, projects, achievements, contacts } from '../data/skills';
import { Box12, Box13, Box14, Box15, Box16 } from '../lib/Box/box1.jsx';


export const Banner = () => {
	return (
		<div id='banner' className='w-full flex flex-col sm:flex-row-reverse justify-evenly items-center gap-4' >
			<div className='h-72 w-72 rounded-full bg-contain bg-top bg-no-repeat' style={{ backgroundImage: `url(/shoaib2.jpg)` }} >

			</div>

			<div className='flex flex-col items-center' >
				<div className='text-2xl font-bold mb-4 text-center' >Hi, I Am</div>
				<div className='text-4xl font-extrabold mb-4 text-center text-(--color4)' >Shoaib Tasrif</div>
				<div className='text-2xl font-semibold mb-4 text-center' >Software Developer</div>
				<button className='button-3 mx-auto' onClick={() => window.open("/Resume_Md_Shoaib_Tasrif.pdf", "_blank", "noopener,noreferrer")} > Resume </button>
			</div>
		</div>
	)
}


export const About = () => {
	return (
		<div id='about' className='w-full gap-4 p-4' >
			<div className='text-2xl text-(--color4) font-bold mb-4 text-center' >About Me</div>
			<div className='text-lg  text-justify' >
				I am passionate about building cool software and solving algorithmic problems with efficiency. I am good at producing well-structured and reusable code with experience in web development & competitive programming. I have made web apps for tour guide, job search, scholarship search and providing caregiving. I have solved 2000+ programming problems and taken part in a number of online contests.
			</div>
		</div>
	)
}


export const Skill = () => {

	return (
		<div id='skill' className='w-full gap-4 p-4' >
			<div className='text-2xl text-(--color4) font-bold mb-4 text-center' >Skills</div>
			<div className='w-full flex flex-wrap justify-evenly items-center gap-4 p-4' >
				{skills.map((skill, index) => <Box12 key={index} job={skill} />)}
			</div>
		</div>
	)
}


export const Project = () => {

	return (
		<div id='project' className='w-full gap-4 p-4' >
			<div className='text-2xl text-(--color4) font-bold mb-4 text-center' >Projects</div>

			<div className='w-full grid grid-cols-[1fr] sm:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr_1fr] gap-2' >
				{projects.map((skill, index) => <Box13 key={index} job={skill} />)}
			</div>
		</div>
	)
}


export const Achievement = () => {

	return (
		<div id='achievement' className='w-full gap-4 p-4' >
			<div className='text-2xl text-(--color4) font-bold mb-4 text-center' >Achievement</div>

			<div className='w-full flex flex-col gap-4' >
				{achievements.map((skill, index) => { return index % 2 === 1 ? <Box15 key={index} job={skill} /> : <Box14 key={index} job={skill} /> })}
			</div>
		</div>
	)
}


export const Contact = () => {

	return (
		<div id='contact' className='w-full gap-4 p-4 bg-(--color4) text-(--color1)' >
			<div className='text-2xl  font-bold mb-4 text-center' >Connect Me</div>
			<div className='w-full grid lg:grid-cols-[1fr_1fr_1fr_1fr] grid-cols-[1fr_1fr] gap-2' >
				{contacts.map((skill, index) => <Box16 key={index} data={skill} />)}
			</div>
		</div>
	)
}

