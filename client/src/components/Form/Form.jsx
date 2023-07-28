import { useState } from "react";





const Form = () => {

    const [userData, setUserData] = useState ({
        email: '',
        password: ''
    });

    return(
        <form>
            <label htmlFor="email" style={{color: 'white'}}>Email:</label>
            <input type="email" name='email '></input>
            <label htmlFor="password" style={{color:'white'}}>Password:</label>
            <input type="password" name='password' ></input>

            <button>Submit</button>
        </form>
    )
}

export default Form;