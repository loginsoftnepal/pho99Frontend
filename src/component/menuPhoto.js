import React from 'react'
import Title from './title'
import e1 from '../img/Menu final-02.png'
import e2 from '../img/1687744562989_Menu final-01.png'

function MenuPhoto() {

  return (
    <div className='menuDrinksPhoto'>
        {/* <Title txt='Drinks' /> */}
        <div className='omenuboxstitle'>Drinks</div>
        <div className='drinksImageContainer'>
            <div className='firstImageContainer'>
              <img src={e2} alt="" />
            </div>
            <div className='secondImageContainer'>
               <img src={e1} alt="" />
            </div>
        </div>
    </div>
  )
}

export default MenuPhoto