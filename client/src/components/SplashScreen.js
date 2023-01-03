import * as React from 'react';
import  "../css/SplashScreen.css"
import { Button, Space } from 'antd';
import { Link } from 'react-router-dom';

function SplashScreen() {

return (
    <div className="splash-screen">
        <h1> Welcome to my website!</h1>
        <h2> Hello,</h2>
        <Space wrap className='button-set'>
            <Link to = "/home"> 
                <Button type="primary">Just Visiting</Button>
            </Link>
            <Link to = "/login"> 
                <Button type="link">
                Login
                </Button>
            </Link>
        </Space>
    </div>
);
};

export default SplashScreen;