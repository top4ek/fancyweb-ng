import { HeaderMenuLink as HeaderMenuLinkProps } from '../../types/types';

export default function HeaderMenuLink(props: HeaderMenuLinkProps) {
  const { title, link } = props;

  return (
    <li>
      <a class="" href={link}>{title}</a>
    </li>
  );
}
