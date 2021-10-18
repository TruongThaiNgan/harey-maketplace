export interface ToolBarProps {
  onChangeLimit: React.Dispatch<React.SetStateAction<number>>;
  onChangeSort: React.Dispatch<React.SetStateAction<string>>;
  limit: number;
  sort: string;
}
