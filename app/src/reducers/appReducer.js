


const initialState = {
    joke: '// This line doesn\'t actually do anything, but the code stops working when I delete it.',
    loading: false,
    
};

export const appReducer = ( state = initialState ,action ) => {
    switch(action.type){
        case "LOADING":
            return { ...state, loading: true };

        case "NEW_JOKE":
            return { ...state, loading: false, joke: action.payload};
         
       default:
           return state;     
    }
};