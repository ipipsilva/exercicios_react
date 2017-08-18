import React from 'react'
import {childrenWithProps} from '../utils/reactUtils.js'

export default props =>(
    <div>
        <h2>Familia</h2>
        {childrenWithProps(props.children, props)}
    </div>
)