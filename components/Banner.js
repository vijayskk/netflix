import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


function Banner({movies}) {
    let path = "https://images.tmdb.org/t/p/original" + movies[0].backdrop_path
    return (
        <div className="md:-mt-24 -mt-10">
            

                <div >
                    <img loading="lazy" src={path} alt="" className="w-screen"/>
                    
                </div>

        </div>
    )
}

export default Banner
