import { createContext } from "react";

export const AppContext = createContext();

export const initialState = {
    currentApp:"About Me",
}

export const reducer = (state, action) => {
    switch(action.type) {
        case "CURRENT_APP": {
            return {
                ...state,
                currentApp: action.payload
            }
        }
        default: {
            return
        }
    }
}