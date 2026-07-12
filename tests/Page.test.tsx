import { render, screen } from "@testing-library/react";
import ListaTarefas from "@/components/ListaTarefas";

describe("Página", () => {
  test("renderiza tarefas", () => {
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

    expect(
      screen.getByText((content) => content.includes("Item 1"))
    ).toBeInTheDocument();

    expect(
      screen.getByText((content) => content.includes("Item 2"))
    ).toBeInTheDocument();

    expect(
      screen.getByTestId("contador")
    ).toHaveTextContent("2");
  });
});