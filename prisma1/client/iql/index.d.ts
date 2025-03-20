
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Nivel
 * 
 */
export type Nivel = $Result.DefaultSelection<Prisma.$NivelPayload>
/**
 * Model Login
 * 
 */
export type Login = $Result.DefaultSelection<Prisma.$LoginPayload>
/**
 * Model Menu
 * 
 */
export type Menu = $Result.DefaultSelection<Prisma.$MenuPayload>
/**
 * Model Menuitem
 * 
 */
export type Menuitem = $Result.DefaultSelection<Prisma.$MenuitemPayload>
/**
 * Model Coluna
 * 
 */
export type Coluna = $Result.DefaultSelection<Prisma.$ColunaPayload>
/**
 * Model Usuariocoluna
 * 
 */
export type Usuariocoluna = $Result.DefaultSelection<Prisma.$UsuariocolunaPayload>
/**
 * Model Unidade
 * 
 */
export type Unidade = $Result.DefaultSelection<Prisma.$UnidadePayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs>;

  /**
   * `prisma.nivel`: Exposes CRUD operations for the **Nivel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Nivels
    * const nivels = await prisma.nivel.findMany()
    * ```
    */
  get nivel(): Prisma.NivelDelegate<ExtArgs>;

  /**
   * `prisma.login`: Exposes CRUD operations for the **Login** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Logins
    * const logins = await prisma.login.findMany()
    * ```
    */
  get login(): Prisma.LoginDelegate<ExtArgs>;

  /**
   * `prisma.menu`: Exposes CRUD operations for the **Menu** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Menus
    * const menus = await prisma.menu.findMany()
    * ```
    */
  get menu(): Prisma.MenuDelegate<ExtArgs>;

  /**
   * `prisma.menuitem`: Exposes CRUD operations for the **Menuitem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Menuitems
    * const menuitems = await prisma.menuitem.findMany()
    * ```
    */
  get menuitem(): Prisma.MenuitemDelegate<ExtArgs>;

  /**
   * `prisma.coluna`: Exposes CRUD operations for the **Coluna** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Colunas
    * const colunas = await prisma.coluna.findMany()
    * ```
    */
  get coluna(): Prisma.ColunaDelegate<ExtArgs>;

  /**
   * `prisma.usuariocoluna`: Exposes CRUD operations for the **Usuariocoluna** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuariocolunas
    * const usuariocolunas = await prisma.usuariocoluna.findMany()
    * ```
    */
  get usuariocoluna(): Prisma.UsuariocolunaDelegate<ExtArgs>;

  /**
   * `prisma.unidade`: Exposes CRUD operations for the **Unidade** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Unidades
    * const unidades = await prisma.unidade.findMany()
    * ```
    */
  get unidade(): Prisma.UnidadeDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.18.0
   * Query Engine version: 4c784e32044a8a016d99474bd02a3b6123742169
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Usuario: 'Usuario',
    Nivel: 'Nivel',
    Login: 'Login',
    Menu: 'Menu',
    Menuitem: 'Menuitem',
    Coluna: 'Coluna',
    Usuariocoluna: 'Usuariocoluna',
    Unidade: 'Unidade'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "usuario" | "nivel" | "login" | "menu" | "menuitem" | "coluna" | "usuariocoluna" | "unidade"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Nivel: {
        payload: Prisma.$NivelPayload<ExtArgs>
        fields: Prisma.NivelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NivelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NivelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NivelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NivelPayload>
          }
          findFirst: {
            args: Prisma.NivelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NivelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NivelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NivelPayload>
          }
          findMany: {
            args: Prisma.NivelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NivelPayload>[]
          }
          create: {
            args: Prisma.NivelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NivelPayload>
          }
          createMany: {
            args: Prisma.NivelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.NivelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NivelPayload>
          }
          update: {
            args: Prisma.NivelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NivelPayload>
          }
          deleteMany: {
            args: Prisma.NivelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NivelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NivelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NivelPayload>
          }
          aggregate: {
            args: Prisma.NivelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNivel>
          }
          groupBy: {
            args: Prisma.NivelGroupByArgs<ExtArgs>
            result: $Utils.Optional<NivelGroupByOutputType>[]
          }
          count: {
            args: Prisma.NivelCountArgs<ExtArgs>
            result: $Utils.Optional<NivelCountAggregateOutputType> | number
          }
        }
      }
      Login: {
        payload: Prisma.$LoginPayload<ExtArgs>
        fields: Prisma.LoginFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LoginFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LoginFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginPayload>
          }
          findFirst: {
            args: Prisma.LoginFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LoginFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginPayload>
          }
          findMany: {
            args: Prisma.LoginFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginPayload>[]
          }
          create: {
            args: Prisma.LoginCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginPayload>
          }
          createMany: {
            args: Prisma.LoginCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LoginDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginPayload>
          }
          update: {
            args: Prisma.LoginUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginPayload>
          }
          deleteMany: {
            args: Prisma.LoginDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LoginUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LoginUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoginPayload>
          }
          aggregate: {
            args: Prisma.LoginAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLogin>
          }
          groupBy: {
            args: Prisma.LoginGroupByArgs<ExtArgs>
            result: $Utils.Optional<LoginGroupByOutputType>[]
          }
          count: {
            args: Prisma.LoginCountArgs<ExtArgs>
            result: $Utils.Optional<LoginCountAggregateOutputType> | number
          }
        }
      }
      Menu: {
        payload: Prisma.$MenuPayload<ExtArgs>
        fields: Prisma.MenuFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MenuFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MenuFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>
          }
          findFirst: {
            args: Prisma.MenuFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MenuFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>
          }
          findMany: {
            args: Prisma.MenuFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>[]
          }
          create: {
            args: Prisma.MenuCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>
          }
          createMany: {
            args: Prisma.MenuCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MenuDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>
          }
          update: {
            args: Prisma.MenuUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>
          }
          deleteMany: {
            args: Prisma.MenuDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MenuUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MenuUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>
          }
          aggregate: {
            args: Prisma.MenuAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMenu>
          }
          groupBy: {
            args: Prisma.MenuGroupByArgs<ExtArgs>
            result: $Utils.Optional<MenuGroupByOutputType>[]
          }
          count: {
            args: Prisma.MenuCountArgs<ExtArgs>
            result: $Utils.Optional<MenuCountAggregateOutputType> | number
          }
        }
      }
      Menuitem: {
        payload: Prisma.$MenuitemPayload<ExtArgs>
        fields: Prisma.MenuitemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MenuitemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuitemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MenuitemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuitemPayload>
          }
          findFirst: {
            args: Prisma.MenuitemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuitemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MenuitemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuitemPayload>
          }
          findMany: {
            args: Prisma.MenuitemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuitemPayload>[]
          }
          create: {
            args: Prisma.MenuitemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuitemPayload>
          }
          createMany: {
            args: Prisma.MenuitemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MenuitemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuitemPayload>
          }
          update: {
            args: Prisma.MenuitemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuitemPayload>
          }
          deleteMany: {
            args: Prisma.MenuitemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MenuitemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MenuitemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuitemPayload>
          }
          aggregate: {
            args: Prisma.MenuitemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMenuitem>
          }
          groupBy: {
            args: Prisma.MenuitemGroupByArgs<ExtArgs>
            result: $Utils.Optional<MenuitemGroupByOutputType>[]
          }
          count: {
            args: Prisma.MenuitemCountArgs<ExtArgs>
            result: $Utils.Optional<MenuitemCountAggregateOutputType> | number
          }
        }
      }
      Coluna: {
        payload: Prisma.$ColunaPayload<ExtArgs>
        fields: Prisma.ColunaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ColunaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColunaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ColunaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColunaPayload>
          }
          findFirst: {
            args: Prisma.ColunaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColunaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ColunaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColunaPayload>
          }
          findMany: {
            args: Prisma.ColunaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColunaPayload>[]
          }
          create: {
            args: Prisma.ColunaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColunaPayload>
          }
          createMany: {
            args: Prisma.ColunaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ColunaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColunaPayload>
          }
          update: {
            args: Prisma.ColunaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColunaPayload>
          }
          deleteMany: {
            args: Prisma.ColunaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ColunaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ColunaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColunaPayload>
          }
          aggregate: {
            args: Prisma.ColunaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateColuna>
          }
          groupBy: {
            args: Prisma.ColunaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ColunaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ColunaCountArgs<ExtArgs>
            result: $Utils.Optional<ColunaCountAggregateOutputType> | number
          }
        }
      }
      Usuariocoluna: {
        payload: Prisma.$UsuariocolunaPayload<ExtArgs>
        fields: Prisma.UsuariocolunaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuariocolunaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariocolunaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuariocolunaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariocolunaPayload>
          }
          findFirst: {
            args: Prisma.UsuariocolunaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariocolunaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuariocolunaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariocolunaPayload>
          }
          findMany: {
            args: Prisma.UsuariocolunaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariocolunaPayload>[]
          }
          create: {
            args: Prisma.UsuariocolunaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariocolunaPayload>
          }
          createMany: {
            args: Prisma.UsuariocolunaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UsuariocolunaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariocolunaPayload>
          }
          update: {
            args: Prisma.UsuariocolunaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariocolunaPayload>
          }
          deleteMany: {
            args: Prisma.UsuariocolunaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuariocolunaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsuariocolunaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuariocolunaPayload>
          }
          aggregate: {
            args: Prisma.UsuariocolunaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuariocoluna>
          }
          groupBy: {
            args: Prisma.UsuariocolunaGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuariocolunaGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuariocolunaCountArgs<ExtArgs>
            result: $Utils.Optional<UsuariocolunaCountAggregateOutputType> | number
          }
        }
      }
      Unidade: {
        payload: Prisma.$UnidadePayload<ExtArgs>
        fields: Prisma.UnidadeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UnidadeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnidadePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UnidadeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnidadePayload>
          }
          findFirst: {
            args: Prisma.UnidadeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnidadePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UnidadeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnidadePayload>
          }
          findMany: {
            args: Prisma.UnidadeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnidadePayload>[]
          }
          create: {
            args: Prisma.UnidadeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnidadePayload>
          }
          createMany: {
            args: Prisma.UnidadeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UnidadeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnidadePayload>
          }
          update: {
            args: Prisma.UnidadeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnidadePayload>
          }
          deleteMany: {
            args: Prisma.UnidadeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UnidadeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UnidadeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnidadePayload>
          }
          aggregate: {
            args: Prisma.UnidadeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUnidade>
          }
          groupBy: {
            args: Prisma.UnidadeGroupByArgs<ExtArgs>
            result: $Utils.Optional<UnidadeGroupByOutputType>[]
          }
          count: {
            args: Prisma.UnidadeCountArgs<ExtArgs>
            result: $Utils.Optional<UnidadeCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type NivelCountOutputType
   */

  export type NivelCountOutputType = {
    Usuario: number
  }

  export type NivelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Usuario?: boolean | NivelCountOutputTypeCountUsuarioArgs
  }

  // Custom InputTypes
  /**
   * NivelCountOutputType without action
   */
  export type NivelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NivelCountOutputType
     */
    select?: NivelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NivelCountOutputType without action
   */
  export type NivelCountOutputTypeCountUsuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
  }


  /**
   * Count Type MenuCountOutputType
   */

  export type MenuCountOutputType = {
    Menuitem: number
    Usuario: number
  }

  export type MenuCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Menuitem?: boolean | MenuCountOutputTypeCountMenuitemArgs
    Usuario?: boolean | MenuCountOutputTypeCountUsuarioArgs
  }

  // Custom InputTypes
  /**
   * MenuCountOutputType without action
   */
  export type MenuCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuCountOutputType
     */
    select?: MenuCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MenuCountOutputType without action
   */
  export type MenuCountOutputTypeCountMenuitemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuitemWhereInput
  }

  /**
   * MenuCountOutputType without action
   */
  export type MenuCountOutputTypeCountUsuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
  }


  /**
   * Count Type ColunaCountOutputType
   */

  export type ColunaCountOutputType = {
    Usuariocoluna: number
  }

  export type ColunaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Usuariocoluna?: boolean | ColunaCountOutputTypeCountUsuariocolunaArgs
  }

  // Custom InputTypes
  /**
   * ColunaCountOutputType without action
   */
  export type ColunaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColunaCountOutputType
     */
    select?: ColunaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ColunaCountOutputType without action
   */
  export type ColunaCountOutputTypeCountUsuariocolunaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuariocolunaWhereInput
  }


  /**
   * Count Type UnidadeCountOutputType
   */

  export type UnidadeCountOutputType = {
    Usuario: number
  }

  export type UnidadeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Usuario?: boolean | UnidadeCountOutputTypeCountUsuarioArgs
  }

  // Custom InputTypes
  /**
   * UnidadeCountOutputType without action
   */
  export type UnidadeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnidadeCountOutputType
     */
    select?: UnidadeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UnidadeCountOutputType without action
   */
  export type UnidadeCountOutputTypeCountUsuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    idusuario: number | null
    idusercreateAt: number | null
    iduserupdatedAt: number | null
    iddepartamento: number | null
    idmenu: number | null
    idnivel: number | null
    idunidade: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    idusuario: number | null
    idusercreateAt: number | null
    iduserupdatedAt: number | null
    iddepartamento: number | null
    idmenu: number | null
    idnivel: number | null
    idunidade: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    idusuario: number | null
    nome: string | null
    email: string | null
    cpf: string | null
    dtnascimento: Date | null
    sexo: string | null
    idusercreateAt: number | null
    createdAt: Date | null
    iduserupdatedAt: number | null
    updatedAt: Date | null
    status: string | null
    senha: string | null
    trocasenha: boolean | null
    iddepartamento: number | null
    idmenu: number | null
    celular: string | null
    ramaln: string | null
    idnivel: number | null
    chatid: string | null
    ti: boolean | null
    contrato: boolean | null
    contratost: boolean | null
    idunidade: number | null
    vtodoscontratos: boolean | null
    vtodoshoraextra: boolean | null
    ccontratos: boolean | null
    choraextra: boolean | null
  }

  export type UsuarioMaxAggregateOutputType = {
    idusuario: number | null
    nome: string | null
    email: string | null
    cpf: string | null
    dtnascimento: Date | null
    sexo: string | null
    idusercreateAt: number | null
    createdAt: Date | null
    iduserupdatedAt: number | null
    updatedAt: Date | null
    status: string | null
    senha: string | null
    trocasenha: boolean | null
    iddepartamento: number | null
    idmenu: number | null
    celular: string | null
    ramaln: string | null
    idnivel: number | null
    chatid: string | null
    ti: boolean | null
    contrato: boolean | null
    contratost: boolean | null
    idunidade: number | null
    vtodoscontratos: boolean | null
    vtodoshoraextra: boolean | null
    ccontratos: boolean | null
    choraextra: boolean | null
  }

  export type UsuarioCountAggregateOutputType = {
    idusuario: number
    nome: number
    email: number
    cpf: number
    dtnascimento: number
    sexo: number
    idusercreateAt: number
    createdAt: number
    iduserupdatedAt: number
    updatedAt: number
    status: number
    senha: number
    trocasenha: number
    iddepartamento: number
    idmenu: number
    celular: number
    ramaln: number
    idnivel: number
    chatid: number
    ti: number
    contrato: number
    contratost: number
    idunidade: number
    vtodoscontratos: number
    vtodoshoraextra: number
    ccontratos: number
    choraextra: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    idusuario?: true
    idusercreateAt?: true
    iduserupdatedAt?: true
    iddepartamento?: true
    idmenu?: true
    idnivel?: true
    idunidade?: true
  }

  export type UsuarioSumAggregateInputType = {
    idusuario?: true
    idusercreateAt?: true
    iduserupdatedAt?: true
    iddepartamento?: true
    idmenu?: true
    idnivel?: true
    idunidade?: true
  }

  export type UsuarioMinAggregateInputType = {
    idusuario?: true
    nome?: true
    email?: true
    cpf?: true
    dtnascimento?: true
    sexo?: true
    idusercreateAt?: true
    createdAt?: true
    iduserupdatedAt?: true
    updatedAt?: true
    status?: true
    senha?: true
    trocasenha?: true
    iddepartamento?: true
    idmenu?: true
    celular?: true
    ramaln?: true
    idnivel?: true
    chatid?: true
    ti?: true
    contrato?: true
    contratost?: true
    idunidade?: true
    vtodoscontratos?: true
    vtodoshoraextra?: true
    ccontratos?: true
    choraextra?: true
  }

  export type UsuarioMaxAggregateInputType = {
    idusuario?: true
    nome?: true
    email?: true
    cpf?: true
    dtnascimento?: true
    sexo?: true
    idusercreateAt?: true
    createdAt?: true
    iduserupdatedAt?: true
    updatedAt?: true
    status?: true
    senha?: true
    trocasenha?: true
    iddepartamento?: true
    idmenu?: true
    celular?: true
    ramaln?: true
    idnivel?: true
    chatid?: true
    ti?: true
    contrato?: true
    contratost?: true
    idunidade?: true
    vtodoscontratos?: true
    vtodoshoraextra?: true
    ccontratos?: true
    choraextra?: true
  }

  export type UsuarioCountAggregateInputType = {
    idusuario?: true
    nome?: true
    email?: true
    cpf?: true
    dtnascimento?: true
    sexo?: true
    idusercreateAt?: true
    createdAt?: true
    iduserupdatedAt?: true
    updatedAt?: true
    status?: true
    senha?: true
    trocasenha?: true
    iddepartamento?: true
    idmenu?: true
    celular?: true
    ramaln?: true
    idnivel?: true
    chatid?: true
    ti?: true
    contrato?: true
    contratost?: true
    idunidade?: true
    vtodoscontratos?: true
    vtodoshoraextra?: true
    ccontratos?: true
    choraextra?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    idusuario: number
    nome: string
    email: string
    cpf: string | null
    dtnascimento: Date | null
    sexo: string | null
    idusercreateAt: number
    createdAt: Date
    iduserupdatedAt: number | null
    updatedAt: Date | null
    status: string
    senha: string
    trocasenha: boolean
    iddepartamento: number
    idmenu: number
    celular: string | null
    ramaln: string | null
    idnivel: number
    chatid: string | null
    ti: boolean
    contrato: boolean
    contratost: boolean
    idunidade: number
    vtodoscontratos: boolean
    vtodoshoraextra: boolean
    ccontratos: boolean
    choraextra: boolean
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idusuario?: boolean
    nome?: boolean
    email?: boolean
    cpf?: boolean
    dtnascimento?: boolean
    sexo?: boolean
    idusercreateAt?: boolean
    createdAt?: boolean
    iduserupdatedAt?: boolean
    updatedAt?: boolean
    status?: boolean
    senha?: boolean
    trocasenha?: boolean
    iddepartamento?: boolean
    idmenu?: boolean
    celular?: boolean
    ramaln?: boolean
    idnivel?: boolean
    chatid?: boolean
    ti?: boolean
    contrato?: boolean
    contratost?: boolean
    idunidade?: boolean
    vtodoscontratos?: boolean
    vtodoshoraextra?: boolean
    ccontratos?: boolean
    choraextra?: boolean
    nivel?: boolean | NivelDefaultArgs<ExtArgs>
    menu?: boolean | MenuDefaultArgs<ExtArgs>
    unidade?: boolean | UnidadeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>


  export type UsuarioSelectScalar = {
    idusuario?: boolean
    nome?: boolean
    email?: boolean
    cpf?: boolean
    dtnascimento?: boolean
    sexo?: boolean
    idusercreateAt?: boolean
    createdAt?: boolean
    iduserupdatedAt?: boolean
    updatedAt?: boolean
    status?: boolean
    senha?: boolean
    trocasenha?: boolean
    iddepartamento?: boolean
    idmenu?: boolean
    celular?: boolean
    ramaln?: boolean
    idnivel?: boolean
    chatid?: boolean
    ti?: boolean
    contrato?: boolean
    contratost?: boolean
    idunidade?: boolean
    vtodoscontratos?: boolean
    vtodoshoraextra?: boolean
    ccontratos?: boolean
    choraextra?: boolean
  }

  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    nivel?: boolean | NivelDefaultArgs<ExtArgs>
    menu?: boolean | MenuDefaultArgs<ExtArgs>
    unidade?: boolean | UnidadeDefaultArgs<ExtArgs>
  }

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      nivel: Prisma.$NivelPayload<ExtArgs>
      menu: Prisma.$MenuPayload<ExtArgs>
      unidade: Prisma.$UnidadePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      idusuario: number
      nome: string
      email: string
      cpf: string | null
      dtnascimento: Date | null
      sexo: string | null
      idusercreateAt: number
      createdAt: Date
      iduserupdatedAt: number | null
      updatedAt: Date | null
      status: string
      senha: string
      trocasenha: boolean
      iddepartamento: number
      idmenu: number
      celular: string | null
      ramaln: string | null
      idnivel: number
      chatid: string | null
      ti: boolean
      contrato: boolean
      contratost: boolean
      idunidade: number
      vtodoscontratos: boolean
      vtodoshoraextra: boolean
      ccontratos: boolean
      choraextra: boolean
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `idusuario`
     * const usuarioWithIdusuarioOnly = await prisma.usuario.findMany({ select: { idusuario: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    nivel<T extends NivelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NivelDefaultArgs<ExtArgs>>): Prisma__NivelClient<$Result.GetResult<Prisma.$NivelPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    menu<T extends MenuDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MenuDefaultArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    unidade<T extends UnidadeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UnidadeDefaultArgs<ExtArgs>>): Prisma__UnidadeClient<$Result.GetResult<Prisma.$UnidadePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuario model
   */ 
  interface UsuarioFieldRefs {
    readonly idusuario: FieldRef<"Usuario", 'Int'>
    readonly nome: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly cpf: FieldRef<"Usuario", 'String'>
    readonly dtnascimento: FieldRef<"Usuario", 'DateTime'>
    readonly sexo: FieldRef<"Usuario", 'String'>
    readonly idusercreateAt: FieldRef<"Usuario", 'Int'>
    readonly createdAt: FieldRef<"Usuario", 'DateTime'>
    readonly iduserupdatedAt: FieldRef<"Usuario", 'Int'>
    readonly updatedAt: FieldRef<"Usuario", 'DateTime'>
    readonly status: FieldRef<"Usuario", 'String'>
    readonly senha: FieldRef<"Usuario", 'String'>
    readonly trocasenha: FieldRef<"Usuario", 'Boolean'>
    readonly iddepartamento: FieldRef<"Usuario", 'Int'>
    readonly idmenu: FieldRef<"Usuario", 'Int'>
    readonly celular: FieldRef<"Usuario", 'String'>
    readonly ramaln: FieldRef<"Usuario", 'String'>
    readonly idnivel: FieldRef<"Usuario", 'Int'>
    readonly chatid: FieldRef<"Usuario", 'String'>
    readonly ti: FieldRef<"Usuario", 'Boolean'>
    readonly contrato: FieldRef<"Usuario", 'Boolean'>
    readonly contratost: FieldRef<"Usuario", 'Boolean'>
    readonly idunidade: FieldRef<"Usuario", 'Int'>
    readonly vtodoscontratos: FieldRef<"Usuario", 'Boolean'>
    readonly vtodoshoraextra: FieldRef<"Usuario", 'Boolean'>
    readonly ccontratos: FieldRef<"Usuario", 'Boolean'>
    readonly choraextra: FieldRef<"Usuario", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Nivel
   */

  export type AggregateNivel = {
    _count: NivelCountAggregateOutputType | null
    _avg: NivelAvgAggregateOutputType | null
    _sum: NivelSumAggregateOutputType | null
    _min: NivelMinAggregateOutputType | null
    _max: NivelMaxAggregateOutputType | null
  }

  export type NivelAvgAggregateOutputType = {
    idnivel: number | null
    idusercreateAt: number | null
    iduserupdatedAt: number | null
  }

  export type NivelSumAggregateOutputType = {
    idnivel: number | null
    idusercreateAt: number | null
    iduserupdatedAt: number | null
  }

  export type NivelMinAggregateOutputType = {
    idnivel: number | null
    nome: string | null
    idusercreateAt: number | null
    createdAt: Date | null
    iduserupdatedAt: number | null
    updatedAt: Date | null
    status: string | null
  }

  export type NivelMaxAggregateOutputType = {
    idnivel: number | null
    nome: string | null
    idusercreateAt: number | null
    createdAt: Date | null
    iduserupdatedAt: number | null
    updatedAt: Date | null
    status: string | null
  }

  export type NivelCountAggregateOutputType = {
    idnivel: number
    nome: number
    idusercreateAt: number
    createdAt: number
    iduserupdatedAt: number
    updatedAt: number
    status: number
    _all: number
  }


  export type NivelAvgAggregateInputType = {
    idnivel?: true
    idusercreateAt?: true
    iduserupdatedAt?: true
  }

  export type NivelSumAggregateInputType = {
    idnivel?: true
    idusercreateAt?: true
    iduserupdatedAt?: true
  }

  export type NivelMinAggregateInputType = {
    idnivel?: true
    nome?: true
    idusercreateAt?: true
    createdAt?: true
    iduserupdatedAt?: true
    updatedAt?: true
    status?: true
  }

  export type NivelMaxAggregateInputType = {
    idnivel?: true
    nome?: true
    idusercreateAt?: true
    createdAt?: true
    iduserupdatedAt?: true
    updatedAt?: true
    status?: true
  }

  export type NivelCountAggregateInputType = {
    idnivel?: true
    nome?: true
    idusercreateAt?: true
    createdAt?: true
    iduserupdatedAt?: true
    updatedAt?: true
    status?: true
    _all?: true
  }

  export type NivelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Nivel to aggregate.
     */
    where?: NivelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nivels to fetch.
     */
    orderBy?: NivelOrderByWithRelationInput | NivelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NivelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nivels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nivels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Nivels
    **/
    _count?: true | NivelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NivelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NivelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NivelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NivelMaxAggregateInputType
  }

  export type GetNivelAggregateType<T extends NivelAggregateArgs> = {
        [P in keyof T & keyof AggregateNivel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNivel[P]>
      : GetScalarType<T[P], AggregateNivel[P]>
  }




  export type NivelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NivelWhereInput
    orderBy?: NivelOrderByWithAggregationInput | NivelOrderByWithAggregationInput[]
    by: NivelScalarFieldEnum[] | NivelScalarFieldEnum
    having?: NivelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NivelCountAggregateInputType | true
    _avg?: NivelAvgAggregateInputType
    _sum?: NivelSumAggregateInputType
    _min?: NivelMinAggregateInputType
    _max?: NivelMaxAggregateInputType
  }

  export type NivelGroupByOutputType = {
    idnivel: number
    nome: string
    idusercreateAt: number
    createdAt: Date
    iduserupdatedAt: number | null
    updatedAt: Date | null
    status: string
    _count: NivelCountAggregateOutputType | null
    _avg: NivelAvgAggregateOutputType | null
    _sum: NivelSumAggregateOutputType | null
    _min: NivelMinAggregateOutputType | null
    _max: NivelMaxAggregateOutputType | null
  }

  type GetNivelGroupByPayload<T extends NivelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NivelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NivelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NivelGroupByOutputType[P]>
            : GetScalarType<T[P], NivelGroupByOutputType[P]>
        }
      >
    >


  export type NivelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idnivel?: boolean
    nome?: boolean
    idusercreateAt?: boolean
    createdAt?: boolean
    iduserupdatedAt?: boolean
    updatedAt?: boolean
    status?: boolean
    Usuario?: boolean | Nivel$UsuarioArgs<ExtArgs>
    _count?: boolean | NivelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nivel"]>


  export type NivelSelectScalar = {
    idnivel?: boolean
    nome?: boolean
    idusercreateAt?: boolean
    createdAt?: boolean
    iduserupdatedAt?: boolean
    updatedAt?: boolean
    status?: boolean
  }

  export type NivelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Usuario?: boolean | Nivel$UsuarioArgs<ExtArgs>
    _count?: boolean | NivelCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $NivelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Nivel"
    objects: {
      Usuario: Prisma.$UsuarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      idnivel: number
      nome: string
      idusercreateAt: number
      createdAt: Date
      iduserupdatedAt: number | null
      updatedAt: Date | null
      status: string
    }, ExtArgs["result"]["nivel"]>
    composites: {}
  }

  type NivelGetPayload<S extends boolean | null | undefined | NivelDefaultArgs> = $Result.GetResult<Prisma.$NivelPayload, S>

  type NivelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NivelFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NivelCountAggregateInputType | true
    }

  export interface NivelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Nivel'], meta: { name: 'Nivel' } }
    /**
     * Find zero or one Nivel that matches the filter.
     * @param {NivelFindUniqueArgs} args - Arguments to find a Nivel
     * @example
     * // Get one Nivel
     * const nivel = await prisma.nivel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NivelFindUniqueArgs>(args: SelectSubset<T, NivelFindUniqueArgs<ExtArgs>>): Prisma__NivelClient<$Result.GetResult<Prisma.$NivelPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Nivel that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {NivelFindUniqueOrThrowArgs} args - Arguments to find a Nivel
     * @example
     * // Get one Nivel
     * const nivel = await prisma.nivel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NivelFindUniqueOrThrowArgs>(args: SelectSubset<T, NivelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NivelClient<$Result.GetResult<Prisma.$NivelPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Nivel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NivelFindFirstArgs} args - Arguments to find a Nivel
     * @example
     * // Get one Nivel
     * const nivel = await prisma.nivel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NivelFindFirstArgs>(args?: SelectSubset<T, NivelFindFirstArgs<ExtArgs>>): Prisma__NivelClient<$Result.GetResult<Prisma.$NivelPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Nivel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NivelFindFirstOrThrowArgs} args - Arguments to find a Nivel
     * @example
     * // Get one Nivel
     * const nivel = await prisma.nivel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NivelFindFirstOrThrowArgs>(args?: SelectSubset<T, NivelFindFirstOrThrowArgs<ExtArgs>>): Prisma__NivelClient<$Result.GetResult<Prisma.$NivelPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Nivels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NivelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Nivels
     * const nivels = await prisma.nivel.findMany()
     * 
     * // Get first 10 Nivels
     * const nivels = await prisma.nivel.findMany({ take: 10 })
     * 
     * // Only select the `idnivel`
     * const nivelWithIdnivelOnly = await prisma.nivel.findMany({ select: { idnivel: true } })
     * 
     */
    findMany<T extends NivelFindManyArgs>(args?: SelectSubset<T, NivelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NivelPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Nivel.
     * @param {NivelCreateArgs} args - Arguments to create a Nivel.
     * @example
     * // Create one Nivel
     * const Nivel = await prisma.nivel.create({
     *   data: {
     *     // ... data to create a Nivel
     *   }
     * })
     * 
     */
    create<T extends NivelCreateArgs>(args: SelectSubset<T, NivelCreateArgs<ExtArgs>>): Prisma__NivelClient<$Result.GetResult<Prisma.$NivelPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Nivels.
     * @param {NivelCreateManyArgs} args - Arguments to create many Nivels.
     * @example
     * // Create many Nivels
     * const nivel = await prisma.nivel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NivelCreateManyArgs>(args?: SelectSubset<T, NivelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Nivel.
     * @param {NivelDeleteArgs} args - Arguments to delete one Nivel.
     * @example
     * // Delete one Nivel
     * const Nivel = await prisma.nivel.delete({
     *   where: {
     *     // ... filter to delete one Nivel
     *   }
     * })
     * 
     */
    delete<T extends NivelDeleteArgs>(args: SelectSubset<T, NivelDeleteArgs<ExtArgs>>): Prisma__NivelClient<$Result.GetResult<Prisma.$NivelPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Nivel.
     * @param {NivelUpdateArgs} args - Arguments to update one Nivel.
     * @example
     * // Update one Nivel
     * const nivel = await prisma.nivel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NivelUpdateArgs>(args: SelectSubset<T, NivelUpdateArgs<ExtArgs>>): Prisma__NivelClient<$Result.GetResult<Prisma.$NivelPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Nivels.
     * @param {NivelDeleteManyArgs} args - Arguments to filter Nivels to delete.
     * @example
     * // Delete a few Nivels
     * const { count } = await prisma.nivel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NivelDeleteManyArgs>(args?: SelectSubset<T, NivelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Nivels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NivelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Nivels
     * const nivel = await prisma.nivel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NivelUpdateManyArgs>(args: SelectSubset<T, NivelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Nivel.
     * @param {NivelUpsertArgs} args - Arguments to update or create a Nivel.
     * @example
     * // Update or create a Nivel
     * const nivel = await prisma.nivel.upsert({
     *   create: {
     *     // ... data to create a Nivel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Nivel we want to update
     *   }
     * })
     */
    upsert<T extends NivelUpsertArgs>(args: SelectSubset<T, NivelUpsertArgs<ExtArgs>>): Prisma__NivelClient<$Result.GetResult<Prisma.$NivelPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Nivels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NivelCountArgs} args - Arguments to filter Nivels to count.
     * @example
     * // Count the number of Nivels
     * const count = await prisma.nivel.count({
     *   where: {
     *     // ... the filter for the Nivels we want to count
     *   }
     * })
    **/
    count<T extends NivelCountArgs>(
      args?: Subset<T, NivelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NivelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Nivel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NivelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NivelAggregateArgs>(args: Subset<T, NivelAggregateArgs>): Prisma.PrismaPromise<GetNivelAggregateType<T>>

    /**
     * Group by Nivel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NivelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NivelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NivelGroupByArgs['orderBy'] }
        : { orderBy?: NivelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NivelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNivelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Nivel model
   */
  readonly fields: NivelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Nivel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NivelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Usuario<T extends Nivel$UsuarioArgs<ExtArgs> = {}>(args?: Subset<T, Nivel$UsuarioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Nivel model
   */ 
  interface NivelFieldRefs {
    readonly idnivel: FieldRef<"Nivel", 'Int'>
    readonly nome: FieldRef<"Nivel", 'String'>
    readonly idusercreateAt: FieldRef<"Nivel", 'Int'>
    readonly createdAt: FieldRef<"Nivel", 'DateTime'>
    readonly iduserupdatedAt: FieldRef<"Nivel", 'Int'>
    readonly updatedAt: FieldRef<"Nivel", 'DateTime'>
    readonly status: FieldRef<"Nivel", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Nivel findUnique
   */
  export type NivelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nivel
     */
    select?: NivelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NivelInclude<ExtArgs> | null
    /**
     * Filter, which Nivel to fetch.
     */
    where: NivelWhereUniqueInput
  }

  /**
   * Nivel findUniqueOrThrow
   */
  export type NivelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nivel
     */
    select?: NivelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NivelInclude<ExtArgs> | null
    /**
     * Filter, which Nivel to fetch.
     */
    where: NivelWhereUniqueInput
  }

  /**
   * Nivel findFirst
   */
  export type NivelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nivel
     */
    select?: NivelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NivelInclude<ExtArgs> | null
    /**
     * Filter, which Nivel to fetch.
     */
    where?: NivelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nivels to fetch.
     */
    orderBy?: NivelOrderByWithRelationInput | NivelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Nivels.
     */
    cursor?: NivelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nivels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nivels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Nivels.
     */
    distinct?: NivelScalarFieldEnum | NivelScalarFieldEnum[]
  }

  /**
   * Nivel findFirstOrThrow
   */
  export type NivelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nivel
     */
    select?: NivelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NivelInclude<ExtArgs> | null
    /**
     * Filter, which Nivel to fetch.
     */
    where?: NivelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nivels to fetch.
     */
    orderBy?: NivelOrderByWithRelationInput | NivelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Nivels.
     */
    cursor?: NivelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nivels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nivels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Nivels.
     */
    distinct?: NivelScalarFieldEnum | NivelScalarFieldEnum[]
  }

  /**
   * Nivel findMany
   */
  export type NivelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nivel
     */
    select?: NivelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NivelInclude<ExtArgs> | null
    /**
     * Filter, which Nivels to fetch.
     */
    where?: NivelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nivels to fetch.
     */
    orderBy?: NivelOrderByWithRelationInput | NivelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Nivels.
     */
    cursor?: NivelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nivels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nivels.
     */
    skip?: number
    distinct?: NivelScalarFieldEnum | NivelScalarFieldEnum[]
  }

  /**
   * Nivel create
   */
  export type NivelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nivel
     */
    select?: NivelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NivelInclude<ExtArgs> | null
    /**
     * The data needed to create a Nivel.
     */
    data: XOR<NivelCreateInput, NivelUncheckedCreateInput>
  }

  /**
   * Nivel createMany
   */
  export type NivelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Nivels.
     */
    data: NivelCreateManyInput | NivelCreateManyInput[]
  }

  /**
   * Nivel update
   */
  export type NivelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nivel
     */
    select?: NivelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NivelInclude<ExtArgs> | null
    /**
     * The data needed to update a Nivel.
     */
    data: XOR<NivelUpdateInput, NivelUncheckedUpdateInput>
    /**
     * Choose, which Nivel to update.
     */
    where: NivelWhereUniqueInput
  }

  /**
   * Nivel updateMany
   */
  export type NivelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Nivels.
     */
    data: XOR<NivelUpdateManyMutationInput, NivelUncheckedUpdateManyInput>
    /**
     * Filter which Nivels to update
     */
    where?: NivelWhereInput
  }

  /**
   * Nivel upsert
   */
  export type NivelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nivel
     */
    select?: NivelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NivelInclude<ExtArgs> | null
    /**
     * The filter to search for the Nivel to update in case it exists.
     */
    where: NivelWhereUniqueInput
    /**
     * In case the Nivel found by the `where` argument doesn't exist, create a new Nivel with this data.
     */
    create: XOR<NivelCreateInput, NivelUncheckedCreateInput>
    /**
     * In case the Nivel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NivelUpdateInput, NivelUncheckedUpdateInput>
  }

  /**
   * Nivel delete
   */
  export type NivelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nivel
     */
    select?: NivelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NivelInclude<ExtArgs> | null
    /**
     * Filter which Nivel to delete.
     */
    where: NivelWhereUniqueInput
  }

  /**
   * Nivel deleteMany
   */
  export type NivelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Nivels to delete
     */
    where?: NivelWhereInput
  }

  /**
   * Nivel.Usuario
   */
  export type Nivel$UsuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    cursor?: UsuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Nivel without action
   */
  export type NivelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Nivel
     */
    select?: NivelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NivelInclude<ExtArgs> | null
  }


  /**
   * Model Login
   */

  export type AggregateLogin = {
    _count: LoginCountAggregateOutputType | null
    _avg: LoginAvgAggregateOutputType | null
    _sum: LoginSumAggregateOutputType | null
    _min: LoginMinAggregateOutputType | null
    _max: LoginMaxAggregateOutputType | null
  }

  export type LoginAvgAggregateOutputType = {
    idlogin: number | null
    respsend: number | null
  }

  export type LoginSumAggregateOutputType = {
    idlogin: number | null
    respsend: number | null
  }

  export type LoginMinAggregateOutputType = {
    idlogin: number | null
    email: string | null
    status: string | null
    respsend: number | null
    iporigem: string | null
  }

  export type LoginMaxAggregateOutputType = {
    idlogin: number | null
    email: string | null
    status: string | null
    respsend: number | null
    iporigem: string | null
  }

  export type LoginCountAggregateOutputType = {
    idlogin: number
    email: number
    createdAt: number
    status: number
    respsend: number
    iporigem: number
    _all: number
  }


  export type LoginAvgAggregateInputType = {
    idlogin?: true
    respsend?: true
  }

  export type LoginSumAggregateInputType = {
    idlogin?: true
    respsend?: true
  }

  export type LoginMinAggregateInputType = {
    idlogin?: true
    email?: true
    status?: true
    respsend?: true
    iporigem?: true
  }

  export type LoginMaxAggregateInputType = {
    idlogin?: true
    email?: true
    status?: true
    respsend?: true
    iporigem?: true
  }

  export type LoginCountAggregateInputType = {
    idlogin?: true
    email?: true
    createdAt?: true
    status?: true
    respsend?: true
    iporigem?: true
    _all?: true
  }

  export type LoginAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Login to aggregate.
     */
    where?: LoginWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logins to fetch.
     */
    orderBy?: LoginOrderByWithRelationInput | LoginOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LoginWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Logins
    **/
    _count?: true | LoginCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LoginAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LoginSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LoginMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LoginMaxAggregateInputType
  }

  export type GetLoginAggregateType<T extends LoginAggregateArgs> = {
        [P in keyof T & keyof AggregateLogin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLogin[P]>
      : GetScalarType<T[P], AggregateLogin[P]>
  }




  export type LoginGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoginWhereInput
    orderBy?: LoginOrderByWithAggregationInput | LoginOrderByWithAggregationInput[]
    by: LoginScalarFieldEnum[] | LoginScalarFieldEnum
    having?: LoginScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LoginCountAggregateInputType | true
    _avg?: LoginAvgAggregateInputType
    _sum?: LoginSumAggregateInputType
    _min?: LoginMinAggregateInputType
    _max?: LoginMaxAggregateInputType
  }

  export type LoginGroupByOutputType = {
    idlogin: number
    email: string
    createdAt: Date
    status: string
    respsend: number
    iporigem: string
    _count: LoginCountAggregateOutputType | null
    _avg: LoginAvgAggregateOutputType | null
    _sum: LoginSumAggregateOutputType | null
    _min: LoginMinAggregateOutputType | null
    _max: LoginMaxAggregateOutputType | null
  }

  type GetLoginGroupByPayload<T extends LoginGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LoginGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LoginGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LoginGroupByOutputType[P]>
            : GetScalarType<T[P], LoginGroupByOutputType[P]>
        }
      >
    >


  export type LoginSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idlogin?: boolean
    email?: boolean
    status?: boolean
    respsend?: boolean
    iporigem?: boolean
  }, ExtArgs["result"]["login"]>


  export type LoginSelectScalar = {
    idlogin?: boolean
    email?: boolean
    status?: boolean
    respsend?: boolean
    iporigem?: boolean
  }


  export type $LoginPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Login"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      idlogin: number
      email: string
      status: string
      respsend: number
      iporigem: string
    }, ExtArgs["result"]["login"]>
    composites: {}
  }

  type LoginGetPayload<S extends boolean | null | undefined | LoginDefaultArgs> = $Result.GetResult<Prisma.$LoginPayload, S>

  type LoginCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LoginFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LoginCountAggregateInputType | true
    }

  export interface LoginDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Login'], meta: { name: 'Login' } }
    /**
     * Find zero or one Login that matches the filter.
     * @param {LoginFindUniqueArgs} args - Arguments to find a Login
     * @example
     * // Get one Login
     * const login = await prisma.login.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LoginFindUniqueArgs>(args: SelectSubset<T, LoginFindUniqueArgs<ExtArgs>>): Prisma__LoginClient<$Result.GetResult<Prisma.$LoginPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Login that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LoginFindUniqueOrThrowArgs} args - Arguments to find a Login
     * @example
     * // Get one Login
     * const login = await prisma.login.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LoginFindUniqueOrThrowArgs>(args: SelectSubset<T, LoginFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LoginClient<$Result.GetResult<Prisma.$LoginPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Login that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginFindFirstArgs} args - Arguments to find a Login
     * @example
     * // Get one Login
     * const login = await prisma.login.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LoginFindFirstArgs>(args?: SelectSubset<T, LoginFindFirstArgs<ExtArgs>>): Prisma__LoginClient<$Result.GetResult<Prisma.$LoginPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Login that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginFindFirstOrThrowArgs} args - Arguments to find a Login
     * @example
     * // Get one Login
     * const login = await prisma.login.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LoginFindFirstOrThrowArgs>(args?: SelectSubset<T, LoginFindFirstOrThrowArgs<ExtArgs>>): Prisma__LoginClient<$Result.GetResult<Prisma.$LoginPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Logins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Logins
     * const logins = await prisma.login.findMany()
     * 
     * // Get first 10 Logins
     * const logins = await prisma.login.findMany({ take: 10 })
     * 
     * // Only select the `idlogin`
     * const loginWithIdloginOnly = await prisma.login.findMany({ select: { idlogin: true } })
     * 
     */
    findMany<T extends LoginFindManyArgs>(args?: SelectSubset<T, LoginFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoginPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Login.
     * @param {LoginCreateArgs} args - Arguments to create a Login.
     * @example
     * // Create one Login
     * const Login = await prisma.login.create({
     *   data: {
     *     // ... data to create a Login
     *   }
     * })
     * 
     */
    create<T extends LoginCreateArgs>(args: SelectSubset<T, LoginCreateArgs<ExtArgs>>): Prisma__LoginClient<$Result.GetResult<Prisma.$LoginPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Logins.
     * @param {LoginCreateManyArgs} args - Arguments to create many Logins.
     * @example
     * // Create many Logins
     * const login = await prisma.login.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LoginCreateManyArgs>(args?: SelectSubset<T, LoginCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Login.
     * @param {LoginDeleteArgs} args - Arguments to delete one Login.
     * @example
     * // Delete one Login
     * const Login = await prisma.login.delete({
     *   where: {
     *     // ... filter to delete one Login
     *   }
     * })
     * 
     */
    delete<T extends LoginDeleteArgs>(args: SelectSubset<T, LoginDeleteArgs<ExtArgs>>): Prisma__LoginClient<$Result.GetResult<Prisma.$LoginPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Login.
     * @param {LoginUpdateArgs} args - Arguments to update one Login.
     * @example
     * // Update one Login
     * const login = await prisma.login.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LoginUpdateArgs>(args: SelectSubset<T, LoginUpdateArgs<ExtArgs>>): Prisma__LoginClient<$Result.GetResult<Prisma.$LoginPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Logins.
     * @param {LoginDeleteManyArgs} args - Arguments to filter Logins to delete.
     * @example
     * // Delete a few Logins
     * const { count } = await prisma.login.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LoginDeleteManyArgs>(args?: SelectSubset<T, LoginDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Logins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Logins
     * const login = await prisma.login.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LoginUpdateManyArgs>(args: SelectSubset<T, LoginUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Login.
     * @param {LoginUpsertArgs} args - Arguments to update or create a Login.
     * @example
     * // Update or create a Login
     * const login = await prisma.login.upsert({
     *   create: {
     *     // ... data to create a Login
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Login we want to update
     *   }
     * })
     */
    upsert<T extends LoginUpsertArgs>(args: SelectSubset<T, LoginUpsertArgs<ExtArgs>>): Prisma__LoginClient<$Result.GetResult<Prisma.$LoginPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Logins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginCountArgs} args - Arguments to filter Logins to count.
     * @example
     * // Count the number of Logins
     * const count = await prisma.login.count({
     *   where: {
     *     // ... the filter for the Logins we want to count
     *   }
     * })
    **/
    count<T extends LoginCountArgs>(
      args?: Subset<T, LoginCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LoginCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Login.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LoginAggregateArgs>(args: Subset<T, LoginAggregateArgs>): Prisma.PrismaPromise<GetLoginAggregateType<T>>

    /**
     * Group by Login.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoginGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LoginGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LoginGroupByArgs['orderBy'] }
        : { orderBy?: LoginGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LoginGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLoginGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Login model
   */
  readonly fields: LoginFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Login.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LoginClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Login model
   */ 
  interface LoginFieldRefs {
    readonly idlogin: FieldRef<"Login", 'Int'>
    readonly email: FieldRef<"Login", 'String'>
    readonly status: FieldRef<"Login", 'String'>
    readonly respsend: FieldRef<"Login", 'Int'>
    readonly iporigem: FieldRef<"Login", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Login findUnique
   */
  export type LoginFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Login
     */
    select?: LoginSelect<ExtArgs> | null
    /**
     * Filter, which Login to fetch.
     */
    where: LoginWhereUniqueInput
  }

  /**
   * Login findUniqueOrThrow
   */
  export type LoginFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Login
     */
    select?: LoginSelect<ExtArgs> | null
    /**
     * Filter, which Login to fetch.
     */
    where: LoginWhereUniqueInput
  }

  /**
   * Login findFirst
   */
  export type LoginFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Login
     */
    select?: LoginSelect<ExtArgs> | null
    /**
     * Filter, which Login to fetch.
     */
    where?: LoginWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logins to fetch.
     */
    orderBy?: LoginOrderByWithRelationInput | LoginOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Logins.
     */
    cursor?: LoginWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Logins.
     */
    distinct?: LoginScalarFieldEnum | LoginScalarFieldEnum[]
  }

  /**
   * Login findFirstOrThrow
   */
  export type LoginFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Login
     */
    select?: LoginSelect<ExtArgs> | null
    /**
     * Filter, which Login to fetch.
     */
    where?: LoginWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logins to fetch.
     */
    orderBy?: LoginOrderByWithRelationInput | LoginOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Logins.
     */
    cursor?: LoginWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Logins.
     */
    distinct?: LoginScalarFieldEnum | LoginScalarFieldEnum[]
  }

  /**
   * Login findMany
   */
  export type LoginFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Login
     */
    select?: LoginSelect<ExtArgs> | null
    /**
     * Filter, which Logins to fetch.
     */
    where?: LoginWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logins to fetch.
     */
    orderBy?: LoginOrderByWithRelationInput | LoginOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Logins.
     */
    cursor?: LoginWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logins.
     */
    skip?: number
    distinct?: LoginScalarFieldEnum | LoginScalarFieldEnum[]
  }

  /**
   * Login create
   */
  export type LoginCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Login
     */
    select?: LoginSelect<ExtArgs> | null
    /**
     * The data needed to create a Login.
     */
    data: XOR<LoginCreateInput, LoginUncheckedCreateInput>
  }

  /**
   * Login createMany
   */
  export type LoginCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Logins.
     */
    data: LoginCreateManyInput | LoginCreateManyInput[]
  }

  /**
   * Login update
   */
  export type LoginUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Login
     */
    select?: LoginSelect<ExtArgs> | null
    /**
     * The data needed to update a Login.
     */
    data: XOR<LoginUpdateInput, LoginUncheckedUpdateInput>
    /**
     * Choose, which Login to update.
     */
    where: LoginWhereUniqueInput
  }

  /**
   * Login updateMany
   */
  export type LoginUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Logins.
     */
    data: XOR<LoginUpdateManyMutationInput, LoginUncheckedUpdateManyInput>
    /**
     * Filter which Logins to update
     */
    where?: LoginWhereInput
  }

  /**
   * Login upsert
   */
  export type LoginUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Login
     */
    select?: LoginSelect<ExtArgs> | null
    /**
     * The filter to search for the Login to update in case it exists.
     */
    where: LoginWhereUniqueInput
    /**
     * In case the Login found by the `where` argument doesn't exist, create a new Login with this data.
     */
    create: XOR<LoginCreateInput, LoginUncheckedCreateInput>
    /**
     * In case the Login was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LoginUpdateInput, LoginUncheckedUpdateInput>
  }

  /**
   * Login delete
   */
  export type LoginDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Login
     */
    select?: LoginSelect<ExtArgs> | null
    /**
     * Filter which Login to delete.
     */
    where: LoginWhereUniqueInput
  }

  /**
   * Login deleteMany
   */
  export type LoginDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Logins to delete
     */
    where?: LoginWhereInput
  }

  /**
   * Login without action
   */
  export type LoginDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Login
     */
    select?: LoginSelect<ExtArgs> | null
  }


  /**
   * Model Menu
   */

  export type AggregateMenu = {
    _count: MenuCountAggregateOutputType | null
    _avg: MenuAvgAggregateOutputType | null
    _sum: MenuSumAggregateOutputType | null
    _min: MenuMinAggregateOutputType | null
    _max: MenuMaxAggregateOutputType | null
  }

  export type MenuAvgAggregateOutputType = {
    idmenu: number | null
    idusercreateAt: number | null
    iduserupdatedAt: number | null
  }

  export type MenuSumAggregateOutputType = {
    idmenu: number | null
    idusercreateAt: number | null
    iduserupdatedAt: number | null
  }

  export type MenuMinAggregateOutputType = {
    idmenu: number | null
    idusercreateAt: number | null
    createdAt: Date | null
    iduserupdatedAt: number | null
    updatedAt: Date | null
    status: string | null
    nome: string | null
  }

  export type MenuMaxAggregateOutputType = {
    idmenu: number | null
    idusercreateAt: number | null
    createdAt: Date | null
    iduserupdatedAt: number | null
    updatedAt: Date | null
    status: string | null
    nome: string | null
  }

  export type MenuCountAggregateOutputType = {
    idmenu: number
    idusercreateAt: number
    createdAt: number
    iduserupdatedAt: number
    updatedAt: number
    status: number
    nome: number
    _all: number
  }


  export type MenuAvgAggregateInputType = {
    idmenu?: true
    idusercreateAt?: true
    iduserupdatedAt?: true
  }

  export type MenuSumAggregateInputType = {
    idmenu?: true
    idusercreateAt?: true
    iduserupdatedAt?: true
  }

  export type MenuMinAggregateInputType = {
    idmenu?: true
    idusercreateAt?: true
    createdAt?: true
    iduserupdatedAt?: true
    updatedAt?: true
    status?: true
    nome?: true
  }

  export type MenuMaxAggregateInputType = {
    idmenu?: true
    idusercreateAt?: true
    createdAt?: true
    iduserupdatedAt?: true
    updatedAt?: true
    status?: true
    nome?: true
  }

  export type MenuCountAggregateInputType = {
    idmenu?: true
    idusercreateAt?: true
    createdAt?: true
    iduserupdatedAt?: true
    updatedAt?: true
    status?: true
    nome?: true
    _all?: true
  }

  export type MenuAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Menu to aggregate.
     */
    where?: MenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Menus to fetch.
     */
    orderBy?: MenuOrderByWithRelationInput | MenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Menus
    **/
    _count?: true | MenuCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MenuAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MenuSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MenuMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MenuMaxAggregateInputType
  }

  export type GetMenuAggregateType<T extends MenuAggregateArgs> = {
        [P in keyof T & keyof AggregateMenu]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMenu[P]>
      : GetScalarType<T[P], AggregateMenu[P]>
  }




  export type MenuGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuWhereInput
    orderBy?: MenuOrderByWithAggregationInput | MenuOrderByWithAggregationInput[]
    by: MenuScalarFieldEnum[] | MenuScalarFieldEnum
    having?: MenuScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MenuCountAggregateInputType | true
    _avg?: MenuAvgAggregateInputType
    _sum?: MenuSumAggregateInputType
    _min?: MenuMinAggregateInputType
    _max?: MenuMaxAggregateInputType
  }

  export type MenuGroupByOutputType = {
    idmenu: number
    idusercreateAt: number
    createdAt: Date
    iduserupdatedAt: number | null
    updatedAt: Date | null
    status: string
    nome: string
    _count: MenuCountAggregateOutputType | null
    _avg: MenuAvgAggregateOutputType | null
    _sum: MenuSumAggregateOutputType | null
    _min: MenuMinAggregateOutputType | null
    _max: MenuMaxAggregateOutputType | null
  }

  type GetMenuGroupByPayload<T extends MenuGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MenuGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MenuGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MenuGroupByOutputType[P]>
            : GetScalarType<T[P], MenuGroupByOutputType[P]>
        }
      >
    >


  export type MenuSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idmenu?: boolean
    idusercreateAt?: boolean
    createdAt?: boolean
    iduserupdatedAt?: boolean
    updatedAt?: boolean
    status?: boolean
    nome?: boolean
    Menuitem?: boolean | Menu$MenuitemArgs<ExtArgs>
    Usuario?: boolean | Menu$UsuarioArgs<ExtArgs>
    _count?: boolean | MenuCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menu"]>


  export type MenuSelectScalar = {
    idmenu?: boolean
    idusercreateAt?: boolean
    createdAt?: boolean
    iduserupdatedAt?: boolean
    updatedAt?: boolean
    status?: boolean
    nome?: boolean
  }

  export type MenuInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Menuitem?: boolean | Menu$MenuitemArgs<ExtArgs>
    Usuario?: boolean | Menu$UsuarioArgs<ExtArgs>
    _count?: boolean | MenuCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $MenuPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Menu"
    objects: {
      Menuitem: Prisma.$MenuitemPayload<ExtArgs>[]
      Usuario: Prisma.$UsuarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      idmenu: number
      idusercreateAt: number
      createdAt: Date
      iduserupdatedAt: number | null
      updatedAt: Date | null
      status: string
      nome: string
    }, ExtArgs["result"]["menu"]>
    composites: {}
  }

  type MenuGetPayload<S extends boolean | null | undefined | MenuDefaultArgs> = $Result.GetResult<Prisma.$MenuPayload, S>

  type MenuCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MenuFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MenuCountAggregateInputType | true
    }

  export interface MenuDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Menu'], meta: { name: 'Menu' } }
    /**
     * Find zero or one Menu that matches the filter.
     * @param {MenuFindUniqueArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MenuFindUniqueArgs>(args: SelectSubset<T, MenuFindUniqueArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Menu that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MenuFindUniqueOrThrowArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MenuFindUniqueOrThrowArgs>(args: SelectSubset<T, MenuFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Menu that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuFindFirstArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MenuFindFirstArgs>(args?: SelectSubset<T, MenuFindFirstArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Menu that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuFindFirstOrThrowArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MenuFindFirstOrThrowArgs>(args?: SelectSubset<T, MenuFindFirstOrThrowArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Menus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Menus
     * const menus = await prisma.menu.findMany()
     * 
     * // Get first 10 Menus
     * const menus = await prisma.menu.findMany({ take: 10 })
     * 
     * // Only select the `idmenu`
     * const menuWithIdmenuOnly = await prisma.menu.findMany({ select: { idmenu: true } })
     * 
     */
    findMany<T extends MenuFindManyArgs>(args?: SelectSubset<T, MenuFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Menu.
     * @param {MenuCreateArgs} args - Arguments to create a Menu.
     * @example
     * // Create one Menu
     * const Menu = await prisma.menu.create({
     *   data: {
     *     // ... data to create a Menu
     *   }
     * })
     * 
     */
    create<T extends MenuCreateArgs>(args: SelectSubset<T, MenuCreateArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Menus.
     * @param {MenuCreateManyArgs} args - Arguments to create many Menus.
     * @example
     * // Create many Menus
     * const menu = await prisma.menu.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MenuCreateManyArgs>(args?: SelectSubset<T, MenuCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Menu.
     * @param {MenuDeleteArgs} args - Arguments to delete one Menu.
     * @example
     * // Delete one Menu
     * const Menu = await prisma.menu.delete({
     *   where: {
     *     // ... filter to delete one Menu
     *   }
     * })
     * 
     */
    delete<T extends MenuDeleteArgs>(args: SelectSubset<T, MenuDeleteArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Menu.
     * @param {MenuUpdateArgs} args - Arguments to update one Menu.
     * @example
     * // Update one Menu
     * const menu = await prisma.menu.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MenuUpdateArgs>(args: SelectSubset<T, MenuUpdateArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Menus.
     * @param {MenuDeleteManyArgs} args - Arguments to filter Menus to delete.
     * @example
     * // Delete a few Menus
     * const { count } = await prisma.menu.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MenuDeleteManyArgs>(args?: SelectSubset<T, MenuDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Menus
     * const menu = await prisma.menu.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MenuUpdateManyArgs>(args: SelectSubset<T, MenuUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Menu.
     * @param {MenuUpsertArgs} args - Arguments to update or create a Menu.
     * @example
     * // Update or create a Menu
     * const menu = await prisma.menu.upsert({
     *   create: {
     *     // ... data to create a Menu
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Menu we want to update
     *   }
     * })
     */
    upsert<T extends MenuUpsertArgs>(args: SelectSubset<T, MenuUpsertArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuCountArgs} args - Arguments to filter Menus to count.
     * @example
     * // Count the number of Menus
     * const count = await prisma.menu.count({
     *   where: {
     *     // ... the filter for the Menus we want to count
     *   }
     * })
    **/
    count<T extends MenuCountArgs>(
      args?: Subset<T, MenuCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MenuCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Menu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MenuAggregateArgs>(args: Subset<T, MenuAggregateArgs>): Prisma.PrismaPromise<GetMenuAggregateType<T>>

    /**
     * Group by Menu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MenuGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MenuGroupByArgs['orderBy'] }
        : { orderBy?: MenuGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MenuGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMenuGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Menu model
   */
  readonly fields: MenuFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Menu.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MenuClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Menuitem<T extends Menu$MenuitemArgs<ExtArgs> = {}>(args?: Subset<T, Menu$MenuitemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuitemPayload<ExtArgs>, T, "findMany"> | Null>
    Usuario<T extends Menu$UsuarioArgs<ExtArgs> = {}>(args?: Subset<T, Menu$UsuarioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Menu model
   */ 
  interface MenuFieldRefs {
    readonly idmenu: FieldRef<"Menu", 'Int'>
    readonly idusercreateAt: FieldRef<"Menu", 'Int'>
    readonly createdAt: FieldRef<"Menu", 'DateTime'>
    readonly iduserupdatedAt: FieldRef<"Menu", 'Int'>
    readonly updatedAt: FieldRef<"Menu", 'DateTime'>
    readonly status: FieldRef<"Menu", 'String'>
    readonly nome: FieldRef<"Menu", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Menu findUnique
   */
  export type MenuFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter, which Menu to fetch.
     */
    where: MenuWhereUniqueInput
  }

  /**
   * Menu findUniqueOrThrow
   */
  export type MenuFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter, which Menu to fetch.
     */
    where: MenuWhereUniqueInput
  }

  /**
   * Menu findFirst
   */
  export type MenuFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter, which Menu to fetch.
     */
    where?: MenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Menus to fetch.
     */
    orderBy?: MenuOrderByWithRelationInput | MenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Menus.
     */
    cursor?: MenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Menus.
     */
    distinct?: MenuScalarFieldEnum | MenuScalarFieldEnum[]
  }

  /**
   * Menu findFirstOrThrow
   */
  export type MenuFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter, which Menu to fetch.
     */
    where?: MenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Menus to fetch.
     */
    orderBy?: MenuOrderByWithRelationInput | MenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Menus.
     */
    cursor?: MenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Menus.
     */
    distinct?: MenuScalarFieldEnum | MenuScalarFieldEnum[]
  }

  /**
   * Menu findMany
   */
  export type MenuFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter, which Menus to fetch.
     */
    where?: MenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Menus to fetch.
     */
    orderBy?: MenuOrderByWithRelationInput | MenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Menus.
     */
    cursor?: MenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Menus.
     */
    skip?: number
    distinct?: MenuScalarFieldEnum | MenuScalarFieldEnum[]
  }

  /**
   * Menu create
   */
  export type MenuCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * The data needed to create a Menu.
     */
    data: XOR<MenuCreateInput, MenuUncheckedCreateInput>
  }

  /**
   * Menu createMany
   */
  export type MenuCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Menus.
     */
    data: MenuCreateManyInput | MenuCreateManyInput[]
  }

  /**
   * Menu update
   */
  export type MenuUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * The data needed to update a Menu.
     */
    data: XOR<MenuUpdateInput, MenuUncheckedUpdateInput>
    /**
     * Choose, which Menu to update.
     */
    where: MenuWhereUniqueInput
  }

  /**
   * Menu updateMany
   */
  export type MenuUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Menus.
     */
    data: XOR<MenuUpdateManyMutationInput, MenuUncheckedUpdateManyInput>
    /**
     * Filter which Menus to update
     */
    where?: MenuWhereInput
  }

  /**
   * Menu upsert
   */
  export type MenuUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * The filter to search for the Menu to update in case it exists.
     */
    where: MenuWhereUniqueInput
    /**
     * In case the Menu found by the `where` argument doesn't exist, create a new Menu with this data.
     */
    create: XOR<MenuCreateInput, MenuUncheckedCreateInput>
    /**
     * In case the Menu was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MenuUpdateInput, MenuUncheckedUpdateInput>
  }

  /**
   * Menu delete
   */
  export type MenuDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter which Menu to delete.
     */
    where: MenuWhereUniqueInput
  }

  /**
   * Menu deleteMany
   */
  export type MenuDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Menus to delete
     */
    where?: MenuWhereInput
  }

  /**
   * Menu.Menuitem
   */
  export type Menu$MenuitemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menuitem
     */
    select?: MenuitemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuitemInclude<ExtArgs> | null
    where?: MenuitemWhereInput
    orderBy?: MenuitemOrderByWithRelationInput | MenuitemOrderByWithRelationInput[]
    cursor?: MenuitemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MenuitemScalarFieldEnum | MenuitemScalarFieldEnum[]
  }

  /**
   * Menu.Usuario
   */
  export type Menu$UsuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    cursor?: UsuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Menu without action
   */
  export type MenuDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
  }


  /**
   * Model Menuitem
   */

  export type AggregateMenuitem = {
    _count: MenuitemCountAggregateOutputType | null
    _avg: MenuitemAvgAggregateOutputType | null
    _sum: MenuitemSumAggregateOutputType | null
    _min: MenuitemMinAggregateOutputType | null
    _max: MenuitemMaxAggregateOutputType | null
  }

  export type MenuitemAvgAggregateOutputType = {
    idmenuitem: number | null
    idmenu: number | null
    seq: number | null
    idusercreateAt: number | null
    iduserupdatedAt: number | null
  }

  export type MenuitemSumAggregateOutputType = {
    idmenuitem: number | null
    idmenu: number | null
    seq: number | null
    idusercreateAt: number | null
    iduserupdatedAt: number | null
  }

  export type MenuitemMinAggregateOutputType = {
    idmenuitem: number | null
    idmenu: number | null
    seq: number | null
    titulo: string | null
    url: string | null
    icon: string | null
    idusercreateAt: number | null
    createdAt: Date | null
    iduserupdatedAt: number | null
    updatedAt: Date | null
    status: string | null
  }

  export type MenuitemMaxAggregateOutputType = {
    idmenuitem: number | null
    idmenu: number | null
    seq: number | null
    titulo: string | null
    url: string | null
    icon: string | null
    idusercreateAt: number | null
    createdAt: Date | null
    iduserupdatedAt: number | null
    updatedAt: Date | null
    status: string | null
  }

  export type MenuitemCountAggregateOutputType = {
    idmenuitem: number
    idmenu: number
    seq: number
    titulo: number
    url: number
    icon: number
    idusercreateAt: number
    createdAt: number
    iduserupdatedAt: number
    updatedAt: number
    status: number
    _all: number
  }


  export type MenuitemAvgAggregateInputType = {
    idmenuitem?: true
    idmenu?: true
    seq?: true
    idusercreateAt?: true
    iduserupdatedAt?: true
  }

  export type MenuitemSumAggregateInputType = {
    idmenuitem?: true
    idmenu?: true
    seq?: true
    idusercreateAt?: true
    iduserupdatedAt?: true
  }

  export type MenuitemMinAggregateInputType = {
    idmenuitem?: true
    idmenu?: true
    seq?: true
    titulo?: true
    url?: true
    icon?: true
    idusercreateAt?: true
    createdAt?: true
    iduserupdatedAt?: true
    updatedAt?: true
    status?: true
  }

  export type MenuitemMaxAggregateInputType = {
    idmenuitem?: true
    idmenu?: true
    seq?: true
    titulo?: true
    url?: true
    icon?: true
    idusercreateAt?: true
    createdAt?: true
    iduserupdatedAt?: true
    updatedAt?: true
    status?: true
  }

  export type MenuitemCountAggregateInputType = {
    idmenuitem?: true
    idmenu?: true
    seq?: true
    titulo?: true
    url?: true
    icon?: true
    idusercreateAt?: true
    createdAt?: true
    iduserupdatedAt?: true
    updatedAt?: true
    status?: true
    _all?: true
  }

  export type MenuitemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Menuitem to aggregate.
     */
    where?: MenuitemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Menuitems to fetch.
     */
    orderBy?: MenuitemOrderByWithRelationInput | MenuitemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MenuitemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Menuitems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Menuitems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Menuitems
    **/
    _count?: true | MenuitemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MenuitemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MenuitemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MenuitemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MenuitemMaxAggregateInputType
  }

  export type GetMenuitemAggregateType<T extends MenuitemAggregateArgs> = {
        [P in keyof T & keyof AggregateMenuitem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMenuitem[P]>
      : GetScalarType<T[P], AggregateMenuitem[P]>
  }




  export type MenuitemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuitemWhereInput
    orderBy?: MenuitemOrderByWithAggregationInput | MenuitemOrderByWithAggregationInput[]
    by: MenuitemScalarFieldEnum[] | MenuitemScalarFieldEnum
    having?: MenuitemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MenuitemCountAggregateInputType | true
    _avg?: MenuitemAvgAggregateInputType
    _sum?: MenuitemSumAggregateInputType
    _min?: MenuitemMinAggregateInputType
    _max?: MenuitemMaxAggregateInputType
  }

  export type MenuitemGroupByOutputType = {
    idmenuitem: number
    idmenu: number
    seq: number
    titulo: string
    url: string
    icon: string
    idusercreateAt: number
    createdAt: Date
    iduserupdatedAt: number | null
    updatedAt: Date | null
    status: string
    _count: MenuitemCountAggregateOutputType | null
    _avg: MenuitemAvgAggregateOutputType | null
    _sum: MenuitemSumAggregateOutputType | null
    _min: MenuitemMinAggregateOutputType | null
    _max: MenuitemMaxAggregateOutputType | null
  }

  type GetMenuitemGroupByPayload<T extends MenuitemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MenuitemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MenuitemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MenuitemGroupByOutputType[P]>
            : GetScalarType<T[P], MenuitemGroupByOutputType[P]>
        }
      >
    >


  export type MenuitemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idmenuitem?: boolean
    idmenu?: boolean
    seq?: boolean
    titulo?: boolean
    url?: boolean
    icon?: boolean
    idusercreateAt?: boolean
    createdAt?: boolean
    iduserupdatedAt?: boolean
    updatedAt?: boolean
    status?: boolean
    menu?: boolean | MenuDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menuitem"]>


  export type MenuitemSelectScalar = {
    idmenuitem?: boolean
    idmenu?: boolean
    seq?: boolean
    titulo?: boolean
    url?: boolean
    icon?: boolean
    idusercreateAt?: boolean
    createdAt?: boolean
    iduserupdatedAt?: boolean
    updatedAt?: boolean
    status?: boolean
  }

  export type MenuitemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menu?: boolean | MenuDefaultArgs<ExtArgs>
  }

  export type $MenuitemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Menuitem"
    objects: {
      menu: Prisma.$MenuPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      idmenuitem: number
      idmenu: number
      seq: number
      titulo: string
      url: string
      icon: string
      idusercreateAt: number
      createdAt: Date
      iduserupdatedAt: number | null
      updatedAt: Date | null
      status: string
    }, ExtArgs["result"]["menuitem"]>
    composites: {}
  }

  type MenuitemGetPayload<S extends boolean | null | undefined | MenuitemDefaultArgs> = $Result.GetResult<Prisma.$MenuitemPayload, S>

  type MenuitemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MenuitemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MenuitemCountAggregateInputType | true
    }

  export interface MenuitemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Menuitem'], meta: { name: 'Menuitem' } }
    /**
     * Find zero or one Menuitem that matches the filter.
     * @param {MenuitemFindUniqueArgs} args - Arguments to find a Menuitem
     * @example
     * // Get one Menuitem
     * const menuitem = await prisma.menuitem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MenuitemFindUniqueArgs>(args: SelectSubset<T, MenuitemFindUniqueArgs<ExtArgs>>): Prisma__MenuitemClient<$Result.GetResult<Prisma.$MenuitemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Menuitem that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MenuitemFindUniqueOrThrowArgs} args - Arguments to find a Menuitem
     * @example
     * // Get one Menuitem
     * const menuitem = await prisma.menuitem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MenuitemFindUniqueOrThrowArgs>(args: SelectSubset<T, MenuitemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MenuitemClient<$Result.GetResult<Prisma.$MenuitemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Menuitem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuitemFindFirstArgs} args - Arguments to find a Menuitem
     * @example
     * // Get one Menuitem
     * const menuitem = await prisma.menuitem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MenuitemFindFirstArgs>(args?: SelectSubset<T, MenuitemFindFirstArgs<ExtArgs>>): Prisma__MenuitemClient<$Result.GetResult<Prisma.$MenuitemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Menuitem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuitemFindFirstOrThrowArgs} args - Arguments to find a Menuitem
     * @example
     * // Get one Menuitem
     * const menuitem = await prisma.menuitem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MenuitemFindFirstOrThrowArgs>(args?: SelectSubset<T, MenuitemFindFirstOrThrowArgs<ExtArgs>>): Prisma__MenuitemClient<$Result.GetResult<Prisma.$MenuitemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Menuitems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuitemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Menuitems
     * const menuitems = await prisma.menuitem.findMany()
     * 
     * // Get first 10 Menuitems
     * const menuitems = await prisma.menuitem.findMany({ take: 10 })
     * 
     * // Only select the `idmenuitem`
     * const menuitemWithIdmenuitemOnly = await prisma.menuitem.findMany({ select: { idmenuitem: true } })
     * 
     */
    findMany<T extends MenuitemFindManyArgs>(args?: SelectSubset<T, MenuitemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuitemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Menuitem.
     * @param {MenuitemCreateArgs} args - Arguments to create a Menuitem.
     * @example
     * // Create one Menuitem
     * const Menuitem = await prisma.menuitem.create({
     *   data: {
     *     // ... data to create a Menuitem
     *   }
     * })
     * 
     */
    create<T extends MenuitemCreateArgs>(args: SelectSubset<T, MenuitemCreateArgs<ExtArgs>>): Prisma__MenuitemClient<$Result.GetResult<Prisma.$MenuitemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Menuitems.
     * @param {MenuitemCreateManyArgs} args - Arguments to create many Menuitems.
     * @example
     * // Create many Menuitems
     * const menuitem = await prisma.menuitem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MenuitemCreateManyArgs>(args?: SelectSubset<T, MenuitemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Menuitem.
     * @param {MenuitemDeleteArgs} args - Arguments to delete one Menuitem.
     * @example
     * // Delete one Menuitem
     * const Menuitem = await prisma.menuitem.delete({
     *   where: {
     *     // ... filter to delete one Menuitem
     *   }
     * })
     * 
     */
    delete<T extends MenuitemDeleteArgs>(args: SelectSubset<T, MenuitemDeleteArgs<ExtArgs>>): Prisma__MenuitemClient<$Result.GetResult<Prisma.$MenuitemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Menuitem.
     * @param {MenuitemUpdateArgs} args - Arguments to update one Menuitem.
     * @example
     * // Update one Menuitem
     * const menuitem = await prisma.menuitem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MenuitemUpdateArgs>(args: SelectSubset<T, MenuitemUpdateArgs<ExtArgs>>): Prisma__MenuitemClient<$Result.GetResult<Prisma.$MenuitemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Menuitems.
     * @param {MenuitemDeleteManyArgs} args - Arguments to filter Menuitems to delete.
     * @example
     * // Delete a few Menuitems
     * const { count } = await prisma.menuitem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MenuitemDeleteManyArgs>(args?: SelectSubset<T, MenuitemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Menuitems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuitemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Menuitems
     * const menuitem = await prisma.menuitem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MenuitemUpdateManyArgs>(args: SelectSubset<T, MenuitemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Menuitem.
     * @param {MenuitemUpsertArgs} args - Arguments to update or create a Menuitem.
     * @example
     * // Update or create a Menuitem
     * const menuitem = await prisma.menuitem.upsert({
     *   create: {
     *     // ... data to create a Menuitem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Menuitem we want to update
     *   }
     * })
     */
    upsert<T extends MenuitemUpsertArgs>(args: SelectSubset<T, MenuitemUpsertArgs<ExtArgs>>): Prisma__MenuitemClient<$Result.GetResult<Prisma.$MenuitemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Menuitems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuitemCountArgs} args - Arguments to filter Menuitems to count.
     * @example
     * // Count the number of Menuitems
     * const count = await prisma.menuitem.count({
     *   where: {
     *     // ... the filter for the Menuitems we want to count
     *   }
     * })
    **/
    count<T extends MenuitemCountArgs>(
      args?: Subset<T, MenuitemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MenuitemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Menuitem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuitemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MenuitemAggregateArgs>(args: Subset<T, MenuitemAggregateArgs>): Prisma.PrismaPromise<GetMenuitemAggregateType<T>>

    /**
     * Group by Menuitem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuitemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MenuitemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MenuitemGroupByArgs['orderBy'] }
        : { orderBy?: MenuitemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MenuitemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMenuitemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Menuitem model
   */
  readonly fields: MenuitemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Menuitem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MenuitemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    menu<T extends MenuDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MenuDefaultArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Menuitem model
   */ 
  interface MenuitemFieldRefs {
    readonly idmenuitem: FieldRef<"Menuitem", 'Int'>
    readonly idmenu: FieldRef<"Menuitem", 'Int'>
    readonly seq: FieldRef<"Menuitem", 'Int'>
    readonly titulo: FieldRef<"Menuitem", 'String'>
    readonly url: FieldRef<"Menuitem", 'String'>
    readonly icon: FieldRef<"Menuitem", 'String'>
    readonly idusercreateAt: FieldRef<"Menuitem", 'Int'>
    readonly createdAt: FieldRef<"Menuitem", 'DateTime'>
    readonly iduserupdatedAt: FieldRef<"Menuitem", 'Int'>
    readonly updatedAt: FieldRef<"Menuitem", 'DateTime'>
    readonly status: FieldRef<"Menuitem", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Menuitem findUnique
   */
  export type MenuitemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menuitem
     */
    select?: MenuitemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuitemInclude<ExtArgs> | null
    /**
     * Filter, which Menuitem to fetch.
     */
    where: MenuitemWhereUniqueInput
  }

  /**
   * Menuitem findUniqueOrThrow
   */
  export type MenuitemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menuitem
     */
    select?: MenuitemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuitemInclude<ExtArgs> | null
    /**
     * Filter, which Menuitem to fetch.
     */
    where: MenuitemWhereUniqueInput
  }

  /**
   * Menuitem findFirst
   */
  export type MenuitemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menuitem
     */
    select?: MenuitemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuitemInclude<ExtArgs> | null
    /**
     * Filter, which Menuitem to fetch.
     */
    where?: MenuitemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Menuitems to fetch.
     */
    orderBy?: MenuitemOrderByWithRelationInput | MenuitemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Menuitems.
     */
    cursor?: MenuitemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Menuitems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Menuitems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Menuitems.
     */
    distinct?: MenuitemScalarFieldEnum | MenuitemScalarFieldEnum[]
  }

  /**
   * Menuitem findFirstOrThrow
   */
  export type MenuitemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menuitem
     */
    select?: MenuitemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuitemInclude<ExtArgs> | null
    /**
     * Filter, which Menuitem to fetch.
     */
    where?: MenuitemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Menuitems to fetch.
     */
    orderBy?: MenuitemOrderByWithRelationInput | MenuitemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Menuitems.
     */
    cursor?: MenuitemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Menuitems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Menuitems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Menuitems.
     */
    distinct?: MenuitemScalarFieldEnum | MenuitemScalarFieldEnum[]
  }

  /**
   * Menuitem findMany
   */
  export type MenuitemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menuitem
     */
    select?: MenuitemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuitemInclude<ExtArgs> | null
    /**
     * Filter, which Menuitems to fetch.
     */
    where?: MenuitemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Menuitems to fetch.
     */
    orderBy?: MenuitemOrderByWithRelationInput | MenuitemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Menuitems.
     */
    cursor?: MenuitemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Menuitems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Menuitems.
     */
    skip?: number
    distinct?: MenuitemScalarFieldEnum | MenuitemScalarFieldEnum[]
  }

  /**
   * Menuitem create
   */
  export type MenuitemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menuitem
     */
    select?: MenuitemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuitemInclude<ExtArgs> | null
    /**
     * The data needed to create a Menuitem.
     */
    data: XOR<MenuitemCreateInput, MenuitemUncheckedCreateInput>
  }

  /**
   * Menuitem createMany
   */
  export type MenuitemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Menuitems.
     */
    data: MenuitemCreateManyInput | MenuitemCreateManyInput[]
  }

  /**
   * Menuitem update
   */
  export type MenuitemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menuitem
     */
    select?: MenuitemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuitemInclude<ExtArgs> | null
    /**
     * The data needed to update a Menuitem.
     */
    data: XOR<MenuitemUpdateInput, MenuitemUncheckedUpdateInput>
    /**
     * Choose, which Menuitem to update.
     */
    where: MenuitemWhereUniqueInput
  }

  /**
   * Menuitem updateMany
   */
  export type MenuitemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Menuitems.
     */
    data: XOR<MenuitemUpdateManyMutationInput, MenuitemUncheckedUpdateManyInput>
    /**
     * Filter which Menuitems to update
     */
    where?: MenuitemWhereInput
  }

  /**
   * Menuitem upsert
   */
  export type MenuitemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menuitem
     */
    select?: MenuitemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuitemInclude<ExtArgs> | null
    /**
     * The filter to search for the Menuitem to update in case it exists.
     */
    where: MenuitemWhereUniqueInput
    /**
     * In case the Menuitem found by the `where` argument doesn't exist, create a new Menuitem with this data.
     */
    create: XOR<MenuitemCreateInput, MenuitemUncheckedCreateInput>
    /**
     * In case the Menuitem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MenuitemUpdateInput, MenuitemUncheckedUpdateInput>
  }

  /**
   * Menuitem delete
   */
  export type MenuitemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menuitem
     */
    select?: MenuitemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuitemInclude<ExtArgs> | null
    /**
     * Filter which Menuitem to delete.
     */
    where: MenuitemWhereUniqueInput
  }

  /**
   * Menuitem deleteMany
   */
  export type MenuitemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Menuitems to delete
     */
    where?: MenuitemWhereInput
  }

  /**
   * Menuitem without action
   */
  export type MenuitemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menuitem
     */
    select?: MenuitemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuitemInclude<ExtArgs> | null
  }


  /**
   * Model Coluna
   */

  export type AggregateColuna = {
    _count: ColunaCountAggregateOutputType | null
    _avg: ColunaAvgAggregateOutputType | null
    _sum: ColunaSumAggregateOutputType | null
    _min: ColunaMinAggregateOutputType | null
    _max: ColunaMaxAggregateOutputType | null
  }

  export type ColunaAvgAggregateOutputType = {
    idcoluna: number | null
    idusercreateAt: number | null
    iduserupdatedAt: number | null
    ordem: number | null
  }

  export type ColunaSumAggregateOutputType = {
    idcoluna: number | null
    idusercreateAt: number | null
    iduserupdatedAt: number | null
    ordem: number | null
  }

  export type ColunaMinAggregateOutputType = {
    idcoluna: number | null
    programa: string | null
    field: string | null
    header: string | null
    style: string | null
    type: string | null
    agregado1: string | null
    agregado2: string | null
    idusercreateAt: number | null
    createdAt: Date | null
    iduserupdatedAt: number | null
    updatedAt: Date | null
    status: string | null
    ordem: number | null
    ordena: string | null
    filtra: boolean | null
  }

  export type ColunaMaxAggregateOutputType = {
    idcoluna: number | null
    programa: string | null
    field: string | null
    header: string | null
    style: string | null
    type: string | null
    agregado1: string | null
    agregado2: string | null
    idusercreateAt: number | null
    createdAt: Date | null
    iduserupdatedAt: number | null
    updatedAt: Date | null
    status: string | null
    ordem: number | null
    ordena: string | null
    filtra: boolean | null
  }

  export type ColunaCountAggregateOutputType = {
    idcoluna: number
    programa: number
    field: number
    header: number
    style: number
    type: number
    agregado1: number
    agregado2: number
    idusercreateAt: number
    createdAt: number
    iduserupdatedAt: number
    updatedAt: number
    status: number
    ordem: number
    ordena: number
    filtra: number
    _all: number
  }


  export type ColunaAvgAggregateInputType = {
    idcoluna?: true
    idusercreateAt?: true
    iduserupdatedAt?: true
    ordem?: true
  }

  export type ColunaSumAggregateInputType = {
    idcoluna?: true
    idusercreateAt?: true
    iduserupdatedAt?: true
    ordem?: true
  }

  export type ColunaMinAggregateInputType = {
    idcoluna?: true
    programa?: true
    field?: true
    header?: true
    style?: true
    type?: true
    agregado1?: true
    agregado2?: true
    idusercreateAt?: true
    createdAt?: true
    iduserupdatedAt?: true
    updatedAt?: true
    status?: true
    ordem?: true
    ordena?: true
    filtra?: true
  }

  export type ColunaMaxAggregateInputType = {
    idcoluna?: true
    programa?: true
    field?: true
    header?: true
    style?: true
    type?: true
    agregado1?: true
    agregado2?: true
    idusercreateAt?: true
    createdAt?: true
    iduserupdatedAt?: true
    updatedAt?: true
    status?: true
    ordem?: true
    ordena?: true
    filtra?: true
  }

  export type ColunaCountAggregateInputType = {
    idcoluna?: true
    programa?: true
    field?: true
    header?: true
    style?: true
    type?: true
    agregado1?: true
    agregado2?: true
    idusercreateAt?: true
    createdAt?: true
    iduserupdatedAt?: true
    updatedAt?: true
    status?: true
    ordem?: true
    ordena?: true
    filtra?: true
    _all?: true
  }

  export type ColunaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Coluna to aggregate.
     */
    where?: ColunaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Colunas to fetch.
     */
    orderBy?: ColunaOrderByWithRelationInput | ColunaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ColunaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Colunas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Colunas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Colunas
    **/
    _count?: true | ColunaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ColunaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ColunaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ColunaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ColunaMaxAggregateInputType
  }

  export type GetColunaAggregateType<T extends ColunaAggregateArgs> = {
        [P in keyof T & keyof AggregateColuna]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateColuna[P]>
      : GetScalarType<T[P], AggregateColuna[P]>
  }




  export type ColunaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ColunaWhereInput
    orderBy?: ColunaOrderByWithAggregationInput | ColunaOrderByWithAggregationInput[]
    by: ColunaScalarFieldEnum[] | ColunaScalarFieldEnum
    having?: ColunaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ColunaCountAggregateInputType | true
    _avg?: ColunaAvgAggregateInputType
    _sum?: ColunaSumAggregateInputType
    _min?: ColunaMinAggregateInputType
    _max?: ColunaMaxAggregateInputType
  }

  export type ColunaGroupByOutputType = {
    idcoluna: number
    programa: string
    field: string
    header: string
    style: string
    type: string
    agregado1: string | null
    agregado2: string | null
    idusercreateAt: number
    createdAt: Date
    iduserupdatedAt: number | null
    updatedAt: Date | null
    status: string
    ordem: number
    ordena: string
    filtra: boolean
    _count: ColunaCountAggregateOutputType | null
    _avg: ColunaAvgAggregateOutputType | null
    _sum: ColunaSumAggregateOutputType | null
    _min: ColunaMinAggregateOutputType | null
    _max: ColunaMaxAggregateOutputType | null
  }

  type GetColunaGroupByPayload<T extends ColunaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ColunaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ColunaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ColunaGroupByOutputType[P]>
            : GetScalarType<T[P], ColunaGroupByOutputType[P]>
        }
      >
    >


  export type ColunaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idcoluna?: boolean
    programa?: boolean
    field?: boolean
    header?: boolean
    style?: boolean
    type?: boolean
    agregado1?: boolean
    agregado2?: boolean
    idusercreateAt?: boolean
    createdAt?: boolean
    iduserupdatedAt?: boolean
    updatedAt?: boolean
    status?: boolean
    ordem?: boolean
    ordena?: boolean
    filtra?: boolean
    Usuariocoluna?: boolean | Coluna$UsuariocolunaArgs<ExtArgs>
    _count?: boolean | ColunaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coluna"]>


  export type ColunaSelectScalar = {
    idcoluna?: boolean
    programa?: boolean
    field?: boolean
    header?: boolean
    style?: boolean
    type?: boolean
    agregado1?: boolean
    agregado2?: boolean
    idusercreateAt?: boolean
    createdAt?: boolean
    iduserupdatedAt?: boolean
    updatedAt?: boolean
    status?: boolean
    ordem?: boolean
    ordena?: boolean
    filtra?: boolean
  }

  export type ColunaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Usuariocoluna?: boolean | Coluna$UsuariocolunaArgs<ExtArgs>
    _count?: boolean | ColunaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ColunaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Coluna"
    objects: {
      Usuariocoluna: Prisma.$UsuariocolunaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      idcoluna: number
      programa: string
      field: string
      header: string
      style: string
      type: string
      agregado1: string | null
      agregado2: string | null
      idusercreateAt: number
      createdAt: Date
      iduserupdatedAt: number | null
      updatedAt: Date | null
      status: string
      ordem: number
      ordena: string
      filtra: boolean
    }, ExtArgs["result"]["coluna"]>
    composites: {}
  }

  type ColunaGetPayload<S extends boolean | null | undefined | ColunaDefaultArgs> = $Result.GetResult<Prisma.$ColunaPayload, S>

  type ColunaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ColunaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ColunaCountAggregateInputType | true
    }

  export interface ColunaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Coluna'], meta: { name: 'Coluna' } }
    /**
     * Find zero or one Coluna that matches the filter.
     * @param {ColunaFindUniqueArgs} args - Arguments to find a Coluna
     * @example
     * // Get one Coluna
     * const coluna = await prisma.coluna.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ColunaFindUniqueArgs>(args: SelectSubset<T, ColunaFindUniqueArgs<ExtArgs>>): Prisma__ColunaClient<$Result.GetResult<Prisma.$ColunaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Coluna that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ColunaFindUniqueOrThrowArgs} args - Arguments to find a Coluna
     * @example
     * // Get one Coluna
     * const coluna = await prisma.coluna.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ColunaFindUniqueOrThrowArgs>(args: SelectSubset<T, ColunaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ColunaClient<$Result.GetResult<Prisma.$ColunaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Coluna that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColunaFindFirstArgs} args - Arguments to find a Coluna
     * @example
     * // Get one Coluna
     * const coluna = await prisma.coluna.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ColunaFindFirstArgs>(args?: SelectSubset<T, ColunaFindFirstArgs<ExtArgs>>): Prisma__ColunaClient<$Result.GetResult<Prisma.$ColunaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Coluna that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColunaFindFirstOrThrowArgs} args - Arguments to find a Coluna
     * @example
     * // Get one Coluna
     * const coluna = await prisma.coluna.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ColunaFindFirstOrThrowArgs>(args?: SelectSubset<T, ColunaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ColunaClient<$Result.GetResult<Prisma.$ColunaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Colunas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColunaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Colunas
     * const colunas = await prisma.coluna.findMany()
     * 
     * // Get first 10 Colunas
     * const colunas = await prisma.coluna.findMany({ take: 10 })
     * 
     * // Only select the `idcoluna`
     * const colunaWithIdcolunaOnly = await prisma.coluna.findMany({ select: { idcoluna: true } })
     * 
     */
    findMany<T extends ColunaFindManyArgs>(args?: SelectSubset<T, ColunaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ColunaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Coluna.
     * @param {ColunaCreateArgs} args - Arguments to create a Coluna.
     * @example
     * // Create one Coluna
     * const Coluna = await prisma.coluna.create({
     *   data: {
     *     // ... data to create a Coluna
     *   }
     * })
     * 
     */
    create<T extends ColunaCreateArgs>(args: SelectSubset<T, ColunaCreateArgs<ExtArgs>>): Prisma__ColunaClient<$Result.GetResult<Prisma.$ColunaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Colunas.
     * @param {ColunaCreateManyArgs} args - Arguments to create many Colunas.
     * @example
     * // Create many Colunas
     * const coluna = await prisma.coluna.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ColunaCreateManyArgs>(args?: SelectSubset<T, ColunaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Coluna.
     * @param {ColunaDeleteArgs} args - Arguments to delete one Coluna.
     * @example
     * // Delete one Coluna
     * const Coluna = await prisma.coluna.delete({
     *   where: {
     *     // ... filter to delete one Coluna
     *   }
     * })
     * 
     */
    delete<T extends ColunaDeleteArgs>(args: SelectSubset<T, ColunaDeleteArgs<ExtArgs>>): Prisma__ColunaClient<$Result.GetResult<Prisma.$ColunaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Coluna.
     * @param {ColunaUpdateArgs} args - Arguments to update one Coluna.
     * @example
     * // Update one Coluna
     * const coluna = await prisma.coluna.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ColunaUpdateArgs>(args: SelectSubset<T, ColunaUpdateArgs<ExtArgs>>): Prisma__ColunaClient<$Result.GetResult<Prisma.$ColunaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Colunas.
     * @param {ColunaDeleteManyArgs} args - Arguments to filter Colunas to delete.
     * @example
     * // Delete a few Colunas
     * const { count } = await prisma.coluna.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ColunaDeleteManyArgs>(args?: SelectSubset<T, ColunaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Colunas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColunaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Colunas
     * const coluna = await prisma.coluna.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ColunaUpdateManyArgs>(args: SelectSubset<T, ColunaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Coluna.
     * @param {ColunaUpsertArgs} args - Arguments to update or create a Coluna.
     * @example
     * // Update or create a Coluna
     * const coluna = await prisma.coluna.upsert({
     *   create: {
     *     // ... data to create a Coluna
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Coluna we want to update
     *   }
     * })
     */
    upsert<T extends ColunaUpsertArgs>(args: SelectSubset<T, ColunaUpsertArgs<ExtArgs>>): Prisma__ColunaClient<$Result.GetResult<Prisma.$ColunaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Colunas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColunaCountArgs} args - Arguments to filter Colunas to count.
     * @example
     * // Count the number of Colunas
     * const count = await prisma.coluna.count({
     *   where: {
     *     // ... the filter for the Colunas we want to count
     *   }
     * })
    **/
    count<T extends ColunaCountArgs>(
      args?: Subset<T, ColunaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ColunaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Coluna.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColunaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ColunaAggregateArgs>(args: Subset<T, ColunaAggregateArgs>): Prisma.PrismaPromise<GetColunaAggregateType<T>>

    /**
     * Group by Coluna.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColunaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ColunaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ColunaGroupByArgs['orderBy'] }
        : { orderBy?: ColunaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ColunaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetColunaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Coluna model
   */
  readonly fields: ColunaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Coluna.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ColunaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Usuariocoluna<T extends Coluna$UsuariocolunaArgs<ExtArgs> = {}>(args?: Subset<T, Coluna$UsuariocolunaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuariocolunaPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Coluna model
   */ 
  interface ColunaFieldRefs {
    readonly idcoluna: FieldRef<"Coluna", 'Int'>
    readonly programa: FieldRef<"Coluna", 'String'>
    readonly field: FieldRef<"Coluna", 'String'>
    readonly header: FieldRef<"Coluna", 'String'>
    readonly style: FieldRef<"Coluna", 'String'>
    readonly type: FieldRef<"Coluna", 'String'>
    readonly agregado1: FieldRef<"Coluna", 'String'>
    readonly agregado2: FieldRef<"Coluna", 'String'>
    readonly idusercreateAt: FieldRef<"Coluna", 'Int'>
    readonly createdAt: FieldRef<"Coluna", 'DateTime'>
    readonly iduserupdatedAt: FieldRef<"Coluna", 'Int'>
    readonly updatedAt: FieldRef<"Coluna", 'DateTime'>
    readonly status: FieldRef<"Coluna", 'String'>
    readonly ordem: FieldRef<"Coluna", 'Int'>
    readonly ordena: FieldRef<"Coluna", 'String'>
    readonly filtra: FieldRef<"Coluna", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Coluna findUnique
   */
  export type ColunaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coluna
     */
    select?: ColunaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColunaInclude<ExtArgs> | null
    /**
     * Filter, which Coluna to fetch.
     */
    where: ColunaWhereUniqueInput
  }

  /**
   * Coluna findUniqueOrThrow
   */
  export type ColunaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coluna
     */
    select?: ColunaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColunaInclude<ExtArgs> | null
    /**
     * Filter, which Coluna to fetch.
     */
    where: ColunaWhereUniqueInput
  }

  /**
   * Coluna findFirst
   */
  export type ColunaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coluna
     */
    select?: ColunaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColunaInclude<ExtArgs> | null
    /**
     * Filter, which Coluna to fetch.
     */
    where?: ColunaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Colunas to fetch.
     */
    orderBy?: ColunaOrderByWithRelationInput | ColunaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Colunas.
     */
    cursor?: ColunaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Colunas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Colunas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Colunas.
     */
    distinct?: ColunaScalarFieldEnum | ColunaScalarFieldEnum[]
  }

  /**
   * Coluna findFirstOrThrow
   */
  export type ColunaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coluna
     */
    select?: ColunaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColunaInclude<ExtArgs> | null
    /**
     * Filter, which Coluna to fetch.
     */
    where?: ColunaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Colunas to fetch.
     */
    orderBy?: ColunaOrderByWithRelationInput | ColunaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Colunas.
     */
    cursor?: ColunaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Colunas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Colunas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Colunas.
     */
    distinct?: ColunaScalarFieldEnum | ColunaScalarFieldEnum[]
  }

  /**
   * Coluna findMany
   */
  export type ColunaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coluna
     */
    select?: ColunaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColunaInclude<ExtArgs> | null
    /**
     * Filter, which Colunas to fetch.
     */
    where?: ColunaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Colunas to fetch.
     */
    orderBy?: ColunaOrderByWithRelationInput | ColunaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Colunas.
     */
    cursor?: ColunaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Colunas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Colunas.
     */
    skip?: number
    distinct?: ColunaScalarFieldEnum | ColunaScalarFieldEnum[]
  }

  /**
   * Coluna create
   */
  export type ColunaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coluna
     */
    select?: ColunaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColunaInclude<ExtArgs> | null
    /**
     * The data needed to create a Coluna.
     */
    data: XOR<ColunaCreateInput, ColunaUncheckedCreateInput>
  }

  /**
   * Coluna createMany
   */
  export type ColunaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Colunas.
     */
    data: ColunaCreateManyInput | ColunaCreateManyInput[]
  }

  /**
   * Coluna update
   */
  export type ColunaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coluna
     */
    select?: ColunaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColunaInclude<ExtArgs> | null
    /**
     * The data needed to update a Coluna.
     */
    data: XOR<ColunaUpdateInput, ColunaUncheckedUpdateInput>
    /**
     * Choose, which Coluna to update.
     */
    where: ColunaWhereUniqueInput
  }

  /**
   * Coluna updateMany
   */
  export type ColunaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Colunas.
     */
    data: XOR<ColunaUpdateManyMutationInput, ColunaUncheckedUpdateManyInput>
    /**
     * Filter which Colunas to update
     */
    where?: ColunaWhereInput
  }

  /**
   * Coluna upsert
   */
  export type ColunaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coluna
     */
    select?: ColunaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColunaInclude<ExtArgs> | null
    /**
     * The filter to search for the Coluna to update in case it exists.
     */
    where: ColunaWhereUniqueInput
    /**
     * In case the Coluna found by the `where` argument doesn't exist, create a new Coluna with this data.
     */
    create: XOR<ColunaCreateInput, ColunaUncheckedCreateInput>
    /**
     * In case the Coluna was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ColunaUpdateInput, ColunaUncheckedUpdateInput>
  }

  /**
   * Coluna delete
   */
  export type ColunaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coluna
     */
    select?: ColunaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColunaInclude<ExtArgs> | null
    /**
     * Filter which Coluna to delete.
     */
    where: ColunaWhereUniqueInput
  }

  /**
   * Coluna deleteMany
   */
  export type ColunaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Colunas to delete
     */
    where?: ColunaWhereInput
  }

  /**
   * Coluna.Usuariocoluna
   */
  export type Coluna$UsuariocolunaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuariocoluna
     */
    select?: UsuariocolunaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariocolunaInclude<ExtArgs> | null
    where?: UsuariocolunaWhereInput
    orderBy?: UsuariocolunaOrderByWithRelationInput | UsuariocolunaOrderByWithRelationInput[]
    cursor?: UsuariocolunaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuariocolunaScalarFieldEnum | UsuariocolunaScalarFieldEnum[]
  }

  /**
   * Coluna without action
   */
  export type ColunaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coluna
     */
    select?: ColunaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColunaInclude<ExtArgs> | null
  }


  /**
   * Model Usuariocoluna
   */

  export type AggregateUsuariocoluna = {
    _count: UsuariocolunaCountAggregateOutputType | null
    _avg: UsuariocolunaAvgAggregateOutputType | null
    _sum: UsuariocolunaSumAggregateOutputType | null
    _min: UsuariocolunaMinAggregateOutputType | null
    _max: UsuariocolunaMaxAggregateOutputType | null
  }

  export type UsuariocolunaAvgAggregateOutputType = {
    idusuariocoluna: number | null
    idcoluna: number | null
    idusercreateAt: number | null
    iduserupdatedAt: number | null
    idusuario: number | null
  }

  export type UsuariocolunaSumAggregateOutputType = {
    idusuariocoluna: number | null
    idcoluna: number | null
    idusercreateAt: number | null
    iduserupdatedAt: number | null
    idusuario: number | null
  }

  export type UsuariocolunaMinAggregateOutputType = {
    idusuariocoluna: number | null
    idcoluna: number | null
    idusercreateAt: number | null
    createdAt: Date | null
    iduserupdatedAt: number | null
    updatedAt: Date | null
    status: string | null
    idusuario: number | null
  }

  export type UsuariocolunaMaxAggregateOutputType = {
    idusuariocoluna: number | null
    idcoluna: number | null
    idusercreateAt: number | null
    createdAt: Date | null
    iduserupdatedAt: number | null
    updatedAt: Date | null
    status: string | null
    idusuario: number | null
  }

  export type UsuariocolunaCountAggregateOutputType = {
    idusuariocoluna: number
    idcoluna: number
    idusercreateAt: number
    createdAt: number
    iduserupdatedAt: number
    updatedAt: number
    status: number
    idusuario: number
    _all: number
  }


  export type UsuariocolunaAvgAggregateInputType = {
    idusuariocoluna?: true
    idcoluna?: true
    idusercreateAt?: true
    iduserupdatedAt?: true
    idusuario?: true
  }

  export type UsuariocolunaSumAggregateInputType = {
    idusuariocoluna?: true
    idcoluna?: true
    idusercreateAt?: true
    iduserupdatedAt?: true
    idusuario?: true
  }

  export type UsuariocolunaMinAggregateInputType = {
    idusuariocoluna?: true
    idcoluna?: true
    idusercreateAt?: true
    createdAt?: true
    iduserupdatedAt?: true
    updatedAt?: true
    status?: true
    idusuario?: true
  }

  export type UsuariocolunaMaxAggregateInputType = {
    idusuariocoluna?: true
    idcoluna?: true
    idusercreateAt?: true
    createdAt?: true
    iduserupdatedAt?: true
    updatedAt?: true
    status?: true
    idusuario?: true
  }

  export type UsuariocolunaCountAggregateInputType = {
    idusuariocoluna?: true
    idcoluna?: true
    idusercreateAt?: true
    createdAt?: true
    iduserupdatedAt?: true
    updatedAt?: true
    status?: true
    idusuario?: true
    _all?: true
  }

  export type UsuariocolunaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuariocoluna to aggregate.
     */
    where?: UsuariocolunaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuariocolunas to fetch.
     */
    orderBy?: UsuariocolunaOrderByWithRelationInput | UsuariocolunaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuariocolunaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuariocolunas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuariocolunas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuariocolunas
    **/
    _count?: true | UsuariocolunaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuariocolunaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuariocolunaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuariocolunaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuariocolunaMaxAggregateInputType
  }

  export type GetUsuariocolunaAggregateType<T extends UsuariocolunaAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuariocoluna]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuariocoluna[P]>
      : GetScalarType<T[P], AggregateUsuariocoluna[P]>
  }




  export type UsuariocolunaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuariocolunaWhereInput
    orderBy?: UsuariocolunaOrderByWithAggregationInput | UsuariocolunaOrderByWithAggregationInput[]
    by: UsuariocolunaScalarFieldEnum[] | UsuariocolunaScalarFieldEnum
    having?: UsuariocolunaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuariocolunaCountAggregateInputType | true
    _avg?: UsuariocolunaAvgAggregateInputType
    _sum?: UsuariocolunaSumAggregateInputType
    _min?: UsuariocolunaMinAggregateInputType
    _max?: UsuariocolunaMaxAggregateInputType
  }

  export type UsuariocolunaGroupByOutputType = {
    idusuariocoluna: number
    idcoluna: number
    idusercreateAt: number
    createdAt: Date
    iduserupdatedAt: number | null
    updatedAt: Date | null
    status: string
    idusuario: number
    _count: UsuariocolunaCountAggregateOutputType | null
    _avg: UsuariocolunaAvgAggregateOutputType | null
    _sum: UsuariocolunaSumAggregateOutputType | null
    _min: UsuariocolunaMinAggregateOutputType | null
    _max: UsuariocolunaMaxAggregateOutputType | null
  }

  type GetUsuariocolunaGroupByPayload<T extends UsuariocolunaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuariocolunaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuariocolunaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuariocolunaGroupByOutputType[P]>
            : GetScalarType<T[P], UsuariocolunaGroupByOutputType[P]>
        }
      >
    >


  export type UsuariocolunaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idusuariocoluna?: boolean
    idcoluna?: boolean
    idusercreateAt?: boolean
    createdAt?: boolean
    iduserupdatedAt?: boolean
    updatedAt?: boolean
    status?: boolean
    idusuario?: boolean
    coluna?: boolean | ColunaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuariocoluna"]>


  export type UsuariocolunaSelectScalar = {
    idusuariocoluna?: boolean
    idcoluna?: boolean
    idusercreateAt?: boolean
    createdAt?: boolean
    iduserupdatedAt?: boolean
    updatedAt?: boolean
    status?: boolean
    idusuario?: boolean
  }

  export type UsuariocolunaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    coluna?: boolean | ColunaDefaultArgs<ExtArgs>
  }

  export type $UsuariocolunaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuariocoluna"
    objects: {
      coluna: Prisma.$ColunaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      idusuariocoluna: number
      idcoluna: number
      idusercreateAt: number
      createdAt: Date
      iduserupdatedAt: number | null
      updatedAt: Date | null
      status: string
      idusuario: number
    }, ExtArgs["result"]["usuariocoluna"]>
    composites: {}
  }

  type UsuariocolunaGetPayload<S extends boolean | null | undefined | UsuariocolunaDefaultArgs> = $Result.GetResult<Prisma.$UsuariocolunaPayload, S>

  type UsuariocolunaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UsuariocolunaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsuariocolunaCountAggregateInputType | true
    }

  export interface UsuariocolunaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuariocoluna'], meta: { name: 'Usuariocoluna' } }
    /**
     * Find zero or one Usuariocoluna that matches the filter.
     * @param {UsuariocolunaFindUniqueArgs} args - Arguments to find a Usuariocoluna
     * @example
     * // Get one Usuariocoluna
     * const usuariocoluna = await prisma.usuariocoluna.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuariocolunaFindUniqueArgs>(args: SelectSubset<T, UsuariocolunaFindUniqueArgs<ExtArgs>>): Prisma__UsuariocolunaClient<$Result.GetResult<Prisma.$UsuariocolunaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Usuariocoluna that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UsuariocolunaFindUniqueOrThrowArgs} args - Arguments to find a Usuariocoluna
     * @example
     * // Get one Usuariocoluna
     * const usuariocoluna = await prisma.usuariocoluna.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuariocolunaFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuariocolunaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuariocolunaClient<$Result.GetResult<Prisma.$UsuariocolunaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Usuariocoluna that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariocolunaFindFirstArgs} args - Arguments to find a Usuariocoluna
     * @example
     * // Get one Usuariocoluna
     * const usuariocoluna = await prisma.usuariocoluna.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuariocolunaFindFirstArgs>(args?: SelectSubset<T, UsuariocolunaFindFirstArgs<ExtArgs>>): Prisma__UsuariocolunaClient<$Result.GetResult<Prisma.$UsuariocolunaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Usuariocoluna that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariocolunaFindFirstOrThrowArgs} args - Arguments to find a Usuariocoluna
     * @example
     * // Get one Usuariocoluna
     * const usuariocoluna = await prisma.usuariocoluna.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuariocolunaFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuariocolunaFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuariocolunaClient<$Result.GetResult<Prisma.$UsuariocolunaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Usuariocolunas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariocolunaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuariocolunas
     * const usuariocolunas = await prisma.usuariocoluna.findMany()
     * 
     * // Get first 10 Usuariocolunas
     * const usuariocolunas = await prisma.usuariocoluna.findMany({ take: 10 })
     * 
     * // Only select the `idusuariocoluna`
     * const usuariocolunaWithIdusuariocolunaOnly = await prisma.usuariocoluna.findMany({ select: { idusuariocoluna: true } })
     * 
     */
    findMany<T extends UsuariocolunaFindManyArgs>(args?: SelectSubset<T, UsuariocolunaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuariocolunaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Usuariocoluna.
     * @param {UsuariocolunaCreateArgs} args - Arguments to create a Usuariocoluna.
     * @example
     * // Create one Usuariocoluna
     * const Usuariocoluna = await prisma.usuariocoluna.create({
     *   data: {
     *     // ... data to create a Usuariocoluna
     *   }
     * })
     * 
     */
    create<T extends UsuariocolunaCreateArgs>(args: SelectSubset<T, UsuariocolunaCreateArgs<ExtArgs>>): Prisma__UsuariocolunaClient<$Result.GetResult<Prisma.$UsuariocolunaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Usuariocolunas.
     * @param {UsuariocolunaCreateManyArgs} args - Arguments to create many Usuariocolunas.
     * @example
     * // Create many Usuariocolunas
     * const usuariocoluna = await prisma.usuariocoluna.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuariocolunaCreateManyArgs>(args?: SelectSubset<T, UsuariocolunaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuariocoluna.
     * @param {UsuariocolunaDeleteArgs} args - Arguments to delete one Usuariocoluna.
     * @example
     * // Delete one Usuariocoluna
     * const Usuariocoluna = await prisma.usuariocoluna.delete({
     *   where: {
     *     // ... filter to delete one Usuariocoluna
     *   }
     * })
     * 
     */
    delete<T extends UsuariocolunaDeleteArgs>(args: SelectSubset<T, UsuariocolunaDeleteArgs<ExtArgs>>): Prisma__UsuariocolunaClient<$Result.GetResult<Prisma.$UsuariocolunaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Usuariocoluna.
     * @param {UsuariocolunaUpdateArgs} args - Arguments to update one Usuariocoluna.
     * @example
     * // Update one Usuariocoluna
     * const usuariocoluna = await prisma.usuariocoluna.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuariocolunaUpdateArgs>(args: SelectSubset<T, UsuariocolunaUpdateArgs<ExtArgs>>): Prisma__UsuariocolunaClient<$Result.GetResult<Prisma.$UsuariocolunaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Usuariocolunas.
     * @param {UsuariocolunaDeleteManyArgs} args - Arguments to filter Usuariocolunas to delete.
     * @example
     * // Delete a few Usuariocolunas
     * const { count } = await prisma.usuariocoluna.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuariocolunaDeleteManyArgs>(args?: SelectSubset<T, UsuariocolunaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuariocolunas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariocolunaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuariocolunas
     * const usuariocoluna = await prisma.usuariocoluna.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuariocolunaUpdateManyArgs>(args: SelectSubset<T, UsuariocolunaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuariocoluna.
     * @param {UsuariocolunaUpsertArgs} args - Arguments to update or create a Usuariocoluna.
     * @example
     * // Update or create a Usuariocoluna
     * const usuariocoluna = await prisma.usuariocoluna.upsert({
     *   create: {
     *     // ... data to create a Usuariocoluna
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuariocoluna we want to update
     *   }
     * })
     */
    upsert<T extends UsuariocolunaUpsertArgs>(args: SelectSubset<T, UsuariocolunaUpsertArgs<ExtArgs>>): Prisma__UsuariocolunaClient<$Result.GetResult<Prisma.$UsuariocolunaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Usuariocolunas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariocolunaCountArgs} args - Arguments to filter Usuariocolunas to count.
     * @example
     * // Count the number of Usuariocolunas
     * const count = await prisma.usuariocoluna.count({
     *   where: {
     *     // ... the filter for the Usuariocolunas we want to count
     *   }
     * })
    **/
    count<T extends UsuariocolunaCountArgs>(
      args?: Subset<T, UsuariocolunaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuariocolunaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuariocoluna.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariocolunaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuariocolunaAggregateArgs>(args: Subset<T, UsuariocolunaAggregateArgs>): Prisma.PrismaPromise<GetUsuariocolunaAggregateType<T>>

    /**
     * Group by Usuariocoluna.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariocolunaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuariocolunaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuariocolunaGroupByArgs['orderBy'] }
        : { orderBy?: UsuariocolunaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuariocolunaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuariocolunaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuariocoluna model
   */
  readonly fields: UsuariocolunaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuariocoluna.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuariocolunaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    coluna<T extends ColunaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ColunaDefaultArgs<ExtArgs>>): Prisma__ColunaClient<$Result.GetResult<Prisma.$ColunaPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuariocoluna model
   */ 
  interface UsuariocolunaFieldRefs {
    readonly idusuariocoluna: FieldRef<"Usuariocoluna", 'Int'>
    readonly idcoluna: FieldRef<"Usuariocoluna", 'Int'>
    readonly idusercreateAt: FieldRef<"Usuariocoluna", 'Int'>
    readonly createdAt: FieldRef<"Usuariocoluna", 'DateTime'>
    readonly iduserupdatedAt: FieldRef<"Usuariocoluna", 'Int'>
    readonly updatedAt: FieldRef<"Usuariocoluna", 'DateTime'>
    readonly status: FieldRef<"Usuariocoluna", 'String'>
    readonly idusuario: FieldRef<"Usuariocoluna", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Usuariocoluna findUnique
   */
  export type UsuariocolunaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuariocoluna
     */
    select?: UsuariocolunaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariocolunaInclude<ExtArgs> | null
    /**
     * Filter, which Usuariocoluna to fetch.
     */
    where: UsuariocolunaWhereUniqueInput
  }

  /**
   * Usuariocoluna findUniqueOrThrow
   */
  export type UsuariocolunaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuariocoluna
     */
    select?: UsuariocolunaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariocolunaInclude<ExtArgs> | null
    /**
     * Filter, which Usuariocoluna to fetch.
     */
    where: UsuariocolunaWhereUniqueInput
  }

  /**
   * Usuariocoluna findFirst
   */
  export type UsuariocolunaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuariocoluna
     */
    select?: UsuariocolunaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariocolunaInclude<ExtArgs> | null
    /**
     * Filter, which Usuariocoluna to fetch.
     */
    where?: UsuariocolunaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuariocolunas to fetch.
     */
    orderBy?: UsuariocolunaOrderByWithRelationInput | UsuariocolunaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuariocolunas.
     */
    cursor?: UsuariocolunaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuariocolunas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuariocolunas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuariocolunas.
     */
    distinct?: UsuariocolunaScalarFieldEnum | UsuariocolunaScalarFieldEnum[]
  }

  /**
   * Usuariocoluna findFirstOrThrow
   */
  export type UsuariocolunaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuariocoluna
     */
    select?: UsuariocolunaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariocolunaInclude<ExtArgs> | null
    /**
     * Filter, which Usuariocoluna to fetch.
     */
    where?: UsuariocolunaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuariocolunas to fetch.
     */
    orderBy?: UsuariocolunaOrderByWithRelationInput | UsuariocolunaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuariocolunas.
     */
    cursor?: UsuariocolunaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuariocolunas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuariocolunas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuariocolunas.
     */
    distinct?: UsuariocolunaScalarFieldEnum | UsuariocolunaScalarFieldEnum[]
  }

  /**
   * Usuariocoluna findMany
   */
  export type UsuariocolunaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuariocoluna
     */
    select?: UsuariocolunaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariocolunaInclude<ExtArgs> | null
    /**
     * Filter, which Usuariocolunas to fetch.
     */
    where?: UsuariocolunaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuariocolunas to fetch.
     */
    orderBy?: UsuariocolunaOrderByWithRelationInput | UsuariocolunaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuariocolunas.
     */
    cursor?: UsuariocolunaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuariocolunas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuariocolunas.
     */
    skip?: number
    distinct?: UsuariocolunaScalarFieldEnum | UsuariocolunaScalarFieldEnum[]
  }

  /**
   * Usuariocoluna create
   */
  export type UsuariocolunaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuariocoluna
     */
    select?: UsuariocolunaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariocolunaInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuariocoluna.
     */
    data: XOR<UsuariocolunaCreateInput, UsuariocolunaUncheckedCreateInput>
  }

  /**
   * Usuariocoluna createMany
   */
  export type UsuariocolunaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuariocolunas.
     */
    data: UsuariocolunaCreateManyInput | UsuariocolunaCreateManyInput[]
  }

  /**
   * Usuariocoluna update
   */
  export type UsuariocolunaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuariocoluna
     */
    select?: UsuariocolunaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariocolunaInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuariocoluna.
     */
    data: XOR<UsuariocolunaUpdateInput, UsuariocolunaUncheckedUpdateInput>
    /**
     * Choose, which Usuariocoluna to update.
     */
    where: UsuariocolunaWhereUniqueInput
  }

  /**
   * Usuariocoluna updateMany
   */
  export type UsuariocolunaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuariocolunas.
     */
    data: XOR<UsuariocolunaUpdateManyMutationInput, UsuariocolunaUncheckedUpdateManyInput>
    /**
     * Filter which Usuariocolunas to update
     */
    where?: UsuariocolunaWhereInput
  }

  /**
   * Usuariocoluna upsert
   */
  export type UsuariocolunaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuariocoluna
     */
    select?: UsuariocolunaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariocolunaInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuariocoluna to update in case it exists.
     */
    where: UsuariocolunaWhereUniqueInput
    /**
     * In case the Usuariocoluna found by the `where` argument doesn't exist, create a new Usuariocoluna with this data.
     */
    create: XOR<UsuariocolunaCreateInput, UsuariocolunaUncheckedCreateInput>
    /**
     * In case the Usuariocoluna was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuariocolunaUpdateInput, UsuariocolunaUncheckedUpdateInput>
  }

  /**
   * Usuariocoluna delete
   */
  export type UsuariocolunaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuariocoluna
     */
    select?: UsuariocolunaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariocolunaInclude<ExtArgs> | null
    /**
     * Filter which Usuariocoluna to delete.
     */
    where: UsuariocolunaWhereUniqueInput
  }

  /**
   * Usuariocoluna deleteMany
   */
  export type UsuariocolunaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuariocolunas to delete
     */
    where?: UsuariocolunaWhereInput
  }

  /**
   * Usuariocoluna without action
   */
  export type UsuariocolunaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuariocoluna
     */
    select?: UsuariocolunaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuariocolunaInclude<ExtArgs> | null
  }


  /**
   * Model Unidade
   */

  export type AggregateUnidade = {
    _count: UnidadeCountAggregateOutputType | null
    _avg: UnidadeAvgAggregateOutputType | null
    _sum: UnidadeSumAggregateOutputType | null
    _min: UnidadeMinAggregateOutputType | null
    _max: UnidadeMaxAggregateOutputType | null
  }

  export type UnidadeAvgAggregateOutputType = {
    idunidade: number | null
    idusercreateAt: number | null
    iduserupdatedAt: number | null
    idimovel: number | null
  }

  export type UnidadeSumAggregateOutputType = {
    idunidade: number | null
    idusercreateAt: number | null
    iduserupdatedAt: number | null
    idimovel: number | null
  }

  export type UnidadeMinAggregateOutputType = {
    idunidade: number | null
    nome: string | null
    idusercreateAt: number | null
    createdAt: Date | null
    iduserupdatedAt: number | null
    updatedAt: Date | null
    status: string | null
    idimovel: number | null
    imagem1: Buffer | null
    imagem2: Buffer | null
  }

  export type UnidadeMaxAggregateOutputType = {
    idunidade: number | null
    nome: string | null
    idusercreateAt: number | null
    createdAt: Date | null
    iduserupdatedAt: number | null
    updatedAt: Date | null
    status: string | null
    idimovel: number | null
    imagem1: Buffer | null
    imagem2: Buffer | null
  }

  export type UnidadeCountAggregateOutputType = {
    idunidade: number
    nome: number
    idusercreateAt: number
    createdAt: number
    iduserupdatedAt: number
    updatedAt: number
    status: number
    idimovel: number
    imagem1: number
    imagem2: number
    _all: number
  }


  export type UnidadeAvgAggregateInputType = {
    idunidade?: true
    idusercreateAt?: true
    iduserupdatedAt?: true
    idimovel?: true
  }

  export type UnidadeSumAggregateInputType = {
    idunidade?: true
    idusercreateAt?: true
    iduserupdatedAt?: true
    idimovel?: true
  }

  export type UnidadeMinAggregateInputType = {
    idunidade?: true
    nome?: true
    idusercreateAt?: true
    createdAt?: true
    iduserupdatedAt?: true
    updatedAt?: true
    status?: true
    idimovel?: true
    imagem1?: true
    imagem2?: true
  }

  export type UnidadeMaxAggregateInputType = {
    idunidade?: true
    nome?: true
    idusercreateAt?: true
    createdAt?: true
    iduserupdatedAt?: true
    updatedAt?: true
    status?: true
    idimovel?: true
    imagem1?: true
    imagem2?: true
  }

  export type UnidadeCountAggregateInputType = {
    idunidade?: true
    nome?: true
    idusercreateAt?: true
    createdAt?: true
    iduserupdatedAt?: true
    updatedAt?: true
    status?: true
    idimovel?: true
    imagem1?: true
    imagem2?: true
    _all?: true
  }

  export type UnidadeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Unidade to aggregate.
     */
    where?: UnidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Unidades to fetch.
     */
    orderBy?: UnidadeOrderByWithRelationInput | UnidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UnidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Unidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Unidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Unidades
    **/
    _count?: true | UnidadeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UnidadeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UnidadeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UnidadeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UnidadeMaxAggregateInputType
  }

  export type GetUnidadeAggregateType<T extends UnidadeAggregateArgs> = {
        [P in keyof T & keyof AggregateUnidade]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUnidade[P]>
      : GetScalarType<T[P], AggregateUnidade[P]>
  }




  export type UnidadeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnidadeWhereInput
    orderBy?: UnidadeOrderByWithAggregationInput | UnidadeOrderByWithAggregationInput[]
    by: UnidadeScalarFieldEnum[] | UnidadeScalarFieldEnum
    having?: UnidadeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UnidadeCountAggregateInputType | true
    _avg?: UnidadeAvgAggregateInputType
    _sum?: UnidadeSumAggregateInputType
    _min?: UnidadeMinAggregateInputType
    _max?: UnidadeMaxAggregateInputType
  }

  export type UnidadeGroupByOutputType = {
    idunidade: number
    nome: string
    idusercreateAt: number
    createdAt: Date
    iduserupdatedAt: number | null
    updatedAt: Date | null
    status: string
    idimovel: number
    imagem1: Buffer | null
    imagem2: Buffer | null
    _count: UnidadeCountAggregateOutputType | null
    _avg: UnidadeAvgAggregateOutputType | null
    _sum: UnidadeSumAggregateOutputType | null
    _min: UnidadeMinAggregateOutputType | null
    _max: UnidadeMaxAggregateOutputType | null
  }

  type GetUnidadeGroupByPayload<T extends UnidadeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UnidadeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UnidadeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UnidadeGroupByOutputType[P]>
            : GetScalarType<T[P], UnidadeGroupByOutputType[P]>
        }
      >
    >


  export type UnidadeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idunidade?: boolean
    nome?: boolean
    idusercreateAt?: boolean
    createdAt?: boolean
    iduserupdatedAt?: boolean
    updatedAt?: boolean
    status?: boolean
    idimovel?: boolean
    imagem1?: boolean
    imagem2?: boolean
    Usuario?: boolean | Unidade$UsuarioArgs<ExtArgs>
    _count?: boolean | UnidadeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unidade"]>


  export type UnidadeSelectScalar = {
    idunidade?: boolean
    nome?: boolean
    idusercreateAt?: boolean
    createdAt?: boolean
    iduserupdatedAt?: boolean
    updatedAt?: boolean
    status?: boolean
    idimovel?: boolean
    imagem1?: boolean
    imagem2?: boolean
  }

  export type UnidadeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Usuario?: boolean | Unidade$UsuarioArgs<ExtArgs>
    _count?: boolean | UnidadeCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UnidadePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Unidade"
    objects: {
      Usuario: Prisma.$UsuarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      idunidade: number
      nome: string
      idusercreateAt: number
      createdAt: Date
      iduserupdatedAt: number | null
      updatedAt: Date | null
      status: string
      idimovel: number
      imagem1: Buffer | null
      imagem2: Buffer | null
    }, ExtArgs["result"]["unidade"]>
    composites: {}
  }

  type UnidadeGetPayload<S extends boolean | null | undefined | UnidadeDefaultArgs> = $Result.GetResult<Prisma.$UnidadePayload, S>

  type UnidadeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UnidadeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UnidadeCountAggregateInputType | true
    }

  export interface UnidadeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Unidade'], meta: { name: 'Unidade' } }
    /**
     * Find zero or one Unidade that matches the filter.
     * @param {UnidadeFindUniqueArgs} args - Arguments to find a Unidade
     * @example
     * // Get one Unidade
     * const unidade = await prisma.unidade.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UnidadeFindUniqueArgs>(args: SelectSubset<T, UnidadeFindUniqueArgs<ExtArgs>>): Prisma__UnidadeClient<$Result.GetResult<Prisma.$UnidadePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Unidade that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UnidadeFindUniqueOrThrowArgs} args - Arguments to find a Unidade
     * @example
     * // Get one Unidade
     * const unidade = await prisma.unidade.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UnidadeFindUniqueOrThrowArgs>(args: SelectSubset<T, UnidadeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UnidadeClient<$Result.GetResult<Prisma.$UnidadePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Unidade that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnidadeFindFirstArgs} args - Arguments to find a Unidade
     * @example
     * // Get one Unidade
     * const unidade = await prisma.unidade.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UnidadeFindFirstArgs>(args?: SelectSubset<T, UnidadeFindFirstArgs<ExtArgs>>): Prisma__UnidadeClient<$Result.GetResult<Prisma.$UnidadePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Unidade that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnidadeFindFirstOrThrowArgs} args - Arguments to find a Unidade
     * @example
     * // Get one Unidade
     * const unidade = await prisma.unidade.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UnidadeFindFirstOrThrowArgs>(args?: SelectSubset<T, UnidadeFindFirstOrThrowArgs<ExtArgs>>): Prisma__UnidadeClient<$Result.GetResult<Prisma.$UnidadePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Unidades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnidadeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Unidades
     * const unidades = await prisma.unidade.findMany()
     * 
     * // Get first 10 Unidades
     * const unidades = await prisma.unidade.findMany({ take: 10 })
     * 
     * // Only select the `idunidade`
     * const unidadeWithIdunidadeOnly = await prisma.unidade.findMany({ select: { idunidade: true } })
     * 
     */
    findMany<T extends UnidadeFindManyArgs>(args?: SelectSubset<T, UnidadeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnidadePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Unidade.
     * @param {UnidadeCreateArgs} args - Arguments to create a Unidade.
     * @example
     * // Create one Unidade
     * const Unidade = await prisma.unidade.create({
     *   data: {
     *     // ... data to create a Unidade
     *   }
     * })
     * 
     */
    create<T extends UnidadeCreateArgs>(args: SelectSubset<T, UnidadeCreateArgs<ExtArgs>>): Prisma__UnidadeClient<$Result.GetResult<Prisma.$UnidadePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Unidades.
     * @param {UnidadeCreateManyArgs} args - Arguments to create many Unidades.
     * @example
     * // Create many Unidades
     * const unidade = await prisma.unidade.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UnidadeCreateManyArgs>(args?: SelectSubset<T, UnidadeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Unidade.
     * @param {UnidadeDeleteArgs} args - Arguments to delete one Unidade.
     * @example
     * // Delete one Unidade
     * const Unidade = await prisma.unidade.delete({
     *   where: {
     *     // ... filter to delete one Unidade
     *   }
     * })
     * 
     */
    delete<T extends UnidadeDeleteArgs>(args: SelectSubset<T, UnidadeDeleteArgs<ExtArgs>>): Prisma__UnidadeClient<$Result.GetResult<Prisma.$UnidadePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Unidade.
     * @param {UnidadeUpdateArgs} args - Arguments to update one Unidade.
     * @example
     * // Update one Unidade
     * const unidade = await prisma.unidade.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UnidadeUpdateArgs>(args: SelectSubset<T, UnidadeUpdateArgs<ExtArgs>>): Prisma__UnidadeClient<$Result.GetResult<Prisma.$UnidadePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Unidades.
     * @param {UnidadeDeleteManyArgs} args - Arguments to filter Unidades to delete.
     * @example
     * // Delete a few Unidades
     * const { count } = await prisma.unidade.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UnidadeDeleteManyArgs>(args?: SelectSubset<T, UnidadeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Unidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnidadeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Unidades
     * const unidade = await prisma.unidade.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UnidadeUpdateManyArgs>(args: SelectSubset<T, UnidadeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Unidade.
     * @param {UnidadeUpsertArgs} args - Arguments to update or create a Unidade.
     * @example
     * // Update or create a Unidade
     * const unidade = await prisma.unidade.upsert({
     *   create: {
     *     // ... data to create a Unidade
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Unidade we want to update
     *   }
     * })
     */
    upsert<T extends UnidadeUpsertArgs>(args: SelectSubset<T, UnidadeUpsertArgs<ExtArgs>>): Prisma__UnidadeClient<$Result.GetResult<Prisma.$UnidadePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Unidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnidadeCountArgs} args - Arguments to filter Unidades to count.
     * @example
     * // Count the number of Unidades
     * const count = await prisma.unidade.count({
     *   where: {
     *     // ... the filter for the Unidades we want to count
     *   }
     * })
    **/
    count<T extends UnidadeCountArgs>(
      args?: Subset<T, UnidadeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UnidadeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Unidade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnidadeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UnidadeAggregateArgs>(args: Subset<T, UnidadeAggregateArgs>): Prisma.PrismaPromise<GetUnidadeAggregateType<T>>

    /**
     * Group by Unidade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnidadeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UnidadeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UnidadeGroupByArgs['orderBy'] }
        : { orderBy?: UnidadeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UnidadeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUnidadeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Unidade model
   */
  readonly fields: UnidadeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Unidade.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UnidadeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Usuario<T extends Unidade$UsuarioArgs<ExtArgs> = {}>(args?: Subset<T, Unidade$UsuarioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Unidade model
   */ 
  interface UnidadeFieldRefs {
    readonly idunidade: FieldRef<"Unidade", 'Int'>
    readonly nome: FieldRef<"Unidade", 'String'>
    readonly idusercreateAt: FieldRef<"Unidade", 'Int'>
    readonly createdAt: FieldRef<"Unidade", 'DateTime'>
    readonly iduserupdatedAt: FieldRef<"Unidade", 'Int'>
    readonly updatedAt: FieldRef<"Unidade", 'DateTime'>
    readonly status: FieldRef<"Unidade", 'String'>
    readonly idimovel: FieldRef<"Unidade", 'Int'>
    readonly imagem1: FieldRef<"Unidade", 'Bytes'>
    readonly imagem2: FieldRef<"Unidade", 'Bytes'>
  }
    

  // Custom InputTypes
  /**
   * Unidade findUnique
   */
  export type UnidadeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unidade
     */
    select?: UnidadeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnidadeInclude<ExtArgs> | null
    /**
     * Filter, which Unidade to fetch.
     */
    where: UnidadeWhereUniqueInput
  }

  /**
   * Unidade findUniqueOrThrow
   */
  export type UnidadeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unidade
     */
    select?: UnidadeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnidadeInclude<ExtArgs> | null
    /**
     * Filter, which Unidade to fetch.
     */
    where: UnidadeWhereUniqueInput
  }

  /**
   * Unidade findFirst
   */
  export type UnidadeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unidade
     */
    select?: UnidadeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnidadeInclude<ExtArgs> | null
    /**
     * Filter, which Unidade to fetch.
     */
    where?: UnidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Unidades to fetch.
     */
    orderBy?: UnidadeOrderByWithRelationInput | UnidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Unidades.
     */
    cursor?: UnidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Unidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Unidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Unidades.
     */
    distinct?: UnidadeScalarFieldEnum | UnidadeScalarFieldEnum[]
  }

  /**
   * Unidade findFirstOrThrow
   */
  export type UnidadeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unidade
     */
    select?: UnidadeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnidadeInclude<ExtArgs> | null
    /**
     * Filter, which Unidade to fetch.
     */
    where?: UnidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Unidades to fetch.
     */
    orderBy?: UnidadeOrderByWithRelationInput | UnidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Unidades.
     */
    cursor?: UnidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Unidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Unidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Unidades.
     */
    distinct?: UnidadeScalarFieldEnum | UnidadeScalarFieldEnum[]
  }

  /**
   * Unidade findMany
   */
  export type UnidadeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unidade
     */
    select?: UnidadeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnidadeInclude<ExtArgs> | null
    /**
     * Filter, which Unidades to fetch.
     */
    where?: UnidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Unidades to fetch.
     */
    orderBy?: UnidadeOrderByWithRelationInput | UnidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Unidades.
     */
    cursor?: UnidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Unidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Unidades.
     */
    skip?: number
    distinct?: UnidadeScalarFieldEnum | UnidadeScalarFieldEnum[]
  }

  /**
   * Unidade create
   */
  export type UnidadeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unidade
     */
    select?: UnidadeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnidadeInclude<ExtArgs> | null
    /**
     * The data needed to create a Unidade.
     */
    data: XOR<UnidadeCreateInput, UnidadeUncheckedCreateInput>
  }

  /**
   * Unidade createMany
   */
  export type UnidadeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Unidades.
     */
    data: UnidadeCreateManyInput | UnidadeCreateManyInput[]
  }

  /**
   * Unidade update
   */
  export type UnidadeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unidade
     */
    select?: UnidadeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnidadeInclude<ExtArgs> | null
    /**
     * The data needed to update a Unidade.
     */
    data: XOR<UnidadeUpdateInput, UnidadeUncheckedUpdateInput>
    /**
     * Choose, which Unidade to update.
     */
    where: UnidadeWhereUniqueInput
  }

  /**
   * Unidade updateMany
   */
  export type UnidadeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Unidades.
     */
    data: XOR<UnidadeUpdateManyMutationInput, UnidadeUncheckedUpdateManyInput>
    /**
     * Filter which Unidades to update
     */
    where?: UnidadeWhereInput
  }

  /**
   * Unidade upsert
   */
  export type UnidadeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unidade
     */
    select?: UnidadeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnidadeInclude<ExtArgs> | null
    /**
     * The filter to search for the Unidade to update in case it exists.
     */
    where: UnidadeWhereUniqueInput
    /**
     * In case the Unidade found by the `where` argument doesn't exist, create a new Unidade with this data.
     */
    create: XOR<UnidadeCreateInput, UnidadeUncheckedCreateInput>
    /**
     * In case the Unidade was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UnidadeUpdateInput, UnidadeUncheckedUpdateInput>
  }

  /**
   * Unidade delete
   */
  export type UnidadeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unidade
     */
    select?: UnidadeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnidadeInclude<ExtArgs> | null
    /**
     * Filter which Unidade to delete.
     */
    where: UnidadeWhereUniqueInput
  }

  /**
   * Unidade deleteMany
   */
  export type UnidadeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Unidades to delete
     */
    where?: UnidadeWhereInput
  }

  /**
   * Unidade.Usuario
   */
  export type Unidade$UsuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    cursor?: UsuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Unidade without action
   */
  export type UnidadeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unidade
     */
    select?: UnidadeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnidadeInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable',
    Snapshot: 'Snapshot'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsuarioScalarFieldEnum: {
    idusuario: 'idusuario',
    nome: 'nome',
    email: 'email',
    cpf: 'cpf',
    dtnascimento: 'dtnascimento',
    sexo: 'sexo',
    idusercreateAt: 'idusercreateAt',
    createdAt: 'createdAt',
    iduserupdatedAt: 'iduserupdatedAt',
    updatedAt: 'updatedAt',
    status: 'status',
    senha: 'senha',
    trocasenha: 'trocasenha',
    iddepartamento: 'iddepartamento',
    idmenu: 'idmenu',
    celular: 'celular',
    ramaln: 'ramaln',
    idnivel: 'idnivel',
    chatid: 'chatid',
    ti: 'ti',
    contrato: 'contrato',
    contratost: 'contratost',
    idunidade: 'idunidade',
    vtodoscontratos: 'vtodoscontratos',
    vtodoshoraextra: 'vtodoshoraextra',
    ccontratos: 'ccontratos',
    choraextra: 'choraextra'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const NivelScalarFieldEnum: {
    idnivel: 'idnivel',
    nome: 'nome',
    idusercreateAt: 'idusercreateAt',
    createdAt: 'createdAt',
    iduserupdatedAt: 'iduserupdatedAt',
    updatedAt: 'updatedAt',
    status: 'status'
  };

  export type NivelScalarFieldEnum = (typeof NivelScalarFieldEnum)[keyof typeof NivelScalarFieldEnum]


  export const LoginScalarFieldEnum: {
    idlogin: 'idlogin',
    email: 'email',
    createdAt: 'createdAt',
    status: 'status',
    respsend: 'respsend',
    iporigem: 'iporigem'
  };

  export type LoginScalarFieldEnum = (typeof LoginScalarFieldEnum)[keyof typeof LoginScalarFieldEnum]


  export const MenuScalarFieldEnum: {
    idmenu: 'idmenu',
    idusercreateAt: 'idusercreateAt',
    createdAt: 'createdAt',
    iduserupdatedAt: 'iduserupdatedAt',
    updatedAt: 'updatedAt',
    status: 'status',
    nome: 'nome'
  };

  export type MenuScalarFieldEnum = (typeof MenuScalarFieldEnum)[keyof typeof MenuScalarFieldEnum]


  export const MenuitemScalarFieldEnum: {
    idmenuitem: 'idmenuitem',
    idmenu: 'idmenu',
    seq: 'seq',
    titulo: 'titulo',
    url: 'url',
    icon: 'icon',
    idusercreateAt: 'idusercreateAt',
    createdAt: 'createdAt',
    iduserupdatedAt: 'iduserupdatedAt',
    updatedAt: 'updatedAt',
    status: 'status'
  };

  export type MenuitemScalarFieldEnum = (typeof MenuitemScalarFieldEnum)[keyof typeof MenuitemScalarFieldEnum]


  export const ColunaScalarFieldEnum: {
    idcoluna: 'idcoluna',
    programa: 'programa',
    field: 'field',
    header: 'header',
    style: 'style',
    type: 'type',
    agregado1: 'agregado1',
    agregado2: 'agregado2',
    idusercreateAt: 'idusercreateAt',
    createdAt: 'createdAt',
    iduserupdatedAt: 'iduserupdatedAt',
    updatedAt: 'updatedAt',
    status: 'status',
    ordem: 'ordem',
    ordena: 'ordena',
    filtra: 'filtra'
  };

  export type ColunaScalarFieldEnum = (typeof ColunaScalarFieldEnum)[keyof typeof ColunaScalarFieldEnum]


  export const UsuariocolunaScalarFieldEnum: {
    idusuariocoluna: 'idusuariocoluna',
    idcoluna: 'idcoluna',
    idusercreateAt: 'idusercreateAt',
    createdAt: 'createdAt',
    iduserupdatedAt: 'iduserupdatedAt',
    updatedAt: 'updatedAt',
    status: 'status',
    idusuario: 'idusuario'
  };

  export type UsuariocolunaScalarFieldEnum = (typeof UsuariocolunaScalarFieldEnum)[keyof typeof UsuariocolunaScalarFieldEnum]


  export const UnidadeScalarFieldEnum: {
    idunidade: 'idunidade',
    nome: 'nome',
    idusercreateAt: 'idusercreateAt',
    createdAt: 'createdAt',
    iduserupdatedAt: 'iduserupdatedAt',
    updatedAt: 'updatedAt',
    status: 'status',
    idimovel: 'idimovel',
    imagem1: 'imagem1',
    imagem2: 'imagem2'
  };

  export type UnidadeScalarFieldEnum = (typeof UnidadeScalarFieldEnum)[keyof typeof UnidadeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Bytes'
   */
  export type BytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    idusuario?: IntFilter<"Usuario"> | number
    nome?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    cpf?: StringNullableFilter<"Usuario"> | string | null
    dtnascimento?: DateTimeNullableFilter<"Usuario"> | Date | string | null
    sexo?: StringNullableFilter<"Usuario"> | string | null
    idusercreateAt?: IntFilter<"Usuario"> | number
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    iduserupdatedAt?: IntNullableFilter<"Usuario"> | number | null
    updatedAt?: DateTimeNullableFilter<"Usuario"> | Date | string | null
    status?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    trocasenha?: BoolFilter<"Usuario"> | boolean
    iddepartamento?: IntFilter<"Usuario"> | number
    idmenu?: IntFilter<"Usuario"> | number
    celular?: StringNullableFilter<"Usuario"> | string | null
    ramaln?: StringNullableFilter<"Usuario"> | string | null
    idnivel?: IntFilter<"Usuario"> | number
    chatid?: StringNullableFilter<"Usuario"> | string | null
    ti?: BoolFilter<"Usuario"> | boolean
    contrato?: BoolFilter<"Usuario"> | boolean
    contratost?: BoolFilter<"Usuario"> | boolean
    idunidade?: IntFilter<"Usuario"> | number
    vtodoscontratos?: BoolFilter<"Usuario"> | boolean
    vtodoshoraextra?: BoolFilter<"Usuario"> | boolean
    ccontratos?: BoolFilter<"Usuario"> | boolean
    choraextra?: BoolFilter<"Usuario"> | boolean
    nivel?: XOR<NivelRelationFilter, NivelWhereInput>
    menu?: XOR<MenuRelationFilter, MenuWhereInput>
    unidade?: XOR<UnidadeRelationFilter, UnidadeWhereInput>
  }

  export type UsuarioOrderByWithRelationInput = {
    idusuario?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    cpf?: SortOrderInput | SortOrder
    dtnascimento?: SortOrderInput | SortOrder
    sexo?: SortOrderInput | SortOrder
    idusercreateAt?: SortOrder
    createdAt?: SortOrder
    iduserupdatedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    status?: SortOrder
    senha?: SortOrder
    trocasenha?: SortOrder
    iddepartamento?: SortOrder
    idmenu?: SortOrder
    celular?: SortOrderInput | SortOrder
    ramaln?: SortOrderInput | SortOrder
    idnivel?: SortOrder
    chatid?: SortOrderInput | SortOrder
    ti?: SortOrder
    contrato?: SortOrder
    contratost?: SortOrder
    idunidade?: SortOrder
    vtodoscontratos?: SortOrder
    vtodoshoraextra?: SortOrder
    ccontratos?: SortOrder
    choraextra?: SortOrder
    nivel?: NivelOrderByWithRelationInput
    menu?: MenuOrderByWithRelationInput
    unidade?: UnidadeOrderByWithRelationInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    idusuario?: number
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nome?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    cpf?: StringNullableFilter<"Usuario"> | string | null
    dtnascimento?: DateTimeNullableFilter<"Usuario"> | Date | string | null
    sexo?: StringNullableFilter<"Usuario"> | string | null
    idusercreateAt?: IntFilter<"Usuario"> | number
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    iduserupdatedAt?: IntNullableFilter<"Usuario"> | number | null
    updatedAt?: DateTimeNullableFilter<"Usuario"> | Date | string | null
    status?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    trocasenha?: BoolFilter<"Usuario"> | boolean
    iddepartamento?: IntFilter<"Usuario"> | number
    idmenu?: IntFilter<"Usuario"> | number
    celular?: StringNullableFilter<"Usuario"> | string | null
    ramaln?: StringNullableFilter<"Usuario"> | string | null
    idnivel?: IntFilter<"Usuario"> | number
    chatid?: StringNullableFilter<"Usuario"> | string | null
    ti?: BoolFilter<"Usuario"> | boolean
    contrato?: BoolFilter<"Usuario"> | boolean
    contratost?: BoolFilter<"Usuario"> | boolean
    idunidade?: IntFilter<"Usuario"> | number
    vtodoscontratos?: BoolFilter<"Usuario"> | boolean
    vtodoshoraextra?: BoolFilter<"Usuario"> | boolean
    ccontratos?: BoolFilter<"Usuario"> | boolean
    choraextra?: BoolFilter<"Usuario"> | boolean
    nivel?: XOR<NivelRelationFilter, NivelWhereInput>
    menu?: XOR<MenuRelationFilter, MenuWhereInput>
    unidade?: XOR<UnidadeRelationFilter, UnidadeWhereInput>
  }, "idusuario">

  export type UsuarioOrderByWithAggregationInput = {
    idusuario?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    cpf?: SortOrderInput | SortOrder
    dtnascimento?: SortOrderInput | SortOrder
    sexo?: SortOrderInput | SortOrder
    idusercreateAt?: SortOrder
    createdAt?: SortOrder
    iduserupdatedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    status?: SortOrder
    senha?: SortOrder
    trocasenha?: SortOrder
    iddepartamento?: SortOrder
    idmenu?: SortOrder
    celular?: SortOrderInput | SortOrder
    ramaln?: SortOrderInput | SortOrder
    idnivel?: SortOrder
    chatid?: SortOrderInput | SortOrder
    ti?: SortOrder
    contrato?: SortOrder
    contratost?: SortOrder
    idunidade?: SortOrder
    vtodoscontratos?: SortOrder
    vtodoshoraextra?: SortOrder
    ccontratos?: SortOrder
    choraextra?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    idusuario?: IntWithAggregatesFilter<"Usuario"> | number
    nome?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    cpf?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    dtnascimento?: DateTimeNullableWithAggregatesFilter<"Usuario"> | Date | string | null
    sexo?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    idusercreateAt?: IntWithAggregatesFilter<"Usuario"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    iduserupdatedAt?: IntNullableWithAggregatesFilter<"Usuario"> | number | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Usuario"> | Date | string | null
    status?: StringWithAggregatesFilter<"Usuario"> | string
    senha?: StringWithAggregatesFilter<"Usuario"> | string
    trocasenha?: BoolWithAggregatesFilter<"Usuario"> | boolean
    iddepartamento?: IntWithAggregatesFilter<"Usuario"> | number
    idmenu?: IntWithAggregatesFilter<"Usuario"> | number
    celular?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    ramaln?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    idnivel?: IntWithAggregatesFilter<"Usuario"> | number
    chatid?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    ti?: BoolWithAggregatesFilter<"Usuario"> | boolean
    contrato?: BoolWithAggregatesFilter<"Usuario"> | boolean
    contratost?: BoolWithAggregatesFilter<"Usuario"> | boolean
    idunidade?: IntWithAggregatesFilter<"Usuario"> | number
    vtodoscontratos?: BoolWithAggregatesFilter<"Usuario"> | boolean
    vtodoshoraextra?: BoolWithAggregatesFilter<"Usuario"> | boolean
    ccontratos?: BoolWithAggregatesFilter<"Usuario"> | boolean
    choraextra?: BoolWithAggregatesFilter<"Usuario"> | boolean
  }

  export type NivelWhereInput = {
    AND?: NivelWhereInput | NivelWhereInput[]
    OR?: NivelWhereInput[]
    NOT?: NivelWhereInput | NivelWhereInput[]
    idnivel?: IntFilter<"Nivel"> | number
    nome?: StringFilter<"Nivel"> | string
    idusercreateAt?: IntFilter<"Nivel"> | number
    createdAt?: DateTimeFilter<"Nivel"> | Date | string
    iduserupdatedAt?: IntNullableFilter<"Nivel"> | number | null
    updatedAt?: DateTimeNullableFilter<"Nivel"> | Date | string | null
    status?: StringFilter<"Nivel"> | string
    Usuario?: UsuarioListRelationFilter
  }

  export type NivelOrderByWithRelationInput = {
    idnivel?: SortOrder
    nome?: SortOrder
    idusercreateAt?: SortOrder
    createdAt?: SortOrder
    iduserupdatedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    status?: SortOrder
    Usuario?: UsuarioOrderByRelationAggregateInput
  }

  export type NivelWhereUniqueInput = Prisma.AtLeast<{
    idnivel?: number
    AND?: NivelWhereInput | NivelWhereInput[]
    OR?: NivelWhereInput[]
    NOT?: NivelWhereInput | NivelWhereInput[]
    nome?: StringFilter<"Nivel"> | string
    idusercreateAt?: IntFilter<"Nivel"> | number
    createdAt?: DateTimeFilter<"Nivel"> | Date | string
    iduserupdatedAt?: IntNullableFilter<"Nivel"> | number | null
    updatedAt?: DateTimeNullableFilter<"Nivel"> | Date | string | null
    status?: StringFilter<"Nivel"> | string
    Usuario?: UsuarioListRelationFilter
  }, "idnivel">

  export type NivelOrderByWithAggregationInput = {
    idnivel?: SortOrder
    nome?: SortOrder
    idusercreateAt?: SortOrder
    createdAt?: SortOrder
    iduserupdatedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    status?: SortOrder
    _count?: NivelCountOrderByAggregateInput
    _avg?: NivelAvgOrderByAggregateInput
    _max?: NivelMaxOrderByAggregateInput
    _min?: NivelMinOrderByAggregateInput
    _sum?: NivelSumOrderByAggregateInput
  }

  export type NivelScalarWhereWithAggregatesInput = {
    AND?: NivelScalarWhereWithAggregatesInput | NivelScalarWhereWithAggregatesInput[]
    OR?: NivelScalarWhereWithAggregatesInput[]
    NOT?: NivelScalarWhereWithAggregatesInput | NivelScalarWhereWithAggregatesInput[]
    idnivel?: IntWithAggregatesFilter<"Nivel"> | number
    nome?: StringWithAggregatesFilter<"Nivel"> | string
    idusercreateAt?: IntWithAggregatesFilter<"Nivel"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Nivel"> | Date | string
    iduserupdatedAt?: IntNullableWithAggregatesFilter<"Nivel"> | number | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Nivel"> | Date | string | null
    status?: StringWithAggregatesFilter<"Nivel"> | string
  }

  export type LoginWhereInput = {
    AND?: LoginWhereInput | LoginWhereInput[]
    OR?: LoginWhereInput[]
    NOT?: LoginWhereInput | LoginWhereInput[]
    idlogin?: IntFilter<"Login"> | number
    email?: StringFilter<"Login"> | string
    status?: StringFilter<"Login"> | string
    respsend?: IntFilter<"Login"> | number
    iporigem?: StringFilter<"Login"> | string
  }

  export type LoginOrderByWithRelationInput = {
    idlogin?: SortOrder
    email?: SortOrder
    status?: SortOrder
    respsend?: SortOrder
    iporigem?: SortOrder
  }

  export type LoginWhereUniqueInput = Prisma.AtLeast<{
    idlogin?: number
    AND?: LoginWhereInput | LoginWhereInput[]
    OR?: LoginWhereInput[]
    NOT?: LoginWhereInput | LoginWhereInput[]
    email?: StringFilter<"Login"> | string
    status?: StringFilter<"Login"> | string
    respsend?: IntFilter<"Login"> | number
    iporigem?: StringFilter<"Login"> | string
  }, "idlogin">

  export type LoginOrderByWithAggregationInput = {
    idlogin?: SortOrder
    email?: SortOrder
    status?: SortOrder
    respsend?: SortOrder
    iporigem?: SortOrder
    _count?: LoginCountOrderByAggregateInput
    _avg?: LoginAvgOrderByAggregateInput
    _max?: LoginMaxOrderByAggregateInput
    _min?: LoginMinOrderByAggregateInput
    _sum?: LoginSumOrderByAggregateInput
  }

  export type LoginScalarWhereWithAggregatesInput = {
    AND?: LoginScalarWhereWithAggregatesInput | LoginScalarWhereWithAggregatesInput[]
    OR?: LoginScalarWhereWithAggregatesInput[]
    NOT?: LoginScalarWhereWithAggregatesInput | LoginScalarWhereWithAggregatesInput[]
    idlogin?: IntWithAggregatesFilter<"Login"> | number
    email?: StringWithAggregatesFilter<"Login"> | string
    status?: StringWithAggregatesFilter<"Login"> | string
    respsend?: IntWithAggregatesFilter<"Login"> | number
    iporigem?: StringWithAggregatesFilter<"Login"> | string
  }

  export type MenuWhereInput = {
    AND?: MenuWhereInput | MenuWhereInput[]
    OR?: MenuWhereInput[]
    NOT?: MenuWhereInput | MenuWhereInput[]
    idmenu?: IntFilter<"Menu"> | number
    idusercreateAt?: IntFilter<"Menu"> | number
    createdAt?: DateTimeFilter<"Menu"> | Date | string
    iduserupdatedAt?: IntNullableFilter<"Menu"> | number | null
    updatedAt?: DateTimeNullableFilter<"Menu"> | Date | string | null
    status?: StringFilter<"Menu"> | string
    nome?: StringFilter<"Menu"> | string
    Menuitem?: MenuitemListRelationFilter
    Usuario?: UsuarioListRelationFilter
  }

  export type MenuOrderByWithRelationInput = {
    idmenu?: SortOrder
    idusercreateAt?: SortOrder
    createdAt?: SortOrder
    iduserupdatedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    status?: SortOrder
    nome?: SortOrder
    Menuitem?: MenuitemOrderByRelationAggregateInput
    Usuario?: UsuarioOrderByRelationAggregateInput
  }

  export type MenuWhereUniqueInput = Prisma.AtLeast<{
    idmenu?: number
    AND?: MenuWhereInput | MenuWhereInput[]
    OR?: MenuWhereInput[]
    NOT?: MenuWhereInput | MenuWhereInput[]
    idusercreateAt?: IntFilter<"Menu"> | number
    createdAt?: DateTimeFilter<"Menu"> | Date | string
    iduserupdatedAt?: IntNullableFilter<"Menu"> | number | null
    updatedAt?: DateTimeNullableFilter<"Menu"> | Date | string | null
    status?: StringFilter<"Menu"> | string
    nome?: StringFilter<"Menu"> | string
    Menuitem?: MenuitemListRelationFilter
    Usuario?: UsuarioListRelationFilter
  }, "idmenu">

  export type MenuOrderByWithAggregationInput = {
    idmenu?: SortOrder
    idusercreateAt?: SortOrder
    createdAt?: SortOrder
    iduserupdatedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    status?: SortOrder
    nome?: SortOrder
    _count?: MenuCountOrderByAggregateInput
    _avg?: MenuAvgOrderByAggregateInput
    _max?: MenuMaxOrderByAggregateInput
    _min?: MenuMinOrderByAggregateInput
    _sum?: MenuSumOrderByAggregateInput
  }

  export type MenuScalarWhereWithAggregatesInput = {
    AND?: MenuScalarWhereWithAggregatesInput | MenuScalarWhereWithAggregatesInput[]
    OR?: MenuScalarWhereWithAggregatesInput[]
    NOT?: MenuScalarWhereWithAggregatesInput | MenuScalarWhereWithAggregatesInput[]
    idmenu?: IntWithAggregatesFilter<"Menu"> | number
    idusercreateAt?: IntWithAggregatesFilter<"Menu"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Menu"> | Date | string
    iduserupdatedAt?: IntNullableWithAggregatesFilter<"Menu"> | number | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Menu"> | Date | string | null
    status?: StringWithAggregatesFilter<"Menu"> | string
    nome?: StringWithAggregatesFilter<"Menu"> | string
  }

  export type MenuitemWhereInput = {
    AND?: MenuitemWhereInput | MenuitemWhereInput[]
    OR?: MenuitemWhereInput[]
    NOT?: MenuitemWhereInput | MenuitemWhereInput[]
    idmenuitem?: IntFilter<"Menuitem"> | number
    idmenu?: IntFilter<"Menuitem"> | number
    seq?: IntFilter<"Menuitem"> | number
    titulo?: StringFilter<"Menuitem"> | string
    url?: StringFilter<"Menuitem"> | string
    icon?: StringFilter<"Menuitem"> | string
    idusercreateAt?: IntFilter<"Menuitem"> | number
    createdAt?: DateTimeFilter<"Menuitem"> | Date | string
    iduserupdatedAt?: IntNullableFilter<"Menuitem"> | number | null
    updatedAt?: DateTimeNullableFilter<"Menuitem"> | Date | string | null
    status?: StringFilter<"Menuitem"> | string
    menu?: XOR<MenuRelationFilter, MenuWhereInput>
  }

  export type MenuitemOrderByWithRelationInput = {
    idmenuitem?: SortOrder
    idmenu?: SortOrder
    seq?: SortOrder
    titulo?: SortOrder
    url?: SortOrder
    icon?: SortOrder
    idusercreateAt?: SortOrder
    createdAt?: SortOrder
    iduserupdatedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    status?: SortOrder
    menu?: MenuOrderByWithRelationInput
  }

  export type MenuitemWhereUniqueInput = Prisma.AtLeast<{
    idmenuitem?: number
    AND?: MenuitemWhereInput | MenuitemWhereInput[]
    OR?: MenuitemWhereInput[]
    NOT?: MenuitemWhereInput | MenuitemWhereInput[]
    idmenu?: IntFilter<"Menuitem"> | number
    seq?: IntFilter<"Menuitem"> | number
    titulo?: StringFilter<"Menuitem"> | string
    url?: StringFilter<"Menuitem"> | string
    icon?: StringFilter<"Menuitem"> | string
    idusercreateAt?: IntFilter<"Menuitem"> | number
    createdAt?: DateTimeFilter<"Menuitem"> | Date | string
    iduserupdatedAt?: IntNullableFilter<"Menuitem"> | number | null
    updatedAt?: DateTimeNullableFilter<"Menuitem"> | Date | string | null
    status?: StringFilter<"Menuitem"> | string
    menu?: XOR<MenuRelationFilter, MenuWhereInput>
  }, "idmenuitem">

  export type MenuitemOrderByWithAggregationInput = {
    idmenuitem?: SortOrder
    idmenu?: SortOrder
    seq?: SortOrder
    titulo?: SortOrder
    url?: SortOrder
    icon?: SortOrder
    idusercreateAt?: SortOrder
    createdAt?: SortOrder
    iduserupdatedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    status?: SortOrder
    _count?: MenuitemCountOrderByAggregateInput
    _avg?: MenuitemAvgOrderByAggregateInput
    _max?: MenuitemMaxOrderByAggregateInput
    _min?: MenuitemMinOrderByAggregateInput
    _sum?: MenuitemSumOrderByAggregateInput
  }

  export type MenuitemScalarWhereWithAggregatesInput = {
    AND?: MenuitemScalarWhereWithAggregatesInput | MenuitemScalarWhereWithAggregatesInput[]
    OR?: MenuitemScalarWhereWithAggregatesInput[]
    NOT?: MenuitemScalarWhereWithAggregatesInput | MenuitemScalarWhereWithAggregatesInput[]
    idmenuitem?: IntWithAggregatesFilter<"Menuitem"> | number
    idmenu?: IntWithAggregatesFilter<"Menuitem"> | number
    seq?: IntWithAggregatesFilter<"Menuitem"> | number
    titulo?: StringWithAggregatesFilter<"Menuitem"> | string
    url?: StringWithAggregatesFilter<"Menuitem"> | string
    icon?: StringWithAggregatesFilter<"Menuitem"> | string
    idusercreateAt?: IntWithAggregatesFilter<"Menuitem"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Menuitem"> | Date | string
    iduserupdatedAt?: IntNullableWithAggregatesFilter<"Menuitem"> | number | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Menuitem"> | Date | string | null
    status?: StringWithAggregatesFilter<"Menuitem"> | string
  }

  export type ColunaWhereInput = {
    AND?: ColunaWhereInput | ColunaWhereInput[]
    OR?: ColunaWhereInput[]
    NOT?: ColunaWhereInput | ColunaWhereInput[]
    idcoluna?: IntFilter<"Coluna"> | number
    programa?: StringFilter<"Coluna"> | string
    field?: StringFilter<"Coluna"> | string
    header?: StringFilter<"Coluna"> | string
    style?: StringFilter<"Coluna"> | string
    type?: StringFilter<"Coluna"> | string
    agregado1?: StringNullableFilter<"Coluna"> | string | null
    agregado2?: StringNullableFilter<"Coluna"> | string | null
    idusercreateAt?: IntFilter<"Coluna"> | number
    createdAt?: DateTimeFilter<"Coluna"> | Date | string
    iduserupdatedAt?: IntNullableFilter<"Coluna"> | number | null
    updatedAt?: DateTimeNullableFilter<"Coluna"> | Date | string | null
    status?: StringFilter<"Coluna"> | string
    ordem?: IntFilter<"Coluna"> | number
    ordena?: StringFilter<"Coluna"> | string
    filtra?: BoolFilter<"Coluna"> | boolean
    Usuariocoluna?: UsuariocolunaListRelationFilter
  }

  export type ColunaOrderByWithRelationInput = {
    idcoluna?: SortOrder
    programa?: SortOrder
    field?: SortOrder
    header?: SortOrder
    style?: SortOrder
    type?: SortOrder
    agregado1?: SortOrderInput | SortOrder
    agregado2?: SortOrderInput | SortOrder
    idusercreateAt?: SortOrder
    createdAt?: SortOrder
    iduserupdatedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    status?: SortOrder
    ordem?: SortOrder
    ordena?: SortOrder
    filtra?: SortOrder
    Usuariocoluna?: UsuariocolunaOrderByRelationAggregateInput
  }

  export type ColunaWhereUniqueInput = Prisma.AtLeast<{
    idcoluna?: number
    AND?: ColunaWhereInput | ColunaWhereInput[]
    OR?: ColunaWhereInput[]
    NOT?: ColunaWhereInput | ColunaWhereInput[]
    programa?: StringFilter<"Coluna"> | string
    field?: StringFilter<"Coluna"> | string
    header?: StringFilter<"Coluna"> | string
    style?: StringFilter<"Coluna"> | string
    type?: StringFilter<"Coluna"> | string
    agregado1?: StringNullableFilter<"Coluna"> | string | null
    agregado2?: StringNullableFilter<"Coluna"> | string | null
    idusercreateAt?: IntFilter<"Coluna"> | number
    createdAt?: DateTimeFilter<"Coluna"> | Date | string
    iduserupdatedAt?: IntNullableFilter<"Coluna"> | number | null
    updatedAt?: DateTimeNullableFilter<"Coluna"> | Date | string | null
    status?: StringFilter<"Coluna"> | string
    ordem?: IntFilter<"Coluna"> | number
    ordena?: StringFilter<"Coluna"> | string
    filtra?: BoolFilter<"Coluna"> | boolean
    Usuariocoluna?: UsuariocolunaListRelationFilter
  }, "idcoluna">

  export type ColunaOrderByWithAggregationInput = {
    idcoluna?: SortOrder
    programa?: SortOrder
    field?: SortOrder
    header?: SortOrder
    style?: SortOrder
    type?: SortOrder
    agregado1?: SortOrderInput | SortOrder
    agregado2?: SortOrderInput | SortOrder
    idusercreateAt?: SortOrder
    createdAt?: SortOrder
    iduserupdatedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    status?: SortOrder
    ordem?: SortOrder
    ordena?: SortOrder
    filtra?: SortOrder
    _count?: ColunaCountOrderByAggregateInput
    _avg?: ColunaAvgOrderByAggregateInput
    _max?: ColunaMaxOrderByAggregateInput
    _min?: ColunaMinOrderByAggregateInput
    _sum?: ColunaSumOrderByAggregateInput
  }

  export type ColunaScalarWhereWithAggregatesInput = {
    AND?: ColunaScalarWhereWithAggregatesInput | ColunaScalarWhereWithAggregatesInput[]
    OR?: ColunaScalarWhereWithAggregatesInput[]
    NOT?: ColunaScalarWhereWithAggregatesInput | ColunaScalarWhereWithAggregatesInput[]
    idcoluna?: IntWithAggregatesFilter<"Coluna"> | number
    programa?: StringWithAggregatesFilter<"Coluna"> | string
    field?: StringWithAggregatesFilter<"Coluna"> | string
    header?: StringWithAggregatesFilter<"Coluna"> | string
    style?: StringWithAggregatesFilter<"Coluna"> | string
    type?: StringWithAggregatesFilter<"Coluna"> | string
    agregado1?: StringNullableWithAggregatesFilter<"Coluna"> | string | null
    agregado2?: StringNullableWithAggregatesFilter<"Coluna"> | string | null
    idusercreateAt?: IntWithAggregatesFilter<"Coluna"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Coluna"> | Date | string
    iduserupdatedAt?: IntNullableWithAggregatesFilter<"Coluna"> | number | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Coluna"> | Date | string | null
    status?: StringWithAggregatesFilter<"Coluna"> | string
    ordem?: IntWithAggregatesFilter<"Coluna"> | number
    ordena?: StringWithAggregatesFilter<"Coluna"> | string
    filtra?: BoolWithAggregatesFilter<"Coluna"> | boolean
  }

  export type UsuariocolunaWhereInput = {
    AND?: UsuariocolunaWhereInput | UsuariocolunaWhereInput[]
    OR?: UsuariocolunaWhereInput[]
    NOT?: UsuariocolunaWhereInput | UsuariocolunaWhereInput[]
    idusuariocoluna?: IntFilter<"Usuariocoluna"> | number
    idcoluna?: IntFilter<"Usuariocoluna"> | number
    idusercreateAt?: IntFilter<"Usuariocoluna"> | number
    createdAt?: DateTimeFilter<"Usuariocoluna"> | Date | string
    iduserupdatedAt?: IntNullableFilter<"Usuariocoluna"> | number | null
    updatedAt?: DateTimeNullableFilter<"Usuariocoluna"> | Date | string | null
    status?: StringFilter<"Usuariocoluna"> | string
    idusuario?: IntFilter<"Usuariocoluna"> | number
    coluna?: XOR<ColunaRelationFilter, ColunaWhereInput>
  }

  export type UsuariocolunaOrderByWithRelationInput = {
    idusuariocoluna?: SortOrder
    idcoluna?: SortOrder
    idusercreateAt?: SortOrder
    createdAt?: SortOrder
    iduserupdatedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    status?: SortOrder
    idusuario?: SortOrder
    coluna?: ColunaOrderByWithRelationInput
  }

  export type UsuariocolunaWhereUniqueInput = Prisma.AtLeast<{
    idusuariocoluna?: number
    AND?: UsuariocolunaWhereInput | UsuariocolunaWhereInput[]
    OR?: UsuariocolunaWhereInput[]
    NOT?: UsuariocolunaWhereInput | UsuariocolunaWhereInput[]
    idcoluna?: IntFilter<"Usuariocoluna"> | number
    idusercreateAt?: IntFilter<"Usuariocoluna"> | number
    createdAt?: DateTimeFilter<"Usuariocoluna"> | Date | string
    iduserupdatedAt?: IntNullableFilter<"Usuariocoluna"> | number | null
    updatedAt?: DateTimeNullableFilter<"Usuariocoluna"> | Date | string | null
    status?: StringFilter<"Usuariocoluna"> | string
    idusuario?: IntFilter<"Usuariocoluna"> | number
    coluna?: XOR<ColunaRelationFilter, ColunaWhereInput>
  }, "idusuariocoluna">

  export type UsuariocolunaOrderByWithAggregationInput = {
    idusuariocoluna?: SortOrder
    idcoluna?: SortOrder
    idusercreateAt?: SortOrder
    createdAt?: SortOrder
    iduserupdatedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    status?: SortOrder
    idusuario?: SortOrder
    _count?: UsuariocolunaCountOrderByAggregateInput
    _avg?: UsuariocolunaAvgOrderByAggregateInput
    _max?: UsuariocolunaMaxOrderByAggregateInput
    _min?: UsuariocolunaMinOrderByAggregateInput
    _sum?: UsuariocolunaSumOrderByAggregateInput
  }

  export type UsuariocolunaScalarWhereWithAggregatesInput = {
    AND?: UsuariocolunaScalarWhereWithAggregatesInput | UsuariocolunaScalarWhereWithAggregatesInput[]
    OR?: UsuariocolunaScalarWhereWithAggregatesInput[]
    NOT?: UsuariocolunaScalarWhereWithAggregatesInput | UsuariocolunaScalarWhereWithAggregatesInput[]
    idusuariocoluna?: IntWithAggregatesFilter<"Usuariocoluna"> | number
    idcoluna?: IntWithAggregatesFilter<"Usuariocoluna"> | number
    idusercreateAt?: IntWithAggregatesFilter<"Usuariocoluna"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Usuariocoluna"> | Date | string
    iduserupdatedAt?: IntNullableWithAggregatesFilter<"Usuariocoluna"> | number | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Usuariocoluna"> | Date | string | null
    status?: StringWithAggregatesFilter<"Usuariocoluna"> | string
    idusuario?: IntWithAggregatesFilter<"Usuariocoluna"> | number
  }

  export type UnidadeWhereInput = {
    AND?: UnidadeWhereInput | UnidadeWhereInput[]
    OR?: UnidadeWhereInput[]
    NOT?: UnidadeWhereInput | UnidadeWhereInput[]
    idunidade?: IntFilter<"Unidade"> | number
    nome?: StringFilter<"Unidade"> | string
    idusercreateAt?: IntFilter<"Unidade"> | number
    createdAt?: DateTimeFilter<"Unidade"> | Date | string
    iduserupdatedAt?: IntNullableFilter<"Unidade"> | number | null
    updatedAt?: DateTimeNullableFilter<"Unidade"> | Date | string | null
    status?: StringFilter<"Unidade"> | string
    idimovel?: IntFilter<"Unidade"> | number
    imagem1?: BytesNullableFilter<"Unidade"> | Buffer | null
    imagem2?: BytesNullableFilter<"Unidade"> | Buffer | null
    Usuario?: UsuarioListRelationFilter
  }

  export type UnidadeOrderByWithRelationInput = {
    idunidade?: SortOrder
    nome?: SortOrder
    idusercreateAt?: SortOrder
    createdAt?: SortOrder
    iduserupdatedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    status?: SortOrder
    idimovel?: SortOrder
    imagem1?: SortOrderInput | SortOrder
    imagem2?: SortOrderInput | SortOrder
    Usuario?: UsuarioOrderByRelationAggregateInput
  }

  export type UnidadeWhereUniqueInput = Prisma.AtLeast<{
    idunidade?: number
    AND?: UnidadeWhereInput | UnidadeWhereInput[]
    OR?: UnidadeWhereInput[]
    NOT?: UnidadeWhereInput | UnidadeWhereInput[]
    nome?: StringFilter<"Unidade"> | string
    idusercreateAt?: IntFilter<"Unidade"> | number
    createdAt?: DateTimeFilter<"Unidade"> | Date | string
    iduserupdatedAt?: IntNullableFilter<"Unidade"> | number | null
    updatedAt?: DateTimeNullableFilter<"Unidade"> | Date | string | null
    status?: StringFilter<"Unidade"> | string
    idimovel?: IntFilter<"Unidade"> | number
    imagem1?: BytesNullableFilter<"Unidade"> | Buffer | null
    imagem2?: BytesNullableFilter<"Unidade"> | Buffer | null
    Usuario?: UsuarioListRelationFilter
  }, "idunidade">

  export type UnidadeOrderByWithAggregationInput = {
    idunidade?: SortOrder
    nome?: SortOrder
    idusercreateAt?: SortOrder
    createdAt?: SortOrder
    iduserupdatedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    status?: SortOrder
    idimovel?: SortOrder
    imagem1?: SortOrderInput | SortOrder
    imagem2?: SortOrderInput | SortOrder
    _count?: UnidadeCountOrderByAggregateInput
    _avg?: UnidadeAvgOrderByAggregateInput
    _max?: UnidadeMaxOrderByAggregateInput
    _min?: UnidadeMinOrderByAggregateInput
    _sum?: UnidadeSumOrderByAggregateInput
  }

  export type UnidadeScalarWhereWithAggregatesInput = {
    AND?: UnidadeScalarWhereWithAggregatesInput | UnidadeScalarWhereWithAggregatesInput[]
    OR?: UnidadeScalarWhereWithAggregatesInput[]
    NOT?: UnidadeScalarWhereWithAggregatesInput | UnidadeScalarWhereWithAggregatesInput[]
    idunidade?: IntWithAggregatesFilter<"Unidade"> | number
    nome?: StringWithAggregatesFilter<"Unidade"> | string
    idusercreateAt?: IntWithAggregatesFilter<"Unidade"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Unidade"> | Date | string
    iduserupdatedAt?: IntNullableWithAggregatesFilter<"Unidade"> | number | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Unidade"> | Date | string | null
    status?: StringWithAggregatesFilter<"Unidade"> | string
    idimovel?: IntWithAggregatesFilter<"Unidade"> | number
    imagem1?: BytesNullableWithAggregatesFilter<"Unidade"> | Buffer | null
    imagem2?: BytesNullableWithAggregatesFilter<"Unidade"> | Buffer | null
  }

  export type UsuarioCreateInput = {
    nome: string
    email: string
    cpf?: string | null
    dtnascimento?: Date | string | null
    sexo?: string | null
    idusercreateAt: number
    createdAt?: Date | string
    iduserupdatedAt?: number | null
    updatedAt?: Date | string | null
    status?: string
    senha: string
    trocasenha?: boolean
    iddepartamento: number
    celular?: string | null
    ramaln?: string | null
    chatid?: string | null
    ti?: boolean
    contrato?: boolean
    contratost?: boolean
    vtodoscontratos?: boolean
    vtodoshoraextra?: boolean
    ccontratos?: boolean
    choraextra?: boolean
    nivel?: NivelCreateNestedOneWithoutUsuarioInput
    menu?: MenuCreateNestedOneWithoutUsuarioInput
    unidade?: UnidadeCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    idusuario?: number
    nome: string
    email: string
    cpf?: string | null
    dtnascimento?: Date | string | null
    sexo?: string | null
    idusercreateAt: number
    createdAt?: Date | string
    iduserupdatedAt?: number | null
    updatedAt?: Date | string | null
    status?: string
    senha: string
    trocasenha?: boolean
    iddepartamento: number
    idmenu?: number
    celular?: string | null
    ramaln?: string | null
    idnivel?: number
    chatid?: string | null
    ti?: boolean
    contrato?: boolean
    contratost?: boolean
    idunidade?: number
    vtodoscontratos?: boolean
    vtodoshoraextra?: boolean
    ccontratos?: boolean
    choraextra?: boolean
  }

  export type UsuarioUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    dtnascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sexo?: NullableStringFieldUpdateOperationsInput | string | null
    idusercreateAt?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    iduserupdatedAt?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    trocasenha?: BoolFieldUpdateOperationsInput | boolean
    iddepartamento?: IntFieldUpdateOperationsInput | number
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    ramaln?: NullableStringFieldUpdateOperationsInput | string | null
    chatid?: NullableStringFieldUpdateOperationsInput | string | null
    ti?: BoolFieldUpdateOperationsInput | boolean
    contrato?: BoolFieldUpdateOperationsInput | boolean
    contratost?: BoolFieldUpdateOperationsInput | boolean
    vtodoscontratos?: BoolFieldUpdateOperationsInput | boolean
    vtodoshoraextra?: BoolFieldUpdateOperationsInput | boolean
    ccontratos?: BoolFieldUpdateOperationsInput | boolean
    choraextra?: BoolFieldUpdateOperationsInput | boolean
    nivel?: NivelUpdateOneRequiredWithoutUsuarioNestedInput
    menu?: MenuUpdateOneRequiredWithoutUsuarioNestedInput
    unidade?: UnidadeUpdateOneRequiredWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    idusuario?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    dtnascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sexo?: NullableStringFieldUpdateOperationsInput | string | null
    idusercreateAt?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    iduserupdatedAt?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    trocasenha?: BoolFieldUpdateOperationsInput | boolean
    iddepartamento?: IntFieldUpdateOperationsInput | number
    idmenu?: IntFieldUpdateOperationsInput | number
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    ramaln?: NullableStringFieldUpdateOperationsInput | string | null
    idnivel?: IntFieldUpdateOperationsInput | number
    chatid?: NullableStringFieldUpdateOperationsInput | string | null
    ti?: BoolFieldUpdateOperationsInput | boolean
    contrato?: BoolFieldUpdateOperationsInput | boolean
    contratost?: BoolFieldUpdateOperationsInput | boolean
    idunidade?: IntFieldUpdateOperationsInput | number
    vtodoscontratos?: BoolFieldUpdateOperationsInput | boolean
    vtodoshoraextra?: BoolFieldUpdateOperationsInput | boolean
    ccontratos?: BoolFieldUpdateOperationsInput | boolean
    choraextra?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UsuarioCreateManyInput = {
    nome: string
    email: string
    cpf?: string | null
    dtnascimento?: Date | string | null
    sexo?: string | null
    idusercreateAt: number
    createdAt?: Date | string
    iduserupdatedAt?: number | null
    updatedAt?: Date | string | null
    status?: string
    senha: string
    trocasenha?: boolean
    iddepartamento: number
    idmenu?: number
    celular?: string | null
    ramaln?: string | null
    idnivel?: number
    chatid?: string | null
    ti?: boolean
    contrato?: boolean
    contratost?: boolean
    idunidade?: number
    vtodoscontratos?: boolean
    vtodoshoraextra?: boolean
    ccontratos?: boolean
    choraextra?: boolean
  }

  export type UsuarioUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    dtnascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sexo?: NullableStringFieldUpdateOperationsInput | string | null
    idusercreateAt?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    iduserupdatedAt?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    trocasenha?: BoolFieldUpdateOperationsInput | boolean
    iddepartamento?: IntFieldUpdateOperationsInput | number
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    ramaln?: NullableStringFieldUpdateOperationsInput | string | null
    chatid?: NullableStringFieldUpdateOperationsInput | string | null
    ti?: BoolFieldUpdateOperationsInput | boolean
    contrato?: BoolFieldUpdateOperationsInput | boolean
    contratost?: BoolFieldUpdateOperationsInput | boolean
    vtodoscontratos?: BoolFieldUpdateOperationsInput | boolean
    vtodoshoraextra?: BoolFieldUpdateOperationsInput | boolean
    ccontratos?: BoolFieldUpdateOperationsInput | boolean
    choraextra?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UsuarioUncheckedUpdateManyInput = {
    idusuario?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    dtnascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sexo?: NullableStringFieldUpdateOperationsInput | string | null
    idusercreateAt?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    iduserupdatedAt?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    trocasenha?: BoolFieldUpdateOperationsInput | boolean
    iddepartamento?: IntFieldUpdateOperationsInput | number
    idmenu?: IntFieldUpdateOperationsInput | number
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    ramaln?: NullableStringFieldUpdateOperationsInput | string | null
    idnivel?: IntFieldUpdateOperationsInput | number
    chatid?: NullableStringFieldUpdateOperationsInput | string | null
    ti?: BoolFieldUpdateOperationsInput | boolean
    contrato?: BoolFieldUpdateOperationsInput | boolean
    contratost?: BoolFieldUpdateOperationsInput | boolean
    idunidade?: IntFieldUpdateOperationsInput | number
    vtodoscontratos?: BoolFieldUpdateOperationsInput | boolean
    vtodoshoraextra?: BoolFieldUpdateOperationsInput | boolean
    ccontratos?: BoolFieldUpdateOperationsInput | boolean
    choraextra?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NivelCreateInput = {
    nome: string
    idusercreateAt: number
    createdAt?: Date | string
    iduserupdatedAt?: number | null
    updatedAt?: Date | string | null
    status?: string
    Usuario?: UsuarioCreateNestedManyWithoutNivelInput
  }

  export type NivelUncheckedCreateInput = {
    idnivel?: number
    nome: string
    idusercreateAt: number
    createdAt?: Date | string
    iduserupdatedAt?: number | null
    updatedAt?: Date | string | null
    status?: string
    Usuario?: UsuarioUncheckedCreateNestedManyWithoutNivelInput
  }

  export type NivelUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    idusercreateAt?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    iduserupdatedAt?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    Usuario?: UsuarioUpdateManyWithoutNivelNestedInput
  }

  export type NivelUncheckedUpdateInput = {
    idnivel?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    idusercreateAt?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    iduserupdatedAt?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    Usuario?: UsuarioUncheckedUpdateManyWithoutNivelNestedInput
  }

  export type NivelCreateManyInput = {
    nome: string
    idusercreateAt: number
    createdAt?: Date | string
    iduserupdatedAt?: number | null
    updatedAt?: Date | string | null
    status?: string
  }

  export type NivelUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    idusercreateAt?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    iduserupdatedAt?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type NivelUncheckedUpdateManyInput = {
    idnivel?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    idusercreateAt?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    iduserupdatedAt?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type LoginCreateInput = {
    email: string
    status?: string
    respsend: number
    iporigem: string
  }

  export type LoginUncheckedCreateInput = {
    idlogin?: number
    email: string
    status?: string
    respsend: number
    iporigem: string
  }

  export type LoginUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    respsend?: IntFieldUpdateOperationsInput | number
    iporigem?: StringFieldUpdateOperationsInput | string
  }

  export type LoginUncheckedUpdateInput = {
    idlogin?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    respsend?: IntFieldUpdateOperationsInput | number
    iporigem?: StringFieldUpdateOperationsInput | string
  }

  export type LoginCreateManyInput = {
    email: string
    status?: string
    respsend: number
    iporigem: string
  }

  export type LoginUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    respsend?: IntFieldUpdateOperationsInput | number
    iporigem?: StringFieldUpdateOperationsInput | string
  }

  export type LoginUncheckedUpdateManyInput = {
    idlogin?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    respsend?: IntFieldUpdateOperationsInput | number
    iporigem?: StringFieldUpdateOperationsInput | string
  }

  export type MenuCreateInput = {
    idusercreateAt: number
    createdAt?: Date | string
    iduserupdatedAt?: number | null
    updatedAt?: Date | string | null
    status?: string
    nome: string
    Menuitem?: MenuitemCreateNestedManyWithoutMenuInput
    Usuario?: UsuarioCreateNestedManyWithoutMenuInput
  }

  export type MenuUncheckedCreateInput = {
    idmenu?: number
    idusercreateAt: number
    createdAt?: Date | string
    iduserupdatedAt?: number | null
    updatedAt?: Date | string | null
    status?: string
    nome: string
    Menuitem?: MenuitemUncheckedCreateNestedManyWithoutMenuInput
    Usuario?: UsuarioUncheckedCreateNestedManyWithoutMenuInput
  }

  export type MenuUpdateInput = {
    idusercreateAt?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    iduserupdatedAt?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    Menuitem?: MenuitemUpdateManyWithoutMenuNestedInput
    Usuario?: UsuarioUpdateManyWithoutMenuNestedInput
  }

  export type MenuUncheckedUpdateInput = {
    idmenu?: IntFieldUpdateOperationsInput | number
    idusercreateAt?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    iduserupdatedAt?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    Menuitem?: MenuitemUncheckedUpdateManyWithoutMenuNestedInput
    Usuario?: UsuarioUncheckedUpdateManyWithoutMenuNestedInput
  }

  export type MenuCreateManyInput = {
    idusercreateAt: number
    createdAt?: Date | string
    iduserupdatedAt?: number | null
    updatedAt?: Date | string | null
    status?: string
    nome: string
  }

  export type MenuUpdateManyMutationInput = {
    idusercreateAt?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    iduserupdatedAt?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type MenuUncheckedUpdateManyInput = {
    idmenu?: IntFieldUpdateOperationsInput | number
    idusercreateAt?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    iduserupdatedAt?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type MenuitemCreateInput = {
    seq: number
    titulo: string
    url: string
    icon: string
    idusercreateAt: number
    createdAt?: Date | string
    iduserupdatedAt?: number | null
    updatedAt?: Date | string | null
    status?: string
    menu: MenuCreateNestedOneWithoutMenuitemInput
  }

  export type MenuitemUncheckedCreateInput = {
    idmenuitem?: number
    idmenu: number
    seq: number
    titulo: string
    url: string
    icon: string
    idusercreateAt: number
    createdAt?: Date | string
    iduserupdatedAt?: number | null
    updatedAt?: Date | string | null
    status?: string
  }

  export type MenuitemUpdateInput = {
    seq?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    idusercreateAt?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    iduserupdatedAt?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    menu?: MenuUpdateOneRequiredWithoutMenuitemNestedInput
  }

  export type MenuitemUncheckedUpdateInput = {
    idmenuitem?: IntFieldUpdateOperationsInput | number
    idmenu?: IntFieldUpdateOperationsInput | number
    seq?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    idusercreateAt?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    iduserupdatedAt?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type MenuitemCreateManyInput = {
    idmenu: number
    seq: number
    titulo: string
    url: string
    icon: string
    idusercreateAt: number
    createdAt?: Date | string
    iduserupdatedAt?: number | null
    updatedAt?: Date | string | null
    status?: string
  }

  export type MenuitemUpdateManyMutationInput = {
    seq?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    idusercreateAt?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    iduserupdatedAt?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type MenuitemUncheckedUpdateManyInput = {
    idmenuitem?: IntFieldUpdateOperationsInput | number
    idmenu?: IntFieldUpdateOperationsInput | number
    seq?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    idusercreateAt?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    iduserupdatedAt?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ColunaCreateInput = {
    programa: string
    field: string
    header: string
    style: string
    type: string
    agregado1?: string | null
    agregado2?: string | null
    idusercreateAt: number
    createdAt?: Date | string
    iduserupdatedAt?: number | null
    updatedAt?: Date | string | null
    status?: string
    ordem?: number
    ordena?: string
    filtra?: boolean
    Usuariocoluna?: UsuariocolunaCreateNestedManyWithoutColunaInput
  }

  export type ColunaUncheckedCreateInput = {
    idcoluna?: number
    programa: string
    field: string
    header: string
    style: string
    type: string
    agregado1?: string | null
    agregado2?: string | null
    idusercreateAt: number
    createdAt?: Date | string
    iduserupdatedAt?: number | null
    updatedAt?: Date | string | null
    status?: string
    ordem?: number
    ordena?: string
    filtra?: boolean
    Usuariocoluna?: UsuariocolunaUncheckedCreateNestedManyWithoutColunaInput
  }

  export type ColunaUpdateInput = {
    programa?: StringFieldUpdateOperationsInput | string
    field?: StringFieldUpdateOperationsInput | string
    header?: StringFieldUpdateOperationsInput | string
    style?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    agregado1?: NullableStringFieldUpdateOperationsInput | string | null
    agregado2?: NullableStringFieldUpdateOperationsInput | string | null
    idusercreateAt?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    iduserupdatedAt?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    ordena?: StringFieldUpdateOperationsInput | string
    filtra?: BoolFieldUpdateOperationsInput | boolean
    Usuariocoluna?: UsuariocolunaUpdateManyWithoutColunaNestedInput
  }

  export type ColunaUncheckedUpdateInput = {
    idcoluna?: IntFieldUpdateOperationsInput | number
    programa?: StringFieldUpdateOperationsInput | string
    field?: StringFieldUpdateOperationsInput | string
    header?: StringFieldUpdateOperationsInput | string
    style?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    agregado1?: NullableStringFieldUpdateOperationsInput | string | null
    agregado2?: NullableStringFieldUpdateOperationsInput | string | null
    idusercreateAt?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    iduserupdatedAt?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    ordena?: StringFieldUpdateOperationsInput | string
    filtra?: BoolFieldUpdateOperationsInput | boolean
    Usuariocoluna?: UsuariocolunaUncheckedUpdateManyWithoutColunaNestedInput
  }

  export type ColunaCreateManyInput = {
    programa: string
    field: string
    header: string
    style: string
    type: string
    agregado1?: string | null
    agregado2?: string | null
    idusercreateAt: number
    createdAt?: Date | string
    iduserupdatedAt?: number | null
    updatedAt?: Date | string | null
    status?: string
    ordem?: number
    ordena?: string
    filtra?: boolean
  }

  export type ColunaUpdateManyMutationInput = {
    programa?: StringFieldUpdateOperationsInput | string
    field?: StringFieldUpdateOperationsInput | string
    header?: StringFieldUpdateOperationsInput | string
    style?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    agregado1?: NullableStringFieldUpdateOperationsInput | string | null
    agregado2?: NullableStringFieldUpdateOperationsInput | string | null
    idusercreateAt?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    iduserupdatedAt?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    ordena?: StringFieldUpdateOperationsInput | string
    filtra?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ColunaUncheckedUpdateManyInput = {
    idcoluna?: IntFieldUpdateOperationsInput | number
    programa?: StringFieldUpdateOperationsInput | string
    field?: StringFieldUpdateOperationsInput | string
    header?: StringFieldUpdateOperationsInput | string
    style?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    agregado1?: NullableStringFieldUpdateOperationsInput | string | null
    agregado2?: NullableStringFieldUpdateOperationsInput | string | null
    idusercreateAt?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    iduserupdatedAt?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    ordena?: StringFieldUpdateOperationsInput | string
    filtra?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UsuariocolunaCreateInput = {
    idusercreateAt: number
    createdAt?: Date | string
    iduserupdatedAt?: number | null
    updatedAt?: Date | string | null
    status?: string
    idusuario: number
    coluna?: ColunaCreateNestedOneWithoutUsuariocolunaInput
  }

  export type UsuariocolunaUncheckedCreateInput = {
    idusuariocoluna?: number
    idcoluna?: number
    idusercreateAt: number
    createdAt?: Date | string
    iduserupdatedAt?: number | null
    updatedAt?: Date | string | null
    status?: string
    idusuario: number
  }

  export type UsuariocolunaUpdateInput = {
    idusercreateAt?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    iduserupdatedAt?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    idusuario?: IntFieldUpdateOperationsInput | number
    coluna?: ColunaUpdateOneRequiredWithoutUsuariocolunaNestedInput
  }

  export type UsuariocolunaUncheckedUpdateInput = {
    idusuariocoluna?: IntFieldUpdateOperationsInput | number
    idcoluna?: IntFieldUpdateOperationsInput | number
    idusercreateAt?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    iduserupdatedAt?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    idusuario?: IntFieldUpdateOperationsInput | number
  }

  export type UsuariocolunaCreateManyInput = {
    idcoluna?: number
    idusercreateAt: number
    createdAt?: Date | string
    iduserupdatedAt?: number | null
    updatedAt?: Date | string | null
    status?: string
    idusuario: number
  }

  export type UsuariocolunaUpdateManyMutationInput = {
    idusercreateAt?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    iduserupdatedAt?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    idusuario?: IntFieldUpdateOperationsInput | number
  }

  export type UsuariocolunaUncheckedUpdateManyInput = {
    idusuariocoluna?: IntFieldUpdateOperationsInput | number
    idcoluna?: IntFieldUpdateOperationsInput | number
    idusercreateAt?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    iduserupdatedAt?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    idusuario?: IntFieldUpdateOperationsInput | number
  }

  export type UnidadeCreateInput = {
    nome: string
    idusercreateAt: number
    createdAt?: Date | string
    iduserupdatedAt?: number | null
    updatedAt?: Date | string | null
    status?: string
    idimovel?: number
    imagem1?: Buffer | null
    imagem2?: Buffer | null
    Usuario?: UsuarioCreateNestedManyWithoutUnidadeInput
  }

  export type UnidadeUncheckedCreateInput = {
    idunidade?: number
    nome: string
    idusercreateAt: number
    createdAt?: Date | string
    iduserupdatedAt?: number | null
    updatedAt?: Date | string | null
    status?: string
    idimovel?: number
    imagem1?: Buffer | null
    imagem2?: Buffer | null
    Usuario?: UsuarioUncheckedCreateNestedManyWithoutUnidadeInput
  }

  export type UnidadeUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    idusercreateAt?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    iduserupdatedAt?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    idimovel?: IntFieldUpdateOperationsInput | number
    imagem1?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    imagem2?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    Usuario?: UsuarioUpdateManyWithoutUnidadeNestedInput
  }

  export type UnidadeUncheckedUpdateInput = {
    idunidade?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    idusercreateAt?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    iduserupdatedAt?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    idimovel?: IntFieldUpdateOperationsInput | number
    imagem1?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    imagem2?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    Usuario?: UsuarioUncheckedUpdateManyWithoutUnidadeNestedInput
  }

  export type UnidadeCreateManyInput = {
    nome: string
    idusercreateAt: number
    createdAt?: Date | string
    iduserupdatedAt?: number | null
    updatedAt?: Date | string | null
    status?: string
    idimovel?: number
    imagem1?: Buffer | null
    imagem2?: Buffer | null
  }

  export type UnidadeUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    idusercreateAt?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    iduserupdatedAt?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    idimovel?: IntFieldUpdateOperationsInput | number
    imagem1?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    imagem2?: NullableBytesFieldUpdateOperationsInput | Buffer | null
  }

  export type UnidadeUncheckedUpdateManyInput = {
    idunidade?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    idusercreateAt?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    iduserupdatedAt?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    idimovel?: IntFieldUpdateOperationsInput | number
    imagem1?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    imagem2?: NullableBytesFieldUpdateOperationsInput | Buffer | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NivelRelationFilter = {
    is?: NivelWhereInput
    isNot?: NivelWhereInput
  }

  export type MenuRelationFilter = {
    is?: MenuWhereInput
    isNot?: MenuWhereInput
  }

  export type UnidadeRelationFilter = {
    is?: UnidadeWhereInput
    isNot?: UnidadeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    idusuario?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    cpf?: SortOrder
    dtnascimento?: SortOrder
    sexo?: SortOrder
    idusercreateAt?: SortOrder
    createdAt?: SortOrder
    iduserupdatedAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    senha?: SortOrder
    trocasenha?: SortOrder
    iddepartamento?: SortOrder
    idmenu?: SortOrder
    celular?: SortOrder
    ramaln?: SortOrder
    idnivel?: SortOrder
    chatid?: SortOrder
    ti?: SortOrder
    contrato?: SortOrder
    contratost?: SortOrder
    idunidade?: SortOrder
    vtodoscontratos?: SortOrder
    vtodoshoraextra?: SortOrder
    ccontratos?: SortOrder
    choraextra?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    idusuario?: SortOrder
    idusercreateAt?: SortOrder
    iduserupdatedAt?: SortOrder
    iddepartamento?: SortOrder
    idmenu?: SortOrder
    idnivel?: SortOrder
    idunidade?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    idusuario?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    cpf?: SortOrder
    dtnascimento?: SortOrder
    sexo?: SortOrder
    idusercreateAt?: SortOrder
    createdAt?: SortOrder
    iduserupdatedAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    senha?: SortOrder
    trocasenha?: SortOrder
    iddepartamento?: SortOrder
    idmenu?: SortOrder
    celular?: SortOrder
    ramaln?: SortOrder
    idnivel?: SortOrder
    chatid?: SortOrder
    ti?: SortOrder
    contrato?: SortOrder
    contratost?: SortOrder
    idunidade?: SortOrder
    vtodoscontratos?: SortOrder
    vtodoshoraextra?: SortOrder
    ccontratos?: SortOrder
    choraextra?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    idusuario?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    cpf?: SortOrder
    dtnascimento?: SortOrder
    sexo?: SortOrder
    idusercreateAt?: SortOrder
    createdAt?: SortOrder
    iduserupdatedAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    senha?: SortOrder
    trocasenha?: SortOrder
    iddepartamento?: SortOrder
    idmenu?: SortOrder
    celular?: SortOrder
    ramaln?: SortOrder
    idnivel?: SortOrder
    chatid?: SortOrder
    ti?: SortOrder
    contrato?: SortOrder
    contratost?: SortOrder
    idunidade?: SortOrder
    vtodoscontratos?: SortOrder
    vtodoshoraextra?: SortOrder
    ccontratos?: SortOrder
    choraextra?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    idusuario?: SortOrder
    idusercreateAt?: SortOrder
    iduserupdatedAt?: SortOrder
    iddepartamento?: SortOrder
    idmenu?: SortOrder
    idnivel?: SortOrder
    idunidade?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UsuarioListRelationFilter = {
    every?: UsuarioWhereInput
    some?: UsuarioWhereInput
    none?: UsuarioWhereInput
  }

  export type UsuarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NivelCountOrderByAggregateInput = {
    idnivel?: SortOrder
    nome?: SortOrder
    idusercreateAt?: SortOrder
    createdAt?: SortOrder
    iduserupdatedAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
  }

  export type NivelAvgOrderByAggregateInput = {
    idnivel?: SortOrder
    idusercreateAt?: SortOrder
    iduserupdatedAt?: SortOrder
  }

  export type NivelMaxOrderByAggregateInput = {
    idnivel?: SortOrder
    nome?: SortOrder
    idusercreateAt?: SortOrder
    createdAt?: SortOrder
    iduserupdatedAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
  }

  export type NivelMinOrderByAggregateInput = {
    idnivel?: SortOrder
    nome?: SortOrder
    idusercreateAt?: SortOrder
    createdAt?: SortOrder
    iduserupdatedAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
  }

  export type NivelSumOrderByAggregateInput = {
    idnivel?: SortOrder
    idusercreateAt?: SortOrder
    iduserupdatedAt?: SortOrder
  }

  export type LoginCountOrderByAggregateInput = {
    idlogin?: SortOrder
    email?: SortOrder
    status?: SortOrder
    respsend?: SortOrder
    iporigem?: SortOrder
  }

  export type LoginAvgOrderByAggregateInput = {
    idlogin?: SortOrder
    respsend?: SortOrder
  }

  export type LoginMaxOrderByAggregateInput = {
    idlogin?: SortOrder
    email?: SortOrder
    status?: SortOrder
    respsend?: SortOrder
    iporigem?: SortOrder
  }

  export type LoginMinOrderByAggregateInput = {
    idlogin?: SortOrder
    email?: SortOrder
    status?: SortOrder
    respsend?: SortOrder
    iporigem?: SortOrder
  }

  export type LoginSumOrderByAggregateInput = {
    idlogin?: SortOrder
    respsend?: SortOrder
  }

  export type MenuitemListRelationFilter = {
    every?: MenuitemWhereInput
    some?: MenuitemWhereInput
    none?: MenuitemWhereInput
  }

  export type MenuitemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MenuCountOrderByAggregateInput = {
    idmenu?: SortOrder
    idusercreateAt?: SortOrder
    createdAt?: SortOrder
    iduserupdatedAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    nome?: SortOrder
  }

  export type MenuAvgOrderByAggregateInput = {
    idmenu?: SortOrder
    idusercreateAt?: SortOrder
    iduserupdatedAt?: SortOrder
  }

  export type MenuMaxOrderByAggregateInput = {
    idmenu?: SortOrder
    idusercreateAt?: SortOrder
    createdAt?: SortOrder
    iduserupdatedAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    nome?: SortOrder
  }

  export type MenuMinOrderByAggregateInput = {
    idmenu?: SortOrder
    idusercreateAt?: SortOrder
    createdAt?: SortOrder
    iduserupdatedAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    nome?: SortOrder
  }

  export type MenuSumOrderByAggregateInput = {
    idmenu?: SortOrder
    idusercreateAt?: SortOrder
    iduserupdatedAt?: SortOrder
  }

  export type MenuitemCountOrderByAggregateInput = {
    idmenuitem?: SortOrder
    idmenu?: SortOrder
    seq?: SortOrder
    titulo?: SortOrder
    url?: SortOrder
    icon?: SortOrder
    idusercreateAt?: SortOrder
    createdAt?: SortOrder
    iduserupdatedAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
  }

  export type MenuitemAvgOrderByAggregateInput = {
    idmenuitem?: SortOrder
    idmenu?: SortOrder
    seq?: SortOrder
    idusercreateAt?: SortOrder
    iduserupdatedAt?: SortOrder
  }

  export type MenuitemMaxOrderByAggregateInput = {
    idmenuitem?: SortOrder
    idmenu?: SortOrder
    seq?: SortOrder
    titulo?: SortOrder
    url?: SortOrder
    icon?: SortOrder
    idusercreateAt?: SortOrder
    createdAt?: SortOrder
    iduserupdatedAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
  }

  export type MenuitemMinOrderByAggregateInput = {
    idmenuitem?: SortOrder
    idmenu?: SortOrder
    seq?: SortOrder
    titulo?: SortOrder
    url?: SortOrder
    icon?: SortOrder
    idusercreateAt?: SortOrder
    createdAt?: SortOrder
    iduserupdatedAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
  }

  export type MenuitemSumOrderByAggregateInput = {
    idmenuitem?: SortOrder
    idmenu?: SortOrder
    seq?: SortOrder
    idusercreateAt?: SortOrder
    iduserupdatedAt?: SortOrder
  }

  export type UsuariocolunaListRelationFilter = {
    every?: UsuariocolunaWhereInput
    some?: UsuariocolunaWhereInput
    none?: UsuariocolunaWhereInput
  }

  export type UsuariocolunaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ColunaCountOrderByAggregateInput = {
    idcoluna?: SortOrder
    programa?: SortOrder
    field?: SortOrder
    header?: SortOrder
    style?: SortOrder
    type?: SortOrder
    agregado1?: SortOrder
    agregado2?: SortOrder
    idusercreateAt?: SortOrder
    createdAt?: SortOrder
    iduserupdatedAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    ordem?: SortOrder
    ordena?: SortOrder
    filtra?: SortOrder
  }

  export type ColunaAvgOrderByAggregateInput = {
    idcoluna?: SortOrder
    idusercreateAt?: SortOrder
    iduserupdatedAt?: SortOrder
    ordem?: SortOrder
  }

  export type ColunaMaxOrderByAggregateInput = {
    idcoluna?: SortOrder
    programa?: SortOrder
    field?: SortOrder
    header?: SortOrder
    style?: SortOrder
    type?: SortOrder
    agregado1?: SortOrder
    agregado2?: SortOrder
    idusercreateAt?: SortOrder
    createdAt?: SortOrder
    iduserupdatedAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    ordem?: SortOrder
    ordena?: SortOrder
    filtra?: SortOrder
  }

  export type ColunaMinOrderByAggregateInput = {
    idcoluna?: SortOrder
    programa?: SortOrder
    field?: SortOrder
    header?: SortOrder
    style?: SortOrder
    type?: SortOrder
    agregado1?: SortOrder
    agregado2?: SortOrder
    idusercreateAt?: SortOrder
    createdAt?: SortOrder
    iduserupdatedAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    ordem?: SortOrder
    ordena?: SortOrder
    filtra?: SortOrder
  }

  export type ColunaSumOrderByAggregateInput = {
    idcoluna?: SortOrder
    idusercreateAt?: SortOrder
    iduserupdatedAt?: SortOrder
    ordem?: SortOrder
  }

  export type ColunaRelationFilter = {
    is?: ColunaWhereInput
    isNot?: ColunaWhereInput
  }

  export type UsuariocolunaCountOrderByAggregateInput = {
    idusuariocoluna?: SortOrder
    idcoluna?: SortOrder
    idusercreateAt?: SortOrder
    createdAt?: SortOrder
    iduserupdatedAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    idusuario?: SortOrder
  }

  export type UsuariocolunaAvgOrderByAggregateInput = {
    idusuariocoluna?: SortOrder
    idcoluna?: SortOrder
    idusercreateAt?: SortOrder
    iduserupdatedAt?: SortOrder
    idusuario?: SortOrder
  }

  export type UsuariocolunaMaxOrderByAggregateInput = {
    idusuariocoluna?: SortOrder
    idcoluna?: SortOrder
    idusercreateAt?: SortOrder
    createdAt?: SortOrder
    iduserupdatedAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    idusuario?: SortOrder
  }

  export type UsuariocolunaMinOrderByAggregateInput = {
    idusuariocoluna?: SortOrder
    idcoluna?: SortOrder
    idusercreateAt?: SortOrder
    createdAt?: SortOrder
    iduserupdatedAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    idusuario?: SortOrder
  }

  export type UsuariocolunaSumOrderByAggregateInput = {
    idusuariocoluna?: SortOrder
    idcoluna?: SortOrder
    idusercreateAt?: SortOrder
    iduserupdatedAt?: SortOrder
    idusuario?: SortOrder
  }

  export type BytesNullableFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel> | null
    in?: Buffer[] | null
    notIn?: Buffer[] | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Buffer | null
  }

  export type UnidadeCountOrderByAggregateInput = {
    idunidade?: SortOrder
    nome?: SortOrder
    idusercreateAt?: SortOrder
    createdAt?: SortOrder
    iduserupdatedAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    idimovel?: SortOrder
    imagem1?: SortOrder
    imagem2?: SortOrder
  }

  export type UnidadeAvgOrderByAggregateInput = {
    idunidade?: SortOrder
    idusercreateAt?: SortOrder
    iduserupdatedAt?: SortOrder
    idimovel?: SortOrder
  }

  export type UnidadeMaxOrderByAggregateInput = {
    idunidade?: SortOrder
    nome?: SortOrder
    idusercreateAt?: SortOrder
    createdAt?: SortOrder
    iduserupdatedAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    idimovel?: SortOrder
    imagem1?: SortOrder
    imagem2?: SortOrder
  }

  export type UnidadeMinOrderByAggregateInput = {
    idunidade?: SortOrder
    nome?: SortOrder
    idusercreateAt?: SortOrder
    createdAt?: SortOrder
    iduserupdatedAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    idimovel?: SortOrder
    imagem1?: SortOrder
    imagem2?: SortOrder
  }

  export type UnidadeSumOrderByAggregateInput = {
    idunidade?: SortOrder
    idusercreateAt?: SortOrder
    iduserupdatedAt?: SortOrder
    idimovel?: SortOrder
  }

  export type BytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel> | null
    in?: Buffer[] | null
    notIn?: Buffer[] | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Buffer | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type NivelCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<NivelCreateWithoutUsuarioInput, NivelUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: NivelCreateOrConnectWithoutUsuarioInput
    connect?: NivelWhereUniqueInput
  }

  export type MenuCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<MenuCreateWithoutUsuarioInput, MenuUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: MenuCreateOrConnectWithoutUsuarioInput
    connect?: MenuWhereUniqueInput
  }

  export type UnidadeCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<UnidadeCreateWithoutUsuarioInput, UnidadeUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: UnidadeCreateOrConnectWithoutUsuarioInput
    connect?: UnidadeWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NivelUpdateOneRequiredWithoutUsuarioNestedInput = {
    create?: XOR<NivelCreateWithoutUsuarioInput, NivelUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: NivelCreateOrConnectWithoutUsuarioInput
    upsert?: NivelUpsertWithoutUsuarioInput
    connect?: NivelWhereUniqueInput
    update?: XOR<XOR<NivelUpdateToOneWithWhereWithoutUsuarioInput, NivelUpdateWithoutUsuarioInput>, NivelUncheckedUpdateWithoutUsuarioInput>
  }

  export type MenuUpdateOneRequiredWithoutUsuarioNestedInput = {
    create?: XOR<MenuCreateWithoutUsuarioInput, MenuUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: MenuCreateOrConnectWithoutUsuarioInput
    upsert?: MenuUpsertWithoutUsuarioInput
    connect?: MenuWhereUniqueInput
    update?: XOR<XOR<MenuUpdateToOneWithWhereWithoutUsuarioInput, MenuUpdateWithoutUsuarioInput>, MenuUncheckedUpdateWithoutUsuarioInput>
  }

  export type UnidadeUpdateOneRequiredWithoutUsuarioNestedInput = {
    create?: XOR<UnidadeCreateWithoutUsuarioInput, UnidadeUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: UnidadeCreateOrConnectWithoutUsuarioInput
    upsert?: UnidadeUpsertWithoutUsuarioInput
    connect?: UnidadeWhereUniqueInput
    update?: XOR<XOR<UnidadeUpdateToOneWithWhereWithoutUsuarioInput, UnidadeUpdateWithoutUsuarioInput>, UnidadeUncheckedUpdateWithoutUsuarioInput>
  }

  export type UsuarioCreateNestedManyWithoutNivelInput = {
    create?: XOR<UsuarioCreateWithoutNivelInput, UsuarioUncheckedCreateWithoutNivelInput> | UsuarioCreateWithoutNivelInput[] | UsuarioUncheckedCreateWithoutNivelInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutNivelInput | UsuarioCreateOrConnectWithoutNivelInput[]
    createMany?: UsuarioCreateManyNivelInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type UsuarioUncheckedCreateNestedManyWithoutNivelInput = {
    create?: XOR<UsuarioCreateWithoutNivelInput, UsuarioUncheckedCreateWithoutNivelInput> | UsuarioCreateWithoutNivelInput[] | UsuarioUncheckedCreateWithoutNivelInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutNivelInput | UsuarioCreateOrConnectWithoutNivelInput[]
    createMany?: UsuarioCreateManyNivelInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type UsuarioUpdateManyWithoutNivelNestedInput = {
    create?: XOR<UsuarioCreateWithoutNivelInput, UsuarioUncheckedCreateWithoutNivelInput> | UsuarioCreateWithoutNivelInput[] | UsuarioUncheckedCreateWithoutNivelInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutNivelInput | UsuarioCreateOrConnectWithoutNivelInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutNivelInput | UsuarioUpsertWithWhereUniqueWithoutNivelInput[]
    createMany?: UsuarioCreateManyNivelInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutNivelInput | UsuarioUpdateWithWhereUniqueWithoutNivelInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutNivelInput | UsuarioUpdateManyWithWhereWithoutNivelInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type UsuarioUncheckedUpdateManyWithoutNivelNestedInput = {
    create?: XOR<UsuarioCreateWithoutNivelInput, UsuarioUncheckedCreateWithoutNivelInput> | UsuarioCreateWithoutNivelInput[] | UsuarioUncheckedCreateWithoutNivelInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutNivelInput | UsuarioCreateOrConnectWithoutNivelInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutNivelInput | UsuarioUpsertWithWhereUniqueWithoutNivelInput[]
    createMany?: UsuarioCreateManyNivelInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutNivelInput | UsuarioUpdateWithWhereUniqueWithoutNivelInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutNivelInput | UsuarioUpdateManyWithWhereWithoutNivelInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type MenuitemCreateNestedManyWithoutMenuInput = {
    create?: XOR<MenuitemCreateWithoutMenuInput, MenuitemUncheckedCreateWithoutMenuInput> | MenuitemCreateWithoutMenuInput[] | MenuitemUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: MenuitemCreateOrConnectWithoutMenuInput | MenuitemCreateOrConnectWithoutMenuInput[]
    createMany?: MenuitemCreateManyMenuInputEnvelope
    connect?: MenuitemWhereUniqueInput | MenuitemWhereUniqueInput[]
  }

  export type UsuarioCreateNestedManyWithoutMenuInput = {
    create?: XOR<UsuarioCreateWithoutMenuInput, UsuarioUncheckedCreateWithoutMenuInput> | UsuarioCreateWithoutMenuInput[] | UsuarioUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutMenuInput | UsuarioCreateOrConnectWithoutMenuInput[]
    createMany?: UsuarioCreateManyMenuInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type MenuitemUncheckedCreateNestedManyWithoutMenuInput = {
    create?: XOR<MenuitemCreateWithoutMenuInput, MenuitemUncheckedCreateWithoutMenuInput> | MenuitemCreateWithoutMenuInput[] | MenuitemUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: MenuitemCreateOrConnectWithoutMenuInput | MenuitemCreateOrConnectWithoutMenuInput[]
    createMany?: MenuitemCreateManyMenuInputEnvelope
    connect?: MenuitemWhereUniqueInput | MenuitemWhereUniqueInput[]
  }

  export type UsuarioUncheckedCreateNestedManyWithoutMenuInput = {
    create?: XOR<UsuarioCreateWithoutMenuInput, UsuarioUncheckedCreateWithoutMenuInput> | UsuarioCreateWithoutMenuInput[] | UsuarioUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutMenuInput | UsuarioCreateOrConnectWithoutMenuInput[]
    createMany?: UsuarioCreateManyMenuInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type MenuitemUpdateManyWithoutMenuNestedInput = {
    create?: XOR<MenuitemCreateWithoutMenuInput, MenuitemUncheckedCreateWithoutMenuInput> | MenuitemCreateWithoutMenuInput[] | MenuitemUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: MenuitemCreateOrConnectWithoutMenuInput | MenuitemCreateOrConnectWithoutMenuInput[]
    upsert?: MenuitemUpsertWithWhereUniqueWithoutMenuInput | MenuitemUpsertWithWhereUniqueWithoutMenuInput[]
    createMany?: MenuitemCreateManyMenuInputEnvelope
    set?: MenuitemWhereUniqueInput | MenuitemWhereUniqueInput[]
    disconnect?: MenuitemWhereUniqueInput | MenuitemWhereUniqueInput[]
    delete?: MenuitemWhereUniqueInput | MenuitemWhereUniqueInput[]
    connect?: MenuitemWhereUniqueInput | MenuitemWhereUniqueInput[]
    update?: MenuitemUpdateWithWhereUniqueWithoutMenuInput | MenuitemUpdateWithWhereUniqueWithoutMenuInput[]
    updateMany?: MenuitemUpdateManyWithWhereWithoutMenuInput | MenuitemUpdateManyWithWhereWithoutMenuInput[]
    deleteMany?: MenuitemScalarWhereInput | MenuitemScalarWhereInput[]
  }

  export type UsuarioUpdateManyWithoutMenuNestedInput = {
    create?: XOR<UsuarioCreateWithoutMenuInput, UsuarioUncheckedCreateWithoutMenuInput> | UsuarioCreateWithoutMenuInput[] | UsuarioUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutMenuInput | UsuarioCreateOrConnectWithoutMenuInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutMenuInput | UsuarioUpsertWithWhereUniqueWithoutMenuInput[]
    createMany?: UsuarioCreateManyMenuInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutMenuInput | UsuarioUpdateWithWhereUniqueWithoutMenuInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutMenuInput | UsuarioUpdateManyWithWhereWithoutMenuInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type MenuitemUncheckedUpdateManyWithoutMenuNestedInput = {
    create?: XOR<MenuitemCreateWithoutMenuInput, MenuitemUncheckedCreateWithoutMenuInput> | MenuitemCreateWithoutMenuInput[] | MenuitemUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: MenuitemCreateOrConnectWithoutMenuInput | MenuitemCreateOrConnectWithoutMenuInput[]
    upsert?: MenuitemUpsertWithWhereUniqueWithoutMenuInput | MenuitemUpsertWithWhereUniqueWithoutMenuInput[]
    createMany?: MenuitemCreateManyMenuInputEnvelope
    set?: MenuitemWhereUniqueInput | MenuitemWhereUniqueInput[]
    disconnect?: MenuitemWhereUniqueInput | MenuitemWhereUniqueInput[]
    delete?: MenuitemWhereUniqueInput | MenuitemWhereUniqueInput[]
    connect?: MenuitemWhereUniqueInput | MenuitemWhereUniqueInput[]
    update?: MenuitemUpdateWithWhereUniqueWithoutMenuInput | MenuitemUpdateWithWhereUniqueWithoutMenuInput[]
    updateMany?: MenuitemUpdateManyWithWhereWithoutMenuInput | MenuitemUpdateManyWithWhereWithoutMenuInput[]
    deleteMany?: MenuitemScalarWhereInput | MenuitemScalarWhereInput[]
  }

  export type UsuarioUncheckedUpdateManyWithoutMenuNestedInput = {
    create?: XOR<UsuarioCreateWithoutMenuInput, UsuarioUncheckedCreateWithoutMenuInput> | UsuarioCreateWithoutMenuInput[] | UsuarioUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutMenuInput | UsuarioCreateOrConnectWithoutMenuInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutMenuInput | UsuarioUpsertWithWhereUniqueWithoutMenuInput[]
    createMany?: UsuarioCreateManyMenuInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutMenuInput | UsuarioUpdateWithWhereUniqueWithoutMenuInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutMenuInput | UsuarioUpdateManyWithWhereWithoutMenuInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type MenuCreateNestedOneWithoutMenuitemInput = {
    create?: XOR<MenuCreateWithoutMenuitemInput, MenuUncheckedCreateWithoutMenuitemInput>
    connectOrCreate?: MenuCreateOrConnectWithoutMenuitemInput
    connect?: MenuWhereUniqueInput
  }

  export type MenuUpdateOneRequiredWithoutMenuitemNestedInput = {
    create?: XOR<MenuCreateWithoutMenuitemInput, MenuUncheckedCreateWithoutMenuitemInput>
    connectOrCreate?: MenuCreateOrConnectWithoutMenuitemInput
    upsert?: MenuUpsertWithoutMenuitemInput
    connect?: MenuWhereUniqueInput
    update?: XOR<XOR<MenuUpdateToOneWithWhereWithoutMenuitemInput, MenuUpdateWithoutMenuitemInput>, MenuUncheckedUpdateWithoutMenuitemInput>
  }

  export type UsuariocolunaCreateNestedManyWithoutColunaInput = {
    create?: XOR<UsuariocolunaCreateWithoutColunaInput, UsuariocolunaUncheckedCreateWithoutColunaInput> | UsuariocolunaCreateWithoutColunaInput[] | UsuariocolunaUncheckedCreateWithoutColunaInput[]
    connectOrCreate?: UsuariocolunaCreateOrConnectWithoutColunaInput | UsuariocolunaCreateOrConnectWithoutColunaInput[]
    createMany?: UsuariocolunaCreateManyColunaInputEnvelope
    connect?: UsuariocolunaWhereUniqueInput | UsuariocolunaWhereUniqueInput[]
  }

  export type UsuariocolunaUncheckedCreateNestedManyWithoutColunaInput = {
    create?: XOR<UsuariocolunaCreateWithoutColunaInput, UsuariocolunaUncheckedCreateWithoutColunaInput> | UsuariocolunaCreateWithoutColunaInput[] | UsuariocolunaUncheckedCreateWithoutColunaInput[]
    connectOrCreate?: UsuariocolunaCreateOrConnectWithoutColunaInput | UsuariocolunaCreateOrConnectWithoutColunaInput[]
    createMany?: UsuariocolunaCreateManyColunaInputEnvelope
    connect?: UsuariocolunaWhereUniqueInput | UsuariocolunaWhereUniqueInput[]
  }

  export type UsuariocolunaUpdateManyWithoutColunaNestedInput = {
    create?: XOR<UsuariocolunaCreateWithoutColunaInput, UsuariocolunaUncheckedCreateWithoutColunaInput> | UsuariocolunaCreateWithoutColunaInput[] | UsuariocolunaUncheckedCreateWithoutColunaInput[]
    connectOrCreate?: UsuariocolunaCreateOrConnectWithoutColunaInput | UsuariocolunaCreateOrConnectWithoutColunaInput[]
    upsert?: UsuariocolunaUpsertWithWhereUniqueWithoutColunaInput | UsuariocolunaUpsertWithWhereUniqueWithoutColunaInput[]
    createMany?: UsuariocolunaCreateManyColunaInputEnvelope
    set?: UsuariocolunaWhereUniqueInput | UsuariocolunaWhereUniqueInput[]
    disconnect?: UsuariocolunaWhereUniqueInput | UsuariocolunaWhereUniqueInput[]
    delete?: UsuariocolunaWhereUniqueInput | UsuariocolunaWhereUniqueInput[]
    connect?: UsuariocolunaWhereUniqueInput | UsuariocolunaWhereUniqueInput[]
    update?: UsuariocolunaUpdateWithWhereUniqueWithoutColunaInput | UsuariocolunaUpdateWithWhereUniqueWithoutColunaInput[]
    updateMany?: UsuariocolunaUpdateManyWithWhereWithoutColunaInput | UsuariocolunaUpdateManyWithWhereWithoutColunaInput[]
    deleteMany?: UsuariocolunaScalarWhereInput | UsuariocolunaScalarWhereInput[]
  }

  export type UsuariocolunaUncheckedUpdateManyWithoutColunaNestedInput = {
    create?: XOR<UsuariocolunaCreateWithoutColunaInput, UsuariocolunaUncheckedCreateWithoutColunaInput> | UsuariocolunaCreateWithoutColunaInput[] | UsuariocolunaUncheckedCreateWithoutColunaInput[]
    connectOrCreate?: UsuariocolunaCreateOrConnectWithoutColunaInput | UsuariocolunaCreateOrConnectWithoutColunaInput[]
    upsert?: UsuariocolunaUpsertWithWhereUniqueWithoutColunaInput | UsuariocolunaUpsertWithWhereUniqueWithoutColunaInput[]
    createMany?: UsuariocolunaCreateManyColunaInputEnvelope
    set?: UsuariocolunaWhereUniqueInput | UsuariocolunaWhereUniqueInput[]
    disconnect?: UsuariocolunaWhereUniqueInput | UsuariocolunaWhereUniqueInput[]
    delete?: UsuariocolunaWhereUniqueInput | UsuariocolunaWhereUniqueInput[]
    connect?: UsuariocolunaWhereUniqueInput | UsuariocolunaWhereUniqueInput[]
    update?: UsuariocolunaUpdateWithWhereUniqueWithoutColunaInput | UsuariocolunaUpdateWithWhereUniqueWithoutColunaInput[]
    updateMany?: UsuariocolunaUpdateManyWithWhereWithoutColunaInput | UsuariocolunaUpdateManyWithWhereWithoutColunaInput[]
    deleteMany?: UsuariocolunaScalarWhereInput | UsuariocolunaScalarWhereInput[]
  }

  export type ColunaCreateNestedOneWithoutUsuariocolunaInput = {
    create?: XOR<ColunaCreateWithoutUsuariocolunaInput, ColunaUncheckedCreateWithoutUsuariocolunaInput>
    connectOrCreate?: ColunaCreateOrConnectWithoutUsuariocolunaInput
    connect?: ColunaWhereUniqueInput
  }

  export type ColunaUpdateOneRequiredWithoutUsuariocolunaNestedInput = {
    create?: XOR<ColunaCreateWithoutUsuariocolunaInput, ColunaUncheckedCreateWithoutUsuariocolunaInput>
    connectOrCreate?: ColunaCreateOrConnectWithoutUsuariocolunaInput
    upsert?: ColunaUpsertWithoutUsuariocolunaInput
    connect?: ColunaWhereUniqueInput
    update?: XOR<XOR<ColunaUpdateToOneWithWhereWithoutUsuariocolunaInput, ColunaUpdateWithoutUsuariocolunaInput>, ColunaUncheckedUpdateWithoutUsuariocolunaInput>
  }

  export type UsuarioCreateNestedManyWithoutUnidadeInput = {
    create?: XOR<UsuarioCreateWithoutUnidadeInput, UsuarioUncheckedCreateWithoutUnidadeInput> | UsuarioCreateWithoutUnidadeInput[] | UsuarioUncheckedCreateWithoutUnidadeInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutUnidadeInput | UsuarioCreateOrConnectWithoutUnidadeInput[]
    createMany?: UsuarioCreateManyUnidadeInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type UsuarioUncheckedCreateNestedManyWithoutUnidadeInput = {
    create?: XOR<UsuarioCreateWithoutUnidadeInput, UsuarioUncheckedCreateWithoutUnidadeInput> | UsuarioCreateWithoutUnidadeInput[] | UsuarioUncheckedCreateWithoutUnidadeInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutUnidadeInput | UsuarioCreateOrConnectWithoutUnidadeInput[]
    createMany?: UsuarioCreateManyUnidadeInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type NullableBytesFieldUpdateOperationsInput = {
    set?: Buffer | null
  }

  export type UsuarioUpdateManyWithoutUnidadeNestedInput = {
    create?: XOR<UsuarioCreateWithoutUnidadeInput, UsuarioUncheckedCreateWithoutUnidadeInput> | UsuarioCreateWithoutUnidadeInput[] | UsuarioUncheckedCreateWithoutUnidadeInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutUnidadeInput | UsuarioCreateOrConnectWithoutUnidadeInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutUnidadeInput | UsuarioUpsertWithWhereUniqueWithoutUnidadeInput[]
    createMany?: UsuarioCreateManyUnidadeInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutUnidadeInput | UsuarioUpdateWithWhereUniqueWithoutUnidadeInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutUnidadeInput | UsuarioUpdateManyWithWhereWithoutUnidadeInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type UsuarioUncheckedUpdateManyWithoutUnidadeNestedInput = {
    create?: XOR<UsuarioCreateWithoutUnidadeInput, UsuarioUncheckedCreateWithoutUnidadeInput> | UsuarioCreateWithoutUnidadeInput[] | UsuarioUncheckedCreateWithoutUnidadeInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutUnidadeInput | UsuarioCreateOrConnectWithoutUnidadeInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutUnidadeInput | UsuarioUpsertWithWhereUniqueWithoutUnidadeInput[]
    createMany?: UsuarioCreateManyUnidadeInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutUnidadeInput | UsuarioUpdateWithWhereUniqueWithoutUnidadeInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutUnidadeInput | UsuarioUpdateManyWithWhereWithoutUnidadeInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedBytesNullableFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel> | null
    in?: Buffer[] | null
    notIn?: Buffer[] | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Buffer | null
  }

  export type NestedBytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel> | null
    in?: Buffer[] | null
    notIn?: Buffer[] | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Buffer | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type NivelCreateWithoutUsuarioInput = {
    nome: string
    idusercreateAt: number
    createdAt?: Date | string
    iduserupdatedAt?: number | null
    updatedAt?: Date | string | null
    status?: string
  }

  export type NivelUncheckedCreateWithoutUsuarioInput = {
    idnivel?: number
    nome: string
    idusercreateAt: number
    createdAt?: Date | string
    iduserupdatedAt?: number | null
    updatedAt?: Date | string | null
    status?: string
  }

  export type NivelCreateOrConnectWithoutUsuarioInput = {
    where: NivelWhereUniqueInput
    create: XOR<NivelCreateWithoutUsuarioInput, NivelUncheckedCreateWithoutUsuarioInput>
  }

  export type MenuCreateWithoutUsuarioInput = {
    idusercreateAt: number
    createdAt?: Date | string
    iduserupdatedAt?: number | null
    updatedAt?: Date | string | null
    status?: string
    nome: string
    Menuitem?: MenuitemCreateNestedManyWithoutMenuInput
  }

  export type MenuUncheckedCreateWithoutUsuarioInput = {
    idmenu?: number
    idusercreateAt: number
    createdAt?: Date | string
    iduserupdatedAt?: number | null
    updatedAt?: Date | string | null
    status?: string
    nome: string
    Menuitem?: MenuitemUncheckedCreateNestedManyWithoutMenuInput
  }

  export type MenuCreateOrConnectWithoutUsuarioInput = {
    where: MenuWhereUniqueInput
    create: XOR<MenuCreateWithoutUsuarioInput, MenuUncheckedCreateWithoutUsuarioInput>
  }

  export type UnidadeCreateWithoutUsuarioInput = {
    nome: string
    idusercreateAt: number
    createdAt?: Date | string
    iduserupdatedAt?: number | null
    updatedAt?: Date | string | null
    status?: string
    idimovel?: number
    imagem1?: Buffer | null
    imagem2?: Buffer | null
  }

  export type UnidadeUncheckedCreateWithoutUsuarioInput = {
    idunidade?: number
    nome: string
    idusercreateAt: number
    createdAt?: Date | string
    iduserupdatedAt?: number | null
    updatedAt?: Date | string | null
    status?: string
    idimovel?: number
    imagem1?: Buffer | null
    imagem2?: Buffer | null
  }

  export type UnidadeCreateOrConnectWithoutUsuarioInput = {
    where: UnidadeWhereUniqueInput
    create: XOR<UnidadeCreateWithoutUsuarioInput, UnidadeUncheckedCreateWithoutUsuarioInput>
  }

  export type NivelUpsertWithoutUsuarioInput = {
    update: XOR<NivelUpdateWithoutUsuarioInput, NivelUncheckedUpdateWithoutUsuarioInput>
    create: XOR<NivelCreateWithoutUsuarioInput, NivelUncheckedCreateWithoutUsuarioInput>
    where?: NivelWhereInput
  }

  export type NivelUpdateToOneWithWhereWithoutUsuarioInput = {
    where?: NivelWhereInput
    data: XOR<NivelUpdateWithoutUsuarioInput, NivelUncheckedUpdateWithoutUsuarioInput>
  }

  export type NivelUpdateWithoutUsuarioInput = {
    nome?: StringFieldUpdateOperationsInput | string
    idusercreateAt?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    iduserupdatedAt?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type NivelUncheckedUpdateWithoutUsuarioInput = {
    idnivel?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    idusercreateAt?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    iduserupdatedAt?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type MenuUpsertWithoutUsuarioInput = {
    update: XOR<MenuUpdateWithoutUsuarioInput, MenuUncheckedUpdateWithoutUsuarioInput>
    create: XOR<MenuCreateWithoutUsuarioInput, MenuUncheckedCreateWithoutUsuarioInput>
    where?: MenuWhereInput
  }

  export type MenuUpdateToOneWithWhereWithoutUsuarioInput = {
    where?: MenuWhereInput
    data: XOR<MenuUpdateWithoutUsuarioInput, MenuUncheckedUpdateWithoutUsuarioInput>
  }

  export type MenuUpdateWithoutUsuarioInput = {
    idusercreateAt?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    iduserupdatedAt?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    Menuitem?: MenuitemUpdateManyWithoutMenuNestedInput
  }

  export type MenuUncheckedUpdateWithoutUsuarioInput = {
    idmenu?: IntFieldUpdateOperationsInput | number
    idusercreateAt?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    iduserupdatedAt?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    Menuitem?: MenuitemUncheckedUpdateManyWithoutMenuNestedInput
  }

  export type UnidadeUpsertWithoutUsuarioInput = {
    update: XOR<UnidadeUpdateWithoutUsuarioInput, UnidadeUncheckedUpdateWithoutUsuarioInput>
    create: XOR<UnidadeCreateWithoutUsuarioInput, UnidadeUncheckedCreateWithoutUsuarioInput>
    where?: UnidadeWhereInput
  }

  export type UnidadeUpdateToOneWithWhereWithoutUsuarioInput = {
    where?: UnidadeWhereInput
    data: XOR<UnidadeUpdateWithoutUsuarioInput, UnidadeUncheckedUpdateWithoutUsuarioInput>
  }

  export type UnidadeUpdateWithoutUsuarioInput = {
    nome?: StringFieldUpdateOperationsInput | string
    idusercreateAt?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    iduserupdatedAt?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    idimovel?: IntFieldUpdateOperationsInput | number
    imagem1?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    imagem2?: NullableBytesFieldUpdateOperationsInput | Buffer | null
  }

  export type UnidadeUncheckedUpdateWithoutUsuarioInput = {
    idunidade?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    idusercreateAt?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    iduserupdatedAt?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    idimovel?: IntFieldUpdateOperationsInput | number
    imagem1?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    imagem2?: NullableBytesFieldUpdateOperationsInput | Buffer | null
  }

  export type UsuarioCreateWithoutNivelInput = {
    nome: string
    email: string
    cpf?: string | null
    dtnascimento?: Date | string | null
    sexo?: string | null
    idusercreateAt: number
    createdAt?: Date | string
    iduserupdatedAt?: number | null
    updatedAt?: Date | string | null
    status?: string
    senha: string
    trocasenha?: boolean
    iddepartamento: number
    celular?: string | null
    ramaln?: string | null
    chatid?: string | null
    ti?: boolean
    contrato?: boolean
    contratost?: boolean
    vtodoscontratos?: boolean
    vtodoshoraextra?: boolean
    ccontratos?: boolean
    choraextra?: boolean
    menu?: MenuCreateNestedOneWithoutUsuarioInput
    unidade?: UnidadeCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutNivelInput = {
    idusuario?: number
    nome: string
    email: string
    cpf?: string | null
    dtnascimento?: Date | string | null
    sexo?: string | null
    idusercreateAt: number
    createdAt?: Date | string
    iduserupdatedAt?: number | null
    updatedAt?: Date | string | null
    status?: string
    senha: string
    trocasenha?: boolean
    iddepartamento: number
    idmenu?: number
    celular?: string | null
    ramaln?: string | null
    chatid?: string | null
    ti?: boolean
    contrato?: boolean
    contratost?: boolean
    idunidade?: number
    vtodoscontratos?: boolean
    vtodoshoraextra?: boolean
    ccontratos?: boolean
    choraextra?: boolean
  }

  export type UsuarioCreateOrConnectWithoutNivelInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutNivelInput, UsuarioUncheckedCreateWithoutNivelInput>
  }

  export type UsuarioCreateManyNivelInputEnvelope = {
    data: UsuarioCreateManyNivelInput | UsuarioCreateManyNivelInput[]
  }

  export type UsuarioUpsertWithWhereUniqueWithoutNivelInput = {
    where: UsuarioWhereUniqueInput
    update: XOR<UsuarioUpdateWithoutNivelInput, UsuarioUncheckedUpdateWithoutNivelInput>
    create: XOR<UsuarioCreateWithoutNivelInput, UsuarioUncheckedCreateWithoutNivelInput>
  }

  export type UsuarioUpdateWithWhereUniqueWithoutNivelInput = {
    where: UsuarioWhereUniqueInput
    data: XOR<UsuarioUpdateWithoutNivelInput, UsuarioUncheckedUpdateWithoutNivelInput>
  }

  export type UsuarioUpdateManyWithWhereWithoutNivelInput = {
    where: UsuarioScalarWhereInput
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyWithoutNivelInput>
  }

  export type UsuarioScalarWhereInput = {
    AND?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    OR?: UsuarioScalarWhereInput[]
    NOT?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    idusuario?: IntFilter<"Usuario"> | number
    nome?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    cpf?: StringNullableFilter<"Usuario"> | string | null
    dtnascimento?: DateTimeNullableFilter<"Usuario"> | Date | string | null
    sexo?: StringNullableFilter<"Usuario"> | string | null
    idusercreateAt?: IntFilter<"Usuario"> | number
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    iduserupdatedAt?: IntNullableFilter<"Usuario"> | number | null
    updatedAt?: DateTimeNullableFilter<"Usuario"> | Date | string | null
    status?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    trocasenha?: BoolFilter<"Usuario"> | boolean
    iddepartamento?: IntFilter<"Usuario"> | number
    idmenu?: IntFilter<"Usuario"> | number
    celular?: StringNullableFilter<"Usuario"> | string | null
    ramaln?: StringNullableFilter<"Usuario"> | string | null
    idnivel?: IntFilter<"Usuario"> | number
    chatid?: StringNullableFilter<"Usuario"> | string | null
    ti?: BoolFilter<"Usuario"> | boolean
    contrato?: BoolFilter<"Usuario"> | boolean
    contratost?: BoolFilter<"Usuario"> | boolean
    idunidade?: IntFilter<"Usuario"> | number
    vtodoscontratos?: BoolFilter<"Usuario"> | boolean
    vtodoshoraextra?: BoolFilter<"Usuario"> | boolean
    ccontratos?: BoolFilter<"Usuario"> | boolean
    choraextra?: BoolFilter<"Usuario"> | boolean
  }

  export type MenuitemCreateWithoutMenuInput = {
    seq: number
    titulo: string
    url: string
    icon: string
    idusercreateAt: number
    createdAt?: Date | string
    iduserupdatedAt?: number | null
    updatedAt?: Date | string | null
    status?: string
  }

  export type MenuitemUncheckedCreateWithoutMenuInput = {
    idmenuitem?: number
    seq: number
    titulo: string
    url: string
    icon: string
    idusercreateAt: number
    createdAt?: Date | string
    iduserupdatedAt?: number | null
    updatedAt?: Date | string | null
    status?: string
  }

  export type MenuitemCreateOrConnectWithoutMenuInput = {
    where: MenuitemWhereUniqueInput
    create: XOR<MenuitemCreateWithoutMenuInput, MenuitemUncheckedCreateWithoutMenuInput>
  }

  export type MenuitemCreateManyMenuInputEnvelope = {
    data: MenuitemCreateManyMenuInput | MenuitemCreateManyMenuInput[]
  }

  export type UsuarioCreateWithoutMenuInput = {
    nome: string
    email: string
    cpf?: string | null
    dtnascimento?: Date | string | null
    sexo?: string | null
    idusercreateAt: number
    createdAt?: Date | string
    iduserupdatedAt?: number | null
    updatedAt?: Date | string | null
    status?: string
    senha: string
    trocasenha?: boolean
    iddepartamento: number
    celular?: string | null
    ramaln?: string | null
    chatid?: string | null
    ti?: boolean
    contrato?: boolean
    contratost?: boolean
    vtodoscontratos?: boolean
    vtodoshoraextra?: boolean
    ccontratos?: boolean
    choraextra?: boolean
    nivel?: NivelCreateNestedOneWithoutUsuarioInput
    unidade?: UnidadeCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutMenuInput = {
    idusuario?: number
    nome: string
    email: string
    cpf?: string | null
    dtnascimento?: Date | string | null
    sexo?: string | null
    idusercreateAt: number
    createdAt?: Date | string
    iduserupdatedAt?: number | null
    updatedAt?: Date | string | null
    status?: string
    senha: string
    trocasenha?: boolean
    iddepartamento: number
    celular?: string | null
    ramaln?: string | null
    idnivel?: number
    chatid?: string | null
    ti?: boolean
    contrato?: boolean
    contratost?: boolean
    idunidade?: number
    vtodoscontratos?: boolean
    vtodoshoraextra?: boolean
    ccontratos?: boolean
    choraextra?: boolean
  }

  export type UsuarioCreateOrConnectWithoutMenuInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutMenuInput, UsuarioUncheckedCreateWithoutMenuInput>
  }

  export type UsuarioCreateManyMenuInputEnvelope = {
    data: UsuarioCreateManyMenuInput | UsuarioCreateManyMenuInput[]
  }

  export type MenuitemUpsertWithWhereUniqueWithoutMenuInput = {
    where: MenuitemWhereUniqueInput
    update: XOR<MenuitemUpdateWithoutMenuInput, MenuitemUncheckedUpdateWithoutMenuInput>
    create: XOR<MenuitemCreateWithoutMenuInput, MenuitemUncheckedCreateWithoutMenuInput>
  }

  export type MenuitemUpdateWithWhereUniqueWithoutMenuInput = {
    where: MenuitemWhereUniqueInput
    data: XOR<MenuitemUpdateWithoutMenuInput, MenuitemUncheckedUpdateWithoutMenuInput>
  }

  export type MenuitemUpdateManyWithWhereWithoutMenuInput = {
    where: MenuitemScalarWhereInput
    data: XOR<MenuitemUpdateManyMutationInput, MenuitemUncheckedUpdateManyWithoutMenuInput>
  }

  export type MenuitemScalarWhereInput = {
    AND?: MenuitemScalarWhereInput | MenuitemScalarWhereInput[]
    OR?: MenuitemScalarWhereInput[]
    NOT?: MenuitemScalarWhereInput | MenuitemScalarWhereInput[]
    idmenuitem?: IntFilter<"Menuitem"> | number
    idmenu?: IntFilter<"Menuitem"> | number
    seq?: IntFilter<"Menuitem"> | number
    titulo?: StringFilter<"Menuitem"> | string
    url?: StringFilter<"Menuitem"> | string
    icon?: StringFilter<"Menuitem"> | string
    idusercreateAt?: IntFilter<"Menuitem"> | number
    createdAt?: DateTimeFilter<"Menuitem"> | Date | string
    iduserupdatedAt?: IntNullableFilter<"Menuitem"> | number | null
    updatedAt?: DateTimeNullableFilter<"Menuitem"> | Date | string | null
    status?: StringFilter<"Menuitem"> | string
  }

  export type UsuarioUpsertWithWhereUniqueWithoutMenuInput = {
    where: UsuarioWhereUniqueInput
    update: XOR<UsuarioUpdateWithoutMenuInput, UsuarioUncheckedUpdateWithoutMenuInput>
    create: XOR<UsuarioCreateWithoutMenuInput, UsuarioUncheckedCreateWithoutMenuInput>
  }

  export type UsuarioUpdateWithWhereUniqueWithoutMenuInput = {
    where: UsuarioWhereUniqueInput
    data: XOR<UsuarioUpdateWithoutMenuInput, UsuarioUncheckedUpdateWithoutMenuInput>
  }

  export type UsuarioUpdateManyWithWhereWithoutMenuInput = {
    where: UsuarioScalarWhereInput
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyWithoutMenuInput>
  }

  export type MenuCreateWithoutMenuitemInput = {
    idusercreateAt: number
    createdAt?: Date | string
    iduserupdatedAt?: number | null
    updatedAt?: Date | string | null
    status?: string
    nome: string
    Usuario?: UsuarioCreateNestedManyWithoutMenuInput
  }

  export type MenuUncheckedCreateWithoutMenuitemInput = {
    idmenu?: number
    idusercreateAt: number
    createdAt?: Date | string
    iduserupdatedAt?: number | null
    updatedAt?: Date | string | null
    status?: string
    nome: string
    Usuario?: UsuarioUncheckedCreateNestedManyWithoutMenuInput
  }

  export type MenuCreateOrConnectWithoutMenuitemInput = {
    where: MenuWhereUniqueInput
    create: XOR<MenuCreateWithoutMenuitemInput, MenuUncheckedCreateWithoutMenuitemInput>
  }

  export type MenuUpsertWithoutMenuitemInput = {
    update: XOR<MenuUpdateWithoutMenuitemInput, MenuUncheckedUpdateWithoutMenuitemInput>
    create: XOR<MenuCreateWithoutMenuitemInput, MenuUncheckedCreateWithoutMenuitemInput>
    where?: MenuWhereInput
  }

  export type MenuUpdateToOneWithWhereWithoutMenuitemInput = {
    where?: MenuWhereInput
    data: XOR<MenuUpdateWithoutMenuitemInput, MenuUncheckedUpdateWithoutMenuitemInput>
  }

  export type MenuUpdateWithoutMenuitemInput = {
    idusercreateAt?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    iduserupdatedAt?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    Usuario?: UsuarioUpdateManyWithoutMenuNestedInput
  }

  export type MenuUncheckedUpdateWithoutMenuitemInput = {
    idmenu?: IntFieldUpdateOperationsInput | number
    idusercreateAt?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    iduserupdatedAt?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    Usuario?: UsuarioUncheckedUpdateManyWithoutMenuNestedInput
  }

  export type UsuariocolunaCreateWithoutColunaInput = {
    idusercreateAt: number
    createdAt?: Date | string
    iduserupdatedAt?: number | null
    updatedAt?: Date | string | null
    status?: string
    idusuario: number
  }

  export type UsuariocolunaUncheckedCreateWithoutColunaInput = {
    idusuariocoluna?: number
    idusercreateAt: number
    createdAt?: Date | string
    iduserupdatedAt?: number | null
    updatedAt?: Date | string | null
    status?: string
    idusuario: number
  }

  export type UsuariocolunaCreateOrConnectWithoutColunaInput = {
    where: UsuariocolunaWhereUniqueInput
    create: XOR<UsuariocolunaCreateWithoutColunaInput, UsuariocolunaUncheckedCreateWithoutColunaInput>
  }

  export type UsuariocolunaCreateManyColunaInputEnvelope = {
    data: UsuariocolunaCreateManyColunaInput | UsuariocolunaCreateManyColunaInput[]
  }

  export type UsuariocolunaUpsertWithWhereUniqueWithoutColunaInput = {
    where: UsuariocolunaWhereUniqueInput
    update: XOR<UsuariocolunaUpdateWithoutColunaInput, UsuariocolunaUncheckedUpdateWithoutColunaInput>
    create: XOR<UsuariocolunaCreateWithoutColunaInput, UsuariocolunaUncheckedCreateWithoutColunaInput>
  }

  export type UsuariocolunaUpdateWithWhereUniqueWithoutColunaInput = {
    where: UsuariocolunaWhereUniqueInput
    data: XOR<UsuariocolunaUpdateWithoutColunaInput, UsuariocolunaUncheckedUpdateWithoutColunaInput>
  }

  export type UsuariocolunaUpdateManyWithWhereWithoutColunaInput = {
    where: UsuariocolunaScalarWhereInput
    data: XOR<UsuariocolunaUpdateManyMutationInput, UsuariocolunaUncheckedUpdateManyWithoutColunaInput>
  }

  export type UsuariocolunaScalarWhereInput = {
    AND?: UsuariocolunaScalarWhereInput | UsuariocolunaScalarWhereInput[]
    OR?: UsuariocolunaScalarWhereInput[]
    NOT?: UsuariocolunaScalarWhereInput | UsuariocolunaScalarWhereInput[]
    idusuariocoluna?: IntFilter<"Usuariocoluna"> | number
    idcoluna?: IntFilter<"Usuariocoluna"> | number
    idusercreateAt?: IntFilter<"Usuariocoluna"> | number
    createdAt?: DateTimeFilter<"Usuariocoluna"> | Date | string
    iduserupdatedAt?: IntNullableFilter<"Usuariocoluna"> | number | null
    updatedAt?: DateTimeNullableFilter<"Usuariocoluna"> | Date | string | null
    status?: StringFilter<"Usuariocoluna"> | string
    idusuario?: IntFilter<"Usuariocoluna"> | number
  }

  export type ColunaCreateWithoutUsuariocolunaInput = {
    programa: string
    field: string
    header: string
    style: string
    type: string
    agregado1?: string | null
    agregado2?: string | null
    idusercreateAt: number
    createdAt?: Date | string
    iduserupdatedAt?: number | null
    updatedAt?: Date | string | null
    status?: string
    ordem?: number
    ordena?: string
    filtra?: boolean
  }

  export type ColunaUncheckedCreateWithoutUsuariocolunaInput = {
    idcoluna?: number
    programa: string
    field: string
    header: string
    style: string
    type: string
    agregado1?: string | null
    agregado2?: string | null
    idusercreateAt: number
    createdAt?: Date | string
    iduserupdatedAt?: number | null
    updatedAt?: Date | string | null
    status?: string
    ordem?: number
    ordena?: string
    filtra?: boolean
  }

  export type ColunaCreateOrConnectWithoutUsuariocolunaInput = {
    where: ColunaWhereUniqueInput
    create: XOR<ColunaCreateWithoutUsuariocolunaInput, ColunaUncheckedCreateWithoutUsuariocolunaInput>
  }

  export type ColunaUpsertWithoutUsuariocolunaInput = {
    update: XOR<ColunaUpdateWithoutUsuariocolunaInput, ColunaUncheckedUpdateWithoutUsuariocolunaInput>
    create: XOR<ColunaCreateWithoutUsuariocolunaInput, ColunaUncheckedCreateWithoutUsuariocolunaInput>
    where?: ColunaWhereInput
  }

  export type ColunaUpdateToOneWithWhereWithoutUsuariocolunaInput = {
    where?: ColunaWhereInput
    data: XOR<ColunaUpdateWithoutUsuariocolunaInput, ColunaUncheckedUpdateWithoutUsuariocolunaInput>
  }

  export type ColunaUpdateWithoutUsuariocolunaInput = {
    programa?: StringFieldUpdateOperationsInput | string
    field?: StringFieldUpdateOperationsInput | string
    header?: StringFieldUpdateOperationsInput | string
    style?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    agregado1?: NullableStringFieldUpdateOperationsInput | string | null
    agregado2?: NullableStringFieldUpdateOperationsInput | string | null
    idusercreateAt?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    iduserupdatedAt?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    ordena?: StringFieldUpdateOperationsInput | string
    filtra?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ColunaUncheckedUpdateWithoutUsuariocolunaInput = {
    idcoluna?: IntFieldUpdateOperationsInput | number
    programa?: StringFieldUpdateOperationsInput | string
    field?: StringFieldUpdateOperationsInput | string
    header?: StringFieldUpdateOperationsInput | string
    style?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    agregado1?: NullableStringFieldUpdateOperationsInput | string | null
    agregado2?: NullableStringFieldUpdateOperationsInput | string | null
    idusercreateAt?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    iduserupdatedAt?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    ordem?: IntFieldUpdateOperationsInput | number
    ordena?: StringFieldUpdateOperationsInput | string
    filtra?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UsuarioCreateWithoutUnidadeInput = {
    nome: string
    email: string
    cpf?: string | null
    dtnascimento?: Date | string | null
    sexo?: string | null
    idusercreateAt: number
    createdAt?: Date | string
    iduserupdatedAt?: number | null
    updatedAt?: Date | string | null
    status?: string
    senha: string
    trocasenha?: boolean
    iddepartamento: number
    celular?: string | null
    ramaln?: string | null
    chatid?: string | null
    ti?: boolean
    contrato?: boolean
    contratost?: boolean
    vtodoscontratos?: boolean
    vtodoshoraextra?: boolean
    ccontratos?: boolean
    choraextra?: boolean
    nivel?: NivelCreateNestedOneWithoutUsuarioInput
    menu?: MenuCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutUnidadeInput = {
    idusuario?: number
    nome: string
    email: string
    cpf?: string | null
    dtnascimento?: Date | string | null
    sexo?: string | null
    idusercreateAt: number
    createdAt?: Date | string
    iduserupdatedAt?: number | null
    updatedAt?: Date | string | null
    status?: string
    senha: string
    trocasenha?: boolean
    iddepartamento: number
    idmenu?: number
    celular?: string | null
    ramaln?: string | null
    idnivel?: number
    chatid?: string | null
    ti?: boolean
    contrato?: boolean
    contratost?: boolean
    vtodoscontratos?: boolean
    vtodoshoraextra?: boolean
    ccontratos?: boolean
    choraextra?: boolean
  }

  export type UsuarioCreateOrConnectWithoutUnidadeInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutUnidadeInput, UsuarioUncheckedCreateWithoutUnidadeInput>
  }

  export type UsuarioCreateManyUnidadeInputEnvelope = {
    data: UsuarioCreateManyUnidadeInput | UsuarioCreateManyUnidadeInput[]
  }

  export type UsuarioUpsertWithWhereUniqueWithoutUnidadeInput = {
    where: UsuarioWhereUniqueInput
    update: XOR<UsuarioUpdateWithoutUnidadeInput, UsuarioUncheckedUpdateWithoutUnidadeInput>
    create: XOR<UsuarioCreateWithoutUnidadeInput, UsuarioUncheckedCreateWithoutUnidadeInput>
  }

  export type UsuarioUpdateWithWhereUniqueWithoutUnidadeInput = {
    where: UsuarioWhereUniqueInput
    data: XOR<UsuarioUpdateWithoutUnidadeInput, UsuarioUncheckedUpdateWithoutUnidadeInput>
  }

  export type UsuarioUpdateManyWithWhereWithoutUnidadeInput = {
    where: UsuarioScalarWhereInput
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyWithoutUnidadeInput>
  }

  export type UsuarioCreateManyNivelInput = {
    nome: string
    email: string
    cpf?: string | null
    dtnascimento?: Date | string | null
    sexo?: string | null
    idusercreateAt: number
    createdAt?: Date | string
    iduserupdatedAt?: number | null
    updatedAt?: Date | string | null
    status?: string
    senha: string
    trocasenha?: boolean
    iddepartamento: number
    idmenu?: number
    celular?: string | null
    ramaln?: string | null
    chatid?: string | null
    ti?: boolean
    contrato?: boolean
    contratost?: boolean
    idunidade?: number
    vtodoscontratos?: boolean
    vtodoshoraextra?: boolean
    ccontratos?: boolean
    choraextra?: boolean
  }

  export type UsuarioUpdateWithoutNivelInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    dtnascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sexo?: NullableStringFieldUpdateOperationsInput | string | null
    idusercreateAt?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    iduserupdatedAt?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    trocasenha?: BoolFieldUpdateOperationsInput | boolean
    iddepartamento?: IntFieldUpdateOperationsInput | number
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    ramaln?: NullableStringFieldUpdateOperationsInput | string | null
    chatid?: NullableStringFieldUpdateOperationsInput | string | null
    ti?: BoolFieldUpdateOperationsInput | boolean
    contrato?: BoolFieldUpdateOperationsInput | boolean
    contratost?: BoolFieldUpdateOperationsInput | boolean
    vtodoscontratos?: BoolFieldUpdateOperationsInput | boolean
    vtodoshoraextra?: BoolFieldUpdateOperationsInput | boolean
    ccontratos?: BoolFieldUpdateOperationsInput | boolean
    choraextra?: BoolFieldUpdateOperationsInput | boolean
    menu?: MenuUpdateOneRequiredWithoutUsuarioNestedInput
    unidade?: UnidadeUpdateOneRequiredWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutNivelInput = {
    idusuario?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    dtnascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sexo?: NullableStringFieldUpdateOperationsInput | string | null
    idusercreateAt?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    iduserupdatedAt?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    trocasenha?: BoolFieldUpdateOperationsInput | boolean
    iddepartamento?: IntFieldUpdateOperationsInput | number
    idmenu?: IntFieldUpdateOperationsInput | number
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    ramaln?: NullableStringFieldUpdateOperationsInput | string | null
    chatid?: NullableStringFieldUpdateOperationsInput | string | null
    ti?: BoolFieldUpdateOperationsInput | boolean
    contrato?: BoolFieldUpdateOperationsInput | boolean
    contratost?: BoolFieldUpdateOperationsInput | boolean
    idunidade?: IntFieldUpdateOperationsInput | number
    vtodoscontratos?: BoolFieldUpdateOperationsInput | boolean
    vtodoshoraextra?: BoolFieldUpdateOperationsInput | boolean
    ccontratos?: BoolFieldUpdateOperationsInput | boolean
    choraextra?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UsuarioUncheckedUpdateManyWithoutNivelInput = {
    idusuario?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    dtnascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sexo?: NullableStringFieldUpdateOperationsInput | string | null
    idusercreateAt?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    iduserupdatedAt?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    trocasenha?: BoolFieldUpdateOperationsInput | boolean
    iddepartamento?: IntFieldUpdateOperationsInput | number
    idmenu?: IntFieldUpdateOperationsInput | number
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    ramaln?: NullableStringFieldUpdateOperationsInput | string | null
    chatid?: NullableStringFieldUpdateOperationsInput | string | null
    ti?: BoolFieldUpdateOperationsInput | boolean
    contrato?: BoolFieldUpdateOperationsInput | boolean
    contratost?: BoolFieldUpdateOperationsInput | boolean
    idunidade?: IntFieldUpdateOperationsInput | number
    vtodoscontratos?: BoolFieldUpdateOperationsInput | boolean
    vtodoshoraextra?: BoolFieldUpdateOperationsInput | boolean
    ccontratos?: BoolFieldUpdateOperationsInput | boolean
    choraextra?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MenuitemCreateManyMenuInput = {
    seq: number
    titulo: string
    url: string
    icon: string
    idusercreateAt: number
    createdAt?: Date | string
    iduserupdatedAt?: number | null
    updatedAt?: Date | string | null
    status?: string
  }

  export type UsuarioCreateManyMenuInput = {
    nome: string
    email: string
    cpf?: string | null
    dtnascimento?: Date | string | null
    sexo?: string | null
    idusercreateAt: number
    createdAt?: Date | string
    iduserupdatedAt?: number | null
    updatedAt?: Date | string | null
    status?: string
    senha: string
    trocasenha?: boolean
    iddepartamento: number
    celular?: string | null
    ramaln?: string | null
    idnivel?: number
    chatid?: string | null
    ti?: boolean
    contrato?: boolean
    contratost?: boolean
    idunidade?: number
    vtodoscontratos?: boolean
    vtodoshoraextra?: boolean
    ccontratos?: boolean
    choraextra?: boolean
  }

  export type MenuitemUpdateWithoutMenuInput = {
    seq?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    idusercreateAt?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    iduserupdatedAt?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type MenuitemUncheckedUpdateWithoutMenuInput = {
    idmenuitem?: IntFieldUpdateOperationsInput | number
    seq?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    idusercreateAt?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    iduserupdatedAt?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type MenuitemUncheckedUpdateManyWithoutMenuInput = {
    idmenuitem?: IntFieldUpdateOperationsInput | number
    seq?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    idusercreateAt?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    iduserupdatedAt?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioUpdateWithoutMenuInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    dtnascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sexo?: NullableStringFieldUpdateOperationsInput | string | null
    idusercreateAt?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    iduserupdatedAt?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    trocasenha?: BoolFieldUpdateOperationsInput | boolean
    iddepartamento?: IntFieldUpdateOperationsInput | number
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    ramaln?: NullableStringFieldUpdateOperationsInput | string | null
    chatid?: NullableStringFieldUpdateOperationsInput | string | null
    ti?: BoolFieldUpdateOperationsInput | boolean
    contrato?: BoolFieldUpdateOperationsInput | boolean
    contratost?: BoolFieldUpdateOperationsInput | boolean
    vtodoscontratos?: BoolFieldUpdateOperationsInput | boolean
    vtodoshoraextra?: BoolFieldUpdateOperationsInput | boolean
    ccontratos?: BoolFieldUpdateOperationsInput | boolean
    choraextra?: BoolFieldUpdateOperationsInput | boolean
    nivel?: NivelUpdateOneRequiredWithoutUsuarioNestedInput
    unidade?: UnidadeUpdateOneRequiredWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutMenuInput = {
    idusuario?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    dtnascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sexo?: NullableStringFieldUpdateOperationsInput | string | null
    idusercreateAt?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    iduserupdatedAt?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    trocasenha?: BoolFieldUpdateOperationsInput | boolean
    iddepartamento?: IntFieldUpdateOperationsInput | number
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    ramaln?: NullableStringFieldUpdateOperationsInput | string | null
    idnivel?: IntFieldUpdateOperationsInput | number
    chatid?: NullableStringFieldUpdateOperationsInput | string | null
    ti?: BoolFieldUpdateOperationsInput | boolean
    contrato?: BoolFieldUpdateOperationsInput | boolean
    contratost?: BoolFieldUpdateOperationsInput | boolean
    idunidade?: IntFieldUpdateOperationsInput | number
    vtodoscontratos?: BoolFieldUpdateOperationsInput | boolean
    vtodoshoraextra?: BoolFieldUpdateOperationsInput | boolean
    ccontratos?: BoolFieldUpdateOperationsInput | boolean
    choraextra?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UsuarioUncheckedUpdateManyWithoutMenuInput = {
    idusuario?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    dtnascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sexo?: NullableStringFieldUpdateOperationsInput | string | null
    idusercreateAt?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    iduserupdatedAt?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    trocasenha?: BoolFieldUpdateOperationsInput | boolean
    iddepartamento?: IntFieldUpdateOperationsInput | number
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    ramaln?: NullableStringFieldUpdateOperationsInput | string | null
    idnivel?: IntFieldUpdateOperationsInput | number
    chatid?: NullableStringFieldUpdateOperationsInput | string | null
    ti?: BoolFieldUpdateOperationsInput | boolean
    contrato?: BoolFieldUpdateOperationsInput | boolean
    contratost?: BoolFieldUpdateOperationsInput | boolean
    idunidade?: IntFieldUpdateOperationsInput | number
    vtodoscontratos?: BoolFieldUpdateOperationsInput | boolean
    vtodoshoraextra?: BoolFieldUpdateOperationsInput | boolean
    ccontratos?: BoolFieldUpdateOperationsInput | boolean
    choraextra?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UsuariocolunaCreateManyColunaInput = {
    idusercreateAt: number
    createdAt?: Date | string
    iduserupdatedAt?: number | null
    updatedAt?: Date | string | null
    status?: string
    idusuario: number
  }

  export type UsuariocolunaUpdateWithoutColunaInput = {
    idusercreateAt?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    iduserupdatedAt?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    idusuario?: IntFieldUpdateOperationsInput | number
  }

  export type UsuariocolunaUncheckedUpdateWithoutColunaInput = {
    idusuariocoluna?: IntFieldUpdateOperationsInput | number
    idusercreateAt?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    iduserupdatedAt?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    idusuario?: IntFieldUpdateOperationsInput | number
  }

  export type UsuariocolunaUncheckedUpdateManyWithoutColunaInput = {
    idusuariocoluna?: IntFieldUpdateOperationsInput | number
    idusercreateAt?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    iduserupdatedAt?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    idusuario?: IntFieldUpdateOperationsInput | number
  }

  export type UsuarioCreateManyUnidadeInput = {
    nome: string
    email: string
    cpf?: string | null
    dtnascimento?: Date | string | null
    sexo?: string | null
    idusercreateAt: number
    createdAt?: Date | string
    iduserupdatedAt?: number | null
    updatedAt?: Date | string | null
    status?: string
    senha: string
    trocasenha?: boolean
    iddepartamento: number
    idmenu?: number
    celular?: string | null
    ramaln?: string | null
    idnivel?: number
    chatid?: string | null
    ti?: boolean
    contrato?: boolean
    contratost?: boolean
    vtodoscontratos?: boolean
    vtodoshoraextra?: boolean
    ccontratos?: boolean
    choraextra?: boolean
  }

  export type UsuarioUpdateWithoutUnidadeInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    dtnascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sexo?: NullableStringFieldUpdateOperationsInput | string | null
    idusercreateAt?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    iduserupdatedAt?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    trocasenha?: BoolFieldUpdateOperationsInput | boolean
    iddepartamento?: IntFieldUpdateOperationsInput | number
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    ramaln?: NullableStringFieldUpdateOperationsInput | string | null
    chatid?: NullableStringFieldUpdateOperationsInput | string | null
    ti?: BoolFieldUpdateOperationsInput | boolean
    contrato?: BoolFieldUpdateOperationsInput | boolean
    contratost?: BoolFieldUpdateOperationsInput | boolean
    vtodoscontratos?: BoolFieldUpdateOperationsInput | boolean
    vtodoshoraextra?: BoolFieldUpdateOperationsInput | boolean
    ccontratos?: BoolFieldUpdateOperationsInput | boolean
    choraextra?: BoolFieldUpdateOperationsInput | boolean
    nivel?: NivelUpdateOneRequiredWithoutUsuarioNestedInput
    menu?: MenuUpdateOneRequiredWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutUnidadeInput = {
    idusuario?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    dtnascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sexo?: NullableStringFieldUpdateOperationsInput | string | null
    idusercreateAt?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    iduserupdatedAt?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    trocasenha?: BoolFieldUpdateOperationsInput | boolean
    iddepartamento?: IntFieldUpdateOperationsInput | number
    idmenu?: IntFieldUpdateOperationsInput | number
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    ramaln?: NullableStringFieldUpdateOperationsInput | string | null
    idnivel?: IntFieldUpdateOperationsInput | number
    chatid?: NullableStringFieldUpdateOperationsInput | string | null
    ti?: BoolFieldUpdateOperationsInput | boolean
    contrato?: BoolFieldUpdateOperationsInput | boolean
    contratost?: BoolFieldUpdateOperationsInput | boolean
    vtodoscontratos?: BoolFieldUpdateOperationsInput | boolean
    vtodoshoraextra?: BoolFieldUpdateOperationsInput | boolean
    ccontratos?: BoolFieldUpdateOperationsInput | boolean
    choraextra?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UsuarioUncheckedUpdateManyWithoutUnidadeInput = {
    idusuario?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    dtnascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sexo?: NullableStringFieldUpdateOperationsInput | string | null
    idusercreateAt?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    iduserupdatedAt?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    trocasenha?: BoolFieldUpdateOperationsInput | boolean
    iddepartamento?: IntFieldUpdateOperationsInput | number
    idmenu?: IntFieldUpdateOperationsInput | number
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    ramaln?: NullableStringFieldUpdateOperationsInput | string | null
    idnivel?: IntFieldUpdateOperationsInput | number
    chatid?: NullableStringFieldUpdateOperationsInput | string | null
    ti?: BoolFieldUpdateOperationsInput | boolean
    contrato?: BoolFieldUpdateOperationsInput | boolean
    contratost?: BoolFieldUpdateOperationsInput | boolean
    vtodoscontratos?: BoolFieldUpdateOperationsInput | boolean
    vtodoshoraextra?: BoolFieldUpdateOperationsInput | boolean
    ccontratos?: BoolFieldUpdateOperationsInput | boolean
    choraextra?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use NivelCountOutputTypeDefaultArgs instead
     */
    export type NivelCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NivelCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MenuCountOutputTypeDefaultArgs instead
     */
    export type MenuCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MenuCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ColunaCountOutputTypeDefaultArgs instead
     */
    export type ColunaCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ColunaCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UnidadeCountOutputTypeDefaultArgs instead
     */
    export type UnidadeCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UnidadeCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsuarioDefaultArgs instead
     */
    export type UsuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsuarioDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NivelDefaultArgs instead
     */
    export type NivelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NivelDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LoginDefaultArgs instead
     */
    export type LoginArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LoginDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MenuDefaultArgs instead
     */
    export type MenuArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MenuDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MenuitemDefaultArgs instead
     */
    export type MenuitemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MenuitemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ColunaDefaultArgs instead
     */
    export type ColunaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ColunaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsuariocolunaDefaultArgs instead
     */
    export type UsuariocolunaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsuariocolunaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UnidadeDefaultArgs instead
     */
    export type UnidadeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UnidadeDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}