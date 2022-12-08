import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage(props) {
    return (
        <div className='about-page'>
            <div className='grid-about'>
                <h3>
                    Game source is game platform interracts with a video game database API (RAWG API) that enables access to data about video game. 
                    This platform enables users to search for video games from the API.<br/><br/> In here, you will get 
                    popular games reviews and recommend, genres, description, etc.
                    This platform was made for users would like to play video games but lack views on which
                    game to play.
                    <br/><br/>
                    Join Our Community by <Link style={{textDecoration:'underline'}} to='/register'>creating an account </Link>
                    or <Link style={{textDecoration:'underline'}} to='/login'>Sign in</Link> if you have an account.
                </h3>
                <a href='https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg' target="_blank"><img src='https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg' alt='..'/></a>
            </div>
            <div className='grid-about1'>
                <video controls><source src='https://media.rawg.io/media/stories/0fa/0fa2332e05f993a96e0bc3904f1c7fe0.mp4' type='video/mp4'/>Your browser doesn't support the video tag</video>
                <a href='https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg' target='_blank'><img src='https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg' alt='..'/></a>
            </div>
        </div>
    );
}

export default LandingPage;