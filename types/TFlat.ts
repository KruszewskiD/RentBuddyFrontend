export type TFlat = {
  property_id: number;
  title: string;
  description: string;
  city: string;
  street: string;
  street_number: string;
  owner_id: number | string;
  tenant_id?: number | string | null;
};
