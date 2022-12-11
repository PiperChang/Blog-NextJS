import React, { useEffect, useState } from 'react'
import { notionService } from './../../../api/index';
import { AxiosResponse } from 'axios';

const PostList = () => {
  const [postList, setPostList] = useState([])
  useEffect(() => {
    notionService.getPostList().then((res: AxiosResponse) => setPostList(res.data))
  }, [])
  return (
    <div>
      아년
      {postList.map((post)=><>post</>)}
    </div>
  )
}

export default PostList