export interface TableMenuProps {
  list: TableList;
}

interface BodyTable {
  name: string;
  link: string;
}
export interface TableList {
  title: string;
  body: BodyTable[];
}
