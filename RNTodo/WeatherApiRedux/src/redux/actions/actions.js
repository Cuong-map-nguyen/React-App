import getTemp from '../getTemp';

const loading = () => ({
    type: "Start_Loading",
  });

  const success = (cityName, temp) => ({
    type: "Search_Success",
    cityName,
    temp,
  });

  const error = () => ({
    type: "Search_Error",
  });
  
  const dataThunk = (cityName) => {
    return dispatch => {
        dispatch(loading());
        getTemp(cityName)
        .then(temp => dispatch(success(cityName,temp)))
        .catch(()=> dispatch(error()))
    };
  }

  export default {loading, success, error, dataThunk}; 