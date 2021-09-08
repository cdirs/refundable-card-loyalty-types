type Merchant = {
  id?: string;
  connectionId?: string;
  name: string;
  description?: string;
  logoUrl: string;
  image?: string;
  websiteUrl: string;
  active?: boolean;
  baseRefundPercentage?: number;
};

export default Merchant;
