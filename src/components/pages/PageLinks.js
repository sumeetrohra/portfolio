import { FaHome, FaBloggerB, FaFileCode, FaSlideshare } from 'react-icons/fa';
import { GoGitBranch } from 'react-icons/go';

export const PageLinks = [
  {
    link: '/',
    icon: FaHome,
    name: 'Home',
  },
  {
    link: '/projects',
    icon: GoGitBranch,
    name: 'Projects',
  },
  {
    link: '/skills',
    icon: FaFileCode,
    name: 'Skills',
  },
  {
    link: '/blogs',
    icon: FaBloggerB,
    name: 'Blogs',
  },
  {
    link: '/talks',
    icon: FaSlideshare,
    name: 'Talks',
  },
];
