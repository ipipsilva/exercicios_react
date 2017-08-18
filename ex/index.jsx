import React from 'react'
import ReactDOM from 'react-dom'
import Familia from './familia'
import Membro from './membro'

ReactDOM.render(
    <Familia lastName="Silva">
        <Membro name="Igor"/>
    </Familia>
    , document.getElementById('app'))