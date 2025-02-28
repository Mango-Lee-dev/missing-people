import { FormData } from "../../../types/form";

interface StepTwoProps {
  formData: FormData;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export const StepTwo = ({ formData, handleChange }: StepTwoProps) => {
  return (
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
          rows={4}
          placeholder="실종 당시의 상황을 자세히 설명해주세요"
          className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
        />
      </div>
    </div>
  );
};
