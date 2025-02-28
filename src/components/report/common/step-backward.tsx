export const StepBackward = ({ prevStep }: { prevStep: () => void }) => {
  return (
    <button
      className="bg-primary-600 text-white px-4 py-2 rounded-md"
      onClick={prevStep}
    >
      이전
    </button>
  );
};
