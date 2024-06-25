export interface SectionTitles {
  [key: string]: string;
}

//NORMALIZADOS!
export interface LinkType {
  id: number;
  name: string;
  path: string;
}

//Navbar
export interface NavbarItem extends LinkType{
  dropdown: boolean;
  dropdownMenu?: NavbarItemMenu[];
}

export interface NavbarItemMenu extends LinkType {
  options?: LinkType[];
}
//FIN-Navbar

//Hero
export interface Hero {
  title: string;
  title2: string;
  subtitle: string;
}

export interface HeroCarousel extends LinkType {
  description: string;
  button: string;
}
//FIN-Hero

//Card
export interface Card extends LinkType {
  description: string;
  image: string;
}
//FIN-Card

//////////////////////////



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