import React, { useContext, useEffect, useState } from 'react'
import Box from '@mui/material/Box';


import "../css/Home.css"
import { Typography } from 'antd';

const Home = () => {
    

    return (
        <Box className='home'> 
                <Typography className='about-me' style={{fontFamily:'Righteous', fontSize:'35px', textAlign:'center'}}>About Me</Typography>
                <Box> 
                    <img src={`${process.env.PUBLIC_URL}/test pic.png`} alt='test'/>
                    <h2> "Once upon a time, in a land of ones and zeroes, 
                        a young computer science student embarked on a journey 
                        to uncover the secrets of the digital realm. Armed with a 
                        keyboard and a thirst for knowledge, they delved deep into 
                        the world of coding, problem solving, and algorithms. Along 
                        the way, they encountered challenges and obstacles, but they 
                        never gave up. They knew that the key to success was to always 
                        keep learning, growing, and improving. And so, with a smile 
                        on their face and a spring in their step, they continued to 
                        march forward on their quest to become a computer science master."</h2>
                </Box>

        </Box>


    );
}
export default Home;