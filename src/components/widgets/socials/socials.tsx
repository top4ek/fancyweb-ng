import SocialIcons from '../../../assets/icons/social';
import { socialContants } from './constants';

type Socials = keyof typeof SocialIcons;
type Social = { link: string, title: Socials }; 

export default function Socials() {
  return (
    <ul className="flex flex-row">
      {socialContants.map((social: Social) => {
        const Icon = SocialIcons[social.title];
        return (
          <li className="transition-colors duration-500 border border-grey-bg first:rounded-l-md last:rounded-r-md hover:border-black">
            <a href={social.link} className="block min-h-10 min-w-10 flex flex-col justify-center items-center">
              <Icon />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
