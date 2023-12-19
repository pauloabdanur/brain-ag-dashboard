import { IoHomeOutline } from 'react-icons/io5';
import { LuUserPlus2 } from 'react-icons/lu';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { MdOutlinePlace } from 'react-icons/md';
import { TbGrain } from 'react-icons/tb';
import { PiPlant } from 'react-icons/pi';

export const SidebarData = [
  {
    icon: IoHomeOutline,
    text: 'Dashboard',
  },
  {
    icon: LuUserPlus2,
    text: 'Cadastro',
  },
  {
    icon: HiOutlineUserGroup,
    text: 'Produtores',
  },
];

export const CardsData = [
  {
    title: 'Estados',
    color: {
      backGround: 'linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)',
      boxShadow: '0px 10px 20px 0px #e0c6f5',
    },
    amount: '10',
    png: MdOutlinePlace,
  },
  {
    title: 'Cultura',
    color: {
      backGround: 'linear-gradient(180deg, #FF919D 0%, #FC929D 100%)',
      boxShadow: '0px 10px 20px 0px #FDC0C7',
    },
    amount: '18',
    png: TbGrain,
  },
  {
    title: 'Uso de Solo',
    color: {
      backGround: 'linear-gradient(180deg, #f8d49a -146.42%, #ffcb71 -46.42%)',
      boxShadow: '0px 10px 20px 0px #F9D59B',
    },
    amount: '200',
    png: PiPlant,
  },
];
