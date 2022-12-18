import Image from "next/image";
import React from "react";
import { IProject } from "./project.d";
import { AiFillGithub } from 'react-icons/ai'
import { SiNotion } from 'react-icons/si'

interface Props {
  data: IProject;
}

const ProjectCard = ({ data }: Props) => {
  const title = data.properties.Name.title[0].plain_text;
  const subtitle = data.properties.Name.title[0].plain_text;
  const githubLink = data.properties.Github.url;
  const notionLink = data.url
  const description = data.properties.Description.rich_text[0].plain_text;
  const coverImg = data.cover.file?.url || data.cover.external.url;
  const tags = data.properties.Tags.multi_select;

  return (
      <div className="project-card">
        <div className="overflow-hidden relative h-28">
          <Image
            src={coverImg}
            alt={`Cover Img ${title}`}
            sizes="100vw"
            fill
            style={{ objectFit: 'cover', }}
          />
        </div>
        <div className="p-3">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">{subtitle}  </h2>
          <h1 className="title-font text-lg mb-2 font-extrabold">{title}</h1> 
          <div className="leading-relaxed mb-3 text-sm ">{description}</div>
          <div className="flex items-center flex-wrap ">
            {tags.map((tag) => {
              return (
                <div key={tag.id} className={`btn-tags bg-${tag.color}-400 dark:bg-${tag.color}-400 focus:outline-none`}>{tag.name}</div>
              )
            })}
              <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-1 border-gray-400">
                <a href={githubLink} className=" inline-flex items-center md:mb-2 lg:mb-0">
                  <AiFillGithub size={25} />
                  </a>
                </span>
              <span className="text-gray-500 inline-flex items-center leading-none text-sm">
                <a href={notionLink} className=" inline-flex items-center md:mb-2 lg:mb-0">
                  <SiNotion size={25} />
                </a>
              </span>
          </div>
      </div>
  </div>

  );
};

export default ProjectCard;


{/* 

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
        <CardContent style={{ padding: 10 }}>
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
                  <Item key={tag.id} >{tag.name}</Item>)
              })}
            </Stack>
          </Typography>

        </CardContent>
        <CardActions style={{ padding: 10 }}>
          <Typography gutterBottom variant="h6" component="div">
            <a href={githubLink}>
              <Item>
                <AiFillGithub size={25} />
              </Item>
            </a>
            <a href={notionLink}>
              <Item>
                <SiNotion size={25} />
              </Item>
            </a>
          </Typography>
        </CardActions>
      </Card> */}