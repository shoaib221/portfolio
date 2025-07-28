import './index.css'
import photo1 from './photos/Md Shoaib Tasrif Emon.jpg'
import photo2 from './photos/mongo.png'
import pmail from './photos/mail.png'
import pcf from "./photos/cf.jpg"
import pgh from "./photos/gh.jpg"
import cpsi from './photos/problem_solving_intermediate_certificate.pdf'
import csql from './photos/sql_advanced certificate.pdf'
import pdfCV from './photos/Resume_Md_Shoaib_Tasrif.pdf'
import { useState } from 'react'


export const Home = () => {
	const [ slideNav, setSlideNav ] = useState(false)

    function SlideIn()
    {
        
        
        
            let elem = document.getElementById('left-slide')
            if( elem.style.display === 'none' ) {
                elem.classList.remove('slideout')
                elem.style.display = 'flex'
                
                elem.classList.add('slidein')

            } else {
                elem.classList.remove( 'slidein' )
                elem.classList.add('slideout')
                setTimeout( ()=> { elem.style.display = 'none' }, 300 )
                
            }
            
        
    }

    function NavPos ( pos )
    {
        
        let elem = document.getElementById(pos)
        let elem2 = document.getElementById('left-slide')
        elem2.classList.remove( 'slidein' )
        elem2.classList.add('slideout')
        setTimeout( ()=> { elem2.style.display = 'none' }, 300 )
        setTimeout(()=> {
            elem.scrollIntoView({
                behavior: 'smooth'
            })
        }, 300)
    }
	
	return (
		<>
            <div className='small-nav' >
                <button  style={{ height: '100%', marginLeft: '1rem', backgroundColor: 'var(--color1)', color: 'white' }} onClick={SlideIn} >
                Menu
                </button>
            </div>

            <div id="left-slide" style={{ display: 'none' }}  >
                <button style={{ height: '3rem', marginTop: '1rem' }}  onClick={()=> NavPos('about-cursor')} > About </button>
                <button style={{ height: '3rem' }} onClick={() => NavPos('projects-cursor')} > Projects </button>
                <button style={{ height: '3rem' }} onClick={()=> NavPos( 'skills-cursor' )} > Skills </button>
                <button style={{ height: '3rem' }} onClick={()=> NavPos('certifications-cursor' )} > Certifications </button>
                <button style={{ height: '3rem' }} onClick={()=> NavPos( 'contact' )} > Contact </button>
            </div>

            <nav>
                <a className='nav-link'  href="#about-cursor" >About</a>
                <a className='nav-link' href="#projects-cursor" >Projects</a>
                <a className='nav-link' href="#skills-cursor">Skills</a>
                <a className='nav-link' href="#certifications-cursor">Certifications</a>
                <a className='nav-link' href="#contact">Contact</a>
            </nav>

            <header>
                <div className="nav-title" style={{ fontSize: "2rem", textAlign: "center", marginTop: "1rem" }}     >
                    <div style={{ marginLeft: "auto", marginRight: "auto" }} id="myname" >HI, I AM</div>
                    <div  style={{color:"rgb(0, 46, 84)", fontWeight: "800" }}  >MD <span style={{color: "rgb(0, 21, 45)" }} >SHOAIB</span> TASRIF</div>
                    <span style={{fontSize: "1.3rem" }} > Software Developer </span> 
                </div>
                <img id="photo" src={photo1} style={{borderRadius: "40%"}} alt='i am lost' />
            </header>

            <div id='about-cursor' ></div>

            <section id="about"  >
                <div style={{ fontSize: "1.5rem", color: "rgb(0, 21, 45)", fontWeight: "700" }} > About Me </div>
                <p style={{ backgroundColor: "rgb(0, 46, 84, .3)", width: "80%", textAlign: 'center', margin: "auto", marginTop: "1rem",
                boxShadow: "0 .2rem .3rem 0 rgba(0, 0, 0, 0.2), 0 .2rem 1rem 0 rgba(0, 0, 0, 0.2)", padding: ".5rem", borderRadius: '.5rem' }} >
                    I am a Software Engineering enthusiast with experience in competitve programming & web development. I am currently looking forward to landing a job which will keep me veryy busy.
                    <br/>
                    <button className="btn1" style={{marginTop: '.5rem'}} onClick={ () => window.open(pdfCV, '_blank') } >
                    MY CV
                    </button>
                </p>

                

            </section>

            <div id='projects-cursor' ></div>

            <section id="projects" style={{ marginTop: '4rem', marginLeft: '2rem', marginRight: '2rem' }} >
            <div className="head1" style={{ textAlign: 'center', marginBottom: '1rem'}} > Projects </div>
            <div className="project-container" style={{ display: 'grid' }}> 

                <div className="project-card" > 
                    <div style={{ fontSize: '1.25rem', fontWeight: '600' }} > Tour Guide App </div>
                    <p className="aha"  >
                        A web app, along with API, made with Django web framework, HTML, CSS, jQuery and Postgresql database. This app allows users to search for their hotels/residences according to their preferred location, time and room quality and book those. Any user can advertise their hotels/ residences and allow those to be booked. I implemented user profiles, authentication, and searching algorithms in this app.
                    </p>

                    <div style={{ marginTop: 'auto' }}>
                        <button className="btn1" onClick={ () => window.open('https://github.com/shoaib221/Tour-Guide-App', '_blank' ) } >
                            Source
                        </button> 
                    </div>
                    
                </div>
                <div className="project-card" > 
                    <div style={{ fontSize: '1.25rem', fontWeight: '600' }} > Amazon Clone </div>
                    <p className="aha"  >
                        It is a clone of amazon.com made with React.js.
                    </p>

                    <div style={{ marginTop: 'auto' }}>
                        <button className="btn1" onClick={ () => window.open('https://github.com/shoaib221/amazon', '_blank' ) } >
                            Source
                        </button>

                        <button className="btn1" onClick={ () =>  window.open('https://shoaib221.github.io/amazon', '_blank' ) } >
                            Live
                        </button> 
                    </div>
                    
                </div>
                <div className="project-card" > 
                    <div style={{ fontSize: '1.25rem', fontWeight: '600' }} > Live Chat </div>
                    <p className="aha"  >
                        It is application for chatting with individuals and groups. It is made with MongoDB, Express.js & React.js.
                    </p>

                    <div style={{ marginTop: 'auto' }}>
                        <button className="btn1" onClick={ () => window.open('https://github.com/shoaib221/LiveChat' , '_blank' ) } >
                            Source
                        </button> 

                         
                    </div>
                    
                </div>
            </div>
            </section>


            <div id='skills-cursor' ></div>
        <section id="skills" style={{ marginTop: '4rem', marginLeft: '2rem', marginRight: '2rem' }}  >
            <div  className="head1" >  Skills </div>
            <div className="skill-container"  >
                <div className="skill-card" >
                    <div className='skill-card-header'  > Competitve Programming </div>
                    <p className='skill-card-des' >
                        I have solved 2000+ programming problems on tpics including data structures, graph, dynamic programming & SQL. I have attended a few online contests and reached expert level on codeforces.
                    </p>
                </div>
                
                <div className="skill-card" >
                    <div className='skill-card-header'  > MERN </div>
                    <p className='skill-card-des' >
                        I have 1+ years of experience in MongoDB, Express.js, React.js & Node.js while buildig some cool websites.
                    </p>
                </div>

                <div className="skill-card" >
                    <div className='skill-card-header'  > Django </div>
                    <p className='skill-card-des' >
                        I have 1+ year experience in django web framework while building a website for hotel booking. 
                    </p>
                </div>
            </div>
        </section>


            <div id='certifications-cursor' ></div>

        <section id="certifications"   >
            <div  className="head1"  >  Certifications </div>
            <div className="certi-container" >
                <div className="project-card" >
                    <div className='skill-card-header' > SQL Advanced </div>
                    
                    {/*                     
                    <iframe src="./photos/problem_solving_intermediate certificate.pdf" width="300" height="300"></iframe>
                    <embed src="./photos/sql_advanced certificate.pdf" type="application/pdf" width="600px" height="500px" /> 
                    <a href="./photos/problem_solving_intermediate certificate.pdf" target="_blank" >rblm Solvng</a>
                    <object data="./photos/sql_advanced certificate.pdf" type="application/pdf" width="600px" height="500px">
                        
                    </object>  */}

                    <p className='skill-card-des' >
                        Issued by Hackerrank on August 2023 
                    </p>

                    <button className="btn1" style={{marginRight: 'auto'}} onClick={ () => window.open(csql, '_blank') } >
                        View
                    </button>

                </div>

                <div className="project-card" >
                    <div className='skill-card-header' > Problem Solving (Intermediate) </div>
                    
                    <p className='skill-card-des' >
                        Issued by Hackerrank on August 2023 
                    </p>

                    <button className="btn1" style={{marginRight: 'auto'}} onClick={ () => window.open(cpsi, '_blank') } >
                        View
                    </button>
                </div>
            </div>
        </section>


        <footer id="footer"  >
            <div id="contact"  > Contact </div>        
            {/* <div style="display: flex; justify-content: space-evenly; padding-bottom: 2rem;" > */}
            
            <div id="footerl" >
                <div style={{ textAlign: 'center' }} >  
                    <img src={pmail} style={{ height: '1.5rem', width: '2rem' }} />
                    <br/>  shoaibtasrif326@gmail.com
                </div>

                <div style={{ textAlign: 'center' }}>
                    <img src={pcf} style={{ height: '1.5rem', width: '2rem' }} /> 
                    <br/> <a href="https://codeforces.com/profile/_shoaib_221" target="_blank" > _shoaib_221 </a>
                </div>

                <div style={{ textAlign: 'center' }} >
                    <img src={pgh} style={{ height: '1.5rem', width: '1.5rem' }} />
                    <br/> <a href="https://github.com/shoaib221" target="_blank"> shoaib221 </a> 
                </div>
            </div>
        
        </footer>

		</>
	)
}








