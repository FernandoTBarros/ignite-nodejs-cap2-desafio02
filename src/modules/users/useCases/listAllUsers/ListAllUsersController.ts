import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers;
    try {
      if (typeof user_id === "string") {
        const allusers = this.listAllUsersUseCase.execute({ user_id });
        return response.status(200).json(allusers);
      }
      return response.status(500).json({
        error: `Invalid header 'user_id'. Expected type string, got ${typeof user_id}`,
      });
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { ListAllUsersController };
