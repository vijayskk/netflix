import PerfectScrollbar from 'perfect-scrollbar';


function Title({Heading , data}) {

    return (
        <div className="text-white ">
            <h1 className="relative z-40 text-4xl font-semibold pl-8 md:pt-20 pt-10">{Heading}</h1>
            <div id="my_elem" className="posters -mb-14 relative z-50">
                {
                    data.map((obj)=>{
                        let path = "https://images.tmdb.org/t/p/w300" + obj.poster_path
                        return (
                            <>
                            <img className="item" src={path} alt="" />
                            
                            </>
                        )
                    })
                }
                


            </div>
        </div> 
    )
}

export default Title
 