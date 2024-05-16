import { HeaderMenuProps } from './types';
import HeaderMenuLink from './components/header-menu-link/header-menu-link';
import HeaderMenuButton from './components/header-menu-button/header-menu-button';


export default function HeaderMenu(props: HeaderMenuProps) {
  const { list, isMobMenuVisible } = props;

  return (
    <ul className={`${isMobMenuVisible ? 'flex' : 'hidden'} flex-col flex-nowrap absolute top-12 -left-0 pt-2 pl-4 bg-brand-blue w-full md:flex md:flex-row md:static md:w-fit md:pt-0 md:pl-0`}>
      {list.map(el => {
        if (('link' in el)) return <HeaderMenuLink title={el.title} link={el.link} />
        if (('children' in el) && Array.isArray(el.children)) return <HeaderMenuButton title={el.title} children={el.children} />
      })}
    </ul> 
  );
}
