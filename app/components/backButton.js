// components/BackButton.js
"use client";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="flex justify-start items-center h-[150px] w-full pl-10">
      {" "}
      <button
        onClick={handleBack}
        className="px-4 py-2 w-[90] h-[40px] text-sm md:w-[200px] md:h-[60px] md:text-lg bg-mypurple text-white hover:bg-opacity-70 transition">
        Back
      </button>
    </div>
  );
};

export default BackButton;
