import './Form.css'
import React from 'react'

export default function Form(props) {
  return (
    <form>
          <div>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" required/>
          </div>
          <div>
            <div className="password-entry">
              <label htmlFor="password">password</label>
              {props.children}
            </div>
            <input type="text" id="password" required/>
          </div>
          <input
            className="base-button"
            type="submit"
            value="Log In"
          />
        </form>
  )
}
