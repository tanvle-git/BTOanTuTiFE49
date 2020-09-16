import React, { Component } from 'react'
import './style.css'
import {connect} from 'react-redux'

class Player extends Component {
    render() {
        return (
            <div>
                <div className="speech-bubble">
                    <img src={this.props.playerChoice.img} alt={this.props.playerChoice.ten} width="50%"/>
                </div>
                <img src="./img/player.png" alt="ironman" style={{width:'100%'}}/>
                <div className="row justify-content-around">
                    <img className={this.props.playerChoice.index===1? 'col-3 gameIcon selected' :'col-3 gameIcon'} src="./img/keo.png" alt="keo" width="100%" onClick={() => {this.props.choose(1)}}/>
                    <img className={this.props.playerChoice.index===2? 'col-3 gameIcon selected' :'col-3 gameIcon'} src="./img/bua.png" alt="bua" width="100%" onClick={() => {this.props.choose(2)}}/>
                    <img className={this.props.playerChoice.index===3? 'col-3 gameIcon selected' :'col-3 gameIcon'} src="./img/bao.png" alt="bao" width="100%" onClick={() => {this.props.choose(3)}}/>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        playerChoice: state.GameOanTuTiReducer.playerChoice
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        choose : (index) =>{
            dispatch ({
                type:'CHOOSE',
                index
            });
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Player)