import React from 'react'
import ReactDOM from 'react-dom'
import Familia from './familia'
import Membro from './membro'

ReactDOM.render(
    <Familia lastName="Silva">
        <Membro name="Igor"/>
        <Membro name="Danielle"/>
        <Membro name="Pandora"/>
        <Membro name="Gaya"/>
    </Familia>
    , document.getElementById('app'))