import React from 'react'
import { Card, CardMedia } from '@mui/material';
import { IProject } from './project.d';

interface Props {
  data: IProject
}

const ProjectCard = ({data}:Props) => {
  const title = data.properties.Name.title[0].plain_text

  return (
    <Card key={data.id} sx={{maxWidth: 345}}>
        <CardMedia
          component="img"
          height="140"
          image={data.url}
        />
        {title}
      </Card>
  )
}

export default ProjectCard