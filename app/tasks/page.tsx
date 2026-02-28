import Bio from "@/components/bio";
import TodoList from "@/components/todolist";

export default function TasksPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 bg-zinc-50 dark:bg-black">
      <section className="w-full max-w-2xl mb-12">
        <h2 className="text-2xl font-bold text-center mb-8">My Bio</h2>
        <Bio />
      </section>
      <hr className="w-full max-w-md border-zinc-300 mb-12" />
      <section className="w-full max-w-2xl mb-12">
        <h2 className="text-2xl font-bold text-center mb-8">Todo List</h2>
        <TodoList />
      </section>
    </main>
  );
}