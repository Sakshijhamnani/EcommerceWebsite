import React, { useContext } from 'react'
import AuthContext from '../Auth-Context/auth-context'

const Logout = () => {
    const authcontext=useContext(AuthContext)
    
  return (
    <div>Logout</div>
  )
}

export default Logout