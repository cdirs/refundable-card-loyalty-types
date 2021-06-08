type Brand = {
  id?: string;
  connectionId?: string;
  name: string;
  active: boolean;
  apiKey?: string;
  locations?: Location[];
};

export default Brand;
