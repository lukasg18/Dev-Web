
export interface genericInterface<T> {
    
  readAll(): Promise<T[]>;

  readOne(id: number): Promise<T>;

  Create(body): Promise<T>;

  Drop(body): Promise<T>;

  Update(body): Promise<T>;

}
