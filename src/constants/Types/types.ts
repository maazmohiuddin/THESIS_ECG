import { StaticImageData } from "next/image";

export type signupPayload = {
  email: string;
  password: string;
  first_name?: string;
  last_name?: string;
  role?: string;
  dob?: string;
  gender?: string;
  job_role?: string;
  qualification?: string;
};

export interface LoginPayload {
  email: string;
  password: string;
  loginMode: string;
}

export interface Country {
  name: string;
  code: string;
  flag: string;
}
export type Option = {
  label: string;
  value: string;
};
export interface Job {
  heading: string;
  designation: string;
  timings: string;
  employmentStatus: string;
  compensation: string;
  Date: string;
  status: string;
  summary: string;
  imagesrc?: string | StaticImageData;
}
export interface ManageWorkersData {
  imagesrc: string | StaticImageData;
  Name: string;
  FirstName: string;
  LastName: string;
  Email: string;
  PhoneNumber: string;
  EmergencyContact: string;
  ResidentialAddress: string;
  Rating: string;
  Designation: string;
  TotalJobApplied: string;
  Position: string;
  Destination: string;
}
export interface ManageEmployersData {
  imagesrc: string | StaticImageData;
  HotelName: string;
  Website: string;
  HotelType: string;
  FirstName: string;
  LastName: string;
  Email: string;
  PhoneNumber: string;
  EmergencyContact: string;
  ResidentialAddress: string;
  Rating: string;
  TotalJobPost: string;
  CompanyName: string;
  City: string;
  TypeOfBusiness: string;
  Capacity: string;
  VATNumber: string;
  StaffSize: string;
  Destination: string;
  Position: string;
}
export interface ShiftCategoriesData {
  imagesrc: string | StaticImageData;
  CategorieName: string;
}
export interface PaymentsData {
  MonthlyRevenue: string;
  Pricing: string;
  Month: string;
  Name: string;
  AmountIn: string;
  Subscription: string;
  PaymentType: string;
  imagesrc: string | StaticImageData;
  RegisteredAs: string;
  SubscriptionType: string;
}

export interface SubscriptionData {
  SubscriptionPrice: string;
  SubscriptionMonth: string;
  SubscriptionType: string;
  SubscriptionDesc: string;
  SubscriptionFeature: string;
  SubscriptionSelected: boolean;
  SubscriptionRank: string;
}
export interface ViewApplicantsData {
  imagesrc: string | StaticImageData;
  Imagesrc: string | StaticImageData;
  Applicantwrkside: string;
  Applicantcoverltter: string;
  ApplicantEmail: string;
  ApplicantQualification: string;
  ApplicantPerHour: string;
  ApplicantHACCP: string;
  jobName: string;
  ApplicantSkills: string[];
  ApplicantName: string;
  ApplicantRating: string;
  Applicantwork: string;
  ApplicantAssignments: string;
  ApplicantShift: string;
  ApplicantPermanentEmployment: string;
  ApplicantJobPosition1: string;
  ApplicantJobPosition2: string;
  ApplicantJobPosition3: string;
  ApplicantJobPosition4: string;
  ApplicantJobType1: string;
  ApplicantJobType2: string;
  ApplicantJobType3: string;
  ApplicantAddress: string;
}
