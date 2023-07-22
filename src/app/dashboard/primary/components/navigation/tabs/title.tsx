import React from 'react'

type props = {
  title: string
}

function Title(props:props) {
  return (
    <div>
        {props.title==="menu"?
        <div>
            <p>Always show in sidebar:</p>
        </div>
        :
        <div>
            <p>Select and reorder pages to bookmark.</p>
        </div>    
    }
    </div>
  )
}

export default Title