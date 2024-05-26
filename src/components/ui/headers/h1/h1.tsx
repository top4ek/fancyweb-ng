import { H1Props } from '../types';

export default function H1(props: H1Props) {
  const { content } = props;
  return (
    <h1 className="text-brand-blue text-3xl font-bold pt-6 pb-8">{content}</h1>
  );
}
