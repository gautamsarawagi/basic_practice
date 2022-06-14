import {
    CALL_API,
    CALL_API_SUCCESS,
    CALL_API_ERROR
} from "../actions";
  
  const INIT_STATE = {
    initURL: "",
    error: "",
    apiCallData: {},
  };
  
  const apiCallReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case CALL_API: {
        const actionData = action.payload;
        console.log("actionDataactionData",actionData);
        return { ...state,setData: action.payload };
      }
      case CALL_API_SUCCESS:
        return { ...state, apiCallData: action.payload };
        
      case CALL_API_ERROR:
        return { ...state, error: action.payload };
      default:
        return { ...state };
    }
  };
  
  export default apiCallReducer;
  
  