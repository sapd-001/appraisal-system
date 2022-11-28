type SomeAnonymouseType<T> = T extends infer R ? R : never;

interface SomeClass<T> {
  someMethod(arg: T): T;
}
type User = {
  name: string;
  age: number;
};
class UserClass implements SomeClass<SomeAnonymouseType<User>> {
  public someMethod(arg: User): User {
    return arg;
  }
}

export { UserClass, User, SomeAnonymouseType };
