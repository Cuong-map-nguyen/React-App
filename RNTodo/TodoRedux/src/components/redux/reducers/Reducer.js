import {combineReducers} from 'redux';
import Check from './Check';
import Filter from './Filter';

const reducer = combineReducers({
    arrayWords: Check,
    fillterStatus: Filter
});

export default reducer;
