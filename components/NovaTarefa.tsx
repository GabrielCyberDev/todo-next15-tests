"use client";

import { useState } from "react";

type Props = {
  onAdicionar: (titulo: string) => void;
};

export default function NovaTarefa({
  onAdicionar,
}: Props) {
  const [titulo, setTitulo] = useState("");
  const [erro, setErro] = useState("");

  function enviar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!titulo.trim()) {
      setErro("Digite uma tarefa.");
      return;
    }

    onAdicionar(titulo);

    setTitulo("");
    setErro("");
  }

  return (
    <form className="form" onSubmit={enviar}>
      <input
        data-testid="input"
        className="input"
        placeholder="Digite uma nova tarefa..."
        value={titulo}
        onChange={(e) => {
          setTitulo(e.target.value);
          setErro("");
        }}
      />

      {erro && (
        <small
          data-testid="erro"
          className="erro"
        >
          {erro}
        </small>
      )}

      <button
        data-testid="botao"
        className="botao"
        type="submit"
      >
        Adicionar
      </button>
    </form>
  );
}