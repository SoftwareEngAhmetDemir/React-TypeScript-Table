
import { createStore } from 'redux'

export interface NoteState  {
    counter:number
}
const initialState ={
    counter: 0
}

type Action = {
    type:"Incr"
   
}


export function Nreducer(state:NoteState=initialState,action:Action){

    switch(action.type)
    {
        case 'Incr':
            return {
                counter:state.counter+1
            }
            default:
                return state;
    }
}


let store = createStore(Nreducer)


export {store};