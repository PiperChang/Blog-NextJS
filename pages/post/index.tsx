import React, { useEffect, useState } from 'react'
import { AxiosResponse, axios } from 'axios';
import { notionService } from '../../api';
import { NOTION_DATABASE } from '../../constants/Notion';
import { NOTION_TOKEN } from './../../constants/Notion';

const PostList = () => {
  const [postList, setPostList] = useState(["d"])
  // useEffect(() => {
  //   notionService.getPostList().then((res: AxiosResponse) => {setPostList(res.data)
  //   console.log(res)
  //   })
  // }, [])
  // console.log(postList)


  return (
    <div>
      아년
      {process.env.NEXT_PUBLIC_NOTION_DATABASE}
      {/* {postList.map((post, index) => {
        return (<div key={index} >post</div>)
      })} */}
    </div>
  )
}

export default PostList

export async function getStaticProps() {

  const options = {
    method: 'POST',
    url: `https://api.notion.com/v1/databases/${NOTION_DATABASE}/query`,
    headers: {
      accept: 'application/json',
      'Notion-Version': '2022-06-28',
      'content-type': 'application/json',
      Authorization: `Bearer ${NOTION_TOKEN}`
    },
    data: { page_size: 100 }
  };

  const res = axios.request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });

    console.log(res);
  return {
    props: {}
  }
}
