import React from 'react'

function Login() {
  return (
    <form>
        <div className='form-inner'>
            <h2>Login</h2>
            {/*error message */}
            <div className='form-group'>
                <label htmlFor='name'>Name: </label>
                <label type="text" name="name" id="name"/>
            </div>
            <div className='form-group'>
                <label htmlFor='email'>Email: </label>
                <label type="text" name="email" id="email"/>
            </div>
            <div className='form-group'>
                <label htmlFor='password'>Password: </label>
                <label type="password" name="password" id="password"/>
            </div>
        </div>
    </form>
  )
}

export default Login;