import { useState } from 'react';
import {Link } from 'react-router-dom';



const ExploreCard = () => {

    const [hoveredIndex, setHoveredIndex] = useState(null);

     
    const explore = [
       
        {
            name:"Hello 1",
           desc:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, voluptatum!",
           cover:"./assets/danpheArt.png",

        },
        {
            name:"Hello 2",
           desc:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, voluptatum!",
           cover:"./assets/danpheArt.png",

        },
        {
            name:"Hello 3",
           desc:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, voluptatum!",
           cover:"./assets/danpheArt.png",

        },
        {
            name:"Hello 4",
           desc:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, voluptatum!",
           cover:"./assets/danpheArt.png",

        },
        {
            name:"Hello 5",
           desc:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, voluptatum!",
           cover:"./assets/danpheArt.png",

        },
        {
            name:"Hello 6",
           desc:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, voluptatum!",
           cover:"./assets/danpheArt.png",

        },
        {
            name:"Hello 7",
           desc:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, voluptatum!",
           cover:"./assets/danpheArt.png",

        },
        {
            name:"Hello 8",
           desc:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, voluptatum!",
           cover:"./assets/danpheArt.png",

        },
        {
            name:"Hello 9",
           desc:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, voluptatum!",
           cover:"./assets/danpheArt.png",

        },
        {
            name:"Hello 10",
           desc:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, voluptatum!",
           cover:"./assets/danpheArt.png",

        },
        {
            name:"Hello 11",
           desc:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, voluptatum!",
           cover:"./assets/danpheArt.png",

        },
        {
            name:"Hello 12",
           desc:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, voluptatum!",
           cover:"./assets/danpheArt.png",
        },


    ]

   return (
    <>
    {explore.map((val, index) => (
        <div
        key={index}

        onMouseEnter={() => setHoveredIndex(index)}
       onMouseLeave={() => setHoveredIndex(null)}
        >

            {/* Display cover image only if not hovered  */}
           
           {hoveredIndex === index && (
            <>
            <h4>{val.name}</h4>
           
           {/* routing for  */}
           <button>See More</button>
            </>
           )}


        </div>

    ) )}
    
    
    </>
   )

}
export default ExploreCard;