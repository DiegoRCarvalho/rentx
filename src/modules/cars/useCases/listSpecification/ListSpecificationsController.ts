import { Request, Response } from 'express';

import { ListSpecificationsUseCase } from './ListSpecificationsUseCase';

class ListSpecificationsController {
  constructor(private listEspecificationsUseCase: ListSpecificationsUseCase) {}

  handle(request: Request, response: Response) {
    const specifications = this.listEspecificationsUseCase.execute();

    return response.json(specifications);
  }
}

export { ListSpecificationsController };
