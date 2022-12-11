import React, { useEffect, useState } from 'react'
import { AxiosResponse } from 'axios';
import { notionService } from '../../api';

const PostList = () => {
  const [postList, setPostList] = useState(["d"])
  useEffect(() => {
    notionService.getPostList().then((res: AxiosResponse) => {setPostList(res.data)
    console.log(res)
    })
  }, [])
  console.log(postList)


  return (
    <div>
      아년
      {/* {postList.map((post, index) => {
        return (<div key={index} >post</div>)
      })} */}
    </div>
  )
}

export default PostList