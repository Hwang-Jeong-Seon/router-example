import React from "react";
import {useNavigate} from "react-router-dom";

const AboutPage = () => {
    const navigate = useNavigate();
    const goToMainpage = () => {
        navigate('/');
    }
    return (
        <div>
            <h1>AboutPage</h1>
            <button onClick={goToMainpage}>메인페이지로슝</button>
        </div>
    )
}

export default AboutPage