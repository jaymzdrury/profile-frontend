export interface Data {
    name: string,
    about: About,
    experience: Experience,
    services: Services[],
    contacts: Contact[]
}

export interface About {
    facts: Facts[],
    desc: string
}

interface Facts {
  title: string,
  desc: string
}

export interface Experience {
  frontend: Dev[],
  backend: Dev[]
}

export interface Dev {
  title: string,
  level: string
}

export interface Services {
  title: string,
  services: string[]
}

export interface Contact {
  type: string,
  value: string
  link: string
}

export interface Form {
  title: string,
  email: string,
  msg: string
}

export interface Work {
  id: number,
  image: StaticImageData,
  title: string,
  github: string,
  demo: string
}

export interface Testimonials {
  avatar: StaticImageData,
  name: string,
  review: string
}