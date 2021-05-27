function Title({Heading , data}) {
    return (
        <div className="text-white z-50">
            <h1 className="relative z-50 text-4xl font-semibold pl-8 md:pt-20 pt-10">{Heading}</h1>
            <div className="posters -mb-14 relative z-50">
                {
                    data.map((obj)=>{
                        let path = "https://images.tmdb.org/t/p/w200" + obj.poster_path
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
 