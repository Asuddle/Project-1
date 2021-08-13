import { SET_SELECTED_NAVBAR } from "./types"

export const handleNav=(data)=>dispatch=>{
    dispatch({
        type:SET_SELECTED_NAVBAR,
        data
    })
}