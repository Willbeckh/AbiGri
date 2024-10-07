// navbar menu items
export interface MenuItem {
  title: string;
  subMenu?: { title: string; path: string }[];
  path?: string;
}

export const menuItems: MenuItem[] = [
  { title: "Home", path: "" },
  {
    title: "Who We Are",
    subMenu: [
      { title: "About Us", path: "" },
      { title: "Clients", path: "" },
    ],
  },

  {
    title: "Services",
    subMenu: [
      { title: "Shop", path: "" },
      { title: "Farm Bookings", path: "" },
      { title: "Events", path: "" },
    ],
  },
  { title: "Contacts", path: "" },
];
