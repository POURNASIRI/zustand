import { create } from "zustand"

type state = {
    firstName: string,
    lastName: string
}

type Action = {
    UpdateFirstName:(firstName:string)=>void,
    UpdateLastName:(lastName:string)=>void
}


export const useUserStore = create<state & Action>((set)=>({
    firstName:"",
    lastName:"",
    UpdateFirstName:(firstName)=>set({firstName}),
    UpdateLastName:(lastName)=>set({lastName})
}))