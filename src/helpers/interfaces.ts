export interface SectionTitles {
  [key: string]: string;
}

export interface LinkType {
  name: string;
  path: string;
  id?: number;
}

export interface NavbarItem {
  id: number;
  name: string;
  path: string;
  dropdown: boolean;
  dropdownMenu?: NavbarItemMenu[];
}

export interface NavbarItemMenu extends LinkType {
  options: LinkType[];
}

export interface Hero {
  title: string;
  title2: string;
  subtitle: string;
}

export interface HeroCarousel {
  id: number
  title: string;
  description: string;
  button: string;
  path: string;
}

export interface Service {
  name: string;
  description: string;
  path: string;
}

export interface NoticeResponse {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  url: string;
  creationDate: string;
}




///////////////////////////////////////////////////////
export interface FormData {
  name: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}