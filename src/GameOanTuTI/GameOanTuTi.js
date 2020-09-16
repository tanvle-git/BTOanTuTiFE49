import React, { Component } from 'react'
import Computer from './Computer'
import Player from './Player'
import Result from './Result'
import './style.css'

export default class GameOanTuTi extends Component {
    render() {
        return (
            <div className="setBackground">
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-3">
                            <Player />
                        </div>
                        <div className="col-6">
                            <Result />
                        </div>
                        <div className="col-3">
                            <Computer />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
