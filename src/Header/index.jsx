import { Menu } from 'antd';

const items = [
  {
    label: ' Games',
    key: 'mail',
    icon: null,
    children: [
      {
        type: 'item',
        label: '2048',
      },
      {
        type: 'item',
        label: 'Some game',
      },
    ],
  },
  {
    label: 'Todo list',
    key: 'app',
    icon: null,
  },
];

function Header() {
  return <Menu mode="horizontal" items={items} />;
}

export default Header;
