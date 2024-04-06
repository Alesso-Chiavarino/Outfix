"use client"; // (a)

import * as React from "react";
import { useStore } from "@/store/store";

const Hydration = () => {
  React.useEffect(() => {
    useStore.persist.rehydrate();
  }, []); // (b)

  return null;
};

export default Hydration;