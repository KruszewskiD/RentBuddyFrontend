export interface IFlatCard {
  property_id: number;
  address: string;
  owner_id: string | number;
  tenant_id?: string | number | null;
}
