export interface SearchFieldProps {
  searchTerm: string;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleResetUsers: () => void;
}
