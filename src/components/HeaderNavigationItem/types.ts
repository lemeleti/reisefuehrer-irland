export type HeaderNavigationItemProps = {
  item: {
    path: string;
    id: string;
    disableScrolling?: boolean;
    text: string;
    submenu?: {
      id: string;
      path: string;
      text: string;
    }[];
  };
  isSubmenuOpen: boolean;
  onLeafClick: () => void;
  onSubmenuClick: () => void;
};
