import { renderHook } from "@testing-library/react";
import useContadorDeTarefas from "@/hooks/useContadorDeTarefas";

describe("Hook", () => {
  test("retorna quantidade", () => {
    const { result } = renderHook(() =>
      useContadorDeTarefas(5)
    );

    expect(result.current).toBe(5);
  });
});