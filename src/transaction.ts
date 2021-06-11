import Brand from './brand';
import Card from './card';
import Location from './location';
import Merchant from './merchant';

type Transaction = {
  id?: string;
  connectionId: string;
  brandId?: string;
  brand?: Brand;
  created: string;
  updated: string;
  offer?: any;
  approvalCode: string;
  auth: boolean;
  authCode: string;
  cleared: boolean;
  amount: number;
  currency: string;
  wallet?: any;
  cardId: string;
  card?: Card;
  merchantId: string;
  merchant?: Merchant;
  locationId: string;
  location?: Location;
  identifiers: any;
};

export default Transaction;
