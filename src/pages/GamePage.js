import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

const GamePage=()=>{
    const navigate=useNavigate();
    const {id}=useParams();
    const [game,setGame]=useState([]);
    const getGame=async()=>{
        try {
            preloader();
            const apiKey='ddca4f81c1df4add8fda3feb725a7019';
            const url=`https://api.rawg.io/api/games/${id}?key=${apiKey}`;
            const response=await fetch(url,{
                method:"GET"
            })
            preloaderOff();
            const parseRes=await response.json();
            console.log(parseRes);
            setGame(parseRes)
        } catch (error) {
            preloader();
            toast.error(error.message);
            console.log(error.message);
            navigate('/')
        }
    }
    useEffect(()=>{
        getGame();
    },[]);
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
            <div className="start">
                <div className="game-detail-page" style={{color:'white'}}>
                    <div className="game-detail-item">
                        <h2>{game.name}</h2><br/>
                        <h2>About</h2>
                        <p>{game.description_raw}</p>
                    </div>
                    <div className="game-detail-item">
                    <a href={game.background_image} target='_blank'><img className="game-img" src={game.background_image} height='250px' width={350} alt=".."/></a><br/><br/>
                   <div className="content">
                        <h4 style={{textDecoration:"underline"}}>Genres</h4><br/>
                            {game.genres&&game.genres.map((genre)=>(
                                <div key={genre.id} style={{marginBottom:'10px'}}>
                                    <a href={genre.image_background} target='_blank'><img src={genre.image_background} alt='..' width={60} height='40'/></a>
                                    <p>{genre.name}</p>
                                </div>
                            ))}
                    <h4 style={{textDecoration:"underline"}}>Platforms</h4>
                    {game.platforms&&game.platforms.map((plat)=>(
                        <div key={plat.id} >
                            <p>{plat.platform.slug}</p>
                        </div>
                    ))}
                   </div>
                   <br/>

                    </div>
                </div>

            </div>
        </>
    )
};

export default GamePage;