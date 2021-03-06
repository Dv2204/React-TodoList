import React, {useState} from 'react'

const AboutComp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const credentials = {
    email,password
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(credentials)
    console.log("email: ",email);
    console.log("password: ",password);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value = {email} onChange = {(e)=>{
      setEmail(e.target.value)
    }}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" value = {password} onChange={(e)=>{setPassword(e.target.value)}} />
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default AboutComp
