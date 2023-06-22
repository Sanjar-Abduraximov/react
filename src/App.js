import { Amplify } from 'aws-amplify';
 
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
import Upload from './Upload';
Amplify.configure(awsExports);

export default function App() {
 

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main className='main' style={{border:'1.5px solid white', borderRadius:'15px', background: 'rgba(255, 255, 255, 0.2)', 
                                      height:'500px', width:'500px', padding:'50px', backdrop: 'blur(5px)', 
                                      WebkitBackdropFilter:'-webkit-backdrop-filter: blur(5px);'}}>

          <h1 style={{color:'white', alignItems:'center', textAlign:'center', textTransform:'uppercase', fontFamily:'Tilt Prism', fontWeight:'600', marginBottom:'15%'}}>
            Hello {user.username}
          </h1>
        
          <Upload/> 
        

          <button onClick={signOut} className='salom' style={{position:'relative', bottom:'-25%', padding:'10px 30px', 
                                                              alignItems:'center', left:'35%', border:'1.5px solid #fff', 
                                                              borderRadius:'10px', cursor:'pointer', background:'#047d95', color:'#fff'}}>
            Sign out
          </button> 

        </main>
      )}
    </Authenticator>
  );
}
