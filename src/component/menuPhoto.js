import React from 'react'
import Title from './title'
import e1 from '../img/Menu final-02.png'
import e2 from '../img/1687744562989_Menu final-01.png'
import { server } from '../fetch'

function MenuPhoto({category}) {

  return (
    <div className='menuDrinksPhoto'>
        {/* <Title txt='Drinks' /> */}
        {category && category.length > 0 && category.map((cat, index) => {
        return (
          <div key={index}>
        <div className='omenuboxstitle'>{ cat.heading && cat.heading}</div>
        <div className='omenuboxscontent'>{cat.subHeading && cat.subHeading}</div>
        <div className='drinksImageContainer'>
          {cat.categoryImage && cat.categoryImage.length > 0 && cat.categoryImage.map((img, i) => {
            return (
            <div key={i}>
            <div className='firstImageContainer'>
              <img src={`${server}/categoryPhoto/${img.fileName}`} alt="" />
            </div>
            </div>
            )
            })}
        </div>
        </div>
        )
        })}
    </div>
  )
}

export default MenuPhoto