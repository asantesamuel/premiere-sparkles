// components/BackButton.js
"use client";
import { useRouter } from "next/navigation";

const BackButton = ({ light = false }) => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="mb-7 flex w-full items-center">
      <button
        type="button"
        onClick={handleBack}
        className={`inline-flex min-h-10 items-center gap-2 border px-4 text-sm font-medium transition ${
          light
            ? "border-white/45 text-white hover:border-[#ffec9e] hover:text-[#ffec9e]"
            : "border-[#7e637c]/40 text-[#4c3a4b] hover:border-[#7b217c] hover:text-[#7b217c]"
        }`}>
        <span aria-hidden="true">←</span> Back
      </button>
    </div>
  );
};

export default BackButton;
