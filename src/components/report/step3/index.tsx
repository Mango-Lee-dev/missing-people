import { FormData } from "../../../types/form";

interface StepThreeProps {
  formData: FormData;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  removeImage: (index: number) => void;
}

export const StepThree = ({
  formData,
  handleChange,
  handleImageUpload,
  removeImage,
}: StepThreeProps) => {
  return (
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
            rows={3}
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
            rows={3}
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
            <p className="text-xs text-gray-500">PNG, JPG, GIF 최대 10MB</p>
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
  );
};
