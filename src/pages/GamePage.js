import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const GamePage=()=>{
    const {id}=useParams();
    const [game,setGame]=useState([]);
    const getGame=async()=>{
        try {
            const apiKey='ddca4f81c1df4add8fda3feb725a7019';
            const url=`https://api.rawg.io/api/games/${id}?key=${apiKey}`;
            const response=await fetch(url,{
                method:"GET"
            })
            const parseRes=await response.json();
            console.log(parseRes);
            setGame(parseRes)
        } catch (error) {
            console.log(error.message)
        }
    }
    useEffect(()=>{
        getGame();
    },[])
    return(
        <div className="start">
            <div className="game-detail-page" style={{color:'white'}}>
                <h2>{game.name}</h2>
            </div>

        </div>
    )
};

export default GamePage;