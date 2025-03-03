// Data
import { GUIDES } from '../../data/guides';

export const NAV_ELEMENTS = [
  { path: 'home#dublin', id: 'dublin', text: 'Dublin' },
  { path: 'home#about', id: 'about', text: 'Über uns' },
  {
    path: '#guides',
    disableScrolling: true,
    id: 'guides',
    text: 'Spaziergänge',
    submenu: GUIDES,
  },
  { path: 'home#impressum', id: 'impressum', text: 'Impressum' },
];