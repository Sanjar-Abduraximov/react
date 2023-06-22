import React, { useState, useEffect } from 'react';
import { Storage } from 'aws-amplify';
import { FaFileImage } from 'react-icons/fa';


const Upload = () => {
    const [ files, setFiles ] = useState([]) ; 
    const [ loading, setLoading ] = useState(true);
  
    const handleChange = async (e) => {
      const file = e.target.files[0];
  
      try {
        await Storage.put(file.name, file, {
          level: 'public'
        });
        alert("Success")
      } catch (error) {
        console.log("Error uploading file: ", error);
      }
      window.location.reload()
    }

    
  
      useEffect(() => {
        Storage.list('')
          .then((data) => {
            setFiles(data.results);
            setLoading(false);
          })
      }, []);

    async function handleClick(fileKey) {
      const fileUrl = await Storage.get(fileKey, { level: "public" });

      
      console.log(fileUrl);
    }
    async function deleteFile(fileKey) {
      await Storage.remove(fileKey, { level: 'public' });
      window.location.reload()
    }
   
    
    if(loading) return (
      <div className='ok'>Loading</div>
    )
    

    return (
        <div style={{padding:'10px 30px', left:'35%', border:'1.5px solid #fff', 
                    borderRadius:'10px', cursor:'pointer', background:'none', color:'#fff'}}>
            <input type="file" onChange={handleChange} />
            {files.map((file, i) => (
              <div key={i}>
                <p onClick={() => handleClick(file.key)}>{ file.key }  <FaFileImage/></p>

                <button onClick={() => deleteFile(file.key)}>
                  Delete
                </button>
              </div>
            ))}
              
        </div>
    )
    
    
}

export default Upload;