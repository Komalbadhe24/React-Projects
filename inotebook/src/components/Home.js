import React,{} from 'react';

import Notes  from './notes';

const Home=(props)=> {
  const {showalert}=props
  return (
    
   
   <div>
   
     <Notes showalert={showalert}/>
       
    </div>
  )
}
export default Home;
