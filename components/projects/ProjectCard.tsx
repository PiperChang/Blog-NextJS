import Image from "next/image";
import React from "react";
import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia,Divider,Paper } from "@mui/material";
import { IProject } from "./project.d";
import { AiFillGithub } from 'react-icons/ai'
import { SiNotion } from 'react-icons/si'
import Typography from '@mui/material/Typography';

import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)((props) => ({
  // textAlign: 'center',
  padding: 5,
  color:  props.color,
  marginRight: 2
}));

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
      <CardContent style={{padding: 10}}>
        <Typography gutterBottom variant="h5" component="div" fontWeight="bold">
          {title}
        </Typography>
        <Box height={45} overflow="hidden">
        <Typography variant="body2" component="div">
          <h3>{description}</h3>
        </Typography>
        </Box>
        <Typography variant="body2" fontWeight="bold">
        <Stack
          direction="row"
          spacing={1}
          sx={{ height: 30 }}
        >
          {tags.map((tag) => {
            return (
              <Item key={tag.id} color={tag.color}>{tag.name}</Item>)
          })}
        </Stack>
        </Typography>

      </CardContent>
      <CardActions style={{ padding: 10}}>
        <Typography gutterBottom variant="h6" component="div">
          <a href={githubLink}>
            <Button size="small" color="primary" variant="outlined">
              <AiFillGithub size={25} />
            </Button>
          </a>
          <a href={notionLink}>
            <Button size="small" color="primary" variant="outlined">
              <SiNotion size={25} />
            </Button>
          </a>
        </Typography>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;

