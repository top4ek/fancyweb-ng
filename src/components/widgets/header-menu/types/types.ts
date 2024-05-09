export type HeaderMenuListItem = {
  title: string;
  link?: string;
  children?: Omit<HeaderMenuLink, 'children'>;
}

export type HeaderMenuList = {
  list: HeaderMenuListItem[];
}

type HeaderMenuItem = Omit<HeaderMenuListItem, 'link' | 'children'> ;

export type HeaderMenuLink = HeaderMenuItem & {
  link: string;
}

export type HeaderMenuButton = HeaderMenuItem & {
  children: HeaderMenuLink[];
}
