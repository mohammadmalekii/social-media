export const initialState = {
    user: [],
    userInfo:false
    
    ,
    chatUsers:[],
    receiver: null,
    messages: []
}

const chatReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'GET_USER':
            return{
                ...state,
                 user: payload.user
            }
        case 'GET_USER_INFO':
            return{
                ...state,
                userInfo: payload.userInfo
            }
        case 'GET_CHAT_USERS':
            return{
                ...state,
                chatUsers: payload.chatUsers
            }
        case 'SELECT_USER':
            return{
                ...state,
                receiver: payload.receiver
            }
        case 'GET_MESSAGES':
            return{
                ...state,
                messages: payload.messages
            }
        
        default:
            throw new Error(`no case for type ${type} found in shopReducer`)
    }
}

export default chatReducer