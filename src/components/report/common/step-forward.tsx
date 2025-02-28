export const StepForward = ({ nextStep }: { nextStep: () => void }) => {
  return (
    <button
      className="bg-primary-600 text-white px-4 py-2 rounded-md justify-end"
      onClick={nextStep}
    >
      다음
    </button>
  );
};
