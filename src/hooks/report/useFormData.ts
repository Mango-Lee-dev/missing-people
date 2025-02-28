import { useState } from "react";
import { FormData } from "../../types/form";

export const useFormData = () => {
  const [formData, setFormData] = useState<FormData>({
    // 실종자 기본 정보
    name: "",
    gender: "",
    birthDate: "",
    height: "",
    weight: "",
    bloodType: "",
    nationality: "",
    languages: "",

    // 실종 상황 정보
    missingDate: "",
    missingTime: "",
    missingLocation: "",
    lastSeenDate: "",
    lastSeenTime: "",
    lastSeenLocation: "",
    circumstances: "",

    // 외형 특징
    clothing: "",
    hairStyle: "",
    hairColor: "",
    wearingGlasses: false,
    wearingHearingAid: false,
    distinctiveFeatures: "",

    // 건강 상태
    medicalConditions: "",
    medications: "",
    mentalState: "",
    specialHealthConsiderations: "",

    // 연락처 정보
    reporterName: "",
    relationship: "",
    phoneNumber: "",
    email: "",
    alternativeContact: "",

    // 추가 정보
    frequentPlaces: "",
    contactsOfFriends: "",
    belongings: "",

    // 메타 정보
    isPublic: true,
    consentToDataProcessing: false,
    policeReportFiled: false,
    policeReportNumber: "",

    // 이미지 업로드
    images: [] as File[],
  });
  const [currentStep, setCurrentStep] = useState(1);

  return { formData, setFormData, currentStep, setCurrentStep };
};
