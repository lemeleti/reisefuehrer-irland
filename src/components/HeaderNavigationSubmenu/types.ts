export type HeaderNavigationSubmenuProps = {
  submenu: { id: string; path: string; text: string }[];
  onItemClick: () => void;
};
