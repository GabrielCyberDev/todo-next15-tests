export type Tarefa = {
  id: number;
  titulo: string;
};

const tarefas: Tarefa[] = [
  {
    id: 1,
    titulo: "Estudar Next.js",
  },
  {
    id: 2,
    titulo: "Praticar Testes",
  },
];

export async function buscarTarefas(): Promise<Tarefa[]> {
  return Promise.resolve(tarefas);
}