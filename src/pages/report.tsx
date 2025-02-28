import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Report = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
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
    images: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    // 실제 구현에서는 이미지 미리보기와 서버 업로드 로직이 필요합니다
    setFormData({
      ...formData,
      images: [...formData.images, ...files],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 여기에 API 제출 로직이 들어갑니다
    console.log("제출된 데이터:", formData);
    // 성공 페이지로 리다이렉트
    navigate("/report-submitted");
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
    window.scrollTo(0, 0);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
    window.scrollTo(0, 0);
  };

  // 각 단계별 유효성 검사 (간단한 예시)
  const validateStep = (step) => {
    if (step === 1) {
      return formData.name && formData.gender && formData.birthDate;
    } else if (step === 2) {
      return formData.missingDate && formData.missingLocation;
    } else if (step === 5) {
      return (
        formData.reporterName &&
        formData.phoneNumber &&
        formData.consentToDataProcessing
      );
    }
    return true;
  };

  const removeImage = (index) => {
    const newImages = [...formData.images];
    newImages.splice(index, 1);
    setFormData({
      ...formData,
      images: newImages,
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-primary-700 text-center mb-8">
        실종자 신고하기
      </h1>

      {/* 진행 상태 표시 */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          {[1, 2, 3, 4, 5].map((step) => (
            <div key={step} className="text-center">
              <div
                className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center ${
                  currentStep === step
                    ? "bg-primary-600 text-white"
                    : currentStep > step
                    ? "bg-primary-300 text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {step}
              </div>
              <div className="text-xs mt-1">
                {step === 1 && "기본 정보"}
                {step === 2 && "실종 상황"}
                {step === 3 && "외형 특징"}
                {step === 4 && "건강 상태"}
                {step === 5 && "연락처"}
              </div>
            </div>
          ))}
        </div>
        <div className="relative pt-1">
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
            <div
              style={{ width: `${(currentStep / 5) * 100}%` }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary-600 transition-all duration-300"
            />
          </div>
        </div>
      </div>

      <div className="bg-white shadow-card rounded-lg p-6">
        <form onSubmit={handleSubmit}>
          {/* 단계 1: 실종자 기본 정보 */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold border-b pb-2 text-primary-700">
                실종자 기본 정보
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                정확한 정보를 입력해주세요. *표시는 필수 입력 사항입니다.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-1"
                    htmlFor="name"
                  >
                    이름 *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    성별 *
                  </label>
                  <div className="flex space-x-4 mt-2">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="male"
                        name="gender"
                        value="male"
                        checked={formData.gender === "male"}
                        onChange={handleChange}
                        className="focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300"
                      />
                      <label
                        htmlFor="male"
                        className="ml-2 block text-sm text-gray-700"
                      >
                        남성
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="female"
                        name="gender"
                        value="female"
                        checked={formData.gender === "female"}
                        onChange={handleChange}
                        className="focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300"
                      />
                      <label
                        htmlFor="female"
                        className="ml-2 block text-sm text-gray-700"
                      >
                        여성
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="other"
                        name="gender"
                        value="other"
                        checked={formData.gender === "other"}
                        onChange={handleChange}
                        className="focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300"
                      />
                      <label
                        htmlFor="other"
                        className="ml-2 block text-sm text-gray-700"
                      >
                        기타
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-1"
                    htmlFor="birthDate"
                  >
                    생년월일 *
                  </label>
                  <input
                    type="date"
                    id="birthDate"
                    name="birthDate"
                    value={formData.birthDate}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  />
                </div>

                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-1"
                    htmlFor="height"
                  >
                    키 (cm)
                  </label>
                  <input
                    type="number"
                    id="height"
                    name="height"
                    value={formData.height}
                    onChange={handleChange}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  />
                </div>

                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-1"
                    htmlFor="weight"
                  >
                    체중 (kg)
                  </label>
                  <input
                    type="number"
                    id="weight"
                    name="weight"
                    value={formData.weight}
                    onChange={handleChange}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-1"
                    htmlFor="bloodType"
                  >
                    혈액형
                  </label>
                  <select
                    id="bloodType"
                    name="bloodType"
                    value={formData.bloodType}
                    onChange={handleChange}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  >
                    <option value="">알 수 없음</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select>
                </div>

                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-1"
                    htmlFor="nationality"
                  >
                    국적
                  </label>
                  <input
                    type="text"
                    id="nationality"
                    name="nationality"
                    value={formData.nationality}
                    onChange={handleChange}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  />
                </div>

                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-1"
                    htmlFor="languages"
                  >
                    사용 언어
                  </label>
                  <input
                    type="text"
                    id="languages"
                    name="languages"
                    value={formData.languages}
                    onChange={handleChange}
                    placeholder="예: 한국어, 영어"
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  />
                </div>
              </div>
            </div>
          )}

          {/* 단계 2: 실종 상황 정보 */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold border-b pb-2 text-primary-700">
                실종 상황 정보
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                실종된 상황에 대해 가능한 자세히 알려주세요.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-1"
                    htmlFor="missingDate"
                  >
                    실종 일자 *
                  </label>
                  <input
                    type="date"
                    id="missingDate"
                    name="missingDate"
                    value={formData.missingDate}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  />
                </div>

                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-1"
                    htmlFor="missingTime"
                  >
                    실종 시간 (대략)
                  </label>
                  <input
                    type="time"
                    id="missingTime"
                    name="missingTime"
                    value={formData.missingTime}
                    onChange={handleChange}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  />
                </div>
              </div>

              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="missingLocation"
                >
                  실종 장소 *
                </label>
                <input
                  type="text"
                  id="missingLocation"
                  name="missingLocation"
                  value={formData.missingLocation}
                  onChange={handleChange}
                  required
                  placeholder="가능한 상세히 적어주세요 (예: OO시 OO구 OO동 OO공원 근처)"
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-1"
                    htmlFor="lastSeenDate"
                  >
                    마지막 목격 일자
                  </label>
                  <input
                    type="date"
                    id="lastSeenDate"
                    name="lastSeenDate"
                    value={formData.lastSeenDate}
                    onChange={handleChange}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  />
                </div>

                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-1"
                    htmlFor="lastSeenTime"
                  >
                    마지막 목격 시간
                  </label>
                  <input
                    type="time"
                    id="lastSeenTime"
                    name="lastSeenTime"
                    value={formData.lastSeenTime}
                    onChange={handleChange}
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  />
                </div>
              </div>

              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="lastSeenLocation"
                >
                  마지막 목격 장소
                </label>
                <input
                  type="text"
                  id="lastSeenLocation"
                  name="lastSeenLocation"
                  value={formData.lastSeenLocation}
                  onChange={handleChange}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
              </div>

              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="circumstances"
                >
                  실종 당시 상황
                </label>
                <textarea
                  id="circumstances"
                  name="circumstances"
                  value={formData.circumstances}
                  onChange={handleChange}
                  rows="4"
                  placeholder="실종 당시의 상황을 자세히 설명해주세요"
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
              </div>
            </div>
          )}

          {/* 단계 3: 외형 특징 */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold border-b pb-2 text-primary-700">
                외형 특징
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                실종자를 식별하는데 도움이 되는 특징을 알려주세요.
              </p>

              <div className="space-y-4">
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-1"
                    htmlFor="clothing"
                  >
                    실종 당시 의류
                  </label>
                  <textarea
                    id="clothing"
                    name="clothing"
                    value={formData.clothing}
                    onChange={handleChange}
                    rows="3"
                    placeholder="실종 당시 입고 있던 옷을 상세히 설명해주세요"
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      className="block text-sm font-medium text-gray-700 mb-1"
                      htmlFor="hairStyle"
                    >
                      머리 스타일
                    </label>
                    <input
                      type="text"
                      id="hairStyle"
                      name="hairStyle"
                      value={formData.hairStyle}
                      onChange={handleChange}
                      placeholder="예: 짧은 머리, 긴 생머리, 곱슬머리"
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    />
                  </div>

                  <div>
                    <label
                      className="block text-sm font-medium text-gray-700 mb-1"
                      htmlFor="hairColor"
                    >
                      머리 색상
                    </label>
                    <input
                      type="text"
                      id="hairColor"
                      name="hairColor"
                      value={formData.hairColor}
                      onChange={handleChange}
                      placeholder="예: 검정색, 갈색, 금발"
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                    />
                  </div>
                </div>

                <div className="flex flex-wrap space-y-2 md:space-y-0 md:space-x-6">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="wearingGlasses"
                      name="wearingGlasses"
                      checked={formData.wearingGlasses}
                      onChange={handleChange}
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="wearingGlasses"
                      className="ml-2 block text-sm text-gray-700"
                    >
                      안경 착용
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="wearingHearingAid"
                      name="wearingHearingAid"
                      checked={formData.wearingHearingAid}
                      onChange={handleChange}
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="wearingHearingAid"
                      className="ml-2 block text-sm text-gray-700"
                    >
                      보청기 착용
                    </label>
                  </div>
                </div>

                <div>
                  <label
                    className="block text-sm font-medium text-gray-700 mb-1"
                    htmlFor="distinctiveFeatures"
                  >
                    눈에 띄는 특징
                  </label>
                  <textarea
                    id="distinctiveFeatures"
                    name="distinctiveFeatures"
                    value={formData.distinctiveFeatures}
                    onChange={handleChange}
                    rows="3"
                    placeholder="눈에 띄는 특징을 알려주세요 (예: 왼쪽 팔에 큰 흉터, 귀 피어싱, 목 부근 점)"
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  실종자 사진 업로드 (여러 장 선택 가능)
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-primary-600 hover:text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500"
                      >
                        <span>사진 파일 업로드</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          multiple
                          accept="image/*"
                          className="sr-only"
                          onChange={handleImageUpload}
                        />
                      </label>
                      <p className="pl-1">또는 여기로 끌어다 놓기</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      PNG, JPG, GIF 최대 10MB
                    </p>
                  </div>
                </div>

                {/* 업로드된 이미지 미리보기 */}
                {formData.images.length > 0 && (
                  <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {formData.images.map((image, index) => (
                      <div key={index} className="relative">
                        <div className="h-24 w-full overflow-hidden rounded-md">
                          <img
                            src={URL.createObjectURL(image)}
                            alt={`업로드 이미지 ${index + 1}`}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <button
                          type="button"
                          onClick={() => removeImage(index)}
                          className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 shadow-sm hover:bg-red-600"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* 단계 4: 건강 상태 */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold border-b pb-2 text-primary-700">
                건강 상태
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                실종자의 건강 정보는 찾는데 중요한 정보가 될 수 있습니다.
              </p>

              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="medicalConditions"
                >
                  기존 질환
                </label>
                <textarea
                  id="medicalConditions"
                  name="medicalConditions"
                  value={formData.medicalConditions}
                  onChange={handleChange}
                  rows="3"
                  placeholder="실종자가 가지고 있는 질환이나 건강 문제가 있다면 알려주세요"
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
              </div>

              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="medications"
                >
                  복용 중인 약물
                </label>
                <textarea
                  id="medications"
                  name="medications"
                  value={formData.medications}
                  onChange={handleChange}
                  rows="3"
                  placeholder="실종자가 복용 중인 약물이 있다면 알려주세요"
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
              </div>

              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="mentalState"
                >
                  정신적 상태
                </label>
                <textarea
                  id="mentalState"
                  name="mentalState"
                  value={formData.mentalState}
                  onChange={handleChange}
                  rows="3"
                  placeholder="실종자의 정신적 상태나 인지 능력에 관한 정보를 알려주세요 (예: 기억력 저하, 치매, 우울증 등)"
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
              </div>

              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-1"
                  htmlFor="specialHealthConsiderations"
                >
                  특별히 주의해야 할 건강 상태
                </label>
                <textarea
                  id="specialHealthConsiderations"
                  name="specialHealthConsiderations"
                  value={formData.specialHealthConsiderations}
                  onChange={handleChange}
                  rows="3"
                  placeholder="특별히 주의해야 할 건강 상태가 있다면 알려주세요"
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};
