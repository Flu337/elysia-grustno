import { Elysia, t } from "elysia";
import { TeacherController } from "./controllers/TeacherController";

export class Router {
  static teachers = new Elysia({ prefix: '/api/teachers' })
    .post(
      "/",
      ({ body }) => TeacherController.create(body),
      {
        body: t.Object({
          name: t.String(),
          email: t.String(),
        }),
      }
    )
    .get(
      "/:id",
      ({ params }) => TeacherController.getById(Number(params.id)),
      {
        params: t.Object({
          id: t.String(),
        }),
      }
    )
    .get("/", () => TeacherController.getAll())
    .delete(
      "/:id",
      ({ params }) => TeacherController.delete(Number(params.id)),
      {
        params: t.Object({
          id: t.String(),
        }),
      }
    );
}