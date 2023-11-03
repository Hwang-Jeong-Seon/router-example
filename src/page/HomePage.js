import React from "react";
import {Link, useNavigate} from "react-router-dom";

const HomePage = () => {
    const navi = useNavigate();
    const goToProductPage = () =>{
        navi('/products?q=pants&aaa=123')
    }
    return (
        <div>
            <h1>Homepage</h1>
            <Link to='/' >메인페이리지로갑니다</Link>
            <button onClick={goToProductPage}>go to product page</button>
        </div>
    )
}

export default HomePage