import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


function Banner() {
    return (
        <div className="md:-mt-24 -mt-10">
            

                <div >
                    <img loading="lazy" src="banner.jpg" alt="" className="w-screen"/>
                    
                </div>

        </div>
    )
}

export default Banner
