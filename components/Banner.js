import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


function Banner({movies}) {
    let path = "https://images.tmdb.org/t/p/original" + movies[0].backdrop_path
    return (
        <div className="md:-mt-24 -mt-16">
            

                <div className="relative">
                <div className="absolute w-full h-32 bottom-0 bg-gradient-to-t from-black to-transparent z-20" />
                    <img loading="lazy" src={path} alt="" className="w-screen"/>
                    
                </div>

        </div>
    )
}

export default Banner
