import React, { useEffect, useState } from 'react'
import axios, { AxiosResponse } from 'axios';
import { notionService } from '../../api';
import { NOTION_DATABASE } from '../../constants/Notion';
import { NOTION_TOKEN } from '../../constants/Notion';
import { Paper } from '@mui/material';
import ProjectCard from '../../components/projects/projectCard';
import { IProject } from './../../components/projects/project.d';
interface Props {
  projectData: Array<IProject>
}

const Projects = ({ projectData }: Props) => {
  console.log(projectData);
  
  const projectList = projectData.map((project) => {
    console.log(project.properties);

    return (
      <ProjectCard key={project.id} data={project} />
    )
  })

  return (
    <Paper>
      {projectList}
    </Paper>
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
