import React, {useState}from 'react'
import PropTypes from 'prop-types'
import Vid from './Vid'

const Vidcontainer = ({vidList}) => {
    return (
        <>
            {vidList.map((vid, index) => (
                <Vid key = {index} vid ={vid} />
            ))
            }
        </>
        
        
    )
    
}








export default Vidcontainer
