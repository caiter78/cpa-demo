export class Pageable<T> {
  public page: Page;
  public _embedded: { data: T[]};
  public _links: Links
}

export class Page {
  number: 0;
  size: 20;
  totalElements : 20934;
  totalPages : 1047;
}

export class Links {
  first: Link;
  last: Link;
  next: Link;
  profile: Link;
  search: Link;
  self: Link;
}

export class Link {
  href: string
}

export class HateoasModel {
  _links : {
    self: Link
  }
}

export class PageReq {
  page?: number;
  size?: number;
  sort?: string;
}
