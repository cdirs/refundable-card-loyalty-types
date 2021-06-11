import Merchant from './merchant';

type Location = {
  id?: string;
  brandId?: string;
  connectionId?: string;
  merchantId: string;
  merchant?: Merchant;
  address1: string;
  longitude?: number;
  latitude?: number;
  town: string;
  postalCode: string;
  country: string;
  merchantIds?: string[];
  geoHash?: string;
};

export default Location;
