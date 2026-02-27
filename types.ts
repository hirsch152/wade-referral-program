
export interface Reward {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface ReferralSubmission {
  referrerName: string;
  referrerEmail: string;
  referralName: string;
  referralCompany: string;
  referralEmail: string;
  notes: string;
}
