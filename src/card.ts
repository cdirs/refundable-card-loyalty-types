type Brand = {
  id?: string;
  connectionId?: string;
  brandId: string;
  brand?: Brand;
  userId: string;
  lastDigits?: string;
  cardNumber?: string;
  expiryMonth: string;
  expiryYear: string;
  countryOfIssue: string;
};

export default Brand;