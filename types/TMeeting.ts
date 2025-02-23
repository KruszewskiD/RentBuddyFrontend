export type TMeeting = {
  meeting_id: number;
  title: string;
  description: string;
  start_time: string; // ISO 8601 format (np. "2024-04-15T10:00:00Z")
  end_time: string;   // ISO 8601 format
  creator_id: number;
  participant_id: number;
  status: "pending" | "accepted" | "rejected"; // Możliwe statusy spotkania
};