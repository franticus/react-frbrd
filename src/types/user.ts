export interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  address: UserAddress;
  company: {
    name: string;
  };
}
interface UserAddress {
  city: string;
  street: string;
  suite: string;
  zipcode: string;
  geo?: {
    lat: string;
    lng: string;
  };
}