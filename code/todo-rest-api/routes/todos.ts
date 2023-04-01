import { ObjectId } from "https://deno.land/x/mongo/mod.ts";
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
  const tid = ctx.params.todoId!;
  const body = await ctx.request.body();
  const data = await body.value;

  await getDB().collection("todos").updateOne({ _id: new ObjectId(tid) }, {
    $set: { text: data.text },
  });

  ctx.response.body = { message: "Updated todo" };
});

router.delete("/todos/:todoId", async (ctx) => {
  const tid = ctx.params.todoId;

  await getDB().collection("todos").deleteOne({ _id: new ObjectId(tid) });

  ctx.response.body = { message: "Deleted todo" };
});

export default router;
