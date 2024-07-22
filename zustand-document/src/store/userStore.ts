// import { create } from "zustand"

import { produce } from "immer"
import { create } from "zustand"

// type state = {
//     firstName: string,
//     lastName: string
// }

// type Action = {
//     UpdateFirstName:(firstName:string)=>void,
//     UpdateLastName:(lastName:string)=>void
// }


// export const useUserStore = create<state & Action>((set)=>({
//     firstName:"",
//     lastName:"",
//     UpdateFirstName:(firstName)=>set({firstName}),
//     UpdateLastName:(lastName)=>set({lastName})
// }))


// deeply nested object


type State = {
    deep:{
        nested:{
            object:{count:number},
            array:string[]
        }
    }
}


type Actions ={
    normalInc:()=> void,
    immerInc:()=>void,
    normalSetText:(text:string,index:number)=>void
}


type Store = State & Actions


export const useStore = create<Store>((set)=>({
    deep:{
        nested:{
            object:{count:0},
            array:["deep or nested"]
        }
    },
    normalInc:()=>set((state)=>({...state,deep:{...state.deep,nested:{...state.deep.nested,object:{...state.deep.nested.object,count:state.deep.nested.object.count+1}}}})),
    normalSetText:(text,index)=>set((state)=>({...state,deep:{...state.deep,nested:{...state.deep.nested,array:[...state.deep.nested.array.slice(0,index),text,...state.deep.nested.array.slice(index+1)]}}})),
    immerInc: () =>
        set(
          produce((state: State) => {
            ++state.deep.nested.object.count;
          })
        ),
}))