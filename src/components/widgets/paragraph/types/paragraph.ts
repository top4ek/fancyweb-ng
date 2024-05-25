export type ComplexParagraph = {
  h: string,
  p: string,
  dl?: boolean,
}

export type ParagraphProps = {
  content: string | ComplexParagraph,
}
