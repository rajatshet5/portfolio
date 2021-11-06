import { Typography } from "@material-ui/core";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import styles from "./Home.module.css";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import BlurOnIcon from '@material-ui/icons/BlurOn';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PlaceIcon from '@material-ui/icons/Place';

// const useStyles = makeStyles({
//     navbar: {
//         height: "50px",
//         alignItems:"center",
//         display: "flex",
//         justifyContent: "space-evenly",
//         backgroundColor: "white",
//         width: "100%",
//         // position:"fixed"
//     },
//     temp: {
//         width:"100%"
//     },
//     intro: {
//         width: "100%",
//         height: "500px",
//         backgroundColor:"green",
//         border: "1px solid black",
//         display: "flex",
//         position: "relative"
//     },
//     name: {
//         border: "1px solid black",
//         height: "100px",
//         display: "flex",
//         flexDirection: "column",
//         position: "fixed",
//         left: "30%",
//         top:"30%"
//     }
// })

const Container = styled.div`
display: flex;
flex-direction: column;
background-color: rgb(29, 29, 31);
padding: 0px !important;

`;
const Navbar = styled.div`
color: white;
        height: 50px;
        align-items:center;
        display: flex;
        justify-content: space-evenly;
        background-color: rgb(29, 29, 31);
        z-index: 10;
        width: 100%;
        position: sticky;
        top:0;
        font-size: 15px;
        @media (max-width: 768px) {
            justify-content: space-around;
            font-size: 13px;
      }
`;
const Intro = styled.div`
        /* height: 530px; */
        height: 43vw;
        display: flex;
        align-items: center;
        /* padding: "19px"; */
        @media (max-width:768px) {
            display: flex;
            flex-direction: column;
            height: 155vw;
            padding: 0px !important;
            /* border:1px solid yellow; */
        }
`;
const Skills = styled.div`
display: flex;
width: 100%;
`;
const Projects = styled.div`
display: flex;
flex-direction: column;
background-color: rgb(245,245,247);
padding: 19px;
`;
const ProjectBox = styled.div`
width: 79%;
margin: 19px auto;
margin-top: 59px;
background-color: #ffffff;
display: flex;
/* flex-direction: column; */
min-height: 330px;
border-radius: 7px;
/* border: 1px solid red; */
/* box-shadow:1px 3px 3px lightgrey; */
box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
/* transition: transform .5s; */
transition: box-shadow 0.5s ease-in-out;
cursor:auto;
text-align:center;
color:black;
font-size: 19px;
/* border: 1px solid green; */
@media (max-width: 768px) {
    flex-direction: column;
    width: 90%;
    /* height: 380px; */
  }
  :hover {
      /* box-shadow:3px 3px 3px #b5b5b9; */
      box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
      transition: all 900ms ease;
      transform: scale(1.008);
  }

`;
const SkillBox = styled.div`
width: 180px;
height: 90px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 38px;
margin-bottom: 23px;
:hover {
    transform: scale(1.05);
    transition: all 300ms ease;
    cursor:auto;
}
/* border:1px solid white; */

`;
const Footer = styled.div`
margin: 0;
padding: 0;
flex-direction: column;
/* display: flex; */
height: 300px;
/* justify-content: space-evenly; */
/* align-items: center; */
background-color: rgb(29,29,31);
text-align: center;
color:white;
`;
const NavTab = styled.div`
padding: 10px 19px;

`;
const ContactSub = styled.div`
display:flex;
width:60%;
justify-content:space-evenly;
margin:auto;
@media(max-width:768px) {
    margin: auto;
    flex-direction: column;
    font-size: 13px;
    padding-left: 23px;
}
`;
const SubIntro = styled.div`
padding-bottom:130px;
display:flex;
flex-direction: column;
width:90%;
margin:5px auto;
align-items:center;
justify-content:space-around;
@media (max-width:768px) {
    padding-bottom: 10px;
    font-size: 13px;
}
`;
const NameDiv = styled.div`
width: 50%;
padding: 5px 69px;
display: flex;
height: 150px;
flex-direction: column;
justify-content: center;
@media (max-width: 768px) {
    padding: 5px 10px !important;
    margin-top: 80px;
    margin-left: 0px;
    /* border:1px solid yellow; */
}
p {
    font-size: 59px;
    color: white;
    /* border: 1px solid white; */
    width: 90%;
    margin: 0;
}
  p {
      @media (max-width: 768px) {
        font-size: 31px;
        padding-left: 10px;
      }
  }
  h4 {
      color:grey;
      font-size: 19px;
      font-weight: 460;
      margin: 0;
      padding: 5px 3px;
      @media (max-width: 768px) {
          font-size: 10px;
        }
    }
    div {
        div {
            font-size:15px;
            font-weight:350;
            color:white;
            @media(max-width:768px) {
                font-size: 10px;
            }
        }
    }
    `;
