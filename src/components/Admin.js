import React from 'react'
import Menu from "./Menu";
import { userInfo } from '../utils/auth';

const Admin = () => {

 

  const adminName = userInfo().name;

  const modAdminName  = adminName.charAt(0).toUpperCase() + adminName.slice(1);
 

  return (
	<div>
    <Menu/>
    <div className='container'>
      <div className='row'>
       
        <div className='col-12'>
        <br/>
          <h4>Admin route</h4>
          <h4> You are an admin now,&nbsp;{modAdminName}
        </h4>
        </div>
      </div>
    </div>
</div>
  )
}

export default Admin