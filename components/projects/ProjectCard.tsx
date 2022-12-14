import Image from "next/image";
import React from "react";
import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia } from "@mui/material";
import { IProject } from "./project.d";
import {AiFillGithub} from 'react-icons/ai'
import { SiNotion } from 'react-icons/si'
import Typography from '@mui/material/Typography';

interface Props {
  data: IProject;
}

const ProjectCard = ({ data }: Props) => {
  const title = data.properties.Name.title[0].plain_text;
  const githubLink = data.properties.Github.url;
  const notionLink = data.url
  const description = data.properties.Description.rich_text[0].plain_text;
  const coverImg = data.cover.file?.url || data.cover.external.url;
  const tags = data.properties.Tags.multi_select;

  return (
    <Card key={data.id}>
      <CardMedia>
        <div style={{ position: 'relative', width: '100%', height: 140 }}>
          <Image
            src={coverImg}
            alt={`Cover Img ${title}`}
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" component="div">
          <h3>{description}</h3>
        </Typography>
        <Box>
          {/* {tags.map((tag) => {
            return (
              <div>{tag}</div>)
          })} */}
        </Box>
      </CardContent>
      <CardActions>
        <Typography gutterBottom variant="h6" component="div">
          <a href={githubLink}>
            <Button size="small" color="primary">
              <AiFillGithub size={25}/>
            </Button>
          </a>
          <a href={notionLink}>
            <Button size="small" color="primary">
              <SiNotion size={25} />
            </Button>
          </a>

        </Typography>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;