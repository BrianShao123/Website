import React, { useState } from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'
import { useScrollContainer } from 'react-indiana-drag-scroll';
import Box from '@mui/material/Box';
import { Typography } from 'antd';
import "../css/ProjectsPage.css"


function ProjectsPage() {
    const [className, setClassName] = useState("scroll-container");

    let numProjects = 15;
    let arr = [];
    for(let i = 0; i < numProjects; i++)
    {
        arr[i] = "Project " + (i+1);
    }

    return (
        <div> 
            <Box className="center" style={{backgroundColor:'blue', display:'flex', height:'20vh'}}> 
            <Typography className='about-me' 
                style={{fontFamily:'Righteous', fontSize:'35px'}}>
                    Projects
            </Typography>
            </Box>
            <div  onMouseDown={() => setClassName("scroll-container--dragging")}
                onMouseUp={() => setClassName("scroll-container")}> 
                    <ScrollContainer 
                        className={className} 
                        style={{display:'inline-flex', width: '99.75%', border: '2px solid red'}} 
                        >
                            {arr.map(function(element) {
                                return <div className="box" >{element}</div>
                            })}
                    </ScrollContainer>
            </div>
            <Box className="center-top" style={{backgroundColor:'green', height:'25vh'}}> 
                <Typography > 
                    Description
                </Typography>
            </Box>
        </div>
    );
}

export default ProjectsPage
