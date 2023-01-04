import axios from 'axios'
import React, { useEffect } from 'react'

const Test = () => {
  useEffect(()=>{
    const res = axios.post('/api/tip',{ 
      title: 'title',
      subTitle: 'sub',
      content: 'ddd',
      tags : ["react", 'prisma']
    }).then((res)=>
      {console.log(res);
      }
    )
    // console.log(res);
    
  },[])
  
  return (
    <div>test</div>
  )
}

export default Test