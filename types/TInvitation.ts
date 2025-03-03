export type TInvitation = {
    invitation_id: number;
    owner_id: number;
    tenant_id: number;
    property_id: number;
    status: "accepted" | "rejected" | "pending";
  };

