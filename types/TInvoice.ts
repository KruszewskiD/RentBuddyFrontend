export type TInvoice = {
  invoice_id: number;
  amount: number;
  status: string; // Możesz dodać inne statusy, jeśli występują
  sender_id: number;
  receiver_id: number;
  property_id: number;
  created_at: string; // lub użyć Date, jeśli preferujesz obiekt daty
  updated_at: string; // lub użyć Date
  invoice_title:string;
  payment_deadline:string;
};
