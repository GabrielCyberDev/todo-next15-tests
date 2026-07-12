import "./globals.css";

export const metadata = {
  title: "Lista de Tarefas",
  description: "Projeto Next.js 15",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}