type Brand = {
  id?: string;
  connectionId?: string;
  brandId: string;
  brand?: Brand;
  userId: string;
  lastDigits?: string;
  cardNumber?: string;
  type?: string;
  expiryMonth: string;
  expiryYear: string;
  countryOfIssue: string;
  active?: boolean;
};

export default Brand;
