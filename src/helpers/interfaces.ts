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

//////////////////////////





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