import './index.css'


export const Home = () => {
	
	
	return (
		<>

            <nav>
                <a className='nav-link'  href="#about" >About</a>
                <a className='nav-link' href="#projects" >Projects</a>
                <a className='nav-link' href="#skills">Skills</a>
                <a className='nav-link' href="#certifications">Certifications</a>
                <a className='nav-link' href="#contact">Contact</a>
            </nav>
		
		</>
	)
}



// <navbutton>
        
//     </navbutton>
    
    

//     <header>
//         <div class="nav-title" style="font-size: 2rem; text-align: center; margin-top: 1rem;" >
//             <div style="margin-left: auto; margin-right: auto;" id="myname" >HI, I AM</div>
//             <div  style="color:rgb(0, 46, 84); font-weight: 800;" >MD <span style="color: rgb(0, 21, 45)">SHOAIB</span> TASRIF</div>
//             <span style="font-size: 1.3rem;" > Software Developer </span> 
//         </div>
//         <img id="photo" src="./photos/Md Shoaib Tasrif Emon.jpg" style="border-radius: 30%;" />
//     </header>

//     <main>

//         <section id="about"  >
//             <div style="font-size: 1.5rem; color: rgb(0, 21, 45); font-weight: 700;" > About Me </div>
//             <p style="background-color: rgb(0, 46, 84, .3); width: 80%; text-align: center; margin: auto; margin-top: 1rem;
//             box-shadow: 0 .2rem .3rem 0 rgba(0, 0, 0, 0.2), 0 .2rem 1rem 0 rgba(0, 0, 0, 0.2); padding: .5rem; border-radius: .5rem;" >
//                 I am a Software Engineering enthusiast with experience in competitve programming & web development. I am currently looking forward to landing a job which will keep me veryy busy.
//             </p>
//         </section>

//         <section id="projects" style="margin-top: 4rem; margin-left: 2rem; margin-right: 2rem;" >
//             <div class="head1" style="text-align: center; margin-bottom: 1rem;" > Projects </div>
//             <div class="project-container" style="display: grid;"> 

//                 <div class="project-card" > 
//                     <div style="font-size: 1.25rem; font-weight: 600;" > Tour Guide App </div>
//                     <p class="aha"  >
//                         A web app, along with API, made with Django web framework, HTML, CSS, jQuery and Postgresql database. This app allows users to search for their hotels/residences according to their preferred location, time and room quality and book those. Any user can advertise their hotels/ residences and allow those to be booked. I implemented user profiles, authentication, and searching algorithms in this app.
//                     </p>

//                     <div style="margin-top: auto;" >
//                         <button class="btn1" onclick="window.open('https://github.com/shoaib221/Tour-Guide-App', '_blank' )" >
//                             Source
//                         </button> 
//                     </div>
                    
//                 </div>
//                 <div class="project-card" > 
//                     <div style="font-size: 1.25rem; font-weight: 600;" > Amazon Clone </div>
//                     <p class="aha" >
//                         It is a clone of amazon.com. Made with html & css.
//                     </p>
                    
//                     <div style="margin-top: auto;" >
//                         <button class="btn1" onclick="window.open('https://github.com/shoaib221/amazon', '_blank')" >
//                             Code
//                         </button> 
                        
//                         <button class="btn1" onclick="window.open('https://shoaib221.github.io/amazon/', '_blank')" >Live 
//                         </button> 
//                     </div>
//                 </div>
//                 <div class="project-card" > 
//                     <div style="font-size: 1.25rem; font-weight: 600;" > Conference Banner </div>
//                     <p class="aha" >
//                         It is a generic website for a conference.
//                     </p>

//                     <div style="margin-top: auto;" >
//                         <button class="btn1" onclick="window.open('https://github.com/shoaib221/B12A01-landing-launchpad', '_blank')" >
//                             Code
//                         </button> 

//                         <button class="btn1" onclick="window.open('https://shoaib221.github.io/B12A01-landing-launchpad/', '_blank')" >
//                             Live 
//                         </button>
//                     </div>
//                 </div>
                
                
//             </div>
//         </section>


