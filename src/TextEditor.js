
import React, { useState } from 'react';
import TextCount from './TextCount';


const TextEditor = () => {

  const [characters, setCharacters] = useState(0)

  const changeEdit = (el) => {
    setCharacters(el.target.value.length)    
  }


  return (
    <div>

      <input type="text" name="nome" onChange={ changeEdit } />
      
      <TextCount characters={ characters }/>
    
    </div>
  )

}

export default TextEditor