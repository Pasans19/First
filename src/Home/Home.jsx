import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Carousel from "../Components/Carousel/carousel";
import Card from "../Components/Card/card";
import Foter from "../Components/Foter/foter";
import Navs from "../Components/Navs/navs";

const Home = () => {
    return (
        <div>
            <Navbar />
        <Carousel/>
        <Navs/>
        <Card/>
        <Foter/>
        </div>
    );
}

export default Home;
