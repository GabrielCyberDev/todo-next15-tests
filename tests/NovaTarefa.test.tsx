import { render, screen, fireEvent } from "@testing-library/react";
import NovaTarefa from "@/components/NovaTarefa";

describe("NovaTarefa", () => {
  test("renderiza", () => {
    render(<NovaTarefa onAdicionar={jest.fn()} />);

    expect(
      screen.getByTestId("input")
    ).toBeInTheDocument();

    expect(
      screen.getByTestId("botao")
    ).toBeInTheDocument();
  });

 test("não envia vazio", () => {
  const fn = jest.fn();

  render(<NovaTarefa onAdicionar={fn} />);

  fireEvent.click(screen.getByTestId("botao"));

  expect(fn).not.toHaveBeenCalled();

  expect(
    screen.getByTestId("erro")
  ).toBeInTheDocument();
});

  test("envia tarefa", () => {
    const fn = jest.fn();

    render(<NovaTarefa onAdicionar={fn} />);

    fireEvent.change(
      screen.getByTestId("input"),
      {
        target: {
          value: "Nova tarefa",
        },
      }
    );

    fireEvent.click(
      screen.getByTestId("botao")
    );

    expect(fn).toHaveBeenCalledWith(
      "Nova tarefa"
    );
  });
});