//         <section id="skills" style="margin-top: 4rem; margin-left: 2rem; margin-right: 2rem;"  >
//             <div  class="head1" style="font-size: 1.5rem; text-align: center; margin-bottom: 1rem;" >  Skills </div>
//             <div class="skill-container" style="display: flex; flex-wrap: wrap; justify-content: center;" >
//                 <div class="skill-card" >
//                     <div style="text-align: center; font-size: 1.2rem; margin-bottom: .5rem;" > Competitve Programming </div>
//                     <p style="text-align: center; font-size: .8rem;" >
//                         I have solved 2000+ programming problems on tpics including data structures, graph, dynamic programming & SQL. I have attended a few online contests and reached expert level on codeforces.
//                     </p>
//                 </div>
                
//                 <div class="skill-card" >
//                     <div style="text-align: center; font-size: 1.2rem; margin-bottom: .5rem;" > MERN </div>
//                     <p style="text-align: center; font-size: .8rem;" >
//                         I have 1+ years of experience in MongoDB, Express.js, React & Node.js while building some cool webpages.
//                     </p>
//                 </div>

//                 <div class="skill-card" >
//                     <div style="text-align: center; font-size: 1.2rem; margin-bottom: .5rem;" > Django </div>
//                     <p style="text-align: center; font-size: .8rem;" >
//                         I have 1+ years of experience in django web framework while building a website for a hotel booking in different destinations.
//                     </p>
//                 </div>
//             </div>
//         </section>


        

//         <section id="certifications" style="margin-top: 4rem; margin-left: 2rem; margin-right: 2rem;"  >
//             <div  class="head1" style="font-size: 1.5rem; text-align: center; margin-bottom: 1rem;" >  Certifications </div>
//             <div class="certi-container" >
//                 <div class="project-card" >
//                     <div style="text-align: center; font-size: 1.2rem;" > SQL Advanced </div>
                    
//                     <iframe src="./photos/problem_solving_intermediate certificate.pdf" width="300" height="300"></iframe>
//                     <embed src="./photos/sql_advanced certificate.pdf" type="application/pdf" width="600px" height="500px" /> -->
//                     <a href="./photos/problem_solving_intermediate certificate.pdf" target="_blank" >rblm Solvng</a>
//                     <object data="./photos/sql_advanced certificate.pdf" type="application/pdf" width="600px" height="500px">
                        
//                     </object> 

//                     <p style="text-align: center; font-size: .8rem; margin: .5rem;" >
//                         Issued by Hackerrank <br/>on August 2023 
//                     </p>

//                     <button class="btn1" style="margin-right: auto;" onclick="window.open('./photos/sql_advanced certificate.pdf', '_blank')" >
//                         View
//                     </button>

//                 </div>

//                 <div class="project-card" >
//                     <div style="text-align: center; font-size: 1.2rem;" > Problem Solving <br/> (Intermediate) </div>
                    
                    
//                     <p style="text-align: center; font-size: .8rem; margin: .5rem;" >
//                         Issued by Hackerrank <br/>on August 2023 
//                     </p>

//                     <button class="btn1" style="margin-right: auto;" onclick="window.open('./photos/problem_solving_intermediate certificate.pdf', '_blank')" >
//                         View
//                     </button>
//                 </div>
//             </div>
//         </section>
//     </main>



//     <footer id="footer" style="margin-top: 4rem; background-color: rgb(0, 21, 45); color: white;" >
//         <div id="contact" style="text-align: center; font-size: 1.5rem; margin-bottom: 2rem;" > Contact </div>        
//         <div style="display: flex; justify-content: space-evenly; padding-bottom: 2rem;" >
            
//             <div id="footerl" >
//                 <div style="text-align: center;" >  
//                     <img src="./photos/mail.png" style="height: 1.5rem; width: 2rem;" />
//                     <br/>  shoaibtasrif326@gmail.com
//                 </div>

//                 <div style="text-align: center;">
//                     <img src="./photos/cf.jpg" style="height: 2rem; width: 2rem;" /> 
//                     <br/> <a href="https://codeforces.com/profile/_shoaib_221" target="_blank" > _shoaib_221 </a>
//                 </div>

//                 <div style="text-align: center;" >
//                     <img src="./photos/gh.jpg" style="height: 2rem; width: 2rem;" />
//                     <br/> <a href="https://github.com/shoaib221" target="_blank"> shoaib221 </a> 
//                 </div>
//             </div>
//         </div>
//     </footer>

