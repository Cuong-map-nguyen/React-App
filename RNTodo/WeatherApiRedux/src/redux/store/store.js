import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import ReduxSaga from 'redux-saga';

const defaultState = {
  cityName: null,
  temp: null,
  isLoading: false,
  error: false
};

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'Start_Loading':
            return {
                cityName: null,
                temp: null,
                isLoading: true,
                error: false
            };
        case 'Search_Success':
            return {
                cityName: action.cityName,
                temp: action.temp,
                isLoading: false,
                error: false
            };
        case 'Search_Error':
            return {
                cityName: '',
                temp: '',
                isLoading: false,
                error: true
            };
        default:
            return state;
    }
};

const store = createStore(reducer, applyMiddleware(ReduxThunk));
// const store = createStore(reducer, applyMiddleware(ReduxSaga));

export default store;