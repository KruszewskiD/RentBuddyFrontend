
export type TIssue = {
    issue_id: number;
    property_id: number;
    tenant_id: number;
    owner_id: number;
    title: string;
    description: string;
    resolve_status: "pending" | "in_progress" | "resolved";
    date: string; // ISO 8601 format
  };
  