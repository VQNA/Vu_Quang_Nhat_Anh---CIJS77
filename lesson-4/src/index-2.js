import {useState} from 'react'
export default Form = () => {
    const [user, setUser] = useState({username:"", password:""})
    const handleSubmitForm = (e) =>{
    e.preventdefault()

}
    const handleNameChange = e =>{
        setUser({...user, username: e.target.value})
    }
    const handlePasswordChange = e =>{
        setUser({...user, password: e.target.value})    
    }
return (
 <form onSubmit={handleSubmitForm}>
    <label>
        Name:
        <input 
        type = "text"
        value = {username}
        onChange = {handleNameChange}/>
    </label>
    <label>
        Password:
        <input 
        type = "text"
        value = {password}
        onChange = {handlePasswordChange}/>
    </label>
    <br/>
    <button type = "submit">Submit</button>
 </form>
)
}

