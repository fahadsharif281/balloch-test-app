export interface IBreadCrumbs {
  items: IBreadCrumbsItems[];
}
export interface IBreadCrumbsItems {
  name: string;
  to: string;
  active?: boolean;
}
