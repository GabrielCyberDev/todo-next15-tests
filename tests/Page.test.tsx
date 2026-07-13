import { fireEvent, render, screen } from "@testing-library/react";
import ListaTarefas from "@/components/ListaTarefas";

describe("Página", () => {
  function renderizar() {
    render(
      <ListaTarefas
        tarefasIniciais={[
          {
            id: 1,
            titulo: "Item 1",
          },
          {
            id: 2,
            titulo: "Item 2",
          },
        ]}
      />
    );
  }

  test("renderiza tarefas iniciais", () => {
    renderizar();

    expect(
      screen.getByText((text) => text.includes("Item 1"))
    ).toBeInTheDocument();

    expect(
      screen.getByText((text) => text.includes("Item 2"))
    ).toBeInTheDocument();
  });

  test("contador inicia com duas tarefas", () => {
    renderizar();

    expect(screen.getByTestId("contador")).toHaveTextContent("2");
  });

  test("adiciona uma nova tarefa", () => {
    renderizar();

    fireEvent.change(screen.getByTestId("input"), {
      target: {
        value: "Nova tarefa",
      },
    });

    fireEvent.click(screen.getByTestId("botao"));

    expect(
      screen.getByText((text) => text.includes("Nova tarefa"))
    ).toBeInTheDocument();
  });

  test("contador aumenta após adicionar tarefa", () => {
    renderizar();

    fireEvent.change(screen.getByTestId("input"), {
      target: {
        value: "Nova tarefa",
      },
    });

    fireEvent.click(screen.getByTestId("botao"));

    expect(screen.getByTestId("contador")).toHaveTextContent("3");
  });

  test("mantém tarefas existentes após adicionar", () => {
    renderizar();

    fireEvent.change(screen.getByTestId("input"), {
      target: {
        value: "Terceira",
      },
    });

    fireEvent.click(screen.getByTestId("botao"));

    expect(
      screen.getByText((text) => text.includes("Item 1"))
    ).toBeInTheDocument();

    expect(
      screen.getByText((text) => text.includes("Item 2"))
    ).toBeInTheDocument();

    expect(
      screen.getByText((text) => text.includes("Terceira"))
    ).toBeInTheDocument();
  });
}
);