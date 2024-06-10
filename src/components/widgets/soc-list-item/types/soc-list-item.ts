export type SoCItemProps = {
  model: string,
  address: null | string,
  stage: 'NEQ' | 'RND' | 'HLP' | 'WIP' | 'MVP' | 'DONE',
  installation: null | 'string',
}
