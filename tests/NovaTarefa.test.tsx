import { render, screen, fireEvent } from "@testing-library/react";
import NovaTarefa from "@/components/NovaTarefa";

describe("NovaTarefa", () => {
  test("renderiza input e botão", () => {
    render(<NovaTarefa onAdicionar={jest.fn()} />);

    expect(screen.getByTestId("input")).toBeInTheDocument();
    expect(screen.getByTestId("botao")).toBeInTheDocument();
  });

  test("placeholder correto", () => {
    render(<NovaTarefa onAdicionar={jest.fn()} />);

    expect(
      screen.getByPlaceholderText("Digite uma nova tarefa...")
    ).toBeInTheDocument();
  });

  test("não envia formulário vazio", () => {
    const fn = jest.fn();

    render(<NovaTarefa onAdicionar={fn} />);

    fireEvent.click(screen.getByTestId("botao"));

    expect(fn).not.toHaveBeenCalled();

    expect(screen.getByTestId("erro")).toHaveTextContent(
      "Digite uma tarefa."
    );
  });

  test("remove mensagem de erro ao digitar", () => {
    render(<NovaTarefa onAdicionar={jest.fn()} />);

    fireEvent.click(screen.getByTestId("botao"));

    fireEvent.change(screen.getByTestId("input"), {
      target: {
        value: "Estudar Jest",
      },
    });

    expect(screen.queryByTestId("erro")).not.toBeInTheDocument();
  });

  test("envia tarefa corretamente", () => {
    const fn = jest.fn();

    render(<NovaTarefa onAdicionar={fn} />);

    fireEvent.change(screen.getByTestId("input"), {
      target: {
        value: "Nova tarefa",
      },
    });

    fireEvent.click(screen.getByTestId("botao"));

    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenCalledWith("Nova tarefa");
  });

  test("limpa o input após envio", () => {
    const fn = jest.fn();

    render(<NovaTarefa onAdicionar={fn} />);

    const input = screen.getByTestId("input") as HTMLInputElement;

    fireEvent.change(input, {
      target: {
        value: "Aprender Testing Library",
      },
    });

    fireEvent.click(screen.getByTestId("botao"));

    expect(input.value).toBe("");
  });
});