import { User } from "../UserList/User.types";

export interface ModalProps {
  user: User;
  onClose: () => void;
}