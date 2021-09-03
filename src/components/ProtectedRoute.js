import React from 'react';
import {Link}   from 'react-router-dom'

function ProtectedRoute(){
    return(
        <div style ={{margin: '0 auto', width: '20%'}}> Protected route, please <Link to={'/'}>log in.</Link></div>
    )
}

export default ProtectedRoute;