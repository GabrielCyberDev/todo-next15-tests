"use client";

import { useMemo } from "react";

export default function useContadorDeTarefas(total: number) {
  const quantidade = useMemo(() => total, [total]);

  return quantidade;
}