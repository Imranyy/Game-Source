import { useEffect, useState } from 'react';
const HomePage=()=>{
    const [games,setGames]=useState([]);
    //fetching all games from api
    const fetchGames=async()=>{
        try {
            const apiKey='ddca4f81c1df4add8fda3feb725a7019';
            const url=`https://api.rawg.io/api/games?key=${apiKey}`;
            const response=await fetch(url,{
                method:'GET'
            })
            const parseRes=await response.json();
            console.log(parseRes.results);
            setGames(parseRes.results)
        } catch (error) {
            console.log(error.message)
        }
    }
    useEffect(()=>{
        fetchGames();
    },[])
        return(
        <>
            <div className="start home">
                <div className='grid-home'>
                {games?games.map((game)=>(
                    <div key={game.id} className="card">
                        <div className="card-image"><img src={game.background_image} alt='...'/></div>
                        <div className="card-content">
                            <div className="card-header"><h2>Game One</h2></div>  
                            <div className="card-text">
                                <p>{game.name}</p>
                            </div>  
                        </div>
                    </div>
                    )):(<p>No games</p>)}
                </div>
            </div>

        </>
    )
};

export default HomePage;