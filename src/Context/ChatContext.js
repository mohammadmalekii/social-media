import {createContext, useReducer, useContext} from 'react'
import chatReducer, { initialState } from './chatReducer'

const ChatContext = createContext(initialState)

export const ChatProvider = ({children}) => {
    const [state, dispatch] = useReducer(chatReducer, initialState)
    
    const addUser = (account) => {
        const getAccountUser = account
        dispatch({
            type: 'GET_USER', 
            payload:{
                user:getAccountUser
            }
        })
    }

    const getChatUsers = (accounts) => {
        dispatch({
            type: 'GET_CHAT_USERS',
            payload: {
                chatUsers: accounts
            }
        })
    }

    const selectUser = (choiceUser) => {
        dispatch({
            type: 'SELECT_USER',
            payload: {
                receiver: choiceUser
            }
        })
    }

    const getMessages = (message) => {
       
        dispatch({
            type: 'GET_MESSAGES',
            payload:{
                messages: message
            }
        })
    }

    const value = {
        user: state.user,
        chatUsers: state.chatUsers,
        receiver: state.receiver,
        messages: state.messages,
        addUser,
        getChatUsers,
        selectUser,
        getMessages
    }

    return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>
}

const useChat = () => {
    const context = useContext(ChatContext);

    if (context === undefined) {
        throw new Error("useChat must be used with in ChatContext");
    }

    return context;
}

export default useChat