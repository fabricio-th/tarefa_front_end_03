import React, { useState } from 'react';

const TextCount = (props) => {

  return (
    <div>
      Esse texto contém { props.characters } caracteres.
    </div>

  )
}

export default TextCount