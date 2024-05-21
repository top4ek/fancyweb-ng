export type TeamMembersProps = {
  imgSrc?: string,
  name: string,
  bio: string,
  socials?: {
      link: string,
      icon: 'Github' | 'Telegram',
    }[],
}
