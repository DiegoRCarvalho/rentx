import { Router } from 'express';

import { createSpecificationsController } from '../modules/cars/useCases/createSpecification';
import { listSpecificationsController } from '../modules/cars/useCases/listSpecification';

const specificationRoutes = Router();

specificationRoutes.post('/', (request, response) => {
  return createSpecificationsController.handle(request, response);
});

specificationRoutes.get('/', (request, response) => {
  return listSpecificationsController.handle(request, response);
});

export { specificationRoutes };
