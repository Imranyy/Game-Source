import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const HomePage=()=>{
    const [games,setGames]=useState([]);
    //fetching all games from api
    const fetchGames=async()=>{
        try {
            preloader();
            const apiKey='ddca4f81c1df4add8fda3feb725a7019';
            const url=`https://api.rawg.io/api/games?key=${apiKey}`;
            const response=await fetch(url,{
                method:'GET'
            })
            preloaderOff();
            const parseRes=await response.json();
            console.log(parseRes);
            setGames(parseRes.results);
        } catch (error) {
            preloaderOff();
            console.log(error.message);
        }
    }
    useEffect(()=>{
        fetchGames();
    },[])
     //preloader
    const preloader=()=>{
        const loader=document.querySelector('.preload');
        loader.style.display='block';
    }
    const preloaderOff=()=>{
        const loader=document.querySelector('.preload');
        loader.style.display='none';
    }
        return(
        <>
            <div className='preload'></div>
            <div className="start home">
                <div className='grid-home'>
                {games?games.map((game)=>(
                    <Link to={`/game/${game.id}`} key={game.id} className="card">
                        <div className="card-image"><img src={game.background_image} alt='...'/></div>
                        <div className="card-content">
                            <div className="card-header">
                                <h2>{game.name}</h2>
                            </div> <br/> 
                            <div className="card-text">
                                <p>Rating: {game.rating}</p>
                            </div>  
                        </div>
                    </Link>
                    )):(<p>No games</p>)}
                </div>
            </div>

        </>
    )
};

export default HomePage;