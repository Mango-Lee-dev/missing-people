import { FormData } from "../../../types/form";

interface StepFourProps {
  formData: FormData;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export const StepFour = ({ formData, handleChange }: StepFourProps) => {
  return (
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
          rows={3}
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
          rows={3}
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
          rows={3}
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
          rows={3}
          placeholder="특별히 주의해야 할 건강 상태가 있다면 알려주세요"
          className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
        />
      </div>
    </div>
  );
};
