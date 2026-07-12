"use client";

import { useState } from "react";
import NovaTarefa from "./NovaTarefa";
import useContadorDeTarefas from "@/hooks/useContadorDeTarefas";
import { Tarefa } from "@/lib/tarefas";

type Props = {
  tarefasIniciais: Tarefa[];
};

export default function ListaTarefas({
  tarefasIniciais,
}: Props) {
  const [tarefas, setTarefas] =
    useState(tarefasIniciais);

  function adicionar(titulo: string) {
    setTarefas((estado) => [
      ...estado,
      {
        id: Date.now(),
        titulo,
      },
    ]);
  }

  const quantidade =
    useContadorDeTarefas(tarefas.length);

  return (
    <>
      <NovaTarefa onAdicionar={adicionar} />

      <div className="contador">
        <span>Tarefas</span>

        <strong data-testid="contador">
          {quantidade}
        </strong>
      </div>

      <ul className="lista">
        {tarefas.map((tarefa) => (
          <li
            className="card"
            key={tarefa.id}
          >
            ✓ {tarefa.titulo}
          </li>
        ))}
      </ul>
    </>
  );
}