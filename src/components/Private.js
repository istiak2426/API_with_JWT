import { userInfo } from "../utils/auth";

import Menu from "./Menu";




const Private = () => {

  const name = userInfo().email;




  return (
    <div>
    <Menu/>
    <div className='container'>
      <div className='row'>
       
        <div className='col-12'>
        <br/>
          <h4>Private route</h4>
          <h4> Hi there, 
            {name} 
            </h4>
        </div>
      </div>
    </div>
</div>
  );
};

export default Private;
