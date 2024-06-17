export type SoCItem = {
  vendor: string,
  model: string,
  address: null | string,
  stage: 'NEQ' | 'RND' | 'HLP' | 'WIP' | 'MVP' | 'DONE',
  installation: boolean,
  featured: boolean,
}

export type SoCManagedListProps = {
  fullList: SoCItem[],
}

export type FilterState = {
  abcSelector: null | string,
  vendorSelector: null | string
}
