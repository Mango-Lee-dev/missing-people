import { useCallback } from "react";
import { FormData } from "../../types/form";

export const useChangeForm = ({
  formData,
  setFormData,
}: {
  formData: FormData;
  setFormData: (data: FormData) => void;
}) => {
  const handleChange = useCallback(
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >
    ) => {
      const { name, value, type, checked } = e.target as HTMLInputElement;
      setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value,
      });
    },
    [formData, setFormData]
  );

  const handleImageUpload = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = Array.from(e.target.files || []);
      setFormData({
        ...formData,
        images: [...formData.images, ...files],
      });
    },
    [formData, setFormData]
  );

  const validateStep = useCallback(
    (step: number) => {
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
    },
    [formData]
  );

  const removeImage = useCallback(
    (index: number) => {
      const newImages = [...formData.images];
      newImages.splice(index, 1);
      setFormData({
        ...formData,
        images: newImages,
      });
    },
    [formData, setFormData]
  );

  return { handleChange, handleImageUpload, validateStep, removeImage };
};
