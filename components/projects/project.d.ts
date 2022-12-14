declare IProject

export interface IProject {
  object: string,
  id: string,
  created_time: string,
  cover: string,
  icon: string,
  parent: {
    type: string,
    database_id: string
  },
  archived: string,
  properties: string,
  url: string
}

interface ProjectProperties {
  Name: PropertiesAttributes,
  Tags : PropertiesAttributes,
  WorkPeriod :PropertiesAttributes,
  Github:PropertiesAttributes,
  Description:PropertiesAttributes,
}

interface PropertiesAttributes {
  id:string,
  type: string,
}
