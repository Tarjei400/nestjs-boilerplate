import { AnyConstructor } from './types';

export abstract class ILazyLoaderService {
  /***
   * Resolves dependencies after module is initialized
   * It creates Lazy object, which is a proxy, underlying instance is created after onModuleInit is called
   *
   * @param clazz
   * @param args list of dependencies to inject from outside of dependency injection system
   */
  abstract lazyCreate<T>(clazz: AnyConstructor<T>, ...args: any[]): Promise<T>;

  /***
   * If in factory, it resolves all dependencies to creatin instance of a class
   *
   * @param clazz
   * @param args
   */
  abstract create<T>(clazz: AnyConstructor<T>, ...args: any[]): Promise<T>;
}
