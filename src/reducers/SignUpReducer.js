export const initialState = {
    user:{},//name,login,password,photo
};

export const SignUpReducer = (state, action) => {
    switch(action.type) {
        case 'setUser':
            return{...state, user: action.payload.user};
        break;
        
        case 'getUser':
            return initialState.user;
        break;
        default:
            return{...state}
    }
}