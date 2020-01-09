import React from 'react'


const GameBoard = (props) => (
    <div> 
        
        {props.hiddenChars.map( (hiddenChar, idx) => {
            let dispVal = hiddenChar.pairValue
            if(!hiddenChar.display){
                dispVal = 'X'
            }
            return <input type='button' onClick={() => props.handleClick(idx)} value={dispVal} className='numBtn' />
        } )}
    </div>
)

export default GameBoard