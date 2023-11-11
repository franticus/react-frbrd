import { User } from "../../types/user";
export interface ModalProps {
  user: User;
  onClose: () => void;
}