import React from 'react'
import "./User.css"
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import EventIcon from '@mui/icons-material/Event';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function User() {
    return (
    <div className='user'>
        
        <img src="./images/sary.jpg" alt="" className="user__avatar"
        
        />
            <h3 className='user__name'>RAMORAMBININTSOA Harinette</h3>
        <p className='user__profession'>Developpeur Web</p>
        <div className='user__infos'>
            <p className='user__info'>
                <HomeIcon/>Infol3 à Madagascar
            </p>
            <p className='user__info'>
                < a href='tel:0348336205'><PhoneIcon/>0348336205</a>
            </p>
            <p className='user__info'>
                < a href="ramorambinintsoa@gmail.com">
                <MailIcon/>
                ramorambinintsoa@gmail.com
                </a>
            </p>
            <p className='user__info'>
                <EventIcon/>
                Date de naissance :24 Fevrier 2001</p>
            <p className='user__info'>
                <LocationOnIcon/>
                Lieu de  naissance :Antsirabe 
            </p>
        </div>

    </div>
    )
}
export default User 