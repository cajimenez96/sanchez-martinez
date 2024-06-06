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