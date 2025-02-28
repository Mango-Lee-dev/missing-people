export interface FormData {
  name: string;
  gender: string;
  birthDate: string;
  height: string;
  weight: string;
  bloodType: string;
  nationality: string;
  languages: string;

  missingDate: string;
  missingTime: string;
  missingLocation: string;
  lastSeenDate: string;
  lastSeenTime: string;
  lastSeenLocation: string;
  circumstances: string;

  // 외형 특징
  clothing: string;
  hairStyle: string;
  hairColor: string;
  wearingGlasses: boolean;
  wearingHearingAid: boolean;
  distinctiveFeatures: string;

  // 건강 상태
  medicalConditions: string;
  medications: string;
  mentalState: string;
  specialHealthConsiderations: string;

  // 연락처 정보
  reporterName: string;
  relationship: string;
  phoneNumber: string;
  email: string;
  alternativeContact: string;

  // 추가 정보
  frequentPlaces: string;
  contactsOfFriends: string;
  belongings: string;

  // 메타 정보
  isPublic: boolean;
  consentToDataProcessing: boolean;
  policeReportFiled: boolean;
  policeReportNumber: string;

  // 이미지 업로드
  images: File[];
}
