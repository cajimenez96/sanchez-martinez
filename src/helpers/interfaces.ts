export interface NavbarItem {
  id: number;
  name: string;
  path: string;
  dropdown: boolean;
  dropdownMenu?: NavbarItemMenu[];
}

export interface NavbarItemMenu {
  name: string;
  path: string;
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