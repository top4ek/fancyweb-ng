import { H2Props } from '../types';

export default function H2(props: H2Props) {
  const { content } = props;
  return (
    <h2 className="text-black text-2xl font-normal pt-2 pb-4">{content}</h2>
  );
}
