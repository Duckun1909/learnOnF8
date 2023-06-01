export default function logger(reducer){
    return (prevState, action, args) =>{
        const nextState = reducer(prevState, action, args)

        console.group(action)
        console.log("Previous state: ", prevState)
        console.log("Arguments:", args)
        console.log("Next state: ", nextState)

        console.groupEnd()
        return nextState
    }
}