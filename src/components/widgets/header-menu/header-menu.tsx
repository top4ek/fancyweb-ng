import { HeaderMenuProps } from './types';
import HeaderMenuLink from './components/header-menu-link/header-menu-link';
import HeaderMenuButton from './components/header-menu-button/header-menu-button';

export default function HeaderMenu(props: HeaderMenuProps) {
  const { list } = props;
  return (
    <nav>
      <ul>
        {list.map(el => {
          if (('link' in el)) return <HeaderMenuLink title={el.title} link={el.link} />
          if (('children' in el) && Array.isArray(el.children)) return <HeaderMenuButton title={el.title} children={el.children} />
        })}
      </ul> 
    </nav>
  );
}
