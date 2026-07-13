import { renderHook } from "@testing-library/react";
import useContadorDeTarefas from "@/hooks/useContadorDeTarefas";

describe("useContadorDeTarefas", () => {
  test("retorna quantidade de tarefas", () => {
    const { result } = renderHook(() =>
      useContadorDeTarefas([
        {
          id: 1,
          titulo: "A",
        },
        {
          id: 2,
          titulo: "B",
        },
      ])
    );

    expect(result.current).toBe(2);
  });

  test("retorna zero quando vazio", () => {
    const { result } = renderHook(() =>
      useContadorDeTarefas([])
    );

    expect(result.current).toBe(0);
  });

  test("atualiza quando a lista muda", () => {
    const { result, rerender } = renderHook(
      ({ tarefas }) =>
        useContadorDeTarefas(tarefas),
      {
        initialProps: {
          tarefas: [
            {
              id: 1,
              titulo: "A",
            },
          ],
        },
      }
    );

    expect(result.current).toBe(1);

    rerender({
      tarefas: [
        {
          id: 1,
          titulo: "A",
        },
        {
          id: 2,
          titulo: "B",
        },
        {
          id: 3,
          titulo: "C",
        },
      ],
    });

    expect(result.current).toBe(3);
  });
});