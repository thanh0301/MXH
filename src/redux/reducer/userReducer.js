import { INCREMENT, DECREMENT } from '../action/counterAction'

const INITIAL_STATE = {
    Account: {
        User_id: '',

        Password: '',
        First_Name: '',
        Last_Name: '',
        Gender: '',
        DoB: '',
        Avater: '',
        Background: '',
        Bpoint: '',

    },
    nomal: false

}

const userReducer = (state = INITIAL_STATE, action) => {
    console.log(action)
    switch (action.type) {

        case 'FETCH_USER_LOGIN_SUCCESS':
            return {
                ...state, Account: {
                    User_id: action?.payload?.content?.User_id,

                    Password: action?.payload?.content?.Password,
                    First_Name: action?.payload?.content?.First_Name,
                    Last_Name: action?.payload?.content?.Last_Name,
                    Gender: action?.payload?.content?.Gender,
                    DoB: action?.payload?.content?.DoB,
                    Avater: action?.payload?.content?.Avater,
                    Background: action?.payload?.content?.Background,
                    Bpoint: action?.payload?.content?.Bpoint,

                },
                nomal: true
            };
        case DECREMENT:
            return {
                ...state, count: state.count - 1,
            };
        default: return state;
    }
};

export default userReducer;