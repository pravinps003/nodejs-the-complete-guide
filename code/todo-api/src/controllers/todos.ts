import { RequestHandler } from 'express';
import { Todo } from '../models/todo';

type RequestBody = { text: string };
type RequestParams = { todoId: string };

let todos: Todo[] = [];

export const getTodos: RequestHandler = (req, res, next) => {
  res.status(200).json({ todos });
};

export const addTodo: RequestHandler = (req, res, next) => {
  const body = req.body as RequestBody;
  const newTodo: Todo = {
    id: new Date().toISOString(),
    text: body.text,
  };
  todos.push(newTodo);
  res.status(201).json({
    message: 'Added Todo',
    todo: newTodo,
    todos,
  });
};

export const updateTodo: RequestHandler = (req, res, next) => {
  const params = req.params as RequestParams;
  const { todoId } = params;
  const body = req.body as RequestBody;
  const todoIndex = todos.findIndex((todoItem) => todoItem.id === todoId);
  if (todoIndex >= 0) {
    todos[todoIndex] = {
      id: todos[todoIndex].id,
      text: body.text,
    };
    return res.status(200).json({
      message: 'Updated todo',
      todos,
    });
  }
  res.status(404).json({
    message: 'Could not find todo for this id.',
  });
};

export const deleteTodo: RequestHandler = (req, res, next) => {
  const params = req.params as RequestParams;
  const { todoId } = params;
  todos = todos.filter((todoItem) => todoItem.id !== todoId);
  res.status(200).json({
    message: 'Deleted Todo',
    todos,
  });
};
