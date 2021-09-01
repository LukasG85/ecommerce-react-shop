export interface IFormItem {
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleFile?: (e: React.FormEvent<HTMLInputElement>) => void;
  label: string;
  type: string;
  name: string;
  value?: string | number | file[];
}
