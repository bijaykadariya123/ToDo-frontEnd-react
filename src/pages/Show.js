import {Link, useLoaderData, Form} from 'react-router-dom';

function Show (props){
    const post = useLoaderData()
    const div ={
        textALign:'center',
        border:"3px solid green",
        width: '80',
        margin: '30px auto'
    }
    return(
        <div style={div}>
            <h1>{post.subject}</h1>
            <h3>{post.details}</h3>
            <div style={{textAlign:"center"}}>
                <h2>Update Todo</h2>
                <Form method="post" action={`/update/${post.id}`}>
                        <input type="text" name="subject" placeholder="Subject" defaultValue={post.subject}/>
                        <input type="text" name="details" placeholder="Details" defaultValue={post.details}/>
                        <button>Update Todo</button>
                </Form>

                <Form method='post' action={`/delete/${post.id}`}>
                <button>Delete</button>
                </Form>
                </div>
            <Link to='/'>Back to Index</Link>
        </div>
    )

}

export default Show