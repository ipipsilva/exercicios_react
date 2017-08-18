import React from 'react'

export default props =>(
    <div>
        <h2>Familia</h2>
        {props.children}
        {React.cloneElement(props.children, {...props})}
    </div>
)