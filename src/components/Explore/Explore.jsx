import React from "react";
import ExploreCard from './ExploreCard'
import Art from '@/components/Launch/Art'
import Footer from '@/components/Global/Footer'
import Navbar from '@/components/Global/Navbar'



const Explore = () => {
    return (

        <div>
           <Navbar/>
            <ExploreCard/>
            <Art />
        <Footer />
        </div>
    )
}

export default Explore