import React, { useEffect, useState } from 'react'
import axios, { AxiosResponse } from 'axios';
import { notionService } from '../../api';
import { NOTION_DATABASE } from '../../constants/Notion';
import { NOTION_TOKEN } from '../../constants/Notion';
import { IProject } from './../../components/projects/project.d';
import ProjectCard from 'components/projects/ProjectCard';
interface Props {
  projectData: Array<IProject>
}

const Projects = ({ projectData }: Props) => {
  const projectList = projectData.map((project,idx) => {
    return (
        <ProjectCard key={`proj${idx}`} data={project} />
    )
  })

  return (
    // <section className="text-gray-400 body-font">
    //   <div className="container px-5 py-24 mx-auto">
        <div className="grid grid-cols-1 gap-8 p-12 m-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {projectList}
        </div>
    //   </div>
    // </section>

  )
}

export default Projects

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

  const res = await axios.request(options)

  const projectData = res.data.results

  return {
    props: { projectData }
  }
}
