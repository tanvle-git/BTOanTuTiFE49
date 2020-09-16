import React, { Component } from 'react'
import {connect} from 'react-redux'

class Result extends Component {
    render() {
        return (
            <div>
                <h1 className="my-5" style={{color:'#ffa500'}}>{this.props.text}</h1>
                <h1 className="my-5" style={{color:'#6df172'}}>Số bàn thắng: <span className="text-white">{this.props.soBanThang}</span></h1>
                <h1 className="my-5" style={{color:'#6df172'}}>Số bàn chơi: <span className="text-white">{this.props.soBanChoi}</span> </h1>
                <button className="btn btn-success" onClick={() => {this.props.playGame()}}>Play game</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        soBanThang: state.GameOanTuTiReducer.soBanThang,
        soBanChoi:state.GameOanTuTiReducer.soBanChoi,
        text:state.GameOanTuTiReducer.text
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        playGame : () =>{
            dispatch ({
                type:'PLAY_GAME'
            });
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Result)