
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
 * Model Custoiql
 * 
 */
export type Custoiql = $Result.DefaultSelection<Prisma.$CustoiqlPayload>
/**
 * Model Inventario
 * 
 */
export type Inventario = $Result.DefaultSelection<Prisma.$InventarioPayload>
/**
 * Model Sendmail
 * 
 */
export type Sendmail = $Result.DefaultSelection<Prisma.$SendmailPayload>
/**
 * Model Resumocompras
 * 
 */
export type Resumocompras = $Result.DefaultSelection<Prisma.$ResumocomprasPayload>
/**
 * Model Compras
 * 
 */
export type Compras = $Result.DefaultSelection<Prisma.$ComprasPayload>
/**
 * Model Necessidade
 * 
 */
export type Necessidade = $Result.DefaultSelection<Prisma.$NecessidadePayload>
/**
 * Model Painel
 * 
 */
export type Painel = $Result.DefaultSelection<Prisma.$PainelPayload>

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

  /**
   * `prisma.custoiql`: Exposes CRUD operations for the **Custoiql** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Custoiqls
    * const custoiqls = await prisma.custoiql.findMany()
    * ```
    */
  get custoiql(): Prisma.CustoiqlDelegate<ExtArgs>;

  /**
   * `prisma.inventario`: Exposes CRUD operations for the **Inventario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inventarios
    * const inventarios = await prisma.inventario.findMany()
    * ```
    */
  get inventario(): Prisma.InventarioDelegate<ExtArgs>;

  /**
   * `prisma.sendmail`: Exposes CRUD operations for the **Sendmail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sendmails
    * const sendmails = await prisma.sendmail.findMany()
    * ```
    */
  get sendmail(): Prisma.SendmailDelegate<ExtArgs>;

  /**
   * `prisma.resumocompras`: Exposes CRUD operations for the **Resumocompras** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Resumocompras
    * const resumocompras = await prisma.resumocompras.findMany()
    * ```
    */
  get resumocompras(): Prisma.ResumocomprasDelegate<ExtArgs>;

  /**
   * `prisma.compras`: Exposes CRUD operations for the **Compras** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Compras
    * const compras = await prisma.compras.findMany()
    * ```
    */
  get compras(): Prisma.ComprasDelegate<ExtArgs>;

  /**
   * `prisma.necessidade`: Exposes CRUD operations for the **Necessidade** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Necessidades
    * const necessidades = await prisma.necessidade.findMany()
    * ```
    */
  get necessidade(): Prisma.NecessidadeDelegate<ExtArgs>;

  /**
   * `prisma.painel`: Exposes CRUD operations for the **Painel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Painels
    * const painels = await prisma.painel.findMany()
    * ```
    */
  get painel(): Prisma.PainelDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.21.1
   * Query Engine version: bf0e5e8a04cada8225617067eaa03d041e2bba36
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
    Unidade: 'Unidade',
    Custoiql: 'Custoiql',
    Inventario: 'Inventario',
    Sendmail: 'Sendmail',
    Resumocompras: 'Resumocompras',
    Compras: 'Compras',
    Necessidade: 'Necessidade',
    Painel: 'Painel'
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
      modelProps: "usuario" | "nivel" | "login" | "menu" | "menuitem" | "coluna" | "usuariocoluna" | "unidade" | "custoiql" | "inventario" | "sendmail" | "resumocompras" | "compras" | "necessidade" | "painel"
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
      Custoiql: {
        payload: Prisma.$CustoiqlPayload<ExtArgs>
        fields: Prisma.CustoiqlFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustoiqlFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustoiqlPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustoiqlFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustoiqlPayload>
          }
          findFirst: {
            args: Prisma.CustoiqlFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustoiqlPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustoiqlFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustoiqlPayload>
          }
          findMany: {
            args: Prisma.CustoiqlFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustoiqlPayload>[]
          }
          create: {
            args: Prisma.CustoiqlCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustoiqlPayload>
          }
          createMany: {
            args: Prisma.CustoiqlCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CustoiqlDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustoiqlPayload>
          }
          update: {
            args: Prisma.CustoiqlUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustoiqlPayload>
          }
          deleteMany: {
            args: Prisma.CustoiqlDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustoiqlUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CustoiqlUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustoiqlPayload>
          }
          aggregate: {
            args: Prisma.CustoiqlAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustoiql>
          }
          groupBy: {
            args: Prisma.CustoiqlGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustoiqlGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustoiqlCountArgs<ExtArgs>
            result: $Utils.Optional<CustoiqlCountAggregateOutputType> | number
          }
        }
      }
      Inventario: {
        payload: Prisma.$InventarioPayload<ExtArgs>
        fields: Prisma.InventarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InventarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InventarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventarioPayload>
          }
          findFirst: {
            args: Prisma.InventarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InventarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventarioPayload>
          }
          findMany: {
            args: Prisma.InventarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventarioPayload>[]
          }
          create: {
            args: Prisma.InventarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventarioPayload>
          }
          createMany: {
            args: Prisma.InventarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.InventarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventarioPayload>
          }
          update: {
            args: Prisma.InventarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventarioPayload>
          }
          deleteMany: {
            args: Prisma.InventarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InventarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InventarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventarioPayload>
          }
          aggregate: {
            args: Prisma.InventarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventario>
          }
          groupBy: {
            args: Prisma.InventarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<InventarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.InventarioCountArgs<ExtArgs>
            result: $Utils.Optional<InventarioCountAggregateOutputType> | number
          }
        }
      }
      Sendmail: {
        payload: Prisma.$SendmailPayload<ExtArgs>
        fields: Prisma.SendmailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SendmailFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SendmailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SendmailFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SendmailPayload>
          }
          findFirst: {
            args: Prisma.SendmailFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SendmailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SendmailFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SendmailPayload>
          }
          findMany: {
            args: Prisma.SendmailFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SendmailPayload>[]
          }
          create: {
            args: Prisma.SendmailCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SendmailPayload>
          }
          createMany: {
            args: Prisma.SendmailCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SendmailDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SendmailPayload>
          }
          update: {
            args: Prisma.SendmailUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SendmailPayload>
          }
          deleteMany: {
            args: Prisma.SendmailDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SendmailUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SendmailUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SendmailPayload>
          }
          aggregate: {
            args: Prisma.SendmailAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSendmail>
          }
          groupBy: {
            args: Prisma.SendmailGroupByArgs<ExtArgs>
            result: $Utils.Optional<SendmailGroupByOutputType>[]
          }
          count: {
            args: Prisma.SendmailCountArgs<ExtArgs>
            result: $Utils.Optional<SendmailCountAggregateOutputType> | number
          }
        }
      }
      Resumocompras: {
        payload: Prisma.$ResumocomprasPayload<ExtArgs>
        fields: Prisma.ResumocomprasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResumocomprasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumocomprasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResumocomprasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumocomprasPayload>
          }
          findFirst: {
            args: Prisma.ResumocomprasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumocomprasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResumocomprasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumocomprasPayload>
          }
          findMany: {
            args: Prisma.ResumocomprasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumocomprasPayload>[]
          }
          create: {
            args: Prisma.ResumocomprasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumocomprasPayload>
          }
          createMany: {
            args: Prisma.ResumocomprasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ResumocomprasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumocomprasPayload>
          }
          update: {
            args: Prisma.ResumocomprasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumocomprasPayload>
          }
          deleteMany: {
            args: Prisma.ResumocomprasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResumocomprasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ResumocomprasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumocomprasPayload>
          }
          aggregate: {
            args: Prisma.ResumocomprasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResumocompras>
          }
          groupBy: {
            args: Prisma.ResumocomprasGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResumocomprasGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResumocomprasCountArgs<ExtArgs>
            result: $Utils.Optional<ResumocomprasCountAggregateOutputType> | number
          }
        }
      }
      Compras: {
        payload: Prisma.$ComprasPayload<ExtArgs>
        fields: Prisma.ComprasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ComprasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComprasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ComprasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComprasPayload>
          }
          findFirst: {
            args: Prisma.ComprasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComprasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ComprasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComprasPayload>
          }
          findMany: {
            args: Prisma.ComprasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComprasPayload>[]
          }
          create: {
            args: Prisma.ComprasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComprasPayload>
          }
          createMany: {
            args: Prisma.ComprasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ComprasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComprasPayload>
          }
          update: {
            args: Prisma.ComprasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComprasPayload>
          }
          deleteMany: {
            args: Prisma.ComprasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ComprasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ComprasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComprasPayload>
          }
          aggregate: {
            args: Prisma.ComprasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompras>
          }
          groupBy: {
            args: Prisma.ComprasGroupByArgs<ExtArgs>
            result: $Utils.Optional<ComprasGroupByOutputType>[]
          }
          count: {
            args: Prisma.ComprasCountArgs<ExtArgs>
            result: $Utils.Optional<ComprasCountAggregateOutputType> | number
          }
        }
      }
      Necessidade: {
        payload: Prisma.$NecessidadePayload<ExtArgs>
        fields: Prisma.NecessidadeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NecessidadeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NecessidadePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NecessidadeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NecessidadePayload>
          }
          findFirst: {
            args: Prisma.NecessidadeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NecessidadePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NecessidadeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NecessidadePayload>
          }
          findMany: {
            args: Prisma.NecessidadeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NecessidadePayload>[]
          }
          create: {
            args: Prisma.NecessidadeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NecessidadePayload>
          }
          createMany: {
            args: Prisma.NecessidadeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.NecessidadeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NecessidadePayload>
          }
          update: {
            args: Prisma.NecessidadeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NecessidadePayload>
          }
          deleteMany: {
            args: Prisma.NecessidadeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NecessidadeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NecessidadeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NecessidadePayload>
          }
          aggregate: {
            args: Prisma.NecessidadeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNecessidade>
          }
          groupBy: {
            args: Prisma.NecessidadeGroupByArgs<ExtArgs>
            result: $Utils.Optional<NecessidadeGroupByOutputType>[]
          }
          count: {
            args: Prisma.NecessidadeCountArgs<ExtArgs>
            result: $Utils.Optional<NecessidadeCountAggregateOutputType> | number
          }
        }
      }
      Painel: {
        payload: Prisma.$PainelPayload<ExtArgs>
        fields: Prisma.PainelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PainelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PainelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PainelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PainelPayload>
          }
          findFirst: {
            args: Prisma.PainelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PainelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PainelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PainelPayload>
          }
          findMany: {
            args: Prisma.PainelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PainelPayload>[]
          }
          create: {
            args: Prisma.PainelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PainelPayload>
          }
          createMany: {
            args: Prisma.PainelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PainelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PainelPayload>
          }
          update: {
            args: Prisma.PainelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PainelPayload>
          }
          deleteMany: {
            args: Prisma.PainelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PainelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PainelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PainelPayload>
          }
          aggregate: {
            args: Prisma.PainelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePainel>
          }
          groupBy: {
            args: Prisma.PainelGroupByArgs<ExtArgs>
            result: $Utils.Optional<PainelGroupByOutputType>[]
          }
          count: {
            args: Prisma.PainelCountArgs<ExtArgs>
            result: $Utils.Optional<PainelCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
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
    skipDuplicates?: boolean
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
    skipDuplicates?: boolean
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
    skipDuplicates?: boolean
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
    skipDuplicates?: boolean
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
    skipDuplicates?: boolean
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
    fixa: boolean | null
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
    fixa: boolean | null
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
    fixa: number
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
    fixa?: true
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
    fixa?: true
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
    fixa?: true
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
    fixa: boolean
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
    fixa?: boolean
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
    fixa?: boolean
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
      fixa: boolean
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
    readonly fixa: FieldRef<"Coluna", 'Boolean'>
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
    skipDuplicates?: boolean
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
    skipDuplicates?: boolean
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
    skipDuplicates?: boolean
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
   * Model Custoiql
   */

  export type AggregateCustoiql = {
    _count: CustoiqlCountAggregateOutputType | null
    _avg: CustoiqlAvgAggregateOutputType | null
    _sum: CustoiqlSumAggregateOutputType | null
    _min: CustoiqlMinAggregateOutputType | null
    _max: CustoiqlMaxAggregateOutputType | null
  }

  export type CustoiqlAvgAggregateOutputType = {
    id: number | null
    quantidade_final: Decimal | null
    valor_unitario: Decimal | null
    custo: Decimal | null
    quantidade_produzida: Decimal | null
  }

  export type CustoiqlSumAggregateOutputType = {
    id: number | null
    quantidade_final: Decimal | null
    valor_unitario: Decimal | null
    custo: Decimal | null
    quantidade_produzida: Decimal | null
  }

  export type CustoiqlMinAggregateOutputType = {
    id: number | null
    numero_op: string | null
    produzido: string | null
    data_finalizacao: Date | null
    codigo_produto: string | null
    desc_tecnica: string | null
    quantidade_final: Decimal | null
    descricao: string | null
    valor_unitario: Decimal | null
    custo: Decimal | null
    quantidade_produzida: Decimal | null
  }

  export type CustoiqlMaxAggregateOutputType = {
    id: number | null
    numero_op: string | null
    produzido: string | null
    data_finalizacao: Date | null
    codigo_produto: string | null
    desc_tecnica: string | null
    quantidade_final: Decimal | null
    descricao: string | null
    valor_unitario: Decimal | null
    custo: Decimal | null
    quantidade_produzida: Decimal | null
  }

  export type CustoiqlCountAggregateOutputType = {
    id: number
    numero_op: number
    produzido: number
    data_finalizacao: number
    codigo_produto: number
    desc_tecnica: number
    quantidade_final: number
    descricao: number
    valor_unitario: number
    custo: number
    quantidade_produzida: number
    _all: number
  }


  export type CustoiqlAvgAggregateInputType = {
    id?: true
    quantidade_final?: true
    valor_unitario?: true
    custo?: true
    quantidade_produzida?: true
  }

  export type CustoiqlSumAggregateInputType = {
    id?: true
    quantidade_final?: true
    valor_unitario?: true
    custo?: true
    quantidade_produzida?: true
  }

  export type CustoiqlMinAggregateInputType = {
    id?: true
    numero_op?: true
    produzido?: true
    data_finalizacao?: true
    codigo_produto?: true
    desc_tecnica?: true
    quantidade_final?: true
    descricao?: true
    valor_unitario?: true
    custo?: true
    quantidade_produzida?: true
  }

  export type CustoiqlMaxAggregateInputType = {
    id?: true
    numero_op?: true
    produzido?: true
    data_finalizacao?: true
    codigo_produto?: true
    desc_tecnica?: true
    quantidade_final?: true
    descricao?: true
    valor_unitario?: true
    custo?: true
    quantidade_produzida?: true
  }

  export type CustoiqlCountAggregateInputType = {
    id?: true
    numero_op?: true
    produzido?: true
    data_finalizacao?: true
    codigo_produto?: true
    desc_tecnica?: true
    quantidade_final?: true
    descricao?: true
    valor_unitario?: true
    custo?: true
    quantidade_produzida?: true
    _all?: true
  }

  export type CustoiqlAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Custoiql to aggregate.
     */
    where?: CustoiqlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Custoiqls to fetch.
     */
    orderBy?: CustoiqlOrderByWithRelationInput | CustoiqlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustoiqlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Custoiqls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Custoiqls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Custoiqls
    **/
    _count?: true | CustoiqlCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustoiqlAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustoiqlSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustoiqlMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustoiqlMaxAggregateInputType
  }

  export type GetCustoiqlAggregateType<T extends CustoiqlAggregateArgs> = {
        [P in keyof T & keyof AggregateCustoiql]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustoiql[P]>
      : GetScalarType<T[P], AggregateCustoiql[P]>
  }




  export type CustoiqlGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustoiqlWhereInput
    orderBy?: CustoiqlOrderByWithAggregationInput | CustoiqlOrderByWithAggregationInput[]
    by: CustoiqlScalarFieldEnum[] | CustoiqlScalarFieldEnum
    having?: CustoiqlScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustoiqlCountAggregateInputType | true
    _avg?: CustoiqlAvgAggregateInputType
    _sum?: CustoiqlSumAggregateInputType
    _min?: CustoiqlMinAggregateInputType
    _max?: CustoiqlMaxAggregateInputType
  }

  export type CustoiqlGroupByOutputType = {
    id: number
    numero_op: string
    produzido: string | null
    data_finalizacao: Date | null
    codigo_produto: string | null
    desc_tecnica: string | null
    quantidade_final: Decimal | null
    descricao: string | null
    valor_unitario: Decimal | null
    custo: Decimal | null
    quantidade_produzida: Decimal | null
    _count: CustoiqlCountAggregateOutputType | null
    _avg: CustoiqlAvgAggregateOutputType | null
    _sum: CustoiqlSumAggregateOutputType | null
    _min: CustoiqlMinAggregateOutputType | null
    _max: CustoiqlMaxAggregateOutputType | null
  }

  type GetCustoiqlGroupByPayload<T extends CustoiqlGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustoiqlGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustoiqlGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustoiqlGroupByOutputType[P]>
            : GetScalarType<T[P], CustoiqlGroupByOutputType[P]>
        }
      >
    >


  export type CustoiqlSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numero_op?: boolean
    produzido?: boolean
    data_finalizacao?: boolean
    codigo_produto?: boolean
    desc_tecnica?: boolean
    quantidade_final?: boolean
    descricao?: boolean
    valor_unitario?: boolean
    custo?: boolean
    quantidade_produzida?: boolean
  }, ExtArgs["result"]["custoiql"]>


  export type CustoiqlSelectScalar = {
    id?: boolean
    numero_op?: boolean
    produzido?: boolean
    data_finalizacao?: boolean
    codigo_produto?: boolean
    desc_tecnica?: boolean
    quantidade_final?: boolean
    descricao?: boolean
    valor_unitario?: boolean
    custo?: boolean
    quantidade_produzida?: boolean
  }


  export type $CustoiqlPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Custoiql"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      numero_op: string
      produzido: string | null
      data_finalizacao: Date | null
      codigo_produto: string | null
      desc_tecnica: string | null
      quantidade_final: Prisma.Decimal | null
      descricao: string | null
      valor_unitario: Prisma.Decimal | null
      custo: Prisma.Decimal | null
      quantidade_produzida: Prisma.Decimal | null
    }, ExtArgs["result"]["custoiql"]>
    composites: {}
  }

  type CustoiqlGetPayload<S extends boolean | null | undefined | CustoiqlDefaultArgs> = $Result.GetResult<Prisma.$CustoiqlPayload, S>

  type CustoiqlCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CustoiqlFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CustoiqlCountAggregateInputType | true
    }

  export interface CustoiqlDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Custoiql'], meta: { name: 'Custoiql' } }
    /**
     * Find zero or one Custoiql that matches the filter.
     * @param {CustoiqlFindUniqueArgs} args - Arguments to find a Custoiql
     * @example
     * // Get one Custoiql
     * const custoiql = await prisma.custoiql.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustoiqlFindUniqueArgs>(args: SelectSubset<T, CustoiqlFindUniqueArgs<ExtArgs>>): Prisma__CustoiqlClient<$Result.GetResult<Prisma.$CustoiqlPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Custoiql that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CustoiqlFindUniqueOrThrowArgs} args - Arguments to find a Custoiql
     * @example
     * // Get one Custoiql
     * const custoiql = await prisma.custoiql.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustoiqlFindUniqueOrThrowArgs>(args: SelectSubset<T, CustoiqlFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustoiqlClient<$Result.GetResult<Prisma.$CustoiqlPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Custoiql that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustoiqlFindFirstArgs} args - Arguments to find a Custoiql
     * @example
     * // Get one Custoiql
     * const custoiql = await prisma.custoiql.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustoiqlFindFirstArgs>(args?: SelectSubset<T, CustoiqlFindFirstArgs<ExtArgs>>): Prisma__CustoiqlClient<$Result.GetResult<Prisma.$CustoiqlPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Custoiql that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustoiqlFindFirstOrThrowArgs} args - Arguments to find a Custoiql
     * @example
     * // Get one Custoiql
     * const custoiql = await prisma.custoiql.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustoiqlFindFirstOrThrowArgs>(args?: SelectSubset<T, CustoiqlFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustoiqlClient<$Result.GetResult<Prisma.$CustoiqlPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Custoiqls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustoiqlFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Custoiqls
     * const custoiqls = await prisma.custoiql.findMany()
     * 
     * // Get first 10 Custoiqls
     * const custoiqls = await prisma.custoiql.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const custoiqlWithIdOnly = await prisma.custoiql.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustoiqlFindManyArgs>(args?: SelectSubset<T, CustoiqlFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustoiqlPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Custoiql.
     * @param {CustoiqlCreateArgs} args - Arguments to create a Custoiql.
     * @example
     * // Create one Custoiql
     * const Custoiql = await prisma.custoiql.create({
     *   data: {
     *     // ... data to create a Custoiql
     *   }
     * })
     * 
     */
    create<T extends CustoiqlCreateArgs>(args: SelectSubset<T, CustoiqlCreateArgs<ExtArgs>>): Prisma__CustoiqlClient<$Result.GetResult<Prisma.$CustoiqlPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Custoiqls.
     * @param {CustoiqlCreateManyArgs} args - Arguments to create many Custoiqls.
     * @example
     * // Create many Custoiqls
     * const custoiql = await prisma.custoiql.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustoiqlCreateManyArgs>(args?: SelectSubset<T, CustoiqlCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Custoiql.
     * @param {CustoiqlDeleteArgs} args - Arguments to delete one Custoiql.
     * @example
     * // Delete one Custoiql
     * const Custoiql = await prisma.custoiql.delete({
     *   where: {
     *     // ... filter to delete one Custoiql
     *   }
     * })
     * 
     */
    delete<T extends CustoiqlDeleteArgs>(args: SelectSubset<T, CustoiqlDeleteArgs<ExtArgs>>): Prisma__CustoiqlClient<$Result.GetResult<Prisma.$CustoiqlPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Custoiql.
     * @param {CustoiqlUpdateArgs} args - Arguments to update one Custoiql.
     * @example
     * // Update one Custoiql
     * const custoiql = await prisma.custoiql.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustoiqlUpdateArgs>(args: SelectSubset<T, CustoiqlUpdateArgs<ExtArgs>>): Prisma__CustoiqlClient<$Result.GetResult<Prisma.$CustoiqlPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Custoiqls.
     * @param {CustoiqlDeleteManyArgs} args - Arguments to filter Custoiqls to delete.
     * @example
     * // Delete a few Custoiqls
     * const { count } = await prisma.custoiql.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustoiqlDeleteManyArgs>(args?: SelectSubset<T, CustoiqlDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Custoiqls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustoiqlUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Custoiqls
     * const custoiql = await prisma.custoiql.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustoiqlUpdateManyArgs>(args: SelectSubset<T, CustoiqlUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Custoiql.
     * @param {CustoiqlUpsertArgs} args - Arguments to update or create a Custoiql.
     * @example
     * // Update or create a Custoiql
     * const custoiql = await prisma.custoiql.upsert({
     *   create: {
     *     // ... data to create a Custoiql
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Custoiql we want to update
     *   }
     * })
     */
    upsert<T extends CustoiqlUpsertArgs>(args: SelectSubset<T, CustoiqlUpsertArgs<ExtArgs>>): Prisma__CustoiqlClient<$Result.GetResult<Prisma.$CustoiqlPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Custoiqls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustoiqlCountArgs} args - Arguments to filter Custoiqls to count.
     * @example
     * // Count the number of Custoiqls
     * const count = await prisma.custoiql.count({
     *   where: {
     *     // ... the filter for the Custoiqls we want to count
     *   }
     * })
    **/
    count<T extends CustoiqlCountArgs>(
      args?: Subset<T, CustoiqlCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustoiqlCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Custoiql.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustoiqlAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustoiqlAggregateArgs>(args: Subset<T, CustoiqlAggregateArgs>): Prisma.PrismaPromise<GetCustoiqlAggregateType<T>>

    /**
     * Group by Custoiql.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustoiqlGroupByArgs} args - Group by arguments.
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
      T extends CustoiqlGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustoiqlGroupByArgs['orderBy'] }
        : { orderBy?: CustoiqlGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustoiqlGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustoiqlGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Custoiql model
   */
  readonly fields: CustoiqlFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Custoiql.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustoiqlClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Custoiql model
   */ 
  interface CustoiqlFieldRefs {
    readonly id: FieldRef<"Custoiql", 'Int'>
    readonly numero_op: FieldRef<"Custoiql", 'String'>
    readonly produzido: FieldRef<"Custoiql", 'String'>
    readonly data_finalizacao: FieldRef<"Custoiql", 'DateTime'>
    readonly codigo_produto: FieldRef<"Custoiql", 'String'>
    readonly desc_tecnica: FieldRef<"Custoiql", 'String'>
    readonly quantidade_final: FieldRef<"Custoiql", 'Decimal'>
    readonly descricao: FieldRef<"Custoiql", 'String'>
    readonly valor_unitario: FieldRef<"Custoiql", 'Decimal'>
    readonly custo: FieldRef<"Custoiql", 'Decimal'>
    readonly quantidade_produzida: FieldRef<"Custoiql", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * Custoiql findUnique
   */
  export type CustoiqlFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Custoiql
     */
    select?: CustoiqlSelect<ExtArgs> | null
    /**
     * Filter, which Custoiql to fetch.
     */
    where: CustoiqlWhereUniqueInput
  }

  /**
   * Custoiql findUniqueOrThrow
   */
  export type CustoiqlFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Custoiql
     */
    select?: CustoiqlSelect<ExtArgs> | null
    /**
     * Filter, which Custoiql to fetch.
     */
    where: CustoiqlWhereUniqueInput
  }

  /**
   * Custoiql findFirst
   */
  export type CustoiqlFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Custoiql
     */
    select?: CustoiqlSelect<ExtArgs> | null
    /**
     * Filter, which Custoiql to fetch.
     */
    where?: CustoiqlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Custoiqls to fetch.
     */
    orderBy?: CustoiqlOrderByWithRelationInput | CustoiqlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Custoiqls.
     */
    cursor?: CustoiqlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Custoiqls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Custoiqls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Custoiqls.
     */
    distinct?: CustoiqlScalarFieldEnum | CustoiqlScalarFieldEnum[]
  }

  /**
   * Custoiql findFirstOrThrow
   */
  export type CustoiqlFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Custoiql
     */
    select?: CustoiqlSelect<ExtArgs> | null
    /**
     * Filter, which Custoiql to fetch.
     */
    where?: CustoiqlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Custoiqls to fetch.
     */
    orderBy?: CustoiqlOrderByWithRelationInput | CustoiqlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Custoiqls.
     */
    cursor?: CustoiqlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Custoiqls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Custoiqls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Custoiqls.
     */
    distinct?: CustoiqlScalarFieldEnum | CustoiqlScalarFieldEnum[]
  }

  /**
   * Custoiql findMany
   */
  export type CustoiqlFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Custoiql
     */
    select?: CustoiqlSelect<ExtArgs> | null
    /**
     * Filter, which Custoiqls to fetch.
     */
    where?: CustoiqlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Custoiqls to fetch.
     */
    orderBy?: CustoiqlOrderByWithRelationInput | CustoiqlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Custoiqls.
     */
    cursor?: CustoiqlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Custoiqls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Custoiqls.
     */
    skip?: number
    distinct?: CustoiqlScalarFieldEnum | CustoiqlScalarFieldEnum[]
  }

  /**
   * Custoiql create
   */
  export type CustoiqlCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Custoiql
     */
    select?: CustoiqlSelect<ExtArgs> | null
    /**
     * The data needed to create a Custoiql.
     */
    data: XOR<CustoiqlCreateInput, CustoiqlUncheckedCreateInput>
  }

  /**
   * Custoiql createMany
   */
  export type CustoiqlCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Custoiqls.
     */
    data: CustoiqlCreateManyInput | CustoiqlCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Custoiql update
   */
  export type CustoiqlUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Custoiql
     */
    select?: CustoiqlSelect<ExtArgs> | null
    /**
     * The data needed to update a Custoiql.
     */
    data: XOR<CustoiqlUpdateInput, CustoiqlUncheckedUpdateInput>
    /**
     * Choose, which Custoiql to update.
     */
    where: CustoiqlWhereUniqueInput
  }

  /**
   * Custoiql updateMany
   */
  export type CustoiqlUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Custoiqls.
     */
    data: XOR<CustoiqlUpdateManyMutationInput, CustoiqlUncheckedUpdateManyInput>
    /**
     * Filter which Custoiqls to update
     */
    where?: CustoiqlWhereInput
  }

  /**
   * Custoiql upsert
   */
  export type CustoiqlUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Custoiql
     */
    select?: CustoiqlSelect<ExtArgs> | null
    /**
     * The filter to search for the Custoiql to update in case it exists.
     */
    where: CustoiqlWhereUniqueInput
    /**
     * In case the Custoiql found by the `where` argument doesn't exist, create a new Custoiql with this data.
     */
    create: XOR<CustoiqlCreateInput, CustoiqlUncheckedCreateInput>
    /**
     * In case the Custoiql was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustoiqlUpdateInput, CustoiqlUncheckedUpdateInput>
  }

  /**
   * Custoiql delete
   */
  export type CustoiqlDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Custoiql
     */
    select?: CustoiqlSelect<ExtArgs> | null
    /**
     * Filter which Custoiql to delete.
     */
    where: CustoiqlWhereUniqueInput
  }

  /**
   * Custoiql deleteMany
   */
  export type CustoiqlDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Custoiqls to delete
     */
    where?: CustoiqlWhereInput
  }

  /**
   * Custoiql without action
   */
  export type CustoiqlDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Custoiql
     */
    select?: CustoiqlSelect<ExtArgs> | null
  }


  /**
   * Model Inventario
   */

  export type AggregateInventario = {
    _count: InventarioCountAggregateOutputType | null
    _avg: InventarioAvgAggregateOutputType | null
    _sum: InventarioSumAggregateOutputType | null
    _min: InventarioMinAggregateOutputType | null
    _max: InventarioMaxAggregateOutputType | null
  }

  export type InventarioAvgAggregateOutputType = {
    id_inv: number | null
    quantidade: Decimal | null
    estoque: Decimal | null
  }

  export type InventarioSumAggregateOutputType = {
    id_inv: number | null
    quantidade: Decimal | null
    estoque: Decimal | null
  }

  export type InventarioMinAggregateOutputType = {
    id_inv: number | null
    produto: string | null
    coletor: string | null
    quantidade: Decimal | null
    cod_produto: string | null
    Codigo_tipo_item: string | null
    lote: string | null
    lote_original: string | null
    Lote_interno: string | null
    Data_validade_prod: Date | null
    Desc_tecnica: string | null
    Data: Date | null
    Unidade_estoque: string | null
    Unidade_compra: string | null
    codigo_embalagem: string | null
    estoque: Decimal | null
  }

  export type InventarioMaxAggregateOutputType = {
    id_inv: number | null
    produto: string | null
    coletor: string | null
    quantidade: Decimal | null
    cod_produto: string | null
    Codigo_tipo_item: string | null
    lote: string | null
    lote_original: string | null
    Lote_interno: string | null
    Data_validade_prod: Date | null
    Desc_tecnica: string | null
    Data: Date | null
    Unidade_estoque: string | null
    Unidade_compra: string | null
    codigo_embalagem: string | null
    estoque: Decimal | null
  }

  export type InventarioCountAggregateOutputType = {
    id_inv: number
    produto: number
    coletor: number
    quantidade: number
    cod_produto: number
    Codigo_tipo_item: number
    lote: number
    lote_original: number
    Lote_interno: number
    Data_validade_prod: number
    Desc_tecnica: number
    Data: number
    Unidade_estoque: number
    Unidade_compra: number
    codigo_embalagem: number
    estoque: number
    _all: number
  }


  export type InventarioAvgAggregateInputType = {
    id_inv?: true
    quantidade?: true
    estoque?: true
  }

  export type InventarioSumAggregateInputType = {
    id_inv?: true
    quantidade?: true
    estoque?: true
  }

  export type InventarioMinAggregateInputType = {
    id_inv?: true
    produto?: true
    coletor?: true
    quantidade?: true
    cod_produto?: true
    Codigo_tipo_item?: true
    lote?: true
    lote_original?: true
    Lote_interno?: true
    Data_validade_prod?: true
    Desc_tecnica?: true
    Data?: true
    Unidade_estoque?: true
    Unidade_compra?: true
    codigo_embalagem?: true
    estoque?: true
  }

  export type InventarioMaxAggregateInputType = {
    id_inv?: true
    produto?: true
    coletor?: true
    quantidade?: true
    cod_produto?: true
    Codigo_tipo_item?: true
    lote?: true
    lote_original?: true
    Lote_interno?: true
    Data_validade_prod?: true
    Desc_tecnica?: true
    Data?: true
    Unidade_estoque?: true
    Unidade_compra?: true
    codigo_embalagem?: true
    estoque?: true
  }

  export type InventarioCountAggregateInputType = {
    id_inv?: true
    produto?: true
    coletor?: true
    quantidade?: true
    cod_produto?: true
    Codigo_tipo_item?: true
    lote?: true
    lote_original?: true
    Lote_interno?: true
    Data_validade_prod?: true
    Desc_tecnica?: true
    Data?: true
    Unidade_estoque?: true
    Unidade_compra?: true
    codigo_embalagem?: true
    estoque?: true
    _all?: true
  }

  export type InventarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inventario to aggregate.
     */
    where?: InventarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventarios to fetch.
     */
    orderBy?: InventarioOrderByWithRelationInput | InventarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InventarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Inventarios
    **/
    _count?: true | InventarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InventarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InventarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventarioMaxAggregateInputType
  }

  export type GetInventarioAggregateType<T extends InventarioAggregateArgs> = {
        [P in keyof T & keyof AggregateInventario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventario[P]>
      : GetScalarType<T[P], AggregateInventario[P]>
  }




  export type InventarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventarioWhereInput
    orderBy?: InventarioOrderByWithAggregationInput | InventarioOrderByWithAggregationInput[]
    by: InventarioScalarFieldEnum[] | InventarioScalarFieldEnum
    having?: InventarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventarioCountAggregateInputType | true
    _avg?: InventarioAvgAggregateInputType
    _sum?: InventarioSumAggregateInputType
    _min?: InventarioMinAggregateInputType
    _max?: InventarioMaxAggregateInputType
  }

  export type InventarioGroupByOutputType = {
    id_inv: number
    produto: string
    coletor: string | null
    quantidade: Decimal | null
    cod_produto: string | null
    Codigo_tipo_item: string | null
    lote: string | null
    lote_original: string | null
    Lote_interno: string | null
    Data_validade_prod: Date | null
    Desc_tecnica: string | null
    Data: Date | null
    Unidade_estoque: string | null
    Unidade_compra: string | null
    codigo_embalagem: string | null
    estoque: Decimal | null
    _count: InventarioCountAggregateOutputType | null
    _avg: InventarioAvgAggregateOutputType | null
    _sum: InventarioSumAggregateOutputType | null
    _min: InventarioMinAggregateOutputType | null
    _max: InventarioMaxAggregateOutputType | null
  }

  type GetInventarioGroupByPayload<T extends InventarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventarioGroupByOutputType[P]>
            : GetScalarType<T[P], InventarioGroupByOutputType[P]>
        }
      >
    >


  export type InventarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_inv?: boolean
    produto?: boolean
    coletor?: boolean
    quantidade?: boolean
    cod_produto?: boolean
    Codigo_tipo_item?: boolean
    lote?: boolean
    lote_original?: boolean
    Lote_interno?: boolean
    Data_validade_prod?: boolean
    Desc_tecnica?: boolean
    Data?: boolean
    Unidade_estoque?: boolean
    Unidade_compra?: boolean
    codigo_embalagem?: boolean
    estoque?: boolean
  }, ExtArgs["result"]["inventario"]>


  export type InventarioSelectScalar = {
    id_inv?: boolean
    produto?: boolean
    coletor?: boolean
    quantidade?: boolean
    cod_produto?: boolean
    Codigo_tipo_item?: boolean
    lote?: boolean
    lote_original?: boolean
    Lote_interno?: boolean
    Data_validade_prod?: boolean
    Desc_tecnica?: boolean
    Data?: boolean
    Unidade_estoque?: boolean
    Unidade_compra?: boolean
    codigo_embalagem?: boolean
    estoque?: boolean
  }


  export type $InventarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Inventario"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id_inv: number
      produto: string
      coletor: string | null
      quantidade: Prisma.Decimal | null
      cod_produto: string | null
      Codigo_tipo_item: string | null
      lote: string | null
      lote_original: string | null
      Lote_interno: string | null
      Data_validade_prod: Date | null
      Desc_tecnica: string | null
      Data: Date | null
      Unidade_estoque: string | null
      Unidade_compra: string | null
      codigo_embalagem: string | null
      estoque: Prisma.Decimal | null
    }, ExtArgs["result"]["inventario"]>
    composites: {}
  }

  type InventarioGetPayload<S extends boolean | null | undefined | InventarioDefaultArgs> = $Result.GetResult<Prisma.$InventarioPayload, S>

  type InventarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<InventarioFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: InventarioCountAggregateInputType | true
    }

  export interface InventarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Inventario'], meta: { name: 'Inventario' } }
    /**
     * Find zero or one Inventario that matches the filter.
     * @param {InventarioFindUniqueArgs} args - Arguments to find a Inventario
     * @example
     * // Get one Inventario
     * const inventario = await prisma.inventario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InventarioFindUniqueArgs>(args: SelectSubset<T, InventarioFindUniqueArgs<ExtArgs>>): Prisma__InventarioClient<$Result.GetResult<Prisma.$InventarioPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Inventario that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {InventarioFindUniqueOrThrowArgs} args - Arguments to find a Inventario
     * @example
     * // Get one Inventario
     * const inventario = await prisma.inventario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InventarioFindUniqueOrThrowArgs>(args: SelectSubset<T, InventarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InventarioClient<$Result.GetResult<Prisma.$InventarioPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Inventario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventarioFindFirstArgs} args - Arguments to find a Inventario
     * @example
     * // Get one Inventario
     * const inventario = await prisma.inventario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InventarioFindFirstArgs>(args?: SelectSubset<T, InventarioFindFirstArgs<ExtArgs>>): Prisma__InventarioClient<$Result.GetResult<Prisma.$InventarioPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Inventario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventarioFindFirstOrThrowArgs} args - Arguments to find a Inventario
     * @example
     * // Get one Inventario
     * const inventario = await prisma.inventario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InventarioFindFirstOrThrowArgs>(args?: SelectSubset<T, InventarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__InventarioClient<$Result.GetResult<Prisma.$InventarioPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Inventarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inventarios
     * const inventarios = await prisma.inventario.findMany()
     * 
     * // Get first 10 Inventarios
     * const inventarios = await prisma.inventario.findMany({ take: 10 })
     * 
     * // Only select the `id_inv`
     * const inventarioWithId_invOnly = await prisma.inventario.findMany({ select: { id_inv: true } })
     * 
     */
    findMany<T extends InventarioFindManyArgs>(args?: SelectSubset<T, InventarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventarioPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Inventario.
     * @param {InventarioCreateArgs} args - Arguments to create a Inventario.
     * @example
     * // Create one Inventario
     * const Inventario = await prisma.inventario.create({
     *   data: {
     *     // ... data to create a Inventario
     *   }
     * })
     * 
     */
    create<T extends InventarioCreateArgs>(args: SelectSubset<T, InventarioCreateArgs<ExtArgs>>): Prisma__InventarioClient<$Result.GetResult<Prisma.$InventarioPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Inventarios.
     * @param {InventarioCreateManyArgs} args - Arguments to create many Inventarios.
     * @example
     * // Create many Inventarios
     * const inventario = await prisma.inventario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InventarioCreateManyArgs>(args?: SelectSubset<T, InventarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Inventario.
     * @param {InventarioDeleteArgs} args - Arguments to delete one Inventario.
     * @example
     * // Delete one Inventario
     * const Inventario = await prisma.inventario.delete({
     *   where: {
     *     // ... filter to delete one Inventario
     *   }
     * })
     * 
     */
    delete<T extends InventarioDeleteArgs>(args: SelectSubset<T, InventarioDeleteArgs<ExtArgs>>): Prisma__InventarioClient<$Result.GetResult<Prisma.$InventarioPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Inventario.
     * @param {InventarioUpdateArgs} args - Arguments to update one Inventario.
     * @example
     * // Update one Inventario
     * const inventario = await prisma.inventario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InventarioUpdateArgs>(args: SelectSubset<T, InventarioUpdateArgs<ExtArgs>>): Prisma__InventarioClient<$Result.GetResult<Prisma.$InventarioPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Inventarios.
     * @param {InventarioDeleteManyArgs} args - Arguments to filter Inventarios to delete.
     * @example
     * // Delete a few Inventarios
     * const { count } = await prisma.inventario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InventarioDeleteManyArgs>(args?: SelectSubset<T, InventarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inventarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inventarios
     * const inventario = await prisma.inventario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InventarioUpdateManyArgs>(args: SelectSubset<T, InventarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Inventario.
     * @param {InventarioUpsertArgs} args - Arguments to update or create a Inventario.
     * @example
     * // Update or create a Inventario
     * const inventario = await prisma.inventario.upsert({
     *   create: {
     *     // ... data to create a Inventario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inventario we want to update
     *   }
     * })
     */
    upsert<T extends InventarioUpsertArgs>(args: SelectSubset<T, InventarioUpsertArgs<ExtArgs>>): Prisma__InventarioClient<$Result.GetResult<Prisma.$InventarioPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Inventarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventarioCountArgs} args - Arguments to filter Inventarios to count.
     * @example
     * // Count the number of Inventarios
     * const count = await prisma.inventario.count({
     *   where: {
     *     // ... the filter for the Inventarios we want to count
     *   }
     * })
    **/
    count<T extends InventarioCountArgs>(
      args?: Subset<T, InventarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inventario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InventarioAggregateArgs>(args: Subset<T, InventarioAggregateArgs>): Prisma.PrismaPromise<GetInventarioAggregateType<T>>

    /**
     * Group by Inventario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventarioGroupByArgs} args - Group by arguments.
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
      T extends InventarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InventarioGroupByArgs['orderBy'] }
        : { orderBy?: InventarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InventarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Inventario model
   */
  readonly fields: InventarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Inventario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InventarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Inventario model
   */ 
  interface InventarioFieldRefs {
    readonly id_inv: FieldRef<"Inventario", 'Int'>
    readonly produto: FieldRef<"Inventario", 'String'>
    readonly coletor: FieldRef<"Inventario", 'String'>
    readonly quantidade: FieldRef<"Inventario", 'Decimal'>
    readonly cod_produto: FieldRef<"Inventario", 'String'>
    readonly Codigo_tipo_item: FieldRef<"Inventario", 'String'>
    readonly lote: FieldRef<"Inventario", 'String'>
    readonly lote_original: FieldRef<"Inventario", 'String'>
    readonly Lote_interno: FieldRef<"Inventario", 'String'>
    readonly Data_validade_prod: FieldRef<"Inventario", 'DateTime'>
    readonly Desc_tecnica: FieldRef<"Inventario", 'String'>
    readonly Data: FieldRef<"Inventario", 'DateTime'>
    readonly Unidade_estoque: FieldRef<"Inventario", 'String'>
    readonly Unidade_compra: FieldRef<"Inventario", 'String'>
    readonly codigo_embalagem: FieldRef<"Inventario", 'String'>
    readonly estoque: FieldRef<"Inventario", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * Inventario findUnique
   */
  export type InventarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventario
     */
    select?: InventarioSelect<ExtArgs> | null
    /**
     * Filter, which Inventario to fetch.
     */
    where: InventarioWhereUniqueInput
  }

  /**
   * Inventario findUniqueOrThrow
   */
  export type InventarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventario
     */
    select?: InventarioSelect<ExtArgs> | null
    /**
     * Filter, which Inventario to fetch.
     */
    where: InventarioWhereUniqueInput
  }

  /**
   * Inventario findFirst
   */
  export type InventarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventario
     */
    select?: InventarioSelect<ExtArgs> | null
    /**
     * Filter, which Inventario to fetch.
     */
    where?: InventarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventarios to fetch.
     */
    orderBy?: InventarioOrderByWithRelationInput | InventarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inventarios.
     */
    cursor?: InventarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inventarios.
     */
    distinct?: InventarioScalarFieldEnum | InventarioScalarFieldEnum[]
  }

  /**
   * Inventario findFirstOrThrow
   */
  export type InventarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventario
     */
    select?: InventarioSelect<ExtArgs> | null
    /**
     * Filter, which Inventario to fetch.
     */
    where?: InventarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventarios to fetch.
     */
    orderBy?: InventarioOrderByWithRelationInput | InventarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inventarios.
     */
    cursor?: InventarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inventarios.
     */
    distinct?: InventarioScalarFieldEnum | InventarioScalarFieldEnum[]
  }

  /**
   * Inventario findMany
   */
  export type InventarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventario
     */
    select?: InventarioSelect<ExtArgs> | null
    /**
     * Filter, which Inventarios to fetch.
     */
    where?: InventarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventarios to fetch.
     */
    orderBy?: InventarioOrderByWithRelationInput | InventarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Inventarios.
     */
    cursor?: InventarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventarios.
     */
    skip?: number
    distinct?: InventarioScalarFieldEnum | InventarioScalarFieldEnum[]
  }

  /**
   * Inventario create
   */
  export type InventarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventario
     */
    select?: InventarioSelect<ExtArgs> | null
    /**
     * The data needed to create a Inventario.
     */
    data: XOR<InventarioCreateInput, InventarioUncheckedCreateInput>
  }

  /**
   * Inventario createMany
   */
  export type InventarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Inventarios.
     */
    data: InventarioCreateManyInput | InventarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Inventario update
   */
  export type InventarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventario
     */
    select?: InventarioSelect<ExtArgs> | null
    /**
     * The data needed to update a Inventario.
     */
    data: XOR<InventarioUpdateInput, InventarioUncheckedUpdateInput>
    /**
     * Choose, which Inventario to update.
     */
    where: InventarioWhereUniqueInput
  }

  /**
   * Inventario updateMany
   */
  export type InventarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Inventarios.
     */
    data: XOR<InventarioUpdateManyMutationInput, InventarioUncheckedUpdateManyInput>
    /**
     * Filter which Inventarios to update
     */
    where?: InventarioWhereInput
  }

  /**
   * Inventario upsert
   */
  export type InventarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventario
     */
    select?: InventarioSelect<ExtArgs> | null
    /**
     * The filter to search for the Inventario to update in case it exists.
     */
    where: InventarioWhereUniqueInput
    /**
     * In case the Inventario found by the `where` argument doesn't exist, create a new Inventario with this data.
     */
    create: XOR<InventarioCreateInput, InventarioUncheckedCreateInput>
    /**
     * In case the Inventario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InventarioUpdateInput, InventarioUncheckedUpdateInput>
  }

  /**
   * Inventario delete
   */
  export type InventarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventario
     */
    select?: InventarioSelect<ExtArgs> | null
    /**
     * Filter which Inventario to delete.
     */
    where: InventarioWhereUniqueInput
  }

  /**
   * Inventario deleteMany
   */
  export type InventarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inventarios to delete
     */
    where?: InventarioWhereInput
  }

  /**
   * Inventario without action
   */
  export type InventarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventario
     */
    select?: InventarioSelect<ExtArgs> | null
  }


  /**
   * Model Sendmail
   */

  export type AggregateSendmail = {
    _count: SendmailCountAggregateOutputType | null
    _avg: SendmailAvgAggregateOutputType | null
    _sum: SendmailSumAggregateOutputType | null
    _min: SendmailMinAggregateOutputType | null
    _max: SendmailMaxAggregateOutputType | null
  }

  export type SendmailAvgAggregateOutputType = {
    idsendmail: number | null
    idusercreateAt: number | null
    iduserupdatedAt: number | null
    idsolicitante: number | null
    idusuarioaprovacao: number | null
    idusuariocotacao: number | null
    idusuarioaprovacaodir: number | null
    idusuariocompra: number | null
    idusuarioentrega: number | null
    idcompra: number | null
  }

  export type SendmailSumAggregateOutputType = {
    idsendmail: number | null
    idusercreateAt: number | null
    iduserupdatedAt: number | null
    idsolicitante: number | null
    idusuarioaprovacao: number | null
    idusuariocotacao: number | null
    idusuarioaprovacaodir: number | null
    idusuariocompra: number | null
    idusuarioentrega: number | null
    idcompra: number | null
  }

  export type SendmailMinAggregateOutputType = {
    idsendmail: number | null
    destinatario: string | null
    html: Buffer | null
    subject: string | null
    idusercreateAt: number | null
    createdAt: Date | null
    iduserupdatedAt: number | null
    updatedAt: Date | null
    status: string | null
    idsolicitante: number | null
    idusuarioaprovacao: number | null
    idusuariocotacao: number | null
    idusuarioaprovacaodir: number | null
    idusuariocompra: number | null
    idusuarioentrega: number | null
    idcompra: number | null
    attachments: Buffer | null
  }

  export type SendmailMaxAggregateOutputType = {
    idsendmail: number | null
    destinatario: string | null
    html: Buffer | null
    subject: string | null
    idusercreateAt: number | null
    createdAt: Date | null
    iduserupdatedAt: number | null
    updatedAt: Date | null
    status: string | null
    idsolicitante: number | null
    idusuarioaprovacao: number | null
    idusuariocotacao: number | null
    idusuarioaprovacaodir: number | null
    idusuariocompra: number | null
    idusuarioentrega: number | null
    idcompra: number | null
    attachments: Buffer | null
  }

  export type SendmailCountAggregateOutputType = {
    idsendmail: number
    destinatario: number
    html: number
    subject: number
    idusercreateAt: number
    createdAt: number
    iduserupdatedAt: number
    updatedAt: number
    status: number
    idsolicitante: number
    idusuarioaprovacao: number
    idusuariocotacao: number
    idusuarioaprovacaodir: number
    idusuariocompra: number
    idusuarioentrega: number
    idcompra: number
    attachments: number
    _all: number
  }


  export type SendmailAvgAggregateInputType = {
    idsendmail?: true
    idusercreateAt?: true
    iduserupdatedAt?: true
    idsolicitante?: true
    idusuarioaprovacao?: true
    idusuariocotacao?: true
    idusuarioaprovacaodir?: true
    idusuariocompra?: true
    idusuarioentrega?: true
    idcompra?: true
  }

  export type SendmailSumAggregateInputType = {
    idsendmail?: true
    idusercreateAt?: true
    iduserupdatedAt?: true
    idsolicitante?: true
    idusuarioaprovacao?: true
    idusuariocotacao?: true
    idusuarioaprovacaodir?: true
    idusuariocompra?: true
    idusuarioentrega?: true
    idcompra?: true
  }

  export type SendmailMinAggregateInputType = {
    idsendmail?: true
    destinatario?: true
    html?: true
    subject?: true
    idusercreateAt?: true
    createdAt?: true
    iduserupdatedAt?: true
    updatedAt?: true
    status?: true
    idsolicitante?: true
    idusuarioaprovacao?: true
    idusuariocotacao?: true
    idusuarioaprovacaodir?: true
    idusuariocompra?: true
    idusuarioentrega?: true
    idcompra?: true
    attachments?: true
  }

  export type SendmailMaxAggregateInputType = {
    idsendmail?: true
    destinatario?: true
    html?: true
    subject?: true
    idusercreateAt?: true
    createdAt?: true
    iduserupdatedAt?: true
    updatedAt?: true
    status?: true
    idsolicitante?: true
    idusuarioaprovacao?: true
    idusuariocotacao?: true
    idusuarioaprovacaodir?: true
    idusuariocompra?: true
    idusuarioentrega?: true
    idcompra?: true
    attachments?: true
  }

  export type SendmailCountAggregateInputType = {
    idsendmail?: true
    destinatario?: true
    html?: true
    subject?: true
    idusercreateAt?: true
    createdAt?: true
    iduserupdatedAt?: true
    updatedAt?: true
    status?: true
    idsolicitante?: true
    idusuarioaprovacao?: true
    idusuariocotacao?: true
    idusuarioaprovacaodir?: true
    idusuariocompra?: true
    idusuarioentrega?: true
    idcompra?: true
    attachments?: true
    _all?: true
  }

  export type SendmailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sendmail to aggregate.
     */
    where?: SendmailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sendmails to fetch.
     */
    orderBy?: SendmailOrderByWithRelationInput | SendmailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SendmailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sendmails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sendmails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sendmails
    **/
    _count?: true | SendmailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SendmailAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SendmailSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SendmailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SendmailMaxAggregateInputType
  }

  export type GetSendmailAggregateType<T extends SendmailAggregateArgs> = {
        [P in keyof T & keyof AggregateSendmail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSendmail[P]>
      : GetScalarType<T[P], AggregateSendmail[P]>
  }




  export type SendmailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SendmailWhereInput
    orderBy?: SendmailOrderByWithAggregationInput | SendmailOrderByWithAggregationInput[]
    by: SendmailScalarFieldEnum[] | SendmailScalarFieldEnum
    having?: SendmailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SendmailCountAggregateInputType | true
    _avg?: SendmailAvgAggregateInputType
    _sum?: SendmailSumAggregateInputType
    _min?: SendmailMinAggregateInputType
    _max?: SendmailMaxAggregateInputType
  }

  export type SendmailGroupByOutputType = {
    idsendmail: number
    destinatario: string
    html: Buffer
    subject: string
    idusercreateAt: number
    createdAt: Date
    iduserupdatedAt: number | null
    updatedAt: Date | null
    status: string
    idsolicitante: number | null
    idusuarioaprovacao: number | null
    idusuariocotacao: number | null
    idusuarioaprovacaodir: number | null
    idusuariocompra: number | null
    idusuarioentrega: number | null
    idcompra: number | null
    attachments: Buffer | null
    _count: SendmailCountAggregateOutputType | null
    _avg: SendmailAvgAggregateOutputType | null
    _sum: SendmailSumAggregateOutputType | null
    _min: SendmailMinAggregateOutputType | null
    _max: SendmailMaxAggregateOutputType | null
  }

  type GetSendmailGroupByPayload<T extends SendmailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SendmailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SendmailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SendmailGroupByOutputType[P]>
            : GetScalarType<T[P], SendmailGroupByOutputType[P]>
        }
      >
    >


  export type SendmailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idsendmail?: boolean
    destinatario?: boolean
    html?: boolean
    subject?: boolean
    idusercreateAt?: boolean
    createdAt?: boolean
    iduserupdatedAt?: boolean
    updatedAt?: boolean
    status?: boolean
    idsolicitante?: boolean
    idusuarioaprovacao?: boolean
    idusuariocotacao?: boolean
    idusuarioaprovacaodir?: boolean
    idusuariocompra?: boolean
    idusuarioentrega?: boolean
    idcompra?: boolean
    attachments?: boolean
  }, ExtArgs["result"]["sendmail"]>


  export type SendmailSelectScalar = {
    idsendmail?: boolean
    destinatario?: boolean
    html?: boolean
    subject?: boolean
    idusercreateAt?: boolean
    createdAt?: boolean
    iduserupdatedAt?: boolean
    updatedAt?: boolean
    status?: boolean
    idsolicitante?: boolean
    idusuarioaprovacao?: boolean
    idusuariocotacao?: boolean
    idusuarioaprovacaodir?: boolean
    idusuariocompra?: boolean
    idusuarioentrega?: boolean
    idcompra?: boolean
    attachments?: boolean
  }


  export type $SendmailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sendmail"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      idsendmail: number
      destinatario: string
      html: Buffer
      subject: string
      idusercreateAt: number
      createdAt: Date
      iduserupdatedAt: number | null
      updatedAt: Date | null
      status: string
      idsolicitante: number | null
      idusuarioaprovacao: number | null
      idusuariocotacao: number | null
      idusuarioaprovacaodir: number | null
      idusuariocompra: number | null
      idusuarioentrega: number | null
      idcompra: number | null
      attachments: Buffer | null
    }, ExtArgs["result"]["sendmail"]>
    composites: {}
  }

  type SendmailGetPayload<S extends boolean | null | undefined | SendmailDefaultArgs> = $Result.GetResult<Prisma.$SendmailPayload, S>

  type SendmailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SendmailFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SendmailCountAggregateInputType | true
    }

  export interface SendmailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sendmail'], meta: { name: 'Sendmail' } }
    /**
     * Find zero or one Sendmail that matches the filter.
     * @param {SendmailFindUniqueArgs} args - Arguments to find a Sendmail
     * @example
     * // Get one Sendmail
     * const sendmail = await prisma.sendmail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SendmailFindUniqueArgs>(args: SelectSubset<T, SendmailFindUniqueArgs<ExtArgs>>): Prisma__SendmailClient<$Result.GetResult<Prisma.$SendmailPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Sendmail that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SendmailFindUniqueOrThrowArgs} args - Arguments to find a Sendmail
     * @example
     * // Get one Sendmail
     * const sendmail = await prisma.sendmail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SendmailFindUniqueOrThrowArgs>(args: SelectSubset<T, SendmailFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SendmailClient<$Result.GetResult<Prisma.$SendmailPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Sendmail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SendmailFindFirstArgs} args - Arguments to find a Sendmail
     * @example
     * // Get one Sendmail
     * const sendmail = await prisma.sendmail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SendmailFindFirstArgs>(args?: SelectSubset<T, SendmailFindFirstArgs<ExtArgs>>): Prisma__SendmailClient<$Result.GetResult<Prisma.$SendmailPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Sendmail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SendmailFindFirstOrThrowArgs} args - Arguments to find a Sendmail
     * @example
     * // Get one Sendmail
     * const sendmail = await prisma.sendmail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SendmailFindFirstOrThrowArgs>(args?: SelectSubset<T, SendmailFindFirstOrThrowArgs<ExtArgs>>): Prisma__SendmailClient<$Result.GetResult<Prisma.$SendmailPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Sendmails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SendmailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sendmails
     * const sendmails = await prisma.sendmail.findMany()
     * 
     * // Get first 10 Sendmails
     * const sendmails = await prisma.sendmail.findMany({ take: 10 })
     * 
     * // Only select the `idsendmail`
     * const sendmailWithIdsendmailOnly = await prisma.sendmail.findMany({ select: { idsendmail: true } })
     * 
     */
    findMany<T extends SendmailFindManyArgs>(args?: SelectSubset<T, SendmailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SendmailPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Sendmail.
     * @param {SendmailCreateArgs} args - Arguments to create a Sendmail.
     * @example
     * // Create one Sendmail
     * const Sendmail = await prisma.sendmail.create({
     *   data: {
     *     // ... data to create a Sendmail
     *   }
     * })
     * 
     */
    create<T extends SendmailCreateArgs>(args: SelectSubset<T, SendmailCreateArgs<ExtArgs>>): Prisma__SendmailClient<$Result.GetResult<Prisma.$SendmailPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Sendmails.
     * @param {SendmailCreateManyArgs} args - Arguments to create many Sendmails.
     * @example
     * // Create many Sendmails
     * const sendmail = await prisma.sendmail.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SendmailCreateManyArgs>(args?: SelectSubset<T, SendmailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sendmail.
     * @param {SendmailDeleteArgs} args - Arguments to delete one Sendmail.
     * @example
     * // Delete one Sendmail
     * const Sendmail = await prisma.sendmail.delete({
     *   where: {
     *     // ... filter to delete one Sendmail
     *   }
     * })
     * 
     */
    delete<T extends SendmailDeleteArgs>(args: SelectSubset<T, SendmailDeleteArgs<ExtArgs>>): Prisma__SendmailClient<$Result.GetResult<Prisma.$SendmailPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Sendmail.
     * @param {SendmailUpdateArgs} args - Arguments to update one Sendmail.
     * @example
     * // Update one Sendmail
     * const sendmail = await prisma.sendmail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SendmailUpdateArgs>(args: SelectSubset<T, SendmailUpdateArgs<ExtArgs>>): Prisma__SendmailClient<$Result.GetResult<Prisma.$SendmailPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Sendmails.
     * @param {SendmailDeleteManyArgs} args - Arguments to filter Sendmails to delete.
     * @example
     * // Delete a few Sendmails
     * const { count } = await prisma.sendmail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SendmailDeleteManyArgs>(args?: SelectSubset<T, SendmailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sendmails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SendmailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sendmails
     * const sendmail = await prisma.sendmail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SendmailUpdateManyArgs>(args: SelectSubset<T, SendmailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sendmail.
     * @param {SendmailUpsertArgs} args - Arguments to update or create a Sendmail.
     * @example
     * // Update or create a Sendmail
     * const sendmail = await prisma.sendmail.upsert({
     *   create: {
     *     // ... data to create a Sendmail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sendmail we want to update
     *   }
     * })
     */
    upsert<T extends SendmailUpsertArgs>(args: SelectSubset<T, SendmailUpsertArgs<ExtArgs>>): Prisma__SendmailClient<$Result.GetResult<Prisma.$SendmailPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Sendmails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SendmailCountArgs} args - Arguments to filter Sendmails to count.
     * @example
     * // Count the number of Sendmails
     * const count = await prisma.sendmail.count({
     *   where: {
     *     // ... the filter for the Sendmails we want to count
     *   }
     * })
    **/
    count<T extends SendmailCountArgs>(
      args?: Subset<T, SendmailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SendmailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sendmail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SendmailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SendmailAggregateArgs>(args: Subset<T, SendmailAggregateArgs>): Prisma.PrismaPromise<GetSendmailAggregateType<T>>

    /**
     * Group by Sendmail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SendmailGroupByArgs} args - Group by arguments.
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
      T extends SendmailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SendmailGroupByArgs['orderBy'] }
        : { orderBy?: SendmailGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SendmailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSendmailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sendmail model
   */
  readonly fields: SendmailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sendmail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SendmailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Sendmail model
   */ 
  interface SendmailFieldRefs {
    readonly idsendmail: FieldRef<"Sendmail", 'Int'>
    readonly destinatario: FieldRef<"Sendmail", 'String'>
    readonly html: FieldRef<"Sendmail", 'Bytes'>
    readonly subject: FieldRef<"Sendmail", 'String'>
    readonly idusercreateAt: FieldRef<"Sendmail", 'Int'>
    readonly createdAt: FieldRef<"Sendmail", 'DateTime'>
    readonly iduserupdatedAt: FieldRef<"Sendmail", 'Int'>
    readonly updatedAt: FieldRef<"Sendmail", 'DateTime'>
    readonly status: FieldRef<"Sendmail", 'String'>
    readonly idsolicitante: FieldRef<"Sendmail", 'Int'>
    readonly idusuarioaprovacao: FieldRef<"Sendmail", 'Int'>
    readonly idusuariocotacao: FieldRef<"Sendmail", 'Int'>
    readonly idusuarioaprovacaodir: FieldRef<"Sendmail", 'Int'>
    readonly idusuariocompra: FieldRef<"Sendmail", 'Int'>
    readonly idusuarioentrega: FieldRef<"Sendmail", 'Int'>
    readonly idcompra: FieldRef<"Sendmail", 'Int'>
    readonly attachments: FieldRef<"Sendmail", 'Bytes'>
  }
    

  // Custom InputTypes
  /**
   * Sendmail findUnique
   */
  export type SendmailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sendmail
     */
    select?: SendmailSelect<ExtArgs> | null
    /**
     * Filter, which Sendmail to fetch.
     */
    where: SendmailWhereUniqueInput
  }

  /**
   * Sendmail findUniqueOrThrow
   */
  export type SendmailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sendmail
     */
    select?: SendmailSelect<ExtArgs> | null
    /**
     * Filter, which Sendmail to fetch.
     */
    where: SendmailWhereUniqueInput
  }

  /**
   * Sendmail findFirst
   */
  export type SendmailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sendmail
     */
    select?: SendmailSelect<ExtArgs> | null
    /**
     * Filter, which Sendmail to fetch.
     */
    where?: SendmailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sendmails to fetch.
     */
    orderBy?: SendmailOrderByWithRelationInput | SendmailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sendmails.
     */
    cursor?: SendmailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sendmails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sendmails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sendmails.
     */
    distinct?: SendmailScalarFieldEnum | SendmailScalarFieldEnum[]
  }

  /**
   * Sendmail findFirstOrThrow
   */
  export type SendmailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sendmail
     */
    select?: SendmailSelect<ExtArgs> | null
    /**
     * Filter, which Sendmail to fetch.
     */
    where?: SendmailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sendmails to fetch.
     */
    orderBy?: SendmailOrderByWithRelationInput | SendmailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sendmails.
     */
    cursor?: SendmailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sendmails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sendmails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sendmails.
     */
    distinct?: SendmailScalarFieldEnum | SendmailScalarFieldEnum[]
  }

  /**
   * Sendmail findMany
   */
  export type SendmailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sendmail
     */
    select?: SendmailSelect<ExtArgs> | null
    /**
     * Filter, which Sendmails to fetch.
     */
    where?: SendmailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sendmails to fetch.
     */
    orderBy?: SendmailOrderByWithRelationInput | SendmailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sendmails.
     */
    cursor?: SendmailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sendmails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sendmails.
     */
    skip?: number
    distinct?: SendmailScalarFieldEnum | SendmailScalarFieldEnum[]
  }

  /**
   * Sendmail create
   */
  export type SendmailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sendmail
     */
    select?: SendmailSelect<ExtArgs> | null
    /**
     * The data needed to create a Sendmail.
     */
    data: XOR<SendmailCreateInput, SendmailUncheckedCreateInput>
  }

  /**
   * Sendmail createMany
   */
  export type SendmailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sendmails.
     */
    data: SendmailCreateManyInput | SendmailCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sendmail update
   */
  export type SendmailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sendmail
     */
    select?: SendmailSelect<ExtArgs> | null
    /**
     * The data needed to update a Sendmail.
     */
    data: XOR<SendmailUpdateInput, SendmailUncheckedUpdateInput>
    /**
     * Choose, which Sendmail to update.
     */
    where: SendmailWhereUniqueInput
  }

  /**
   * Sendmail updateMany
   */
  export type SendmailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sendmails.
     */
    data: XOR<SendmailUpdateManyMutationInput, SendmailUncheckedUpdateManyInput>
    /**
     * Filter which Sendmails to update
     */
    where?: SendmailWhereInput
  }

  /**
   * Sendmail upsert
   */
  export type SendmailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sendmail
     */
    select?: SendmailSelect<ExtArgs> | null
    /**
     * The filter to search for the Sendmail to update in case it exists.
     */
    where: SendmailWhereUniqueInput
    /**
     * In case the Sendmail found by the `where` argument doesn't exist, create a new Sendmail with this data.
     */
    create: XOR<SendmailCreateInput, SendmailUncheckedCreateInput>
    /**
     * In case the Sendmail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SendmailUpdateInput, SendmailUncheckedUpdateInput>
  }

  /**
   * Sendmail delete
   */
  export type SendmailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sendmail
     */
    select?: SendmailSelect<ExtArgs> | null
    /**
     * Filter which Sendmail to delete.
     */
    where: SendmailWhereUniqueInput
  }

  /**
   * Sendmail deleteMany
   */
  export type SendmailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sendmails to delete
     */
    where?: SendmailWhereInput
  }

  /**
   * Sendmail without action
   */
  export type SendmailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sendmail
     */
    select?: SendmailSelect<ExtArgs> | null
  }


  /**
   * Model Resumocompras
   */

  export type AggregateResumocompras = {
    _count: ResumocomprasCountAggregateOutputType | null
    _avg: ResumocomprasAvgAggregateOutputType | null
    _sum: ResumocomprasSumAggregateOutputType | null
    _min: ResumocomprasMinAggregateOutputType | null
    _max: ResumocomprasMaxAggregateOutputType | null
  }

  export type ResumocomprasAvgAggregateOutputType = {
    id: number | null
    Estoque_minimo: Decimal | null
    Lote_compra: Decimal | null
    mes1: Decimal | null
    mes2: Decimal | null
    mes3: Decimal | null
    mes4: Decimal | null
    mes5: Decimal | null
    mes6: Decimal | null
    mes7: Decimal | null
    mes8: Decimal | null
    mes9: Decimal | null
    mes10: Decimal | null
    mes11: Decimal | null
    mes12: Decimal | null
    compras: Decimal | null
    opcadastradas: Decimal | null
    saldoestoque: Decimal | null
    coleta: Decimal | null
  }

  export type ResumocomprasSumAggregateOutputType = {
    id: number | null
    Estoque_minimo: Decimal | null
    Lote_compra: Decimal | null
    mes1: Decimal | null
    mes2: Decimal | null
    mes3: Decimal | null
    mes4: Decimal | null
    mes5: Decimal | null
    mes6: Decimal | null
    mes7: Decimal | null
    mes8: Decimal | null
    mes9: Decimal | null
    mes10: Decimal | null
    mes11: Decimal | null
    mes12: Decimal | null
    compras: Decimal | null
    opcadastradas: Decimal | null
    saldoestoque: Decimal | null
    coleta: Decimal | null
  }

  export type ResumocomprasMinAggregateOutputType = {
    id: number | null
    Apelido_empresa: string | null
    Apelido_estabelecimento: string | null
    Codigo_produto: string | null
    Unidade_estoque: string | null
    Unidade_compra: string | null
    Desc_tecnica: string | null
    Estoque_minimo: Decimal | null
    Lote_compra: Decimal | null
    mes1: Decimal | null
    mes2: Decimal | null
    mes3: Decimal | null
    mes4: Decimal | null
    mes5: Decimal | null
    mes6: Decimal | null
    mes7: Decimal | null
    mes8: Decimal | null
    mes9: Decimal | null
    mes10: Decimal | null
    mes11: Decimal | null
    mes12: Decimal | null
    compras: Decimal | null
    opcadastradas: Decimal | null
    saldoestoque: Decimal | null
    coleta: Decimal | null
  }

  export type ResumocomprasMaxAggregateOutputType = {
    id: number | null
    Apelido_empresa: string | null
    Apelido_estabelecimento: string | null
    Codigo_produto: string | null
    Unidade_estoque: string | null
    Unidade_compra: string | null
    Desc_tecnica: string | null
    Estoque_minimo: Decimal | null
    Lote_compra: Decimal | null
    mes1: Decimal | null
    mes2: Decimal | null
    mes3: Decimal | null
    mes4: Decimal | null
    mes5: Decimal | null
    mes6: Decimal | null
    mes7: Decimal | null
    mes8: Decimal | null
    mes9: Decimal | null
    mes10: Decimal | null
    mes11: Decimal | null
    mes12: Decimal | null
    compras: Decimal | null
    opcadastradas: Decimal | null
    saldoestoque: Decimal | null
    coleta: Decimal | null
  }

  export type ResumocomprasCountAggregateOutputType = {
    id: number
    Apelido_empresa: number
    Apelido_estabelecimento: number
    Codigo_produto: number
    Unidade_estoque: number
    Unidade_compra: number
    Desc_tecnica: number
    Estoque_minimo: number
    Lote_compra: number
    mes1: number
    mes2: number
    mes3: number
    mes4: number
    mes5: number
    mes6: number
    mes7: number
    mes8: number
    mes9: number
    mes10: number
    mes11: number
    mes12: number
    compras: number
    opcadastradas: number
    saldoestoque: number
    coleta: number
    _all: number
  }


  export type ResumocomprasAvgAggregateInputType = {
    id?: true
    Estoque_minimo?: true
    Lote_compra?: true
    mes1?: true
    mes2?: true
    mes3?: true
    mes4?: true
    mes5?: true
    mes6?: true
    mes7?: true
    mes8?: true
    mes9?: true
    mes10?: true
    mes11?: true
    mes12?: true
    compras?: true
    opcadastradas?: true
    saldoestoque?: true
    coleta?: true
  }

  export type ResumocomprasSumAggregateInputType = {
    id?: true
    Estoque_minimo?: true
    Lote_compra?: true
    mes1?: true
    mes2?: true
    mes3?: true
    mes4?: true
    mes5?: true
    mes6?: true
    mes7?: true
    mes8?: true
    mes9?: true
    mes10?: true
    mes11?: true
    mes12?: true
    compras?: true
    opcadastradas?: true
    saldoestoque?: true
    coleta?: true
  }

  export type ResumocomprasMinAggregateInputType = {
    id?: true
    Apelido_empresa?: true
    Apelido_estabelecimento?: true
    Codigo_produto?: true
    Unidade_estoque?: true
    Unidade_compra?: true
    Desc_tecnica?: true
    Estoque_minimo?: true
    Lote_compra?: true
    mes1?: true
    mes2?: true
    mes3?: true
    mes4?: true
    mes5?: true
    mes6?: true
    mes7?: true
    mes8?: true
    mes9?: true
    mes10?: true
    mes11?: true
    mes12?: true
    compras?: true
    opcadastradas?: true
    saldoestoque?: true
    coleta?: true
  }

  export type ResumocomprasMaxAggregateInputType = {
    id?: true
    Apelido_empresa?: true
    Apelido_estabelecimento?: true
    Codigo_produto?: true
    Unidade_estoque?: true
    Unidade_compra?: true
    Desc_tecnica?: true
    Estoque_minimo?: true
    Lote_compra?: true
    mes1?: true
    mes2?: true
    mes3?: true
    mes4?: true
    mes5?: true
    mes6?: true
    mes7?: true
    mes8?: true
    mes9?: true
    mes10?: true
    mes11?: true
    mes12?: true
    compras?: true
    opcadastradas?: true
    saldoestoque?: true
    coleta?: true
  }

  export type ResumocomprasCountAggregateInputType = {
    id?: true
    Apelido_empresa?: true
    Apelido_estabelecimento?: true
    Codigo_produto?: true
    Unidade_estoque?: true
    Unidade_compra?: true
    Desc_tecnica?: true
    Estoque_minimo?: true
    Lote_compra?: true
    mes1?: true
    mes2?: true
    mes3?: true
    mes4?: true
    mes5?: true
    mes6?: true
    mes7?: true
    mes8?: true
    mes9?: true
    mes10?: true
    mes11?: true
    mes12?: true
    compras?: true
    opcadastradas?: true
    saldoestoque?: true
    coleta?: true
    _all?: true
  }

  export type ResumocomprasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resumocompras to aggregate.
     */
    where?: ResumocomprasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resumocompras to fetch.
     */
    orderBy?: ResumocomprasOrderByWithRelationInput | ResumocomprasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResumocomprasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resumocompras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resumocompras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Resumocompras
    **/
    _count?: true | ResumocomprasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResumocomprasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResumocomprasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResumocomprasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResumocomprasMaxAggregateInputType
  }

  export type GetResumocomprasAggregateType<T extends ResumocomprasAggregateArgs> = {
        [P in keyof T & keyof AggregateResumocompras]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResumocompras[P]>
      : GetScalarType<T[P], AggregateResumocompras[P]>
  }




  export type ResumocomprasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResumocomprasWhereInput
    orderBy?: ResumocomprasOrderByWithAggregationInput | ResumocomprasOrderByWithAggregationInput[]
    by: ResumocomprasScalarFieldEnum[] | ResumocomprasScalarFieldEnum
    having?: ResumocomprasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResumocomprasCountAggregateInputType | true
    _avg?: ResumocomprasAvgAggregateInputType
    _sum?: ResumocomprasSumAggregateInputType
    _min?: ResumocomprasMinAggregateInputType
    _max?: ResumocomprasMaxAggregateInputType
  }

  export type ResumocomprasGroupByOutputType = {
    id: number
    Apelido_empresa: string | null
    Apelido_estabelecimento: string | null
    Codigo_produto: string | null
    Unidade_estoque: string | null
    Unidade_compra: string | null
    Desc_tecnica: string | null
    Estoque_minimo: Decimal | null
    Lote_compra: Decimal | null
    mes1: Decimal | null
    mes2: Decimal | null
    mes3: Decimal | null
    mes4: Decimal | null
    mes5: Decimal | null
    mes6: Decimal | null
    mes7: Decimal | null
    mes8: Decimal | null
    mes9: Decimal | null
    mes10: Decimal | null
    mes11: Decimal | null
    mes12: Decimal | null
    compras: Decimal | null
    opcadastradas: Decimal | null
    saldoestoque: Decimal | null
    coleta: Decimal | null
    _count: ResumocomprasCountAggregateOutputType | null
    _avg: ResumocomprasAvgAggregateOutputType | null
    _sum: ResumocomprasSumAggregateOutputType | null
    _min: ResumocomprasMinAggregateOutputType | null
    _max: ResumocomprasMaxAggregateOutputType | null
  }

  type GetResumocomprasGroupByPayload<T extends ResumocomprasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResumocomprasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResumocomprasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResumocomprasGroupByOutputType[P]>
            : GetScalarType<T[P], ResumocomprasGroupByOutputType[P]>
        }
      >
    >


  export type ResumocomprasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Apelido_empresa?: boolean
    Apelido_estabelecimento?: boolean
    Codigo_produto?: boolean
    Unidade_estoque?: boolean
    Unidade_compra?: boolean
    Desc_tecnica?: boolean
    Estoque_minimo?: boolean
    Lote_compra?: boolean
    mes1?: boolean
    mes2?: boolean
    mes3?: boolean
    mes4?: boolean
    mes5?: boolean
    mes6?: boolean
    mes7?: boolean
    mes8?: boolean
    mes9?: boolean
    mes10?: boolean
    mes11?: boolean
    mes12?: boolean
    compras?: boolean
    opcadastradas?: boolean
    saldoestoque?: boolean
    coleta?: boolean
  }, ExtArgs["result"]["resumocompras"]>


  export type ResumocomprasSelectScalar = {
    id?: boolean
    Apelido_empresa?: boolean
    Apelido_estabelecimento?: boolean
    Codigo_produto?: boolean
    Unidade_estoque?: boolean
    Unidade_compra?: boolean
    Desc_tecnica?: boolean
    Estoque_minimo?: boolean
    Lote_compra?: boolean
    mes1?: boolean
    mes2?: boolean
    mes3?: boolean
    mes4?: boolean
    mes5?: boolean
    mes6?: boolean
    mes7?: boolean
    mes8?: boolean
    mes9?: boolean
    mes10?: boolean
    mes11?: boolean
    mes12?: boolean
    compras?: boolean
    opcadastradas?: boolean
    saldoestoque?: boolean
    coleta?: boolean
  }


  export type $ResumocomprasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Resumocompras"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      Apelido_empresa: string | null
      Apelido_estabelecimento: string | null
      Codigo_produto: string | null
      Unidade_estoque: string | null
      Unidade_compra: string | null
      Desc_tecnica: string | null
      Estoque_minimo: Prisma.Decimal | null
      Lote_compra: Prisma.Decimal | null
      mes1: Prisma.Decimal | null
      mes2: Prisma.Decimal | null
      mes3: Prisma.Decimal | null
      mes4: Prisma.Decimal | null
      mes5: Prisma.Decimal | null
      mes6: Prisma.Decimal | null
      mes7: Prisma.Decimal | null
      mes8: Prisma.Decimal | null
      mes9: Prisma.Decimal | null
      mes10: Prisma.Decimal | null
      mes11: Prisma.Decimal | null
      mes12: Prisma.Decimal | null
      compras: Prisma.Decimal | null
      opcadastradas: Prisma.Decimal | null
      saldoestoque: Prisma.Decimal | null
      coleta: Prisma.Decimal | null
    }, ExtArgs["result"]["resumocompras"]>
    composites: {}
  }

  type ResumocomprasGetPayload<S extends boolean | null | undefined | ResumocomprasDefaultArgs> = $Result.GetResult<Prisma.$ResumocomprasPayload, S>

  type ResumocomprasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ResumocomprasFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ResumocomprasCountAggregateInputType | true
    }

  export interface ResumocomprasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Resumocompras'], meta: { name: 'Resumocompras' } }
    /**
     * Find zero or one Resumocompras that matches the filter.
     * @param {ResumocomprasFindUniqueArgs} args - Arguments to find a Resumocompras
     * @example
     * // Get one Resumocompras
     * const resumocompras = await prisma.resumocompras.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResumocomprasFindUniqueArgs>(args: SelectSubset<T, ResumocomprasFindUniqueArgs<ExtArgs>>): Prisma__ResumocomprasClient<$Result.GetResult<Prisma.$ResumocomprasPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Resumocompras that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ResumocomprasFindUniqueOrThrowArgs} args - Arguments to find a Resumocompras
     * @example
     * // Get one Resumocompras
     * const resumocompras = await prisma.resumocompras.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResumocomprasFindUniqueOrThrowArgs>(args: SelectSubset<T, ResumocomprasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResumocomprasClient<$Result.GetResult<Prisma.$ResumocomprasPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Resumocompras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumocomprasFindFirstArgs} args - Arguments to find a Resumocompras
     * @example
     * // Get one Resumocompras
     * const resumocompras = await prisma.resumocompras.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResumocomprasFindFirstArgs>(args?: SelectSubset<T, ResumocomprasFindFirstArgs<ExtArgs>>): Prisma__ResumocomprasClient<$Result.GetResult<Prisma.$ResumocomprasPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Resumocompras that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumocomprasFindFirstOrThrowArgs} args - Arguments to find a Resumocompras
     * @example
     * // Get one Resumocompras
     * const resumocompras = await prisma.resumocompras.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResumocomprasFindFirstOrThrowArgs>(args?: SelectSubset<T, ResumocomprasFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResumocomprasClient<$Result.GetResult<Prisma.$ResumocomprasPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Resumocompras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumocomprasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Resumocompras
     * const resumocompras = await prisma.resumocompras.findMany()
     * 
     * // Get first 10 Resumocompras
     * const resumocompras = await prisma.resumocompras.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resumocomprasWithIdOnly = await prisma.resumocompras.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResumocomprasFindManyArgs>(args?: SelectSubset<T, ResumocomprasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumocomprasPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Resumocompras.
     * @param {ResumocomprasCreateArgs} args - Arguments to create a Resumocompras.
     * @example
     * // Create one Resumocompras
     * const Resumocompras = await prisma.resumocompras.create({
     *   data: {
     *     // ... data to create a Resumocompras
     *   }
     * })
     * 
     */
    create<T extends ResumocomprasCreateArgs>(args: SelectSubset<T, ResumocomprasCreateArgs<ExtArgs>>): Prisma__ResumocomprasClient<$Result.GetResult<Prisma.$ResumocomprasPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Resumocompras.
     * @param {ResumocomprasCreateManyArgs} args - Arguments to create many Resumocompras.
     * @example
     * // Create many Resumocompras
     * const resumocompras = await prisma.resumocompras.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResumocomprasCreateManyArgs>(args?: SelectSubset<T, ResumocomprasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Resumocompras.
     * @param {ResumocomprasDeleteArgs} args - Arguments to delete one Resumocompras.
     * @example
     * // Delete one Resumocompras
     * const Resumocompras = await prisma.resumocompras.delete({
     *   where: {
     *     // ... filter to delete one Resumocompras
     *   }
     * })
     * 
     */
    delete<T extends ResumocomprasDeleteArgs>(args: SelectSubset<T, ResumocomprasDeleteArgs<ExtArgs>>): Prisma__ResumocomprasClient<$Result.GetResult<Prisma.$ResumocomprasPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Resumocompras.
     * @param {ResumocomprasUpdateArgs} args - Arguments to update one Resumocompras.
     * @example
     * // Update one Resumocompras
     * const resumocompras = await prisma.resumocompras.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResumocomprasUpdateArgs>(args: SelectSubset<T, ResumocomprasUpdateArgs<ExtArgs>>): Prisma__ResumocomprasClient<$Result.GetResult<Prisma.$ResumocomprasPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Resumocompras.
     * @param {ResumocomprasDeleteManyArgs} args - Arguments to filter Resumocompras to delete.
     * @example
     * // Delete a few Resumocompras
     * const { count } = await prisma.resumocompras.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResumocomprasDeleteManyArgs>(args?: SelectSubset<T, ResumocomprasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resumocompras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumocomprasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Resumocompras
     * const resumocompras = await prisma.resumocompras.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResumocomprasUpdateManyArgs>(args: SelectSubset<T, ResumocomprasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Resumocompras.
     * @param {ResumocomprasUpsertArgs} args - Arguments to update or create a Resumocompras.
     * @example
     * // Update or create a Resumocompras
     * const resumocompras = await prisma.resumocompras.upsert({
     *   create: {
     *     // ... data to create a Resumocompras
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Resumocompras we want to update
     *   }
     * })
     */
    upsert<T extends ResumocomprasUpsertArgs>(args: SelectSubset<T, ResumocomprasUpsertArgs<ExtArgs>>): Prisma__ResumocomprasClient<$Result.GetResult<Prisma.$ResumocomprasPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Resumocompras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumocomprasCountArgs} args - Arguments to filter Resumocompras to count.
     * @example
     * // Count the number of Resumocompras
     * const count = await prisma.resumocompras.count({
     *   where: {
     *     // ... the filter for the Resumocompras we want to count
     *   }
     * })
    **/
    count<T extends ResumocomprasCountArgs>(
      args?: Subset<T, ResumocomprasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResumocomprasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Resumocompras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumocomprasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ResumocomprasAggregateArgs>(args: Subset<T, ResumocomprasAggregateArgs>): Prisma.PrismaPromise<GetResumocomprasAggregateType<T>>

    /**
     * Group by Resumocompras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumocomprasGroupByArgs} args - Group by arguments.
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
      T extends ResumocomprasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResumocomprasGroupByArgs['orderBy'] }
        : { orderBy?: ResumocomprasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ResumocomprasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResumocomprasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Resumocompras model
   */
  readonly fields: ResumocomprasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Resumocompras.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResumocomprasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Resumocompras model
   */ 
  interface ResumocomprasFieldRefs {
    readonly id: FieldRef<"Resumocompras", 'Int'>
    readonly Apelido_empresa: FieldRef<"Resumocompras", 'String'>
    readonly Apelido_estabelecimento: FieldRef<"Resumocompras", 'String'>
    readonly Codigo_produto: FieldRef<"Resumocompras", 'String'>
    readonly Unidade_estoque: FieldRef<"Resumocompras", 'String'>
    readonly Unidade_compra: FieldRef<"Resumocompras", 'String'>
    readonly Desc_tecnica: FieldRef<"Resumocompras", 'String'>
    readonly Estoque_minimo: FieldRef<"Resumocompras", 'Decimal'>
    readonly Lote_compra: FieldRef<"Resumocompras", 'Decimal'>
    readonly mes1: FieldRef<"Resumocompras", 'Decimal'>
    readonly mes2: FieldRef<"Resumocompras", 'Decimal'>
    readonly mes3: FieldRef<"Resumocompras", 'Decimal'>
    readonly mes4: FieldRef<"Resumocompras", 'Decimal'>
    readonly mes5: FieldRef<"Resumocompras", 'Decimal'>
    readonly mes6: FieldRef<"Resumocompras", 'Decimal'>
    readonly mes7: FieldRef<"Resumocompras", 'Decimal'>
    readonly mes8: FieldRef<"Resumocompras", 'Decimal'>
    readonly mes9: FieldRef<"Resumocompras", 'Decimal'>
    readonly mes10: FieldRef<"Resumocompras", 'Decimal'>
    readonly mes11: FieldRef<"Resumocompras", 'Decimal'>
    readonly mes12: FieldRef<"Resumocompras", 'Decimal'>
    readonly compras: FieldRef<"Resumocompras", 'Decimal'>
    readonly opcadastradas: FieldRef<"Resumocompras", 'Decimal'>
    readonly saldoestoque: FieldRef<"Resumocompras", 'Decimal'>
    readonly coleta: FieldRef<"Resumocompras", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * Resumocompras findUnique
   */
  export type ResumocomprasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resumocompras
     */
    select?: ResumocomprasSelect<ExtArgs> | null
    /**
     * Filter, which Resumocompras to fetch.
     */
    where: ResumocomprasWhereUniqueInput
  }

  /**
   * Resumocompras findUniqueOrThrow
   */
  export type ResumocomprasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resumocompras
     */
    select?: ResumocomprasSelect<ExtArgs> | null
    /**
     * Filter, which Resumocompras to fetch.
     */
    where: ResumocomprasWhereUniqueInput
  }

  /**
   * Resumocompras findFirst
   */
  export type ResumocomprasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resumocompras
     */
    select?: ResumocomprasSelect<ExtArgs> | null
    /**
     * Filter, which Resumocompras to fetch.
     */
    where?: ResumocomprasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resumocompras to fetch.
     */
    orderBy?: ResumocomprasOrderByWithRelationInput | ResumocomprasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resumocompras.
     */
    cursor?: ResumocomprasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resumocompras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resumocompras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resumocompras.
     */
    distinct?: ResumocomprasScalarFieldEnum | ResumocomprasScalarFieldEnum[]
  }

  /**
   * Resumocompras findFirstOrThrow
   */
  export type ResumocomprasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resumocompras
     */
    select?: ResumocomprasSelect<ExtArgs> | null
    /**
     * Filter, which Resumocompras to fetch.
     */
    where?: ResumocomprasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resumocompras to fetch.
     */
    orderBy?: ResumocomprasOrderByWithRelationInput | ResumocomprasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resumocompras.
     */
    cursor?: ResumocomprasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resumocompras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resumocompras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resumocompras.
     */
    distinct?: ResumocomprasScalarFieldEnum | ResumocomprasScalarFieldEnum[]
  }

  /**
   * Resumocompras findMany
   */
  export type ResumocomprasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resumocompras
     */
    select?: ResumocomprasSelect<ExtArgs> | null
    /**
     * Filter, which Resumocompras to fetch.
     */
    where?: ResumocomprasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resumocompras to fetch.
     */
    orderBy?: ResumocomprasOrderByWithRelationInput | ResumocomprasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Resumocompras.
     */
    cursor?: ResumocomprasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resumocompras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resumocompras.
     */
    skip?: number
    distinct?: ResumocomprasScalarFieldEnum | ResumocomprasScalarFieldEnum[]
  }

  /**
   * Resumocompras create
   */
  export type ResumocomprasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resumocompras
     */
    select?: ResumocomprasSelect<ExtArgs> | null
    /**
     * The data needed to create a Resumocompras.
     */
    data?: XOR<ResumocomprasCreateInput, ResumocomprasUncheckedCreateInput>
  }

  /**
   * Resumocompras createMany
   */
  export type ResumocomprasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Resumocompras.
     */
    data: ResumocomprasCreateManyInput | ResumocomprasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Resumocompras update
   */
  export type ResumocomprasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resumocompras
     */
    select?: ResumocomprasSelect<ExtArgs> | null
    /**
     * The data needed to update a Resumocompras.
     */
    data: XOR<ResumocomprasUpdateInput, ResumocomprasUncheckedUpdateInput>
    /**
     * Choose, which Resumocompras to update.
     */
    where: ResumocomprasWhereUniqueInput
  }

  /**
   * Resumocompras updateMany
   */
  export type ResumocomprasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Resumocompras.
     */
    data: XOR<ResumocomprasUpdateManyMutationInput, ResumocomprasUncheckedUpdateManyInput>
    /**
     * Filter which Resumocompras to update
     */
    where?: ResumocomprasWhereInput
  }

  /**
   * Resumocompras upsert
   */
  export type ResumocomprasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resumocompras
     */
    select?: ResumocomprasSelect<ExtArgs> | null
    /**
     * The filter to search for the Resumocompras to update in case it exists.
     */
    where: ResumocomprasWhereUniqueInput
    /**
     * In case the Resumocompras found by the `where` argument doesn't exist, create a new Resumocompras with this data.
     */
    create: XOR<ResumocomprasCreateInput, ResumocomprasUncheckedCreateInput>
    /**
     * In case the Resumocompras was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResumocomprasUpdateInput, ResumocomprasUncheckedUpdateInput>
  }

  /**
   * Resumocompras delete
   */
  export type ResumocomprasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resumocompras
     */
    select?: ResumocomprasSelect<ExtArgs> | null
    /**
     * Filter which Resumocompras to delete.
     */
    where: ResumocomprasWhereUniqueInput
  }

  /**
   * Resumocompras deleteMany
   */
  export type ResumocomprasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resumocompras to delete
     */
    where?: ResumocomprasWhereInput
  }

  /**
   * Resumocompras without action
   */
  export type ResumocomprasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resumocompras
     */
    select?: ResumocomprasSelect<ExtArgs> | null
  }


  /**
   * Model Compras
   */

  export type AggregateCompras = {
    _count: ComprasCountAggregateOutputType | null
    _avg: ComprasAvgAggregateOutputType | null
    _sum: ComprasSumAggregateOutputType | null
    _min: ComprasMinAggregateOutputType | null
    _max: ComprasMaxAggregateOutputType | null
  }

  export type ComprasAvgAggregateOutputType = {
    idcompras: number | null
    porcentagem: number | null
    saldo: Decimal | null
    consumo12: Decimal | null
    mediaconsumo: Decimal | null
    opcompra: Decimal | null
    opcompraEntregue: Decimal | null
    opfinalizada: Decimal | null
    opemprocesso: Decimal | null
    opcadastrada: Decimal | null
    opcoleta: Decimal | null
    totcompras: Decimal | null
    totconsumo: Decimal | null
    saldoatual: Decimal | null
    valorultimacompra: Decimal | null
    saldometa: Decimal | null
    compra: Decimal | null
    opcadastrada15: Decimal | null
    opcoleta15: Decimal | null
    totcompras15: Decimal | null
    totconsumo15: Decimal | null
    saldoatual15: Decimal | null
    opcadastrada30: Decimal | null
    opcoleta30: Decimal | null
    totcompras30: Decimal | null
    totconsumo30: Decimal | null
    saldoatual30: Decimal | null
    opcompra15: Decimal | null
    opcompra30: Decimal | null
  }

  export type ComprasSumAggregateOutputType = {
    idcompras: number | null
    porcentagem: number | null
    saldo: Decimal | null
    consumo12: Decimal | null
    mediaconsumo: Decimal | null
    opcompra: Decimal | null
    opcompraEntregue: Decimal | null
    opfinalizada: Decimal | null
    opemprocesso: Decimal | null
    opcadastrada: Decimal | null
    opcoleta: Decimal | null
    totcompras: Decimal | null
    totconsumo: Decimal | null
    saldoatual: Decimal | null
    valorultimacompra: Decimal | null
    saldometa: Decimal | null
    compra: Decimal | null
    opcadastrada15: Decimal | null
    opcoleta15: Decimal | null
    totcompras15: Decimal | null
    totconsumo15: Decimal | null
    saldoatual15: Decimal | null
    opcadastrada30: Decimal | null
    opcoleta30: Decimal | null
    totcompras30: Decimal | null
    totconsumo30: Decimal | null
    saldoatual30: Decimal | null
    opcompra15: Decimal | null
    opcompra30: Decimal | null
  }

  export type ComprasMinAggregateOutputType = {
    idcompras: number | null
    chavearquivo: string | null
    porcentagem: number | null
    codigo_produto: string | null
    desc_tecnica: string | null
    saldo: Decimal | null
    consumo12: Decimal | null
    mediaconsumo: Decimal | null
    opcompra: Decimal | null
    opcompraEntregue: Decimal | null
    opfinalizada: Decimal | null
    opemprocesso: Decimal | null
    opcadastrada: Decimal | null
    opcoleta: Decimal | null
    totcompras: Decimal | null
    totconsumo: Decimal | null
    saldoatual: Decimal | null
    valorultimacompra: Decimal | null
    dataultimacompra: Date | null
    saldometa: Decimal | null
    compra: Decimal | null
    datacoleta: Date | null
    opcadastrada15: Decimal | null
    opcoleta15: Decimal | null
    totcompras15: Decimal | null
    totconsumo15: Decimal | null
    saldoatual15: Decimal | null
    opcadastrada30: Decimal | null
    opcoleta30: Decimal | null
    totcompras30: Decimal | null
    totconsumo30: Decimal | null
    saldoatual30: Decimal | null
    opcompra15: Decimal | null
    opcompra30: Decimal | null
  }

  export type ComprasMaxAggregateOutputType = {
    idcompras: number | null
    chavearquivo: string | null
    porcentagem: number | null
    codigo_produto: string | null
    desc_tecnica: string | null
    saldo: Decimal | null
    consumo12: Decimal | null
    mediaconsumo: Decimal | null
    opcompra: Decimal | null
    opcompraEntregue: Decimal | null
    opfinalizada: Decimal | null
    opemprocesso: Decimal | null
    opcadastrada: Decimal | null
    opcoleta: Decimal | null
    totcompras: Decimal | null
    totconsumo: Decimal | null
    saldoatual: Decimal | null
    valorultimacompra: Decimal | null
    dataultimacompra: Date | null
    saldometa: Decimal | null
    compra: Decimal | null
    datacoleta: Date | null
    opcadastrada15: Decimal | null
    opcoleta15: Decimal | null
    totcompras15: Decimal | null
    totconsumo15: Decimal | null
    saldoatual15: Decimal | null
    opcadastrada30: Decimal | null
    opcoleta30: Decimal | null
    totcompras30: Decimal | null
    totconsumo30: Decimal | null
    saldoatual30: Decimal | null
    opcompra15: Decimal | null
    opcompra30: Decimal | null
  }

  export type ComprasCountAggregateOutputType = {
    idcompras: number
    chavearquivo: number
    porcentagem: number
    codigo_produto: number
    desc_tecnica: number
    saldo: number
    consumo12: number
    mediaconsumo: number
    opcompra: number
    opcompraEntregue: number
    opfinalizada: number
    opemprocesso: number
    opcadastrada: number
    opcoleta: number
    totcompras: number
    totconsumo: number
    saldoatual: number
    valorultimacompra: number
    dataultimacompra: number
    saldometa: number
    compra: number
    datacoleta: number
    opcadastrada15: number
    opcoleta15: number
    totcompras15: number
    totconsumo15: number
    saldoatual15: number
    opcadastrada30: number
    opcoleta30: number
    totcompras30: number
    totconsumo30: number
    saldoatual30: number
    opcompra15: number
    opcompra30: number
    _all: number
  }


  export type ComprasAvgAggregateInputType = {
    idcompras?: true
    porcentagem?: true
    saldo?: true
    consumo12?: true
    mediaconsumo?: true
    opcompra?: true
    opcompraEntregue?: true
    opfinalizada?: true
    opemprocesso?: true
    opcadastrada?: true
    opcoleta?: true
    totcompras?: true
    totconsumo?: true
    saldoatual?: true
    valorultimacompra?: true
    saldometa?: true
    compra?: true
    opcadastrada15?: true
    opcoleta15?: true
    totcompras15?: true
    totconsumo15?: true
    saldoatual15?: true
    opcadastrada30?: true
    opcoleta30?: true
    totcompras30?: true
    totconsumo30?: true
    saldoatual30?: true
    opcompra15?: true
    opcompra30?: true
  }

  export type ComprasSumAggregateInputType = {
    idcompras?: true
    porcentagem?: true
    saldo?: true
    consumo12?: true
    mediaconsumo?: true
    opcompra?: true
    opcompraEntregue?: true
    opfinalizada?: true
    opemprocesso?: true
    opcadastrada?: true
    opcoleta?: true
    totcompras?: true
    totconsumo?: true
    saldoatual?: true
    valorultimacompra?: true
    saldometa?: true
    compra?: true
    opcadastrada15?: true
    opcoleta15?: true
    totcompras15?: true
    totconsumo15?: true
    saldoatual15?: true
    opcadastrada30?: true
    opcoleta30?: true
    totcompras30?: true
    totconsumo30?: true
    saldoatual30?: true
    opcompra15?: true
    opcompra30?: true
  }

  export type ComprasMinAggregateInputType = {
    idcompras?: true
    chavearquivo?: true
    porcentagem?: true
    codigo_produto?: true
    desc_tecnica?: true
    saldo?: true
    consumo12?: true
    mediaconsumo?: true
    opcompra?: true
    opcompraEntregue?: true
    opfinalizada?: true
    opemprocesso?: true
    opcadastrada?: true
    opcoleta?: true
    totcompras?: true
    totconsumo?: true
    saldoatual?: true
    valorultimacompra?: true
    dataultimacompra?: true
    saldometa?: true
    compra?: true
    datacoleta?: true
    opcadastrada15?: true
    opcoleta15?: true
    totcompras15?: true
    totconsumo15?: true
    saldoatual15?: true
    opcadastrada30?: true
    opcoleta30?: true
    totcompras30?: true
    totconsumo30?: true
    saldoatual30?: true
    opcompra15?: true
    opcompra30?: true
  }

  export type ComprasMaxAggregateInputType = {
    idcompras?: true
    chavearquivo?: true
    porcentagem?: true
    codigo_produto?: true
    desc_tecnica?: true
    saldo?: true
    consumo12?: true
    mediaconsumo?: true
    opcompra?: true
    opcompraEntregue?: true
    opfinalizada?: true
    opemprocesso?: true
    opcadastrada?: true
    opcoleta?: true
    totcompras?: true
    totconsumo?: true
    saldoatual?: true
    valorultimacompra?: true
    dataultimacompra?: true
    saldometa?: true
    compra?: true
    datacoleta?: true
    opcadastrada15?: true
    opcoleta15?: true
    totcompras15?: true
    totconsumo15?: true
    saldoatual15?: true
    opcadastrada30?: true
    opcoleta30?: true
    totcompras30?: true
    totconsumo30?: true
    saldoatual30?: true
    opcompra15?: true
    opcompra30?: true
  }

  export type ComprasCountAggregateInputType = {
    idcompras?: true
    chavearquivo?: true
    porcentagem?: true
    codigo_produto?: true
    desc_tecnica?: true
    saldo?: true
    consumo12?: true
    mediaconsumo?: true
    opcompra?: true
    opcompraEntregue?: true
    opfinalizada?: true
    opemprocesso?: true
    opcadastrada?: true
    opcoleta?: true
    totcompras?: true
    totconsumo?: true
    saldoatual?: true
    valorultimacompra?: true
    dataultimacompra?: true
    saldometa?: true
    compra?: true
    datacoleta?: true
    opcadastrada15?: true
    opcoleta15?: true
    totcompras15?: true
    totconsumo15?: true
    saldoatual15?: true
    opcadastrada30?: true
    opcoleta30?: true
    totcompras30?: true
    totconsumo30?: true
    saldoatual30?: true
    opcompra15?: true
    opcompra30?: true
    _all?: true
  }

  export type ComprasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Compras to aggregate.
     */
    where?: ComprasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Compras to fetch.
     */
    orderBy?: ComprasOrderByWithRelationInput | ComprasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ComprasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Compras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Compras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Compras
    **/
    _count?: true | ComprasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ComprasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ComprasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ComprasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ComprasMaxAggregateInputType
  }

  export type GetComprasAggregateType<T extends ComprasAggregateArgs> = {
        [P in keyof T & keyof AggregateCompras]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompras[P]>
      : GetScalarType<T[P], AggregateCompras[P]>
  }




  export type ComprasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComprasWhereInput
    orderBy?: ComprasOrderByWithAggregationInput | ComprasOrderByWithAggregationInput[]
    by: ComprasScalarFieldEnum[] | ComprasScalarFieldEnum
    having?: ComprasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ComprasCountAggregateInputType | true
    _avg?: ComprasAvgAggregateInputType
    _sum?: ComprasSumAggregateInputType
    _min?: ComprasMinAggregateInputType
    _max?: ComprasMaxAggregateInputType
  }

  export type ComprasGroupByOutputType = {
    idcompras: number
    chavearquivo: string | null
    porcentagem: number | null
    codigo_produto: string | null
    desc_tecnica: string | null
    saldo: Decimal | null
    consumo12: Decimal | null
    mediaconsumo: Decimal | null
    opcompra: Decimal | null
    opcompraEntregue: Decimal | null
    opfinalizada: Decimal | null
    opemprocesso: Decimal | null
    opcadastrada: Decimal | null
    opcoleta: Decimal | null
    totcompras: Decimal | null
    totconsumo: Decimal | null
    saldoatual: Decimal | null
    valorultimacompra: Decimal | null
    dataultimacompra: Date | null
    saldometa: Decimal | null
    compra: Decimal | null
    datacoleta: Date | null
    opcadastrada15: Decimal | null
    opcoleta15: Decimal | null
    totcompras15: Decimal | null
    totconsumo15: Decimal | null
    saldoatual15: Decimal | null
    opcadastrada30: Decimal | null
    opcoleta30: Decimal | null
    totcompras30: Decimal | null
    totconsumo30: Decimal | null
    saldoatual30: Decimal | null
    opcompra15: Decimal | null
    opcompra30: Decimal | null
    _count: ComprasCountAggregateOutputType | null
    _avg: ComprasAvgAggregateOutputType | null
    _sum: ComprasSumAggregateOutputType | null
    _min: ComprasMinAggregateOutputType | null
    _max: ComprasMaxAggregateOutputType | null
  }

  type GetComprasGroupByPayload<T extends ComprasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ComprasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ComprasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ComprasGroupByOutputType[P]>
            : GetScalarType<T[P], ComprasGroupByOutputType[P]>
        }
      >
    >


  export type ComprasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idcompras?: boolean
    chavearquivo?: boolean
    porcentagem?: boolean
    codigo_produto?: boolean
    desc_tecnica?: boolean
    saldo?: boolean
    consumo12?: boolean
    mediaconsumo?: boolean
    opcompra?: boolean
    opcompraEntregue?: boolean
    opfinalizada?: boolean
    opemprocesso?: boolean
    opcadastrada?: boolean
    opcoleta?: boolean
    totcompras?: boolean
    totconsumo?: boolean
    saldoatual?: boolean
    valorultimacompra?: boolean
    dataultimacompra?: boolean
    saldometa?: boolean
    compra?: boolean
    datacoleta?: boolean
    opcadastrada15?: boolean
    opcoleta15?: boolean
    totcompras15?: boolean
    totconsumo15?: boolean
    saldoatual15?: boolean
    opcadastrada30?: boolean
    opcoleta30?: boolean
    totcompras30?: boolean
    totconsumo30?: boolean
    saldoatual30?: boolean
    opcompra15?: boolean
    opcompra30?: boolean
  }, ExtArgs["result"]["compras"]>


  export type ComprasSelectScalar = {
    idcompras?: boolean
    chavearquivo?: boolean
    porcentagem?: boolean
    codigo_produto?: boolean
    desc_tecnica?: boolean
    saldo?: boolean
    consumo12?: boolean
    mediaconsumo?: boolean
    opcompra?: boolean
    opcompraEntregue?: boolean
    opfinalizada?: boolean
    opemprocesso?: boolean
    opcadastrada?: boolean
    opcoleta?: boolean
    totcompras?: boolean
    totconsumo?: boolean
    saldoatual?: boolean
    valorultimacompra?: boolean
    dataultimacompra?: boolean
    saldometa?: boolean
    compra?: boolean
    datacoleta?: boolean
    opcadastrada15?: boolean
    opcoleta15?: boolean
    totcompras15?: boolean
    totconsumo15?: boolean
    saldoatual15?: boolean
    opcadastrada30?: boolean
    opcoleta30?: boolean
    totcompras30?: boolean
    totconsumo30?: boolean
    saldoatual30?: boolean
    opcompra15?: boolean
    opcompra30?: boolean
  }


  export type $ComprasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Compras"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      idcompras: number
      chavearquivo: string | null
      porcentagem: number | null
      codigo_produto: string | null
      desc_tecnica: string | null
      saldo: Prisma.Decimal | null
      consumo12: Prisma.Decimal | null
      mediaconsumo: Prisma.Decimal | null
      opcompra: Prisma.Decimal | null
      opcompraEntregue: Prisma.Decimal | null
      opfinalizada: Prisma.Decimal | null
      opemprocesso: Prisma.Decimal | null
      opcadastrada: Prisma.Decimal | null
      opcoleta: Prisma.Decimal | null
      totcompras: Prisma.Decimal | null
      totconsumo: Prisma.Decimal | null
      saldoatual: Prisma.Decimal | null
      valorultimacompra: Prisma.Decimal | null
      dataultimacompra: Date | null
      saldometa: Prisma.Decimal | null
      compra: Prisma.Decimal | null
      datacoleta: Date | null
      opcadastrada15: Prisma.Decimal | null
      opcoleta15: Prisma.Decimal | null
      totcompras15: Prisma.Decimal | null
      totconsumo15: Prisma.Decimal | null
      saldoatual15: Prisma.Decimal | null
      opcadastrada30: Prisma.Decimal | null
      opcoleta30: Prisma.Decimal | null
      totcompras30: Prisma.Decimal | null
      totconsumo30: Prisma.Decimal | null
      saldoatual30: Prisma.Decimal | null
      opcompra15: Prisma.Decimal | null
      opcompra30: Prisma.Decimal | null
    }, ExtArgs["result"]["compras"]>
    composites: {}
  }

  type ComprasGetPayload<S extends boolean | null | undefined | ComprasDefaultArgs> = $Result.GetResult<Prisma.$ComprasPayload, S>

  type ComprasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ComprasFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ComprasCountAggregateInputType | true
    }

  export interface ComprasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Compras'], meta: { name: 'Compras' } }
    /**
     * Find zero or one Compras that matches the filter.
     * @param {ComprasFindUniqueArgs} args - Arguments to find a Compras
     * @example
     * // Get one Compras
     * const compras = await prisma.compras.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ComprasFindUniqueArgs>(args: SelectSubset<T, ComprasFindUniqueArgs<ExtArgs>>): Prisma__ComprasClient<$Result.GetResult<Prisma.$ComprasPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Compras that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ComprasFindUniqueOrThrowArgs} args - Arguments to find a Compras
     * @example
     * // Get one Compras
     * const compras = await prisma.compras.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ComprasFindUniqueOrThrowArgs>(args: SelectSubset<T, ComprasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ComprasClient<$Result.GetResult<Prisma.$ComprasPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Compras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComprasFindFirstArgs} args - Arguments to find a Compras
     * @example
     * // Get one Compras
     * const compras = await prisma.compras.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ComprasFindFirstArgs>(args?: SelectSubset<T, ComprasFindFirstArgs<ExtArgs>>): Prisma__ComprasClient<$Result.GetResult<Prisma.$ComprasPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Compras that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComprasFindFirstOrThrowArgs} args - Arguments to find a Compras
     * @example
     * // Get one Compras
     * const compras = await prisma.compras.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ComprasFindFirstOrThrowArgs>(args?: SelectSubset<T, ComprasFindFirstOrThrowArgs<ExtArgs>>): Prisma__ComprasClient<$Result.GetResult<Prisma.$ComprasPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Compras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComprasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Compras
     * const compras = await prisma.compras.findMany()
     * 
     * // Get first 10 Compras
     * const compras = await prisma.compras.findMany({ take: 10 })
     * 
     * // Only select the `idcompras`
     * const comprasWithIdcomprasOnly = await prisma.compras.findMany({ select: { idcompras: true } })
     * 
     */
    findMany<T extends ComprasFindManyArgs>(args?: SelectSubset<T, ComprasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComprasPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Compras.
     * @param {ComprasCreateArgs} args - Arguments to create a Compras.
     * @example
     * // Create one Compras
     * const Compras = await prisma.compras.create({
     *   data: {
     *     // ... data to create a Compras
     *   }
     * })
     * 
     */
    create<T extends ComprasCreateArgs>(args: SelectSubset<T, ComprasCreateArgs<ExtArgs>>): Prisma__ComprasClient<$Result.GetResult<Prisma.$ComprasPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Compras.
     * @param {ComprasCreateManyArgs} args - Arguments to create many Compras.
     * @example
     * // Create many Compras
     * const compras = await prisma.compras.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ComprasCreateManyArgs>(args?: SelectSubset<T, ComprasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Compras.
     * @param {ComprasDeleteArgs} args - Arguments to delete one Compras.
     * @example
     * // Delete one Compras
     * const Compras = await prisma.compras.delete({
     *   where: {
     *     // ... filter to delete one Compras
     *   }
     * })
     * 
     */
    delete<T extends ComprasDeleteArgs>(args: SelectSubset<T, ComprasDeleteArgs<ExtArgs>>): Prisma__ComprasClient<$Result.GetResult<Prisma.$ComprasPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Compras.
     * @param {ComprasUpdateArgs} args - Arguments to update one Compras.
     * @example
     * // Update one Compras
     * const compras = await prisma.compras.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ComprasUpdateArgs>(args: SelectSubset<T, ComprasUpdateArgs<ExtArgs>>): Prisma__ComprasClient<$Result.GetResult<Prisma.$ComprasPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Compras.
     * @param {ComprasDeleteManyArgs} args - Arguments to filter Compras to delete.
     * @example
     * // Delete a few Compras
     * const { count } = await prisma.compras.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ComprasDeleteManyArgs>(args?: SelectSubset<T, ComprasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Compras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComprasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Compras
     * const compras = await prisma.compras.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ComprasUpdateManyArgs>(args: SelectSubset<T, ComprasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Compras.
     * @param {ComprasUpsertArgs} args - Arguments to update or create a Compras.
     * @example
     * // Update or create a Compras
     * const compras = await prisma.compras.upsert({
     *   create: {
     *     // ... data to create a Compras
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Compras we want to update
     *   }
     * })
     */
    upsert<T extends ComprasUpsertArgs>(args: SelectSubset<T, ComprasUpsertArgs<ExtArgs>>): Prisma__ComprasClient<$Result.GetResult<Prisma.$ComprasPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Compras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComprasCountArgs} args - Arguments to filter Compras to count.
     * @example
     * // Count the number of Compras
     * const count = await prisma.compras.count({
     *   where: {
     *     // ... the filter for the Compras we want to count
     *   }
     * })
    **/
    count<T extends ComprasCountArgs>(
      args?: Subset<T, ComprasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ComprasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Compras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComprasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ComprasAggregateArgs>(args: Subset<T, ComprasAggregateArgs>): Prisma.PrismaPromise<GetComprasAggregateType<T>>

    /**
     * Group by Compras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComprasGroupByArgs} args - Group by arguments.
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
      T extends ComprasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ComprasGroupByArgs['orderBy'] }
        : { orderBy?: ComprasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ComprasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComprasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Compras model
   */
  readonly fields: ComprasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Compras.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ComprasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Compras model
   */ 
  interface ComprasFieldRefs {
    readonly idcompras: FieldRef<"Compras", 'Int'>
    readonly chavearquivo: FieldRef<"Compras", 'String'>
    readonly porcentagem: FieldRef<"Compras", 'Int'>
    readonly codigo_produto: FieldRef<"Compras", 'String'>
    readonly desc_tecnica: FieldRef<"Compras", 'String'>
    readonly saldo: FieldRef<"Compras", 'Decimal'>
    readonly consumo12: FieldRef<"Compras", 'Decimal'>
    readonly mediaconsumo: FieldRef<"Compras", 'Decimal'>
    readonly opcompra: FieldRef<"Compras", 'Decimal'>
    readonly opcompraEntregue: FieldRef<"Compras", 'Decimal'>
    readonly opfinalizada: FieldRef<"Compras", 'Decimal'>
    readonly opemprocesso: FieldRef<"Compras", 'Decimal'>
    readonly opcadastrada: FieldRef<"Compras", 'Decimal'>
    readonly opcoleta: FieldRef<"Compras", 'Decimal'>
    readonly totcompras: FieldRef<"Compras", 'Decimal'>
    readonly totconsumo: FieldRef<"Compras", 'Decimal'>
    readonly saldoatual: FieldRef<"Compras", 'Decimal'>
    readonly valorultimacompra: FieldRef<"Compras", 'Decimal'>
    readonly dataultimacompra: FieldRef<"Compras", 'DateTime'>
    readonly saldometa: FieldRef<"Compras", 'Decimal'>
    readonly compra: FieldRef<"Compras", 'Decimal'>
    readonly datacoleta: FieldRef<"Compras", 'DateTime'>
    readonly opcadastrada15: FieldRef<"Compras", 'Decimal'>
    readonly opcoleta15: FieldRef<"Compras", 'Decimal'>
    readonly totcompras15: FieldRef<"Compras", 'Decimal'>
    readonly totconsumo15: FieldRef<"Compras", 'Decimal'>
    readonly saldoatual15: FieldRef<"Compras", 'Decimal'>
    readonly opcadastrada30: FieldRef<"Compras", 'Decimal'>
    readonly opcoleta30: FieldRef<"Compras", 'Decimal'>
    readonly totcompras30: FieldRef<"Compras", 'Decimal'>
    readonly totconsumo30: FieldRef<"Compras", 'Decimal'>
    readonly saldoatual30: FieldRef<"Compras", 'Decimal'>
    readonly opcompra15: FieldRef<"Compras", 'Decimal'>
    readonly opcompra30: FieldRef<"Compras", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * Compras findUnique
   */
  export type ComprasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compras
     */
    select?: ComprasSelect<ExtArgs> | null
    /**
     * Filter, which Compras to fetch.
     */
    where: ComprasWhereUniqueInput
  }

  /**
   * Compras findUniqueOrThrow
   */
  export type ComprasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compras
     */
    select?: ComprasSelect<ExtArgs> | null
    /**
     * Filter, which Compras to fetch.
     */
    where: ComprasWhereUniqueInput
  }

  /**
   * Compras findFirst
   */
  export type ComprasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compras
     */
    select?: ComprasSelect<ExtArgs> | null
    /**
     * Filter, which Compras to fetch.
     */
    where?: ComprasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Compras to fetch.
     */
    orderBy?: ComprasOrderByWithRelationInput | ComprasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Compras.
     */
    cursor?: ComprasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Compras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Compras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Compras.
     */
    distinct?: ComprasScalarFieldEnum | ComprasScalarFieldEnum[]
  }

  /**
   * Compras findFirstOrThrow
   */
  export type ComprasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compras
     */
    select?: ComprasSelect<ExtArgs> | null
    /**
     * Filter, which Compras to fetch.
     */
    where?: ComprasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Compras to fetch.
     */
    orderBy?: ComprasOrderByWithRelationInput | ComprasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Compras.
     */
    cursor?: ComprasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Compras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Compras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Compras.
     */
    distinct?: ComprasScalarFieldEnum | ComprasScalarFieldEnum[]
  }

  /**
   * Compras findMany
   */
  export type ComprasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compras
     */
    select?: ComprasSelect<ExtArgs> | null
    /**
     * Filter, which Compras to fetch.
     */
    where?: ComprasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Compras to fetch.
     */
    orderBy?: ComprasOrderByWithRelationInput | ComprasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Compras.
     */
    cursor?: ComprasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Compras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Compras.
     */
    skip?: number
    distinct?: ComprasScalarFieldEnum | ComprasScalarFieldEnum[]
  }

  /**
   * Compras create
   */
  export type ComprasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compras
     */
    select?: ComprasSelect<ExtArgs> | null
    /**
     * The data needed to create a Compras.
     */
    data?: XOR<ComprasCreateInput, ComprasUncheckedCreateInput>
  }

  /**
   * Compras createMany
   */
  export type ComprasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Compras.
     */
    data: ComprasCreateManyInput | ComprasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Compras update
   */
  export type ComprasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compras
     */
    select?: ComprasSelect<ExtArgs> | null
    /**
     * The data needed to update a Compras.
     */
    data: XOR<ComprasUpdateInput, ComprasUncheckedUpdateInput>
    /**
     * Choose, which Compras to update.
     */
    where: ComprasWhereUniqueInput
  }

  /**
   * Compras updateMany
   */
  export type ComprasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Compras.
     */
    data: XOR<ComprasUpdateManyMutationInput, ComprasUncheckedUpdateManyInput>
    /**
     * Filter which Compras to update
     */
    where?: ComprasWhereInput
  }

  /**
   * Compras upsert
   */
  export type ComprasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compras
     */
    select?: ComprasSelect<ExtArgs> | null
    /**
     * The filter to search for the Compras to update in case it exists.
     */
    where: ComprasWhereUniqueInput
    /**
     * In case the Compras found by the `where` argument doesn't exist, create a new Compras with this data.
     */
    create: XOR<ComprasCreateInput, ComprasUncheckedCreateInput>
    /**
     * In case the Compras was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ComprasUpdateInput, ComprasUncheckedUpdateInput>
  }

  /**
   * Compras delete
   */
  export type ComprasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compras
     */
    select?: ComprasSelect<ExtArgs> | null
    /**
     * Filter which Compras to delete.
     */
    where: ComprasWhereUniqueInput
  }

  /**
   * Compras deleteMany
   */
  export type ComprasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Compras to delete
     */
    where?: ComprasWhereInput
  }

  /**
   * Compras without action
   */
  export type ComprasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compras
     */
    select?: ComprasSelect<ExtArgs> | null
  }


  /**
   * Model Necessidade
   */

  export type AggregateNecessidade = {
    _count: NecessidadeCountAggregateOutputType | null
    _avg: NecessidadeAvgAggregateOutputType | null
    _sum: NecessidadeSumAggregateOutputType | null
    _min: NecessidadeMinAggregateOutputType | null
    _max: NecessidadeMaxAggregateOutputType | null
  }

  export type NecessidadeAvgAggregateOutputType = {
    idnecessidade: number | null
    vlrultcompra: Decimal | null
    saldoinv: Decimal | null
    opfinalizada: Decimal | null
    opemprocesso: Decimal | null
    compraentregue: Decimal | null
    compraparcial: Decimal | null
    saldoatual: Decimal | null
    compraprevista: Decimal | null
    opcadastrada: Decimal | null
    opcoleta: Decimal | null
    saldonecessidade: Decimal | null
    vlrpedido: Decimal | null
    vlrcompra: Decimal | null
    mediaconsumo: Decimal | null
  }

  export type NecessidadeSumAggregateOutputType = {
    idnecessidade: number | null
    vlrultcompra: Decimal | null
    saldoinv: Decimal | null
    opfinalizada: Decimal | null
    opemprocesso: Decimal | null
    compraentregue: Decimal | null
    compraparcial: Decimal | null
    saldoatual: Decimal | null
    compraprevista: Decimal | null
    opcadastrada: Decimal | null
    opcoleta: Decimal | null
    saldonecessidade: Decimal | null
    vlrpedido: Decimal | null
    vlrcompra: Decimal | null
    mediaconsumo: Decimal | null
  }

  export type NecessidadeMinAggregateOutputType = {
    idnecessidade: number | null
    dtrelatorio: Date | null
    codigo_produto: string | null
    desc_tecnica: string | null
    dtultcompra: Date | null
    vlrultcompra: Decimal | null
    saldoinv: Decimal | null
    dtinventario: Date | null
    opfinalizada: Decimal | null
    opemprocesso: Decimal | null
    compraentregue: Decimal | null
    compraparcial: Decimal | null
    saldoatual: Decimal | null
    compraprevista: Decimal | null
    opcadastrada: Decimal | null
    opcoleta: Decimal | null
    dtcoleta: Date | null
    saldonecessidade: Decimal | null
    dtnecessidade: Date | null
    vlrpedido: Decimal | null
    vlrcompra: Decimal | null
    stcompra: boolean | null
    mediaconsumo: Decimal | null
    processo: string | null
  }

  export type NecessidadeMaxAggregateOutputType = {
    idnecessidade: number | null
    dtrelatorio: Date | null
    codigo_produto: string | null
    desc_tecnica: string | null
    dtultcompra: Date | null
    vlrultcompra: Decimal | null
    saldoinv: Decimal | null
    dtinventario: Date | null
    opfinalizada: Decimal | null
    opemprocesso: Decimal | null
    compraentregue: Decimal | null
    compraparcial: Decimal | null
    saldoatual: Decimal | null
    compraprevista: Decimal | null
    opcadastrada: Decimal | null
    opcoleta: Decimal | null
    dtcoleta: Date | null
    saldonecessidade: Decimal | null
    dtnecessidade: Date | null
    vlrpedido: Decimal | null
    vlrcompra: Decimal | null
    stcompra: boolean | null
    mediaconsumo: Decimal | null
    processo: string | null
  }

  export type NecessidadeCountAggregateOutputType = {
    idnecessidade: number
    dtrelatorio: number
    codigo_produto: number
    desc_tecnica: number
    dtultcompra: number
    vlrultcompra: number
    saldoinv: number
    dtinventario: number
    opfinalizada: number
    opemprocesso: number
    compraentregue: number
    compraparcial: number
    saldoatual: number
    compraprevista: number
    opcadastrada: number
    opcoleta: number
    dtcoleta: number
    saldonecessidade: number
    dtnecessidade: number
    vlrpedido: number
    vlrcompra: number
    stcompra: number
    mediaconsumo: number
    processo: number
    _all: number
  }


  export type NecessidadeAvgAggregateInputType = {
    idnecessidade?: true
    vlrultcompra?: true
    saldoinv?: true
    opfinalizada?: true
    opemprocesso?: true
    compraentregue?: true
    compraparcial?: true
    saldoatual?: true
    compraprevista?: true
    opcadastrada?: true
    opcoleta?: true
    saldonecessidade?: true
    vlrpedido?: true
    vlrcompra?: true
    mediaconsumo?: true
  }

  export type NecessidadeSumAggregateInputType = {
    idnecessidade?: true
    vlrultcompra?: true
    saldoinv?: true
    opfinalizada?: true
    opemprocesso?: true
    compraentregue?: true
    compraparcial?: true
    saldoatual?: true
    compraprevista?: true
    opcadastrada?: true
    opcoleta?: true
    saldonecessidade?: true
    vlrpedido?: true
    vlrcompra?: true
    mediaconsumo?: true
  }

  export type NecessidadeMinAggregateInputType = {
    idnecessidade?: true
    dtrelatorio?: true
    codigo_produto?: true
    desc_tecnica?: true
    dtultcompra?: true
    vlrultcompra?: true
    saldoinv?: true
    dtinventario?: true
    opfinalizada?: true
    opemprocesso?: true
    compraentregue?: true
    compraparcial?: true
    saldoatual?: true
    compraprevista?: true
    opcadastrada?: true
    opcoleta?: true
    dtcoleta?: true
    saldonecessidade?: true
    dtnecessidade?: true
    vlrpedido?: true
    vlrcompra?: true
    stcompra?: true
    mediaconsumo?: true
    processo?: true
  }

  export type NecessidadeMaxAggregateInputType = {
    idnecessidade?: true
    dtrelatorio?: true
    codigo_produto?: true
    desc_tecnica?: true
    dtultcompra?: true
    vlrultcompra?: true
    saldoinv?: true
    dtinventario?: true
    opfinalizada?: true
    opemprocesso?: true
    compraentregue?: true
    compraparcial?: true
    saldoatual?: true
    compraprevista?: true
    opcadastrada?: true
    opcoleta?: true
    dtcoleta?: true
    saldonecessidade?: true
    dtnecessidade?: true
    vlrpedido?: true
    vlrcompra?: true
    stcompra?: true
    mediaconsumo?: true
    processo?: true
  }

  export type NecessidadeCountAggregateInputType = {
    idnecessidade?: true
    dtrelatorio?: true
    codigo_produto?: true
    desc_tecnica?: true
    dtultcompra?: true
    vlrultcompra?: true
    saldoinv?: true
    dtinventario?: true
    opfinalizada?: true
    opemprocesso?: true
    compraentregue?: true
    compraparcial?: true
    saldoatual?: true
    compraprevista?: true
    opcadastrada?: true
    opcoleta?: true
    dtcoleta?: true
    saldonecessidade?: true
    dtnecessidade?: true
    vlrpedido?: true
    vlrcompra?: true
    stcompra?: true
    mediaconsumo?: true
    processo?: true
    _all?: true
  }

  export type NecessidadeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Necessidade to aggregate.
     */
    where?: NecessidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Necessidades to fetch.
     */
    orderBy?: NecessidadeOrderByWithRelationInput | NecessidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NecessidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Necessidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Necessidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Necessidades
    **/
    _count?: true | NecessidadeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NecessidadeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NecessidadeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NecessidadeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NecessidadeMaxAggregateInputType
  }

  export type GetNecessidadeAggregateType<T extends NecessidadeAggregateArgs> = {
        [P in keyof T & keyof AggregateNecessidade]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNecessidade[P]>
      : GetScalarType<T[P], AggregateNecessidade[P]>
  }




  export type NecessidadeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NecessidadeWhereInput
    orderBy?: NecessidadeOrderByWithAggregationInput | NecessidadeOrderByWithAggregationInput[]
    by: NecessidadeScalarFieldEnum[] | NecessidadeScalarFieldEnum
    having?: NecessidadeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NecessidadeCountAggregateInputType | true
    _avg?: NecessidadeAvgAggregateInputType
    _sum?: NecessidadeSumAggregateInputType
    _min?: NecessidadeMinAggregateInputType
    _max?: NecessidadeMaxAggregateInputType
  }

  export type NecessidadeGroupByOutputType = {
    idnecessidade: number
    dtrelatorio: Date
    codigo_produto: string | null
    desc_tecnica: string | null
    dtultcompra: Date | null
    vlrultcompra: Decimal | null
    saldoinv: Decimal | null
    dtinventario: Date | null
    opfinalizada: Decimal | null
    opemprocesso: Decimal | null
    compraentregue: Decimal | null
    compraparcial: Decimal | null
    saldoatual: Decimal | null
    compraprevista: Decimal | null
    opcadastrada: Decimal | null
    opcoleta: Decimal | null
    dtcoleta: Date | null
    saldonecessidade: Decimal | null
    dtnecessidade: Date | null
    vlrpedido: Decimal | null
    vlrcompra: Decimal | null
    stcompra: boolean | null
    mediaconsumo: Decimal | null
    processo: string | null
    _count: NecessidadeCountAggregateOutputType | null
    _avg: NecessidadeAvgAggregateOutputType | null
    _sum: NecessidadeSumAggregateOutputType | null
    _min: NecessidadeMinAggregateOutputType | null
    _max: NecessidadeMaxAggregateOutputType | null
  }

  type GetNecessidadeGroupByPayload<T extends NecessidadeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NecessidadeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NecessidadeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NecessidadeGroupByOutputType[P]>
            : GetScalarType<T[P], NecessidadeGroupByOutputType[P]>
        }
      >
    >


  export type NecessidadeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idnecessidade?: boolean
    dtrelatorio?: boolean
    codigo_produto?: boolean
    desc_tecnica?: boolean
    dtultcompra?: boolean
    vlrultcompra?: boolean
    saldoinv?: boolean
    dtinventario?: boolean
    opfinalizada?: boolean
    opemprocesso?: boolean
    compraentregue?: boolean
    compraparcial?: boolean
    saldoatual?: boolean
    compraprevista?: boolean
    opcadastrada?: boolean
    opcoleta?: boolean
    dtcoleta?: boolean
    saldonecessidade?: boolean
    dtnecessidade?: boolean
    vlrpedido?: boolean
    vlrcompra?: boolean
    stcompra?: boolean
    mediaconsumo?: boolean
    processo?: boolean
  }, ExtArgs["result"]["necessidade"]>


  export type NecessidadeSelectScalar = {
    idnecessidade?: boolean
    dtrelatorio?: boolean
    codigo_produto?: boolean
    desc_tecnica?: boolean
    dtultcompra?: boolean
    vlrultcompra?: boolean
    saldoinv?: boolean
    dtinventario?: boolean
    opfinalizada?: boolean
    opemprocesso?: boolean
    compraentregue?: boolean
    compraparcial?: boolean
    saldoatual?: boolean
    compraprevista?: boolean
    opcadastrada?: boolean
    opcoleta?: boolean
    dtcoleta?: boolean
    saldonecessidade?: boolean
    dtnecessidade?: boolean
    vlrpedido?: boolean
    vlrcompra?: boolean
    stcompra?: boolean
    mediaconsumo?: boolean
    processo?: boolean
  }


  export type $NecessidadePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Necessidade"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      idnecessidade: number
      dtrelatorio: Date
      codigo_produto: string | null
      desc_tecnica: string | null
      dtultcompra: Date | null
      vlrultcompra: Prisma.Decimal | null
      saldoinv: Prisma.Decimal | null
      dtinventario: Date | null
      opfinalizada: Prisma.Decimal | null
      opemprocesso: Prisma.Decimal | null
      compraentregue: Prisma.Decimal | null
      compraparcial: Prisma.Decimal | null
      saldoatual: Prisma.Decimal | null
      compraprevista: Prisma.Decimal | null
      opcadastrada: Prisma.Decimal | null
      opcoleta: Prisma.Decimal | null
      dtcoleta: Date | null
      saldonecessidade: Prisma.Decimal | null
      dtnecessidade: Date | null
      vlrpedido: Prisma.Decimal | null
      vlrcompra: Prisma.Decimal | null
      stcompra: boolean | null
      mediaconsumo: Prisma.Decimal | null
      processo: string | null
    }, ExtArgs["result"]["necessidade"]>
    composites: {}
  }

  type NecessidadeGetPayload<S extends boolean | null | undefined | NecessidadeDefaultArgs> = $Result.GetResult<Prisma.$NecessidadePayload, S>

  type NecessidadeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NecessidadeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NecessidadeCountAggregateInputType | true
    }

  export interface NecessidadeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Necessidade'], meta: { name: 'Necessidade' } }
    /**
     * Find zero or one Necessidade that matches the filter.
     * @param {NecessidadeFindUniqueArgs} args - Arguments to find a Necessidade
     * @example
     * // Get one Necessidade
     * const necessidade = await prisma.necessidade.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NecessidadeFindUniqueArgs>(args: SelectSubset<T, NecessidadeFindUniqueArgs<ExtArgs>>): Prisma__NecessidadeClient<$Result.GetResult<Prisma.$NecessidadePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Necessidade that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {NecessidadeFindUniqueOrThrowArgs} args - Arguments to find a Necessidade
     * @example
     * // Get one Necessidade
     * const necessidade = await prisma.necessidade.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NecessidadeFindUniqueOrThrowArgs>(args: SelectSubset<T, NecessidadeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NecessidadeClient<$Result.GetResult<Prisma.$NecessidadePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Necessidade that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NecessidadeFindFirstArgs} args - Arguments to find a Necessidade
     * @example
     * // Get one Necessidade
     * const necessidade = await prisma.necessidade.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NecessidadeFindFirstArgs>(args?: SelectSubset<T, NecessidadeFindFirstArgs<ExtArgs>>): Prisma__NecessidadeClient<$Result.GetResult<Prisma.$NecessidadePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Necessidade that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NecessidadeFindFirstOrThrowArgs} args - Arguments to find a Necessidade
     * @example
     * // Get one Necessidade
     * const necessidade = await prisma.necessidade.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NecessidadeFindFirstOrThrowArgs>(args?: SelectSubset<T, NecessidadeFindFirstOrThrowArgs<ExtArgs>>): Prisma__NecessidadeClient<$Result.GetResult<Prisma.$NecessidadePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Necessidades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NecessidadeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Necessidades
     * const necessidades = await prisma.necessidade.findMany()
     * 
     * // Get first 10 Necessidades
     * const necessidades = await prisma.necessidade.findMany({ take: 10 })
     * 
     * // Only select the `idnecessidade`
     * const necessidadeWithIdnecessidadeOnly = await prisma.necessidade.findMany({ select: { idnecessidade: true } })
     * 
     */
    findMany<T extends NecessidadeFindManyArgs>(args?: SelectSubset<T, NecessidadeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NecessidadePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Necessidade.
     * @param {NecessidadeCreateArgs} args - Arguments to create a Necessidade.
     * @example
     * // Create one Necessidade
     * const Necessidade = await prisma.necessidade.create({
     *   data: {
     *     // ... data to create a Necessidade
     *   }
     * })
     * 
     */
    create<T extends NecessidadeCreateArgs>(args: SelectSubset<T, NecessidadeCreateArgs<ExtArgs>>): Prisma__NecessidadeClient<$Result.GetResult<Prisma.$NecessidadePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Necessidades.
     * @param {NecessidadeCreateManyArgs} args - Arguments to create many Necessidades.
     * @example
     * // Create many Necessidades
     * const necessidade = await prisma.necessidade.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NecessidadeCreateManyArgs>(args?: SelectSubset<T, NecessidadeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Necessidade.
     * @param {NecessidadeDeleteArgs} args - Arguments to delete one Necessidade.
     * @example
     * // Delete one Necessidade
     * const Necessidade = await prisma.necessidade.delete({
     *   where: {
     *     // ... filter to delete one Necessidade
     *   }
     * })
     * 
     */
    delete<T extends NecessidadeDeleteArgs>(args: SelectSubset<T, NecessidadeDeleteArgs<ExtArgs>>): Prisma__NecessidadeClient<$Result.GetResult<Prisma.$NecessidadePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Necessidade.
     * @param {NecessidadeUpdateArgs} args - Arguments to update one Necessidade.
     * @example
     * // Update one Necessidade
     * const necessidade = await prisma.necessidade.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NecessidadeUpdateArgs>(args: SelectSubset<T, NecessidadeUpdateArgs<ExtArgs>>): Prisma__NecessidadeClient<$Result.GetResult<Prisma.$NecessidadePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Necessidades.
     * @param {NecessidadeDeleteManyArgs} args - Arguments to filter Necessidades to delete.
     * @example
     * // Delete a few Necessidades
     * const { count } = await prisma.necessidade.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NecessidadeDeleteManyArgs>(args?: SelectSubset<T, NecessidadeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Necessidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NecessidadeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Necessidades
     * const necessidade = await prisma.necessidade.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NecessidadeUpdateManyArgs>(args: SelectSubset<T, NecessidadeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Necessidade.
     * @param {NecessidadeUpsertArgs} args - Arguments to update or create a Necessidade.
     * @example
     * // Update or create a Necessidade
     * const necessidade = await prisma.necessidade.upsert({
     *   create: {
     *     // ... data to create a Necessidade
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Necessidade we want to update
     *   }
     * })
     */
    upsert<T extends NecessidadeUpsertArgs>(args: SelectSubset<T, NecessidadeUpsertArgs<ExtArgs>>): Prisma__NecessidadeClient<$Result.GetResult<Prisma.$NecessidadePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Necessidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NecessidadeCountArgs} args - Arguments to filter Necessidades to count.
     * @example
     * // Count the number of Necessidades
     * const count = await prisma.necessidade.count({
     *   where: {
     *     // ... the filter for the Necessidades we want to count
     *   }
     * })
    **/
    count<T extends NecessidadeCountArgs>(
      args?: Subset<T, NecessidadeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NecessidadeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Necessidade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NecessidadeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NecessidadeAggregateArgs>(args: Subset<T, NecessidadeAggregateArgs>): Prisma.PrismaPromise<GetNecessidadeAggregateType<T>>

    /**
     * Group by Necessidade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NecessidadeGroupByArgs} args - Group by arguments.
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
      T extends NecessidadeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NecessidadeGroupByArgs['orderBy'] }
        : { orderBy?: NecessidadeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NecessidadeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNecessidadeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Necessidade model
   */
  readonly fields: NecessidadeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Necessidade.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NecessidadeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Necessidade model
   */ 
  interface NecessidadeFieldRefs {
    readonly idnecessidade: FieldRef<"Necessidade", 'Int'>
    readonly dtrelatorio: FieldRef<"Necessidade", 'DateTime'>
    readonly codigo_produto: FieldRef<"Necessidade", 'String'>
    readonly desc_tecnica: FieldRef<"Necessidade", 'String'>
    readonly dtultcompra: FieldRef<"Necessidade", 'DateTime'>
    readonly vlrultcompra: FieldRef<"Necessidade", 'Decimal'>
    readonly saldoinv: FieldRef<"Necessidade", 'Decimal'>
    readonly dtinventario: FieldRef<"Necessidade", 'DateTime'>
    readonly opfinalizada: FieldRef<"Necessidade", 'Decimal'>
    readonly opemprocesso: FieldRef<"Necessidade", 'Decimal'>
    readonly compraentregue: FieldRef<"Necessidade", 'Decimal'>
    readonly compraparcial: FieldRef<"Necessidade", 'Decimal'>
    readonly saldoatual: FieldRef<"Necessidade", 'Decimal'>
    readonly compraprevista: FieldRef<"Necessidade", 'Decimal'>
    readonly opcadastrada: FieldRef<"Necessidade", 'Decimal'>
    readonly opcoleta: FieldRef<"Necessidade", 'Decimal'>
    readonly dtcoleta: FieldRef<"Necessidade", 'DateTime'>
    readonly saldonecessidade: FieldRef<"Necessidade", 'Decimal'>
    readonly dtnecessidade: FieldRef<"Necessidade", 'DateTime'>
    readonly vlrpedido: FieldRef<"Necessidade", 'Decimal'>
    readonly vlrcompra: FieldRef<"Necessidade", 'Decimal'>
    readonly stcompra: FieldRef<"Necessidade", 'Boolean'>
    readonly mediaconsumo: FieldRef<"Necessidade", 'Decimal'>
    readonly processo: FieldRef<"Necessidade", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Necessidade findUnique
   */
  export type NecessidadeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Necessidade
     */
    select?: NecessidadeSelect<ExtArgs> | null
    /**
     * Filter, which Necessidade to fetch.
     */
    where: NecessidadeWhereUniqueInput
  }

  /**
   * Necessidade findUniqueOrThrow
   */
  export type NecessidadeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Necessidade
     */
    select?: NecessidadeSelect<ExtArgs> | null
    /**
     * Filter, which Necessidade to fetch.
     */
    where: NecessidadeWhereUniqueInput
  }

  /**
   * Necessidade findFirst
   */
  export type NecessidadeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Necessidade
     */
    select?: NecessidadeSelect<ExtArgs> | null
    /**
     * Filter, which Necessidade to fetch.
     */
    where?: NecessidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Necessidades to fetch.
     */
    orderBy?: NecessidadeOrderByWithRelationInput | NecessidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Necessidades.
     */
    cursor?: NecessidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Necessidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Necessidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Necessidades.
     */
    distinct?: NecessidadeScalarFieldEnum | NecessidadeScalarFieldEnum[]
  }

  /**
   * Necessidade findFirstOrThrow
   */
  export type NecessidadeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Necessidade
     */
    select?: NecessidadeSelect<ExtArgs> | null
    /**
     * Filter, which Necessidade to fetch.
     */
    where?: NecessidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Necessidades to fetch.
     */
    orderBy?: NecessidadeOrderByWithRelationInput | NecessidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Necessidades.
     */
    cursor?: NecessidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Necessidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Necessidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Necessidades.
     */
    distinct?: NecessidadeScalarFieldEnum | NecessidadeScalarFieldEnum[]
  }

  /**
   * Necessidade findMany
   */
  export type NecessidadeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Necessidade
     */
    select?: NecessidadeSelect<ExtArgs> | null
    /**
     * Filter, which Necessidades to fetch.
     */
    where?: NecessidadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Necessidades to fetch.
     */
    orderBy?: NecessidadeOrderByWithRelationInput | NecessidadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Necessidades.
     */
    cursor?: NecessidadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Necessidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Necessidades.
     */
    skip?: number
    distinct?: NecessidadeScalarFieldEnum | NecessidadeScalarFieldEnum[]
  }

  /**
   * Necessidade create
   */
  export type NecessidadeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Necessidade
     */
    select?: NecessidadeSelect<ExtArgs> | null
    /**
     * The data needed to create a Necessidade.
     */
    data: XOR<NecessidadeCreateInput, NecessidadeUncheckedCreateInput>
  }

  /**
   * Necessidade createMany
   */
  export type NecessidadeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Necessidades.
     */
    data: NecessidadeCreateManyInput | NecessidadeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Necessidade update
   */
  export type NecessidadeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Necessidade
     */
    select?: NecessidadeSelect<ExtArgs> | null
    /**
     * The data needed to update a Necessidade.
     */
    data: XOR<NecessidadeUpdateInput, NecessidadeUncheckedUpdateInput>
    /**
     * Choose, which Necessidade to update.
     */
    where: NecessidadeWhereUniqueInput
  }

  /**
   * Necessidade updateMany
   */
  export type NecessidadeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Necessidades.
     */
    data: XOR<NecessidadeUpdateManyMutationInput, NecessidadeUncheckedUpdateManyInput>
    /**
     * Filter which Necessidades to update
     */
    where?: NecessidadeWhereInput
  }

  /**
   * Necessidade upsert
   */
  export type NecessidadeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Necessidade
     */
    select?: NecessidadeSelect<ExtArgs> | null
    /**
     * The filter to search for the Necessidade to update in case it exists.
     */
    where: NecessidadeWhereUniqueInput
    /**
     * In case the Necessidade found by the `where` argument doesn't exist, create a new Necessidade with this data.
     */
    create: XOR<NecessidadeCreateInput, NecessidadeUncheckedCreateInput>
    /**
     * In case the Necessidade was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NecessidadeUpdateInput, NecessidadeUncheckedUpdateInput>
  }

  /**
   * Necessidade delete
   */
  export type NecessidadeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Necessidade
     */
    select?: NecessidadeSelect<ExtArgs> | null
    /**
     * Filter which Necessidade to delete.
     */
    where: NecessidadeWhereUniqueInput
  }

  /**
   * Necessidade deleteMany
   */
  export type NecessidadeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Necessidades to delete
     */
    where?: NecessidadeWhereInput
  }

  /**
   * Necessidade without action
   */
  export type NecessidadeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Necessidade
     */
    select?: NecessidadeSelect<ExtArgs> | null
  }


  /**
   * Model Painel
   */

  export type AggregatePainel = {
    _count: PainelCountAggregateOutputType | null
    _avg: PainelAvgAggregateOutputType | null
    _sum: PainelSumAggregateOutputType | null
    _min: PainelMinAggregateOutputType | null
    _max: PainelMaxAggregateOutputType | null
  }

  export type PainelAvgAggregateOutputType = {
    idpainel: number | null
    idnivel: number | null
    nrpainel: number | null
  }

  export type PainelSumAggregateOutputType = {
    idpainel: number | null
    idnivel: number | null
    nrpainel: number | null
  }

  export type PainelMinAggregateOutputType = {
    idpainel: number | null
    idnivel: number | null
    nrpainel: number | null
    status: string | null
    descricao: string | null
  }

  export type PainelMaxAggregateOutputType = {
    idpainel: number | null
    idnivel: number | null
    nrpainel: number | null
    status: string | null
    descricao: string | null
  }

  export type PainelCountAggregateOutputType = {
    idpainel: number
    idnivel: number
    nrpainel: number
    status: number
    descricao: number
    _all: number
  }


  export type PainelAvgAggregateInputType = {
    idpainel?: true
    idnivel?: true
    nrpainel?: true
  }

  export type PainelSumAggregateInputType = {
    idpainel?: true
    idnivel?: true
    nrpainel?: true
  }

  export type PainelMinAggregateInputType = {
    idpainel?: true
    idnivel?: true
    nrpainel?: true
    status?: true
    descricao?: true
  }

  export type PainelMaxAggregateInputType = {
    idpainel?: true
    idnivel?: true
    nrpainel?: true
    status?: true
    descricao?: true
  }

  export type PainelCountAggregateInputType = {
    idpainel?: true
    idnivel?: true
    nrpainel?: true
    status?: true
    descricao?: true
    _all?: true
  }

  export type PainelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Painel to aggregate.
     */
    where?: PainelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Painels to fetch.
     */
    orderBy?: PainelOrderByWithRelationInput | PainelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PainelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Painels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Painels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Painels
    **/
    _count?: true | PainelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PainelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PainelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PainelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PainelMaxAggregateInputType
  }

  export type GetPainelAggregateType<T extends PainelAggregateArgs> = {
        [P in keyof T & keyof AggregatePainel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePainel[P]>
      : GetScalarType<T[P], AggregatePainel[P]>
  }




  export type PainelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PainelWhereInput
    orderBy?: PainelOrderByWithAggregationInput | PainelOrderByWithAggregationInput[]
    by: PainelScalarFieldEnum[] | PainelScalarFieldEnum
    having?: PainelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PainelCountAggregateInputType | true
    _avg?: PainelAvgAggregateInputType
    _sum?: PainelSumAggregateInputType
    _min?: PainelMinAggregateInputType
    _max?: PainelMaxAggregateInputType
  }

  export type PainelGroupByOutputType = {
    idpainel: number
    idnivel: number
    nrpainel: number
    status: string
    descricao: string
    _count: PainelCountAggregateOutputType | null
    _avg: PainelAvgAggregateOutputType | null
    _sum: PainelSumAggregateOutputType | null
    _min: PainelMinAggregateOutputType | null
    _max: PainelMaxAggregateOutputType | null
  }

  type GetPainelGroupByPayload<T extends PainelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PainelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PainelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PainelGroupByOutputType[P]>
            : GetScalarType<T[P], PainelGroupByOutputType[P]>
        }
      >
    >


  export type PainelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idpainel?: boolean
    idnivel?: boolean
    nrpainel?: boolean
    status?: boolean
    descricao?: boolean
  }, ExtArgs["result"]["painel"]>


  export type PainelSelectScalar = {
    idpainel?: boolean
    idnivel?: boolean
    nrpainel?: boolean
    status?: boolean
    descricao?: boolean
  }


  export type $PainelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Painel"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      idpainel: number
      idnivel: number
      nrpainel: number
      status: string
      descricao: string
    }, ExtArgs["result"]["painel"]>
    composites: {}
  }

  type PainelGetPayload<S extends boolean | null | undefined | PainelDefaultArgs> = $Result.GetResult<Prisma.$PainelPayload, S>

  type PainelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PainelFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PainelCountAggregateInputType | true
    }

  export interface PainelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Painel'], meta: { name: 'Painel' } }
    /**
     * Find zero or one Painel that matches the filter.
     * @param {PainelFindUniqueArgs} args - Arguments to find a Painel
     * @example
     * // Get one Painel
     * const painel = await prisma.painel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PainelFindUniqueArgs>(args: SelectSubset<T, PainelFindUniqueArgs<ExtArgs>>): Prisma__PainelClient<$Result.GetResult<Prisma.$PainelPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Painel that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PainelFindUniqueOrThrowArgs} args - Arguments to find a Painel
     * @example
     * // Get one Painel
     * const painel = await prisma.painel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PainelFindUniqueOrThrowArgs>(args: SelectSubset<T, PainelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PainelClient<$Result.GetResult<Prisma.$PainelPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Painel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PainelFindFirstArgs} args - Arguments to find a Painel
     * @example
     * // Get one Painel
     * const painel = await prisma.painel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PainelFindFirstArgs>(args?: SelectSubset<T, PainelFindFirstArgs<ExtArgs>>): Prisma__PainelClient<$Result.GetResult<Prisma.$PainelPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Painel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PainelFindFirstOrThrowArgs} args - Arguments to find a Painel
     * @example
     * // Get one Painel
     * const painel = await prisma.painel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PainelFindFirstOrThrowArgs>(args?: SelectSubset<T, PainelFindFirstOrThrowArgs<ExtArgs>>): Prisma__PainelClient<$Result.GetResult<Prisma.$PainelPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Painels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PainelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Painels
     * const painels = await prisma.painel.findMany()
     * 
     * // Get first 10 Painels
     * const painels = await prisma.painel.findMany({ take: 10 })
     * 
     * // Only select the `idpainel`
     * const painelWithIdpainelOnly = await prisma.painel.findMany({ select: { idpainel: true } })
     * 
     */
    findMany<T extends PainelFindManyArgs>(args?: SelectSubset<T, PainelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PainelPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Painel.
     * @param {PainelCreateArgs} args - Arguments to create a Painel.
     * @example
     * // Create one Painel
     * const Painel = await prisma.painel.create({
     *   data: {
     *     // ... data to create a Painel
     *   }
     * })
     * 
     */
    create<T extends PainelCreateArgs>(args: SelectSubset<T, PainelCreateArgs<ExtArgs>>): Prisma__PainelClient<$Result.GetResult<Prisma.$PainelPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Painels.
     * @param {PainelCreateManyArgs} args - Arguments to create many Painels.
     * @example
     * // Create many Painels
     * const painel = await prisma.painel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PainelCreateManyArgs>(args?: SelectSubset<T, PainelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Painel.
     * @param {PainelDeleteArgs} args - Arguments to delete one Painel.
     * @example
     * // Delete one Painel
     * const Painel = await prisma.painel.delete({
     *   where: {
     *     // ... filter to delete one Painel
     *   }
     * })
     * 
     */
    delete<T extends PainelDeleteArgs>(args: SelectSubset<T, PainelDeleteArgs<ExtArgs>>): Prisma__PainelClient<$Result.GetResult<Prisma.$PainelPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Painel.
     * @param {PainelUpdateArgs} args - Arguments to update one Painel.
     * @example
     * // Update one Painel
     * const painel = await prisma.painel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PainelUpdateArgs>(args: SelectSubset<T, PainelUpdateArgs<ExtArgs>>): Prisma__PainelClient<$Result.GetResult<Prisma.$PainelPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Painels.
     * @param {PainelDeleteManyArgs} args - Arguments to filter Painels to delete.
     * @example
     * // Delete a few Painels
     * const { count } = await prisma.painel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PainelDeleteManyArgs>(args?: SelectSubset<T, PainelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Painels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PainelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Painels
     * const painel = await prisma.painel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PainelUpdateManyArgs>(args: SelectSubset<T, PainelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Painel.
     * @param {PainelUpsertArgs} args - Arguments to update or create a Painel.
     * @example
     * // Update or create a Painel
     * const painel = await prisma.painel.upsert({
     *   create: {
     *     // ... data to create a Painel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Painel we want to update
     *   }
     * })
     */
    upsert<T extends PainelUpsertArgs>(args: SelectSubset<T, PainelUpsertArgs<ExtArgs>>): Prisma__PainelClient<$Result.GetResult<Prisma.$PainelPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Painels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PainelCountArgs} args - Arguments to filter Painels to count.
     * @example
     * // Count the number of Painels
     * const count = await prisma.painel.count({
     *   where: {
     *     // ... the filter for the Painels we want to count
     *   }
     * })
    **/
    count<T extends PainelCountArgs>(
      args?: Subset<T, PainelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PainelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Painel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PainelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PainelAggregateArgs>(args: Subset<T, PainelAggregateArgs>): Prisma.PrismaPromise<GetPainelAggregateType<T>>

    /**
     * Group by Painel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PainelGroupByArgs} args - Group by arguments.
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
      T extends PainelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PainelGroupByArgs['orderBy'] }
        : { orderBy?: PainelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PainelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPainelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Painel model
   */
  readonly fields: PainelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Painel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PainelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Painel model
   */ 
  interface PainelFieldRefs {
    readonly idpainel: FieldRef<"Painel", 'Int'>
    readonly idnivel: FieldRef<"Painel", 'Int'>
    readonly nrpainel: FieldRef<"Painel", 'Int'>
    readonly status: FieldRef<"Painel", 'String'>
    readonly descricao: FieldRef<"Painel", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Painel findUnique
   */
  export type PainelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Painel
     */
    select?: PainelSelect<ExtArgs> | null
    /**
     * Filter, which Painel to fetch.
     */
    where: PainelWhereUniqueInput
  }

  /**
   * Painel findUniqueOrThrow
   */
  export type PainelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Painel
     */
    select?: PainelSelect<ExtArgs> | null
    /**
     * Filter, which Painel to fetch.
     */
    where: PainelWhereUniqueInput
  }

  /**
   * Painel findFirst
   */
  export type PainelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Painel
     */
    select?: PainelSelect<ExtArgs> | null
    /**
     * Filter, which Painel to fetch.
     */
    where?: PainelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Painels to fetch.
     */
    orderBy?: PainelOrderByWithRelationInput | PainelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Painels.
     */
    cursor?: PainelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Painels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Painels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Painels.
     */
    distinct?: PainelScalarFieldEnum | PainelScalarFieldEnum[]
  }

  /**
   * Painel findFirstOrThrow
   */
  export type PainelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Painel
     */
    select?: PainelSelect<ExtArgs> | null
    /**
     * Filter, which Painel to fetch.
     */
    where?: PainelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Painels to fetch.
     */
    orderBy?: PainelOrderByWithRelationInput | PainelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Painels.
     */
    cursor?: PainelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Painels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Painels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Painels.
     */
    distinct?: PainelScalarFieldEnum | PainelScalarFieldEnum[]
  }

  /**
   * Painel findMany
   */
  export type PainelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Painel
     */
    select?: PainelSelect<ExtArgs> | null
    /**
     * Filter, which Painels to fetch.
     */
    where?: PainelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Painels to fetch.
     */
    orderBy?: PainelOrderByWithRelationInput | PainelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Painels.
     */
    cursor?: PainelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Painels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Painels.
     */
    skip?: number
    distinct?: PainelScalarFieldEnum | PainelScalarFieldEnum[]
  }

  /**
   * Painel create
   */
  export type PainelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Painel
     */
    select?: PainelSelect<ExtArgs> | null
    /**
     * The data needed to create a Painel.
     */
    data: XOR<PainelCreateInput, PainelUncheckedCreateInput>
  }

  /**
   * Painel createMany
   */
  export type PainelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Painels.
     */
    data: PainelCreateManyInput | PainelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Painel update
   */
  export type PainelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Painel
     */
    select?: PainelSelect<ExtArgs> | null
    /**
     * The data needed to update a Painel.
     */
    data: XOR<PainelUpdateInput, PainelUncheckedUpdateInput>
    /**
     * Choose, which Painel to update.
     */
    where: PainelWhereUniqueInput
  }

  /**
   * Painel updateMany
   */
  export type PainelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Painels.
     */
    data: XOR<PainelUpdateManyMutationInput, PainelUncheckedUpdateManyInput>
    /**
     * Filter which Painels to update
     */
    where?: PainelWhereInput
  }

  /**
   * Painel upsert
   */
  export type PainelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Painel
     */
    select?: PainelSelect<ExtArgs> | null
    /**
     * The filter to search for the Painel to update in case it exists.
     */
    where: PainelWhereUniqueInput
    /**
     * In case the Painel found by the `where` argument doesn't exist, create a new Painel with this data.
     */
    create: XOR<PainelCreateInput, PainelUncheckedCreateInput>
    /**
     * In case the Painel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PainelUpdateInput, PainelUncheckedUpdateInput>
  }

  /**
   * Painel delete
   */
  export type PainelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Painel
     */
    select?: PainelSelect<ExtArgs> | null
    /**
     * Filter which Painel to delete.
     */
    where: PainelWhereUniqueInput
  }

  /**
   * Painel deleteMany
   */
  export type PainelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Painels to delete
     */
    where?: PainelWhereInput
  }

  /**
   * Painel without action
   */
  export type PainelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Painel
     */
    select?: PainelSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
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
    filtra: 'filtra',
    fixa: 'fixa'
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


  export const CustoiqlScalarFieldEnum: {
    id: 'id',
    numero_op: 'numero_op',
    produzido: 'produzido',
    data_finalizacao: 'data_finalizacao',
    codigo_produto: 'codigo_produto',
    desc_tecnica: 'desc_tecnica',
    quantidade_final: 'quantidade_final',
    descricao: 'descricao',
    valor_unitario: 'valor_unitario',
    custo: 'custo',
    quantidade_produzida: 'quantidade_produzida'
  };

  export type CustoiqlScalarFieldEnum = (typeof CustoiqlScalarFieldEnum)[keyof typeof CustoiqlScalarFieldEnum]


  export const InventarioScalarFieldEnum: {
    id_inv: 'id_inv',
    produto: 'produto',
    coletor: 'coletor',
    quantidade: 'quantidade',
    cod_produto: 'cod_produto',
    Codigo_tipo_item: 'Codigo_tipo_item',
    lote: 'lote',
    lote_original: 'lote_original',
    Lote_interno: 'Lote_interno',
    Data_validade_prod: 'Data_validade_prod',
    Desc_tecnica: 'Desc_tecnica',
    Data: 'Data',
    Unidade_estoque: 'Unidade_estoque',
    Unidade_compra: 'Unidade_compra',
    codigo_embalagem: 'codigo_embalagem',
    estoque: 'estoque'
  };

  export type InventarioScalarFieldEnum = (typeof InventarioScalarFieldEnum)[keyof typeof InventarioScalarFieldEnum]


  export const SendmailScalarFieldEnum: {
    idsendmail: 'idsendmail',
    destinatario: 'destinatario',
    html: 'html',
    subject: 'subject',
    idusercreateAt: 'idusercreateAt',
    createdAt: 'createdAt',
    iduserupdatedAt: 'iduserupdatedAt',
    updatedAt: 'updatedAt',
    status: 'status',
    idsolicitante: 'idsolicitante',
    idusuarioaprovacao: 'idusuarioaprovacao',
    idusuariocotacao: 'idusuariocotacao',
    idusuarioaprovacaodir: 'idusuarioaprovacaodir',
    idusuariocompra: 'idusuariocompra',
    idusuarioentrega: 'idusuarioentrega',
    idcompra: 'idcompra',
    attachments: 'attachments'
  };

  export type SendmailScalarFieldEnum = (typeof SendmailScalarFieldEnum)[keyof typeof SendmailScalarFieldEnum]


  export const ResumocomprasScalarFieldEnum: {
    id: 'id',
    Apelido_empresa: 'Apelido_empresa',
    Apelido_estabelecimento: 'Apelido_estabelecimento',
    Codigo_produto: 'Codigo_produto',
    Unidade_estoque: 'Unidade_estoque',
    Unidade_compra: 'Unidade_compra',
    Desc_tecnica: 'Desc_tecnica',
    Estoque_minimo: 'Estoque_minimo',
    Lote_compra: 'Lote_compra',
    mes1: 'mes1',
    mes2: 'mes2',
    mes3: 'mes3',
    mes4: 'mes4',
    mes5: 'mes5',
    mes6: 'mes6',
    mes7: 'mes7',
    mes8: 'mes8',
    mes9: 'mes9',
    mes10: 'mes10',
    mes11: 'mes11',
    mes12: 'mes12',
    compras: 'compras',
    opcadastradas: 'opcadastradas',
    saldoestoque: 'saldoestoque',
    coleta: 'coleta'
  };

  export type ResumocomprasScalarFieldEnum = (typeof ResumocomprasScalarFieldEnum)[keyof typeof ResumocomprasScalarFieldEnum]


  export const ComprasScalarFieldEnum: {
    idcompras: 'idcompras',
    chavearquivo: 'chavearquivo',
    porcentagem: 'porcentagem',
    codigo_produto: 'codigo_produto',
    desc_tecnica: 'desc_tecnica',
    saldo: 'saldo',
    consumo12: 'consumo12',
    mediaconsumo: 'mediaconsumo',
    opcompra: 'opcompra',
    opcompraEntregue: 'opcompraEntregue',
    opfinalizada: 'opfinalizada',
    opemprocesso: 'opemprocesso',
    opcadastrada: 'opcadastrada',
    opcoleta: 'opcoleta',
    totcompras: 'totcompras',
    totconsumo: 'totconsumo',
    saldoatual: 'saldoatual',
    valorultimacompra: 'valorultimacompra',
    dataultimacompra: 'dataultimacompra',
    saldometa: 'saldometa',
    compra: 'compra',
    datacoleta: 'datacoleta',
    opcadastrada15: 'opcadastrada15',
    opcoleta15: 'opcoleta15',
    totcompras15: 'totcompras15',
    totconsumo15: 'totconsumo15',
    saldoatual15: 'saldoatual15',
    opcadastrada30: 'opcadastrada30',
    opcoleta30: 'opcoleta30',
    totcompras30: 'totcompras30',
    totconsumo30: 'totconsumo30',
    saldoatual30: 'saldoatual30',
    opcompra15: 'opcompra15',
    opcompra30: 'opcompra30'
  };

  export type ComprasScalarFieldEnum = (typeof ComprasScalarFieldEnum)[keyof typeof ComprasScalarFieldEnum]


  export const NecessidadeScalarFieldEnum: {
    idnecessidade: 'idnecessidade',
    dtrelatorio: 'dtrelatorio',
    codigo_produto: 'codigo_produto',
    desc_tecnica: 'desc_tecnica',
    dtultcompra: 'dtultcompra',
    vlrultcompra: 'vlrultcompra',
    saldoinv: 'saldoinv',
    dtinventario: 'dtinventario',
    opfinalizada: 'opfinalizada',
    opemprocesso: 'opemprocesso',
    compraentregue: 'compraentregue',
    compraparcial: 'compraparcial',
    saldoatual: 'saldoatual',
    compraprevista: 'compraprevista',
    opcadastrada: 'opcadastrada',
    opcoleta: 'opcoleta',
    dtcoleta: 'dtcoleta',
    saldonecessidade: 'saldonecessidade',
    dtnecessidade: 'dtnecessidade',
    vlrpedido: 'vlrpedido',
    vlrcompra: 'vlrcompra',
    stcompra: 'stcompra',
    mediaconsumo: 'mediaconsumo',
    processo: 'processo'
  };

  export type NecessidadeScalarFieldEnum = (typeof NecessidadeScalarFieldEnum)[keyof typeof NecessidadeScalarFieldEnum]


  export const PainelScalarFieldEnum: {
    idpainel: 'idpainel',
    idnivel: 'idnivel',
    nrpainel: 'nrpainel',
    status: 'status',
    descricao: 'descricao'
  };

  export type PainelScalarFieldEnum = (typeof PainelScalarFieldEnum)[keyof typeof PainelScalarFieldEnum]


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


  export const UsuarioOrderByRelevanceFieldEnum: {
    nome: 'nome',
    email: 'email',
    cpf: 'cpf',
    sexo: 'sexo',
    status: 'status',
    senha: 'senha',
    celular: 'celular',
    ramaln: 'ramaln',
    chatid: 'chatid'
  };

  export type UsuarioOrderByRelevanceFieldEnum = (typeof UsuarioOrderByRelevanceFieldEnum)[keyof typeof UsuarioOrderByRelevanceFieldEnum]


  export const NivelOrderByRelevanceFieldEnum: {
    nome: 'nome',
    status: 'status'
  };

  export type NivelOrderByRelevanceFieldEnum = (typeof NivelOrderByRelevanceFieldEnum)[keyof typeof NivelOrderByRelevanceFieldEnum]


  export const LoginOrderByRelevanceFieldEnum: {
    email: 'email',
    status: 'status',
    iporigem: 'iporigem'
  };

  export type LoginOrderByRelevanceFieldEnum = (typeof LoginOrderByRelevanceFieldEnum)[keyof typeof LoginOrderByRelevanceFieldEnum]


  export const MenuOrderByRelevanceFieldEnum: {
    status: 'status',
    nome: 'nome'
  };

  export type MenuOrderByRelevanceFieldEnum = (typeof MenuOrderByRelevanceFieldEnum)[keyof typeof MenuOrderByRelevanceFieldEnum]


  export const MenuitemOrderByRelevanceFieldEnum: {
    titulo: 'titulo',
    url: 'url',
    icon: 'icon',
    status: 'status'
  };

  export type MenuitemOrderByRelevanceFieldEnum = (typeof MenuitemOrderByRelevanceFieldEnum)[keyof typeof MenuitemOrderByRelevanceFieldEnum]


  export const ColunaOrderByRelevanceFieldEnum: {
    programa: 'programa',
    field: 'field',
    header: 'header',
    style: 'style',
    type: 'type',
    agregado1: 'agregado1',
    agregado2: 'agregado2',
    status: 'status',
    ordena: 'ordena'
  };

  export type ColunaOrderByRelevanceFieldEnum = (typeof ColunaOrderByRelevanceFieldEnum)[keyof typeof ColunaOrderByRelevanceFieldEnum]


  export const UsuariocolunaOrderByRelevanceFieldEnum: {
    status: 'status'
  };

  export type UsuariocolunaOrderByRelevanceFieldEnum = (typeof UsuariocolunaOrderByRelevanceFieldEnum)[keyof typeof UsuariocolunaOrderByRelevanceFieldEnum]


  export const UnidadeOrderByRelevanceFieldEnum: {
    nome: 'nome',
    status: 'status'
  };

  export type UnidadeOrderByRelevanceFieldEnum = (typeof UnidadeOrderByRelevanceFieldEnum)[keyof typeof UnidadeOrderByRelevanceFieldEnum]


  export const CustoiqlOrderByRelevanceFieldEnum: {
    numero_op: 'numero_op',
    produzido: 'produzido',
    codigo_produto: 'codigo_produto',
    desc_tecnica: 'desc_tecnica',
    descricao: 'descricao'
  };

  export type CustoiqlOrderByRelevanceFieldEnum = (typeof CustoiqlOrderByRelevanceFieldEnum)[keyof typeof CustoiqlOrderByRelevanceFieldEnum]


  export const InventarioOrderByRelevanceFieldEnum: {
    produto: 'produto',
    coletor: 'coletor',
    cod_produto: 'cod_produto',
    Codigo_tipo_item: 'Codigo_tipo_item',
    lote: 'lote',
    lote_original: 'lote_original',
    Lote_interno: 'Lote_interno',
    Desc_tecnica: 'Desc_tecnica',
    Unidade_estoque: 'Unidade_estoque',
    Unidade_compra: 'Unidade_compra',
    codigo_embalagem: 'codigo_embalagem'
  };

  export type InventarioOrderByRelevanceFieldEnum = (typeof InventarioOrderByRelevanceFieldEnum)[keyof typeof InventarioOrderByRelevanceFieldEnum]


  export const SendmailOrderByRelevanceFieldEnum: {
    destinatario: 'destinatario',
    subject: 'subject',
    status: 'status'
  };

  export type SendmailOrderByRelevanceFieldEnum = (typeof SendmailOrderByRelevanceFieldEnum)[keyof typeof SendmailOrderByRelevanceFieldEnum]


  export const ResumocomprasOrderByRelevanceFieldEnum: {
    Apelido_empresa: 'Apelido_empresa',
    Apelido_estabelecimento: 'Apelido_estabelecimento',
    Codigo_produto: 'Codigo_produto',
    Unidade_estoque: 'Unidade_estoque',
    Unidade_compra: 'Unidade_compra',
    Desc_tecnica: 'Desc_tecnica'
  };

  export type ResumocomprasOrderByRelevanceFieldEnum = (typeof ResumocomprasOrderByRelevanceFieldEnum)[keyof typeof ResumocomprasOrderByRelevanceFieldEnum]


  export const ComprasOrderByRelevanceFieldEnum: {
    chavearquivo: 'chavearquivo',
    codigo_produto: 'codigo_produto',
    desc_tecnica: 'desc_tecnica'
  };

  export type ComprasOrderByRelevanceFieldEnum = (typeof ComprasOrderByRelevanceFieldEnum)[keyof typeof ComprasOrderByRelevanceFieldEnum]


  export const NecessidadeOrderByRelevanceFieldEnum: {
    codigo_produto: 'codigo_produto',
    desc_tecnica: 'desc_tecnica',
    processo: 'processo'
  };

  export type NecessidadeOrderByRelevanceFieldEnum = (typeof NecessidadeOrderByRelevanceFieldEnum)[keyof typeof NecessidadeOrderByRelevanceFieldEnum]


  export const PainelOrderByRelevanceFieldEnum: {
    status: 'status',
    descricao: 'descricao'
  };

  export type PainelOrderByRelevanceFieldEnum = (typeof PainelOrderByRelevanceFieldEnum)[keyof typeof PainelOrderByRelevanceFieldEnum]


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
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


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
    _relevance?: UsuarioOrderByRelevanceInput
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
    _relevance?: NivelOrderByRelevanceInput
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
    _relevance?: LoginOrderByRelevanceInput
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
    _relevance?: MenuOrderByRelevanceInput
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
    _relevance?: MenuitemOrderByRelevanceInput
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
    fixa?: BoolFilter<"Coluna"> | boolean
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
    fixa?: SortOrder
    Usuariocoluna?: UsuariocolunaOrderByRelationAggregateInput
    _relevance?: ColunaOrderByRelevanceInput
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
    fixa?: BoolFilter<"Coluna"> | boolean
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
    fixa?: SortOrder
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
    fixa?: BoolWithAggregatesFilter<"Coluna"> | boolean
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
    _relevance?: UsuariocolunaOrderByRelevanceInput
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
    _relevance?: UnidadeOrderByRelevanceInput
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

  export type CustoiqlWhereInput = {
    AND?: CustoiqlWhereInput | CustoiqlWhereInput[]
    OR?: CustoiqlWhereInput[]
    NOT?: CustoiqlWhereInput | CustoiqlWhereInput[]
    id?: IntFilter<"Custoiql"> | number
    numero_op?: StringFilter<"Custoiql"> | string
    produzido?: StringNullableFilter<"Custoiql"> | string | null
    data_finalizacao?: DateTimeNullableFilter<"Custoiql"> | Date | string | null
    codigo_produto?: StringNullableFilter<"Custoiql"> | string | null
    desc_tecnica?: StringNullableFilter<"Custoiql"> | string | null
    quantidade_final?: DecimalNullableFilter<"Custoiql"> | Decimal | DecimalJsLike | number | string | null
    descricao?: StringNullableFilter<"Custoiql"> | string | null
    valor_unitario?: DecimalNullableFilter<"Custoiql"> | Decimal | DecimalJsLike | number | string | null
    custo?: DecimalNullableFilter<"Custoiql"> | Decimal | DecimalJsLike | number | string | null
    quantidade_produzida?: DecimalNullableFilter<"Custoiql"> | Decimal | DecimalJsLike | number | string | null
  }

  export type CustoiqlOrderByWithRelationInput = {
    id?: SortOrder
    numero_op?: SortOrder
    produzido?: SortOrderInput | SortOrder
    data_finalizacao?: SortOrderInput | SortOrder
    codigo_produto?: SortOrderInput | SortOrder
    desc_tecnica?: SortOrderInput | SortOrder
    quantidade_final?: SortOrderInput | SortOrder
    descricao?: SortOrderInput | SortOrder
    valor_unitario?: SortOrderInput | SortOrder
    custo?: SortOrderInput | SortOrder
    quantidade_produzida?: SortOrderInput | SortOrder
    _relevance?: CustoiqlOrderByRelevanceInput
  }

  export type CustoiqlWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CustoiqlWhereInput | CustoiqlWhereInput[]
    OR?: CustoiqlWhereInput[]
    NOT?: CustoiqlWhereInput | CustoiqlWhereInput[]
    numero_op?: StringFilter<"Custoiql"> | string
    produzido?: StringNullableFilter<"Custoiql"> | string | null
    data_finalizacao?: DateTimeNullableFilter<"Custoiql"> | Date | string | null
    codigo_produto?: StringNullableFilter<"Custoiql"> | string | null
    desc_tecnica?: StringNullableFilter<"Custoiql"> | string | null
    quantidade_final?: DecimalNullableFilter<"Custoiql"> | Decimal | DecimalJsLike | number | string | null
    descricao?: StringNullableFilter<"Custoiql"> | string | null
    valor_unitario?: DecimalNullableFilter<"Custoiql"> | Decimal | DecimalJsLike | number | string | null
    custo?: DecimalNullableFilter<"Custoiql"> | Decimal | DecimalJsLike | number | string | null
    quantidade_produzida?: DecimalNullableFilter<"Custoiql"> | Decimal | DecimalJsLike | number | string | null
  }, "id">

  export type CustoiqlOrderByWithAggregationInput = {
    id?: SortOrder
    numero_op?: SortOrder
    produzido?: SortOrderInput | SortOrder
    data_finalizacao?: SortOrderInput | SortOrder
    codigo_produto?: SortOrderInput | SortOrder
    desc_tecnica?: SortOrderInput | SortOrder
    quantidade_final?: SortOrderInput | SortOrder
    descricao?: SortOrderInput | SortOrder
    valor_unitario?: SortOrderInput | SortOrder
    custo?: SortOrderInput | SortOrder
    quantidade_produzida?: SortOrderInput | SortOrder
    _count?: CustoiqlCountOrderByAggregateInput
    _avg?: CustoiqlAvgOrderByAggregateInput
    _max?: CustoiqlMaxOrderByAggregateInput
    _min?: CustoiqlMinOrderByAggregateInput
    _sum?: CustoiqlSumOrderByAggregateInput
  }

  export type CustoiqlScalarWhereWithAggregatesInput = {
    AND?: CustoiqlScalarWhereWithAggregatesInput | CustoiqlScalarWhereWithAggregatesInput[]
    OR?: CustoiqlScalarWhereWithAggregatesInput[]
    NOT?: CustoiqlScalarWhereWithAggregatesInput | CustoiqlScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Custoiql"> | number
    numero_op?: StringWithAggregatesFilter<"Custoiql"> | string
    produzido?: StringNullableWithAggregatesFilter<"Custoiql"> | string | null
    data_finalizacao?: DateTimeNullableWithAggregatesFilter<"Custoiql"> | Date | string | null
    codigo_produto?: StringNullableWithAggregatesFilter<"Custoiql"> | string | null
    desc_tecnica?: StringNullableWithAggregatesFilter<"Custoiql"> | string | null
    quantidade_final?: DecimalNullableWithAggregatesFilter<"Custoiql"> | Decimal | DecimalJsLike | number | string | null
    descricao?: StringNullableWithAggregatesFilter<"Custoiql"> | string | null
    valor_unitario?: DecimalNullableWithAggregatesFilter<"Custoiql"> | Decimal | DecimalJsLike | number | string | null
    custo?: DecimalNullableWithAggregatesFilter<"Custoiql"> | Decimal | DecimalJsLike | number | string | null
    quantidade_produzida?: DecimalNullableWithAggregatesFilter<"Custoiql"> | Decimal | DecimalJsLike | number | string | null
  }

  export type InventarioWhereInput = {
    AND?: InventarioWhereInput | InventarioWhereInput[]
    OR?: InventarioWhereInput[]
    NOT?: InventarioWhereInput | InventarioWhereInput[]
    id_inv?: IntFilter<"Inventario"> | number
    produto?: StringFilter<"Inventario"> | string
    coletor?: StringNullableFilter<"Inventario"> | string | null
    quantidade?: DecimalNullableFilter<"Inventario"> | Decimal | DecimalJsLike | number | string | null
    cod_produto?: StringNullableFilter<"Inventario"> | string | null
    Codigo_tipo_item?: StringNullableFilter<"Inventario"> | string | null
    lote?: StringNullableFilter<"Inventario"> | string | null
    lote_original?: StringNullableFilter<"Inventario"> | string | null
    Lote_interno?: StringNullableFilter<"Inventario"> | string | null
    Data_validade_prod?: DateTimeNullableFilter<"Inventario"> | Date | string | null
    Desc_tecnica?: StringNullableFilter<"Inventario"> | string | null
    Data?: DateTimeNullableFilter<"Inventario"> | Date | string | null
    Unidade_estoque?: StringNullableFilter<"Inventario"> | string | null
    Unidade_compra?: StringNullableFilter<"Inventario"> | string | null
    codigo_embalagem?: StringNullableFilter<"Inventario"> | string | null
    estoque?: DecimalNullableFilter<"Inventario"> | Decimal | DecimalJsLike | number | string | null
  }

  export type InventarioOrderByWithRelationInput = {
    id_inv?: SortOrder
    produto?: SortOrder
    coletor?: SortOrderInput | SortOrder
    quantidade?: SortOrderInput | SortOrder
    cod_produto?: SortOrderInput | SortOrder
    Codigo_tipo_item?: SortOrderInput | SortOrder
    lote?: SortOrderInput | SortOrder
    lote_original?: SortOrderInput | SortOrder
    Lote_interno?: SortOrderInput | SortOrder
    Data_validade_prod?: SortOrderInput | SortOrder
    Desc_tecnica?: SortOrderInput | SortOrder
    Data?: SortOrderInput | SortOrder
    Unidade_estoque?: SortOrderInput | SortOrder
    Unidade_compra?: SortOrderInput | SortOrder
    codigo_embalagem?: SortOrderInput | SortOrder
    estoque?: SortOrderInput | SortOrder
    _relevance?: InventarioOrderByRelevanceInput
  }

  export type InventarioWhereUniqueInput = Prisma.AtLeast<{
    id_inv?: number
    AND?: InventarioWhereInput | InventarioWhereInput[]
    OR?: InventarioWhereInput[]
    NOT?: InventarioWhereInput | InventarioWhereInput[]
    produto?: StringFilter<"Inventario"> | string
    coletor?: StringNullableFilter<"Inventario"> | string | null
    quantidade?: DecimalNullableFilter<"Inventario"> | Decimal | DecimalJsLike | number | string | null
    cod_produto?: StringNullableFilter<"Inventario"> | string | null
    Codigo_tipo_item?: StringNullableFilter<"Inventario"> | string | null
    lote?: StringNullableFilter<"Inventario"> | string | null
    lote_original?: StringNullableFilter<"Inventario"> | string | null
    Lote_interno?: StringNullableFilter<"Inventario"> | string | null
    Data_validade_prod?: DateTimeNullableFilter<"Inventario"> | Date | string | null
    Desc_tecnica?: StringNullableFilter<"Inventario"> | string | null
    Data?: DateTimeNullableFilter<"Inventario"> | Date | string | null
    Unidade_estoque?: StringNullableFilter<"Inventario"> | string | null
    Unidade_compra?: StringNullableFilter<"Inventario"> | string | null
    codigo_embalagem?: StringNullableFilter<"Inventario"> | string | null
    estoque?: DecimalNullableFilter<"Inventario"> | Decimal | DecimalJsLike | number | string | null
  }, "id_inv">

  export type InventarioOrderByWithAggregationInput = {
    id_inv?: SortOrder
    produto?: SortOrder
    coletor?: SortOrderInput | SortOrder
    quantidade?: SortOrderInput | SortOrder
    cod_produto?: SortOrderInput | SortOrder
    Codigo_tipo_item?: SortOrderInput | SortOrder
    lote?: SortOrderInput | SortOrder
    lote_original?: SortOrderInput | SortOrder
    Lote_interno?: SortOrderInput | SortOrder
    Data_validade_prod?: SortOrderInput | SortOrder
    Desc_tecnica?: SortOrderInput | SortOrder
    Data?: SortOrderInput | SortOrder
    Unidade_estoque?: SortOrderInput | SortOrder
    Unidade_compra?: SortOrderInput | SortOrder
    codigo_embalagem?: SortOrderInput | SortOrder
    estoque?: SortOrderInput | SortOrder
    _count?: InventarioCountOrderByAggregateInput
    _avg?: InventarioAvgOrderByAggregateInput
    _max?: InventarioMaxOrderByAggregateInput
    _min?: InventarioMinOrderByAggregateInput
    _sum?: InventarioSumOrderByAggregateInput
  }

  export type InventarioScalarWhereWithAggregatesInput = {
    AND?: InventarioScalarWhereWithAggregatesInput | InventarioScalarWhereWithAggregatesInput[]
    OR?: InventarioScalarWhereWithAggregatesInput[]
    NOT?: InventarioScalarWhereWithAggregatesInput | InventarioScalarWhereWithAggregatesInput[]
    id_inv?: IntWithAggregatesFilter<"Inventario"> | number
    produto?: StringWithAggregatesFilter<"Inventario"> | string
    coletor?: StringNullableWithAggregatesFilter<"Inventario"> | string | null
    quantidade?: DecimalNullableWithAggregatesFilter<"Inventario"> | Decimal | DecimalJsLike | number | string | null
    cod_produto?: StringNullableWithAggregatesFilter<"Inventario"> | string | null
    Codigo_tipo_item?: StringNullableWithAggregatesFilter<"Inventario"> | string | null
    lote?: StringNullableWithAggregatesFilter<"Inventario"> | string | null
    lote_original?: StringNullableWithAggregatesFilter<"Inventario"> | string | null
    Lote_interno?: StringNullableWithAggregatesFilter<"Inventario"> | string | null
    Data_validade_prod?: DateTimeNullableWithAggregatesFilter<"Inventario"> | Date | string | null
    Desc_tecnica?: StringNullableWithAggregatesFilter<"Inventario"> | string | null
    Data?: DateTimeNullableWithAggregatesFilter<"Inventario"> | Date | string | null
    Unidade_estoque?: StringNullableWithAggregatesFilter<"Inventario"> | string | null
    Unidade_compra?: StringNullableWithAggregatesFilter<"Inventario"> | string | null
    codigo_embalagem?: StringNullableWithAggregatesFilter<"Inventario"> | string | null
    estoque?: DecimalNullableWithAggregatesFilter<"Inventario"> | Decimal | DecimalJsLike | number | string | null
  }

  export type SendmailWhereInput = {
    AND?: SendmailWhereInput | SendmailWhereInput[]
    OR?: SendmailWhereInput[]
    NOT?: SendmailWhereInput | SendmailWhereInput[]
    idsendmail?: IntFilter<"Sendmail"> | number
    destinatario?: StringFilter<"Sendmail"> | string
    html?: BytesFilter<"Sendmail"> | Buffer
    subject?: StringFilter<"Sendmail"> | string
    idusercreateAt?: IntFilter<"Sendmail"> | number
    createdAt?: DateTimeFilter<"Sendmail"> | Date | string
    iduserupdatedAt?: IntNullableFilter<"Sendmail"> | number | null
    updatedAt?: DateTimeNullableFilter<"Sendmail"> | Date | string | null
    status?: StringFilter<"Sendmail"> | string
    idsolicitante?: IntNullableFilter<"Sendmail"> | number | null
    idusuarioaprovacao?: IntNullableFilter<"Sendmail"> | number | null
    idusuariocotacao?: IntNullableFilter<"Sendmail"> | number | null
    idusuarioaprovacaodir?: IntNullableFilter<"Sendmail"> | number | null
    idusuariocompra?: IntNullableFilter<"Sendmail"> | number | null
    idusuarioentrega?: IntNullableFilter<"Sendmail"> | number | null
    idcompra?: IntNullableFilter<"Sendmail"> | number | null
    attachments?: BytesNullableFilter<"Sendmail"> | Buffer | null
  }

  export type SendmailOrderByWithRelationInput = {
    idsendmail?: SortOrder
    destinatario?: SortOrder
    html?: SortOrder
    subject?: SortOrder
    idusercreateAt?: SortOrder
    createdAt?: SortOrder
    iduserupdatedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    status?: SortOrder
    idsolicitante?: SortOrderInput | SortOrder
    idusuarioaprovacao?: SortOrderInput | SortOrder
    idusuariocotacao?: SortOrderInput | SortOrder
    idusuarioaprovacaodir?: SortOrderInput | SortOrder
    idusuariocompra?: SortOrderInput | SortOrder
    idusuarioentrega?: SortOrderInput | SortOrder
    idcompra?: SortOrderInput | SortOrder
    attachments?: SortOrderInput | SortOrder
    _relevance?: SendmailOrderByRelevanceInput
  }

  export type SendmailWhereUniqueInput = Prisma.AtLeast<{
    idsendmail?: number
    AND?: SendmailWhereInput | SendmailWhereInput[]
    OR?: SendmailWhereInput[]
    NOT?: SendmailWhereInput | SendmailWhereInput[]
    destinatario?: StringFilter<"Sendmail"> | string
    html?: BytesFilter<"Sendmail"> | Buffer
    subject?: StringFilter<"Sendmail"> | string
    idusercreateAt?: IntFilter<"Sendmail"> | number
    createdAt?: DateTimeFilter<"Sendmail"> | Date | string
    iduserupdatedAt?: IntNullableFilter<"Sendmail"> | number | null
    updatedAt?: DateTimeNullableFilter<"Sendmail"> | Date | string | null
    status?: StringFilter<"Sendmail"> | string
    idsolicitante?: IntNullableFilter<"Sendmail"> | number | null
    idusuarioaprovacao?: IntNullableFilter<"Sendmail"> | number | null
    idusuariocotacao?: IntNullableFilter<"Sendmail"> | number | null
    idusuarioaprovacaodir?: IntNullableFilter<"Sendmail"> | number | null
    idusuariocompra?: IntNullableFilter<"Sendmail"> | number | null
    idusuarioentrega?: IntNullableFilter<"Sendmail"> | number | null
    idcompra?: IntNullableFilter<"Sendmail"> | number | null
    attachments?: BytesNullableFilter<"Sendmail"> | Buffer | null
  }, "idsendmail">

  export type SendmailOrderByWithAggregationInput = {
    idsendmail?: SortOrder
    destinatario?: SortOrder
    html?: SortOrder
    subject?: SortOrder
    idusercreateAt?: SortOrder
    createdAt?: SortOrder
    iduserupdatedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    status?: SortOrder
    idsolicitante?: SortOrderInput | SortOrder
    idusuarioaprovacao?: SortOrderInput | SortOrder
    idusuariocotacao?: SortOrderInput | SortOrder
    idusuarioaprovacaodir?: SortOrderInput | SortOrder
    idusuariocompra?: SortOrderInput | SortOrder
    idusuarioentrega?: SortOrderInput | SortOrder
    idcompra?: SortOrderInput | SortOrder
    attachments?: SortOrderInput | SortOrder
    _count?: SendmailCountOrderByAggregateInput
    _avg?: SendmailAvgOrderByAggregateInput
    _max?: SendmailMaxOrderByAggregateInput
    _min?: SendmailMinOrderByAggregateInput
    _sum?: SendmailSumOrderByAggregateInput
  }

  export type SendmailScalarWhereWithAggregatesInput = {
    AND?: SendmailScalarWhereWithAggregatesInput | SendmailScalarWhereWithAggregatesInput[]
    OR?: SendmailScalarWhereWithAggregatesInput[]
    NOT?: SendmailScalarWhereWithAggregatesInput | SendmailScalarWhereWithAggregatesInput[]
    idsendmail?: IntWithAggregatesFilter<"Sendmail"> | number
    destinatario?: StringWithAggregatesFilter<"Sendmail"> | string
    html?: BytesWithAggregatesFilter<"Sendmail"> | Buffer
    subject?: StringWithAggregatesFilter<"Sendmail"> | string
    idusercreateAt?: IntWithAggregatesFilter<"Sendmail"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Sendmail"> | Date | string
    iduserupdatedAt?: IntNullableWithAggregatesFilter<"Sendmail"> | number | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Sendmail"> | Date | string | null
    status?: StringWithAggregatesFilter<"Sendmail"> | string
    idsolicitante?: IntNullableWithAggregatesFilter<"Sendmail"> | number | null
    idusuarioaprovacao?: IntNullableWithAggregatesFilter<"Sendmail"> | number | null
    idusuariocotacao?: IntNullableWithAggregatesFilter<"Sendmail"> | number | null
    idusuarioaprovacaodir?: IntNullableWithAggregatesFilter<"Sendmail"> | number | null
    idusuariocompra?: IntNullableWithAggregatesFilter<"Sendmail"> | number | null
    idusuarioentrega?: IntNullableWithAggregatesFilter<"Sendmail"> | number | null
    idcompra?: IntNullableWithAggregatesFilter<"Sendmail"> | number | null
    attachments?: BytesNullableWithAggregatesFilter<"Sendmail"> | Buffer | null
  }

  export type ResumocomprasWhereInput = {
    AND?: ResumocomprasWhereInput | ResumocomprasWhereInput[]
    OR?: ResumocomprasWhereInput[]
    NOT?: ResumocomprasWhereInput | ResumocomprasWhereInput[]
    id?: IntFilter<"Resumocompras"> | number
    Apelido_empresa?: StringNullableFilter<"Resumocompras"> | string | null
    Apelido_estabelecimento?: StringNullableFilter<"Resumocompras"> | string | null
    Codigo_produto?: StringNullableFilter<"Resumocompras"> | string | null
    Unidade_estoque?: StringNullableFilter<"Resumocompras"> | string | null
    Unidade_compra?: StringNullableFilter<"Resumocompras"> | string | null
    Desc_tecnica?: StringNullableFilter<"Resumocompras"> | string | null
    Estoque_minimo?: DecimalNullableFilter<"Resumocompras"> | Decimal | DecimalJsLike | number | string | null
    Lote_compra?: DecimalNullableFilter<"Resumocompras"> | Decimal | DecimalJsLike | number | string | null
    mes1?: DecimalNullableFilter<"Resumocompras"> | Decimal | DecimalJsLike | number | string | null
    mes2?: DecimalNullableFilter<"Resumocompras"> | Decimal | DecimalJsLike | number | string | null
    mes3?: DecimalNullableFilter<"Resumocompras"> | Decimal | DecimalJsLike | number | string | null
    mes4?: DecimalNullableFilter<"Resumocompras"> | Decimal | DecimalJsLike | number | string | null
    mes5?: DecimalNullableFilter<"Resumocompras"> | Decimal | DecimalJsLike | number | string | null
    mes6?: DecimalNullableFilter<"Resumocompras"> | Decimal | DecimalJsLike | number | string | null
    mes7?: DecimalNullableFilter<"Resumocompras"> | Decimal | DecimalJsLike | number | string | null
    mes8?: DecimalNullableFilter<"Resumocompras"> | Decimal | DecimalJsLike | number | string | null
    mes9?: DecimalNullableFilter<"Resumocompras"> | Decimal | DecimalJsLike | number | string | null
    mes10?: DecimalNullableFilter<"Resumocompras"> | Decimal | DecimalJsLike | number | string | null
    mes11?: DecimalNullableFilter<"Resumocompras"> | Decimal | DecimalJsLike | number | string | null
    mes12?: DecimalNullableFilter<"Resumocompras"> | Decimal | DecimalJsLike | number | string | null
    compras?: DecimalNullableFilter<"Resumocompras"> | Decimal | DecimalJsLike | number | string | null
    opcadastradas?: DecimalNullableFilter<"Resumocompras"> | Decimal | DecimalJsLike | number | string | null
    saldoestoque?: DecimalNullableFilter<"Resumocompras"> | Decimal | DecimalJsLike | number | string | null
    coleta?: DecimalNullableFilter<"Resumocompras"> | Decimal | DecimalJsLike | number | string | null
  }

  export type ResumocomprasOrderByWithRelationInput = {
    id?: SortOrder
    Apelido_empresa?: SortOrderInput | SortOrder
    Apelido_estabelecimento?: SortOrderInput | SortOrder
    Codigo_produto?: SortOrderInput | SortOrder
    Unidade_estoque?: SortOrderInput | SortOrder
    Unidade_compra?: SortOrderInput | SortOrder
    Desc_tecnica?: SortOrderInput | SortOrder
    Estoque_minimo?: SortOrderInput | SortOrder
    Lote_compra?: SortOrderInput | SortOrder
    mes1?: SortOrderInput | SortOrder
    mes2?: SortOrderInput | SortOrder
    mes3?: SortOrderInput | SortOrder
    mes4?: SortOrderInput | SortOrder
    mes5?: SortOrderInput | SortOrder
    mes6?: SortOrderInput | SortOrder
    mes7?: SortOrderInput | SortOrder
    mes8?: SortOrderInput | SortOrder
    mes9?: SortOrderInput | SortOrder
    mes10?: SortOrderInput | SortOrder
    mes11?: SortOrderInput | SortOrder
    mes12?: SortOrderInput | SortOrder
    compras?: SortOrderInput | SortOrder
    opcadastradas?: SortOrderInput | SortOrder
    saldoestoque?: SortOrderInput | SortOrder
    coleta?: SortOrderInput | SortOrder
    _relevance?: ResumocomprasOrderByRelevanceInput
  }

  export type ResumocomprasWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ResumocomprasWhereInput | ResumocomprasWhereInput[]
    OR?: ResumocomprasWhereInput[]
    NOT?: ResumocomprasWhereInput | ResumocomprasWhereInput[]
    Apelido_empresa?: StringNullableFilter<"Resumocompras"> | string | null
    Apelido_estabelecimento?: StringNullableFilter<"Resumocompras"> | string | null
    Codigo_produto?: StringNullableFilter<"Resumocompras"> | string | null
    Unidade_estoque?: StringNullableFilter<"Resumocompras"> | string | null
    Unidade_compra?: StringNullableFilter<"Resumocompras"> | string | null
    Desc_tecnica?: StringNullableFilter<"Resumocompras"> | string | null
    Estoque_minimo?: DecimalNullableFilter<"Resumocompras"> | Decimal | DecimalJsLike | number | string | null
    Lote_compra?: DecimalNullableFilter<"Resumocompras"> | Decimal | DecimalJsLike | number | string | null
    mes1?: DecimalNullableFilter<"Resumocompras"> | Decimal | DecimalJsLike | number | string | null
    mes2?: DecimalNullableFilter<"Resumocompras"> | Decimal | DecimalJsLike | number | string | null
    mes3?: DecimalNullableFilter<"Resumocompras"> | Decimal | DecimalJsLike | number | string | null
    mes4?: DecimalNullableFilter<"Resumocompras"> | Decimal | DecimalJsLike | number | string | null
    mes5?: DecimalNullableFilter<"Resumocompras"> | Decimal | DecimalJsLike | number | string | null
    mes6?: DecimalNullableFilter<"Resumocompras"> | Decimal | DecimalJsLike | number | string | null
    mes7?: DecimalNullableFilter<"Resumocompras"> | Decimal | DecimalJsLike | number | string | null
    mes8?: DecimalNullableFilter<"Resumocompras"> | Decimal | DecimalJsLike | number | string | null
    mes9?: DecimalNullableFilter<"Resumocompras"> | Decimal | DecimalJsLike | number | string | null
    mes10?: DecimalNullableFilter<"Resumocompras"> | Decimal | DecimalJsLike | number | string | null
    mes11?: DecimalNullableFilter<"Resumocompras"> | Decimal | DecimalJsLike | number | string | null
    mes12?: DecimalNullableFilter<"Resumocompras"> | Decimal | DecimalJsLike | number | string | null
    compras?: DecimalNullableFilter<"Resumocompras"> | Decimal | DecimalJsLike | number | string | null
    opcadastradas?: DecimalNullableFilter<"Resumocompras"> | Decimal | DecimalJsLike | number | string | null
    saldoestoque?: DecimalNullableFilter<"Resumocompras"> | Decimal | DecimalJsLike | number | string | null
    coleta?: DecimalNullableFilter<"Resumocompras"> | Decimal | DecimalJsLike | number | string | null
  }, "id">

  export type ResumocomprasOrderByWithAggregationInput = {
    id?: SortOrder
    Apelido_empresa?: SortOrderInput | SortOrder
    Apelido_estabelecimento?: SortOrderInput | SortOrder
    Codigo_produto?: SortOrderInput | SortOrder
    Unidade_estoque?: SortOrderInput | SortOrder
    Unidade_compra?: SortOrderInput | SortOrder
    Desc_tecnica?: SortOrderInput | SortOrder
    Estoque_minimo?: SortOrderInput | SortOrder
    Lote_compra?: SortOrderInput | SortOrder
    mes1?: SortOrderInput | SortOrder
    mes2?: SortOrderInput | SortOrder
    mes3?: SortOrderInput | SortOrder
    mes4?: SortOrderInput | SortOrder
    mes5?: SortOrderInput | SortOrder
    mes6?: SortOrderInput | SortOrder
    mes7?: SortOrderInput | SortOrder
    mes8?: SortOrderInput | SortOrder
    mes9?: SortOrderInput | SortOrder
    mes10?: SortOrderInput | SortOrder
    mes11?: SortOrderInput | SortOrder
    mes12?: SortOrderInput | SortOrder
    compras?: SortOrderInput | SortOrder
    opcadastradas?: SortOrderInput | SortOrder
    saldoestoque?: SortOrderInput | SortOrder
    coleta?: SortOrderInput | SortOrder
    _count?: ResumocomprasCountOrderByAggregateInput
    _avg?: ResumocomprasAvgOrderByAggregateInput
    _max?: ResumocomprasMaxOrderByAggregateInput
    _min?: ResumocomprasMinOrderByAggregateInput
    _sum?: ResumocomprasSumOrderByAggregateInput
  }

  export type ResumocomprasScalarWhereWithAggregatesInput = {
    AND?: ResumocomprasScalarWhereWithAggregatesInput | ResumocomprasScalarWhereWithAggregatesInput[]
    OR?: ResumocomprasScalarWhereWithAggregatesInput[]
    NOT?: ResumocomprasScalarWhereWithAggregatesInput | ResumocomprasScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Resumocompras"> | number
    Apelido_empresa?: StringNullableWithAggregatesFilter<"Resumocompras"> | string | null
    Apelido_estabelecimento?: StringNullableWithAggregatesFilter<"Resumocompras"> | string | null
    Codigo_produto?: StringNullableWithAggregatesFilter<"Resumocompras"> | string | null
    Unidade_estoque?: StringNullableWithAggregatesFilter<"Resumocompras"> | string | null
    Unidade_compra?: StringNullableWithAggregatesFilter<"Resumocompras"> | string | null
    Desc_tecnica?: StringNullableWithAggregatesFilter<"Resumocompras"> | string | null
    Estoque_minimo?: DecimalNullableWithAggregatesFilter<"Resumocompras"> | Decimal | DecimalJsLike | number | string | null
    Lote_compra?: DecimalNullableWithAggregatesFilter<"Resumocompras"> | Decimal | DecimalJsLike | number | string | null
    mes1?: DecimalNullableWithAggregatesFilter<"Resumocompras"> | Decimal | DecimalJsLike | number | string | null
    mes2?: DecimalNullableWithAggregatesFilter<"Resumocompras"> | Decimal | DecimalJsLike | number | string | null
    mes3?: DecimalNullableWithAggregatesFilter<"Resumocompras"> | Decimal | DecimalJsLike | number | string | null
    mes4?: DecimalNullableWithAggregatesFilter<"Resumocompras"> | Decimal | DecimalJsLike | number | string | null
    mes5?: DecimalNullableWithAggregatesFilter<"Resumocompras"> | Decimal | DecimalJsLike | number | string | null
    mes6?: DecimalNullableWithAggregatesFilter<"Resumocompras"> | Decimal | DecimalJsLike | number | string | null
    mes7?: DecimalNullableWithAggregatesFilter<"Resumocompras"> | Decimal | DecimalJsLike | number | string | null
    mes8?: DecimalNullableWithAggregatesFilter<"Resumocompras"> | Decimal | DecimalJsLike | number | string | null
    mes9?: DecimalNullableWithAggregatesFilter<"Resumocompras"> | Decimal | DecimalJsLike | number | string | null
    mes10?: DecimalNullableWithAggregatesFilter<"Resumocompras"> | Decimal | DecimalJsLike | number | string | null
    mes11?: DecimalNullableWithAggregatesFilter<"Resumocompras"> | Decimal | DecimalJsLike | number | string | null
    mes12?: DecimalNullableWithAggregatesFilter<"Resumocompras"> | Decimal | DecimalJsLike | number | string | null
    compras?: DecimalNullableWithAggregatesFilter<"Resumocompras"> | Decimal | DecimalJsLike | number | string | null
    opcadastradas?: DecimalNullableWithAggregatesFilter<"Resumocompras"> | Decimal | DecimalJsLike | number | string | null
    saldoestoque?: DecimalNullableWithAggregatesFilter<"Resumocompras"> | Decimal | DecimalJsLike | number | string | null
    coleta?: DecimalNullableWithAggregatesFilter<"Resumocompras"> | Decimal | DecimalJsLike | number | string | null
  }

  export type ComprasWhereInput = {
    AND?: ComprasWhereInput | ComprasWhereInput[]
    OR?: ComprasWhereInput[]
    NOT?: ComprasWhereInput | ComprasWhereInput[]
    idcompras?: IntFilter<"Compras"> | number
    chavearquivo?: StringNullableFilter<"Compras"> | string | null
    porcentagem?: IntNullableFilter<"Compras"> | number | null
    codigo_produto?: StringNullableFilter<"Compras"> | string | null
    desc_tecnica?: StringNullableFilter<"Compras"> | string | null
    saldo?: DecimalNullableFilter<"Compras"> | Decimal | DecimalJsLike | number | string | null
    consumo12?: DecimalNullableFilter<"Compras"> | Decimal | DecimalJsLike | number | string | null
    mediaconsumo?: DecimalNullableFilter<"Compras"> | Decimal | DecimalJsLike | number | string | null
    opcompra?: DecimalNullableFilter<"Compras"> | Decimal | DecimalJsLike | number | string | null
    opcompraEntregue?: DecimalNullableFilter<"Compras"> | Decimal | DecimalJsLike | number | string | null
    opfinalizada?: DecimalNullableFilter<"Compras"> | Decimal | DecimalJsLike | number | string | null
    opemprocesso?: DecimalNullableFilter<"Compras"> | Decimal | DecimalJsLike | number | string | null
    opcadastrada?: DecimalNullableFilter<"Compras"> | Decimal | DecimalJsLike | number | string | null
    opcoleta?: DecimalNullableFilter<"Compras"> | Decimal | DecimalJsLike | number | string | null
    totcompras?: DecimalNullableFilter<"Compras"> | Decimal | DecimalJsLike | number | string | null
    totconsumo?: DecimalNullableFilter<"Compras"> | Decimal | DecimalJsLike | number | string | null
    saldoatual?: DecimalNullableFilter<"Compras"> | Decimal | DecimalJsLike | number | string | null
    valorultimacompra?: DecimalNullableFilter<"Compras"> | Decimal | DecimalJsLike | number | string | null
    dataultimacompra?: DateTimeNullableFilter<"Compras"> | Date | string | null
    saldometa?: DecimalNullableFilter<"Compras"> | Decimal | DecimalJsLike | number | string | null
    compra?: DecimalNullableFilter<"Compras"> | Decimal | DecimalJsLike | number | string | null
    datacoleta?: DateTimeNullableFilter<"Compras"> | Date | string | null
    opcadastrada15?: DecimalNullableFilter<"Compras"> | Decimal | DecimalJsLike | number | string | null
    opcoleta15?: DecimalNullableFilter<"Compras"> | Decimal | DecimalJsLike | number | string | null
    totcompras15?: DecimalNullableFilter<"Compras"> | Decimal | DecimalJsLike | number | string | null
    totconsumo15?: DecimalNullableFilter<"Compras"> | Decimal | DecimalJsLike | number | string | null
    saldoatual15?: DecimalNullableFilter<"Compras"> | Decimal | DecimalJsLike | number | string | null
    opcadastrada30?: DecimalNullableFilter<"Compras"> | Decimal | DecimalJsLike | number | string | null
    opcoleta30?: DecimalNullableFilter<"Compras"> | Decimal | DecimalJsLike | number | string | null
    totcompras30?: DecimalNullableFilter<"Compras"> | Decimal | DecimalJsLike | number | string | null
    totconsumo30?: DecimalNullableFilter<"Compras"> | Decimal | DecimalJsLike | number | string | null
    saldoatual30?: DecimalNullableFilter<"Compras"> | Decimal | DecimalJsLike | number | string | null
    opcompra15?: DecimalNullableFilter<"Compras"> | Decimal | DecimalJsLike | number | string | null
    opcompra30?: DecimalNullableFilter<"Compras"> | Decimal | DecimalJsLike | number | string | null
  }

  export type ComprasOrderByWithRelationInput = {
    idcompras?: SortOrder
    chavearquivo?: SortOrderInput | SortOrder
    porcentagem?: SortOrderInput | SortOrder
    codigo_produto?: SortOrderInput | SortOrder
    desc_tecnica?: SortOrderInput | SortOrder
    saldo?: SortOrderInput | SortOrder
    consumo12?: SortOrderInput | SortOrder
    mediaconsumo?: SortOrderInput | SortOrder
    opcompra?: SortOrderInput | SortOrder
    opcompraEntregue?: SortOrderInput | SortOrder
    opfinalizada?: SortOrderInput | SortOrder
    opemprocesso?: SortOrderInput | SortOrder
    opcadastrada?: SortOrderInput | SortOrder
    opcoleta?: SortOrderInput | SortOrder
    totcompras?: SortOrderInput | SortOrder
    totconsumo?: SortOrderInput | SortOrder
    saldoatual?: SortOrderInput | SortOrder
    valorultimacompra?: SortOrderInput | SortOrder
    dataultimacompra?: SortOrderInput | SortOrder
    saldometa?: SortOrderInput | SortOrder
    compra?: SortOrderInput | SortOrder
    datacoleta?: SortOrderInput | SortOrder
    opcadastrada15?: SortOrderInput | SortOrder
    opcoleta15?: SortOrderInput | SortOrder
    totcompras15?: SortOrderInput | SortOrder
    totconsumo15?: SortOrderInput | SortOrder
    saldoatual15?: SortOrderInput | SortOrder
    opcadastrada30?: SortOrderInput | SortOrder
    opcoleta30?: SortOrderInput | SortOrder
    totcompras30?: SortOrderInput | SortOrder
    totconsumo30?: SortOrderInput | SortOrder
    saldoatual30?: SortOrderInput | SortOrder
    opcompra15?: SortOrderInput | SortOrder
    opcompra30?: SortOrderInput | SortOrder
    _relevance?: ComprasOrderByRelevanceInput
  }

  export type ComprasWhereUniqueInput = Prisma.AtLeast<{
    idcompras?: number
    AND?: ComprasWhereInput | ComprasWhereInput[]
    OR?: ComprasWhereInput[]
    NOT?: ComprasWhereInput | ComprasWhereInput[]
    chavearquivo?: StringNullableFilter<"Compras"> | string | null
    porcentagem?: IntNullableFilter<"Compras"> | number | null
    codigo_produto?: StringNullableFilter<"Compras"> | string | null
    desc_tecnica?: StringNullableFilter<"Compras"> | string | null
    saldo?: DecimalNullableFilter<"Compras"> | Decimal | DecimalJsLike | number | string | null
    consumo12?: DecimalNullableFilter<"Compras"> | Decimal | DecimalJsLike | number | string | null
    mediaconsumo?: DecimalNullableFilter<"Compras"> | Decimal | DecimalJsLike | number | string | null
    opcompra?: DecimalNullableFilter<"Compras"> | Decimal | DecimalJsLike | number | string | null
    opcompraEntregue?: DecimalNullableFilter<"Compras"> | Decimal | DecimalJsLike | number | string | null
    opfinalizada?: DecimalNullableFilter<"Compras"> | Decimal | DecimalJsLike | number | string | null
    opemprocesso?: DecimalNullableFilter<"Compras"> | Decimal | DecimalJsLike | number | string | null
    opcadastrada?: DecimalNullableFilter<"Compras"> | Decimal | DecimalJsLike | number | string | null
    opcoleta?: DecimalNullableFilter<"Compras"> | Decimal | DecimalJsLike | number | string | null
    totcompras?: DecimalNullableFilter<"Compras"> | Decimal | DecimalJsLike | number | string | null
    totconsumo?: DecimalNullableFilter<"Compras"> | Decimal | DecimalJsLike | number | string | null
    saldoatual?: DecimalNullableFilter<"Compras"> | Decimal | DecimalJsLike | number | string | null
    valorultimacompra?: DecimalNullableFilter<"Compras"> | Decimal | DecimalJsLike | number | string | null
    dataultimacompra?: DateTimeNullableFilter<"Compras"> | Date | string | null
    saldometa?: DecimalNullableFilter<"Compras"> | Decimal | DecimalJsLike | number | string | null
    compra?: DecimalNullableFilter<"Compras"> | Decimal | DecimalJsLike | number | string | null
    datacoleta?: DateTimeNullableFilter<"Compras"> | Date | string | null
    opcadastrada15?: DecimalNullableFilter<"Compras"> | Decimal | DecimalJsLike | number | string | null
    opcoleta15?: DecimalNullableFilter<"Compras"> | Decimal | DecimalJsLike | number | string | null
    totcompras15?: DecimalNullableFilter<"Compras"> | Decimal | DecimalJsLike | number | string | null
    totconsumo15?: DecimalNullableFilter<"Compras"> | Decimal | DecimalJsLike | number | string | null
    saldoatual15?: DecimalNullableFilter<"Compras"> | Decimal | DecimalJsLike | number | string | null
    opcadastrada30?: DecimalNullableFilter<"Compras"> | Decimal | DecimalJsLike | number | string | null
    opcoleta30?: DecimalNullableFilter<"Compras"> | Decimal | DecimalJsLike | number | string | null
    totcompras30?: DecimalNullableFilter<"Compras"> | Decimal | DecimalJsLike | number | string | null
    totconsumo30?: DecimalNullableFilter<"Compras"> | Decimal | DecimalJsLike | number | string | null
    saldoatual30?: DecimalNullableFilter<"Compras"> | Decimal | DecimalJsLike | number | string | null
    opcompra15?: DecimalNullableFilter<"Compras"> | Decimal | DecimalJsLike | number | string | null
    opcompra30?: DecimalNullableFilter<"Compras"> | Decimal | DecimalJsLike | number | string | null
  }, "idcompras">

  export type ComprasOrderByWithAggregationInput = {
    idcompras?: SortOrder
    chavearquivo?: SortOrderInput | SortOrder
    porcentagem?: SortOrderInput | SortOrder
    codigo_produto?: SortOrderInput | SortOrder
    desc_tecnica?: SortOrderInput | SortOrder
    saldo?: SortOrderInput | SortOrder
    consumo12?: SortOrderInput | SortOrder
    mediaconsumo?: SortOrderInput | SortOrder
    opcompra?: SortOrderInput | SortOrder
    opcompraEntregue?: SortOrderInput | SortOrder
    opfinalizada?: SortOrderInput | SortOrder
    opemprocesso?: SortOrderInput | SortOrder
    opcadastrada?: SortOrderInput | SortOrder
    opcoleta?: SortOrderInput | SortOrder
    totcompras?: SortOrderInput | SortOrder
    totconsumo?: SortOrderInput | SortOrder
    saldoatual?: SortOrderInput | SortOrder
    valorultimacompra?: SortOrderInput | SortOrder
    dataultimacompra?: SortOrderInput | SortOrder
    saldometa?: SortOrderInput | SortOrder
    compra?: SortOrderInput | SortOrder
    datacoleta?: SortOrderInput | SortOrder
    opcadastrada15?: SortOrderInput | SortOrder
    opcoleta15?: SortOrderInput | SortOrder
    totcompras15?: SortOrderInput | SortOrder
    totconsumo15?: SortOrderInput | SortOrder
    saldoatual15?: SortOrderInput | SortOrder
    opcadastrada30?: SortOrderInput | SortOrder
    opcoleta30?: SortOrderInput | SortOrder
    totcompras30?: SortOrderInput | SortOrder
    totconsumo30?: SortOrderInput | SortOrder
    saldoatual30?: SortOrderInput | SortOrder
    opcompra15?: SortOrderInput | SortOrder
    opcompra30?: SortOrderInput | SortOrder
    _count?: ComprasCountOrderByAggregateInput
    _avg?: ComprasAvgOrderByAggregateInput
    _max?: ComprasMaxOrderByAggregateInput
    _min?: ComprasMinOrderByAggregateInput
    _sum?: ComprasSumOrderByAggregateInput
  }

  export type ComprasScalarWhereWithAggregatesInput = {
    AND?: ComprasScalarWhereWithAggregatesInput | ComprasScalarWhereWithAggregatesInput[]
    OR?: ComprasScalarWhereWithAggregatesInput[]
    NOT?: ComprasScalarWhereWithAggregatesInput | ComprasScalarWhereWithAggregatesInput[]
    idcompras?: IntWithAggregatesFilter<"Compras"> | number
    chavearquivo?: StringNullableWithAggregatesFilter<"Compras"> | string | null
    porcentagem?: IntNullableWithAggregatesFilter<"Compras"> | number | null
    codigo_produto?: StringNullableWithAggregatesFilter<"Compras"> | string | null
    desc_tecnica?: StringNullableWithAggregatesFilter<"Compras"> | string | null
    saldo?: DecimalNullableWithAggregatesFilter<"Compras"> | Decimal | DecimalJsLike | number | string | null
    consumo12?: DecimalNullableWithAggregatesFilter<"Compras"> | Decimal | DecimalJsLike | number | string | null
    mediaconsumo?: DecimalNullableWithAggregatesFilter<"Compras"> | Decimal | DecimalJsLike | number | string | null
    opcompra?: DecimalNullableWithAggregatesFilter<"Compras"> | Decimal | DecimalJsLike | number | string | null
    opcompraEntregue?: DecimalNullableWithAggregatesFilter<"Compras"> | Decimal | DecimalJsLike | number | string | null
    opfinalizada?: DecimalNullableWithAggregatesFilter<"Compras"> | Decimal | DecimalJsLike | number | string | null
    opemprocesso?: DecimalNullableWithAggregatesFilter<"Compras"> | Decimal | DecimalJsLike | number | string | null
    opcadastrada?: DecimalNullableWithAggregatesFilter<"Compras"> | Decimal | DecimalJsLike | number | string | null
    opcoleta?: DecimalNullableWithAggregatesFilter<"Compras"> | Decimal | DecimalJsLike | number | string | null
    totcompras?: DecimalNullableWithAggregatesFilter<"Compras"> | Decimal | DecimalJsLike | number | string | null
    totconsumo?: DecimalNullableWithAggregatesFilter<"Compras"> | Decimal | DecimalJsLike | number | string | null
    saldoatual?: DecimalNullableWithAggregatesFilter<"Compras"> | Decimal | DecimalJsLike | number | string | null
    valorultimacompra?: DecimalNullableWithAggregatesFilter<"Compras"> | Decimal | DecimalJsLike | number | string | null
    dataultimacompra?: DateTimeNullableWithAggregatesFilter<"Compras"> | Date | string | null
    saldometa?: DecimalNullableWithAggregatesFilter<"Compras"> | Decimal | DecimalJsLike | number | string | null
    compra?: DecimalNullableWithAggregatesFilter<"Compras"> | Decimal | DecimalJsLike | number | string | null
    datacoleta?: DateTimeNullableWithAggregatesFilter<"Compras"> | Date | string | null
    opcadastrada15?: DecimalNullableWithAggregatesFilter<"Compras"> | Decimal | DecimalJsLike | number | string | null
    opcoleta15?: DecimalNullableWithAggregatesFilter<"Compras"> | Decimal | DecimalJsLike | number | string | null
    totcompras15?: DecimalNullableWithAggregatesFilter<"Compras"> | Decimal | DecimalJsLike | number | string | null
    totconsumo15?: DecimalNullableWithAggregatesFilter<"Compras"> | Decimal | DecimalJsLike | number | string | null
    saldoatual15?: DecimalNullableWithAggregatesFilter<"Compras"> | Decimal | DecimalJsLike | number | string | null
    opcadastrada30?: DecimalNullableWithAggregatesFilter<"Compras"> | Decimal | DecimalJsLike | number | string | null
    opcoleta30?: DecimalNullableWithAggregatesFilter<"Compras"> | Decimal | DecimalJsLike | number | string | null
    totcompras30?: DecimalNullableWithAggregatesFilter<"Compras"> | Decimal | DecimalJsLike | number | string | null
    totconsumo30?: DecimalNullableWithAggregatesFilter<"Compras"> | Decimal | DecimalJsLike | number | string | null
    saldoatual30?: DecimalNullableWithAggregatesFilter<"Compras"> | Decimal | DecimalJsLike | number | string | null
    opcompra15?: DecimalNullableWithAggregatesFilter<"Compras"> | Decimal | DecimalJsLike | number | string | null
    opcompra30?: DecimalNullableWithAggregatesFilter<"Compras"> | Decimal | DecimalJsLike | number | string | null
  }

  export type NecessidadeWhereInput = {
    AND?: NecessidadeWhereInput | NecessidadeWhereInput[]
    OR?: NecessidadeWhereInput[]
    NOT?: NecessidadeWhereInput | NecessidadeWhereInput[]
    idnecessidade?: IntFilter<"Necessidade"> | number
    dtrelatorio?: DateTimeFilter<"Necessidade"> | Date | string
    codigo_produto?: StringNullableFilter<"Necessidade"> | string | null
    desc_tecnica?: StringNullableFilter<"Necessidade"> | string | null
    dtultcompra?: DateTimeNullableFilter<"Necessidade"> | Date | string | null
    vlrultcompra?: DecimalNullableFilter<"Necessidade"> | Decimal | DecimalJsLike | number | string | null
    saldoinv?: DecimalNullableFilter<"Necessidade"> | Decimal | DecimalJsLike | number | string | null
    dtinventario?: DateTimeNullableFilter<"Necessidade"> | Date | string | null
    opfinalizada?: DecimalNullableFilter<"Necessidade"> | Decimal | DecimalJsLike | number | string | null
    opemprocesso?: DecimalNullableFilter<"Necessidade"> | Decimal | DecimalJsLike | number | string | null
    compraentregue?: DecimalNullableFilter<"Necessidade"> | Decimal | DecimalJsLike | number | string | null
    compraparcial?: DecimalNullableFilter<"Necessidade"> | Decimal | DecimalJsLike | number | string | null
    saldoatual?: DecimalNullableFilter<"Necessidade"> | Decimal | DecimalJsLike | number | string | null
    compraprevista?: DecimalNullableFilter<"Necessidade"> | Decimal | DecimalJsLike | number | string | null
    opcadastrada?: DecimalNullableFilter<"Necessidade"> | Decimal | DecimalJsLike | number | string | null
    opcoleta?: DecimalNullableFilter<"Necessidade"> | Decimal | DecimalJsLike | number | string | null
    dtcoleta?: DateTimeNullableFilter<"Necessidade"> | Date | string | null
    saldonecessidade?: DecimalNullableFilter<"Necessidade"> | Decimal | DecimalJsLike | number | string | null
    dtnecessidade?: DateTimeNullableFilter<"Necessidade"> | Date | string | null
    vlrpedido?: DecimalNullableFilter<"Necessidade"> | Decimal | DecimalJsLike | number | string | null
    vlrcompra?: DecimalNullableFilter<"Necessidade"> | Decimal | DecimalJsLike | number | string | null
    stcompra?: BoolNullableFilter<"Necessidade"> | boolean | null
    mediaconsumo?: DecimalNullableFilter<"Necessidade"> | Decimal | DecimalJsLike | number | string | null
    processo?: StringNullableFilter<"Necessidade"> | string | null
  }

  export type NecessidadeOrderByWithRelationInput = {
    idnecessidade?: SortOrder
    dtrelatorio?: SortOrder
    codigo_produto?: SortOrderInput | SortOrder
    desc_tecnica?: SortOrderInput | SortOrder
    dtultcompra?: SortOrderInput | SortOrder
    vlrultcompra?: SortOrderInput | SortOrder
    saldoinv?: SortOrderInput | SortOrder
    dtinventario?: SortOrderInput | SortOrder
    opfinalizada?: SortOrderInput | SortOrder
    opemprocesso?: SortOrderInput | SortOrder
    compraentregue?: SortOrderInput | SortOrder
    compraparcial?: SortOrderInput | SortOrder
    saldoatual?: SortOrderInput | SortOrder
    compraprevista?: SortOrderInput | SortOrder
    opcadastrada?: SortOrderInput | SortOrder
    opcoleta?: SortOrderInput | SortOrder
    dtcoleta?: SortOrderInput | SortOrder
    saldonecessidade?: SortOrderInput | SortOrder
    dtnecessidade?: SortOrderInput | SortOrder
    vlrpedido?: SortOrderInput | SortOrder
    vlrcompra?: SortOrderInput | SortOrder
    stcompra?: SortOrderInput | SortOrder
    mediaconsumo?: SortOrderInput | SortOrder
    processo?: SortOrderInput | SortOrder
    _relevance?: NecessidadeOrderByRelevanceInput
  }

  export type NecessidadeWhereUniqueInput = Prisma.AtLeast<{
    idnecessidade?: number
    AND?: NecessidadeWhereInput | NecessidadeWhereInput[]
    OR?: NecessidadeWhereInput[]
    NOT?: NecessidadeWhereInput | NecessidadeWhereInput[]
    dtrelatorio?: DateTimeFilter<"Necessidade"> | Date | string
    codigo_produto?: StringNullableFilter<"Necessidade"> | string | null
    desc_tecnica?: StringNullableFilter<"Necessidade"> | string | null
    dtultcompra?: DateTimeNullableFilter<"Necessidade"> | Date | string | null
    vlrultcompra?: DecimalNullableFilter<"Necessidade"> | Decimal | DecimalJsLike | number | string | null
    saldoinv?: DecimalNullableFilter<"Necessidade"> | Decimal | DecimalJsLike | number | string | null
    dtinventario?: DateTimeNullableFilter<"Necessidade"> | Date | string | null
    opfinalizada?: DecimalNullableFilter<"Necessidade"> | Decimal | DecimalJsLike | number | string | null
    opemprocesso?: DecimalNullableFilter<"Necessidade"> | Decimal | DecimalJsLike | number | string | null
    compraentregue?: DecimalNullableFilter<"Necessidade"> | Decimal | DecimalJsLike | number | string | null
    compraparcial?: DecimalNullableFilter<"Necessidade"> | Decimal | DecimalJsLike | number | string | null
    saldoatual?: DecimalNullableFilter<"Necessidade"> | Decimal | DecimalJsLike | number | string | null
    compraprevista?: DecimalNullableFilter<"Necessidade"> | Decimal | DecimalJsLike | number | string | null
    opcadastrada?: DecimalNullableFilter<"Necessidade"> | Decimal | DecimalJsLike | number | string | null
    opcoleta?: DecimalNullableFilter<"Necessidade"> | Decimal | DecimalJsLike | number | string | null
    dtcoleta?: DateTimeNullableFilter<"Necessidade"> | Date | string | null
    saldonecessidade?: DecimalNullableFilter<"Necessidade"> | Decimal | DecimalJsLike | number | string | null
    dtnecessidade?: DateTimeNullableFilter<"Necessidade"> | Date | string | null
    vlrpedido?: DecimalNullableFilter<"Necessidade"> | Decimal | DecimalJsLike | number | string | null
    vlrcompra?: DecimalNullableFilter<"Necessidade"> | Decimal | DecimalJsLike | number | string | null
    stcompra?: BoolNullableFilter<"Necessidade"> | boolean | null
    mediaconsumo?: DecimalNullableFilter<"Necessidade"> | Decimal | DecimalJsLike | number | string | null
    processo?: StringNullableFilter<"Necessidade"> | string | null
  }, "idnecessidade">

  export type NecessidadeOrderByWithAggregationInput = {
    idnecessidade?: SortOrder
    dtrelatorio?: SortOrder
    codigo_produto?: SortOrderInput | SortOrder
    desc_tecnica?: SortOrderInput | SortOrder
    dtultcompra?: SortOrderInput | SortOrder
    vlrultcompra?: SortOrderInput | SortOrder
    saldoinv?: SortOrderInput | SortOrder
    dtinventario?: SortOrderInput | SortOrder
    opfinalizada?: SortOrderInput | SortOrder
    opemprocesso?: SortOrderInput | SortOrder
    compraentregue?: SortOrderInput | SortOrder
    compraparcial?: SortOrderInput | SortOrder
    saldoatual?: SortOrderInput | SortOrder
    compraprevista?: SortOrderInput | SortOrder
    opcadastrada?: SortOrderInput | SortOrder
    opcoleta?: SortOrderInput | SortOrder
    dtcoleta?: SortOrderInput | SortOrder
    saldonecessidade?: SortOrderInput | SortOrder
    dtnecessidade?: SortOrderInput | SortOrder
    vlrpedido?: SortOrderInput | SortOrder
    vlrcompra?: SortOrderInput | SortOrder
    stcompra?: SortOrderInput | SortOrder
    mediaconsumo?: SortOrderInput | SortOrder
    processo?: SortOrderInput | SortOrder
    _count?: NecessidadeCountOrderByAggregateInput
    _avg?: NecessidadeAvgOrderByAggregateInput
    _max?: NecessidadeMaxOrderByAggregateInput
    _min?: NecessidadeMinOrderByAggregateInput
    _sum?: NecessidadeSumOrderByAggregateInput
  }

  export type NecessidadeScalarWhereWithAggregatesInput = {
    AND?: NecessidadeScalarWhereWithAggregatesInput | NecessidadeScalarWhereWithAggregatesInput[]
    OR?: NecessidadeScalarWhereWithAggregatesInput[]
    NOT?: NecessidadeScalarWhereWithAggregatesInput | NecessidadeScalarWhereWithAggregatesInput[]
    idnecessidade?: IntWithAggregatesFilter<"Necessidade"> | number
    dtrelatorio?: DateTimeWithAggregatesFilter<"Necessidade"> | Date | string
    codigo_produto?: StringNullableWithAggregatesFilter<"Necessidade"> | string | null
    desc_tecnica?: StringNullableWithAggregatesFilter<"Necessidade"> | string | null
    dtultcompra?: DateTimeNullableWithAggregatesFilter<"Necessidade"> | Date | string | null
    vlrultcompra?: DecimalNullableWithAggregatesFilter<"Necessidade"> | Decimal | DecimalJsLike | number | string | null
    saldoinv?: DecimalNullableWithAggregatesFilter<"Necessidade"> | Decimal | DecimalJsLike | number | string | null
    dtinventario?: DateTimeNullableWithAggregatesFilter<"Necessidade"> | Date | string | null
    opfinalizada?: DecimalNullableWithAggregatesFilter<"Necessidade"> | Decimal | DecimalJsLike | number | string | null
    opemprocesso?: DecimalNullableWithAggregatesFilter<"Necessidade"> | Decimal | DecimalJsLike | number | string | null
    compraentregue?: DecimalNullableWithAggregatesFilter<"Necessidade"> | Decimal | DecimalJsLike | number | string | null
    compraparcial?: DecimalNullableWithAggregatesFilter<"Necessidade"> | Decimal | DecimalJsLike | number | string | null
    saldoatual?: DecimalNullableWithAggregatesFilter<"Necessidade"> | Decimal | DecimalJsLike | number | string | null
    compraprevista?: DecimalNullableWithAggregatesFilter<"Necessidade"> | Decimal | DecimalJsLike | number | string | null
    opcadastrada?: DecimalNullableWithAggregatesFilter<"Necessidade"> | Decimal | DecimalJsLike | number | string | null
    opcoleta?: DecimalNullableWithAggregatesFilter<"Necessidade"> | Decimal | DecimalJsLike | number | string | null
    dtcoleta?: DateTimeNullableWithAggregatesFilter<"Necessidade"> | Date | string | null
    saldonecessidade?: DecimalNullableWithAggregatesFilter<"Necessidade"> | Decimal | DecimalJsLike | number | string | null
    dtnecessidade?: DateTimeNullableWithAggregatesFilter<"Necessidade"> | Date | string | null
    vlrpedido?: DecimalNullableWithAggregatesFilter<"Necessidade"> | Decimal | DecimalJsLike | number | string | null
    vlrcompra?: DecimalNullableWithAggregatesFilter<"Necessidade"> | Decimal | DecimalJsLike | number | string | null
    stcompra?: BoolNullableWithAggregatesFilter<"Necessidade"> | boolean | null
    mediaconsumo?: DecimalNullableWithAggregatesFilter<"Necessidade"> | Decimal | DecimalJsLike | number | string | null
    processo?: StringNullableWithAggregatesFilter<"Necessidade"> | string | null
  }

  export type PainelWhereInput = {
    AND?: PainelWhereInput | PainelWhereInput[]
    OR?: PainelWhereInput[]
    NOT?: PainelWhereInput | PainelWhereInput[]
    idpainel?: IntFilter<"Painel"> | number
    idnivel?: IntFilter<"Painel"> | number
    nrpainel?: IntFilter<"Painel"> | number
    status?: StringFilter<"Painel"> | string
    descricao?: StringFilter<"Painel"> | string
  }

  export type PainelOrderByWithRelationInput = {
    idpainel?: SortOrder
    idnivel?: SortOrder
    nrpainel?: SortOrder
    status?: SortOrder
    descricao?: SortOrder
    _relevance?: PainelOrderByRelevanceInput
  }

  export type PainelWhereUniqueInput = Prisma.AtLeast<{
    idpainel?: number
    AND?: PainelWhereInput | PainelWhereInput[]
    OR?: PainelWhereInput[]
    NOT?: PainelWhereInput | PainelWhereInput[]
    idnivel?: IntFilter<"Painel"> | number
    nrpainel?: IntFilter<"Painel"> | number
    status?: StringFilter<"Painel"> | string
    descricao?: StringFilter<"Painel"> | string
  }, "idpainel">

  export type PainelOrderByWithAggregationInput = {
    idpainel?: SortOrder
    idnivel?: SortOrder
    nrpainel?: SortOrder
    status?: SortOrder
    descricao?: SortOrder
    _count?: PainelCountOrderByAggregateInput
    _avg?: PainelAvgOrderByAggregateInput
    _max?: PainelMaxOrderByAggregateInput
    _min?: PainelMinOrderByAggregateInput
    _sum?: PainelSumOrderByAggregateInput
  }

  export type PainelScalarWhereWithAggregatesInput = {
    AND?: PainelScalarWhereWithAggregatesInput | PainelScalarWhereWithAggregatesInput[]
    OR?: PainelScalarWhereWithAggregatesInput[]
    NOT?: PainelScalarWhereWithAggregatesInput | PainelScalarWhereWithAggregatesInput[]
    idpainel?: IntWithAggregatesFilter<"Painel"> | number
    idnivel?: IntWithAggregatesFilter<"Painel"> | number
    nrpainel?: IntWithAggregatesFilter<"Painel"> | number
    status?: StringWithAggregatesFilter<"Painel"> | string
    descricao?: StringWithAggregatesFilter<"Painel"> | string
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
    idnivel?: number
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
    idlogin?: number
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
    idmenu?: number
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
    fixa?: boolean
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
    fixa?: boolean
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
    fixa?: BoolFieldUpdateOperationsInput | boolean
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
    fixa?: BoolFieldUpdateOperationsInput | boolean
    Usuariocoluna?: UsuariocolunaUncheckedUpdateManyWithoutColunaNestedInput
  }

  export type ColunaCreateManyInput = {
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
    fixa?: boolean
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
    fixa?: BoolFieldUpdateOperationsInput | boolean
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
    fixa?: BoolFieldUpdateOperationsInput | boolean
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
    idusuariocoluna?: number
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

  export type CustoiqlCreateInput = {
    numero_op: string
    produzido?: string | null
    data_finalizacao?: Date | string | null
    codigo_produto?: string | null
    desc_tecnica?: string | null
    quantidade_final?: Decimal | DecimalJsLike | number | string | null
    descricao?: string | null
    valor_unitario?: Decimal | DecimalJsLike | number | string | null
    custo?: Decimal | DecimalJsLike | number | string | null
    quantidade_produzida?: Decimal | DecimalJsLike | number | string | null
  }

  export type CustoiqlUncheckedCreateInput = {
    id?: number
    numero_op: string
    produzido?: string | null
    data_finalizacao?: Date | string | null
    codigo_produto?: string | null
    desc_tecnica?: string | null
    quantidade_final?: Decimal | DecimalJsLike | number | string | null
    descricao?: string | null
    valor_unitario?: Decimal | DecimalJsLike | number | string | null
    custo?: Decimal | DecimalJsLike | number | string | null
    quantidade_produzida?: Decimal | DecimalJsLike | number | string | null
  }

  export type CustoiqlUpdateInput = {
    numero_op?: StringFieldUpdateOperationsInput | string
    produzido?: NullableStringFieldUpdateOperationsInput | string | null
    data_finalizacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    codigo_produto?: NullableStringFieldUpdateOperationsInput | string | null
    desc_tecnica?: NullableStringFieldUpdateOperationsInput | string | null
    quantidade_final?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valor_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    custo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantidade_produzida?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type CustoiqlUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero_op?: StringFieldUpdateOperationsInput | string
    produzido?: NullableStringFieldUpdateOperationsInput | string | null
    data_finalizacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    codigo_produto?: NullableStringFieldUpdateOperationsInput | string | null
    desc_tecnica?: NullableStringFieldUpdateOperationsInput | string | null
    quantidade_final?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valor_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    custo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantidade_produzida?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type CustoiqlCreateManyInput = {
    id?: number
    numero_op: string
    produzido?: string | null
    data_finalizacao?: Date | string | null
    codigo_produto?: string | null
    desc_tecnica?: string | null
    quantidade_final?: Decimal | DecimalJsLike | number | string | null
    descricao?: string | null
    valor_unitario?: Decimal | DecimalJsLike | number | string | null
    custo?: Decimal | DecimalJsLike | number | string | null
    quantidade_produzida?: Decimal | DecimalJsLike | number | string | null
  }

  export type CustoiqlUpdateManyMutationInput = {
    numero_op?: StringFieldUpdateOperationsInput | string
    produzido?: NullableStringFieldUpdateOperationsInput | string | null
    data_finalizacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    codigo_produto?: NullableStringFieldUpdateOperationsInput | string | null
    desc_tecnica?: NullableStringFieldUpdateOperationsInput | string | null
    quantidade_final?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valor_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    custo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantidade_produzida?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type CustoiqlUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero_op?: StringFieldUpdateOperationsInput | string
    produzido?: NullableStringFieldUpdateOperationsInput | string | null
    data_finalizacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    codigo_produto?: NullableStringFieldUpdateOperationsInput | string | null
    desc_tecnica?: NullableStringFieldUpdateOperationsInput | string | null
    quantidade_final?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    valor_unitario?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    custo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    quantidade_produzida?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type InventarioCreateInput = {
    produto: string
    coletor?: string | null
    quantidade?: Decimal | DecimalJsLike | number | string | null
    cod_produto?: string | null
    Codigo_tipo_item?: string | null
    lote?: string | null
    lote_original?: string | null
    Lote_interno?: string | null
    Data_validade_prod?: Date | string | null
    Desc_tecnica?: string | null
    Data?: Date | string | null
    Unidade_estoque?: string | null
    Unidade_compra?: string | null
    codigo_embalagem?: string | null
    estoque?: Decimal | DecimalJsLike | number | string | null
  }

  export type InventarioUncheckedCreateInput = {
    id_inv?: number
    produto: string
    coletor?: string | null
    quantidade?: Decimal | DecimalJsLike | number | string | null
    cod_produto?: string | null
    Codigo_tipo_item?: string | null
    lote?: string | null
    lote_original?: string | null
    Lote_interno?: string | null
    Data_validade_prod?: Date | string | null
    Desc_tecnica?: string | null
    Data?: Date | string | null
    Unidade_estoque?: string | null
    Unidade_compra?: string | null
    codigo_embalagem?: string | null
    estoque?: Decimal | DecimalJsLike | number | string | null
  }

  export type InventarioUpdateInput = {
    produto?: StringFieldUpdateOperationsInput | string
    coletor?: NullableStringFieldUpdateOperationsInput | string | null
    quantidade?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cod_produto?: NullableStringFieldUpdateOperationsInput | string | null
    Codigo_tipo_item?: NullableStringFieldUpdateOperationsInput | string | null
    lote?: NullableStringFieldUpdateOperationsInput | string | null
    lote_original?: NullableStringFieldUpdateOperationsInput | string | null
    Lote_interno?: NullableStringFieldUpdateOperationsInput | string | null
    Data_validade_prod?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Desc_tecnica?: NullableStringFieldUpdateOperationsInput | string | null
    Data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Unidade_estoque?: NullableStringFieldUpdateOperationsInput | string | null
    Unidade_compra?: NullableStringFieldUpdateOperationsInput | string | null
    codigo_embalagem?: NullableStringFieldUpdateOperationsInput | string | null
    estoque?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type InventarioUncheckedUpdateInput = {
    id_inv?: IntFieldUpdateOperationsInput | number
    produto?: StringFieldUpdateOperationsInput | string
    coletor?: NullableStringFieldUpdateOperationsInput | string | null
    quantidade?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cod_produto?: NullableStringFieldUpdateOperationsInput | string | null
    Codigo_tipo_item?: NullableStringFieldUpdateOperationsInput | string | null
    lote?: NullableStringFieldUpdateOperationsInput | string | null
    lote_original?: NullableStringFieldUpdateOperationsInput | string | null
    Lote_interno?: NullableStringFieldUpdateOperationsInput | string | null
    Data_validade_prod?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Desc_tecnica?: NullableStringFieldUpdateOperationsInput | string | null
    Data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Unidade_estoque?: NullableStringFieldUpdateOperationsInput | string | null
    Unidade_compra?: NullableStringFieldUpdateOperationsInput | string | null
    codigo_embalagem?: NullableStringFieldUpdateOperationsInput | string | null
    estoque?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type InventarioCreateManyInput = {
    id_inv?: number
    produto: string
    coletor?: string | null
    quantidade?: Decimal | DecimalJsLike | number | string | null
    cod_produto?: string | null
    Codigo_tipo_item?: string | null
    lote?: string | null
    lote_original?: string | null
    Lote_interno?: string | null
    Data_validade_prod?: Date | string | null
    Desc_tecnica?: string | null
    Data?: Date | string | null
    Unidade_estoque?: string | null
    Unidade_compra?: string | null
    codigo_embalagem?: string | null
    estoque?: Decimal | DecimalJsLike | number | string | null
  }

  export type InventarioUpdateManyMutationInput = {
    produto?: StringFieldUpdateOperationsInput | string
    coletor?: NullableStringFieldUpdateOperationsInput | string | null
    quantidade?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cod_produto?: NullableStringFieldUpdateOperationsInput | string | null
    Codigo_tipo_item?: NullableStringFieldUpdateOperationsInput | string | null
    lote?: NullableStringFieldUpdateOperationsInput | string | null
    lote_original?: NullableStringFieldUpdateOperationsInput | string | null
    Lote_interno?: NullableStringFieldUpdateOperationsInput | string | null
    Data_validade_prod?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Desc_tecnica?: NullableStringFieldUpdateOperationsInput | string | null
    Data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Unidade_estoque?: NullableStringFieldUpdateOperationsInput | string | null
    Unidade_compra?: NullableStringFieldUpdateOperationsInput | string | null
    codigo_embalagem?: NullableStringFieldUpdateOperationsInput | string | null
    estoque?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type InventarioUncheckedUpdateManyInput = {
    id_inv?: IntFieldUpdateOperationsInput | number
    produto?: StringFieldUpdateOperationsInput | string
    coletor?: NullableStringFieldUpdateOperationsInput | string | null
    quantidade?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    cod_produto?: NullableStringFieldUpdateOperationsInput | string | null
    Codigo_tipo_item?: NullableStringFieldUpdateOperationsInput | string | null
    lote?: NullableStringFieldUpdateOperationsInput | string | null
    lote_original?: NullableStringFieldUpdateOperationsInput | string | null
    Lote_interno?: NullableStringFieldUpdateOperationsInput | string | null
    Data_validade_prod?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Desc_tecnica?: NullableStringFieldUpdateOperationsInput | string | null
    Data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Unidade_estoque?: NullableStringFieldUpdateOperationsInput | string | null
    Unidade_compra?: NullableStringFieldUpdateOperationsInput | string | null
    codigo_embalagem?: NullableStringFieldUpdateOperationsInput | string | null
    estoque?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type SendmailCreateInput = {
    destinatario: string
    html: Buffer
    subject: string
    idusercreateAt: number
    createdAt?: Date | string
    iduserupdatedAt?: number | null
    updatedAt?: Date | string | null
    status?: string
    idsolicitante?: number | null
    idusuarioaprovacao?: number | null
    idusuariocotacao?: number | null
    idusuarioaprovacaodir?: number | null
    idusuariocompra?: number | null
    idusuarioentrega?: number | null
    idcompra?: number | null
    attachments?: Buffer | null
  }

  export type SendmailUncheckedCreateInput = {
    idsendmail?: number
    destinatario: string
    html: Buffer
    subject: string
    idusercreateAt: number
    createdAt?: Date | string
    iduserupdatedAt?: number | null
    updatedAt?: Date | string | null
    status?: string
    idsolicitante?: number | null
    idusuarioaprovacao?: number | null
    idusuariocotacao?: number | null
    idusuarioaprovacaodir?: number | null
    idusuariocompra?: number | null
    idusuarioentrega?: number | null
    idcompra?: number | null
    attachments?: Buffer | null
  }

  export type SendmailUpdateInput = {
    destinatario?: StringFieldUpdateOperationsInput | string
    html?: BytesFieldUpdateOperationsInput | Buffer
    subject?: StringFieldUpdateOperationsInput | string
    idusercreateAt?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    iduserupdatedAt?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    idsolicitante?: NullableIntFieldUpdateOperationsInput | number | null
    idusuarioaprovacao?: NullableIntFieldUpdateOperationsInput | number | null
    idusuariocotacao?: NullableIntFieldUpdateOperationsInput | number | null
    idusuarioaprovacaodir?: NullableIntFieldUpdateOperationsInput | number | null
    idusuariocompra?: NullableIntFieldUpdateOperationsInput | number | null
    idusuarioentrega?: NullableIntFieldUpdateOperationsInput | number | null
    idcompra?: NullableIntFieldUpdateOperationsInput | number | null
    attachments?: NullableBytesFieldUpdateOperationsInput | Buffer | null
  }

  export type SendmailUncheckedUpdateInput = {
    idsendmail?: IntFieldUpdateOperationsInput | number
    destinatario?: StringFieldUpdateOperationsInput | string
    html?: BytesFieldUpdateOperationsInput | Buffer
    subject?: StringFieldUpdateOperationsInput | string
    idusercreateAt?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    iduserupdatedAt?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    idsolicitante?: NullableIntFieldUpdateOperationsInput | number | null
    idusuarioaprovacao?: NullableIntFieldUpdateOperationsInput | number | null
    idusuariocotacao?: NullableIntFieldUpdateOperationsInput | number | null
    idusuarioaprovacaodir?: NullableIntFieldUpdateOperationsInput | number | null
    idusuariocompra?: NullableIntFieldUpdateOperationsInput | number | null
    idusuarioentrega?: NullableIntFieldUpdateOperationsInput | number | null
    idcompra?: NullableIntFieldUpdateOperationsInput | number | null
    attachments?: NullableBytesFieldUpdateOperationsInput | Buffer | null
  }

  export type SendmailCreateManyInput = {
    idsendmail?: number
    destinatario: string
    html: Buffer
    subject: string
    idusercreateAt: number
    createdAt?: Date | string
    iduserupdatedAt?: number | null
    updatedAt?: Date | string | null
    status?: string
    idsolicitante?: number | null
    idusuarioaprovacao?: number | null
    idusuariocotacao?: number | null
    idusuarioaprovacaodir?: number | null
    idusuariocompra?: number | null
    idusuarioentrega?: number | null
    idcompra?: number | null
    attachments?: Buffer | null
  }

  export type SendmailUpdateManyMutationInput = {
    destinatario?: StringFieldUpdateOperationsInput | string
    html?: BytesFieldUpdateOperationsInput | Buffer
    subject?: StringFieldUpdateOperationsInput | string
    idusercreateAt?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    iduserupdatedAt?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    idsolicitante?: NullableIntFieldUpdateOperationsInput | number | null
    idusuarioaprovacao?: NullableIntFieldUpdateOperationsInput | number | null
    idusuariocotacao?: NullableIntFieldUpdateOperationsInput | number | null
    idusuarioaprovacaodir?: NullableIntFieldUpdateOperationsInput | number | null
    idusuariocompra?: NullableIntFieldUpdateOperationsInput | number | null
    idusuarioentrega?: NullableIntFieldUpdateOperationsInput | number | null
    idcompra?: NullableIntFieldUpdateOperationsInput | number | null
    attachments?: NullableBytesFieldUpdateOperationsInput | Buffer | null
  }

  export type SendmailUncheckedUpdateManyInput = {
    idsendmail?: IntFieldUpdateOperationsInput | number
    destinatario?: StringFieldUpdateOperationsInput | string
    html?: BytesFieldUpdateOperationsInput | Buffer
    subject?: StringFieldUpdateOperationsInput | string
    idusercreateAt?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    iduserupdatedAt?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    idsolicitante?: NullableIntFieldUpdateOperationsInput | number | null
    idusuarioaprovacao?: NullableIntFieldUpdateOperationsInput | number | null
    idusuariocotacao?: NullableIntFieldUpdateOperationsInput | number | null
    idusuarioaprovacaodir?: NullableIntFieldUpdateOperationsInput | number | null
    idusuariocompra?: NullableIntFieldUpdateOperationsInput | number | null
    idusuarioentrega?: NullableIntFieldUpdateOperationsInput | number | null
    idcompra?: NullableIntFieldUpdateOperationsInput | number | null
    attachments?: NullableBytesFieldUpdateOperationsInput | Buffer | null
  }

  export type ResumocomprasCreateInput = {
    Apelido_empresa?: string | null
    Apelido_estabelecimento?: string | null
    Codigo_produto?: string | null
    Unidade_estoque?: string | null
    Unidade_compra?: string | null
    Desc_tecnica?: string | null
    Estoque_minimo?: Decimal | DecimalJsLike | number | string | null
    Lote_compra?: Decimal | DecimalJsLike | number | string | null
    mes1?: Decimal | DecimalJsLike | number | string | null
    mes2?: Decimal | DecimalJsLike | number | string | null
    mes3?: Decimal | DecimalJsLike | number | string | null
    mes4?: Decimal | DecimalJsLike | number | string | null
    mes5?: Decimal | DecimalJsLike | number | string | null
    mes6?: Decimal | DecimalJsLike | number | string | null
    mes7?: Decimal | DecimalJsLike | number | string | null
    mes8?: Decimal | DecimalJsLike | number | string | null
    mes9?: Decimal | DecimalJsLike | number | string | null
    mes10?: Decimal | DecimalJsLike | number | string | null
    mes11?: Decimal | DecimalJsLike | number | string | null
    mes12?: Decimal | DecimalJsLike | number | string | null
    compras?: Decimal | DecimalJsLike | number | string | null
    opcadastradas?: Decimal | DecimalJsLike | number | string | null
    saldoestoque?: Decimal | DecimalJsLike | number | string | null
    coleta?: Decimal | DecimalJsLike | number | string | null
  }

  export type ResumocomprasUncheckedCreateInput = {
    id?: number
    Apelido_empresa?: string | null
    Apelido_estabelecimento?: string | null
    Codigo_produto?: string | null
    Unidade_estoque?: string | null
    Unidade_compra?: string | null
    Desc_tecnica?: string | null
    Estoque_minimo?: Decimal | DecimalJsLike | number | string | null
    Lote_compra?: Decimal | DecimalJsLike | number | string | null
    mes1?: Decimal | DecimalJsLike | number | string | null
    mes2?: Decimal | DecimalJsLike | number | string | null
    mes3?: Decimal | DecimalJsLike | number | string | null
    mes4?: Decimal | DecimalJsLike | number | string | null
    mes5?: Decimal | DecimalJsLike | number | string | null
    mes6?: Decimal | DecimalJsLike | number | string | null
    mes7?: Decimal | DecimalJsLike | number | string | null
    mes8?: Decimal | DecimalJsLike | number | string | null
    mes9?: Decimal | DecimalJsLike | number | string | null
    mes10?: Decimal | DecimalJsLike | number | string | null
    mes11?: Decimal | DecimalJsLike | number | string | null
    mes12?: Decimal | DecimalJsLike | number | string | null
    compras?: Decimal | DecimalJsLike | number | string | null
    opcadastradas?: Decimal | DecimalJsLike | number | string | null
    saldoestoque?: Decimal | DecimalJsLike | number | string | null
    coleta?: Decimal | DecimalJsLike | number | string | null
  }

  export type ResumocomprasUpdateInput = {
    Apelido_empresa?: NullableStringFieldUpdateOperationsInput | string | null
    Apelido_estabelecimento?: NullableStringFieldUpdateOperationsInput | string | null
    Codigo_produto?: NullableStringFieldUpdateOperationsInput | string | null
    Unidade_estoque?: NullableStringFieldUpdateOperationsInput | string | null
    Unidade_compra?: NullableStringFieldUpdateOperationsInput | string | null
    Desc_tecnica?: NullableStringFieldUpdateOperationsInput | string | null
    Estoque_minimo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Lote_compra?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    mes1?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    mes2?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    mes3?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    mes4?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    mes5?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    mes6?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    mes7?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    mes8?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    mes9?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    mes10?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    mes11?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    mes12?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    compras?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    opcadastradas?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    saldoestoque?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    coleta?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type ResumocomprasUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    Apelido_empresa?: NullableStringFieldUpdateOperationsInput | string | null
    Apelido_estabelecimento?: NullableStringFieldUpdateOperationsInput | string | null
    Codigo_produto?: NullableStringFieldUpdateOperationsInput | string | null
    Unidade_estoque?: NullableStringFieldUpdateOperationsInput | string | null
    Unidade_compra?: NullableStringFieldUpdateOperationsInput | string | null
    Desc_tecnica?: NullableStringFieldUpdateOperationsInput | string | null
    Estoque_minimo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Lote_compra?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    mes1?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    mes2?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    mes3?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    mes4?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    mes5?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    mes6?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    mes7?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    mes8?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    mes9?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    mes10?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    mes11?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    mes12?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    compras?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    opcadastradas?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    saldoestoque?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    coleta?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type ResumocomprasCreateManyInput = {
    id?: number
    Apelido_empresa?: string | null
    Apelido_estabelecimento?: string | null
    Codigo_produto?: string | null
    Unidade_estoque?: string | null
    Unidade_compra?: string | null
    Desc_tecnica?: string | null
    Estoque_minimo?: Decimal | DecimalJsLike | number | string | null
    Lote_compra?: Decimal | DecimalJsLike | number | string | null
    mes1?: Decimal | DecimalJsLike | number | string | null
    mes2?: Decimal | DecimalJsLike | number | string | null
    mes3?: Decimal | DecimalJsLike | number | string | null
    mes4?: Decimal | DecimalJsLike | number | string | null
    mes5?: Decimal | DecimalJsLike | number | string | null
    mes6?: Decimal | DecimalJsLike | number | string | null
    mes7?: Decimal | DecimalJsLike | number | string | null
    mes8?: Decimal | DecimalJsLike | number | string | null
    mes9?: Decimal | DecimalJsLike | number | string | null
    mes10?: Decimal | DecimalJsLike | number | string | null
    mes11?: Decimal | DecimalJsLike | number | string | null
    mes12?: Decimal | DecimalJsLike | number | string | null
    compras?: Decimal | DecimalJsLike | number | string | null
    opcadastradas?: Decimal | DecimalJsLike | number | string | null
    saldoestoque?: Decimal | DecimalJsLike | number | string | null
    coleta?: Decimal | DecimalJsLike | number | string | null
  }

  export type ResumocomprasUpdateManyMutationInput = {
    Apelido_empresa?: NullableStringFieldUpdateOperationsInput | string | null
    Apelido_estabelecimento?: NullableStringFieldUpdateOperationsInput | string | null
    Codigo_produto?: NullableStringFieldUpdateOperationsInput | string | null
    Unidade_estoque?: NullableStringFieldUpdateOperationsInput | string | null
    Unidade_compra?: NullableStringFieldUpdateOperationsInput | string | null
    Desc_tecnica?: NullableStringFieldUpdateOperationsInput | string | null
    Estoque_minimo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Lote_compra?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    mes1?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    mes2?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    mes3?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    mes4?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    mes5?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    mes6?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    mes7?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    mes8?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    mes9?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    mes10?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    mes11?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    mes12?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    compras?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    opcadastradas?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    saldoestoque?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    coleta?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type ResumocomprasUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    Apelido_empresa?: NullableStringFieldUpdateOperationsInput | string | null
    Apelido_estabelecimento?: NullableStringFieldUpdateOperationsInput | string | null
    Codigo_produto?: NullableStringFieldUpdateOperationsInput | string | null
    Unidade_estoque?: NullableStringFieldUpdateOperationsInput | string | null
    Unidade_compra?: NullableStringFieldUpdateOperationsInput | string | null
    Desc_tecnica?: NullableStringFieldUpdateOperationsInput | string | null
    Estoque_minimo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Lote_compra?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    mes1?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    mes2?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    mes3?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    mes4?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    mes5?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    mes6?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    mes7?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    mes8?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    mes9?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    mes10?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    mes11?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    mes12?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    compras?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    opcadastradas?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    saldoestoque?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    coleta?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type ComprasCreateInput = {
    chavearquivo?: string | null
    porcentagem?: number | null
    codigo_produto?: string | null
    desc_tecnica?: string | null
    saldo?: Decimal | DecimalJsLike | number | string | null
    consumo12?: Decimal | DecimalJsLike | number | string | null
    mediaconsumo?: Decimal | DecimalJsLike | number | string | null
    opcompra?: Decimal | DecimalJsLike | number | string | null
    opcompraEntregue?: Decimal | DecimalJsLike | number | string | null
    opfinalizada?: Decimal | DecimalJsLike | number | string | null
    opemprocesso?: Decimal | DecimalJsLike | number | string | null
    opcadastrada?: Decimal | DecimalJsLike | number | string | null
    opcoleta?: Decimal | DecimalJsLike | number | string | null
    totcompras?: Decimal | DecimalJsLike | number | string | null
    totconsumo?: Decimal | DecimalJsLike | number | string | null
    saldoatual?: Decimal | DecimalJsLike | number | string | null
    valorultimacompra?: Decimal | DecimalJsLike | number | string | null
    dataultimacompra?: Date | string | null
    saldometa?: Decimal | DecimalJsLike | number | string | null
    compra?: Decimal | DecimalJsLike | number | string | null
    datacoleta?: Date | string | null
    opcadastrada15?: Decimal | DecimalJsLike | number | string | null
    opcoleta15?: Decimal | DecimalJsLike | number | string | null
    totcompras15?: Decimal | DecimalJsLike | number | string | null
    totconsumo15?: Decimal | DecimalJsLike | number | string | null
    saldoatual15?: Decimal | DecimalJsLike | number | string | null
    opcadastrada30?: Decimal | DecimalJsLike | number | string | null
    opcoleta30?: Decimal | DecimalJsLike | number | string | null
    totcompras30?: Decimal | DecimalJsLike | number | string | null
    totconsumo30?: Decimal | DecimalJsLike | number | string | null
    saldoatual30?: Decimal | DecimalJsLike | number | string | null
    opcompra15?: Decimal | DecimalJsLike | number | string | null
    opcompra30?: Decimal | DecimalJsLike | number | string | null
  }

  export type ComprasUncheckedCreateInput = {
    idcompras?: number
    chavearquivo?: string | null
    porcentagem?: number | null
    codigo_produto?: string | null
    desc_tecnica?: string | null
    saldo?: Decimal | DecimalJsLike | number | string | null
    consumo12?: Decimal | DecimalJsLike | number | string | null
    mediaconsumo?: Decimal | DecimalJsLike | number | string | null
    opcompra?: Decimal | DecimalJsLike | number | string | null
    opcompraEntregue?: Decimal | DecimalJsLike | number | string | null
    opfinalizada?: Decimal | DecimalJsLike | number | string | null
    opemprocesso?: Decimal | DecimalJsLike | number | string | null
    opcadastrada?: Decimal | DecimalJsLike | number | string | null
    opcoleta?: Decimal | DecimalJsLike | number | string | null
    totcompras?: Decimal | DecimalJsLike | number | string | null
    totconsumo?: Decimal | DecimalJsLike | number | string | null
    saldoatual?: Decimal | DecimalJsLike | number | string | null
    valorultimacompra?: Decimal | DecimalJsLike | number | string | null
    dataultimacompra?: Date | string | null
    saldometa?: Decimal | DecimalJsLike | number | string | null
    compra?: Decimal | DecimalJsLike | number | string | null
    datacoleta?: Date | string | null
    opcadastrada15?: Decimal | DecimalJsLike | number | string | null
    opcoleta15?: Decimal | DecimalJsLike | number | string | null
    totcompras15?: Decimal | DecimalJsLike | number | string | null
    totconsumo15?: Decimal | DecimalJsLike | number | string | null
    saldoatual15?: Decimal | DecimalJsLike | number | string | null
    opcadastrada30?: Decimal | DecimalJsLike | number | string | null
    opcoleta30?: Decimal | DecimalJsLike | number | string | null
    totcompras30?: Decimal | DecimalJsLike | number | string | null
    totconsumo30?: Decimal | DecimalJsLike | number | string | null
    saldoatual30?: Decimal | DecimalJsLike | number | string | null
    opcompra15?: Decimal | DecimalJsLike | number | string | null
    opcompra30?: Decimal | DecimalJsLike | number | string | null
  }

  export type ComprasUpdateInput = {
    chavearquivo?: NullableStringFieldUpdateOperationsInput | string | null
    porcentagem?: NullableIntFieldUpdateOperationsInput | number | null
    codigo_produto?: NullableStringFieldUpdateOperationsInput | string | null
    desc_tecnica?: NullableStringFieldUpdateOperationsInput | string | null
    saldo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    consumo12?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    mediaconsumo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    opcompra?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    opcompraEntregue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    opfinalizada?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    opemprocesso?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    opcadastrada?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    opcoleta?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totcompras?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totconsumo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    saldoatual?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    valorultimacompra?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    dataultimacompra?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    saldometa?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    compra?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    datacoleta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    opcadastrada15?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    opcoleta15?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totcompras15?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totconsumo15?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    saldoatual15?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    opcadastrada30?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    opcoleta30?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totcompras30?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totconsumo30?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    saldoatual30?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    opcompra15?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    opcompra30?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type ComprasUncheckedUpdateInput = {
    idcompras?: IntFieldUpdateOperationsInput | number
    chavearquivo?: NullableStringFieldUpdateOperationsInput | string | null
    porcentagem?: NullableIntFieldUpdateOperationsInput | number | null
    codigo_produto?: NullableStringFieldUpdateOperationsInput | string | null
    desc_tecnica?: NullableStringFieldUpdateOperationsInput | string | null
    saldo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    consumo12?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    mediaconsumo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    opcompra?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    opcompraEntregue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    opfinalizada?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    opemprocesso?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    opcadastrada?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    opcoleta?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totcompras?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totconsumo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    saldoatual?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    valorultimacompra?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    dataultimacompra?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    saldometa?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    compra?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    datacoleta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    opcadastrada15?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    opcoleta15?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totcompras15?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totconsumo15?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    saldoatual15?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    opcadastrada30?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    opcoleta30?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totcompras30?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totconsumo30?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    saldoatual30?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    opcompra15?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    opcompra30?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type ComprasCreateManyInput = {
    idcompras?: number
    chavearquivo?: string | null
    porcentagem?: number | null
    codigo_produto?: string | null
    desc_tecnica?: string | null
    saldo?: Decimal | DecimalJsLike | number | string | null
    consumo12?: Decimal | DecimalJsLike | number | string | null
    mediaconsumo?: Decimal | DecimalJsLike | number | string | null
    opcompra?: Decimal | DecimalJsLike | number | string | null
    opcompraEntregue?: Decimal | DecimalJsLike | number | string | null
    opfinalizada?: Decimal | DecimalJsLike | number | string | null
    opemprocesso?: Decimal | DecimalJsLike | number | string | null
    opcadastrada?: Decimal | DecimalJsLike | number | string | null
    opcoleta?: Decimal | DecimalJsLike | number | string | null
    totcompras?: Decimal | DecimalJsLike | number | string | null
    totconsumo?: Decimal | DecimalJsLike | number | string | null
    saldoatual?: Decimal | DecimalJsLike | number | string | null
    valorultimacompra?: Decimal | DecimalJsLike | number | string | null
    dataultimacompra?: Date | string | null
    saldometa?: Decimal | DecimalJsLike | number | string | null
    compra?: Decimal | DecimalJsLike | number | string | null
    datacoleta?: Date | string | null
    opcadastrada15?: Decimal | DecimalJsLike | number | string | null
    opcoleta15?: Decimal | DecimalJsLike | number | string | null
    totcompras15?: Decimal | DecimalJsLike | number | string | null
    totconsumo15?: Decimal | DecimalJsLike | number | string | null
    saldoatual15?: Decimal | DecimalJsLike | number | string | null
    opcadastrada30?: Decimal | DecimalJsLike | number | string | null
    opcoleta30?: Decimal | DecimalJsLike | number | string | null
    totcompras30?: Decimal | DecimalJsLike | number | string | null
    totconsumo30?: Decimal | DecimalJsLike | number | string | null
    saldoatual30?: Decimal | DecimalJsLike | number | string | null
    opcompra15?: Decimal | DecimalJsLike | number | string | null
    opcompra30?: Decimal | DecimalJsLike | number | string | null
  }

  export type ComprasUpdateManyMutationInput = {
    chavearquivo?: NullableStringFieldUpdateOperationsInput | string | null
    porcentagem?: NullableIntFieldUpdateOperationsInput | number | null
    codigo_produto?: NullableStringFieldUpdateOperationsInput | string | null
    desc_tecnica?: NullableStringFieldUpdateOperationsInput | string | null
    saldo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    consumo12?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    mediaconsumo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    opcompra?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    opcompraEntregue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    opfinalizada?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    opemprocesso?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    opcadastrada?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    opcoleta?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totcompras?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totconsumo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    saldoatual?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    valorultimacompra?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    dataultimacompra?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    saldometa?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    compra?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    datacoleta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    opcadastrada15?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    opcoleta15?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totcompras15?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totconsumo15?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    saldoatual15?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    opcadastrada30?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    opcoleta30?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totcompras30?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totconsumo30?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    saldoatual30?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    opcompra15?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    opcompra30?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type ComprasUncheckedUpdateManyInput = {
    idcompras?: IntFieldUpdateOperationsInput | number
    chavearquivo?: NullableStringFieldUpdateOperationsInput | string | null
    porcentagem?: NullableIntFieldUpdateOperationsInput | number | null
    codigo_produto?: NullableStringFieldUpdateOperationsInput | string | null
    desc_tecnica?: NullableStringFieldUpdateOperationsInput | string | null
    saldo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    consumo12?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    mediaconsumo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    opcompra?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    opcompraEntregue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    opfinalizada?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    opemprocesso?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    opcadastrada?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    opcoleta?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totcompras?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totconsumo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    saldoatual?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    valorultimacompra?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    dataultimacompra?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    saldometa?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    compra?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    datacoleta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    opcadastrada15?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    opcoleta15?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totcompras15?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totconsumo15?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    saldoatual15?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    opcadastrada30?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    opcoleta30?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totcompras30?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totconsumo30?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    saldoatual30?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    opcompra15?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    opcompra30?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type NecessidadeCreateInput = {
    dtrelatorio: Date | string
    codigo_produto?: string | null
    desc_tecnica?: string | null
    dtultcompra?: Date | string | null
    vlrultcompra?: Decimal | DecimalJsLike | number | string | null
    saldoinv?: Decimal | DecimalJsLike | number | string | null
    dtinventario?: Date | string | null
    opfinalizada?: Decimal | DecimalJsLike | number | string | null
    opemprocesso?: Decimal | DecimalJsLike | number | string | null
    compraentregue?: Decimal | DecimalJsLike | number | string | null
    compraparcial?: Decimal | DecimalJsLike | number | string | null
    saldoatual?: Decimal | DecimalJsLike | number | string | null
    compraprevista?: Decimal | DecimalJsLike | number | string | null
    opcadastrada?: Decimal | DecimalJsLike | number | string | null
    opcoleta?: Decimal | DecimalJsLike | number | string | null
    dtcoleta?: Date | string | null
    saldonecessidade?: Decimal | DecimalJsLike | number | string | null
    dtnecessidade?: Date | string | null
    vlrpedido?: Decimal | DecimalJsLike | number | string | null
    vlrcompra?: Decimal | DecimalJsLike | number | string | null
    stcompra?: boolean | null
    mediaconsumo?: Decimal | DecimalJsLike | number | string | null
    processo?: string | null
  }

  export type NecessidadeUncheckedCreateInput = {
    idnecessidade?: number
    dtrelatorio: Date | string
    codigo_produto?: string | null
    desc_tecnica?: string | null
    dtultcompra?: Date | string | null
    vlrultcompra?: Decimal | DecimalJsLike | number | string | null
    saldoinv?: Decimal | DecimalJsLike | number | string | null
    dtinventario?: Date | string | null
    opfinalizada?: Decimal | DecimalJsLike | number | string | null
    opemprocesso?: Decimal | DecimalJsLike | number | string | null
    compraentregue?: Decimal | DecimalJsLike | number | string | null
    compraparcial?: Decimal | DecimalJsLike | number | string | null
    saldoatual?: Decimal | DecimalJsLike | number | string | null
    compraprevista?: Decimal | DecimalJsLike | number | string | null
    opcadastrada?: Decimal | DecimalJsLike | number | string | null
    opcoleta?: Decimal | DecimalJsLike | number | string | null
    dtcoleta?: Date | string | null
    saldonecessidade?: Decimal | DecimalJsLike | number | string | null
    dtnecessidade?: Date | string | null
    vlrpedido?: Decimal | DecimalJsLike | number | string | null
    vlrcompra?: Decimal | DecimalJsLike | number | string | null
    stcompra?: boolean | null
    mediaconsumo?: Decimal | DecimalJsLike | number | string | null
    processo?: string | null
  }

  export type NecessidadeUpdateInput = {
    dtrelatorio?: DateTimeFieldUpdateOperationsInput | Date | string
    codigo_produto?: NullableStringFieldUpdateOperationsInput | string | null
    desc_tecnica?: NullableStringFieldUpdateOperationsInput | string | null
    dtultcompra?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vlrultcompra?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    saldoinv?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    dtinventario?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    opfinalizada?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    opemprocesso?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    compraentregue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    compraparcial?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    saldoatual?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    compraprevista?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    opcadastrada?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    opcoleta?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    dtcoleta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    saldonecessidade?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    dtnecessidade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vlrpedido?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    vlrcompra?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stcompra?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mediaconsumo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    processo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NecessidadeUncheckedUpdateInput = {
    idnecessidade?: IntFieldUpdateOperationsInput | number
    dtrelatorio?: DateTimeFieldUpdateOperationsInput | Date | string
    codigo_produto?: NullableStringFieldUpdateOperationsInput | string | null
    desc_tecnica?: NullableStringFieldUpdateOperationsInput | string | null
    dtultcompra?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vlrultcompra?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    saldoinv?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    dtinventario?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    opfinalizada?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    opemprocesso?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    compraentregue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    compraparcial?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    saldoatual?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    compraprevista?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    opcadastrada?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    opcoleta?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    dtcoleta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    saldonecessidade?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    dtnecessidade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vlrpedido?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    vlrcompra?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stcompra?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mediaconsumo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    processo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NecessidadeCreateManyInput = {
    idnecessidade?: number
    dtrelatorio: Date | string
    codigo_produto?: string | null
    desc_tecnica?: string | null
    dtultcompra?: Date | string | null
    vlrultcompra?: Decimal | DecimalJsLike | number | string | null
    saldoinv?: Decimal | DecimalJsLike | number | string | null
    dtinventario?: Date | string | null
    opfinalizada?: Decimal | DecimalJsLike | number | string | null
    opemprocesso?: Decimal | DecimalJsLike | number | string | null
    compraentregue?: Decimal | DecimalJsLike | number | string | null
    compraparcial?: Decimal | DecimalJsLike | number | string | null
    saldoatual?: Decimal | DecimalJsLike | number | string | null
    compraprevista?: Decimal | DecimalJsLike | number | string | null
    opcadastrada?: Decimal | DecimalJsLike | number | string | null
    opcoleta?: Decimal | DecimalJsLike | number | string | null
    dtcoleta?: Date | string | null
    saldonecessidade?: Decimal | DecimalJsLike | number | string | null
    dtnecessidade?: Date | string | null
    vlrpedido?: Decimal | DecimalJsLike | number | string | null
    vlrcompra?: Decimal | DecimalJsLike | number | string | null
    stcompra?: boolean | null
    mediaconsumo?: Decimal | DecimalJsLike | number | string | null
    processo?: string | null
  }

  export type NecessidadeUpdateManyMutationInput = {
    dtrelatorio?: DateTimeFieldUpdateOperationsInput | Date | string
    codigo_produto?: NullableStringFieldUpdateOperationsInput | string | null
    desc_tecnica?: NullableStringFieldUpdateOperationsInput | string | null
    dtultcompra?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vlrultcompra?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    saldoinv?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    dtinventario?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    opfinalizada?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    opemprocesso?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    compraentregue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    compraparcial?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    saldoatual?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    compraprevista?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    opcadastrada?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    opcoleta?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    dtcoleta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    saldonecessidade?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    dtnecessidade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vlrpedido?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    vlrcompra?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stcompra?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mediaconsumo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    processo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NecessidadeUncheckedUpdateManyInput = {
    idnecessidade?: IntFieldUpdateOperationsInput | number
    dtrelatorio?: DateTimeFieldUpdateOperationsInput | Date | string
    codigo_produto?: NullableStringFieldUpdateOperationsInput | string | null
    desc_tecnica?: NullableStringFieldUpdateOperationsInput | string | null
    dtultcompra?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vlrultcompra?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    saldoinv?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    dtinventario?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    opfinalizada?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    opemprocesso?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    compraentregue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    compraparcial?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    saldoatual?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    compraprevista?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    opcadastrada?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    opcoleta?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    dtcoleta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    saldonecessidade?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    dtnecessidade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vlrpedido?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    vlrcompra?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stcompra?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mediaconsumo?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    processo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PainelCreateInput = {
    idnivel: number
    nrpainel: number
    status?: string
    descricao: string
  }

  export type PainelUncheckedCreateInput = {
    idpainel?: number
    idnivel: number
    nrpainel: number
    status?: string
    descricao: string
  }

  export type PainelUpdateInput = {
    idnivel?: IntFieldUpdateOperationsInput | number
    nrpainel?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type PainelUncheckedUpdateInput = {
    idpainel?: IntFieldUpdateOperationsInput | number
    idnivel?: IntFieldUpdateOperationsInput | number
    nrpainel?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type PainelCreateManyInput = {
    idpainel?: number
    idnivel: number
    nrpainel: number
    status?: string
    descricao: string
  }

  export type PainelUpdateManyMutationInput = {
    idnivel?: IntFieldUpdateOperationsInput | number
    nrpainel?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
  }

  export type PainelUncheckedUpdateManyInput = {
    idpainel?: IntFieldUpdateOperationsInput | number
    idnivel?: IntFieldUpdateOperationsInput | number
    nrpainel?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
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
    search?: string
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
    search?: string
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

  export type UsuarioOrderByRelevanceInput = {
    fields: UsuarioOrderByRelevanceFieldEnum | UsuarioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
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
    search?: string
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
    search?: string
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

  export type NivelOrderByRelevanceInput = {
    fields: NivelOrderByRelevanceFieldEnum | NivelOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
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

  export type LoginOrderByRelevanceInput = {
    fields: LoginOrderByRelevanceFieldEnum | LoginOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
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

  export type MenuOrderByRelevanceInput = {
    fields: MenuOrderByRelevanceFieldEnum | MenuOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
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

  export type MenuitemOrderByRelevanceInput = {
    fields: MenuitemOrderByRelevanceFieldEnum | MenuitemOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
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

  export type ColunaOrderByRelevanceInput = {
    fields: ColunaOrderByRelevanceFieldEnum | ColunaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
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
    fixa?: SortOrder
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
    fixa?: SortOrder
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
    fixa?: SortOrder
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

  export type UsuariocolunaOrderByRelevanceInput = {
    fields: UsuariocolunaOrderByRelevanceFieldEnum | UsuariocolunaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
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

  export type UnidadeOrderByRelevanceInput = {
    fields: UnidadeOrderByRelevanceFieldEnum | UnidadeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
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

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type CustoiqlOrderByRelevanceInput = {
    fields: CustoiqlOrderByRelevanceFieldEnum | CustoiqlOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CustoiqlCountOrderByAggregateInput = {
    id?: SortOrder
    numero_op?: SortOrder
    produzido?: SortOrder
    data_finalizacao?: SortOrder
    codigo_produto?: SortOrder
    desc_tecnica?: SortOrder
    quantidade_final?: SortOrder
    descricao?: SortOrder
    valor_unitario?: SortOrder
    custo?: SortOrder
    quantidade_produzida?: SortOrder
  }

  export type CustoiqlAvgOrderByAggregateInput = {
    id?: SortOrder
    quantidade_final?: SortOrder
    valor_unitario?: SortOrder
    custo?: SortOrder
    quantidade_produzida?: SortOrder
  }

  export type CustoiqlMaxOrderByAggregateInput = {
    id?: SortOrder
    numero_op?: SortOrder
    produzido?: SortOrder
    data_finalizacao?: SortOrder
    codigo_produto?: SortOrder
    desc_tecnica?: SortOrder
    quantidade_final?: SortOrder
    descricao?: SortOrder
    valor_unitario?: SortOrder
    custo?: SortOrder
    quantidade_produzida?: SortOrder
  }

  export type CustoiqlMinOrderByAggregateInput = {
    id?: SortOrder
    numero_op?: SortOrder
    produzido?: SortOrder
    data_finalizacao?: SortOrder
    codigo_produto?: SortOrder
    desc_tecnica?: SortOrder
    quantidade_final?: SortOrder
    descricao?: SortOrder
    valor_unitario?: SortOrder
    custo?: SortOrder
    quantidade_produzida?: SortOrder
  }

  export type CustoiqlSumOrderByAggregateInput = {
    id?: SortOrder
    quantidade_final?: SortOrder
    valor_unitario?: SortOrder
    custo?: SortOrder
    quantidade_produzida?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type InventarioOrderByRelevanceInput = {
    fields: InventarioOrderByRelevanceFieldEnum | InventarioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type InventarioCountOrderByAggregateInput = {
    id_inv?: SortOrder
    produto?: SortOrder
    coletor?: SortOrder
    quantidade?: SortOrder
    cod_produto?: SortOrder
    Codigo_tipo_item?: SortOrder
    lote?: SortOrder
    lote_original?: SortOrder
    Lote_interno?: SortOrder
    Data_validade_prod?: SortOrder
    Desc_tecnica?: SortOrder
    Data?: SortOrder
    Unidade_estoque?: SortOrder
    Unidade_compra?: SortOrder
    codigo_embalagem?: SortOrder
    estoque?: SortOrder
  }

  export type InventarioAvgOrderByAggregateInput = {
    id_inv?: SortOrder
    quantidade?: SortOrder
    estoque?: SortOrder
  }

  export type InventarioMaxOrderByAggregateInput = {
    id_inv?: SortOrder
    produto?: SortOrder
    coletor?: SortOrder
    quantidade?: SortOrder
    cod_produto?: SortOrder
    Codigo_tipo_item?: SortOrder
    lote?: SortOrder
    lote_original?: SortOrder
    Lote_interno?: SortOrder
    Data_validade_prod?: SortOrder
    Desc_tecnica?: SortOrder
    Data?: SortOrder
    Unidade_estoque?: SortOrder
    Unidade_compra?: SortOrder
    codigo_embalagem?: SortOrder
    estoque?: SortOrder
  }

  export type InventarioMinOrderByAggregateInput = {
    id_inv?: SortOrder
    produto?: SortOrder
    coletor?: SortOrder
    quantidade?: SortOrder
    cod_produto?: SortOrder
    Codigo_tipo_item?: SortOrder
    lote?: SortOrder
    lote_original?: SortOrder
    Lote_interno?: SortOrder
    Data_validade_prod?: SortOrder
    Desc_tecnica?: SortOrder
    Data?: SortOrder
    Unidade_estoque?: SortOrder
    Unidade_compra?: SortOrder
    codigo_embalagem?: SortOrder
    estoque?: SortOrder
  }

  export type InventarioSumOrderByAggregateInput = {
    id_inv?: SortOrder
    quantidade?: SortOrder
    estoque?: SortOrder
  }

  export type BytesFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel>
    in?: Buffer[]
    notIn?: Buffer[]
    not?: NestedBytesFilter<$PrismaModel> | Buffer
  }

  export type SendmailOrderByRelevanceInput = {
    fields: SendmailOrderByRelevanceFieldEnum | SendmailOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SendmailCountOrderByAggregateInput = {
    idsendmail?: SortOrder
    destinatario?: SortOrder
    html?: SortOrder
    subject?: SortOrder
    idusercreateAt?: SortOrder
    createdAt?: SortOrder
    iduserupdatedAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    idsolicitante?: SortOrder
    idusuarioaprovacao?: SortOrder
    idusuariocotacao?: SortOrder
    idusuarioaprovacaodir?: SortOrder
    idusuariocompra?: SortOrder
    idusuarioentrega?: SortOrder
    idcompra?: SortOrder
    attachments?: SortOrder
  }

  export type SendmailAvgOrderByAggregateInput = {
    idsendmail?: SortOrder
    idusercreateAt?: SortOrder
    iduserupdatedAt?: SortOrder
    idsolicitante?: SortOrder
    idusuarioaprovacao?: SortOrder
    idusuariocotacao?: SortOrder
    idusuarioaprovacaodir?: SortOrder
    idusuariocompra?: SortOrder
    idusuarioentrega?: SortOrder
    idcompra?: SortOrder
  }

  export type SendmailMaxOrderByAggregateInput = {
    idsendmail?: SortOrder
    destinatario?: SortOrder
    html?: SortOrder
    subject?: SortOrder
    idusercreateAt?: SortOrder
    createdAt?: SortOrder
    iduserupdatedAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    idsolicitante?: SortOrder
    idusuarioaprovacao?: SortOrder
    idusuariocotacao?: SortOrder
    idusuarioaprovacaodir?: SortOrder
    idusuariocompra?: SortOrder
    idusuarioentrega?: SortOrder
    idcompra?: SortOrder
    attachments?: SortOrder
  }

  export type SendmailMinOrderByAggregateInput = {
    idsendmail?: SortOrder
    destinatario?: SortOrder
    html?: SortOrder
    subject?: SortOrder
    idusercreateAt?: SortOrder
    createdAt?: SortOrder
    iduserupdatedAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    idsolicitante?: SortOrder
    idusuarioaprovacao?: SortOrder
    idusuariocotacao?: SortOrder
    idusuarioaprovacaodir?: SortOrder
    idusuariocompra?: SortOrder
    idusuarioentrega?: SortOrder
    idcompra?: SortOrder
    attachments?: SortOrder
  }

  export type SendmailSumOrderByAggregateInput = {
    idsendmail?: SortOrder
    idusercreateAt?: SortOrder
    iduserupdatedAt?: SortOrder
    idsolicitante?: SortOrder
    idusuarioaprovacao?: SortOrder
    idusuariocotacao?: SortOrder
    idusuarioaprovacaodir?: SortOrder
    idusuariocompra?: SortOrder
    idusuarioentrega?: SortOrder
    idcompra?: SortOrder
  }

  export type BytesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel>
    in?: Buffer[]
    notIn?: Buffer[]
    not?: NestedBytesWithAggregatesFilter<$PrismaModel> | Buffer
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBytesFilter<$PrismaModel>
    _max?: NestedBytesFilter<$PrismaModel>
  }

  export type ResumocomprasOrderByRelevanceInput = {
    fields: ResumocomprasOrderByRelevanceFieldEnum | ResumocomprasOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ResumocomprasCountOrderByAggregateInput = {
    id?: SortOrder
    Apelido_empresa?: SortOrder
    Apelido_estabelecimento?: SortOrder
    Codigo_produto?: SortOrder
    Unidade_estoque?: SortOrder
    Unidade_compra?: SortOrder
    Desc_tecnica?: SortOrder
    Estoque_minimo?: SortOrder
    Lote_compra?: SortOrder
    mes1?: SortOrder
    mes2?: SortOrder
    mes3?: SortOrder
    mes4?: SortOrder
    mes5?: SortOrder
    mes6?: SortOrder
    mes7?: SortOrder
    mes8?: SortOrder
    mes9?: SortOrder
    mes10?: SortOrder
    mes11?: SortOrder
    mes12?: SortOrder
    compras?: SortOrder
    opcadastradas?: SortOrder
    saldoestoque?: SortOrder
    coleta?: SortOrder
  }

  export type ResumocomprasAvgOrderByAggregateInput = {
    id?: SortOrder
    Estoque_minimo?: SortOrder
    Lote_compra?: SortOrder
    mes1?: SortOrder
    mes2?: SortOrder
    mes3?: SortOrder
    mes4?: SortOrder
    mes5?: SortOrder
    mes6?: SortOrder
    mes7?: SortOrder
    mes8?: SortOrder
    mes9?: SortOrder
    mes10?: SortOrder
    mes11?: SortOrder
    mes12?: SortOrder
    compras?: SortOrder
    opcadastradas?: SortOrder
    saldoestoque?: SortOrder
    coleta?: SortOrder
  }

  export type ResumocomprasMaxOrderByAggregateInput = {
    id?: SortOrder
    Apelido_empresa?: SortOrder
    Apelido_estabelecimento?: SortOrder
    Codigo_produto?: SortOrder
    Unidade_estoque?: SortOrder
    Unidade_compra?: SortOrder
    Desc_tecnica?: SortOrder
    Estoque_minimo?: SortOrder
    Lote_compra?: SortOrder
    mes1?: SortOrder
    mes2?: SortOrder
    mes3?: SortOrder
    mes4?: SortOrder
    mes5?: SortOrder
    mes6?: SortOrder
    mes7?: SortOrder
    mes8?: SortOrder
    mes9?: SortOrder
    mes10?: SortOrder
    mes11?: SortOrder
    mes12?: SortOrder
    compras?: SortOrder
    opcadastradas?: SortOrder
    saldoestoque?: SortOrder
    coleta?: SortOrder
  }

  export type ResumocomprasMinOrderByAggregateInput = {
    id?: SortOrder
    Apelido_empresa?: SortOrder
    Apelido_estabelecimento?: SortOrder
    Codigo_produto?: SortOrder
    Unidade_estoque?: SortOrder
    Unidade_compra?: SortOrder
    Desc_tecnica?: SortOrder
    Estoque_minimo?: SortOrder
    Lote_compra?: SortOrder
    mes1?: SortOrder
    mes2?: SortOrder
    mes3?: SortOrder
    mes4?: SortOrder
    mes5?: SortOrder
    mes6?: SortOrder
    mes7?: SortOrder
    mes8?: SortOrder
    mes9?: SortOrder
    mes10?: SortOrder
    mes11?: SortOrder
    mes12?: SortOrder
    compras?: SortOrder
    opcadastradas?: SortOrder
    saldoestoque?: SortOrder
    coleta?: SortOrder
  }

  export type ResumocomprasSumOrderByAggregateInput = {
    id?: SortOrder
    Estoque_minimo?: SortOrder
    Lote_compra?: SortOrder
    mes1?: SortOrder
    mes2?: SortOrder
    mes3?: SortOrder
    mes4?: SortOrder
    mes5?: SortOrder
    mes6?: SortOrder
    mes7?: SortOrder
    mes8?: SortOrder
    mes9?: SortOrder
    mes10?: SortOrder
    mes11?: SortOrder
    mes12?: SortOrder
    compras?: SortOrder
    opcadastradas?: SortOrder
    saldoestoque?: SortOrder
    coleta?: SortOrder
  }

  export type ComprasOrderByRelevanceInput = {
    fields: ComprasOrderByRelevanceFieldEnum | ComprasOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ComprasCountOrderByAggregateInput = {
    idcompras?: SortOrder
    chavearquivo?: SortOrder
    porcentagem?: SortOrder
    codigo_produto?: SortOrder
    desc_tecnica?: SortOrder
    saldo?: SortOrder
    consumo12?: SortOrder
    mediaconsumo?: SortOrder
    opcompra?: SortOrder
    opcompraEntregue?: SortOrder
    opfinalizada?: SortOrder
    opemprocesso?: SortOrder
    opcadastrada?: SortOrder
    opcoleta?: SortOrder
    totcompras?: SortOrder
    totconsumo?: SortOrder
    saldoatual?: SortOrder
    valorultimacompra?: SortOrder
    dataultimacompra?: SortOrder
    saldometa?: SortOrder
    compra?: SortOrder
    datacoleta?: SortOrder
    opcadastrada15?: SortOrder
    opcoleta15?: SortOrder
    totcompras15?: SortOrder
    totconsumo15?: SortOrder
    saldoatual15?: SortOrder
    opcadastrada30?: SortOrder
    opcoleta30?: SortOrder
    totcompras30?: SortOrder
    totconsumo30?: SortOrder
    saldoatual30?: SortOrder
    opcompra15?: SortOrder
    opcompra30?: SortOrder
  }

  export type ComprasAvgOrderByAggregateInput = {
    idcompras?: SortOrder
    porcentagem?: SortOrder
    saldo?: SortOrder
    consumo12?: SortOrder
    mediaconsumo?: SortOrder
    opcompra?: SortOrder
    opcompraEntregue?: SortOrder
    opfinalizada?: SortOrder
    opemprocesso?: SortOrder
    opcadastrada?: SortOrder
    opcoleta?: SortOrder
    totcompras?: SortOrder
    totconsumo?: SortOrder
    saldoatual?: SortOrder
    valorultimacompra?: SortOrder
    saldometa?: SortOrder
    compra?: SortOrder
    opcadastrada15?: SortOrder
    opcoleta15?: SortOrder
    totcompras15?: SortOrder
    totconsumo15?: SortOrder
    saldoatual15?: SortOrder
    opcadastrada30?: SortOrder
    opcoleta30?: SortOrder
    totcompras30?: SortOrder
    totconsumo30?: SortOrder
    saldoatual30?: SortOrder
    opcompra15?: SortOrder
    opcompra30?: SortOrder
  }

  export type ComprasMaxOrderByAggregateInput = {
    idcompras?: SortOrder
    chavearquivo?: SortOrder
    porcentagem?: SortOrder
    codigo_produto?: SortOrder
    desc_tecnica?: SortOrder
    saldo?: SortOrder
    consumo12?: SortOrder
    mediaconsumo?: SortOrder
    opcompra?: SortOrder
    opcompraEntregue?: SortOrder
    opfinalizada?: SortOrder
    opemprocesso?: SortOrder
    opcadastrada?: SortOrder
    opcoleta?: SortOrder
    totcompras?: SortOrder
    totconsumo?: SortOrder
    saldoatual?: SortOrder
    valorultimacompra?: SortOrder
    dataultimacompra?: SortOrder
    saldometa?: SortOrder
    compra?: SortOrder
    datacoleta?: SortOrder
    opcadastrada15?: SortOrder
    opcoleta15?: SortOrder
    totcompras15?: SortOrder
    totconsumo15?: SortOrder
    saldoatual15?: SortOrder
    opcadastrada30?: SortOrder
    opcoleta30?: SortOrder
    totcompras30?: SortOrder
    totconsumo30?: SortOrder
    saldoatual30?: SortOrder
    opcompra15?: SortOrder
    opcompra30?: SortOrder
  }

  export type ComprasMinOrderByAggregateInput = {
    idcompras?: SortOrder
    chavearquivo?: SortOrder
    porcentagem?: SortOrder
    codigo_produto?: SortOrder
    desc_tecnica?: SortOrder
    saldo?: SortOrder
    consumo12?: SortOrder
    mediaconsumo?: SortOrder
    opcompra?: SortOrder
    opcompraEntregue?: SortOrder
    opfinalizada?: SortOrder
    opemprocesso?: SortOrder
    opcadastrada?: SortOrder
    opcoleta?: SortOrder
    totcompras?: SortOrder
    totconsumo?: SortOrder
    saldoatual?: SortOrder
    valorultimacompra?: SortOrder
    dataultimacompra?: SortOrder
    saldometa?: SortOrder
    compra?: SortOrder
    datacoleta?: SortOrder
    opcadastrada15?: SortOrder
    opcoleta15?: SortOrder
    totcompras15?: SortOrder
    totconsumo15?: SortOrder
    saldoatual15?: SortOrder
    opcadastrada30?: SortOrder
    opcoleta30?: SortOrder
    totcompras30?: SortOrder
    totconsumo30?: SortOrder
    saldoatual30?: SortOrder
    opcompra15?: SortOrder
    opcompra30?: SortOrder
  }

  export type ComprasSumOrderByAggregateInput = {
    idcompras?: SortOrder
    porcentagem?: SortOrder
    saldo?: SortOrder
    consumo12?: SortOrder
    mediaconsumo?: SortOrder
    opcompra?: SortOrder
    opcompraEntregue?: SortOrder
    opfinalizada?: SortOrder
    opemprocesso?: SortOrder
    opcadastrada?: SortOrder
    opcoleta?: SortOrder
    totcompras?: SortOrder
    totconsumo?: SortOrder
    saldoatual?: SortOrder
    valorultimacompra?: SortOrder
    saldometa?: SortOrder
    compra?: SortOrder
    opcadastrada15?: SortOrder
    opcoleta15?: SortOrder
    totcompras15?: SortOrder
    totconsumo15?: SortOrder
    saldoatual15?: SortOrder
    opcadastrada30?: SortOrder
    opcoleta30?: SortOrder
    totcompras30?: SortOrder
    totconsumo30?: SortOrder
    saldoatual30?: SortOrder
    opcompra15?: SortOrder
    opcompra30?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NecessidadeOrderByRelevanceInput = {
    fields: NecessidadeOrderByRelevanceFieldEnum | NecessidadeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type NecessidadeCountOrderByAggregateInput = {
    idnecessidade?: SortOrder
    dtrelatorio?: SortOrder
    codigo_produto?: SortOrder
    desc_tecnica?: SortOrder
    dtultcompra?: SortOrder
    vlrultcompra?: SortOrder
    saldoinv?: SortOrder
    dtinventario?: SortOrder
    opfinalizada?: SortOrder
    opemprocesso?: SortOrder
    compraentregue?: SortOrder
    compraparcial?: SortOrder
    saldoatual?: SortOrder
    compraprevista?: SortOrder
    opcadastrada?: SortOrder
    opcoleta?: SortOrder
    dtcoleta?: SortOrder
    saldonecessidade?: SortOrder
    dtnecessidade?: SortOrder
    vlrpedido?: SortOrder
    vlrcompra?: SortOrder
    stcompra?: SortOrder
    mediaconsumo?: SortOrder
    processo?: SortOrder
  }

  export type NecessidadeAvgOrderByAggregateInput = {
    idnecessidade?: SortOrder
    vlrultcompra?: SortOrder
    saldoinv?: SortOrder
    opfinalizada?: SortOrder
    opemprocesso?: SortOrder
    compraentregue?: SortOrder
    compraparcial?: SortOrder
    saldoatual?: SortOrder
    compraprevista?: SortOrder
    opcadastrada?: SortOrder
    opcoleta?: SortOrder
    saldonecessidade?: SortOrder
    vlrpedido?: SortOrder
    vlrcompra?: SortOrder
    mediaconsumo?: SortOrder
  }

  export type NecessidadeMaxOrderByAggregateInput = {
    idnecessidade?: SortOrder
    dtrelatorio?: SortOrder
    codigo_produto?: SortOrder
    desc_tecnica?: SortOrder
    dtultcompra?: SortOrder
    vlrultcompra?: SortOrder
    saldoinv?: SortOrder
    dtinventario?: SortOrder
    opfinalizada?: SortOrder
    opemprocesso?: SortOrder
    compraentregue?: SortOrder
    compraparcial?: SortOrder
    saldoatual?: SortOrder
    compraprevista?: SortOrder
    opcadastrada?: SortOrder
    opcoleta?: SortOrder
    dtcoleta?: SortOrder
    saldonecessidade?: SortOrder
    dtnecessidade?: SortOrder
    vlrpedido?: SortOrder
    vlrcompra?: SortOrder
    stcompra?: SortOrder
    mediaconsumo?: SortOrder
    processo?: SortOrder
  }

  export type NecessidadeMinOrderByAggregateInput = {
    idnecessidade?: SortOrder
    dtrelatorio?: SortOrder
    codigo_produto?: SortOrder
    desc_tecnica?: SortOrder
    dtultcompra?: SortOrder
    vlrultcompra?: SortOrder
    saldoinv?: SortOrder
    dtinventario?: SortOrder
    opfinalizada?: SortOrder
    opemprocesso?: SortOrder
    compraentregue?: SortOrder
    compraparcial?: SortOrder
    saldoatual?: SortOrder
    compraprevista?: SortOrder
    opcadastrada?: SortOrder
    opcoleta?: SortOrder
    dtcoleta?: SortOrder
    saldonecessidade?: SortOrder
    dtnecessidade?: SortOrder
    vlrpedido?: SortOrder
    vlrcompra?: SortOrder
    stcompra?: SortOrder
    mediaconsumo?: SortOrder
    processo?: SortOrder
  }

  export type NecessidadeSumOrderByAggregateInput = {
    idnecessidade?: SortOrder
    vlrultcompra?: SortOrder
    saldoinv?: SortOrder
    opfinalizada?: SortOrder
    opemprocesso?: SortOrder
    compraentregue?: SortOrder
    compraparcial?: SortOrder
    saldoatual?: SortOrder
    compraprevista?: SortOrder
    opcadastrada?: SortOrder
    opcoleta?: SortOrder
    saldonecessidade?: SortOrder
    vlrpedido?: SortOrder
    vlrcompra?: SortOrder
    mediaconsumo?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type PainelOrderByRelevanceInput = {
    fields: PainelOrderByRelevanceFieldEnum | PainelOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PainelCountOrderByAggregateInput = {
    idpainel?: SortOrder
    idnivel?: SortOrder
    nrpainel?: SortOrder
    status?: SortOrder
    descricao?: SortOrder
  }

  export type PainelAvgOrderByAggregateInput = {
    idpainel?: SortOrder
    idnivel?: SortOrder
    nrpainel?: SortOrder
  }

  export type PainelMaxOrderByAggregateInput = {
    idpainel?: SortOrder
    idnivel?: SortOrder
    nrpainel?: SortOrder
    status?: SortOrder
    descricao?: SortOrder
  }

  export type PainelMinOrderByAggregateInput = {
    idpainel?: SortOrder
    idnivel?: SortOrder
    nrpainel?: SortOrder
    status?: SortOrder
    descricao?: SortOrder
  }

  export type PainelSumOrderByAggregateInput = {
    idpainel?: SortOrder
    idnivel?: SortOrder
    nrpainel?: SortOrder
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

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type BytesFieldUpdateOperationsInput = {
    set?: Buffer
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
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
    search?: string
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
    search?: string
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
    search?: string
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
    search?: string
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

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedBytesFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel>
    in?: Buffer[]
    notIn?: Buffer[]
    not?: NestedBytesFilter<$PrismaModel> | Buffer
  }

  export type NestedBytesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel>
    in?: Buffer[]
    notIn?: Buffer[]
    not?: NestedBytesWithAggregatesFilter<$PrismaModel> | Buffer
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBytesFilter<$PrismaModel>
    _max?: NestedBytesFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
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
    skipDuplicates?: boolean
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
    skipDuplicates?: boolean
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
    skipDuplicates?: boolean
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
    skipDuplicates?: boolean
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
    fixa?: boolean
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
    fixa?: boolean
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
    fixa?: BoolFieldUpdateOperationsInput | boolean
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
    fixa?: BoolFieldUpdateOperationsInput | boolean
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
    skipDuplicates?: boolean
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

  export type UsuarioCreateManyMenuInput = {
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
    idusuariocoluna?: number
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
     * @deprecated Use CustoiqlDefaultArgs instead
     */
    export type CustoiqlArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CustoiqlDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InventarioDefaultArgs instead
     */
    export type InventarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InventarioDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SendmailDefaultArgs instead
     */
    export type SendmailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SendmailDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ResumocomprasDefaultArgs instead
     */
    export type ResumocomprasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ResumocomprasDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ComprasDefaultArgs instead
     */
    export type ComprasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ComprasDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NecessidadeDefaultArgs instead
     */
    export type NecessidadeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NecessidadeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PainelDefaultArgs instead
     */
    export type PainelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PainelDefaultArgs<ExtArgs>

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