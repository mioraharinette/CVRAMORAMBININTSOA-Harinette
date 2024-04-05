import React from 'react'
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import CodeIcon from '@mui/icons-material/Code';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';

function Interests() {
    return (
        <>
            <div className='skills'>
                <h2 className='h2'>Centre d'interests</h2>
                <ul>
                    <li className=''>Informatique</li>
                    <li className=''>Musique</li>
                    <li className=''>Tenis</li>
                    <li className=''>Randonnee</li>
                </ul>
                <div className='interests'>
                    <SportsTennisIcon style={{ fontSize: 40 }}/>
                    <SportsEsportsIcon style={{ fontSize: 40 }}/>
                    <CodeIcon style={{ fontSize: 40 }}/>
                    <DirectionsWalkIcon style={{ fontSize: 40 }}/>
                    <LocalLibraryIcon style={{ fontSize: 40 }}/>
                </div >
                
            </div>
        </>
    )
}
export default Interests; 