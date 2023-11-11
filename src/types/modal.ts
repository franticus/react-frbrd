import { User } from "./user";

export interface ModalProps {
  user: User;
  onClose: () => void;
}