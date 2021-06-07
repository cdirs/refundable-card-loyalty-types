import Merchant from './merchant';

type Location = {
  id?: string;
  connectionId?: string;
  merchant: Merchant;
  address1: string;
  town: string;
  postalCode: string;
  country: string;
  merchantIds?: string[];
};

export default Location;
