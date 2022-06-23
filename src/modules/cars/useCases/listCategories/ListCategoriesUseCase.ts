import { Category } from '../../entities/Category';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

class ListCategoriesUseCase {
  constructor(private cateroriesRepository: ICategoriesRepository) {}
  execute(): Category[] {
    const categories = this.cateroriesRepository.list();

    return categories;
  }
}

export { ListCategoriesUseCase };
