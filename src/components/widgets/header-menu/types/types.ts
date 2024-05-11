type Title = {
  title: string,
}

export type Link = Title & {
  link: string,
}

export type Button = Title & {
  children: Link[],
}

type List = (Link | Button)[];

export type HeaderMenuProps = {
  list: List,
}
