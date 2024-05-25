import { ParagraphProps } from './types';

export default function Paragraph(props: ParagraphProps) {
  const { content } = props;
  const text = typeof content === 'string' ? content : content.p;

  const split = (text: string) => {
    return text.split(/(\[.*?\]\(.*?\))/ig);
  }

  const getTextLink = (chunk: string) => {
    return {
      text: Array.from(chunk.matchAll(/\[(.*?)\]\((.*?)\)/gi))[0][1],
      link: Array.from(chunk.matchAll(/\[(.*?)\]\((.*?)\)/gi))[0][2]
    };
  }

  const pText = (text: string) => {
    return split(text).map(chunk => {
      if (/^\[.*?\]\(.*?\)$/ig.test(chunk)) {
        return (
          <a href={`${getTextLink(chunk).link}`} className="text-brand-blue underline">
            {getTextLink(chunk).text}
          </a>
        )
      }
      else {
        return chunk;
      }
    })
  }

  const hStyle = 'text-base font-bold';
  const pStyle = 'text-base';

  return (
    <>
      {typeof content === 'string' && <p className={pStyle}>{pText(text)}</p>}
      {typeof content === 'object' && ( content.dl ? <dt className={hStyle}>{content.h}</dt> : <h3 className={hStyle}>{content.h}</h3>)}
      {typeof content === 'object' && ( content.dl ? <dd className={pStyle}>{pText(text)}</dd> : <p className={pStyle}>{pText(text)}</p>)}
    </>
  );
}
