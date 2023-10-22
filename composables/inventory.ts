export async function useTodo() {
  const data = await queryContent<{ body: TodoPart }>("/todo").findOne();

  return { data };
}
