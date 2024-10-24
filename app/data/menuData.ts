// navbar menu items
export interface MenuItem {
  title: string;
  subMenu?: { title: string; path: string }[];
  path?: string;
}

export const menuItems: MenuItem[] = [
  { title: "Home", path: "/" },
  { title: "Shop", path: "/products" },
  {
    title: "About Us",
    path: "/about",
  },

  {
    title: "Services",
    subMenu: [
      { title: "Soil Health Asessments", path: "" },
      { title: "Crop Health Asessments", path: "" },
      { title: "Farmer Training", path: "" },
      { title: "Farm Demonstrations", path: "" },
    ],
  },
  { title: "Contacts", path: "/contact" },
];
