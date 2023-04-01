import { Router } from "https://deno.land/x/oak/mod.ts";

import { getDB } from "../helpers/db_client.ts";

const router = new Router();

interface Todo {
  id?: string;
  text: string;
}

let todos: Todo[] = [];

router.get("/todos", async (ctx) => {
  const todos = await getDB().collection("todos").find();
  const transformedTodos = await todos.map((todo) => {
    return {
      id: todo._id.toString(),
      text: todo.text,
    };
  });
  ctx.response.body = { todos: transformedTodos };
});

router.post("/todos", async (ctx) => {
  const body = await ctx.request.body();
  const data = await body.value;
  const newTodo: Todo = {
    text: data.text,
  };

  const id = await getDB().collection("todos").insertOne(newTodo);
  newTodo.id = id;

  ctx.response.body = { message: "Created todo!", todo: newTodo };
});

router.put("/todos/:todoId", async (ctx) => {
  const tid = ctx.params.todoId;
  const body = await ctx.request.body();
  const data = await body.value;
  const todoIndex = todos.findIndex((todo) => {
    return todo.id === tid;
  });
  todos[todoIndex] = { id: todos[todoIndex].id, text: data.text };
  ctx.response.body = { message: "Updated todo" };
});

router.delete("/todos/:todoId", (ctx) => {
  const tid = ctx.params.todoId;
  todos = todos.filter((todo) => todo.id !== tid);
  ctx.response.body = { message: "Deleted todo" };
});

export default router;
