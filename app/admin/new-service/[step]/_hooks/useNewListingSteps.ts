"use client";

import { NewListingStepsType } from "@/app/_redux/slices/newListingSlice";
import { useRouter } from "next/navigation";

export function useNewListingSteps() {
  const router = useRouter();

  async function newListingNextStep(step: NewListingStepsType) {
    await router.push(step);
  }

  return { newListingNextStep };
}
