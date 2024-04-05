import React from 'react'
function Skill({ title, rating }) {
    return (
        <>
        <div className='skill'>
            <p className='skill__title'>{title}</p> 
            <div className='skill__rating'>
                {[...Array(5)].map((_, index) => (
                    <div key={index} className={`circle ${rating > index && "circle-plain"}`}></div>
                ))} 
            </div>  
        </div>
            
        </>
    )
}
export default Skill; 