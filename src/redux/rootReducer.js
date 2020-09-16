// quản lý tất cả state của ứng dụng
import {combineReducers} from 'redux';
import {GameOanTuTiReducer} from './GameOanTuTiReducer';

export const rootReducer = combineReducers({
    //Khai báo các state của ứng dụng
    GameOanTuTiReducer,
})