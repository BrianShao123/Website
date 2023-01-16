import React, { useState } from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'


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
            <div  onMouseDown={() => setClassName("scroll-container--dragging")}
                onMouseUp={() => setClassName("scroll-container")}> 
                    <ScrollContainer className={className} style={{display:'inline-flex'}} >
                            {arr.map(function(element) {
                                return <div className="box" >{element}</div>
                            })}
                    </ScrollContainer>
            </div>
        </div>
    );
}

export default ProjectsPage
