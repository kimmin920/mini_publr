import React, { useState } from "react";

import { reorder } from "./reorder";

export type SwapResult = {
  targetSectionId: string;
  destinationLowerSectionId: string | null;
  destinationUpperSectionId: string | null;
};

type Props = {
  list: any[];
  onSwapSections: (result: SwapResult) => void;
};

function EditorDropZone({ list, onSwapSections }: Props) {
  // TODO: 임시 effect, 제거 필요

  return <></>;
}

export default EditorDropZone;
