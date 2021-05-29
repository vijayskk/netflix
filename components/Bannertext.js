function Bannertext({movies}) {
    console.log(movies);
    return (
        <div className="z-50 lg:-mt-52 relative">
            <h2 className="text-white text-5xl bannerhead  md:text-7xl font-sans pl-6 font-bold">{movies[0].title}</h2>
            <div className=" pl-6 pt-4 text-white">
            <button className=" px-6 py-1 bg-gray-600 rounded-md md:bg-black hover:bg-white hover:text-black transition-all">Play</button>
            <button className=" px-6 py-1 bg-gray-600 rounded-md ml-4 md:bg-black hover:bg-white hover:text-black mb-2 transition-all">+ Add to Watchlist</button>
            <p className="max-w-screen-sm descriptiondiv pr-4 pt-2 md:pr-0 line-clamp-3">{movies[0].overview}</p>
            </div>
        </div>
    )
}

export default Bannertext
