"use client";

import { useEffect } from "react";
import { initModals } from "flowbite";

export default function ModalClientController() {
  useEffect(() => {
    initModals();
  }, []);

  return null;
}