import React from "react";
import Slider from "react-slick";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};

const Carousel = ({ data }) => {
    let sortedData = data ? [...data.results] : [];
    const slice = sortedData.slice(0, 5)
    return (
        <>
            <div className="">
                <Slider {...settings}>
                    {slice.map((movie) => (
                        <div key={movie.id} className=" relative">
                            <img src={`https://www.themoviedb.org/t/p/w1280${movie.backdrop_path}`}
                                alt={movie.title}
                                className="w-full h-full object-fill  shadow-lg" />
                            <div className="h-full flex  justify-center flex-col w-full md:w-1/2 absolute top-0 left-0 px-4 py-2  text-white bg-gradient-to-r from-black/50 to-transparent">
                                <h3 className="text-xl md:text-4xl lg:text-5xl font-extrabold">{movie.title}</h3>
                                <div className="flex flex-col py-2 lg:py-5">
                                    <span className="flex text-2xl md:text-3xl lg:text-4xl py-2 lg:py-5 truncate">
                                        <p className=" font-bold text-white border px-2 rounded-lg bg-dark mr-2">IMDB</p>
                                        <span className="font-bold"> : {movie.vote_average}</span>
                                    </span>
                                    <span className="text-sm  font-bold truncate">
                                        <span className="text-xs mr-1">Release Date :</span>
                                        {new Date(movie.release_date).toLocaleDateString("tr")}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    )
}

export default Carousel