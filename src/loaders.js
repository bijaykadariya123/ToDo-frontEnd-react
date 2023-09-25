import url from "./url"

// # Index load to load all todos

export const indexLoader = async()=>{
    // Make API call to backend Index route 
    const response = await fetch(url)
    // turn response in to JSON object
    const todos = await response.json()
    // return the javascript object so the Index component can use it.
    return todos
}

// Show loader to load a single todo

export const showLoader = async({params})=>{
    // grab the id from params:
    const id = params.id
    //make a api call to backend show route
    const response = await fetch(url + id)
    // turn response into JS object
    const todo = await response.json()
    return todo
}