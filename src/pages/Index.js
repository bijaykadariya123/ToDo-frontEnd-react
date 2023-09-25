import Post from "../components/Post"
import { useLoaderData, Form } from "react-router-dom"


function Index (props){
    // fetch the loaderdata using the useLoaderData hook
    const todos = useLoaderData()
    return <>
            <div style = {{textAlign:"center"}} >
                <h2>Create a Todo Form</h2>
                <Form method="POST" action="/create">
                    <input type = "text" name="subject" placeholder="Subject"/>
                    <input type = "text" name="details" placeholder="Details"/>
                    <button>Create a new Todo</button>

                </Form>
            </div>
            {todos.map((todo)=> {return <Post key = {todo.id} post={todo}/>})}
    </>
}

export default Index