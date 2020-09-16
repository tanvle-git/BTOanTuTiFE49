import React, { Component } from 'react'
import {connect} from 'react-redux'

class Computer extends Component {
    render() {
        return (
            <div>
                <div className="speech-bubble">
                    <img src={this.props.computerChoice.img} alt={this.props.computerChoice.name} width="50%"/>
                </div>
                <img src="./img/playerComputer.png" alt="thanos" style={{width:'100%'}}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        computerChoice: state.GameOanTuTiReducer.computerChoice
    }
}


export default connect(mapStateToProps,null)(Computer)