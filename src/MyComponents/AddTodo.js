import React,{useState} from 'react'

const AddTodo = ({addTodo}) => {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const Submit = (e) => {
        e.preventDefault()
        if(!title || !desc){
            alert("Enter something");
        }
        else{
            addTodo(title,desc);
        }
        // console.log(todo)
    }
    return (
        <div>
            <form onSubmit={Submit}>
                <div className="mb-3 row">
                    <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="title" onChange={(e) => {setTitle(e.target.value)}} value={title} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="description" className="col-sm-2 col-form-label">Description</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="desc" onChange={(e)=> {setDesc(e.target.value)}} value={desc}/>
                    </div>
                </div>
                <button type='submit'>Add Todo</button>
            </form>
        </div>
    )
}

export default AddTodo
