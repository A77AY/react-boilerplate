import React, {Component} from 'react'
import {AppContainer} from 'react-hot-loader';
import App from '../App/App'

export default class extends Component {
    render() {
        return (
            <AppContainer>
                <App/>
            </AppContainer>
        )
    }
}