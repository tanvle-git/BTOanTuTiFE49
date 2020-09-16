const MANG_TRO_CHOI=[
    {index:1,name:'Kéo',img:'./img/keo.png'},
    {index:2,name:'Búa',img:'./img/bua.png'},
    {index:3,name:'Bao',img:'./img/bao.png'},
]

const stateDefault = {
    playerChoice: {index:3,name:'Bao',img:'./img/bao.png'},
    computerChoice: {index:3,name:'Bao',img:'./img/bao.png'},
    text: 'Nhấn "play game" để chơi',
    soBanThang:0,
    soBanChoi:0
}
export const GameOanTuTiReducer = ( state = stateDefault , action ) => {
    
    switch (action.type) {
        case 'CHOOSE':{
            let newState=state;
            newState.playerChoice = MANG_TRO_CHOI[action.index-1];
            state=newState;
            return {...state};}
        case 'PLAY_GAME':{
            let newState=state;
            newState.soBanChoi += 1;
            let soNgauNhien = Math.floor(Math.random() * 3);
            newState.computerChoice = MANG_TRO_CHOI[soNgauNhien];
            let computeIndex=state.playerChoice.index-state.computerChoice.index
            if (computeIndex===1 || computeIndex===-2) {
                newState.soBanThang+=1;
                newState.text="I'm IronMan, i love you 3K";
            } else {
                newState.text="You lose, let's try again!";
            }
            state=newState;
            return {...state};
        }
    
        default:
            return {...state};
    }
    
}