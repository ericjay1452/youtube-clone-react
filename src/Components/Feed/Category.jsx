import React from 'react'

const Category = (props) => {
    const selectedCategory = "New";
    const {name, icon} = props.category

  return (
    <>
        <button className='category-btn'
        style={{color : "white", background : name === selectedCategory && "#FC3150"}}
        >
            <span style={{color : name === selectedCategory ? "white"  : "orange", marginRight : "15px"}}>{icon}</span>
            <span style={{opacity : name === selectedCategory ? "1" : "0.8"}}>{name}</span>
        </button>
    </>
  )
}

export default Category