export interface IGeo {
  lat: string;
  lng: string;
}

export interface Iaddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo?: IGeo;
}

export interface Icompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface UserInterface {
  id: number;
  name: string;
  username: string;
  email?: string;
  address?: Iaddress;
  phone: string;
  website?: string;
  company?: Icompany;
}
