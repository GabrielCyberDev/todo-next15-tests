import ListaTarefas from "@/components/ListaTarefas";
import { buscarTarefas } from "@/lib/tarefas";

export default async function Page() {
  const tarefas = await buscarTarefas();

  return (
    <main className="container">
      <h1>📋 Lista de Tarefas</h1>

      <p className="subtitulo">
        Exemplo utilizando Server Components,
        Client Components, Hooks
        personalizados e Testes Unitários.
      </p>

      <ListaTarefas
        tarefasIniciais={tarefas}
      />
    </main>
  );
}