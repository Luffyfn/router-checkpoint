import React from 'react'
import { Redirect } from 'react-router-dom'

const Admin = ({authentification}) => {
    return (
        ({authentification}) ? <h1>Welcome Admin</h1> : <Redirect to="/AdminArea"/>
    )
}

export default Admin;
