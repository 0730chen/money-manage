let index: number
const createId =  ()=>{
    index = new Date().getTime()
    return index
}

export {createId}