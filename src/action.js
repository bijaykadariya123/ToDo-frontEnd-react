import url from "./url";

import { redirect } from "react-router-dom";

// Create Action for Creating Todos
export const createAction = async({request})=>{
// Parse out to form data
    const formData = await request.formData()
// Construct the body for our api call
    const newTodo = {
        subject: formData.get("subject"),
        details: formData.get("details")

    }
// Make a request to create a todo
    await fetch(url, {
        method: "post",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(newTodo)
    })
// redirect to the main page:
    return redirect("/")
}

// Create Action for Updating Todos
export const updateAction = async({request, params}) =>{
// get the id from params
    const id = params.id
// parse out the form data
    const formData = await request.formData()
// Construct the updated Todo:
    const updatedTodo = {
        subject: formData.get("subject"),
        details: formData.get("details")
    }
// make a request to update to todo:
    await fetch(url+id, {
        method: "put",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(updatedTodo)
    })
// redirect to the show page
    return redirect(`/post/${id}`)
}

// Create Action for Deleting Todos

export const deleteAction = async({params})=>{
// get the id from params
    const id = params.id
// make a request to delete a todo
    await fetch(url+id,{
        method:"delete"
    })
// redirect to the index page
    return redirect("/")
}