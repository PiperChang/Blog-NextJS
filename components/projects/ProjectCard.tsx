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
      <div className="h-full border-2 rounded-lg">
        <div className="h-1/2 overflow-hidden relative">
          <Image
            src={coverImg}
            alt={`Cover Img ${title}`}
            sizes="100vw"          
            fill
            style={{ objectFit: 'cover'}}
          />
        </div>


        <div className="p-6 relative">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">{subtitle}subtitle</h2>
          <h1 className="title-font text-lg font-medium text-white mb-3">{title}title</h1>
          <div className="leading-relaxed mb-3">{description}</div>
          <div className="flex items-center flex-wrap ">
            {tags.map((tag) => {
              return (
                <div key={tag.id} className={`btn-tags bg-${tag.color}-400 dark:bg-${tag.color}-400 focus:outline-none rounded text-xs font-bold`}>{tag.name}</div>
              )
            })}
            <a href={githubLink} className="text-blue-400 inline-flex items-center md:mb-2 lg:mb-0">
              <AiFillGithub size={25} />
            </a>
            <a href={notionLink} className="text-blue-400 inline-flex items-center md:mb-2 lg:mb-0">
              <SiNotion size={25} />
            </a>

            {/* <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span>
              <span className="text-gray-500 inline-flex items-center leading-none text-sm">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>6
              </span> */}
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