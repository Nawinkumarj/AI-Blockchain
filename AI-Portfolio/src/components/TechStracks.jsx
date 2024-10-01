import python from "../assets/python-icon.svg"
import html from "../assets/html-icon.svg"
import javasc from "../assets/javascript-icon.svg"
import sqlLite from "../assets/SQLite.svg"
import mysql from "../assets/mysql-icon.svg"
import django from "../assets/django-icon.svg"
import reacticon from "../assets/react-icon.svg"
import tailwind from "../assets/tailwind-icon.svg"
import xd from "../assets/XD-icon.svg"
import figma from "../assets/Figma-icon.svg"
import docker from "../assets/Docker-icon.svg"
import git from "../assets/git-icon.svg"
import gitlab from "../assets/gitlab-icon.svg"
import jira from "../assets/jira-icon.svg"
import photoshop from "../assets/Photoshop-icon.svg"
import s3 from "../assets/s3-icon.svg"
import vercel from "../assets/vercel-icon.svg"
import bootstrap from "../assets/bootstrap.png"
import postman from "../assets/Postman-icon.svg"
import aws from "../assets/aws-icon.svg"
import bitbucket from "../assets/BitBucket-icon.svg"
import canva from "../assets/Canva-icon.svg"
import ibm from "../assets/ibm-icon.svg"
import postgress from "../assets/postgress.svg"
import node from "../assets/nodejs-icon.svg"

const TechStacks = () => {
    return (
        <div className='techStack-container'>
            <div className='techStack-main'>
                <div className='techStack-head'>
                    <h1>TECH STACKS</h1>
                </div>
                {/* <hr/> */}
                <div className='techStack-content'>
                    <div className='techStack-content1'>
                        <div className='techStack-content1-col'>
                            <h1>Programming <br /> languages</h1>
                            <div className='techStack-techs'>
                                <img src={python} alt='python' />
                                <p>Python</p>
                            </div>
                            <div className='techStack-techs'>
                                <img src={javasc} alt='JavaScript' />
                                <p>JavaScript</p>
                            </div>
                        </div>

                        <div className='techStack-content1-col'>
                            <h1>FRONTEND</h1>
                            <div className='techStack-techs'>
                                <img src={reacticon} alt='React' />
                                <p>React.js</p>
                            </div>
                            <div className='techStack-techs'>
                                <img src={html} alt='HTML & CSS' />
                                <p>HTML & CSS</p>
                            </div>
                            <div className='techStack-techs'>
                                <img src={tailwind} alt='TailwindCSS' />
                                <p>TailwindCSS</p>
                            </div>
                            <div className='techStack-techs'>
                                <img src={bootstrap} alt='Bootstrap' />
                                <p>Bootstrap</p>
                            </div>
                        </div>

                        <div className='techStack-content1-col'>
                            <h1>BACKEND</h1>
                            <div className='techStack-techs'>
                                <img src={django} alt='django' />
                                <p>Django</p>
                            </div>
                            <div className='techStack-techs'>
                                <img src={node} alt='django' />
                                <p>Nodejs</p>
                            </div>
                        </div>

                        <div className='techStack-content1-col'>
                            <h1>DATABASES</h1>
                            <div className='techStack-techs'>
                                <img src={mysql} alt='mysql' />
                                <p>MySQL</p>
                            </div>
                            <div className='techStack-techs'>
                                <img src={sqlLite} alt='mdb' />
                                <p>SQLite</p>
                            </div>
                            <div className='techStack-techs'>
                                <img src={postgress} alt='postgress' />
                                <p>PostgresSQL</p>
                            </div>
                        </div>

                        <div className='techStack-content1-col'>
                            <h1>TESTING</h1>
                            <div className='techStack-techs'>
                                <img src={jira} alt='jira' />
                                <p>Jira</p>
                            </div>
                        </div>

                        <div className='techStack-content1-col'>
                            <h1>services</h1>
                            <div className='techStack-techs'>
                                <img src={vercel} style={{color:"white"}} alt='Vercel' />
                                <p>Vercel</p>
                            </div>
                            <div className='techStack-techs'>
                                <img src={ibm} alt='IBM Cloud' />
                                <p>IBM Cloud</p>
                            </div>
                            <div className='techStack-techs'>
                                <img src={aws} alt='AWS' />
                                <p>AWS</p>
                            </div>
                            <div className='techStack-techs'>
                                <img src={s3} alt='s3' />
                                <p>S3 Bucket</p>
                            </div>
                        </div>

                        <div className='techStack-content1-col'>
                            <h1>tools</h1>
                            <div className='techStack-techs'>
                                <img src={git} alt='GIT' />
                                <p>Git</p>
                            </div>
                            <div className='techStack-techs'>
                                <img src={docker} alt='Docker' />
                                <p>Docker</p>
                            </div>
                            <div className='techStack-techs'>
                                <img src={gitlab} alt='GitLab' />
                                <p>GitLab</p>
                            </div>
                            <div className='techStack-techs'>
                                <img src={bitbucket} alt='Bit Bucket' />
                                <p>Bit Bucket</p>
                            </div>
                            <div className='techStack-techs'>
                                <img src={postman} alt='postman' />
                                <p>Postman</p>
                            </div>
                        </div>

                        <div className='techStack-content1-col'>
                            <h1>design</h1>
                            <div className='techStack-techs'>
                                <img src={figma} alt='figma' />
                                <p>Figma</p>
                            </div>
                            <div className='techStack-techs'>
                                <img src={photoshop} alt='Photoshop' />
                                <p>Photoshop</p>
                            </div>
                            <div className='techStack-techs'>
                                <img src={xd} alt='xd' />
                                <p>Adobe XD</p>
                            </div>
                            <div className='techStack-techs'>
                                <img src={canva} alt='canva' />
                                <p>Canva</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default TechStacks