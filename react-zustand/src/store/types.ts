export type CountStore = {
    count:number,
    actions:{
        increment:()=>void,
        decrement:()=>void
    }
}