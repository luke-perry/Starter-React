import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css'

import Router from './Router'
import './styles.scss'

const mountNode = document.getElementById('app')

ReactDOM.render(<Router />, mountNode)
