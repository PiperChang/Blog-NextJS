import Image from "next/image";
import React from "react";
import { Card, CardMedia } from "@mui/material";
import { IProject } from "./project.d";

interface Props {
  data: IProject;
}

const ProjectCard = ({ data }: Props) => {
  const title = data.properties.Name.title[0].plain_text;
  const githubLink = data.properties.Github.url;
  const description = data.properties.Description.rich_text[0].plain_text;
  const coverImg = data.cover.file?.url || data.cover.external.url;

  return (
    <Card key={data.id} sx={{ maxWidth: 345 }}>
      <CardMedia title={title}>
        {/* <div style={{ position: "relative", width: "100px", height: "100px" }}> */}
        <Image
          src={coverImg}
          alt={`Cover Img ${title}`}
          layout="fill"
          objectFit="contain" // or objectFit="cover"
        />
        {/* </div> */}
      </CardMedia>
      <h1>{title}</h1>
      <h3>{description}</h3>
      <a href={githubLink}>바로가기</a>
    </Card>
  );
};

export default ProjectCard;