export function Home() {
    const smallScreen = useRef();
    const [home, setHome] = useState(false)
    const [_projects, setProjects] = useState(false)
    const [_skills, setSkills] = useState(false)
    const [contact, setContact] = useState(false)
    const intRef = useRef();
    // const timRef = useRef();
    // console.log(intRef);
    useEffect(() => {
        window.scrollTo(0, 0);
        start();
        return () => {
            clearInterval(intRef.current);
        }
    }, []);
    // const wait = () => {
    //     timRef.current = setTimeout(() => {
    //         start();
    //     }, 1550);
    // }
    const delay = (t) => {
      return new Promise((resolve, reject) => {
          setTimeout(() => {
              resolve();
          }, t);
      });
  }
    const start = () => {
        intRef.current = setInterval(() => {
            // clearTimeout(timRef.current);
            handleScroll();
            // console.log(intRef.current);
        }, 100);
    }
    const handleScroll = () => {
        const val = window.pageYOffset;
        const iw = window.innerWidth;
        if (iw < 500) {
            smallScreen.current = true;
        } else {
            smallScreen.current = false;
        }
        // console.log(val);

        if (smallScreen.current) {
            if ((val < 600) && (!home)) {
                setHome(true);
                setProjects(false);
                setSkills(false);
                setContact(false);
            } else if ((val >= 600) && (val < 2200) && (!_skills)) {
                setSkills(true);
                setHome(false);
                setProjects(false);
                setContact(false);
            } else if ((val >= 2200) && (val < 3750) && (!_projects)) {
                setProjects(true);
                setHome(false);
                setSkills(false);
                setContact(false);
            } else if ((val >= 3750) && (!contact)) {
                setContact(true);
                setProjects(false);
                setHome(false);
                setSkills(false);
            }
        } else {
            if ((val < 470) && (!home)) {
                setHome(true);
                setProjects(false);
                setSkills(false);
                setContact(false);
            } else if ((val >= 470) && (val < 1530) && (!_skills)) {
                setSkills(true);
                setHome(false);
                setProjects(false);
                setContact(false);
            } else if ((val >= 1530) && (val < 2567) && (!_projects)) {
                setProjects(true);
                setHome(false);
                setSkills(false);
                setContact(false);
            } else if ((val >= 2567) && (!contact)) {
                setContact(true);
                setProjects(false);
                setHome(false);
                setSkills(false);
            }
        }
    }
    const skills_fe = [
        {
            img: "js.png",
            name: "JavaScript"
        },
        {
            img: "/logo512.png",
            name: "React"
        },
        {
            img: "redux.png",
            name: "Redux"
        },
        {
            img: "/html.png",
            name: "HTML"
        },
        {
            img: "/css.png",
            name: "CSS"
        },
        {
            img: "/material.png",
            name:"Material UI"
        },
        {
            img: "/styled.png",
            name:"Styled Components"
        }
    ];
    const skills_be = [
        {
            img: "/nodejs.png",
            name: "NodeJS"
        },
        {
            img: "/express.png",
            name:"Express"
        },
        {
            img: "/mongodb.png",
            name:"MongoDB"
        }
    ]
    const projects = [
        {
            name: "Orbitz Clone",
            img: "/orbitzPicture.png",
            desc: "Hotel booking application",
            features: ["Users can search for hotels by the name of the city.","Users can also book rooms in any hotel by completing the payment process.", "Duration: 6 days."],
            responsibilities: "",
            techStack:["React", "Redux", "MaterialUI"],
            gitHub:"https://github.com/Deependra-Negi/orbitz-clone",
            demo:"https://orbitz.netlify.app/"
        },
        {
            name: "Lybrate Clone",
            img: "/lybratePicture.png",
            desc: "Connects doctors with users",
            features: ["Book an online consultation or a clinic appointment with any doctor at any particular date and time and the respective doctor gets notified.", "Anonymous users can ask questions to doctors and doctors answer the questions. The question and the answer, along with the doctor details will get added to the health feed page.", "Search for doctors by their name / specialty / city. Search for keywords in the questions that have been asked in the health feed page."],
            responsibilities: "",
            techStack:["JavaScript", "HTML", "CSS"],
            gitHub:"https://github.com/rajatshet5/lybrate.com-Clone/tree/main/Project_Lybrate",
            demo:"https://lybrate-clone.vercel.app/Home/home2.html"
        },
        {
            name: "beDonor",
            img: "/bedonorPicture.png",
            desc: "Fundraiser/Donation application",
            features: ["A logged-in user can raise funds for any cause by filling in the necessary details, and the fundraiser will be added to the list of all the existing fundraisers.", "Any user can donate money to the fundraisers. After donation, the amount is added to the raised amount and the changes are reflected in 'fundraisers', 'supporters' and 'top donors' sections."],
            responsibilities: "",
            techStack: ["React"],
            gitHub: "https://github.com/rajatshet5/bedonor.org-Clone",
            demo:"https://bedonor.vercel.app/"
        },
        // {
        //     name: "Sudoku Solver",
        //     img: "/sudokuPicture.png",
        //     desc: "An application that can solve any Sudoku problem",
        //     features: "",
        //     responsibilities: "",
        //     techStack:"React",
        //     gitHub:"",
        //     demo:""
        // }
    ];
    const goHome = async () => {
        window.scrollTo(0, 0)
        await delay(700)
        setHome(true);
        setProjects(false);
        setSkills(false);
        setContact(false);
    };
    const goSkills = async () => {
        if (smallScreen.current) {
            window.scrollTo(0, 650)
        } else {
            window.scrollTo(0, 595)
        }
        await delay(700)
        setHome(false);
        setProjects(false);
        setSkills(true);
        setContact(false);
    };
    const goProject = async () => {
        if (smallScreen.current) {
            window.scrollTo(0, 2308)
        } else {
            window.scrollTo(0, 1695)
        }
        await delay(700)
        setHome(false);
        setProjects(true);
        setSkills(false);
        setContact(false);
    };
    const goContact = async () => {
        if (smallScreen.current) {
            window.scrollTo(0, 3980)
        } else {
            window.scrollTo(0, 3010)
        }
        await delay(700)
        setHome(false);
        setProjects(false);
        setSkills(false);
        setContact(true);
    };
    return (
        <Container>
            <Navbar>
                <NavTab style={{ borderBottom: home ? "2px solid #00d9ff" : null, cursor: "pointer", color:home?"#00d9ff":null }} onClick={goHome} >Home</NavTab>
                <NavTab style={{ borderBottom: _skills ? "2px solid #00d9ff" : null, cursor: "pointer", color:_skills?"#00d9ff":null }} onClick={goSkills} >About</NavTab>
                <NavTab style={{ borderBottom: _projects ? "2px solid #00d9ff" : null, cursor: "pointer", color:_projects?"#00d9ff":null }} onClick={goProject} >Projects</NavTab>
                <NavTab style={{ borderBottom: contact ? "2px solid #00d9ff" : null, cursor: "pointer", color:contact?"#00d9ff":null }} onClick={goContact}>Contact</NavTab>
            </Navbar>
            <div>
                <Intro>
                    <NameDiv >
                        <p style={{paddingLeft:"1px"}}>Rajat Shet</p>
                        <h4 style={{marginLeft:"2px", color:"#0fb0cc"}}>Full Stack Developer</h4>
                        <div style={{ display: "flex", alignItems: "center" }}><PlaceIcon className={styles.placeIcn}/><div>Bengaluru, India</div></div>
                        {/* <Typography className={styles.nameTyp} style={{color:"white"}} variant="h3">Rajat Shet</Typography> */}
                        {/* <Typography style={{color:"rgb(139,139,144)", textAlign:"left"}} variant="caption">Full Stack Developer</Typography> */}
                    </NameDiv>
                    <div style={{display:"flex", height:"100%", width:"90%", alignItems:"flex-end", justifyContent:"space-evenly"}}>
                        <SubIntro >
                            <div className={styles.pfpDiv}>
                            <img src="/pfp.png" alt="dp"/>
                            <div style={{display:"flex", border:"1px solid #03404b", backgroundColor:"rgb(29, 29, 31)", height:"41px", alignItems:"center", width:"100%", justifyContent:"space-evenly"}}>
                                <a target="_blank" rel="noopener noreferrer" style={{color:"white"}} href="https://github.com/rajatshet5"><GitHubIcon className={styles.liIcn}/></a>
                            <div style={{ display: "flex", alignItems: "center" }}><ListAltIcon style={{marginRight:"5px", color:"white", paddingTop:"2px"}}/><p style={{ color: "white" }}><a target="_blank" rel="noopener noreferrer" style={{color:"white"}} href="https://drive.google.com/file/d/12VfMNKHbcxlyFz-8qppfpeTJ2ZP6g3TR/view?usp=sharing">Resume</a></p></div>
                            </div>
                            </div>
                            {/* <div ><a  style={{display:"flex", alignItems:"center", color:"white"}} href="mailto:rajatshet5@gmail.com"><MailOutlineIcon /><p style={{marginLeft:"5px"}}>rajatshet5@gmail.com</p></a></div> */}
                            {/* <p style={{display:"flex", alignItems:"center"}}><MailOutlineIcon style={{ color: "white" }} /><p style={{color:"white", margin:"0px 8px"}}>rajatshet5@gmail.com</p></p> */}
                        </SubIntro>
                        {/* <img src="" alt="dev"/> */}
                    </div>
                </Intro>
                <div className={styles.aboutDiv}>
                    <Typography className={styles.heading} style={{ color: "rgb(23, 23, 26)", fontWeight: "370px",  paddingBottom:"15px", borderBottom:"1px solid rgb(219, 219, 211)", width:"28%", margin:"auto"}} variant="h4">About</Typography>
                    <p style={{marginTop:"59px", fontSize:"23px"}}>Fascinated by computer programs and how they solve real-world problems. Passionate about building computer applications and love solving problems.</p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", backgroundColor: "rgb(23, 23, 24)" }}>
                    <Typography className={styles.heading} style={{color:"white", borderBottom:"1px solid rgb(49, 49, 47)",width:"30%", margin:"5px auto", paddingBottom:"19px", fontWeight:"370px"}} variant="h4">Skills</Typography>
                    <Typography className={styles.skillsSub} >Frontend</Typography>
                <Skills>
                <div className={styles.skills}>
                        {skills_fe.map((item, i) => {
                            return <SkillBox key={i}>
                                <div className={styles.imgDiv}>
                                    <img src={item.img} alt="skills"/>
                                </div>
                                <p>{item.name}</p>
                            </SkillBox>
                        })}
                </div>
                    </Skills>
                    <Typography className={styles.skillsSub} >Backend</Typography>
                    <Skills>
                        <div className={styles.skills}>
                        {skills_be.map((item, i) => {
                            return <SkillBox key={i * 10}>
                                <div className={styles.imgDiv}>
                                    <img src={item.img} alt="skills"/>
                                </div>
                                <p>{item.name}</p>
                            </SkillBox>
                        })}
                </div>
                    </Skills>
                </div>
                <div style={{display:"flex", marginBottom:"0px", padding:"0", flexDirection:"column", backgroundColor:"rgb(245,245,247)"}}>
                    <Typography className={styles.heading} style={{color:"rgb(29, 29, 31)", paddingBottom:"15px", borderBottom:"1px solid rgb(219, 219, 211)", width:"30%", margin:"auto", backgroundColor:"rgb(245,245,247)"}} variant="h4">Projects</Typography>
                <Projects>
                    {projects.map((item, i) => {
                        return <ProjectBox key={i * 100}>
                            <div className={styles.projImgDiv}>
                                <img src={item.img} alt="project"/>
                            </div>
                            <div className={styles.descDiv}>
                                <div style={{display:"flex", flexDirection:"column", width:"99%"}}>
                                <p style={{margin:"3px", fontSize:"28px"}}>{item.name}</p>
                                    <p style={{ margin: "5px", fontSize: "13px", color: "rgb(178, 178, 180)" }}>{item.desc}</p>
                                    <div className={styles.featuresDiv}>
                                        <ul>
                                        {item.features.map((feature, i) => {
                                            return <li style={{color:"#181827"}} key={i * 10000} className={styles.features}>{feature}</li>
                                        })}
                                        </ul>
                                    </div>
                                    <div style={{display:"flex"}}>
                                        <div style={{display:"flex", alignItems:"center"}}><p style={{fontSize:"15px", fontWeight:"500", paddingLeft:"18px", margin:"5px", color:"#262629"}}>Tech Stack</p><DoubleArrowIcon/></div>
                                        <div style={{display:"flex", justifyContent:"space-evenly"}}>
                                            {item.techStack.map((tech, i) => {
                                                return <div key={i * 500000} style={{ display:"flex", justifyContent:"center",margin:"3px",color:"#262627", backgroundColor:"#e4eaeb", borderRadius:"1px", padding:"3px 8px",fontSize: "14px", fontWeight:"400"}}>{tech}</div>
                                            })}
                                        </div>
                                    </div>
                            {/* <Button variant="outlined" style={{textTransform:"none", margin:"5px auto", width:"50%", height:"30px", fontSize:"10px"}} >See More</Button> */}
                                </div>
                                <div className={styles.linksDiv}>
                                    <a target="_blank" rel="noopener noreferrer" href={item.gitHub} style={{display:"flex", alignItems:"center"}}><GitHubIcon style={{width:"15px", marginRight:"6px", color:"white"}}/><span>GitHub</span></a>
                                    <a target="_blank" rel="noopener noreferrer" href={item.demo} style={{display:"flex", alignItems:"center"}}><BlurOnIcon style={{width:"19px", marginRight:"4px", color:"white"}}/><span>Demo</span></a>
                                </div>
                            </div>
                            </ProjectBox>
                    })}
                </Projects>
                </div>
                <Footer>
                    <h1 style={{fontWeight:"450", fontSize:"29px", padding:"18px", width:"30%", margin:"19px auto", borderBottom:"1px solid rgb(49, 47, 47)"}}>Contact</h1>
                    <div style={{ display: "flex",margin:"auto", flexDirection:"column", width: "70%", justifyContent: "space-around" }}>
                        <div style={{display:"flex", width:"60%", height:"80px", justifyContent:"space-evenly", margin:"auto"}}>
                            <div style={{display:"flex", alignItems:"center"}}><a target="_blank" rel="noopener noreferrer" style={{color:"white"}} href="https://www.linkedin.com/in/rajat-shet/"><LinkedInIcon/></a></div>
                            <div style={{display:"flex", alignItems:"center"}}><a target="_blank" rel="noopener noreferrer" style={{color:"white"}} href="https://github.com/rajatshet5"><GitHubIcon/></a></div>
                        </div>
                        <ContactSub >
                            <div style={{ display: "flex", alignItems: "center" }}><PhoneIcon /><p style={{ marginLeft: "5px" }}>+91 8310842420</p></div>
                            <div ><a style={{display:"flex", alignItems:"center", color:"white"}} href="mailto:rajatshet5@gmail.com"><MailOutlineIcon/><p style={{marginLeft:"5px"}}>rajatshet5@gmail.com</p></a></div>
                        </ContactSub>
                    </div>
                </Footer>
            </div>
        </Container>
    )
}