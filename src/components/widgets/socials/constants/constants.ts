import SocialIcons from '../../../../assets/icons/social';

type Social<T> = {
  title: T,
  link: string,
}[];

export const socialContants: Social<keyof typeof SocialIcons> = [
  {
    title: 'Github',
    link: '',
  },
  {
    title: 'Twitter',
    link: '',
  },
  {
    title: 'Facebook',
    link: '',
  },
  {
    title: 'YouTube',
    link: '',
  },
  {
    title: 'OpenCollective',
    link: '',
  },
];
