
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
 * Model categorias
 * 
 */
export type categorias = $Result.DefaultSelection<Prisma.$categoriasPayload>
/**
 * Model comercios
 * 
 */
export type comercios = $Result.DefaultSelection<Prisma.$comerciosPayload>
/**
 * Model notificaciones
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type notificaciones = $Result.DefaultSelection<Prisma.$notificacionesPayload>
/**
 * Model productos
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type productos = $Result.DefaultSelection<Prisma.$productosPayload>
/**
 * Model reservas
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type reservas = $Result.DefaultSelection<Prisma.$reservasPayload>
/**
 * Model usuarios
 * 
 */
export type usuarios = $Result.DefaultSelection<Prisma.$usuariosPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const reserva_estado: {
  pendiente: 'pendiente',
  confirmada: 'confirmada',
  cancelada: 'cancelada',
  entregada: 'entregada'
};

export type reserva_estado = (typeof reserva_estado)[keyof typeof reserva_estado]

}

export type reserva_estado = $Enums.reserva_estado

export const reserva_estado: typeof $Enums.reserva_estado

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Categorias
 * const categorias = await prisma.categorias.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Categorias
   * const categorias = await prisma.categorias.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.categorias`: Exposes CRUD operations for the **categorias** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categorias
    * const categorias = await prisma.categorias.findMany()
    * ```
    */
  get categorias(): Prisma.categoriasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comercios`: Exposes CRUD operations for the **comercios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comercios
    * const comercios = await prisma.comercios.findMany()
    * ```
    */
  get comercios(): Prisma.comerciosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notificaciones`: Exposes CRUD operations for the **notificaciones** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notificaciones
    * const notificaciones = await prisma.notificaciones.findMany()
    * ```
    */
  get notificaciones(): Prisma.notificacionesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productos`: Exposes CRUD operations for the **productos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Productos
    * const productos = await prisma.productos.findMany()
    * ```
    */
  get productos(): Prisma.productosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reservas`: Exposes CRUD operations for the **reservas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reservas
    * const reservas = await prisma.reservas.findMany()
    * ```
    */
  get reservas(): Prisma.reservasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuarios`: Exposes CRUD operations for the **usuarios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuarios.findMany()
    * ```
    */
  get usuarios(): Prisma.usuariosDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.17.0
   * Query Engine version: c0aafc03b8ef6cdced8654b9a817999e02457d6a
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    categorias: 'categorias',
    comercios: 'comercios',
    notificaciones: 'notificaciones',
    productos: 'productos',
    reservas: 'reservas',
    usuarios: 'usuarios'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "categorias" | "comercios" | "notificaciones" | "productos" | "reservas" | "usuarios"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      categorias: {
        payload: Prisma.$categoriasPayload<ExtArgs>
        fields: Prisma.categoriasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categoriasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categoriasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload>
          }
          findFirst: {
            args: Prisma.categoriasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categoriasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload>
          }
          findMany: {
            args: Prisma.categoriasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload>[]
          }
          create: {
            args: Prisma.categoriasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload>
          }
          createMany: {
            args: Prisma.categoriasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.categoriasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload>[]
          }
          delete: {
            args: Prisma.categoriasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload>
          }
          update: {
            args: Prisma.categoriasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload>
          }
          deleteMany: {
            args: Prisma.categoriasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.categoriasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.categoriasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload>[]
          }
          upsert: {
            args: Prisma.categoriasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriasPayload>
          }
          aggregate: {
            args: Prisma.CategoriasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategorias>
          }
          groupBy: {
            args: Prisma.categoriasGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriasGroupByOutputType>[]
          }
          count: {
            args: Prisma.categoriasCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriasCountAggregateOutputType> | number
          }
        }
      }
      comercios: {
        payload: Prisma.$comerciosPayload<ExtArgs>
        fields: Prisma.comerciosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.comerciosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comerciosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.comerciosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comerciosPayload>
          }
          findFirst: {
            args: Prisma.comerciosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comerciosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.comerciosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comerciosPayload>
          }
          findMany: {
            args: Prisma.comerciosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comerciosPayload>[]
          }
          create: {
            args: Prisma.comerciosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comerciosPayload>
          }
          createMany: {
            args: Prisma.comerciosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.comerciosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comerciosPayload>[]
          }
          delete: {
            args: Prisma.comerciosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comerciosPayload>
          }
          update: {
            args: Prisma.comerciosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comerciosPayload>
          }
          deleteMany: {
            args: Prisma.comerciosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.comerciosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.comerciosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comerciosPayload>[]
          }
          upsert: {
            args: Prisma.comerciosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$comerciosPayload>
          }
          aggregate: {
            args: Prisma.ComerciosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComercios>
          }
          groupBy: {
            args: Prisma.comerciosGroupByArgs<ExtArgs>
            result: $Utils.Optional<ComerciosGroupByOutputType>[]
          }
          count: {
            args: Prisma.comerciosCountArgs<ExtArgs>
            result: $Utils.Optional<ComerciosCountAggregateOutputType> | number
          }
        }
      }
      notificaciones: {
        payload: Prisma.$notificacionesPayload<ExtArgs>
        fields: Prisma.notificacionesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.notificacionesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificacionesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.notificacionesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificacionesPayload>
          }
          findFirst: {
            args: Prisma.notificacionesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificacionesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.notificacionesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificacionesPayload>
          }
          findMany: {
            args: Prisma.notificacionesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificacionesPayload>[]
          }
          create: {
            args: Prisma.notificacionesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificacionesPayload>
          }
          createMany: {
            args: Prisma.notificacionesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.notificacionesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificacionesPayload>[]
          }
          delete: {
            args: Prisma.notificacionesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificacionesPayload>
          }
          update: {
            args: Prisma.notificacionesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificacionesPayload>
          }
          deleteMany: {
            args: Prisma.notificacionesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.notificacionesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.notificacionesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificacionesPayload>[]
          }
          upsert: {
            args: Prisma.notificacionesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notificacionesPayload>
          }
          aggregate: {
            args: Prisma.NotificacionesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotificaciones>
          }
          groupBy: {
            args: Prisma.notificacionesGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificacionesGroupByOutputType>[]
          }
          count: {
            args: Prisma.notificacionesCountArgs<ExtArgs>
            result: $Utils.Optional<NotificacionesCountAggregateOutputType> | number
          }
        }
      }
      productos: {
        payload: Prisma.$productosPayload<ExtArgs>
        fields: Prisma.productosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.productosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.productosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productosPayload>
          }
          findFirst: {
            args: Prisma.productosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.productosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productosPayload>
          }
          findMany: {
            args: Prisma.productosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productosPayload>[]
          }
          create: {
            args: Prisma.productosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productosPayload>
          }
          createMany: {
            args: Prisma.productosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.productosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productosPayload>[]
          }
          delete: {
            args: Prisma.productosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productosPayload>
          }
          update: {
            args: Prisma.productosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productosPayload>
          }
          deleteMany: {
            args: Prisma.productosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.productosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.productosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productosPayload>[]
          }
          upsert: {
            args: Prisma.productosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productosPayload>
          }
          aggregate: {
            args: Prisma.ProductosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductos>
          }
          groupBy: {
            args: Prisma.productosGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductosGroupByOutputType>[]
          }
          count: {
            args: Prisma.productosCountArgs<ExtArgs>
            result: $Utils.Optional<ProductosCountAggregateOutputType> | number
          }
        }
      }
      reservas: {
        payload: Prisma.$reservasPayload<ExtArgs>
        fields: Prisma.reservasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.reservasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.reservasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservasPayload>
          }
          findFirst: {
            args: Prisma.reservasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.reservasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservasPayload>
          }
          findMany: {
            args: Prisma.reservasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservasPayload>[]
          }
          create: {
            args: Prisma.reservasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservasPayload>
          }
          createMany: {
            args: Prisma.reservasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.reservasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservasPayload>[]
          }
          delete: {
            args: Prisma.reservasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservasPayload>
          }
          update: {
            args: Prisma.reservasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservasPayload>
          }
          deleteMany: {
            args: Prisma.reservasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.reservasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.reservasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservasPayload>[]
          }
          upsert: {
            args: Prisma.reservasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$reservasPayload>
          }
          aggregate: {
            args: Prisma.ReservasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReservas>
          }
          groupBy: {
            args: Prisma.reservasGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReservasGroupByOutputType>[]
          }
          count: {
            args: Prisma.reservasCountArgs<ExtArgs>
            result: $Utils.Optional<ReservasCountAggregateOutputType> | number
          }
        }
      }
      usuarios: {
        payload: Prisma.$usuariosPayload<ExtArgs>
        fields: Prisma.usuariosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usuariosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usuariosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          findFirst: {
            args: Prisma.usuariosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usuariosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          findMany: {
            args: Prisma.usuariosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>[]
          }
          create: {
            args: Prisma.usuariosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          createMany: {
            args: Prisma.usuariosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usuariosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>[]
          }
          delete: {
            args: Prisma.usuariosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          update: {
            args: Prisma.usuariosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          deleteMany: {
            args: Prisma.usuariosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usuariosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usuariosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>[]
          }
          upsert: {
            args: Prisma.usuariosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          aggregate: {
            args: Prisma.UsuariosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuarios>
          }
          groupBy: {
            args: Prisma.usuariosGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuariosGroupByOutputType>[]
          }
          count: {
            args: Prisma.usuariosCountArgs<ExtArgs>
            result: $Utils.Optional<UsuariosCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    categorias?: categoriasOmit
    comercios?: comerciosOmit
    notificaciones?: notificacionesOmit
    productos?: productosOmit
    reservas?: reservasOmit
    usuarios?: usuariosOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'updateManyAndReturn'
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
   * Count Type CategoriasCountOutputType
   */

  export type CategoriasCountOutputType = {
    productos: number
  }

  export type CategoriasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productos?: boolean | CategoriasCountOutputTypeCountProductosArgs
  }

  // Custom InputTypes
  /**
   * CategoriasCountOutputType without action
   */
  export type CategoriasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriasCountOutputType
     */
    select?: CategoriasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriasCountOutputType without action
   */
  export type CategoriasCountOutputTypeCountProductosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productosWhereInput
  }


  /**
   * Count Type ComerciosCountOutputType
   */

  export type ComerciosCountOutputType = {
    productos: number
  }

  export type ComerciosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productos?: boolean | ComerciosCountOutputTypeCountProductosArgs
  }

  // Custom InputTypes
  /**
   * ComerciosCountOutputType without action
   */
  export type ComerciosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ComerciosCountOutputType
     */
    select?: ComerciosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ComerciosCountOutputType without action
   */
  export type ComerciosCountOutputTypeCountProductosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productosWhereInput
  }


  /**
   * Count Type ProductosCountOutputType
   */

  export type ProductosCountOutputType = {
    reservas: number
  }

  export type ProductosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservas?: boolean | ProductosCountOutputTypeCountReservasArgs
  }

  // Custom InputTypes
  /**
   * ProductosCountOutputType without action
   */
  export type ProductosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductosCountOutputType
     */
    select?: ProductosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductosCountOutputType without action
   */
  export type ProductosCountOutputTypeCountReservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reservasWhereInput
  }


  /**
   * Count Type UsuariosCountOutputType
   */

  export type UsuariosCountOutputType = {
    comercios: number
    notificaciones: number
    reservas: number
  }

  export type UsuariosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comercios?: boolean | UsuariosCountOutputTypeCountComerciosArgs
    notificaciones?: boolean | UsuariosCountOutputTypeCountNotificacionesArgs
    reservas?: boolean | UsuariosCountOutputTypeCountReservasArgs
  }

  // Custom InputTypes
  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuariosCountOutputType
     */
    select?: UsuariosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeCountComerciosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: comerciosWhereInput
  }

  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeCountNotificacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notificacionesWhereInput
  }

  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeCountReservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reservasWhereInput
  }


  /**
   * Models
   */

  /**
   * Model categorias
   */

  export type AggregateCategorias = {
    _count: CategoriasCountAggregateOutputType | null
    _avg: CategoriasAvgAggregateOutputType | null
    _sum: CategoriasSumAggregateOutputType | null
    _min: CategoriasMinAggregateOutputType | null
    _max: CategoriasMaxAggregateOutputType | null
  }

  export type CategoriasAvgAggregateOutputType = {
    id_categoria: number | null
  }

  export type CategoriasSumAggregateOutputType = {
    id_categoria: bigint | null
  }

  export type CategoriasMinAggregateOutputType = {
    id_categoria: bigint | null
    nombre: string | null
    descripcion: string | null
    updated_at: Date | null
  }

  export type CategoriasMaxAggregateOutputType = {
    id_categoria: bigint | null
    nombre: string | null
    descripcion: string | null
    updated_at: Date | null
  }

  export type CategoriasCountAggregateOutputType = {
    id_categoria: number
    nombre: number
    descripcion: number
    updated_at: number
    _all: number
  }


  export type CategoriasAvgAggregateInputType = {
    id_categoria?: true
  }

  export type CategoriasSumAggregateInputType = {
    id_categoria?: true
  }

  export type CategoriasMinAggregateInputType = {
    id_categoria?: true
    nombre?: true
    descripcion?: true
    updated_at?: true
  }

  export type CategoriasMaxAggregateInputType = {
    id_categoria?: true
    nombre?: true
    descripcion?: true
    updated_at?: true
  }

  export type CategoriasCountAggregateInputType = {
    id_categoria?: true
    nombre?: true
    descripcion?: true
    updated_at?: true
    _all?: true
  }

  export type CategoriasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categorias to aggregate.
     */
    where?: categoriasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: categoriasOrderByWithRelationInput | categoriasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoriasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categorias
    **/
    _count?: true | CategoriasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriasMaxAggregateInputType
  }

  export type GetCategoriasAggregateType<T extends CategoriasAggregateArgs> = {
        [P in keyof T & keyof AggregateCategorias]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategorias[P]>
      : GetScalarType<T[P], AggregateCategorias[P]>
  }




  export type categoriasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoriasWhereInput
    orderBy?: categoriasOrderByWithAggregationInput | categoriasOrderByWithAggregationInput[]
    by: CategoriasScalarFieldEnum[] | CategoriasScalarFieldEnum
    having?: categoriasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriasCountAggregateInputType | true
    _avg?: CategoriasAvgAggregateInputType
    _sum?: CategoriasSumAggregateInputType
    _min?: CategoriasMinAggregateInputType
    _max?: CategoriasMaxAggregateInputType
  }

  export type CategoriasGroupByOutputType = {
    id_categoria: bigint
    nombre: string
    descripcion: string | null
    updated_at: Date
    _count: CategoriasCountAggregateOutputType | null
    _avg: CategoriasAvgAggregateOutputType | null
    _sum: CategoriasSumAggregateOutputType | null
    _min: CategoriasMinAggregateOutputType | null
    _max: CategoriasMaxAggregateOutputType | null
  }

  type GetCategoriasGroupByPayload<T extends categoriasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriasGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriasGroupByOutputType[P]>
        }
      >
    >


  export type categoriasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_categoria?: boolean
    nombre?: boolean
    descripcion?: boolean
    updated_at?: boolean
    productos?: boolean | categorias$productosArgs<ExtArgs>
    _count?: boolean | CategoriasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categorias"]>

  export type categoriasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_categoria?: boolean
    nombre?: boolean
    descripcion?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["categorias"]>

  export type categoriasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_categoria?: boolean
    nombre?: boolean
    descripcion?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["categorias"]>

  export type categoriasSelectScalar = {
    id_categoria?: boolean
    nombre?: boolean
    descripcion?: boolean
    updated_at?: boolean
  }

  export type categoriasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_categoria" | "nombre" | "descripcion" | "updated_at", ExtArgs["result"]["categorias"]>
  export type categoriasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productos?: boolean | categorias$productosArgs<ExtArgs>
    _count?: boolean | CategoriasCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type categoriasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type categoriasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $categoriasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "categorias"
    objects: {
      productos: Prisma.$productosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_categoria: bigint
      nombre: string
      descripcion: string | null
      updated_at: Date
    }, ExtArgs["result"]["categorias"]>
    composites: {}
  }

  type categoriasGetPayload<S extends boolean | null | undefined | categoriasDefaultArgs> = $Result.GetResult<Prisma.$categoriasPayload, S>

  type categoriasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<categoriasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriasCountAggregateInputType | true
    }

  export interface categoriasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['categorias'], meta: { name: 'categorias' } }
    /**
     * Find zero or one Categorias that matches the filter.
     * @param {categoriasFindUniqueArgs} args - Arguments to find a Categorias
     * @example
     * // Get one Categorias
     * const categorias = await prisma.categorias.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends categoriasFindUniqueArgs>(args: SelectSubset<T, categoriasFindUniqueArgs<ExtArgs>>): Prisma__categoriasClient<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categorias that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {categoriasFindUniqueOrThrowArgs} args - Arguments to find a Categorias
     * @example
     * // Get one Categorias
     * const categorias = await prisma.categorias.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends categoriasFindUniqueOrThrowArgs>(args: SelectSubset<T, categoriasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__categoriasClient<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriasFindFirstArgs} args - Arguments to find a Categorias
     * @example
     * // Get one Categorias
     * const categorias = await prisma.categorias.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends categoriasFindFirstArgs>(args?: SelectSubset<T, categoriasFindFirstArgs<ExtArgs>>): Prisma__categoriasClient<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categorias that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriasFindFirstOrThrowArgs} args - Arguments to find a Categorias
     * @example
     * // Get one Categorias
     * const categorias = await prisma.categorias.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends categoriasFindFirstOrThrowArgs>(args?: SelectSubset<T, categoriasFindFirstOrThrowArgs<ExtArgs>>): Prisma__categoriasClient<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categorias
     * const categorias = await prisma.categorias.findMany()
     * 
     * // Get first 10 Categorias
     * const categorias = await prisma.categorias.findMany({ take: 10 })
     * 
     * // Only select the `id_categoria`
     * const categoriasWithId_categoriaOnly = await prisma.categorias.findMany({ select: { id_categoria: true } })
     * 
     */
    findMany<T extends categoriasFindManyArgs>(args?: SelectSubset<T, categoriasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categorias.
     * @param {categoriasCreateArgs} args - Arguments to create a Categorias.
     * @example
     * // Create one Categorias
     * const Categorias = await prisma.categorias.create({
     *   data: {
     *     // ... data to create a Categorias
     *   }
     * })
     * 
     */
    create<T extends categoriasCreateArgs>(args: SelectSubset<T, categoriasCreateArgs<ExtArgs>>): Prisma__categoriasClient<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categorias.
     * @param {categoriasCreateManyArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categorias = await prisma.categorias.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends categoriasCreateManyArgs>(args?: SelectSubset<T, categoriasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categorias and returns the data saved in the database.
     * @param {categoriasCreateManyAndReturnArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categorias = await prisma.categorias.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categorias and only return the `id_categoria`
     * const categoriasWithId_categoriaOnly = await prisma.categorias.createManyAndReturn({
     *   select: { id_categoria: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends categoriasCreateManyAndReturnArgs>(args?: SelectSubset<T, categoriasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categorias.
     * @param {categoriasDeleteArgs} args - Arguments to delete one Categorias.
     * @example
     * // Delete one Categorias
     * const Categorias = await prisma.categorias.delete({
     *   where: {
     *     // ... filter to delete one Categorias
     *   }
     * })
     * 
     */
    delete<T extends categoriasDeleteArgs>(args: SelectSubset<T, categoriasDeleteArgs<ExtArgs>>): Prisma__categoriasClient<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categorias.
     * @param {categoriasUpdateArgs} args - Arguments to update one Categorias.
     * @example
     * // Update one Categorias
     * const categorias = await prisma.categorias.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends categoriasUpdateArgs>(args: SelectSubset<T, categoriasUpdateArgs<ExtArgs>>): Prisma__categoriasClient<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categorias.
     * @param {categoriasDeleteManyArgs} args - Arguments to filter Categorias to delete.
     * @example
     * // Delete a few Categorias
     * const { count } = await prisma.categorias.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends categoriasDeleteManyArgs>(args?: SelectSubset<T, categoriasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categorias
     * const categorias = await prisma.categorias.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends categoriasUpdateManyArgs>(args: SelectSubset<T, categoriasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias and returns the data updated in the database.
     * @param {categoriasUpdateManyAndReturnArgs} args - Arguments to update many Categorias.
     * @example
     * // Update many Categorias
     * const categorias = await prisma.categorias.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categorias and only return the `id_categoria`
     * const categoriasWithId_categoriaOnly = await prisma.categorias.updateManyAndReturn({
     *   select: { id_categoria: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends categoriasUpdateManyAndReturnArgs>(args: SelectSubset<T, categoriasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categorias.
     * @param {categoriasUpsertArgs} args - Arguments to update or create a Categorias.
     * @example
     * // Update or create a Categorias
     * const categorias = await prisma.categorias.upsert({
     *   create: {
     *     // ... data to create a Categorias
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categorias we want to update
     *   }
     * })
     */
    upsert<T extends categoriasUpsertArgs>(args: SelectSubset<T, categoriasUpsertArgs<ExtArgs>>): Prisma__categoriasClient<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriasCountArgs} args - Arguments to filter Categorias to count.
     * @example
     * // Count the number of Categorias
     * const count = await prisma.categorias.count({
     *   where: {
     *     // ... the filter for the Categorias we want to count
     *   }
     * })
    **/
    count<T extends categoriasCountArgs>(
      args?: Subset<T, categoriasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoriasAggregateArgs>(args: Subset<T, CategoriasAggregateArgs>): Prisma.PrismaPromise<GetCategoriasAggregateType<T>>

    /**
     * Group by Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriasGroupByArgs} args - Group by arguments.
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
      T extends categoriasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoriasGroupByArgs['orderBy'] }
        : { orderBy?: categoriasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, categoriasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the categorias model
   */
  readonly fields: categoriasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for categorias.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoriasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    productos<T extends categorias$productosArgs<ExtArgs> = {}>(args?: Subset<T, categorias$productosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the categorias model
   */
  interface categoriasFieldRefs {
    readonly id_categoria: FieldRef<"categorias", 'BigInt'>
    readonly nombre: FieldRef<"categorias", 'String'>
    readonly descripcion: FieldRef<"categorias", 'String'>
    readonly updated_at: FieldRef<"categorias", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * categorias findUnique
   */
  export type categoriasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
    /**
     * Filter, which categorias to fetch.
     */
    where: categoriasWhereUniqueInput
  }

  /**
   * categorias findUniqueOrThrow
   */
  export type categoriasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
    /**
     * Filter, which categorias to fetch.
     */
    where: categoriasWhereUniqueInput
  }

  /**
   * categorias findFirst
   */
  export type categoriasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
    /**
     * Filter, which categorias to fetch.
     */
    where?: categoriasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: categoriasOrderByWithRelationInput | categoriasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categorias.
     */
    cursor?: categoriasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categorias.
     */
    distinct?: CategoriasScalarFieldEnum | CategoriasScalarFieldEnum[]
  }

  /**
   * categorias findFirstOrThrow
   */
  export type categoriasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
    /**
     * Filter, which categorias to fetch.
     */
    where?: categoriasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: categoriasOrderByWithRelationInput | categoriasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categorias.
     */
    cursor?: categoriasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categorias.
     */
    distinct?: CategoriasScalarFieldEnum | CategoriasScalarFieldEnum[]
  }

  /**
   * categorias findMany
   */
  export type categoriasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
    /**
     * Filter, which categorias to fetch.
     */
    where?: categoriasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categorias to fetch.
     */
    orderBy?: categoriasOrderByWithRelationInput | categoriasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categorias.
     */
    cursor?: categoriasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categorias.
     */
    skip?: number
    distinct?: CategoriasScalarFieldEnum | CategoriasScalarFieldEnum[]
  }

  /**
   * categorias create
   */
  export type categoriasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
    /**
     * The data needed to create a categorias.
     */
    data: XOR<categoriasCreateInput, categoriasUncheckedCreateInput>
  }

  /**
   * categorias createMany
   */
  export type categoriasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categorias.
     */
    data: categoriasCreateManyInput | categoriasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categorias createManyAndReturn
   */
  export type categoriasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * The data used to create many categorias.
     */
    data: categoriasCreateManyInput | categoriasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categorias update
   */
  export type categoriasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
    /**
     * The data needed to update a categorias.
     */
    data: XOR<categoriasUpdateInput, categoriasUncheckedUpdateInput>
    /**
     * Choose, which categorias to update.
     */
    where: categoriasWhereUniqueInput
  }

  /**
   * categorias updateMany
   */
  export type categoriasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categorias.
     */
    data: XOR<categoriasUpdateManyMutationInput, categoriasUncheckedUpdateManyInput>
    /**
     * Filter which categorias to update
     */
    where?: categoriasWhereInput
    /**
     * Limit how many categorias to update.
     */
    limit?: number
  }

  /**
   * categorias updateManyAndReturn
   */
  export type categoriasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * The data used to update categorias.
     */
    data: XOR<categoriasUpdateManyMutationInput, categoriasUncheckedUpdateManyInput>
    /**
     * Filter which categorias to update
     */
    where?: categoriasWhereInput
    /**
     * Limit how many categorias to update.
     */
    limit?: number
  }

  /**
   * categorias upsert
   */
  export type categoriasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
    /**
     * The filter to search for the categorias to update in case it exists.
     */
    where: categoriasWhereUniqueInput
    /**
     * In case the categorias found by the `where` argument doesn't exist, create a new categorias with this data.
     */
    create: XOR<categoriasCreateInput, categoriasUncheckedCreateInput>
    /**
     * In case the categorias was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoriasUpdateInput, categoriasUncheckedUpdateInput>
  }

  /**
   * categorias delete
   */
  export type categoriasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
    /**
     * Filter which categorias to delete.
     */
    where: categoriasWhereUniqueInput
  }

  /**
   * categorias deleteMany
   */
  export type categoriasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categorias to delete
     */
    where?: categoriasWhereInput
    /**
     * Limit how many categorias to delete.
     */
    limit?: number
  }

  /**
   * categorias.productos
   */
  export type categorias$productosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productos
     */
    omit?: productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productosInclude<ExtArgs> | null
    where?: productosWhereInput
    orderBy?: productosOrderByWithRelationInput | productosOrderByWithRelationInput[]
    cursor?: productosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductosScalarFieldEnum | ProductosScalarFieldEnum[]
  }

  /**
   * categorias without action
   */
  export type categoriasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categorias
     */
    select?: categoriasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categorias
     */
    omit?: categoriasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriasInclude<ExtArgs> | null
  }


  /**
   * Model comercios
   */

  export type AggregateComercios = {
    _count: ComerciosCountAggregateOutputType | null
    _avg: ComerciosAvgAggregateOutputType | null
    _sum: ComerciosSumAggregateOutputType | null
    _min: ComerciosMinAggregateOutputType | null
    _max: ComerciosMaxAggregateOutputType | null
  }

  export type ComerciosAvgAggregateOutputType = {
    id_comercio: number | null
    id_usuario: number | null
    latitud: Decimal | null
    longitud: Decimal | null
  }

  export type ComerciosSumAggregateOutputType = {
    id_comercio: bigint | null
    id_usuario: bigint | null
    latitud: Decimal | null
    longitud: Decimal | null
  }

  export type ComerciosMinAggregateOutputType = {
    id_comercio: bigint | null
    id_usuario: bigint | null
    nombre_negocio: string | null
    telefono: string | null
    direccion: string | null
    latitud: Decimal | null
    longitud: Decimal | null
    categoria: string | null
    fecha_registro: Date | null
    estado: boolean | null
    updated_at: Date | null
  }

  export type ComerciosMaxAggregateOutputType = {
    id_comercio: bigint | null
    id_usuario: bigint | null
    nombre_negocio: string | null
    telefono: string | null
    direccion: string | null
    latitud: Decimal | null
    longitud: Decimal | null
    categoria: string | null
    fecha_registro: Date | null
    estado: boolean | null
    updated_at: Date | null
  }

  export type ComerciosCountAggregateOutputType = {
    id_comercio: number
    id_usuario: number
    nombre_negocio: number
    telefono: number
    direccion: number
    latitud: number
    longitud: number
    categoria: number
    fecha_registro: number
    estado: number
    updated_at: number
    _all: number
  }


  export type ComerciosAvgAggregateInputType = {
    id_comercio?: true
    id_usuario?: true
    latitud?: true
    longitud?: true
  }

  export type ComerciosSumAggregateInputType = {
    id_comercio?: true
    id_usuario?: true
    latitud?: true
    longitud?: true
  }

  export type ComerciosMinAggregateInputType = {
    id_comercio?: true
    id_usuario?: true
    nombre_negocio?: true
    telefono?: true
    direccion?: true
    latitud?: true
    longitud?: true
    categoria?: true
    fecha_registro?: true
    estado?: true
    updated_at?: true
  }

  export type ComerciosMaxAggregateInputType = {
    id_comercio?: true
    id_usuario?: true
    nombre_negocio?: true
    telefono?: true
    direccion?: true
    latitud?: true
    longitud?: true
    categoria?: true
    fecha_registro?: true
    estado?: true
    updated_at?: true
  }

  export type ComerciosCountAggregateInputType = {
    id_comercio?: true
    id_usuario?: true
    nombre_negocio?: true
    telefono?: true
    direccion?: true
    latitud?: true
    longitud?: true
    categoria?: true
    fecha_registro?: true
    estado?: true
    updated_at?: true
    _all?: true
  }

  export type ComerciosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which comercios to aggregate.
     */
    where?: comerciosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comercios to fetch.
     */
    orderBy?: comerciosOrderByWithRelationInput | comerciosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: comerciosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comercios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comercios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned comercios
    **/
    _count?: true | ComerciosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ComerciosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ComerciosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ComerciosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ComerciosMaxAggregateInputType
  }

  export type GetComerciosAggregateType<T extends ComerciosAggregateArgs> = {
        [P in keyof T & keyof AggregateComercios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComercios[P]>
      : GetScalarType<T[P], AggregateComercios[P]>
  }




  export type comerciosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: comerciosWhereInput
    orderBy?: comerciosOrderByWithAggregationInput | comerciosOrderByWithAggregationInput[]
    by: ComerciosScalarFieldEnum[] | ComerciosScalarFieldEnum
    having?: comerciosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ComerciosCountAggregateInputType | true
    _avg?: ComerciosAvgAggregateInputType
    _sum?: ComerciosSumAggregateInputType
    _min?: ComerciosMinAggregateInputType
    _max?: ComerciosMaxAggregateInputType
  }

  export type ComerciosGroupByOutputType = {
    id_comercio: bigint
    id_usuario: bigint
    nombre_negocio: string
    telefono: string | null
    direccion: string | null
    latitud: Decimal | null
    longitud: Decimal | null
    categoria: string | null
    fecha_registro: Date
    estado: boolean
    updated_at: Date
    _count: ComerciosCountAggregateOutputType | null
    _avg: ComerciosAvgAggregateOutputType | null
    _sum: ComerciosSumAggregateOutputType | null
    _min: ComerciosMinAggregateOutputType | null
    _max: ComerciosMaxAggregateOutputType | null
  }

  type GetComerciosGroupByPayload<T extends comerciosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ComerciosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ComerciosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ComerciosGroupByOutputType[P]>
            : GetScalarType<T[P], ComerciosGroupByOutputType[P]>
        }
      >
    >


  export type comerciosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_comercio?: boolean
    id_usuario?: boolean
    nombre_negocio?: boolean
    telefono?: boolean
    direccion?: boolean
    latitud?: boolean
    longitud?: boolean
    categoria?: boolean
    fecha_registro?: boolean
    estado?: boolean
    updated_at?: boolean
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
    productos?: boolean | comercios$productosArgs<ExtArgs>
    _count?: boolean | ComerciosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comercios"]>

  export type comerciosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_comercio?: boolean
    id_usuario?: boolean
    nombre_negocio?: boolean
    telefono?: boolean
    direccion?: boolean
    latitud?: boolean
    longitud?: boolean
    categoria?: boolean
    fecha_registro?: boolean
    estado?: boolean
    updated_at?: boolean
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comercios"]>

  export type comerciosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_comercio?: boolean
    id_usuario?: boolean
    nombre_negocio?: boolean
    telefono?: boolean
    direccion?: boolean
    latitud?: boolean
    longitud?: boolean
    categoria?: boolean
    fecha_registro?: boolean
    estado?: boolean
    updated_at?: boolean
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comercios"]>

  export type comerciosSelectScalar = {
    id_comercio?: boolean
    id_usuario?: boolean
    nombre_negocio?: boolean
    telefono?: boolean
    direccion?: boolean
    latitud?: boolean
    longitud?: boolean
    categoria?: boolean
    fecha_registro?: boolean
    estado?: boolean
    updated_at?: boolean
  }

  export type comerciosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_comercio" | "id_usuario" | "nombre_negocio" | "telefono" | "direccion" | "latitud" | "longitud" | "categoria" | "fecha_registro" | "estado" | "updated_at", ExtArgs["result"]["comercios"]>
  export type comerciosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
    productos?: boolean | comercios$productosArgs<ExtArgs>
    _count?: boolean | ComerciosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type comerciosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }
  export type comerciosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }

  export type $comerciosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "comercios"
    objects: {
      usuarios: Prisma.$usuariosPayload<ExtArgs>
      productos: Prisma.$productosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_comercio: bigint
      id_usuario: bigint
      nombre_negocio: string
      telefono: string | null
      direccion: string | null
      latitud: Prisma.Decimal | null
      longitud: Prisma.Decimal | null
      categoria: string | null
      fecha_registro: Date
      estado: boolean
      updated_at: Date
    }, ExtArgs["result"]["comercios"]>
    composites: {}
  }

  type comerciosGetPayload<S extends boolean | null | undefined | comerciosDefaultArgs> = $Result.GetResult<Prisma.$comerciosPayload, S>

  type comerciosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<comerciosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ComerciosCountAggregateInputType | true
    }

  export interface comerciosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['comercios'], meta: { name: 'comercios' } }
    /**
     * Find zero or one Comercios that matches the filter.
     * @param {comerciosFindUniqueArgs} args - Arguments to find a Comercios
     * @example
     * // Get one Comercios
     * const comercios = await prisma.comercios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends comerciosFindUniqueArgs>(args: SelectSubset<T, comerciosFindUniqueArgs<ExtArgs>>): Prisma__comerciosClient<$Result.GetResult<Prisma.$comerciosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comercios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {comerciosFindUniqueOrThrowArgs} args - Arguments to find a Comercios
     * @example
     * // Get one Comercios
     * const comercios = await prisma.comercios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends comerciosFindUniqueOrThrowArgs>(args: SelectSubset<T, comerciosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__comerciosClient<$Result.GetResult<Prisma.$comerciosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comercios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comerciosFindFirstArgs} args - Arguments to find a Comercios
     * @example
     * // Get one Comercios
     * const comercios = await prisma.comercios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends comerciosFindFirstArgs>(args?: SelectSubset<T, comerciosFindFirstArgs<ExtArgs>>): Prisma__comerciosClient<$Result.GetResult<Prisma.$comerciosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comercios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comerciosFindFirstOrThrowArgs} args - Arguments to find a Comercios
     * @example
     * // Get one Comercios
     * const comercios = await prisma.comercios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends comerciosFindFirstOrThrowArgs>(args?: SelectSubset<T, comerciosFindFirstOrThrowArgs<ExtArgs>>): Prisma__comerciosClient<$Result.GetResult<Prisma.$comerciosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comercios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comerciosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comercios
     * const comercios = await prisma.comercios.findMany()
     * 
     * // Get first 10 Comercios
     * const comercios = await prisma.comercios.findMany({ take: 10 })
     * 
     * // Only select the `id_comercio`
     * const comerciosWithId_comercioOnly = await prisma.comercios.findMany({ select: { id_comercio: true } })
     * 
     */
    findMany<T extends comerciosFindManyArgs>(args?: SelectSubset<T, comerciosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$comerciosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comercios.
     * @param {comerciosCreateArgs} args - Arguments to create a Comercios.
     * @example
     * // Create one Comercios
     * const Comercios = await prisma.comercios.create({
     *   data: {
     *     // ... data to create a Comercios
     *   }
     * })
     * 
     */
    create<T extends comerciosCreateArgs>(args: SelectSubset<T, comerciosCreateArgs<ExtArgs>>): Prisma__comerciosClient<$Result.GetResult<Prisma.$comerciosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comercios.
     * @param {comerciosCreateManyArgs} args - Arguments to create many Comercios.
     * @example
     * // Create many Comercios
     * const comercios = await prisma.comercios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends comerciosCreateManyArgs>(args?: SelectSubset<T, comerciosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comercios and returns the data saved in the database.
     * @param {comerciosCreateManyAndReturnArgs} args - Arguments to create many Comercios.
     * @example
     * // Create many Comercios
     * const comercios = await prisma.comercios.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comercios and only return the `id_comercio`
     * const comerciosWithId_comercioOnly = await prisma.comercios.createManyAndReturn({
     *   select: { id_comercio: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends comerciosCreateManyAndReturnArgs>(args?: SelectSubset<T, comerciosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$comerciosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comercios.
     * @param {comerciosDeleteArgs} args - Arguments to delete one Comercios.
     * @example
     * // Delete one Comercios
     * const Comercios = await prisma.comercios.delete({
     *   where: {
     *     // ... filter to delete one Comercios
     *   }
     * })
     * 
     */
    delete<T extends comerciosDeleteArgs>(args: SelectSubset<T, comerciosDeleteArgs<ExtArgs>>): Prisma__comerciosClient<$Result.GetResult<Prisma.$comerciosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comercios.
     * @param {comerciosUpdateArgs} args - Arguments to update one Comercios.
     * @example
     * // Update one Comercios
     * const comercios = await prisma.comercios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends comerciosUpdateArgs>(args: SelectSubset<T, comerciosUpdateArgs<ExtArgs>>): Prisma__comerciosClient<$Result.GetResult<Prisma.$comerciosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comercios.
     * @param {comerciosDeleteManyArgs} args - Arguments to filter Comercios to delete.
     * @example
     * // Delete a few Comercios
     * const { count } = await prisma.comercios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends comerciosDeleteManyArgs>(args?: SelectSubset<T, comerciosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comercios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comerciosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comercios
     * const comercios = await prisma.comercios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends comerciosUpdateManyArgs>(args: SelectSubset<T, comerciosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comercios and returns the data updated in the database.
     * @param {comerciosUpdateManyAndReturnArgs} args - Arguments to update many Comercios.
     * @example
     * // Update many Comercios
     * const comercios = await prisma.comercios.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comercios and only return the `id_comercio`
     * const comerciosWithId_comercioOnly = await prisma.comercios.updateManyAndReturn({
     *   select: { id_comercio: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends comerciosUpdateManyAndReturnArgs>(args: SelectSubset<T, comerciosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$comerciosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comercios.
     * @param {comerciosUpsertArgs} args - Arguments to update or create a Comercios.
     * @example
     * // Update or create a Comercios
     * const comercios = await prisma.comercios.upsert({
     *   create: {
     *     // ... data to create a Comercios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comercios we want to update
     *   }
     * })
     */
    upsert<T extends comerciosUpsertArgs>(args: SelectSubset<T, comerciosUpsertArgs<ExtArgs>>): Prisma__comerciosClient<$Result.GetResult<Prisma.$comerciosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comercios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comerciosCountArgs} args - Arguments to filter Comercios to count.
     * @example
     * // Count the number of Comercios
     * const count = await prisma.comercios.count({
     *   where: {
     *     // ... the filter for the Comercios we want to count
     *   }
     * })
    **/
    count<T extends comerciosCountArgs>(
      args?: Subset<T, comerciosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ComerciosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comercios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComerciosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ComerciosAggregateArgs>(args: Subset<T, ComerciosAggregateArgs>): Prisma.PrismaPromise<GetComerciosAggregateType<T>>

    /**
     * Group by Comercios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {comerciosGroupByArgs} args - Group by arguments.
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
      T extends comerciosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: comerciosGroupByArgs['orderBy'] }
        : { orderBy?: comerciosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, comerciosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComerciosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the comercios model
   */
  readonly fields: comerciosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for comercios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__comerciosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends usuariosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuariosDefaultArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    productos<T extends comercios$productosArgs<ExtArgs> = {}>(args?: Subset<T, comercios$productosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the comercios model
   */
  interface comerciosFieldRefs {
    readonly id_comercio: FieldRef<"comercios", 'BigInt'>
    readonly id_usuario: FieldRef<"comercios", 'BigInt'>
    readonly nombre_negocio: FieldRef<"comercios", 'String'>
    readonly telefono: FieldRef<"comercios", 'String'>
    readonly direccion: FieldRef<"comercios", 'String'>
    readonly latitud: FieldRef<"comercios", 'Decimal'>
    readonly longitud: FieldRef<"comercios", 'Decimal'>
    readonly categoria: FieldRef<"comercios", 'String'>
    readonly fecha_registro: FieldRef<"comercios", 'DateTime'>
    readonly estado: FieldRef<"comercios", 'Boolean'>
    readonly updated_at: FieldRef<"comercios", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * comercios findUnique
   */
  export type comerciosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comercios
     */
    select?: comerciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comercios
     */
    omit?: comerciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: comerciosInclude<ExtArgs> | null
    /**
     * Filter, which comercios to fetch.
     */
    where: comerciosWhereUniqueInput
  }

  /**
   * comercios findUniqueOrThrow
   */
  export type comerciosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comercios
     */
    select?: comerciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comercios
     */
    omit?: comerciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: comerciosInclude<ExtArgs> | null
    /**
     * Filter, which comercios to fetch.
     */
    where: comerciosWhereUniqueInput
  }

  /**
   * comercios findFirst
   */
  export type comerciosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comercios
     */
    select?: comerciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comercios
     */
    omit?: comerciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: comerciosInclude<ExtArgs> | null
    /**
     * Filter, which comercios to fetch.
     */
    where?: comerciosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comercios to fetch.
     */
    orderBy?: comerciosOrderByWithRelationInput | comerciosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for comercios.
     */
    cursor?: comerciosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comercios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comercios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comercios.
     */
    distinct?: ComerciosScalarFieldEnum | ComerciosScalarFieldEnum[]
  }

  /**
   * comercios findFirstOrThrow
   */
  export type comerciosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comercios
     */
    select?: comerciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comercios
     */
    omit?: comerciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: comerciosInclude<ExtArgs> | null
    /**
     * Filter, which comercios to fetch.
     */
    where?: comerciosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comercios to fetch.
     */
    orderBy?: comerciosOrderByWithRelationInput | comerciosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for comercios.
     */
    cursor?: comerciosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comercios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comercios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of comercios.
     */
    distinct?: ComerciosScalarFieldEnum | ComerciosScalarFieldEnum[]
  }

  /**
   * comercios findMany
   */
  export type comerciosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comercios
     */
    select?: comerciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comercios
     */
    omit?: comerciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: comerciosInclude<ExtArgs> | null
    /**
     * Filter, which comercios to fetch.
     */
    where?: comerciosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of comercios to fetch.
     */
    orderBy?: comerciosOrderByWithRelationInput | comerciosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing comercios.
     */
    cursor?: comerciosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` comercios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` comercios.
     */
    skip?: number
    distinct?: ComerciosScalarFieldEnum | ComerciosScalarFieldEnum[]
  }

  /**
   * comercios create
   */
  export type comerciosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comercios
     */
    select?: comerciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comercios
     */
    omit?: comerciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: comerciosInclude<ExtArgs> | null
    /**
     * The data needed to create a comercios.
     */
    data: XOR<comerciosCreateInput, comerciosUncheckedCreateInput>
  }

  /**
   * comercios createMany
   */
  export type comerciosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many comercios.
     */
    data: comerciosCreateManyInput | comerciosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * comercios createManyAndReturn
   */
  export type comerciosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comercios
     */
    select?: comerciosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the comercios
     */
    omit?: comerciosOmit<ExtArgs> | null
    /**
     * The data used to create many comercios.
     */
    data: comerciosCreateManyInput | comerciosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: comerciosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * comercios update
   */
  export type comerciosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comercios
     */
    select?: comerciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comercios
     */
    omit?: comerciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: comerciosInclude<ExtArgs> | null
    /**
     * The data needed to update a comercios.
     */
    data: XOR<comerciosUpdateInput, comerciosUncheckedUpdateInput>
    /**
     * Choose, which comercios to update.
     */
    where: comerciosWhereUniqueInput
  }

  /**
   * comercios updateMany
   */
  export type comerciosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update comercios.
     */
    data: XOR<comerciosUpdateManyMutationInput, comerciosUncheckedUpdateManyInput>
    /**
     * Filter which comercios to update
     */
    where?: comerciosWhereInput
    /**
     * Limit how many comercios to update.
     */
    limit?: number
  }

  /**
   * comercios updateManyAndReturn
   */
  export type comerciosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comercios
     */
    select?: comerciosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the comercios
     */
    omit?: comerciosOmit<ExtArgs> | null
    /**
     * The data used to update comercios.
     */
    data: XOR<comerciosUpdateManyMutationInput, comerciosUncheckedUpdateManyInput>
    /**
     * Filter which comercios to update
     */
    where?: comerciosWhereInput
    /**
     * Limit how many comercios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: comerciosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * comercios upsert
   */
  export type comerciosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comercios
     */
    select?: comerciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comercios
     */
    omit?: comerciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: comerciosInclude<ExtArgs> | null
    /**
     * The filter to search for the comercios to update in case it exists.
     */
    where: comerciosWhereUniqueInput
    /**
     * In case the comercios found by the `where` argument doesn't exist, create a new comercios with this data.
     */
    create: XOR<comerciosCreateInput, comerciosUncheckedCreateInput>
    /**
     * In case the comercios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<comerciosUpdateInput, comerciosUncheckedUpdateInput>
  }

  /**
   * comercios delete
   */
  export type comerciosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comercios
     */
    select?: comerciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comercios
     */
    omit?: comerciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: comerciosInclude<ExtArgs> | null
    /**
     * Filter which comercios to delete.
     */
    where: comerciosWhereUniqueInput
  }

  /**
   * comercios deleteMany
   */
  export type comerciosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which comercios to delete
     */
    where?: comerciosWhereInput
    /**
     * Limit how many comercios to delete.
     */
    limit?: number
  }

  /**
   * comercios.productos
   */
  export type comercios$productosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productos
     */
    omit?: productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productosInclude<ExtArgs> | null
    where?: productosWhereInput
    orderBy?: productosOrderByWithRelationInput | productosOrderByWithRelationInput[]
    cursor?: productosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductosScalarFieldEnum | ProductosScalarFieldEnum[]
  }

  /**
   * comercios without action
   */
  export type comerciosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comercios
     */
    select?: comerciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comercios
     */
    omit?: comerciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: comerciosInclude<ExtArgs> | null
  }


  /**
   * Model notificaciones
   */

  export type AggregateNotificaciones = {
    _count: NotificacionesCountAggregateOutputType | null
    _avg: NotificacionesAvgAggregateOutputType | null
    _sum: NotificacionesSumAggregateOutputType | null
    _min: NotificacionesMinAggregateOutputType | null
    _max: NotificacionesMaxAggregateOutputType | null
  }

  export type NotificacionesAvgAggregateOutputType = {
    id_notificacion: number | null
    id_usuario: number | null
  }

  export type NotificacionesSumAggregateOutputType = {
    id_notificacion: bigint | null
    id_usuario: bigint | null
  }

  export type NotificacionesMinAggregateOutputType = {
    id_notificacion: bigint | null
    id_usuario: bigint | null
    titulo: string | null
    mensaje: string | null
    tipo: string | null
    fecha_envio: Date | null
    leido: boolean | null
    updated_at: Date | null
  }

  export type NotificacionesMaxAggregateOutputType = {
    id_notificacion: bigint | null
    id_usuario: bigint | null
    titulo: string | null
    mensaje: string | null
    tipo: string | null
    fecha_envio: Date | null
    leido: boolean | null
    updated_at: Date | null
  }

  export type NotificacionesCountAggregateOutputType = {
    id_notificacion: number
    id_usuario: number
    titulo: number
    mensaje: number
    tipo: number
    fecha_envio: number
    leido: number
    updated_at: number
    _all: number
  }


  export type NotificacionesAvgAggregateInputType = {
    id_notificacion?: true
    id_usuario?: true
  }

  export type NotificacionesSumAggregateInputType = {
    id_notificacion?: true
    id_usuario?: true
  }

  export type NotificacionesMinAggregateInputType = {
    id_notificacion?: true
    id_usuario?: true
    titulo?: true
    mensaje?: true
    tipo?: true
    fecha_envio?: true
    leido?: true
    updated_at?: true
  }

  export type NotificacionesMaxAggregateInputType = {
    id_notificacion?: true
    id_usuario?: true
    titulo?: true
    mensaje?: true
    tipo?: true
    fecha_envio?: true
    leido?: true
    updated_at?: true
  }

  export type NotificacionesCountAggregateInputType = {
    id_notificacion?: true
    id_usuario?: true
    titulo?: true
    mensaje?: true
    tipo?: true
    fecha_envio?: true
    leido?: true
    updated_at?: true
    _all?: true
  }

  export type NotificacionesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notificaciones to aggregate.
     */
    where?: notificacionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notificaciones to fetch.
     */
    orderBy?: notificacionesOrderByWithRelationInput | notificacionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: notificacionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notificaciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notificaciones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned notificaciones
    **/
    _count?: true | NotificacionesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificacionesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificacionesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificacionesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificacionesMaxAggregateInputType
  }

  export type GetNotificacionesAggregateType<T extends NotificacionesAggregateArgs> = {
        [P in keyof T & keyof AggregateNotificaciones]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotificaciones[P]>
      : GetScalarType<T[P], AggregateNotificaciones[P]>
  }




  export type notificacionesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: notificacionesWhereInput
    orderBy?: notificacionesOrderByWithAggregationInput | notificacionesOrderByWithAggregationInput[]
    by: NotificacionesScalarFieldEnum[] | NotificacionesScalarFieldEnum
    having?: notificacionesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificacionesCountAggregateInputType | true
    _avg?: NotificacionesAvgAggregateInputType
    _sum?: NotificacionesSumAggregateInputType
    _min?: NotificacionesMinAggregateInputType
    _max?: NotificacionesMaxAggregateInputType
  }

  export type NotificacionesGroupByOutputType = {
    id_notificacion: bigint
    id_usuario: bigint
    titulo: string | null
    mensaje: string | null
    tipo: string | null
    fecha_envio: Date
    leido: boolean
    updated_at: Date
    _count: NotificacionesCountAggregateOutputType | null
    _avg: NotificacionesAvgAggregateOutputType | null
    _sum: NotificacionesSumAggregateOutputType | null
    _min: NotificacionesMinAggregateOutputType | null
    _max: NotificacionesMaxAggregateOutputType | null
  }

  type GetNotificacionesGroupByPayload<T extends notificacionesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificacionesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificacionesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificacionesGroupByOutputType[P]>
            : GetScalarType<T[P], NotificacionesGroupByOutputType[P]>
        }
      >
    >


  export type notificacionesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_notificacion?: boolean
    id_usuario?: boolean
    titulo?: boolean
    mensaje?: boolean
    tipo?: boolean
    fecha_envio?: boolean
    leido?: boolean
    updated_at?: boolean
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificaciones"]>

  export type notificacionesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_notificacion?: boolean
    id_usuario?: boolean
    titulo?: boolean
    mensaje?: boolean
    tipo?: boolean
    fecha_envio?: boolean
    leido?: boolean
    updated_at?: boolean
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificaciones"]>

  export type notificacionesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_notificacion?: boolean
    id_usuario?: boolean
    titulo?: boolean
    mensaje?: boolean
    tipo?: boolean
    fecha_envio?: boolean
    leido?: boolean
    updated_at?: boolean
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificaciones"]>

  export type notificacionesSelectScalar = {
    id_notificacion?: boolean
    id_usuario?: boolean
    titulo?: boolean
    mensaje?: boolean
    tipo?: boolean
    fecha_envio?: boolean
    leido?: boolean
    updated_at?: boolean
  }

  export type notificacionesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_notificacion" | "id_usuario" | "titulo" | "mensaje" | "tipo" | "fecha_envio" | "leido" | "updated_at", ExtArgs["result"]["notificaciones"]>
  export type notificacionesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }
  export type notificacionesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }
  export type notificacionesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }

  export type $notificacionesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "notificaciones"
    objects: {
      usuarios: Prisma.$usuariosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_notificacion: bigint
      id_usuario: bigint
      titulo: string | null
      mensaje: string | null
      tipo: string | null
      fecha_envio: Date
      leido: boolean
      updated_at: Date
    }, ExtArgs["result"]["notificaciones"]>
    composites: {}
  }

  type notificacionesGetPayload<S extends boolean | null | undefined | notificacionesDefaultArgs> = $Result.GetResult<Prisma.$notificacionesPayload, S>

  type notificacionesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<notificacionesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificacionesCountAggregateInputType | true
    }

  export interface notificacionesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['notificaciones'], meta: { name: 'notificaciones' } }
    /**
     * Find zero or one Notificaciones that matches the filter.
     * @param {notificacionesFindUniqueArgs} args - Arguments to find a Notificaciones
     * @example
     * // Get one Notificaciones
     * const notificaciones = await prisma.notificaciones.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends notificacionesFindUniqueArgs>(args: SelectSubset<T, notificacionesFindUniqueArgs<ExtArgs>>): Prisma__notificacionesClient<$Result.GetResult<Prisma.$notificacionesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notificaciones that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {notificacionesFindUniqueOrThrowArgs} args - Arguments to find a Notificaciones
     * @example
     * // Get one Notificaciones
     * const notificaciones = await prisma.notificaciones.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends notificacionesFindUniqueOrThrowArgs>(args: SelectSubset<T, notificacionesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__notificacionesClient<$Result.GetResult<Prisma.$notificacionesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notificaciones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificacionesFindFirstArgs} args - Arguments to find a Notificaciones
     * @example
     * // Get one Notificaciones
     * const notificaciones = await prisma.notificaciones.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends notificacionesFindFirstArgs>(args?: SelectSubset<T, notificacionesFindFirstArgs<ExtArgs>>): Prisma__notificacionesClient<$Result.GetResult<Prisma.$notificacionesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notificaciones that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificacionesFindFirstOrThrowArgs} args - Arguments to find a Notificaciones
     * @example
     * // Get one Notificaciones
     * const notificaciones = await prisma.notificaciones.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends notificacionesFindFirstOrThrowArgs>(args?: SelectSubset<T, notificacionesFindFirstOrThrowArgs<ExtArgs>>): Prisma__notificacionesClient<$Result.GetResult<Prisma.$notificacionesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notificaciones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificacionesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notificaciones
     * const notificaciones = await prisma.notificaciones.findMany()
     * 
     * // Get first 10 Notificaciones
     * const notificaciones = await prisma.notificaciones.findMany({ take: 10 })
     * 
     * // Only select the `id_notificacion`
     * const notificacionesWithId_notificacionOnly = await prisma.notificaciones.findMany({ select: { id_notificacion: true } })
     * 
     */
    findMany<T extends notificacionesFindManyArgs>(args?: SelectSubset<T, notificacionesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificacionesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notificaciones.
     * @param {notificacionesCreateArgs} args - Arguments to create a Notificaciones.
     * @example
     * // Create one Notificaciones
     * const Notificaciones = await prisma.notificaciones.create({
     *   data: {
     *     // ... data to create a Notificaciones
     *   }
     * })
     * 
     */
    create<T extends notificacionesCreateArgs>(args: SelectSubset<T, notificacionesCreateArgs<ExtArgs>>): Prisma__notificacionesClient<$Result.GetResult<Prisma.$notificacionesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notificaciones.
     * @param {notificacionesCreateManyArgs} args - Arguments to create many Notificaciones.
     * @example
     * // Create many Notificaciones
     * const notificaciones = await prisma.notificaciones.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends notificacionesCreateManyArgs>(args?: SelectSubset<T, notificacionesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notificaciones and returns the data saved in the database.
     * @param {notificacionesCreateManyAndReturnArgs} args - Arguments to create many Notificaciones.
     * @example
     * // Create many Notificaciones
     * const notificaciones = await prisma.notificaciones.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notificaciones and only return the `id_notificacion`
     * const notificacionesWithId_notificacionOnly = await prisma.notificaciones.createManyAndReturn({
     *   select: { id_notificacion: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends notificacionesCreateManyAndReturnArgs>(args?: SelectSubset<T, notificacionesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificacionesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notificaciones.
     * @param {notificacionesDeleteArgs} args - Arguments to delete one Notificaciones.
     * @example
     * // Delete one Notificaciones
     * const Notificaciones = await prisma.notificaciones.delete({
     *   where: {
     *     // ... filter to delete one Notificaciones
     *   }
     * })
     * 
     */
    delete<T extends notificacionesDeleteArgs>(args: SelectSubset<T, notificacionesDeleteArgs<ExtArgs>>): Prisma__notificacionesClient<$Result.GetResult<Prisma.$notificacionesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notificaciones.
     * @param {notificacionesUpdateArgs} args - Arguments to update one Notificaciones.
     * @example
     * // Update one Notificaciones
     * const notificaciones = await prisma.notificaciones.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends notificacionesUpdateArgs>(args: SelectSubset<T, notificacionesUpdateArgs<ExtArgs>>): Prisma__notificacionesClient<$Result.GetResult<Prisma.$notificacionesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notificaciones.
     * @param {notificacionesDeleteManyArgs} args - Arguments to filter Notificaciones to delete.
     * @example
     * // Delete a few Notificaciones
     * const { count } = await prisma.notificaciones.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends notificacionesDeleteManyArgs>(args?: SelectSubset<T, notificacionesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notificaciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificacionesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notificaciones
     * const notificaciones = await prisma.notificaciones.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends notificacionesUpdateManyArgs>(args: SelectSubset<T, notificacionesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notificaciones and returns the data updated in the database.
     * @param {notificacionesUpdateManyAndReturnArgs} args - Arguments to update many Notificaciones.
     * @example
     * // Update many Notificaciones
     * const notificaciones = await prisma.notificaciones.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notificaciones and only return the `id_notificacion`
     * const notificacionesWithId_notificacionOnly = await prisma.notificaciones.updateManyAndReturn({
     *   select: { id_notificacion: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends notificacionesUpdateManyAndReturnArgs>(args: SelectSubset<T, notificacionesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificacionesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notificaciones.
     * @param {notificacionesUpsertArgs} args - Arguments to update or create a Notificaciones.
     * @example
     * // Update or create a Notificaciones
     * const notificaciones = await prisma.notificaciones.upsert({
     *   create: {
     *     // ... data to create a Notificaciones
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notificaciones we want to update
     *   }
     * })
     */
    upsert<T extends notificacionesUpsertArgs>(args: SelectSubset<T, notificacionesUpsertArgs<ExtArgs>>): Prisma__notificacionesClient<$Result.GetResult<Prisma.$notificacionesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notificaciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificacionesCountArgs} args - Arguments to filter Notificaciones to count.
     * @example
     * // Count the number of Notificaciones
     * const count = await prisma.notificaciones.count({
     *   where: {
     *     // ... the filter for the Notificaciones we want to count
     *   }
     * })
    **/
    count<T extends notificacionesCountArgs>(
      args?: Subset<T, notificacionesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificacionesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notificaciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificacionesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificacionesAggregateArgs>(args: Subset<T, NotificacionesAggregateArgs>): Prisma.PrismaPromise<GetNotificacionesAggregateType<T>>

    /**
     * Group by Notificaciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {notificacionesGroupByArgs} args - Group by arguments.
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
      T extends notificacionesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: notificacionesGroupByArgs['orderBy'] }
        : { orderBy?: notificacionesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, notificacionesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificacionesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the notificaciones model
   */
  readonly fields: notificacionesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for notificaciones.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__notificacionesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends usuariosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuariosDefaultArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the notificaciones model
   */
  interface notificacionesFieldRefs {
    readonly id_notificacion: FieldRef<"notificaciones", 'BigInt'>
    readonly id_usuario: FieldRef<"notificaciones", 'BigInt'>
    readonly titulo: FieldRef<"notificaciones", 'String'>
    readonly mensaje: FieldRef<"notificaciones", 'String'>
    readonly tipo: FieldRef<"notificaciones", 'String'>
    readonly fecha_envio: FieldRef<"notificaciones", 'DateTime'>
    readonly leido: FieldRef<"notificaciones", 'Boolean'>
    readonly updated_at: FieldRef<"notificaciones", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * notificaciones findUnique
   */
  export type notificacionesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notificaciones
     */
    select?: notificacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notificaciones
     */
    omit?: notificacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificacionesInclude<ExtArgs> | null
    /**
     * Filter, which notificaciones to fetch.
     */
    where: notificacionesWhereUniqueInput
  }

  /**
   * notificaciones findUniqueOrThrow
   */
  export type notificacionesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notificaciones
     */
    select?: notificacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notificaciones
     */
    omit?: notificacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificacionesInclude<ExtArgs> | null
    /**
     * Filter, which notificaciones to fetch.
     */
    where: notificacionesWhereUniqueInput
  }

  /**
   * notificaciones findFirst
   */
  export type notificacionesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notificaciones
     */
    select?: notificacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notificaciones
     */
    omit?: notificacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificacionesInclude<ExtArgs> | null
    /**
     * Filter, which notificaciones to fetch.
     */
    where?: notificacionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notificaciones to fetch.
     */
    orderBy?: notificacionesOrderByWithRelationInput | notificacionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notificaciones.
     */
    cursor?: notificacionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notificaciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notificaciones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notificaciones.
     */
    distinct?: NotificacionesScalarFieldEnum | NotificacionesScalarFieldEnum[]
  }

  /**
   * notificaciones findFirstOrThrow
   */
  export type notificacionesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notificaciones
     */
    select?: notificacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notificaciones
     */
    omit?: notificacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificacionesInclude<ExtArgs> | null
    /**
     * Filter, which notificaciones to fetch.
     */
    where?: notificacionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notificaciones to fetch.
     */
    orderBy?: notificacionesOrderByWithRelationInput | notificacionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notificaciones.
     */
    cursor?: notificacionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notificaciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notificaciones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notificaciones.
     */
    distinct?: NotificacionesScalarFieldEnum | NotificacionesScalarFieldEnum[]
  }

  /**
   * notificaciones findMany
   */
  export type notificacionesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notificaciones
     */
    select?: notificacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notificaciones
     */
    omit?: notificacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificacionesInclude<ExtArgs> | null
    /**
     * Filter, which notificaciones to fetch.
     */
    where?: notificacionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notificaciones to fetch.
     */
    orderBy?: notificacionesOrderByWithRelationInput | notificacionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing notificaciones.
     */
    cursor?: notificacionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notificaciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notificaciones.
     */
    skip?: number
    distinct?: NotificacionesScalarFieldEnum | NotificacionesScalarFieldEnum[]
  }

  /**
   * notificaciones create
   */
  export type notificacionesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notificaciones
     */
    select?: notificacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notificaciones
     */
    omit?: notificacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificacionesInclude<ExtArgs> | null
    /**
     * The data needed to create a notificaciones.
     */
    data: XOR<notificacionesCreateInput, notificacionesUncheckedCreateInput>
  }

  /**
   * notificaciones createMany
   */
  export type notificacionesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many notificaciones.
     */
    data: notificacionesCreateManyInput | notificacionesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * notificaciones createManyAndReturn
   */
  export type notificacionesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notificaciones
     */
    select?: notificacionesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the notificaciones
     */
    omit?: notificacionesOmit<ExtArgs> | null
    /**
     * The data used to create many notificaciones.
     */
    data: notificacionesCreateManyInput | notificacionesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificacionesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * notificaciones update
   */
  export type notificacionesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notificaciones
     */
    select?: notificacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notificaciones
     */
    omit?: notificacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificacionesInclude<ExtArgs> | null
    /**
     * The data needed to update a notificaciones.
     */
    data: XOR<notificacionesUpdateInput, notificacionesUncheckedUpdateInput>
    /**
     * Choose, which notificaciones to update.
     */
    where: notificacionesWhereUniqueInput
  }

  /**
   * notificaciones updateMany
   */
  export type notificacionesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update notificaciones.
     */
    data: XOR<notificacionesUpdateManyMutationInput, notificacionesUncheckedUpdateManyInput>
    /**
     * Filter which notificaciones to update
     */
    where?: notificacionesWhereInput
    /**
     * Limit how many notificaciones to update.
     */
    limit?: number
  }

  /**
   * notificaciones updateManyAndReturn
   */
  export type notificacionesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notificaciones
     */
    select?: notificacionesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the notificaciones
     */
    omit?: notificacionesOmit<ExtArgs> | null
    /**
     * The data used to update notificaciones.
     */
    data: XOR<notificacionesUpdateManyMutationInput, notificacionesUncheckedUpdateManyInput>
    /**
     * Filter which notificaciones to update
     */
    where?: notificacionesWhereInput
    /**
     * Limit how many notificaciones to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificacionesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * notificaciones upsert
   */
  export type notificacionesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notificaciones
     */
    select?: notificacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notificaciones
     */
    omit?: notificacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificacionesInclude<ExtArgs> | null
    /**
     * The filter to search for the notificaciones to update in case it exists.
     */
    where: notificacionesWhereUniqueInput
    /**
     * In case the notificaciones found by the `where` argument doesn't exist, create a new notificaciones with this data.
     */
    create: XOR<notificacionesCreateInput, notificacionesUncheckedCreateInput>
    /**
     * In case the notificaciones was found with the provided `where` argument, update it with this data.
     */
    update: XOR<notificacionesUpdateInput, notificacionesUncheckedUpdateInput>
  }

  /**
   * notificaciones delete
   */
  export type notificacionesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notificaciones
     */
    select?: notificacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notificaciones
     */
    omit?: notificacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificacionesInclude<ExtArgs> | null
    /**
     * Filter which notificaciones to delete.
     */
    where: notificacionesWhereUniqueInput
  }

  /**
   * notificaciones deleteMany
   */
  export type notificacionesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notificaciones to delete
     */
    where?: notificacionesWhereInput
    /**
     * Limit how many notificaciones to delete.
     */
    limit?: number
  }

  /**
   * notificaciones without action
   */
  export type notificacionesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notificaciones
     */
    select?: notificacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notificaciones
     */
    omit?: notificacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificacionesInclude<ExtArgs> | null
  }


  /**
   * Model productos
   */

  export type AggregateProductos = {
    _count: ProductosCountAggregateOutputType | null
    _avg: ProductosAvgAggregateOutputType | null
    _sum: ProductosSumAggregateOutputType | null
    _min: ProductosMinAggregateOutputType | null
    _max: ProductosMaxAggregateOutputType | null
  }

  export type ProductosAvgAggregateOutputType = {
    id_producto: number | null
    id_comercio: number | null
    id_categoria: number | null
    precio_base: Decimal | null
    precio_actual: Decimal | null
    cantidad_disponible: number | null
  }

  export type ProductosSumAggregateOutputType = {
    id_producto: bigint | null
    id_comercio: bigint | null
    id_categoria: bigint | null
    precio_base: Decimal | null
    precio_actual: Decimal | null
    cantidad_disponible: number | null
  }

  export type ProductosMinAggregateOutputType = {
    id_producto: bigint | null
    id_comercio: bigint | null
    id_categoria: bigint | null
    nombre: string | null
    descripcion: string | null
    precio_base: Decimal | null
    precio_actual: Decimal | null
    fecha_vencimiento: Date | null
    cantidad_disponible: number | null
    imagen_url: string | null
    fecha_publicacion: Date | null
    estado: boolean | null
    updated_at: Date | null
  }

  export type ProductosMaxAggregateOutputType = {
    id_producto: bigint | null
    id_comercio: bigint | null
    id_categoria: bigint | null
    nombre: string | null
    descripcion: string | null
    precio_base: Decimal | null
    precio_actual: Decimal | null
    fecha_vencimiento: Date | null
    cantidad_disponible: number | null
    imagen_url: string | null
    fecha_publicacion: Date | null
    estado: boolean | null
    updated_at: Date | null
  }

  export type ProductosCountAggregateOutputType = {
    id_producto: number
    id_comercio: number
    id_categoria: number
    nombre: number
    descripcion: number
    precio_base: number
    precio_actual: number
    fecha_vencimiento: number
    cantidad_disponible: number
    imagen_url: number
    fecha_publicacion: number
    estado: number
    updated_at: number
    _all: number
  }


  export type ProductosAvgAggregateInputType = {
    id_producto?: true
    id_comercio?: true
    id_categoria?: true
    precio_base?: true
    precio_actual?: true
    cantidad_disponible?: true
  }

  export type ProductosSumAggregateInputType = {
    id_producto?: true
    id_comercio?: true
    id_categoria?: true
    precio_base?: true
    precio_actual?: true
    cantidad_disponible?: true
  }

  export type ProductosMinAggregateInputType = {
    id_producto?: true
    id_comercio?: true
    id_categoria?: true
    nombre?: true
    descripcion?: true
    precio_base?: true
    precio_actual?: true
    fecha_vencimiento?: true
    cantidad_disponible?: true
    imagen_url?: true
    fecha_publicacion?: true
    estado?: true
    updated_at?: true
  }

  export type ProductosMaxAggregateInputType = {
    id_producto?: true
    id_comercio?: true
    id_categoria?: true
    nombre?: true
    descripcion?: true
    precio_base?: true
    precio_actual?: true
    fecha_vencimiento?: true
    cantidad_disponible?: true
    imagen_url?: true
    fecha_publicacion?: true
    estado?: true
    updated_at?: true
  }

  export type ProductosCountAggregateInputType = {
    id_producto?: true
    id_comercio?: true
    id_categoria?: true
    nombre?: true
    descripcion?: true
    precio_base?: true
    precio_actual?: true
    fecha_vencimiento?: true
    cantidad_disponible?: true
    imagen_url?: true
    fecha_publicacion?: true
    estado?: true
    updated_at?: true
    _all?: true
  }

  export type ProductosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which productos to aggregate.
     */
    where?: productosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productos to fetch.
     */
    orderBy?: productosOrderByWithRelationInput | productosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: productosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned productos
    **/
    _count?: true | ProductosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductosMaxAggregateInputType
  }

  export type GetProductosAggregateType<T extends ProductosAggregateArgs> = {
        [P in keyof T & keyof AggregateProductos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductos[P]>
      : GetScalarType<T[P], AggregateProductos[P]>
  }




  export type productosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productosWhereInput
    orderBy?: productosOrderByWithAggregationInput | productosOrderByWithAggregationInput[]
    by: ProductosScalarFieldEnum[] | ProductosScalarFieldEnum
    having?: productosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductosCountAggregateInputType | true
    _avg?: ProductosAvgAggregateInputType
    _sum?: ProductosSumAggregateInputType
    _min?: ProductosMinAggregateInputType
    _max?: ProductosMaxAggregateInputType
  }

  export type ProductosGroupByOutputType = {
    id_producto: bigint
    id_comercio: bigint
    id_categoria: bigint
    nombre: string
    descripcion: string | null
    precio_base: Decimal
    precio_actual: Decimal | null
    fecha_vencimiento: Date | null
    cantidad_disponible: number | null
    imagen_url: string | null
    fecha_publicacion: Date
    estado: boolean
    updated_at: Date
    _count: ProductosCountAggregateOutputType | null
    _avg: ProductosAvgAggregateOutputType | null
    _sum: ProductosSumAggregateOutputType | null
    _min: ProductosMinAggregateOutputType | null
    _max: ProductosMaxAggregateOutputType | null
  }

  type GetProductosGroupByPayload<T extends productosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductosGroupByOutputType[P]>
            : GetScalarType<T[P], ProductosGroupByOutputType[P]>
        }
      >
    >


  export type productosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_producto?: boolean
    id_comercio?: boolean
    id_categoria?: boolean
    nombre?: boolean
    descripcion?: boolean
    precio_base?: boolean
    precio_actual?: boolean
    fecha_vencimiento?: boolean
    cantidad_disponible?: boolean
    imagen_url?: boolean
    fecha_publicacion?: boolean
    estado?: boolean
    updated_at?: boolean
    categorias?: boolean | categoriasDefaultArgs<ExtArgs>
    comercios?: boolean | comerciosDefaultArgs<ExtArgs>
    reservas?: boolean | productos$reservasArgs<ExtArgs>
    _count?: boolean | ProductosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productos"]>

  export type productosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_producto?: boolean
    id_comercio?: boolean
    id_categoria?: boolean
    nombre?: boolean
    descripcion?: boolean
    precio_base?: boolean
    precio_actual?: boolean
    fecha_vencimiento?: boolean
    cantidad_disponible?: boolean
    imagen_url?: boolean
    fecha_publicacion?: boolean
    estado?: boolean
    updated_at?: boolean
    categorias?: boolean | categoriasDefaultArgs<ExtArgs>
    comercios?: boolean | comerciosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productos"]>

  export type productosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_producto?: boolean
    id_comercio?: boolean
    id_categoria?: boolean
    nombre?: boolean
    descripcion?: boolean
    precio_base?: boolean
    precio_actual?: boolean
    fecha_vencimiento?: boolean
    cantidad_disponible?: boolean
    imagen_url?: boolean
    fecha_publicacion?: boolean
    estado?: boolean
    updated_at?: boolean
    categorias?: boolean | categoriasDefaultArgs<ExtArgs>
    comercios?: boolean | comerciosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productos"]>

  export type productosSelectScalar = {
    id_producto?: boolean
    id_comercio?: boolean
    id_categoria?: boolean
    nombre?: boolean
    descripcion?: boolean
    precio_base?: boolean
    precio_actual?: boolean
    fecha_vencimiento?: boolean
    cantidad_disponible?: boolean
    imagen_url?: boolean
    fecha_publicacion?: boolean
    estado?: boolean
    updated_at?: boolean
  }

  export type productosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_producto" | "id_comercio" | "id_categoria" | "nombre" | "descripcion" | "precio_base" | "precio_actual" | "fecha_vencimiento" | "cantidad_disponible" | "imagen_url" | "fecha_publicacion" | "estado" | "updated_at", ExtArgs["result"]["productos"]>
  export type productosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categorias?: boolean | categoriasDefaultArgs<ExtArgs>
    comercios?: boolean | comerciosDefaultArgs<ExtArgs>
    reservas?: boolean | productos$reservasArgs<ExtArgs>
    _count?: boolean | ProductosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type productosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categorias?: boolean | categoriasDefaultArgs<ExtArgs>
    comercios?: boolean | comerciosDefaultArgs<ExtArgs>
  }
  export type productosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categorias?: boolean | categoriasDefaultArgs<ExtArgs>
    comercios?: boolean | comerciosDefaultArgs<ExtArgs>
  }

  export type $productosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "productos"
    objects: {
      categorias: Prisma.$categoriasPayload<ExtArgs>
      comercios: Prisma.$comerciosPayload<ExtArgs>
      reservas: Prisma.$reservasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_producto: bigint
      id_comercio: bigint
      id_categoria: bigint
      nombre: string
      descripcion: string | null
      precio_base: Prisma.Decimal
      precio_actual: Prisma.Decimal | null
      fecha_vencimiento: Date | null
      cantidad_disponible: number | null
      imagen_url: string | null
      fecha_publicacion: Date
      estado: boolean
      updated_at: Date
    }, ExtArgs["result"]["productos"]>
    composites: {}
  }

  type productosGetPayload<S extends boolean | null | undefined | productosDefaultArgs> = $Result.GetResult<Prisma.$productosPayload, S>

  type productosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<productosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductosCountAggregateInputType | true
    }

  export interface productosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['productos'], meta: { name: 'productos' } }
    /**
     * Find zero or one Productos that matches the filter.
     * @param {productosFindUniqueArgs} args - Arguments to find a Productos
     * @example
     * // Get one Productos
     * const productos = await prisma.productos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends productosFindUniqueArgs>(args: SelectSubset<T, productosFindUniqueArgs<ExtArgs>>): Prisma__productosClient<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Productos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {productosFindUniqueOrThrowArgs} args - Arguments to find a Productos
     * @example
     * // Get one Productos
     * const productos = await prisma.productos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends productosFindUniqueOrThrowArgs>(args: SelectSubset<T, productosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__productosClient<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Productos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productosFindFirstArgs} args - Arguments to find a Productos
     * @example
     * // Get one Productos
     * const productos = await prisma.productos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends productosFindFirstArgs>(args?: SelectSubset<T, productosFindFirstArgs<ExtArgs>>): Prisma__productosClient<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Productos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productosFindFirstOrThrowArgs} args - Arguments to find a Productos
     * @example
     * // Get one Productos
     * const productos = await prisma.productos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends productosFindFirstOrThrowArgs>(args?: SelectSubset<T, productosFindFirstOrThrowArgs<ExtArgs>>): Prisma__productosClient<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Productos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Productos
     * const productos = await prisma.productos.findMany()
     * 
     * // Get first 10 Productos
     * const productos = await prisma.productos.findMany({ take: 10 })
     * 
     * // Only select the `id_producto`
     * const productosWithId_productoOnly = await prisma.productos.findMany({ select: { id_producto: true } })
     * 
     */
    findMany<T extends productosFindManyArgs>(args?: SelectSubset<T, productosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Productos.
     * @param {productosCreateArgs} args - Arguments to create a Productos.
     * @example
     * // Create one Productos
     * const Productos = await prisma.productos.create({
     *   data: {
     *     // ... data to create a Productos
     *   }
     * })
     * 
     */
    create<T extends productosCreateArgs>(args: SelectSubset<T, productosCreateArgs<ExtArgs>>): Prisma__productosClient<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Productos.
     * @param {productosCreateManyArgs} args - Arguments to create many Productos.
     * @example
     * // Create many Productos
     * const productos = await prisma.productos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends productosCreateManyArgs>(args?: SelectSubset<T, productosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Productos and returns the data saved in the database.
     * @param {productosCreateManyAndReturnArgs} args - Arguments to create many Productos.
     * @example
     * // Create many Productos
     * const productos = await prisma.productos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Productos and only return the `id_producto`
     * const productosWithId_productoOnly = await prisma.productos.createManyAndReturn({
     *   select: { id_producto: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends productosCreateManyAndReturnArgs>(args?: SelectSubset<T, productosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Productos.
     * @param {productosDeleteArgs} args - Arguments to delete one Productos.
     * @example
     * // Delete one Productos
     * const Productos = await prisma.productos.delete({
     *   where: {
     *     // ... filter to delete one Productos
     *   }
     * })
     * 
     */
    delete<T extends productosDeleteArgs>(args: SelectSubset<T, productosDeleteArgs<ExtArgs>>): Prisma__productosClient<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Productos.
     * @param {productosUpdateArgs} args - Arguments to update one Productos.
     * @example
     * // Update one Productos
     * const productos = await prisma.productos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends productosUpdateArgs>(args: SelectSubset<T, productosUpdateArgs<ExtArgs>>): Prisma__productosClient<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Productos.
     * @param {productosDeleteManyArgs} args - Arguments to filter Productos to delete.
     * @example
     * // Delete a few Productos
     * const { count } = await prisma.productos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends productosDeleteManyArgs>(args?: SelectSubset<T, productosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Productos
     * const productos = await prisma.productos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends productosUpdateManyArgs>(args: SelectSubset<T, productosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Productos and returns the data updated in the database.
     * @param {productosUpdateManyAndReturnArgs} args - Arguments to update many Productos.
     * @example
     * // Update many Productos
     * const productos = await prisma.productos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Productos and only return the `id_producto`
     * const productosWithId_productoOnly = await prisma.productos.updateManyAndReturn({
     *   select: { id_producto: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends productosUpdateManyAndReturnArgs>(args: SelectSubset<T, productosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Productos.
     * @param {productosUpsertArgs} args - Arguments to update or create a Productos.
     * @example
     * // Update or create a Productos
     * const productos = await prisma.productos.upsert({
     *   create: {
     *     // ... data to create a Productos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Productos we want to update
     *   }
     * })
     */
    upsert<T extends productosUpsertArgs>(args: SelectSubset<T, productosUpsertArgs<ExtArgs>>): Prisma__productosClient<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productosCountArgs} args - Arguments to filter Productos to count.
     * @example
     * // Count the number of Productos
     * const count = await prisma.productos.count({
     *   where: {
     *     // ... the filter for the Productos we want to count
     *   }
     * })
    **/
    count<T extends productosCountArgs>(
      args?: Subset<T, productosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductosAggregateArgs>(args: Subset<T, ProductosAggregateArgs>): Prisma.PrismaPromise<GetProductosAggregateType<T>>

    /**
     * Group by Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productosGroupByArgs} args - Group by arguments.
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
      T extends productosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: productosGroupByArgs['orderBy'] }
        : { orderBy?: productosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, productosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the productos model
   */
  readonly fields: productosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for productos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__productosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categorias<T extends categoriasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, categoriasDefaultArgs<ExtArgs>>): Prisma__categoriasClient<$Result.GetResult<Prisma.$categoriasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    comercios<T extends comerciosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, comerciosDefaultArgs<ExtArgs>>): Prisma__comerciosClient<$Result.GetResult<Prisma.$comerciosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reservas<T extends productos$reservasArgs<ExtArgs> = {}>(args?: Subset<T, productos$reservasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reservasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the productos model
   */
  interface productosFieldRefs {
    readonly id_producto: FieldRef<"productos", 'BigInt'>
    readonly id_comercio: FieldRef<"productos", 'BigInt'>
    readonly id_categoria: FieldRef<"productos", 'BigInt'>
    readonly nombre: FieldRef<"productos", 'String'>
    readonly descripcion: FieldRef<"productos", 'String'>
    readonly precio_base: FieldRef<"productos", 'Decimal'>
    readonly precio_actual: FieldRef<"productos", 'Decimal'>
    readonly fecha_vencimiento: FieldRef<"productos", 'DateTime'>
    readonly cantidad_disponible: FieldRef<"productos", 'Int'>
    readonly imagen_url: FieldRef<"productos", 'String'>
    readonly fecha_publicacion: FieldRef<"productos", 'DateTime'>
    readonly estado: FieldRef<"productos", 'Boolean'>
    readonly updated_at: FieldRef<"productos", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * productos findUnique
   */
  export type productosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productos
     */
    omit?: productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productosInclude<ExtArgs> | null
    /**
     * Filter, which productos to fetch.
     */
    where: productosWhereUniqueInput
  }

  /**
   * productos findUniqueOrThrow
   */
  export type productosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productos
     */
    omit?: productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productosInclude<ExtArgs> | null
    /**
     * Filter, which productos to fetch.
     */
    where: productosWhereUniqueInput
  }

  /**
   * productos findFirst
   */
  export type productosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productos
     */
    omit?: productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productosInclude<ExtArgs> | null
    /**
     * Filter, which productos to fetch.
     */
    where?: productosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productos to fetch.
     */
    orderBy?: productosOrderByWithRelationInput | productosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for productos.
     */
    cursor?: productosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of productos.
     */
    distinct?: ProductosScalarFieldEnum | ProductosScalarFieldEnum[]
  }

  /**
   * productos findFirstOrThrow
   */
  export type productosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productos
     */
    omit?: productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productosInclude<ExtArgs> | null
    /**
     * Filter, which productos to fetch.
     */
    where?: productosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productos to fetch.
     */
    orderBy?: productosOrderByWithRelationInput | productosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for productos.
     */
    cursor?: productosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of productos.
     */
    distinct?: ProductosScalarFieldEnum | ProductosScalarFieldEnum[]
  }

  /**
   * productos findMany
   */
  export type productosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productos
     */
    omit?: productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productosInclude<ExtArgs> | null
    /**
     * Filter, which productos to fetch.
     */
    where?: productosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of productos to fetch.
     */
    orderBy?: productosOrderByWithRelationInput | productosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing productos.
     */
    cursor?: productosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` productos.
     */
    skip?: number
    distinct?: ProductosScalarFieldEnum | ProductosScalarFieldEnum[]
  }

  /**
   * productos create
   */
  export type productosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productos
     */
    omit?: productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productosInclude<ExtArgs> | null
    /**
     * The data needed to create a productos.
     */
    data: XOR<productosCreateInput, productosUncheckedCreateInput>
  }

  /**
   * productos createMany
   */
  export type productosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many productos.
     */
    data: productosCreateManyInput | productosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * productos createManyAndReturn
   */
  export type productosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the productos
     */
    omit?: productosOmit<ExtArgs> | null
    /**
     * The data used to create many productos.
     */
    data: productosCreateManyInput | productosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * productos update
   */
  export type productosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productos
     */
    omit?: productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productosInclude<ExtArgs> | null
    /**
     * The data needed to update a productos.
     */
    data: XOR<productosUpdateInput, productosUncheckedUpdateInput>
    /**
     * Choose, which productos to update.
     */
    where: productosWhereUniqueInput
  }

  /**
   * productos updateMany
   */
  export type productosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update productos.
     */
    data: XOR<productosUpdateManyMutationInput, productosUncheckedUpdateManyInput>
    /**
     * Filter which productos to update
     */
    where?: productosWhereInput
    /**
     * Limit how many productos to update.
     */
    limit?: number
  }

  /**
   * productos updateManyAndReturn
   */
  export type productosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the productos
     */
    omit?: productosOmit<ExtArgs> | null
    /**
     * The data used to update productos.
     */
    data: XOR<productosUpdateManyMutationInput, productosUncheckedUpdateManyInput>
    /**
     * Filter which productos to update
     */
    where?: productosWhereInput
    /**
     * Limit how many productos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * productos upsert
   */
  export type productosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productos
     */
    omit?: productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productosInclude<ExtArgs> | null
    /**
     * The filter to search for the productos to update in case it exists.
     */
    where: productosWhereUniqueInput
    /**
     * In case the productos found by the `where` argument doesn't exist, create a new productos with this data.
     */
    create: XOR<productosCreateInput, productosUncheckedCreateInput>
    /**
     * In case the productos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productosUpdateInput, productosUncheckedUpdateInput>
  }

  /**
   * productos delete
   */
  export type productosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productos
     */
    omit?: productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productosInclude<ExtArgs> | null
    /**
     * Filter which productos to delete.
     */
    where: productosWhereUniqueInput
  }

  /**
   * productos deleteMany
   */
  export type productosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which productos to delete
     */
    where?: productosWhereInput
    /**
     * Limit how many productos to delete.
     */
    limit?: number
  }

  /**
   * productos.reservas
   */
  export type productos$reservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservas
     */
    select?: reservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservas
     */
    omit?: reservasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservasInclude<ExtArgs> | null
    where?: reservasWhereInput
    orderBy?: reservasOrderByWithRelationInput | reservasOrderByWithRelationInput[]
    cursor?: reservasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservasScalarFieldEnum | ReservasScalarFieldEnum[]
  }

  /**
   * productos without action
   */
  export type productosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the productos
     */
    select?: productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the productos
     */
    omit?: productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productosInclude<ExtArgs> | null
  }


  /**
   * Model reservas
   */

  export type AggregateReservas = {
    _count: ReservasCountAggregateOutputType | null
    _avg: ReservasAvgAggregateOutputType | null
    _sum: ReservasSumAggregateOutputType | null
    _min: ReservasMinAggregateOutputType | null
    _max: ReservasMaxAggregateOutputType | null
  }

  export type ReservasAvgAggregateOutputType = {
    id_reserva: number | null
    id_usuario: number | null
    id_producto: number | null
    cantidad: number | null
    total: Decimal | null
  }

  export type ReservasSumAggregateOutputType = {
    id_reserva: bigint | null
    id_usuario: bigint | null
    id_producto: bigint | null
    cantidad: number | null
    total: Decimal | null
  }

  export type ReservasMinAggregateOutputType = {
    id_reserva: bigint | null
    id_usuario: bigint | null
    id_producto: bigint | null
    cantidad: number | null
    total: Decimal | null
    codigo_validacion: string | null
    estado: $Enums.reserva_estado | null
    fecha_reserva: Date | null
    ventana_retiro_inicio: Date | null
    ventana_retiro_fin: Date | null
    updated_at: Date | null
  }

  export type ReservasMaxAggregateOutputType = {
    id_reserva: bigint | null
    id_usuario: bigint | null
    id_producto: bigint | null
    cantidad: number | null
    total: Decimal | null
    codigo_validacion: string | null
    estado: $Enums.reserva_estado | null
    fecha_reserva: Date | null
    ventana_retiro_inicio: Date | null
    ventana_retiro_fin: Date | null
    updated_at: Date | null
  }

  export type ReservasCountAggregateOutputType = {
    id_reserva: number
    id_usuario: number
    id_producto: number
    cantidad: number
    total: number
    codigo_validacion: number
    estado: number
    fecha_reserva: number
    ventana_retiro_inicio: number
    ventana_retiro_fin: number
    updated_at: number
    _all: number
  }


  export type ReservasAvgAggregateInputType = {
    id_reserva?: true
    id_usuario?: true
    id_producto?: true
    cantidad?: true
    total?: true
  }

  export type ReservasSumAggregateInputType = {
    id_reserva?: true
    id_usuario?: true
    id_producto?: true
    cantidad?: true
    total?: true
  }

  export type ReservasMinAggregateInputType = {
    id_reserva?: true
    id_usuario?: true
    id_producto?: true
    cantidad?: true
    total?: true
    codigo_validacion?: true
    estado?: true
    fecha_reserva?: true
    ventana_retiro_inicio?: true
    ventana_retiro_fin?: true
    updated_at?: true
  }

  export type ReservasMaxAggregateInputType = {
    id_reserva?: true
    id_usuario?: true
    id_producto?: true
    cantidad?: true
    total?: true
    codigo_validacion?: true
    estado?: true
    fecha_reserva?: true
    ventana_retiro_inicio?: true
    ventana_retiro_fin?: true
    updated_at?: true
  }

  export type ReservasCountAggregateInputType = {
    id_reserva?: true
    id_usuario?: true
    id_producto?: true
    cantidad?: true
    total?: true
    codigo_validacion?: true
    estado?: true
    fecha_reserva?: true
    ventana_retiro_inicio?: true
    ventana_retiro_fin?: true
    updated_at?: true
    _all?: true
  }

  export type ReservasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reservas to aggregate.
     */
    where?: reservasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reservas to fetch.
     */
    orderBy?: reservasOrderByWithRelationInput | reservasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: reservasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reservas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reservas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned reservas
    **/
    _count?: true | ReservasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReservasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReservasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReservasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReservasMaxAggregateInputType
  }

  export type GetReservasAggregateType<T extends ReservasAggregateArgs> = {
        [P in keyof T & keyof AggregateReservas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReservas[P]>
      : GetScalarType<T[P], AggregateReservas[P]>
  }




  export type reservasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: reservasWhereInput
    orderBy?: reservasOrderByWithAggregationInput | reservasOrderByWithAggregationInput[]
    by: ReservasScalarFieldEnum[] | ReservasScalarFieldEnum
    having?: reservasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReservasCountAggregateInputType | true
    _avg?: ReservasAvgAggregateInputType
    _sum?: ReservasSumAggregateInputType
    _min?: ReservasMinAggregateInputType
    _max?: ReservasMaxAggregateInputType
  }

  export type ReservasGroupByOutputType = {
    id_reserva: bigint
    id_usuario: bigint
    id_producto: bigint
    cantidad: number
    total: Decimal
    codigo_validacion: string
    estado: $Enums.reserva_estado
    fecha_reserva: Date
    ventana_retiro_inicio: Date | null
    ventana_retiro_fin: Date | null
    updated_at: Date
    _count: ReservasCountAggregateOutputType | null
    _avg: ReservasAvgAggregateOutputType | null
    _sum: ReservasSumAggregateOutputType | null
    _min: ReservasMinAggregateOutputType | null
    _max: ReservasMaxAggregateOutputType | null
  }

  type GetReservasGroupByPayload<T extends reservasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReservasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReservasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReservasGroupByOutputType[P]>
            : GetScalarType<T[P], ReservasGroupByOutputType[P]>
        }
      >
    >


  export type reservasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_reserva?: boolean
    id_usuario?: boolean
    id_producto?: boolean
    cantidad?: boolean
    total?: boolean
    codigo_validacion?: boolean
    estado?: boolean
    fecha_reserva?: boolean
    ventana_retiro_inicio?: boolean
    ventana_retiro_fin?: boolean
    updated_at?: boolean
    productos?: boolean | productosDefaultArgs<ExtArgs>
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservas"]>

  export type reservasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_reserva?: boolean
    id_usuario?: boolean
    id_producto?: boolean
    cantidad?: boolean
    total?: boolean
    codigo_validacion?: boolean
    estado?: boolean
    fecha_reserva?: boolean
    ventana_retiro_inicio?: boolean
    ventana_retiro_fin?: boolean
    updated_at?: boolean
    productos?: boolean | productosDefaultArgs<ExtArgs>
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservas"]>

  export type reservasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_reserva?: boolean
    id_usuario?: boolean
    id_producto?: boolean
    cantidad?: boolean
    total?: boolean
    codigo_validacion?: boolean
    estado?: boolean
    fecha_reserva?: boolean
    ventana_retiro_inicio?: boolean
    ventana_retiro_fin?: boolean
    updated_at?: boolean
    productos?: boolean | productosDefaultArgs<ExtArgs>
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservas"]>

  export type reservasSelectScalar = {
    id_reserva?: boolean
    id_usuario?: boolean
    id_producto?: boolean
    cantidad?: boolean
    total?: boolean
    codigo_validacion?: boolean
    estado?: boolean
    fecha_reserva?: boolean
    ventana_retiro_inicio?: boolean
    ventana_retiro_fin?: boolean
    updated_at?: boolean
  }

  export type reservasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_reserva" | "id_usuario" | "id_producto" | "cantidad" | "total" | "codigo_validacion" | "estado" | "fecha_reserva" | "ventana_retiro_inicio" | "ventana_retiro_fin" | "updated_at", ExtArgs["result"]["reservas"]>
  export type reservasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productos?: boolean | productosDefaultArgs<ExtArgs>
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }
  export type reservasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productos?: boolean | productosDefaultArgs<ExtArgs>
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }
  export type reservasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productos?: boolean | productosDefaultArgs<ExtArgs>
    usuarios?: boolean | usuariosDefaultArgs<ExtArgs>
  }

  export type $reservasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "reservas"
    objects: {
      productos: Prisma.$productosPayload<ExtArgs>
      usuarios: Prisma.$usuariosPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_reserva: bigint
      id_usuario: bigint
      id_producto: bigint
      cantidad: number
      total: Prisma.Decimal
      codigo_validacion: string
      estado: $Enums.reserva_estado
      fecha_reserva: Date
      ventana_retiro_inicio: Date | null
      ventana_retiro_fin: Date | null
      updated_at: Date
    }, ExtArgs["result"]["reservas"]>
    composites: {}
  }

  type reservasGetPayload<S extends boolean | null | undefined | reservasDefaultArgs> = $Result.GetResult<Prisma.$reservasPayload, S>

  type reservasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<reservasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReservasCountAggregateInputType | true
    }

  export interface reservasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['reservas'], meta: { name: 'reservas' } }
    /**
     * Find zero or one Reservas that matches the filter.
     * @param {reservasFindUniqueArgs} args - Arguments to find a Reservas
     * @example
     * // Get one Reservas
     * const reservas = await prisma.reservas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends reservasFindUniqueArgs>(args: SelectSubset<T, reservasFindUniqueArgs<ExtArgs>>): Prisma__reservasClient<$Result.GetResult<Prisma.$reservasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reservas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {reservasFindUniqueOrThrowArgs} args - Arguments to find a Reservas
     * @example
     * // Get one Reservas
     * const reservas = await prisma.reservas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends reservasFindUniqueOrThrowArgs>(args: SelectSubset<T, reservasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__reservasClient<$Result.GetResult<Prisma.$reservasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reservas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reservasFindFirstArgs} args - Arguments to find a Reservas
     * @example
     * // Get one Reservas
     * const reservas = await prisma.reservas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends reservasFindFirstArgs>(args?: SelectSubset<T, reservasFindFirstArgs<ExtArgs>>): Prisma__reservasClient<$Result.GetResult<Prisma.$reservasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reservas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reservasFindFirstOrThrowArgs} args - Arguments to find a Reservas
     * @example
     * // Get one Reservas
     * const reservas = await prisma.reservas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends reservasFindFirstOrThrowArgs>(args?: SelectSubset<T, reservasFindFirstOrThrowArgs<ExtArgs>>): Prisma__reservasClient<$Result.GetResult<Prisma.$reservasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reservas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reservasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reservas
     * const reservas = await prisma.reservas.findMany()
     * 
     * // Get first 10 Reservas
     * const reservas = await prisma.reservas.findMany({ take: 10 })
     * 
     * // Only select the `id_reserva`
     * const reservasWithId_reservaOnly = await prisma.reservas.findMany({ select: { id_reserva: true } })
     * 
     */
    findMany<T extends reservasFindManyArgs>(args?: SelectSubset<T, reservasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reservasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reservas.
     * @param {reservasCreateArgs} args - Arguments to create a Reservas.
     * @example
     * // Create one Reservas
     * const Reservas = await prisma.reservas.create({
     *   data: {
     *     // ... data to create a Reservas
     *   }
     * })
     * 
     */
    create<T extends reservasCreateArgs>(args: SelectSubset<T, reservasCreateArgs<ExtArgs>>): Prisma__reservasClient<$Result.GetResult<Prisma.$reservasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reservas.
     * @param {reservasCreateManyArgs} args - Arguments to create many Reservas.
     * @example
     * // Create many Reservas
     * const reservas = await prisma.reservas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends reservasCreateManyArgs>(args?: SelectSubset<T, reservasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reservas and returns the data saved in the database.
     * @param {reservasCreateManyAndReturnArgs} args - Arguments to create many Reservas.
     * @example
     * // Create many Reservas
     * const reservas = await prisma.reservas.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reservas and only return the `id_reserva`
     * const reservasWithId_reservaOnly = await prisma.reservas.createManyAndReturn({
     *   select: { id_reserva: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends reservasCreateManyAndReturnArgs>(args?: SelectSubset<T, reservasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reservasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reservas.
     * @param {reservasDeleteArgs} args - Arguments to delete one Reservas.
     * @example
     * // Delete one Reservas
     * const Reservas = await prisma.reservas.delete({
     *   where: {
     *     // ... filter to delete one Reservas
     *   }
     * })
     * 
     */
    delete<T extends reservasDeleteArgs>(args: SelectSubset<T, reservasDeleteArgs<ExtArgs>>): Prisma__reservasClient<$Result.GetResult<Prisma.$reservasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reservas.
     * @param {reservasUpdateArgs} args - Arguments to update one Reservas.
     * @example
     * // Update one Reservas
     * const reservas = await prisma.reservas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends reservasUpdateArgs>(args: SelectSubset<T, reservasUpdateArgs<ExtArgs>>): Prisma__reservasClient<$Result.GetResult<Prisma.$reservasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reservas.
     * @param {reservasDeleteManyArgs} args - Arguments to filter Reservas to delete.
     * @example
     * // Delete a few Reservas
     * const { count } = await prisma.reservas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends reservasDeleteManyArgs>(args?: SelectSubset<T, reservasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reservasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reservas
     * const reservas = await prisma.reservas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends reservasUpdateManyArgs>(args: SelectSubset<T, reservasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservas and returns the data updated in the database.
     * @param {reservasUpdateManyAndReturnArgs} args - Arguments to update many Reservas.
     * @example
     * // Update many Reservas
     * const reservas = await prisma.reservas.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reservas and only return the `id_reserva`
     * const reservasWithId_reservaOnly = await prisma.reservas.updateManyAndReturn({
     *   select: { id_reserva: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends reservasUpdateManyAndReturnArgs>(args: SelectSubset<T, reservasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reservasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reservas.
     * @param {reservasUpsertArgs} args - Arguments to update or create a Reservas.
     * @example
     * // Update or create a Reservas
     * const reservas = await prisma.reservas.upsert({
     *   create: {
     *     // ... data to create a Reservas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reservas we want to update
     *   }
     * })
     */
    upsert<T extends reservasUpsertArgs>(args: SelectSubset<T, reservasUpsertArgs<ExtArgs>>): Prisma__reservasClient<$Result.GetResult<Prisma.$reservasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reservas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reservasCountArgs} args - Arguments to filter Reservas to count.
     * @example
     * // Count the number of Reservas
     * const count = await prisma.reservas.count({
     *   where: {
     *     // ... the filter for the Reservas we want to count
     *   }
     * })
    **/
    count<T extends reservasCountArgs>(
      args?: Subset<T, reservasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReservasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reservas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReservasAggregateArgs>(args: Subset<T, ReservasAggregateArgs>): Prisma.PrismaPromise<GetReservasAggregateType<T>>

    /**
     * Group by Reservas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {reservasGroupByArgs} args - Group by arguments.
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
      T extends reservasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: reservasGroupByArgs['orderBy'] }
        : { orderBy?: reservasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, reservasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReservasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the reservas model
   */
  readonly fields: reservasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for reservas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__reservasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    productos<T extends productosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productosDefaultArgs<ExtArgs>>): Prisma__productosClient<$Result.GetResult<Prisma.$productosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usuarios<T extends usuariosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuariosDefaultArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the reservas model
   */
  interface reservasFieldRefs {
    readonly id_reserva: FieldRef<"reservas", 'BigInt'>
    readonly id_usuario: FieldRef<"reservas", 'BigInt'>
    readonly id_producto: FieldRef<"reservas", 'BigInt'>
    readonly cantidad: FieldRef<"reservas", 'Int'>
    readonly total: FieldRef<"reservas", 'Decimal'>
    readonly codigo_validacion: FieldRef<"reservas", 'String'>
    readonly estado: FieldRef<"reservas", 'reserva_estado'>
    readonly fecha_reserva: FieldRef<"reservas", 'DateTime'>
    readonly ventana_retiro_inicio: FieldRef<"reservas", 'DateTime'>
    readonly ventana_retiro_fin: FieldRef<"reservas", 'DateTime'>
    readonly updated_at: FieldRef<"reservas", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * reservas findUnique
   */
  export type reservasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservas
     */
    select?: reservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservas
     */
    omit?: reservasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservasInclude<ExtArgs> | null
    /**
     * Filter, which reservas to fetch.
     */
    where: reservasWhereUniqueInput
  }

  /**
   * reservas findUniqueOrThrow
   */
  export type reservasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservas
     */
    select?: reservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservas
     */
    omit?: reservasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservasInclude<ExtArgs> | null
    /**
     * Filter, which reservas to fetch.
     */
    where: reservasWhereUniqueInput
  }

  /**
   * reservas findFirst
   */
  export type reservasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservas
     */
    select?: reservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservas
     */
    omit?: reservasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservasInclude<ExtArgs> | null
    /**
     * Filter, which reservas to fetch.
     */
    where?: reservasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reservas to fetch.
     */
    orderBy?: reservasOrderByWithRelationInput | reservasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reservas.
     */
    cursor?: reservasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reservas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reservas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reservas.
     */
    distinct?: ReservasScalarFieldEnum | ReservasScalarFieldEnum[]
  }

  /**
   * reservas findFirstOrThrow
   */
  export type reservasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservas
     */
    select?: reservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservas
     */
    omit?: reservasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservasInclude<ExtArgs> | null
    /**
     * Filter, which reservas to fetch.
     */
    where?: reservasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reservas to fetch.
     */
    orderBy?: reservasOrderByWithRelationInput | reservasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for reservas.
     */
    cursor?: reservasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reservas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reservas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of reservas.
     */
    distinct?: ReservasScalarFieldEnum | ReservasScalarFieldEnum[]
  }

  /**
   * reservas findMany
   */
  export type reservasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservas
     */
    select?: reservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservas
     */
    omit?: reservasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservasInclude<ExtArgs> | null
    /**
     * Filter, which reservas to fetch.
     */
    where?: reservasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of reservas to fetch.
     */
    orderBy?: reservasOrderByWithRelationInput | reservasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing reservas.
     */
    cursor?: reservasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` reservas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` reservas.
     */
    skip?: number
    distinct?: ReservasScalarFieldEnum | ReservasScalarFieldEnum[]
  }

  /**
   * reservas create
   */
  export type reservasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservas
     */
    select?: reservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservas
     */
    omit?: reservasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservasInclude<ExtArgs> | null
    /**
     * The data needed to create a reservas.
     */
    data: XOR<reservasCreateInput, reservasUncheckedCreateInput>
  }

  /**
   * reservas createMany
   */
  export type reservasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many reservas.
     */
    data: reservasCreateManyInput | reservasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * reservas createManyAndReturn
   */
  export type reservasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservas
     */
    select?: reservasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the reservas
     */
    omit?: reservasOmit<ExtArgs> | null
    /**
     * The data used to create many reservas.
     */
    data: reservasCreateManyInput | reservasCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservasIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * reservas update
   */
  export type reservasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservas
     */
    select?: reservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservas
     */
    omit?: reservasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservasInclude<ExtArgs> | null
    /**
     * The data needed to update a reservas.
     */
    data: XOR<reservasUpdateInput, reservasUncheckedUpdateInput>
    /**
     * Choose, which reservas to update.
     */
    where: reservasWhereUniqueInput
  }

  /**
   * reservas updateMany
   */
  export type reservasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update reservas.
     */
    data: XOR<reservasUpdateManyMutationInput, reservasUncheckedUpdateManyInput>
    /**
     * Filter which reservas to update
     */
    where?: reservasWhereInput
    /**
     * Limit how many reservas to update.
     */
    limit?: number
  }

  /**
   * reservas updateManyAndReturn
   */
  export type reservasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservas
     */
    select?: reservasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the reservas
     */
    omit?: reservasOmit<ExtArgs> | null
    /**
     * The data used to update reservas.
     */
    data: XOR<reservasUpdateManyMutationInput, reservasUncheckedUpdateManyInput>
    /**
     * Filter which reservas to update
     */
    where?: reservasWhereInput
    /**
     * Limit how many reservas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservasIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * reservas upsert
   */
  export type reservasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservas
     */
    select?: reservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservas
     */
    omit?: reservasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservasInclude<ExtArgs> | null
    /**
     * The filter to search for the reservas to update in case it exists.
     */
    where: reservasWhereUniqueInput
    /**
     * In case the reservas found by the `where` argument doesn't exist, create a new reservas with this data.
     */
    create: XOR<reservasCreateInput, reservasUncheckedCreateInput>
    /**
     * In case the reservas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<reservasUpdateInput, reservasUncheckedUpdateInput>
  }

  /**
   * reservas delete
   */
  export type reservasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservas
     */
    select?: reservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservas
     */
    omit?: reservasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservasInclude<ExtArgs> | null
    /**
     * Filter which reservas to delete.
     */
    where: reservasWhereUniqueInput
  }

  /**
   * reservas deleteMany
   */
  export type reservasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which reservas to delete
     */
    where?: reservasWhereInput
    /**
     * Limit how many reservas to delete.
     */
    limit?: number
  }

  /**
   * reservas without action
   */
  export type reservasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservas
     */
    select?: reservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservas
     */
    omit?: reservasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservasInclude<ExtArgs> | null
  }


  /**
   * Model usuarios
   */

  export type AggregateUsuarios = {
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  export type UsuariosAvgAggregateOutputType = {
    id_usuario: number | null
  }

  export type UsuariosSumAggregateOutputType = {
    id_usuario: bigint | null
  }

  export type UsuariosMinAggregateOutputType = {
    id_usuario: bigint | null
    nombre: string | null
    email: string | null
    contrasena_hash: string | null
    fecha_nacimiento: Date | null
    foto_perfil: string | null
    fecha_registro: Date | null
    estado: boolean | null
    updated_at: Date | null
  }

  export type UsuariosMaxAggregateOutputType = {
    id_usuario: bigint | null
    nombre: string | null
    email: string | null
    contrasena_hash: string | null
    fecha_nacimiento: Date | null
    foto_perfil: string | null
    fecha_registro: Date | null
    estado: boolean | null
    updated_at: Date | null
  }

  export type UsuariosCountAggregateOutputType = {
    id_usuario: number
    nombre: number
    email: number
    contrasena_hash: number
    fecha_nacimiento: number
    foto_perfil: number
    fecha_registro: number
    estado: number
    updated_at: number
    _all: number
  }


  export type UsuariosAvgAggregateInputType = {
    id_usuario?: true
  }

  export type UsuariosSumAggregateInputType = {
    id_usuario?: true
  }

  export type UsuariosMinAggregateInputType = {
    id_usuario?: true
    nombre?: true
    email?: true
    contrasena_hash?: true
    fecha_nacimiento?: true
    foto_perfil?: true
    fecha_registro?: true
    estado?: true
    updated_at?: true
  }

  export type UsuariosMaxAggregateInputType = {
    id_usuario?: true
    nombre?: true
    email?: true
    contrasena_hash?: true
    fecha_nacimiento?: true
    foto_perfil?: true
    fecha_registro?: true
    estado?: true
    updated_at?: true
  }

  export type UsuariosCountAggregateInputType = {
    id_usuario?: true
    nombre?: true
    email?: true
    contrasena_hash?: true
    fecha_nacimiento?: true
    foto_perfil?: true
    fecha_registro?: true
    estado?: true
    updated_at?: true
    _all?: true
  }

  export type UsuariosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to aggregate.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usuarios
    **/
    _count?: true | UsuariosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuariosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuariosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuariosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuariosMaxAggregateInputType
  }

  export type GetUsuariosAggregateType<T extends UsuariosAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuarios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuarios[P]>
      : GetScalarType<T[P], AggregateUsuarios[P]>
  }




  export type usuariosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuariosWhereInput
    orderBy?: usuariosOrderByWithAggregationInput | usuariosOrderByWithAggregationInput[]
    by: UsuariosScalarFieldEnum[] | UsuariosScalarFieldEnum
    having?: usuariosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuariosCountAggregateInputType | true
    _avg?: UsuariosAvgAggregateInputType
    _sum?: UsuariosSumAggregateInputType
    _min?: UsuariosMinAggregateInputType
    _max?: UsuariosMaxAggregateInputType
  }

  export type UsuariosGroupByOutputType = {
    id_usuario: bigint
    nombre: string
    email: string
    contrasena_hash: string
    fecha_nacimiento: Date | null
    foto_perfil: string | null
    fecha_registro: Date
    estado: boolean
    updated_at: Date
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  type GetUsuariosGroupByPayload<T extends usuariosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuariosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuariosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
            : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
        }
      >
    >


  export type usuariosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    nombre?: boolean
    email?: boolean
    contrasena_hash?: boolean
    fecha_nacimiento?: boolean
    foto_perfil?: boolean
    fecha_registro?: boolean
    estado?: boolean
    updated_at?: boolean
    comercios?: boolean | usuarios$comerciosArgs<ExtArgs>
    notificaciones?: boolean | usuarios$notificacionesArgs<ExtArgs>
    reservas?: boolean | usuarios$reservasArgs<ExtArgs>
    _count?: boolean | UsuariosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarios"]>

  export type usuariosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    nombre?: boolean
    email?: boolean
    contrasena_hash?: boolean
    fecha_nacimiento?: boolean
    foto_perfil?: boolean
    fecha_registro?: boolean
    estado?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["usuarios"]>

  export type usuariosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_usuario?: boolean
    nombre?: boolean
    email?: boolean
    contrasena_hash?: boolean
    fecha_nacimiento?: boolean
    foto_perfil?: boolean
    fecha_registro?: boolean
    estado?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["usuarios"]>

  export type usuariosSelectScalar = {
    id_usuario?: boolean
    nombre?: boolean
    email?: boolean
    contrasena_hash?: boolean
    fecha_nacimiento?: boolean
    foto_perfil?: boolean
    fecha_registro?: boolean
    estado?: boolean
    updated_at?: boolean
  }

  export type usuariosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_usuario" | "nombre" | "email" | "contrasena_hash" | "fecha_nacimiento" | "foto_perfil" | "fecha_registro" | "estado" | "updated_at", ExtArgs["result"]["usuarios"]>
  export type usuariosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comercios?: boolean | usuarios$comerciosArgs<ExtArgs>
    notificaciones?: boolean | usuarios$notificacionesArgs<ExtArgs>
    reservas?: boolean | usuarios$reservasArgs<ExtArgs>
    _count?: boolean | UsuariosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usuariosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usuariosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usuariosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usuarios"
    objects: {
      comercios: Prisma.$comerciosPayload<ExtArgs>[]
      notificaciones: Prisma.$notificacionesPayload<ExtArgs>[]
      reservas: Prisma.$reservasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_usuario: bigint
      nombre: string
      email: string
      contrasena_hash: string
      fecha_nacimiento: Date | null
      foto_perfil: string | null
      fecha_registro: Date
      estado: boolean
      updated_at: Date
    }, ExtArgs["result"]["usuarios"]>
    composites: {}
  }

  type usuariosGetPayload<S extends boolean | null | undefined | usuariosDefaultArgs> = $Result.GetResult<Prisma.$usuariosPayload, S>

  type usuariosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usuariosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuariosCountAggregateInputType | true
    }

  export interface usuariosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usuarios'], meta: { name: 'usuarios' } }
    /**
     * Find zero or one Usuarios that matches the filter.
     * @param {usuariosFindUniqueArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usuariosFindUniqueArgs>(args: SelectSubset<T, usuariosFindUniqueArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuarios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usuariosFindUniqueOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usuariosFindUniqueOrThrowArgs>(args: SelectSubset<T, usuariosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindFirstArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usuariosFindFirstArgs>(args?: SelectSubset<T, usuariosFindFirstArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindFirstOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usuariosFindFirstOrThrowArgs>(args?: SelectSubset<T, usuariosFindFirstOrThrowArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuarios.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuarios.findMany({ take: 10 })
     * 
     * // Only select the `id_usuario`
     * const usuariosWithId_usuarioOnly = await prisma.usuarios.findMany({ select: { id_usuario: true } })
     * 
     */
    findMany<T extends usuariosFindManyArgs>(args?: SelectSubset<T, usuariosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuarios.
     * @param {usuariosCreateArgs} args - Arguments to create a Usuarios.
     * @example
     * // Create one Usuarios
     * const Usuarios = await prisma.usuarios.create({
     *   data: {
     *     // ... data to create a Usuarios
     *   }
     * })
     * 
     */
    create<T extends usuariosCreateArgs>(args: SelectSubset<T, usuariosCreateArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {usuariosCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuarios = await prisma.usuarios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usuariosCreateManyArgs>(args?: SelectSubset<T, usuariosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {usuariosCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuarios = await prisma.usuarios.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id_usuario`
     * const usuariosWithId_usuarioOnly = await prisma.usuarios.createManyAndReturn({
     *   select: { id_usuario: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usuariosCreateManyAndReturnArgs>(args?: SelectSubset<T, usuariosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuarios.
     * @param {usuariosDeleteArgs} args - Arguments to delete one Usuarios.
     * @example
     * // Delete one Usuarios
     * const Usuarios = await prisma.usuarios.delete({
     *   where: {
     *     // ... filter to delete one Usuarios
     *   }
     * })
     * 
     */
    delete<T extends usuariosDeleteArgs>(args: SelectSubset<T, usuariosDeleteArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuarios.
     * @param {usuariosUpdateArgs} args - Arguments to update one Usuarios.
     * @example
     * // Update one Usuarios
     * const usuarios = await prisma.usuarios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usuariosUpdateArgs>(args: SelectSubset<T, usuariosUpdateArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {usuariosDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuarios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usuariosDeleteManyArgs>(args?: SelectSubset<T, usuariosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuarios = await prisma.usuarios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usuariosUpdateManyArgs>(args: SelectSubset<T, usuariosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {usuariosUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuarios = await prisma.usuarios.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id_usuario`
     * const usuariosWithId_usuarioOnly = await prisma.usuarios.updateManyAndReturn({
     *   select: { id_usuario: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usuariosUpdateManyAndReturnArgs>(args: SelectSubset<T, usuariosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuarios.
     * @param {usuariosUpsertArgs} args - Arguments to update or create a Usuarios.
     * @example
     * // Update or create a Usuarios
     * const usuarios = await prisma.usuarios.upsert({
     *   create: {
     *     // ... data to create a Usuarios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuarios we want to update
     *   }
     * })
     */
    upsert<T extends usuariosUpsertArgs>(args: SelectSubset<T, usuariosUpsertArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuarios.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends usuariosCountArgs>(
      args?: Subset<T, usuariosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuariosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuariosAggregateArgs>(args: Subset<T, UsuariosAggregateArgs>): Prisma.PrismaPromise<GetUsuariosAggregateType<T>>

    /**
     * Group by Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosGroupByArgs} args - Group by arguments.
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
      T extends usuariosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usuariosGroupByArgs['orderBy'] }
        : { orderBy?: usuariosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usuariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuariosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the usuarios model
   */
  readonly fields: usuariosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for usuarios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usuariosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    comercios<T extends usuarios$comerciosArgs<ExtArgs> = {}>(args?: Subset<T, usuarios$comerciosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$comerciosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notificaciones<T extends usuarios$notificacionesArgs<ExtArgs> = {}>(args?: Subset<T, usuarios$notificacionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notificacionesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reservas<T extends usuarios$reservasArgs<ExtArgs> = {}>(args?: Subset<T, usuarios$reservasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$reservasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the usuarios model
   */
  interface usuariosFieldRefs {
    readonly id_usuario: FieldRef<"usuarios", 'BigInt'>
    readonly nombre: FieldRef<"usuarios", 'String'>
    readonly email: FieldRef<"usuarios", 'String'>
    readonly contrasena_hash: FieldRef<"usuarios", 'String'>
    readonly fecha_nacimiento: FieldRef<"usuarios", 'DateTime'>
    readonly foto_perfil: FieldRef<"usuarios", 'String'>
    readonly fecha_registro: FieldRef<"usuarios", 'DateTime'>
    readonly estado: FieldRef<"usuarios", 'Boolean'>
    readonly updated_at: FieldRef<"usuarios", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * usuarios findUnique
   */
  export type usuariosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios findUniqueOrThrow
   */
  export type usuariosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios findFirst
   */
  export type usuariosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios findFirstOrThrow
   */
  export type usuariosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios findMany
   */
  export type usuariosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios create
   */
  export type usuariosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The data needed to create a usuarios.
     */
    data: XOR<usuariosCreateInput, usuariosUncheckedCreateInput>
  }

  /**
   * usuarios createMany
   */
  export type usuariosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usuarios.
     */
    data: usuariosCreateManyInput | usuariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuarios createManyAndReturn
   */
  export type usuariosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * The data used to create many usuarios.
     */
    data: usuariosCreateManyInput | usuariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuarios update
   */
  export type usuariosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The data needed to update a usuarios.
     */
    data: XOR<usuariosUpdateInput, usuariosUncheckedUpdateInput>
    /**
     * Choose, which usuarios to update.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios updateMany
   */
  export type usuariosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuariosUpdateManyMutationInput, usuariosUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
  }

  /**
   * usuarios updateManyAndReturn
   */
  export type usuariosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuariosUpdateManyMutationInput, usuariosUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
  }

  /**
   * usuarios upsert
   */
  export type usuariosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The filter to search for the usuarios to update in case it exists.
     */
    where: usuariosWhereUniqueInput
    /**
     * In case the usuarios found by the `where` argument doesn't exist, create a new usuarios with this data.
     */
    create: XOR<usuariosCreateInput, usuariosUncheckedCreateInput>
    /**
     * In case the usuarios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usuariosUpdateInput, usuariosUncheckedUpdateInput>
  }

  /**
   * usuarios delete
   */
  export type usuariosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter which usuarios to delete.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios deleteMany
   */
  export type usuariosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to delete
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to delete.
     */
    limit?: number
  }

  /**
   * usuarios.comercios
   */
  export type usuarios$comerciosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the comercios
     */
    select?: comerciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the comercios
     */
    omit?: comerciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: comerciosInclude<ExtArgs> | null
    where?: comerciosWhereInput
    orderBy?: comerciosOrderByWithRelationInput | comerciosOrderByWithRelationInput[]
    cursor?: comerciosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComerciosScalarFieldEnum | ComerciosScalarFieldEnum[]
  }

  /**
   * usuarios.notificaciones
   */
  export type usuarios$notificacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the notificaciones
     */
    select?: notificacionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the notificaciones
     */
    omit?: notificacionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: notificacionesInclude<ExtArgs> | null
    where?: notificacionesWhereInput
    orderBy?: notificacionesOrderByWithRelationInput | notificacionesOrderByWithRelationInput[]
    cursor?: notificacionesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificacionesScalarFieldEnum | NotificacionesScalarFieldEnum[]
  }

  /**
   * usuarios.reservas
   */
  export type usuarios$reservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reservas
     */
    select?: reservasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the reservas
     */
    omit?: reservasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: reservasInclude<ExtArgs> | null
    where?: reservasWhereInput
    orderBy?: reservasOrderByWithRelationInput | reservasOrderByWithRelationInput[]
    cursor?: reservasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservasScalarFieldEnum | ReservasScalarFieldEnum[]
  }

  /**
   * usuarios without action
   */
  export type usuariosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
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


  export const CategoriasScalarFieldEnum: {
    id_categoria: 'id_categoria',
    nombre: 'nombre',
    descripcion: 'descripcion',
    updated_at: 'updated_at'
  };

  export type CategoriasScalarFieldEnum = (typeof CategoriasScalarFieldEnum)[keyof typeof CategoriasScalarFieldEnum]


  export const ComerciosScalarFieldEnum: {
    id_comercio: 'id_comercio',
    id_usuario: 'id_usuario',
    nombre_negocio: 'nombre_negocio',
    telefono: 'telefono',
    direccion: 'direccion',
    latitud: 'latitud',
    longitud: 'longitud',
    categoria: 'categoria',
    fecha_registro: 'fecha_registro',
    estado: 'estado',
    updated_at: 'updated_at'
  };

  export type ComerciosScalarFieldEnum = (typeof ComerciosScalarFieldEnum)[keyof typeof ComerciosScalarFieldEnum]


  export const NotificacionesScalarFieldEnum: {
    id_notificacion: 'id_notificacion',
    id_usuario: 'id_usuario',
    titulo: 'titulo',
    mensaje: 'mensaje',
    tipo: 'tipo',
    fecha_envio: 'fecha_envio',
    leido: 'leido',
    updated_at: 'updated_at'
  };

  export type NotificacionesScalarFieldEnum = (typeof NotificacionesScalarFieldEnum)[keyof typeof NotificacionesScalarFieldEnum]


  export const ProductosScalarFieldEnum: {
    id_producto: 'id_producto',
    id_comercio: 'id_comercio',
    id_categoria: 'id_categoria',
    nombre: 'nombre',
    descripcion: 'descripcion',
    precio_base: 'precio_base',
    precio_actual: 'precio_actual',
    fecha_vencimiento: 'fecha_vencimiento',
    cantidad_disponible: 'cantidad_disponible',
    imagen_url: 'imagen_url',
    fecha_publicacion: 'fecha_publicacion',
    estado: 'estado',
    updated_at: 'updated_at'
  };

  export type ProductosScalarFieldEnum = (typeof ProductosScalarFieldEnum)[keyof typeof ProductosScalarFieldEnum]


  export const ReservasScalarFieldEnum: {
    id_reserva: 'id_reserva',
    id_usuario: 'id_usuario',
    id_producto: 'id_producto',
    cantidad: 'cantidad',
    total: 'total',
    codigo_validacion: 'codigo_validacion',
    estado: 'estado',
    fecha_reserva: 'fecha_reserva',
    ventana_retiro_inicio: 'ventana_retiro_inicio',
    ventana_retiro_fin: 'ventana_retiro_fin',
    updated_at: 'updated_at'
  };

  export type ReservasScalarFieldEnum = (typeof ReservasScalarFieldEnum)[keyof typeof ReservasScalarFieldEnum]


  export const UsuariosScalarFieldEnum: {
    id_usuario: 'id_usuario',
    nombre: 'nombre',
    email: 'email',
    contrasena_hash: 'contrasena_hash',
    fecha_nacimiento: 'fecha_nacimiento',
    foto_perfil: 'foto_perfil',
    fecha_registro: 'fecha_registro',
    estado: 'estado',
    updated_at: 'updated_at'
  };

  export type UsuariosScalarFieldEnum = (typeof UsuariosScalarFieldEnum)[keyof typeof UsuariosScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'reserva_estado'
   */
  export type Enumreserva_estadoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'reserva_estado'>
    


  /**
   * Reference to a field of type 'reserva_estado[]'
   */
  export type ListEnumreserva_estadoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'reserva_estado[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type categoriasWhereInput = {
    AND?: categoriasWhereInput | categoriasWhereInput[]
    OR?: categoriasWhereInput[]
    NOT?: categoriasWhereInput | categoriasWhereInput[]
    id_categoria?: BigIntFilter<"categorias"> | bigint | number
    nombre?: StringFilter<"categorias"> | string
    descripcion?: StringNullableFilter<"categorias"> | string | null
    updated_at?: DateTimeFilter<"categorias"> | Date | string
    productos?: ProductosListRelationFilter
  }

  export type categoriasOrderByWithRelationInput = {
    id_categoria?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    updated_at?: SortOrder
    productos?: productosOrderByRelationAggregateInput
  }

  export type categoriasWhereUniqueInput = Prisma.AtLeast<{
    id_categoria?: bigint | number
    AND?: categoriasWhereInput | categoriasWhereInput[]
    OR?: categoriasWhereInput[]
    NOT?: categoriasWhereInput | categoriasWhereInput[]
    nombre?: StringFilter<"categorias"> | string
    descripcion?: StringNullableFilter<"categorias"> | string | null
    updated_at?: DateTimeFilter<"categorias"> | Date | string
    productos?: ProductosListRelationFilter
  }, "id_categoria">

  export type categoriasOrderByWithAggregationInput = {
    id_categoria?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    updated_at?: SortOrder
    _count?: categoriasCountOrderByAggregateInput
    _avg?: categoriasAvgOrderByAggregateInput
    _max?: categoriasMaxOrderByAggregateInput
    _min?: categoriasMinOrderByAggregateInput
    _sum?: categoriasSumOrderByAggregateInput
  }

  export type categoriasScalarWhereWithAggregatesInput = {
    AND?: categoriasScalarWhereWithAggregatesInput | categoriasScalarWhereWithAggregatesInput[]
    OR?: categoriasScalarWhereWithAggregatesInput[]
    NOT?: categoriasScalarWhereWithAggregatesInput | categoriasScalarWhereWithAggregatesInput[]
    id_categoria?: BigIntWithAggregatesFilter<"categorias"> | bigint | number
    nombre?: StringWithAggregatesFilter<"categorias"> | string
    descripcion?: StringNullableWithAggregatesFilter<"categorias"> | string | null
    updated_at?: DateTimeWithAggregatesFilter<"categorias"> | Date | string
  }

  export type comerciosWhereInput = {
    AND?: comerciosWhereInput | comerciosWhereInput[]
    OR?: comerciosWhereInput[]
    NOT?: comerciosWhereInput | comerciosWhereInput[]
    id_comercio?: BigIntFilter<"comercios"> | bigint | number
    id_usuario?: BigIntFilter<"comercios"> | bigint | number
    nombre_negocio?: StringFilter<"comercios"> | string
    telefono?: StringNullableFilter<"comercios"> | string | null
    direccion?: StringNullableFilter<"comercios"> | string | null
    latitud?: DecimalNullableFilter<"comercios"> | Decimal | DecimalJsLike | number | string | null
    longitud?: DecimalNullableFilter<"comercios"> | Decimal | DecimalJsLike | number | string | null
    categoria?: StringNullableFilter<"comercios"> | string | null
    fecha_registro?: DateTimeFilter<"comercios"> | Date | string
    estado?: BoolFilter<"comercios"> | boolean
    updated_at?: DateTimeFilter<"comercios"> | Date | string
    usuarios?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
    productos?: ProductosListRelationFilter
  }

  export type comerciosOrderByWithRelationInput = {
    id_comercio?: SortOrder
    id_usuario?: SortOrder
    nombre_negocio?: SortOrder
    telefono?: SortOrderInput | SortOrder
    direccion?: SortOrderInput | SortOrder
    latitud?: SortOrderInput | SortOrder
    longitud?: SortOrderInput | SortOrder
    categoria?: SortOrderInput | SortOrder
    fecha_registro?: SortOrder
    estado?: SortOrder
    updated_at?: SortOrder
    usuarios?: usuariosOrderByWithRelationInput
    productos?: productosOrderByRelationAggregateInput
  }

  export type comerciosWhereUniqueInput = Prisma.AtLeast<{
    id_comercio?: bigint | number
    AND?: comerciosWhereInput | comerciosWhereInput[]
    OR?: comerciosWhereInput[]
    NOT?: comerciosWhereInput | comerciosWhereInput[]
    id_usuario?: BigIntFilter<"comercios"> | bigint | number
    nombre_negocio?: StringFilter<"comercios"> | string
    telefono?: StringNullableFilter<"comercios"> | string | null
    direccion?: StringNullableFilter<"comercios"> | string | null
    latitud?: DecimalNullableFilter<"comercios"> | Decimal | DecimalJsLike | number | string | null
    longitud?: DecimalNullableFilter<"comercios"> | Decimal | DecimalJsLike | number | string | null
    categoria?: StringNullableFilter<"comercios"> | string | null
    fecha_registro?: DateTimeFilter<"comercios"> | Date | string
    estado?: BoolFilter<"comercios"> | boolean
    updated_at?: DateTimeFilter<"comercios"> | Date | string
    usuarios?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
    productos?: ProductosListRelationFilter
  }, "id_comercio">

  export type comerciosOrderByWithAggregationInput = {
    id_comercio?: SortOrder
    id_usuario?: SortOrder
    nombre_negocio?: SortOrder
    telefono?: SortOrderInput | SortOrder
    direccion?: SortOrderInput | SortOrder
    latitud?: SortOrderInput | SortOrder
    longitud?: SortOrderInput | SortOrder
    categoria?: SortOrderInput | SortOrder
    fecha_registro?: SortOrder
    estado?: SortOrder
    updated_at?: SortOrder
    _count?: comerciosCountOrderByAggregateInput
    _avg?: comerciosAvgOrderByAggregateInput
    _max?: comerciosMaxOrderByAggregateInput
    _min?: comerciosMinOrderByAggregateInput
    _sum?: comerciosSumOrderByAggregateInput
  }

  export type comerciosScalarWhereWithAggregatesInput = {
    AND?: comerciosScalarWhereWithAggregatesInput | comerciosScalarWhereWithAggregatesInput[]
    OR?: comerciosScalarWhereWithAggregatesInput[]
    NOT?: comerciosScalarWhereWithAggregatesInput | comerciosScalarWhereWithAggregatesInput[]
    id_comercio?: BigIntWithAggregatesFilter<"comercios"> | bigint | number
    id_usuario?: BigIntWithAggregatesFilter<"comercios"> | bigint | number
    nombre_negocio?: StringWithAggregatesFilter<"comercios"> | string
    telefono?: StringNullableWithAggregatesFilter<"comercios"> | string | null
    direccion?: StringNullableWithAggregatesFilter<"comercios"> | string | null
    latitud?: DecimalNullableWithAggregatesFilter<"comercios"> | Decimal | DecimalJsLike | number | string | null
    longitud?: DecimalNullableWithAggregatesFilter<"comercios"> | Decimal | DecimalJsLike | number | string | null
    categoria?: StringNullableWithAggregatesFilter<"comercios"> | string | null
    fecha_registro?: DateTimeWithAggregatesFilter<"comercios"> | Date | string
    estado?: BoolWithAggregatesFilter<"comercios"> | boolean
    updated_at?: DateTimeWithAggregatesFilter<"comercios"> | Date | string
  }

  export type notificacionesWhereInput = {
    AND?: notificacionesWhereInput | notificacionesWhereInput[]
    OR?: notificacionesWhereInput[]
    NOT?: notificacionesWhereInput | notificacionesWhereInput[]
    id_notificacion?: BigIntFilter<"notificaciones"> | bigint | number
    id_usuario?: BigIntFilter<"notificaciones"> | bigint | number
    titulo?: StringNullableFilter<"notificaciones"> | string | null
    mensaje?: StringNullableFilter<"notificaciones"> | string | null
    tipo?: StringNullableFilter<"notificaciones"> | string | null
    fecha_envio?: DateTimeFilter<"notificaciones"> | Date | string
    leido?: BoolFilter<"notificaciones"> | boolean
    updated_at?: DateTimeFilter<"notificaciones"> | Date | string
    usuarios?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
  }

  export type notificacionesOrderByWithRelationInput = {
    id_notificacion?: SortOrder
    id_usuario?: SortOrder
    titulo?: SortOrderInput | SortOrder
    mensaje?: SortOrderInput | SortOrder
    tipo?: SortOrderInput | SortOrder
    fecha_envio?: SortOrder
    leido?: SortOrder
    updated_at?: SortOrder
    usuarios?: usuariosOrderByWithRelationInput
  }

  export type notificacionesWhereUniqueInput = Prisma.AtLeast<{
    id_notificacion?: bigint | number
    AND?: notificacionesWhereInput | notificacionesWhereInput[]
    OR?: notificacionesWhereInput[]
    NOT?: notificacionesWhereInput | notificacionesWhereInput[]
    id_usuario?: BigIntFilter<"notificaciones"> | bigint | number
    titulo?: StringNullableFilter<"notificaciones"> | string | null
    mensaje?: StringNullableFilter<"notificaciones"> | string | null
    tipo?: StringNullableFilter<"notificaciones"> | string | null
    fecha_envio?: DateTimeFilter<"notificaciones"> | Date | string
    leido?: BoolFilter<"notificaciones"> | boolean
    updated_at?: DateTimeFilter<"notificaciones"> | Date | string
    usuarios?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
  }, "id_notificacion">

  export type notificacionesOrderByWithAggregationInput = {
    id_notificacion?: SortOrder
    id_usuario?: SortOrder
    titulo?: SortOrderInput | SortOrder
    mensaje?: SortOrderInput | SortOrder
    tipo?: SortOrderInput | SortOrder
    fecha_envio?: SortOrder
    leido?: SortOrder
    updated_at?: SortOrder
    _count?: notificacionesCountOrderByAggregateInput
    _avg?: notificacionesAvgOrderByAggregateInput
    _max?: notificacionesMaxOrderByAggregateInput
    _min?: notificacionesMinOrderByAggregateInput
    _sum?: notificacionesSumOrderByAggregateInput
  }

  export type notificacionesScalarWhereWithAggregatesInput = {
    AND?: notificacionesScalarWhereWithAggregatesInput | notificacionesScalarWhereWithAggregatesInput[]
    OR?: notificacionesScalarWhereWithAggregatesInput[]
    NOT?: notificacionesScalarWhereWithAggregatesInput | notificacionesScalarWhereWithAggregatesInput[]
    id_notificacion?: BigIntWithAggregatesFilter<"notificaciones"> | bigint | number
    id_usuario?: BigIntWithAggregatesFilter<"notificaciones"> | bigint | number
    titulo?: StringNullableWithAggregatesFilter<"notificaciones"> | string | null
    mensaje?: StringNullableWithAggregatesFilter<"notificaciones"> | string | null
    tipo?: StringNullableWithAggregatesFilter<"notificaciones"> | string | null
    fecha_envio?: DateTimeWithAggregatesFilter<"notificaciones"> | Date | string
    leido?: BoolWithAggregatesFilter<"notificaciones"> | boolean
    updated_at?: DateTimeWithAggregatesFilter<"notificaciones"> | Date | string
  }

  export type productosWhereInput = {
    AND?: productosWhereInput | productosWhereInput[]
    OR?: productosWhereInput[]
    NOT?: productosWhereInput | productosWhereInput[]
    id_producto?: BigIntFilter<"productos"> | bigint | number
    id_comercio?: BigIntFilter<"productos"> | bigint | number
    id_categoria?: BigIntFilter<"productos"> | bigint | number
    nombre?: StringFilter<"productos"> | string
    descripcion?: StringNullableFilter<"productos"> | string | null
    precio_base?: DecimalFilter<"productos"> | Decimal | DecimalJsLike | number | string
    precio_actual?: DecimalNullableFilter<"productos"> | Decimal | DecimalJsLike | number | string | null
    fecha_vencimiento?: DateTimeNullableFilter<"productos"> | Date | string | null
    cantidad_disponible?: IntNullableFilter<"productos"> | number | null
    imagen_url?: StringNullableFilter<"productos"> | string | null
    fecha_publicacion?: DateTimeFilter<"productos"> | Date | string
    estado?: BoolFilter<"productos"> | boolean
    updated_at?: DateTimeFilter<"productos"> | Date | string
    categorias?: XOR<CategoriasScalarRelationFilter, categoriasWhereInput>
    comercios?: XOR<ComerciosScalarRelationFilter, comerciosWhereInput>
    reservas?: ReservasListRelationFilter
  }

  export type productosOrderByWithRelationInput = {
    id_producto?: SortOrder
    id_comercio?: SortOrder
    id_categoria?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    precio_base?: SortOrder
    precio_actual?: SortOrderInput | SortOrder
    fecha_vencimiento?: SortOrderInput | SortOrder
    cantidad_disponible?: SortOrderInput | SortOrder
    imagen_url?: SortOrderInput | SortOrder
    fecha_publicacion?: SortOrder
    estado?: SortOrder
    updated_at?: SortOrder
    categorias?: categoriasOrderByWithRelationInput
    comercios?: comerciosOrderByWithRelationInput
    reservas?: reservasOrderByRelationAggregateInput
  }

  export type productosWhereUniqueInput = Prisma.AtLeast<{
    id_producto?: bigint | number
    AND?: productosWhereInput | productosWhereInput[]
    OR?: productosWhereInput[]
    NOT?: productosWhereInput | productosWhereInput[]
    id_comercio?: BigIntFilter<"productos"> | bigint | number
    id_categoria?: BigIntFilter<"productos"> | bigint | number
    nombre?: StringFilter<"productos"> | string
    descripcion?: StringNullableFilter<"productos"> | string | null
    precio_base?: DecimalFilter<"productos"> | Decimal | DecimalJsLike | number | string
    precio_actual?: DecimalNullableFilter<"productos"> | Decimal | DecimalJsLike | number | string | null
    fecha_vencimiento?: DateTimeNullableFilter<"productos"> | Date | string | null
    cantidad_disponible?: IntNullableFilter<"productos"> | number | null
    imagen_url?: StringNullableFilter<"productos"> | string | null
    fecha_publicacion?: DateTimeFilter<"productos"> | Date | string
    estado?: BoolFilter<"productos"> | boolean
    updated_at?: DateTimeFilter<"productos"> | Date | string
    categorias?: XOR<CategoriasScalarRelationFilter, categoriasWhereInput>
    comercios?: XOR<ComerciosScalarRelationFilter, comerciosWhereInput>
    reservas?: ReservasListRelationFilter
  }, "id_producto">

  export type productosOrderByWithAggregationInput = {
    id_producto?: SortOrder
    id_comercio?: SortOrder
    id_categoria?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    precio_base?: SortOrder
    precio_actual?: SortOrderInput | SortOrder
    fecha_vencimiento?: SortOrderInput | SortOrder
    cantidad_disponible?: SortOrderInput | SortOrder
    imagen_url?: SortOrderInput | SortOrder
    fecha_publicacion?: SortOrder
    estado?: SortOrder
    updated_at?: SortOrder
    _count?: productosCountOrderByAggregateInput
    _avg?: productosAvgOrderByAggregateInput
    _max?: productosMaxOrderByAggregateInput
    _min?: productosMinOrderByAggregateInput
    _sum?: productosSumOrderByAggregateInput
  }

  export type productosScalarWhereWithAggregatesInput = {
    AND?: productosScalarWhereWithAggregatesInput | productosScalarWhereWithAggregatesInput[]
    OR?: productosScalarWhereWithAggregatesInput[]
    NOT?: productosScalarWhereWithAggregatesInput | productosScalarWhereWithAggregatesInput[]
    id_producto?: BigIntWithAggregatesFilter<"productos"> | bigint | number
    id_comercio?: BigIntWithAggregatesFilter<"productos"> | bigint | number
    id_categoria?: BigIntWithAggregatesFilter<"productos"> | bigint | number
    nombre?: StringWithAggregatesFilter<"productos"> | string
    descripcion?: StringNullableWithAggregatesFilter<"productos"> | string | null
    precio_base?: DecimalWithAggregatesFilter<"productos"> | Decimal | DecimalJsLike | number | string
    precio_actual?: DecimalNullableWithAggregatesFilter<"productos"> | Decimal | DecimalJsLike | number | string | null
    fecha_vencimiento?: DateTimeNullableWithAggregatesFilter<"productos"> | Date | string | null
    cantidad_disponible?: IntNullableWithAggregatesFilter<"productos"> | number | null
    imagen_url?: StringNullableWithAggregatesFilter<"productos"> | string | null
    fecha_publicacion?: DateTimeWithAggregatesFilter<"productos"> | Date | string
    estado?: BoolWithAggregatesFilter<"productos"> | boolean
    updated_at?: DateTimeWithAggregatesFilter<"productos"> | Date | string
  }

  export type reservasWhereInput = {
    AND?: reservasWhereInput | reservasWhereInput[]
    OR?: reservasWhereInput[]
    NOT?: reservasWhereInput | reservasWhereInput[]
    id_reserva?: BigIntFilter<"reservas"> | bigint | number
    id_usuario?: BigIntFilter<"reservas"> | bigint | number
    id_producto?: BigIntFilter<"reservas"> | bigint | number
    cantidad?: IntFilter<"reservas"> | number
    total?: DecimalFilter<"reservas"> | Decimal | DecimalJsLike | number | string
    codigo_validacion?: StringFilter<"reservas"> | string
    estado?: Enumreserva_estadoFilter<"reservas"> | $Enums.reserva_estado
    fecha_reserva?: DateTimeFilter<"reservas"> | Date | string
    ventana_retiro_inicio?: DateTimeNullableFilter<"reservas"> | Date | string | null
    ventana_retiro_fin?: DateTimeNullableFilter<"reservas"> | Date | string | null
    updated_at?: DateTimeFilter<"reservas"> | Date | string
    productos?: XOR<ProductosScalarRelationFilter, productosWhereInput>
    usuarios?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
  }

  export type reservasOrderByWithRelationInput = {
    id_reserva?: SortOrder
    id_usuario?: SortOrder
    id_producto?: SortOrder
    cantidad?: SortOrder
    total?: SortOrder
    codigo_validacion?: SortOrder
    estado?: SortOrder
    fecha_reserva?: SortOrder
    ventana_retiro_inicio?: SortOrderInput | SortOrder
    ventana_retiro_fin?: SortOrderInput | SortOrder
    updated_at?: SortOrder
    productos?: productosOrderByWithRelationInput
    usuarios?: usuariosOrderByWithRelationInput
  }

  export type reservasWhereUniqueInput = Prisma.AtLeast<{
    id_reserva?: bigint | number
    codigo_validacion?: string
    AND?: reservasWhereInput | reservasWhereInput[]
    OR?: reservasWhereInput[]
    NOT?: reservasWhereInput | reservasWhereInput[]
    id_usuario?: BigIntFilter<"reservas"> | bigint | number
    id_producto?: BigIntFilter<"reservas"> | bigint | number
    cantidad?: IntFilter<"reservas"> | number
    total?: DecimalFilter<"reservas"> | Decimal | DecimalJsLike | number | string
    estado?: Enumreserva_estadoFilter<"reservas"> | $Enums.reserva_estado
    fecha_reserva?: DateTimeFilter<"reservas"> | Date | string
    ventana_retiro_inicio?: DateTimeNullableFilter<"reservas"> | Date | string | null
    ventana_retiro_fin?: DateTimeNullableFilter<"reservas"> | Date | string | null
    updated_at?: DateTimeFilter<"reservas"> | Date | string
    productos?: XOR<ProductosScalarRelationFilter, productosWhereInput>
    usuarios?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
  }, "id_reserva" | "codigo_validacion">

  export type reservasOrderByWithAggregationInput = {
    id_reserva?: SortOrder
    id_usuario?: SortOrder
    id_producto?: SortOrder
    cantidad?: SortOrder
    total?: SortOrder
    codigo_validacion?: SortOrder
    estado?: SortOrder
    fecha_reserva?: SortOrder
    ventana_retiro_inicio?: SortOrderInput | SortOrder
    ventana_retiro_fin?: SortOrderInput | SortOrder
    updated_at?: SortOrder
    _count?: reservasCountOrderByAggregateInput
    _avg?: reservasAvgOrderByAggregateInput
    _max?: reservasMaxOrderByAggregateInput
    _min?: reservasMinOrderByAggregateInput
    _sum?: reservasSumOrderByAggregateInput
  }

  export type reservasScalarWhereWithAggregatesInput = {
    AND?: reservasScalarWhereWithAggregatesInput | reservasScalarWhereWithAggregatesInput[]
    OR?: reservasScalarWhereWithAggregatesInput[]
    NOT?: reservasScalarWhereWithAggregatesInput | reservasScalarWhereWithAggregatesInput[]
    id_reserva?: BigIntWithAggregatesFilter<"reservas"> | bigint | number
    id_usuario?: BigIntWithAggregatesFilter<"reservas"> | bigint | number
    id_producto?: BigIntWithAggregatesFilter<"reservas"> | bigint | number
    cantidad?: IntWithAggregatesFilter<"reservas"> | number
    total?: DecimalWithAggregatesFilter<"reservas"> | Decimal | DecimalJsLike | number | string
    codigo_validacion?: StringWithAggregatesFilter<"reservas"> | string
    estado?: Enumreserva_estadoWithAggregatesFilter<"reservas"> | $Enums.reserva_estado
    fecha_reserva?: DateTimeWithAggregatesFilter<"reservas"> | Date | string
    ventana_retiro_inicio?: DateTimeNullableWithAggregatesFilter<"reservas"> | Date | string | null
    ventana_retiro_fin?: DateTimeNullableWithAggregatesFilter<"reservas"> | Date | string | null
    updated_at?: DateTimeWithAggregatesFilter<"reservas"> | Date | string
  }

  export type usuariosWhereInput = {
    AND?: usuariosWhereInput | usuariosWhereInput[]
    OR?: usuariosWhereInput[]
    NOT?: usuariosWhereInput | usuariosWhereInput[]
    id_usuario?: BigIntFilter<"usuarios"> | bigint | number
    nombre?: StringFilter<"usuarios"> | string
    email?: StringFilter<"usuarios"> | string
    contrasena_hash?: StringFilter<"usuarios"> | string
    fecha_nacimiento?: DateTimeNullableFilter<"usuarios"> | Date | string | null
    foto_perfil?: StringNullableFilter<"usuarios"> | string | null
    fecha_registro?: DateTimeFilter<"usuarios"> | Date | string
    estado?: BoolFilter<"usuarios"> | boolean
    updated_at?: DateTimeFilter<"usuarios"> | Date | string
    comercios?: ComerciosListRelationFilter
    notificaciones?: NotificacionesListRelationFilter
    reservas?: ReservasListRelationFilter
  }

  export type usuariosOrderByWithRelationInput = {
    id_usuario?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    contrasena_hash?: SortOrder
    fecha_nacimiento?: SortOrderInput | SortOrder
    foto_perfil?: SortOrderInput | SortOrder
    fecha_registro?: SortOrder
    estado?: SortOrder
    updated_at?: SortOrder
    comercios?: comerciosOrderByRelationAggregateInput
    notificaciones?: notificacionesOrderByRelationAggregateInput
    reservas?: reservasOrderByRelationAggregateInput
  }

  export type usuariosWhereUniqueInput = Prisma.AtLeast<{
    id_usuario?: bigint | number
    email?: string
    AND?: usuariosWhereInput | usuariosWhereInput[]
    OR?: usuariosWhereInput[]
    NOT?: usuariosWhereInput | usuariosWhereInput[]
    nombre?: StringFilter<"usuarios"> | string
    contrasena_hash?: StringFilter<"usuarios"> | string
    fecha_nacimiento?: DateTimeNullableFilter<"usuarios"> | Date | string | null
    foto_perfil?: StringNullableFilter<"usuarios"> | string | null
    fecha_registro?: DateTimeFilter<"usuarios"> | Date | string
    estado?: BoolFilter<"usuarios"> | boolean
    updated_at?: DateTimeFilter<"usuarios"> | Date | string
    comercios?: ComerciosListRelationFilter
    notificaciones?: NotificacionesListRelationFilter
    reservas?: ReservasListRelationFilter
  }, "id_usuario" | "email">

  export type usuariosOrderByWithAggregationInput = {
    id_usuario?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    contrasena_hash?: SortOrder
    fecha_nacimiento?: SortOrderInput | SortOrder
    foto_perfil?: SortOrderInput | SortOrder
    fecha_registro?: SortOrder
    estado?: SortOrder
    updated_at?: SortOrder
    _count?: usuariosCountOrderByAggregateInput
    _avg?: usuariosAvgOrderByAggregateInput
    _max?: usuariosMaxOrderByAggregateInput
    _min?: usuariosMinOrderByAggregateInput
    _sum?: usuariosSumOrderByAggregateInput
  }

  export type usuariosScalarWhereWithAggregatesInput = {
    AND?: usuariosScalarWhereWithAggregatesInput | usuariosScalarWhereWithAggregatesInput[]
    OR?: usuariosScalarWhereWithAggregatesInput[]
    NOT?: usuariosScalarWhereWithAggregatesInput | usuariosScalarWhereWithAggregatesInput[]
    id_usuario?: BigIntWithAggregatesFilter<"usuarios"> | bigint | number
    nombre?: StringWithAggregatesFilter<"usuarios"> | string
    email?: StringWithAggregatesFilter<"usuarios"> | string
    contrasena_hash?: StringWithAggregatesFilter<"usuarios"> | string
    fecha_nacimiento?: DateTimeNullableWithAggregatesFilter<"usuarios"> | Date | string | null
    foto_perfil?: StringNullableWithAggregatesFilter<"usuarios"> | string | null
    fecha_registro?: DateTimeWithAggregatesFilter<"usuarios"> | Date | string
    estado?: BoolWithAggregatesFilter<"usuarios"> | boolean
    updated_at?: DateTimeWithAggregatesFilter<"usuarios"> | Date | string
  }

  export type categoriasCreateInput = {
    id_categoria?: bigint | number
    nombre: string
    descripcion?: string | null
    updated_at?: Date | string
    productos?: productosCreateNestedManyWithoutCategoriasInput
  }

  export type categoriasUncheckedCreateInput = {
    id_categoria?: bigint | number
    nombre: string
    descripcion?: string | null
    updated_at?: Date | string
    productos?: productosUncheckedCreateNestedManyWithoutCategoriasInput
  }

  export type categoriasUpdateInput = {
    id_categoria?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    productos?: productosUpdateManyWithoutCategoriasNestedInput
  }

  export type categoriasUncheckedUpdateInput = {
    id_categoria?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    productos?: productosUncheckedUpdateManyWithoutCategoriasNestedInput
  }

  export type categoriasCreateManyInput = {
    id_categoria?: bigint | number
    nombre: string
    descripcion?: string | null
    updated_at?: Date | string
  }

  export type categoriasUpdateManyMutationInput = {
    id_categoria?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type categoriasUncheckedUpdateManyInput = {
    id_categoria?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type comerciosCreateInput = {
    id_comercio?: bigint | number
    nombre_negocio: string
    telefono?: string | null
    direccion?: string | null
    latitud?: Decimal | DecimalJsLike | number | string | null
    longitud?: Decimal | DecimalJsLike | number | string | null
    categoria?: string | null
    fecha_registro?: Date | string
    estado?: boolean
    updated_at?: Date | string
    usuarios: usuariosCreateNestedOneWithoutComerciosInput
    productos?: productosCreateNestedManyWithoutComerciosInput
  }

  export type comerciosUncheckedCreateInput = {
    id_comercio?: bigint | number
    id_usuario: bigint | number
    nombre_negocio: string
    telefono?: string | null
    direccion?: string | null
    latitud?: Decimal | DecimalJsLike | number | string | null
    longitud?: Decimal | DecimalJsLike | number | string | null
    categoria?: string | null
    fecha_registro?: Date | string
    estado?: boolean
    updated_at?: Date | string
    productos?: productosUncheckedCreateNestedManyWithoutComerciosInput
  }

  export type comerciosUpdateInput = {
    id_comercio?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre_negocio?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    latitud?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitud?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarios?: usuariosUpdateOneRequiredWithoutComerciosNestedInput
    productos?: productosUpdateManyWithoutComerciosNestedInput
  }

  export type comerciosUncheckedUpdateInput = {
    id_comercio?: BigIntFieldUpdateOperationsInput | bigint | number
    id_usuario?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre_negocio?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    latitud?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitud?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    productos?: productosUncheckedUpdateManyWithoutComerciosNestedInput
  }

  export type comerciosCreateManyInput = {
    id_comercio?: bigint | number
    id_usuario: bigint | number
    nombre_negocio: string
    telefono?: string | null
    direccion?: string | null
    latitud?: Decimal | DecimalJsLike | number | string | null
    longitud?: Decimal | DecimalJsLike | number | string | null
    categoria?: string | null
    fecha_registro?: Date | string
    estado?: boolean
    updated_at?: Date | string
  }

  export type comerciosUpdateManyMutationInput = {
    id_comercio?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre_negocio?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    latitud?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitud?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type comerciosUncheckedUpdateManyInput = {
    id_comercio?: BigIntFieldUpdateOperationsInput | bigint | number
    id_usuario?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre_negocio?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    latitud?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitud?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type notificacionesCreateInput = {
    id_notificacion?: bigint | number
    titulo?: string | null
    mensaje?: string | null
    tipo?: string | null
    fecha_envio?: Date | string
    leido?: boolean
    updated_at?: Date | string
    usuarios: usuariosCreateNestedOneWithoutNotificacionesInput
  }

  export type notificacionesUncheckedCreateInput = {
    id_notificacion?: bigint | number
    id_usuario: bigint | number
    titulo?: string | null
    mensaje?: string | null
    tipo?: string | null
    fecha_envio?: Date | string
    leido?: boolean
    updated_at?: Date | string
  }

  export type notificacionesUpdateInput = {
    id_notificacion?: BigIntFieldUpdateOperationsInput | bigint | number
    titulo?: NullableStringFieldUpdateOperationsInput | string | null
    mensaje?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_envio?: DateTimeFieldUpdateOperationsInput | Date | string
    leido?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarios?: usuariosUpdateOneRequiredWithoutNotificacionesNestedInput
  }

  export type notificacionesUncheckedUpdateInput = {
    id_notificacion?: BigIntFieldUpdateOperationsInput | bigint | number
    id_usuario?: BigIntFieldUpdateOperationsInput | bigint | number
    titulo?: NullableStringFieldUpdateOperationsInput | string | null
    mensaje?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_envio?: DateTimeFieldUpdateOperationsInput | Date | string
    leido?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type notificacionesCreateManyInput = {
    id_notificacion?: bigint | number
    id_usuario: bigint | number
    titulo?: string | null
    mensaje?: string | null
    tipo?: string | null
    fecha_envio?: Date | string
    leido?: boolean
    updated_at?: Date | string
  }

  export type notificacionesUpdateManyMutationInput = {
    id_notificacion?: BigIntFieldUpdateOperationsInput | bigint | number
    titulo?: NullableStringFieldUpdateOperationsInput | string | null
    mensaje?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_envio?: DateTimeFieldUpdateOperationsInput | Date | string
    leido?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type notificacionesUncheckedUpdateManyInput = {
    id_notificacion?: BigIntFieldUpdateOperationsInput | bigint | number
    id_usuario?: BigIntFieldUpdateOperationsInput | bigint | number
    titulo?: NullableStringFieldUpdateOperationsInput | string | null
    mensaje?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_envio?: DateTimeFieldUpdateOperationsInput | Date | string
    leido?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productosCreateInput = {
    id_producto?: bigint | number
    nombre: string
    descripcion?: string | null
    precio_base: Decimal | DecimalJsLike | number | string
    precio_actual?: Decimal | DecimalJsLike | number | string | null
    fecha_vencimiento?: Date | string | null
    cantidad_disponible?: number | null
    imagen_url?: string | null
    fecha_publicacion?: Date | string
    estado?: boolean
    updated_at?: Date | string
    categorias: categoriasCreateNestedOneWithoutProductosInput
    comercios: comerciosCreateNestedOneWithoutProductosInput
    reservas?: reservasCreateNestedManyWithoutProductosInput
  }

  export type productosUncheckedCreateInput = {
    id_producto?: bigint | number
    id_comercio: bigint | number
    id_categoria: bigint | number
    nombre: string
    descripcion?: string | null
    precio_base: Decimal | DecimalJsLike | number | string
    precio_actual?: Decimal | DecimalJsLike | number | string | null
    fecha_vencimiento?: Date | string | null
    cantidad_disponible?: number | null
    imagen_url?: string | null
    fecha_publicacion?: Date | string
    estado?: boolean
    updated_at?: Date | string
    reservas?: reservasUncheckedCreateNestedManyWithoutProductosInput
  }

  export type productosUpdateInput = {
    id_producto?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio_base?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    precio_actual?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fecha_vencimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cantidad_disponible?: NullableIntFieldUpdateOperationsInput | number | null
    imagen_url?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_publicacion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    categorias?: categoriasUpdateOneRequiredWithoutProductosNestedInput
    comercios?: comerciosUpdateOneRequiredWithoutProductosNestedInput
    reservas?: reservasUpdateManyWithoutProductosNestedInput
  }

  export type productosUncheckedUpdateInput = {
    id_producto?: BigIntFieldUpdateOperationsInput | bigint | number
    id_comercio?: BigIntFieldUpdateOperationsInput | bigint | number
    id_categoria?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio_base?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    precio_actual?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fecha_vencimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cantidad_disponible?: NullableIntFieldUpdateOperationsInput | number | null
    imagen_url?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_publicacion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    reservas?: reservasUncheckedUpdateManyWithoutProductosNestedInput
  }

  export type productosCreateManyInput = {
    id_producto?: bigint | number
    id_comercio: bigint | number
    id_categoria: bigint | number
    nombre: string
    descripcion?: string | null
    precio_base: Decimal | DecimalJsLike | number | string
    precio_actual?: Decimal | DecimalJsLike | number | string | null
    fecha_vencimiento?: Date | string | null
    cantidad_disponible?: number | null
    imagen_url?: string | null
    fecha_publicacion?: Date | string
    estado?: boolean
    updated_at?: Date | string
  }

  export type productosUpdateManyMutationInput = {
    id_producto?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio_base?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    precio_actual?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fecha_vencimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cantidad_disponible?: NullableIntFieldUpdateOperationsInput | number | null
    imagen_url?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_publicacion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productosUncheckedUpdateManyInput = {
    id_producto?: BigIntFieldUpdateOperationsInput | bigint | number
    id_comercio?: BigIntFieldUpdateOperationsInput | bigint | number
    id_categoria?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio_base?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    precio_actual?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fecha_vencimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cantidad_disponible?: NullableIntFieldUpdateOperationsInput | number | null
    imagen_url?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_publicacion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reservasCreateInput = {
    id_reserva?: bigint | number
    cantidad: number
    total: Decimal | DecimalJsLike | number | string
    codigo_validacion: string
    estado?: $Enums.reserva_estado
    fecha_reserva?: Date | string
    ventana_retiro_inicio?: Date | string | null
    ventana_retiro_fin?: Date | string | null
    updated_at?: Date | string
    productos: productosCreateNestedOneWithoutReservasInput
    usuarios: usuariosCreateNestedOneWithoutReservasInput
  }

  export type reservasUncheckedCreateInput = {
    id_reserva?: bigint | number
    id_usuario: bigint | number
    id_producto: bigint | number
    cantidad: number
    total: Decimal | DecimalJsLike | number | string
    codigo_validacion: string
    estado?: $Enums.reserva_estado
    fecha_reserva?: Date | string
    ventana_retiro_inicio?: Date | string | null
    ventana_retiro_fin?: Date | string | null
    updated_at?: Date | string
  }

  export type reservasUpdateInput = {
    id_reserva?: BigIntFieldUpdateOperationsInput | bigint | number
    cantidad?: IntFieldUpdateOperationsInput | number
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    codigo_validacion?: StringFieldUpdateOperationsInput | string
    estado?: Enumreserva_estadoFieldUpdateOperationsInput | $Enums.reserva_estado
    fecha_reserva?: DateTimeFieldUpdateOperationsInput | Date | string
    ventana_retiro_inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ventana_retiro_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    productos?: productosUpdateOneRequiredWithoutReservasNestedInput
    usuarios?: usuariosUpdateOneRequiredWithoutReservasNestedInput
  }

  export type reservasUncheckedUpdateInput = {
    id_reserva?: BigIntFieldUpdateOperationsInput | bigint | number
    id_usuario?: BigIntFieldUpdateOperationsInput | bigint | number
    id_producto?: BigIntFieldUpdateOperationsInput | bigint | number
    cantidad?: IntFieldUpdateOperationsInput | number
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    codigo_validacion?: StringFieldUpdateOperationsInput | string
    estado?: Enumreserva_estadoFieldUpdateOperationsInput | $Enums.reserva_estado
    fecha_reserva?: DateTimeFieldUpdateOperationsInput | Date | string
    ventana_retiro_inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ventana_retiro_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reservasCreateManyInput = {
    id_reserva?: bigint | number
    id_usuario: bigint | number
    id_producto: bigint | number
    cantidad: number
    total: Decimal | DecimalJsLike | number | string
    codigo_validacion: string
    estado?: $Enums.reserva_estado
    fecha_reserva?: Date | string
    ventana_retiro_inicio?: Date | string | null
    ventana_retiro_fin?: Date | string | null
    updated_at?: Date | string
  }

  export type reservasUpdateManyMutationInput = {
    id_reserva?: BigIntFieldUpdateOperationsInput | bigint | number
    cantidad?: IntFieldUpdateOperationsInput | number
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    codigo_validacion?: StringFieldUpdateOperationsInput | string
    estado?: Enumreserva_estadoFieldUpdateOperationsInput | $Enums.reserva_estado
    fecha_reserva?: DateTimeFieldUpdateOperationsInput | Date | string
    ventana_retiro_inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ventana_retiro_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reservasUncheckedUpdateManyInput = {
    id_reserva?: BigIntFieldUpdateOperationsInput | bigint | number
    id_usuario?: BigIntFieldUpdateOperationsInput | bigint | number
    id_producto?: BigIntFieldUpdateOperationsInput | bigint | number
    cantidad?: IntFieldUpdateOperationsInput | number
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    codigo_validacion?: StringFieldUpdateOperationsInput | string
    estado?: Enumreserva_estadoFieldUpdateOperationsInput | $Enums.reserva_estado
    fecha_reserva?: DateTimeFieldUpdateOperationsInput | Date | string
    ventana_retiro_inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ventana_retiro_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usuariosCreateInput = {
    id_usuario?: bigint | number
    nombre: string
    email: string
    contrasena_hash: string
    fecha_nacimiento?: Date | string | null
    foto_perfil?: string | null
    fecha_registro?: Date | string
    estado?: boolean
    updated_at?: Date | string
    comercios?: comerciosCreateNestedManyWithoutUsuariosInput
    notificaciones?: notificacionesCreateNestedManyWithoutUsuariosInput
    reservas?: reservasCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosUncheckedCreateInput = {
    id_usuario?: bigint | number
    nombre: string
    email: string
    contrasena_hash: string
    fecha_nacimiento?: Date | string | null
    foto_perfil?: string | null
    fecha_registro?: Date | string
    estado?: boolean
    updated_at?: Date | string
    comercios?: comerciosUncheckedCreateNestedManyWithoutUsuariosInput
    notificaciones?: notificacionesUncheckedCreateNestedManyWithoutUsuariosInput
    reservas?: reservasUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosUpdateInput = {
    id_usuario?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contrasena_hash?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    foto_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    comercios?: comerciosUpdateManyWithoutUsuariosNestedInput
    notificaciones?: notificacionesUpdateManyWithoutUsuariosNestedInput
    reservas?: reservasUpdateManyWithoutUsuariosNestedInput
  }

  export type usuariosUncheckedUpdateInput = {
    id_usuario?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contrasena_hash?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    foto_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    comercios?: comerciosUncheckedUpdateManyWithoutUsuariosNestedInput
    notificaciones?: notificacionesUncheckedUpdateManyWithoutUsuariosNestedInput
    reservas?: reservasUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type usuariosCreateManyInput = {
    id_usuario?: bigint | number
    nombre: string
    email: string
    contrasena_hash: string
    fecha_nacimiento?: Date | string | null
    foto_perfil?: string | null
    fecha_registro?: Date | string
    estado?: boolean
    updated_at?: Date | string
  }

  export type usuariosUpdateManyMutationInput = {
    id_usuario?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contrasena_hash?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    foto_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usuariosUncheckedUpdateManyInput = {
    id_usuario?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contrasena_hash?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    foto_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ProductosListRelationFilter = {
    every?: productosWhereInput
    some?: productosWhereInput
    none?: productosWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type productosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type categoriasCountOrderByAggregateInput = {
    id_categoria?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    updated_at?: SortOrder
  }

  export type categoriasAvgOrderByAggregateInput = {
    id_categoria?: SortOrder
  }

  export type categoriasMaxOrderByAggregateInput = {
    id_categoria?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    updated_at?: SortOrder
  }

  export type categoriasMinOrderByAggregateInput = {
    id_categoria?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    updated_at?: SortOrder
  }

  export type categoriasSumOrderByAggregateInput = {
    id_categoria?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UsuariosScalarRelationFilter = {
    is?: usuariosWhereInput
    isNot?: usuariosWhereInput
  }

  export type comerciosCountOrderByAggregateInput = {
    id_comercio?: SortOrder
    id_usuario?: SortOrder
    nombre_negocio?: SortOrder
    telefono?: SortOrder
    direccion?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    categoria?: SortOrder
    fecha_registro?: SortOrder
    estado?: SortOrder
    updated_at?: SortOrder
  }

  export type comerciosAvgOrderByAggregateInput = {
    id_comercio?: SortOrder
    id_usuario?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
  }

  export type comerciosMaxOrderByAggregateInput = {
    id_comercio?: SortOrder
    id_usuario?: SortOrder
    nombre_negocio?: SortOrder
    telefono?: SortOrder
    direccion?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    categoria?: SortOrder
    fecha_registro?: SortOrder
    estado?: SortOrder
    updated_at?: SortOrder
  }

  export type comerciosMinOrderByAggregateInput = {
    id_comercio?: SortOrder
    id_usuario?: SortOrder
    nombre_negocio?: SortOrder
    telefono?: SortOrder
    direccion?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
    categoria?: SortOrder
    fecha_registro?: SortOrder
    estado?: SortOrder
    updated_at?: SortOrder
  }

  export type comerciosSumOrderByAggregateInput = {
    id_comercio?: SortOrder
    id_usuario?: SortOrder
    latitud?: SortOrder
    longitud?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type notificacionesCountOrderByAggregateInput = {
    id_notificacion?: SortOrder
    id_usuario?: SortOrder
    titulo?: SortOrder
    mensaje?: SortOrder
    tipo?: SortOrder
    fecha_envio?: SortOrder
    leido?: SortOrder
    updated_at?: SortOrder
  }

  export type notificacionesAvgOrderByAggregateInput = {
    id_notificacion?: SortOrder
    id_usuario?: SortOrder
  }

  export type notificacionesMaxOrderByAggregateInput = {
    id_notificacion?: SortOrder
    id_usuario?: SortOrder
    titulo?: SortOrder
    mensaje?: SortOrder
    tipo?: SortOrder
    fecha_envio?: SortOrder
    leido?: SortOrder
    updated_at?: SortOrder
  }

  export type notificacionesMinOrderByAggregateInput = {
    id_notificacion?: SortOrder
    id_usuario?: SortOrder
    titulo?: SortOrder
    mensaje?: SortOrder
    tipo?: SortOrder
    fecha_envio?: SortOrder
    leido?: SortOrder
    updated_at?: SortOrder
  }

  export type notificacionesSumOrderByAggregateInput = {
    id_notificacion?: SortOrder
    id_usuario?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CategoriasScalarRelationFilter = {
    is?: categoriasWhereInput
    isNot?: categoriasWhereInput
  }

  export type ComerciosScalarRelationFilter = {
    is?: comerciosWhereInput
    isNot?: comerciosWhereInput
  }

  export type ReservasListRelationFilter = {
    every?: reservasWhereInput
    some?: reservasWhereInput
    none?: reservasWhereInput
  }

  export type reservasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type productosCountOrderByAggregateInput = {
    id_producto?: SortOrder
    id_comercio?: SortOrder
    id_categoria?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio_base?: SortOrder
    precio_actual?: SortOrder
    fecha_vencimiento?: SortOrder
    cantidad_disponible?: SortOrder
    imagen_url?: SortOrder
    fecha_publicacion?: SortOrder
    estado?: SortOrder
    updated_at?: SortOrder
  }

  export type productosAvgOrderByAggregateInput = {
    id_producto?: SortOrder
    id_comercio?: SortOrder
    id_categoria?: SortOrder
    precio_base?: SortOrder
    precio_actual?: SortOrder
    cantidad_disponible?: SortOrder
  }

  export type productosMaxOrderByAggregateInput = {
    id_producto?: SortOrder
    id_comercio?: SortOrder
    id_categoria?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio_base?: SortOrder
    precio_actual?: SortOrder
    fecha_vencimiento?: SortOrder
    cantidad_disponible?: SortOrder
    imagen_url?: SortOrder
    fecha_publicacion?: SortOrder
    estado?: SortOrder
    updated_at?: SortOrder
  }

  export type productosMinOrderByAggregateInput = {
    id_producto?: SortOrder
    id_comercio?: SortOrder
    id_categoria?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio_base?: SortOrder
    precio_actual?: SortOrder
    fecha_vencimiento?: SortOrder
    cantidad_disponible?: SortOrder
    imagen_url?: SortOrder
    fecha_publicacion?: SortOrder
    estado?: SortOrder
    updated_at?: SortOrder
  }

  export type productosSumOrderByAggregateInput = {
    id_producto?: SortOrder
    id_comercio?: SortOrder
    id_categoria?: SortOrder
    precio_base?: SortOrder
    precio_actual?: SortOrder
    cantidad_disponible?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type Enumreserva_estadoFilter<$PrismaModel = never> = {
    equals?: $Enums.reserva_estado | Enumreserva_estadoFieldRefInput<$PrismaModel>
    in?: $Enums.reserva_estado[] | ListEnumreserva_estadoFieldRefInput<$PrismaModel>
    notIn?: $Enums.reserva_estado[] | ListEnumreserva_estadoFieldRefInput<$PrismaModel>
    not?: NestedEnumreserva_estadoFilter<$PrismaModel> | $Enums.reserva_estado
  }

  export type ProductosScalarRelationFilter = {
    is?: productosWhereInput
    isNot?: productosWhereInput
  }

  export type reservasCountOrderByAggregateInput = {
    id_reserva?: SortOrder
    id_usuario?: SortOrder
    id_producto?: SortOrder
    cantidad?: SortOrder
    total?: SortOrder
    codigo_validacion?: SortOrder
    estado?: SortOrder
    fecha_reserva?: SortOrder
    ventana_retiro_inicio?: SortOrder
    ventana_retiro_fin?: SortOrder
    updated_at?: SortOrder
  }

  export type reservasAvgOrderByAggregateInput = {
    id_reserva?: SortOrder
    id_usuario?: SortOrder
    id_producto?: SortOrder
    cantidad?: SortOrder
    total?: SortOrder
  }

  export type reservasMaxOrderByAggregateInput = {
    id_reserva?: SortOrder
    id_usuario?: SortOrder
    id_producto?: SortOrder
    cantidad?: SortOrder
    total?: SortOrder
    codigo_validacion?: SortOrder
    estado?: SortOrder
    fecha_reserva?: SortOrder
    ventana_retiro_inicio?: SortOrder
    ventana_retiro_fin?: SortOrder
    updated_at?: SortOrder
  }

  export type reservasMinOrderByAggregateInput = {
    id_reserva?: SortOrder
    id_usuario?: SortOrder
    id_producto?: SortOrder
    cantidad?: SortOrder
    total?: SortOrder
    codigo_validacion?: SortOrder
    estado?: SortOrder
    fecha_reserva?: SortOrder
    ventana_retiro_inicio?: SortOrder
    ventana_retiro_fin?: SortOrder
    updated_at?: SortOrder
  }

  export type reservasSumOrderByAggregateInput = {
    id_reserva?: SortOrder
    id_usuario?: SortOrder
    id_producto?: SortOrder
    cantidad?: SortOrder
    total?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type Enumreserva_estadoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.reserva_estado | Enumreserva_estadoFieldRefInput<$PrismaModel>
    in?: $Enums.reserva_estado[] | ListEnumreserva_estadoFieldRefInput<$PrismaModel>
    notIn?: $Enums.reserva_estado[] | ListEnumreserva_estadoFieldRefInput<$PrismaModel>
    not?: NestedEnumreserva_estadoWithAggregatesFilter<$PrismaModel> | $Enums.reserva_estado
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumreserva_estadoFilter<$PrismaModel>
    _max?: NestedEnumreserva_estadoFilter<$PrismaModel>
  }

  export type ComerciosListRelationFilter = {
    every?: comerciosWhereInput
    some?: comerciosWhereInput
    none?: comerciosWhereInput
  }

  export type NotificacionesListRelationFilter = {
    every?: notificacionesWhereInput
    some?: notificacionesWhereInput
    none?: notificacionesWhereInput
  }

  export type comerciosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type notificacionesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usuariosCountOrderByAggregateInput = {
    id_usuario?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    contrasena_hash?: SortOrder
    fecha_nacimiento?: SortOrder
    foto_perfil?: SortOrder
    fecha_registro?: SortOrder
    estado?: SortOrder
    updated_at?: SortOrder
  }

  export type usuariosAvgOrderByAggregateInput = {
    id_usuario?: SortOrder
  }

  export type usuariosMaxOrderByAggregateInput = {
    id_usuario?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    contrasena_hash?: SortOrder
    fecha_nacimiento?: SortOrder
    foto_perfil?: SortOrder
    fecha_registro?: SortOrder
    estado?: SortOrder
    updated_at?: SortOrder
  }

  export type usuariosMinOrderByAggregateInput = {
    id_usuario?: SortOrder
    nombre?: SortOrder
    email?: SortOrder
    contrasena_hash?: SortOrder
    fecha_nacimiento?: SortOrder
    foto_perfil?: SortOrder
    fecha_registro?: SortOrder
    estado?: SortOrder
    updated_at?: SortOrder
  }

  export type usuariosSumOrderByAggregateInput = {
    id_usuario?: SortOrder
  }

  export type productosCreateNestedManyWithoutCategoriasInput = {
    create?: XOR<productosCreateWithoutCategoriasInput, productosUncheckedCreateWithoutCategoriasInput> | productosCreateWithoutCategoriasInput[] | productosUncheckedCreateWithoutCategoriasInput[]
    connectOrCreate?: productosCreateOrConnectWithoutCategoriasInput | productosCreateOrConnectWithoutCategoriasInput[]
    createMany?: productosCreateManyCategoriasInputEnvelope
    connect?: productosWhereUniqueInput | productosWhereUniqueInput[]
  }

  export type productosUncheckedCreateNestedManyWithoutCategoriasInput = {
    create?: XOR<productosCreateWithoutCategoriasInput, productosUncheckedCreateWithoutCategoriasInput> | productosCreateWithoutCategoriasInput[] | productosUncheckedCreateWithoutCategoriasInput[]
    connectOrCreate?: productosCreateOrConnectWithoutCategoriasInput | productosCreateOrConnectWithoutCategoriasInput[]
    createMany?: productosCreateManyCategoriasInputEnvelope
    connect?: productosWhereUniqueInput | productosWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type productosUpdateManyWithoutCategoriasNestedInput = {
    create?: XOR<productosCreateWithoutCategoriasInput, productosUncheckedCreateWithoutCategoriasInput> | productosCreateWithoutCategoriasInput[] | productosUncheckedCreateWithoutCategoriasInput[]
    connectOrCreate?: productosCreateOrConnectWithoutCategoriasInput | productosCreateOrConnectWithoutCategoriasInput[]
    upsert?: productosUpsertWithWhereUniqueWithoutCategoriasInput | productosUpsertWithWhereUniqueWithoutCategoriasInput[]
    createMany?: productosCreateManyCategoriasInputEnvelope
    set?: productosWhereUniqueInput | productosWhereUniqueInput[]
    disconnect?: productosWhereUniqueInput | productosWhereUniqueInput[]
    delete?: productosWhereUniqueInput | productosWhereUniqueInput[]
    connect?: productosWhereUniqueInput | productosWhereUniqueInput[]
    update?: productosUpdateWithWhereUniqueWithoutCategoriasInput | productosUpdateWithWhereUniqueWithoutCategoriasInput[]
    updateMany?: productosUpdateManyWithWhereWithoutCategoriasInput | productosUpdateManyWithWhereWithoutCategoriasInput[]
    deleteMany?: productosScalarWhereInput | productosScalarWhereInput[]
  }

  export type productosUncheckedUpdateManyWithoutCategoriasNestedInput = {
    create?: XOR<productosCreateWithoutCategoriasInput, productosUncheckedCreateWithoutCategoriasInput> | productosCreateWithoutCategoriasInput[] | productosUncheckedCreateWithoutCategoriasInput[]
    connectOrCreate?: productosCreateOrConnectWithoutCategoriasInput | productosCreateOrConnectWithoutCategoriasInput[]
    upsert?: productosUpsertWithWhereUniqueWithoutCategoriasInput | productosUpsertWithWhereUniqueWithoutCategoriasInput[]
    createMany?: productosCreateManyCategoriasInputEnvelope
    set?: productosWhereUniqueInput | productosWhereUniqueInput[]
    disconnect?: productosWhereUniqueInput | productosWhereUniqueInput[]
    delete?: productosWhereUniqueInput | productosWhereUniqueInput[]
    connect?: productosWhereUniqueInput | productosWhereUniqueInput[]
    update?: productosUpdateWithWhereUniqueWithoutCategoriasInput | productosUpdateWithWhereUniqueWithoutCategoriasInput[]
    updateMany?: productosUpdateManyWithWhereWithoutCategoriasInput | productosUpdateManyWithWhereWithoutCategoriasInput[]
    deleteMany?: productosScalarWhereInput | productosScalarWhereInput[]
  }

  export type usuariosCreateNestedOneWithoutComerciosInput = {
    create?: XOR<usuariosCreateWithoutComerciosInput, usuariosUncheckedCreateWithoutComerciosInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutComerciosInput
    connect?: usuariosWhereUniqueInput
  }

  export type productosCreateNestedManyWithoutComerciosInput = {
    create?: XOR<productosCreateWithoutComerciosInput, productosUncheckedCreateWithoutComerciosInput> | productosCreateWithoutComerciosInput[] | productosUncheckedCreateWithoutComerciosInput[]
    connectOrCreate?: productosCreateOrConnectWithoutComerciosInput | productosCreateOrConnectWithoutComerciosInput[]
    createMany?: productosCreateManyComerciosInputEnvelope
    connect?: productosWhereUniqueInput | productosWhereUniqueInput[]
  }

  export type productosUncheckedCreateNestedManyWithoutComerciosInput = {
    create?: XOR<productosCreateWithoutComerciosInput, productosUncheckedCreateWithoutComerciosInput> | productosCreateWithoutComerciosInput[] | productosUncheckedCreateWithoutComerciosInput[]
    connectOrCreate?: productosCreateOrConnectWithoutComerciosInput | productosCreateOrConnectWithoutComerciosInput[]
    createMany?: productosCreateManyComerciosInputEnvelope
    connect?: productosWhereUniqueInput | productosWhereUniqueInput[]
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type usuariosUpdateOneRequiredWithoutComerciosNestedInput = {
    create?: XOR<usuariosCreateWithoutComerciosInput, usuariosUncheckedCreateWithoutComerciosInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutComerciosInput
    upsert?: usuariosUpsertWithoutComerciosInput
    connect?: usuariosWhereUniqueInput
    update?: XOR<XOR<usuariosUpdateToOneWithWhereWithoutComerciosInput, usuariosUpdateWithoutComerciosInput>, usuariosUncheckedUpdateWithoutComerciosInput>
  }

  export type productosUpdateManyWithoutComerciosNestedInput = {
    create?: XOR<productosCreateWithoutComerciosInput, productosUncheckedCreateWithoutComerciosInput> | productosCreateWithoutComerciosInput[] | productosUncheckedCreateWithoutComerciosInput[]
    connectOrCreate?: productosCreateOrConnectWithoutComerciosInput | productosCreateOrConnectWithoutComerciosInput[]
    upsert?: productosUpsertWithWhereUniqueWithoutComerciosInput | productosUpsertWithWhereUniqueWithoutComerciosInput[]
    createMany?: productosCreateManyComerciosInputEnvelope
    set?: productosWhereUniqueInput | productosWhereUniqueInput[]
    disconnect?: productosWhereUniqueInput | productosWhereUniqueInput[]
    delete?: productosWhereUniqueInput | productosWhereUniqueInput[]
    connect?: productosWhereUniqueInput | productosWhereUniqueInput[]
    update?: productosUpdateWithWhereUniqueWithoutComerciosInput | productosUpdateWithWhereUniqueWithoutComerciosInput[]
    updateMany?: productosUpdateManyWithWhereWithoutComerciosInput | productosUpdateManyWithWhereWithoutComerciosInput[]
    deleteMany?: productosScalarWhereInput | productosScalarWhereInput[]
  }

  export type productosUncheckedUpdateManyWithoutComerciosNestedInput = {
    create?: XOR<productosCreateWithoutComerciosInput, productosUncheckedCreateWithoutComerciosInput> | productosCreateWithoutComerciosInput[] | productosUncheckedCreateWithoutComerciosInput[]
    connectOrCreate?: productosCreateOrConnectWithoutComerciosInput | productosCreateOrConnectWithoutComerciosInput[]
    upsert?: productosUpsertWithWhereUniqueWithoutComerciosInput | productosUpsertWithWhereUniqueWithoutComerciosInput[]
    createMany?: productosCreateManyComerciosInputEnvelope
    set?: productosWhereUniqueInput | productosWhereUniqueInput[]
    disconnect?: productosWhereUniqueInput | productosWhereUniqueInput[]
    delete?: productosWhereUniqueInput | productosWhereUniqueInput[]
    connect?: productosWhereUniqueInput | productosWhereUniqueInput[]
    update?: productosUpdateWithWhereUniqueWithoutComerciosInput | productosUpdateWithWhereUniqueWithoutComerciosInput[]
    updateMany?: productosUpdateManyWithWhereWithoutComerciosInput | productosUpdateManyWithWhereWithoutComerciosInput[]
    deleteMany?: productosScalarWhereInput | productosScalarWhereInput[]
  }

  export type usuariosCreateNestedOneWithoutNotificacionesInput = {
    create?: XOR<usuariosCreateWithoutNotificacionesInput, usuariosUncheckedCreateWithoutNotificacionesInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutNotificacionesInput
    connect?: usuariosWhereUniqueInput
  }

  export type usuariosUpdateOneRequiredWithoutNotificacionesNestedInput = {
    create?: XOR<usuariosCreateWithoutNotificacionesInput, usuariosUncheckedCreateWithoutNotificacionesInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutNotificacionesInput
    upsert?: usuariosUpsertWithoutNotificacionesInput
    connect?: usuariosWhereUniqueInput
    update?: XOR<XOR<usuariosUpdateToOneWithWhereWithoutNotificacionesInput, usuariosUpdateWithoutNotificacionesInput>, usuariosUncheckedUpdateWithoutNotificacionesInput>
  }

  export type categoriasCreateNestedOneWithoutProductosInput = {
    create?: XOR<categoriasCreateWithoutProductosInput, categoriasUncheckedCreateWithoutProductosInput>
    connectOrCreate?: categoriasCreateOrConnectWithoutProductosInput
    connect?: categoriasWhereUniqueInput
  }

  export type comerciosCreateNestedOneWithoutProductosInput = {
    create?: XOR<comerciosCreateWithoutProductosInput, comerciosUncheckedCreateWithoutProductosInput>
    connectOrCreate?: comerciosCreateOrConnectWithoutProductosInput
    connect?: comerciosWhereUniqueInput
  }

  export type reservasCreateNestedManyWithoutProductosInput = {
    create?: XOR<reservasCreateWithoutProductosInput, reservasUncheckedCreateWithoutProductosInput> | reservasCreateWithoutProductosInput[] | reservasUncheckedCreateWithoutProductosInput[]
    connectOrCreate?: reservasCreateOrConnectWithoutProductosInput | reservasCreateOrConnectWithoutProductosInput[]
    createMany?: reservasCreateManyProductosInputEnvelope
    connect?: reservasWhereUniqueInput | reservasWhereUniqueInput[]
  }

  export type reservasUncheckedCreateNestedManyWithoutProductosInput = {
    create?: XOR<reservasCreateWithoutProductosInput, reservasUncheckedCreateWithoutProductosInput> | reservasCreateWithoutProductosInput[] | reservasUncheckedCreateWithoutProductosInput[]
    connectOrCreate?: reservasCreateOrConnectWithoutProductosInput | reservasCreateOrConnectWithoutProductosInput[]
    createMany?: reservasCreateManyProductosInputEnvelope
    connect?: reservasWhereUniqueInput | reservasWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type categoriasUpdateOneRequiredWithoutProductosNestedInput = {
    create?: XOR<categoriasCreateWithoutProductosInput, categoriasUncheckedCreateWithoutProductosInput>
    connectOrCreate?: categoriasCreateOrConnectWithoutProductosInput
    upsert?: categoriasUpsertWithoutProductosInput
    connect?: categoriasWhereUniqueInput
    update?: XOR<XOR<categoriasUpdateToOneWithWhereWithoutProductosInput, categoriasUpdateWithoutProductosInput>, categoriasUncheckedUpdateWithoutProductosInput>
  }

  export type comerciosUpdateOneRequiredWithoutProductosNestedInput = {
    create?: XOR<comerciosCreateWithoutProductosInput, comerciosUncheckedCreateWithoutProductosInput>
    connectOrCreate?: comerciosCreateOrConnectWithoutProductosInput
    upsert?: comerciosUpsertWithoutProductosInput
    connect?: comerciosWhereUniqueInput
    update?: XOR<XOR<comerciosUpdateToOneWithWhereWithoutProductosInput, comerciosUpdateWithoutProductosInput>, comerciosUncheckedUpdateWithoutProductosInput>
  }

  export type reservasUpdateManyWithoutProductosNestedInput = {
    create?: XOR<reservasCreateWithoutProductosInput, reservasUncheckedCreateWithoutProductosInput> | reservasCreateWithoutProductosInput[] | reservasUncheckedCreateWithoutProductosInput[]
    connectOrCreate?: reservasCreateOrConnectWithoutProductosInput | reservasCreateOrConnectWithoutProductosInput[]
    upsert?: reservasUpsertWithWhereUniqueWithoutProductosInput | reservasUpsertWithWhereUniqueWithoutProductosInput[]
    createMany?: reservasCreateManyProductosInputEnvelope
    set?: reservasWhereUniqueInput | reservasWhereUniqueInput[]
    disconnect?: reservasWhereUniqueInput | reservasWhereUniqueInput[]
    delete?: reservasWhereUniqueInput | reservasWhereUniqueInput[]
    connect?: reservasWhereUniqueInput | reservasWhereUniqueInput[]
    update?: reservasUpdateWithWhereUniqueWithoutProductosInput | reservasUpdateWithWhereUniqueWithoutProductosInput[]
    updateMany?: reservasUpdateManyWithWhereWithoutProductosInput | reservasUpdateManyWithWhereWithoutProductosInput[]
    deleteMany?: reservasScalarWhereInput | reservasScalarWhereInput[]
  }

  export type reservasUncheckedUpdateManyWithoutProductosNestedInput = {
    create?: XOR<reservasCreateWithoutProductosInput, reservasUncheckedCreateWithoutProductosInput> | reservasCreateWithoutProductosInput[] | reservasUncheckedCreateWithoutProductosInput[]
    connectOrCreate?: reservasCreateOrConnectWithoutProductosInput | reservasCreateOrConnectWithoutProductosInput[]
    upsert?: reservasUpsertWithWhereUniqueWithoutProductosInput | reservasUpsertWithWhereUniqueWithoutProductosInput[]
    createMany?: reservasCreateManyProductosInputEnvelope
    set?: reservasWhereUniqueInput | reservasWhereUniqueInput[]
    disconnect?: reservasWhereUniqueInput | reservasWhereUniqueInput[]
    delete?: reservasWhereUniqueInput | reservasWhereUniqueInput[]
    connect?: reservasWhereUniqueInput | reservasWhereUniqueInput[]
    update?: reservasUpdateWithWhereUniqueWithoutProductosInput | reservasUpdateWithWhereUniqueWithoutProductosInput[]
    updateMany?: reservasUpdateManyWithWhereWithoutProductosInput | reservasUpdateManyWithWhereWithoutProductosInput[]
    deleteMany?: reservasScalarWhereInput | reservasScalarWhereInput[]
  }

  export type productosCreateNestedOneWithoutReservasInput = {
    create?: XOR<productosCreateWithoutReservasInput, productosUncheckedCreateWithoutReservasInput>
    connectOrCreate?: productosCreateOrConnectWithoutReservasInput
    connect?: productosWhereUniqueInput
  }

  export type usuariosCreateNestedOneWithoutReservasInput = {
    create?: XOR<usuariosCreateWithoutReservasInput, usuariosUncheckedCreateWithoutReservasInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutReservasInput
    connect?: usuariosWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type Enumreserva_estadoFieldUpdateOperationsInput = {
    set?: $Enums.reserva_estado
  }

  export type productosUpdateOneRequiredWithoutReservasNestedInput = {
    create?: XOR<productosCreateWithoutReservasInput, productosUncheckedCreateWithoutReservasInput>
    connectOrCreate?: productosCreateOrConnectWithoutReservasInput
    upsert?: productosUpsertWithoutReservasInput
    connect?: productosWhereUniqueInput
    update?: XOR<XOR<productosUpdateToOneWithWhereWithoutReservasInput, productosUpdateWithoutReservasInput>, productosUncheckedUpdateWithoutReservasInput>
  }

  export type usuariosUpdateOneRequiredWithoutReservasNestedInput = {
    create?: XOR<usuariosCreateWithoutReservasInput, usuariosUncheckedCreateWithoutReservasInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutReservasInput
    upsert?: usuariosUpsertWithoutReservasInput
    connect?: usuariosWhereUniqueInput
    update?: XOR<XOR<usuariosUpdateToOneWithWhereWithoutReservasInput, usuariosUpdateWithoutReservasInput>, usuariosUncheckedUpdateWithoutReservasInput>
  }

  export type comerciosCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<comerciosCreateWithoutUsuariosInput, comerciosUncheckedCreateWithoutUsuariosInput> | comerciosCreateWithoutUsuariosInput[] | comerciosUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: comerciosCreateOrConnectWithoutUsuariosInput | comerciosCreateOrConnectWithoutUsuariosInput[]
    createMany?: comerciosCreateManyUsuariosInputEnvelope
    connect?: comerciosWhereUniqueInput | comerciosWhereUniqueInput[]
  }

  export type notificacionesCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<notificacionesCreateWithoutUsuariosInput, notificacionesUncheckedCreateWithoutUsuariosInput> | notificacionesCreateWithoutUsuariosInput[] | notificacionesUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: notificacionesCreateOrConnectWithoutUsuariosInput | notificacionesCreateOrConnectWithoutUsuariosInput[]
    createMany?: notificacionesCreateManyUsuariosInputEnvelope
    connect?: notificacionesWhereUniqueInput | notificacionesWhereUniqueInput[]
  }

  export type reservasCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<reservasCreateWithoutUsuariosInput, reservasUncheckedCreateWithoutUsuariosInput> | reservasCreateWithoutUsuariosInput[] | reservasUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: reservasCreateOrConnectWithoutUsuariosInput | reservasCreateOrConnectWithoutUsuariosInput[]
    createMany?: reservasCreateManyUsuariosInputEnvelope
    connect?: reservasWhereUniqueInput | reservasWhereUniqueInput[]
  }

  export type comerciosUncheckedCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<comerciosCreateWithoutUsuariosInput, comerciosUncheckedCreateWithoutUsuariosInput> | comerciosCreateWithoutUsuariosInput[] | comerciosUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: comerciosCreateOrConnectWithoutUsuariosInput | comerciosCreateOrConnectWithoutUsuariosInput[]
    createMany?: comerciosCreateManyUsuariosInputEnvelope
    connect?: comerciosWhereUniqueInput | comerciosWhereUniqueInput[]
  }

  export type notificacionesUncheckedCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<notificacionesCreateWithoutUsuariosInput, notificacionesUncheckedCreateWithoutUsuariosInput> | notificacionesCreateWithoutUsuariosInput[] | notificacionesUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: notificacionesCreateOrConnectWithoutUsuariosInput | notificacionesCreateOrConnectWithoutUsuariosInput[]
    createMany?: notificacionesCreateManyUsuariosInputEnvelope
    connect?: notificacionesWhereUniqueInput | notificacionesWhereUniqueInput[]
  }

  export type reservasUncheckedCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<reservasCreateWithoutUsuariosInput, reservasUncheckedCreateWithoutUsuariosInput> | reservasCreateWithoutUsuariosInput[] | reservasUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: reservasCreateOrConnectWithoutUsuariosInput | reservasCreateOrConnectWithoutUsuariosInput[]
    createMany?: reservasCreateManyUsuariosInputEnvelope
    connect?: reservasWhereUniqueInput | reservasWhereUniqueInput[]
  }

  export type comerciosUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<comerciosCreateWithoutUsuariosInput, comerciosUncheckedCreateWithoutUsuariosInput> | comerciosCreateWithoutUsuariosInput[] | comerciosUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: comerciosCreateOrConnectWithoutUsuariosInput | comerciosCreateOrConnectWithoutUsuariosInput[]
    upsert?: comerciosUpsertWithWhereUniqueWithoutUsuariosInput | comerciosUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: comerciosCreateManyUsuariosInputEnvelope
    set?: comerciosWhereUniqueInput | comerciosWhereUniqueInput[]
    disconnect?: comerciosWhereUniqueInput | comerciosWhereUniqueInput[]
    delete?: comerciosWhereUniqueInput | comerciosWhereUniqueInput[]
    connect?: comerciosWhereUniqueInput | comerciosWhereUniqueInput[]
    update?: comerciosUpdateWithWhereUniqueWithoutUsuariosInput | comerciosUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: comerciosUpdateManyWithWhereWithoutUsuariosInput | comerciosUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: comerciosScalarWhereInput | comerciosScalarWhereInput[]
  }

  export type notificacionesUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<notificacionesCreateWithoutUsuariosInput, notificacionesUncheckedCreateWithoutUsuariosInput> | notificacionesCreateWithoutUsuariosInput[] | notificacionesUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: notificacionesCreateOrConnectWithoutUsuariosInput | notificacionesCreateOrConnectWithoutUsuariosInput[]
    upsert?: notificacionesUpsertWithWhereUniqueWithoutUsuariosInput | notificacionesUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: notificacionesCreateManyUsuariosInputEnvelope
    set?: notificacionesWhereUniqueInput | notificacionesWhereUniqueInput[]
    disconnect?: notificacionesWhereUniqueInput | notificacionesWhereUniqueInput[]
    delete?: notificacionesWhereUniqueInput | notificacionesWhereUniqueInput[]
    connect?: notificacionesWhereUniqueInput | notificacionesWhereUniqueInput[]
    update?: notificacionesUpdateWithWhereUniqueWithoutUsuariosInput | notificacionesUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: notificacionesUpdateManyWithWhereWithoutUsuariosInput | notificacionesUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: notificacionesScalarWhereInput | notificacionesScalarWhereInput[]
  }

  export type reservasUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<reservasCreateWithoutUsuariosInput, reservasUncheckedCreateWithoutUsuariosInput> | reservasCreateWithoutUsuariosInput[] | reservasUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: reservasCreateOrConnectWithoutUsuariosInput | reservasCreateOrConnectWithoutUsuariosInput[]
    upsert?: reservasUpsertWithWhereUniqueWithoutUsuariosInput | reservasUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: reservasCreateManyUsuariosInputEnvelope
    set?: reservasWhereUniqueInput | reservasWhereUniqueInput[]
    disconnect?: reservasWhereUniqueInput | reservasWhereUniqueInput[]
    delete?: reservasWhereUniqueInput | reservasWhereUniqueInput[]
    connect?: reservasWhereUniqueInput | reservasWhereUniqueInput[]
    update?: reservasUpdateWithWhereUniqueWithoutUsuariosInput | reservasUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: reservasUpdateManyWithWhereWithoutUsuariosInput | reservasUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: reservasScalarWhereInput | reservasScalarWhereInput[]
  }

  export type comerciosUncheckedUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<comerciosCreateWithoutUsuariosInput, comerciosUncheckedCreateWithoutUsuariosInput> | comerciosCreateWithoutUsuariosInput[] | comerciosUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: comerciosCreateOrConnectWithoutUsuariosInput | comerciosCreateOrConnectWithoutUsuariosInput[]
    upsert?: comerciosUpsertWithWhereUniqueWithoutUsuariosInput | comerciosUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: comerciosCreateManyUsuariosInputEnvelope
    set?: comerciosWhereUniqueInput | comerciosWhereUniqueInput[]
    disconnect?: comerciosWhereUniqueInput | comerciosWhereUniqueInput[]
    delete?: comerciosWhereUniqueInput | comerciosWhereUniqueInput[]
    connect?: comerciosWhereUniqueInput | comerciosWhereUniqueInput[]
    update?: comerciosUpdateWithWhereUniqueWithoutUsuariosInput | comerciosUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: comerciosUpdateManyWithWhereWithoutUsuariosInput | comerciosUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: comerciosScalarWhereInput | comerciosScalarWhereInput[]
  }

  export type notificacionesUncheckedUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<notificacionesCreateWithoutUsuariosInput, notificacionesUncheckedCreateWithoutUsuariosInput> | notificacionesCreateWithoutUsuariosInput[] | notificacionesUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: notificacionesCreateOrConnectWithoutUsuariosInput | notificacionesCreateOrConnectWithoutUsuariosInput[]
    upsert?: notificacionesUpsertWithWhereUniqueWithoutUsuariosInput | notificacionesUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: notificacionesCreateManyUsuariosInputEnvelope
    set?: notificacionesWhereUniqueInput | notificacionesWhereUniqueInput[]
    disconnect?: notificacionesWhereUniqueInput | notificacionesWhereUniqueInput[]
    delete?: notificacionesWhereUniqueInput | notificacionesWhereUniqueInput[]
    connect?: notificacionesWhereUniqueInput | notificacionesWhereUniqueInput[]
    update?: notificacionesUpdateWithWhereUniqueWithoutUsuariosInput | notificacionesUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: notificacionesUpdateManyWithWhereWithoutUsuariosInput | notificacionesUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: notificacionesScalarWhereInput | notificacionesScalarWhereInput[]
  }

  export type reservasUncheckedUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<reservasCreateWithoutUsuariosInput, reservasUncheckedCreateWithoutUsuariosInput> | reservasCreateWithoutUsuariosInput[] | reservasUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: reservasCreateOrConnectWithoutUsuariosInput | reservasCreateOrConnectWithoutUsuariosInput[]
    upsert?: reservasUpsertWithWhereUniqueWithoutUsuariosInput | reservasUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: reservasCreateManyUsuariosInputEnvelope
    set?: reservasWhereUniqueInput | reservasWhereUniqueInput[]
    disconnect?: reservasWhereUniqueInput | reservasWhereUniqueInput[]
    delete?: reservasWhereUniqueInput | reservasWhereUniqueInput[]
    connect?: reservasWhereUniqueInput | reservasWhereUniqueInput[]
    update?: reservasUpdateWithWhereUniqueWithoutUsuariosInput | reservasUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: reservasUpdateManyWithWhereWithoutUsuariosInput | reservasUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: reservasScalarWhereInput | reservasScalarWhereInput[]
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumreserva_estadoFilter<$PrismaModel = never> = {
    equals?: $Enums.reserva_estado | Enumreserva_estadoFieldRefInput<$PrismaModel>
    in?: $Enums.reserva_estado[] | ListEnumreserva_estadoFieldRefInput<$PrismaModel>
    notIn?: $Enums.reserva_estado[] | ListEnumreserva_estadoFieldRefInput<$PrismaModel>
    not?: NestedEnumreserva_estadoFilter<$PrismaModel> | $Enums.reserva_estado
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type NestedEnumreserva_estadoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.reserva_estado | Enumreserva_estadoFieldRefInput<$PrismaModel>
    in?: $Enums.reserva_estado[] | ListEnumreserva_estadoFieldRefInput<$PrismaModel>
    notIn?: $Enums.reserva_estado[] | ListEnumreserva_estadoFieldRefInput<$PrismaModel>
    not?: NestedEnumreserva_estadoWithAggregatesFilter<$PrismaModel> | $Enums.reserva_estado
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumreserva_estadoFilter<$PrismaModel>
    _max?: NestedEnumreserva_estadoFilter<$PrismaModel>
  }

  export type productosCreateWithoutCategoriasInput = {
    id_producto?: bigint | number
    nombre: string
    descripcion?: string | null
    precio_base: Decimal | DecimalJsLike | number | string
    precio_actual?: Decimal | DecimalJsLike | number | string | null
    fecha_vencimiento?: Date | string | null
    cantidad_disponible?: number | null
    imagen_url?: string | null
    fecha_publicacion?: Date | string
    estado?: boolean
    updated_at?: Date | string
    comercios: comerciosCreateNestedOneWithoutProductosInput
    reservas?: reservasCreateNestedManyWithoutProductosInput
  }

  export type productosUncheckedCreateWithoutCategoriasInput = {
    id_producto?: bigint | number
    id_comercio: bigint | number
    nombre: string
    descripcion?: string | null
    precio_base: Decimal | DecimalJsLike | number | string
    precio_actual?: Decimal | DecimalJsLike | number | string | null
    fecha_vencimiento?: Date | string | null
    cantidad_disponible?: number | null
    imagen_url?: string | null
    fecha_publicacion?: Date | string
    estado?: boolean
    updated_at?: Date | string
    reservas?: reservasUncheckedCreateNestedManyWithoutProductosInput
  }

  export type productosCreateOrConnectWithoutCategoriasInput = {
    where: productosWhereUniqueInput
    create: XOR<productosCreateWithoutCategoriasInput, productosUncheckedCreateWithoutCategoriasInput>
  }

  export type productosCreateManyCategoriasInputEnvelope = {
    data: productosCreateManyCategoriasInput | productosCreateManyCategoriasInput[]
    skipDuplicates?: boolean
  }

  export type productosUpsertWithWhereUniqueWithoutCategoriasInput = {
    where: productosWhereUniqueInput
    update: XOR<productosUpdateWithoutCategoriasInput, productosUncheckedUpdateWithoutCategoriasInput>
    create: XOR<productosCreateWithoutCategoriasInput, productosUncheckedCreateWithoutCategoriasInput>
  }

  export type productosUpdateWithWhereUniqueWithoutCategoriasInput = {
    where: productosWhereUniqueInput
    data: XOR<productosUpdateWithoutCategoriasInput, productosUncheckedUpdateWithoutCategoriasInput>
  }

  export type productosUpdateManyWithWhereWithoutCategoriasInput = {
    where: productosScalarWhereInput
    data: XOR<productosUpdateManyMutationInput, productosUncheckedUpdateManyWithoutCategoriasInput>
  }

  export type productosScalarWhereInput = {
    AND?: productosScalarWhereInput | productosScalarWhereInput[]
    OR?: productosScalarWhereInput[]
    NOT?: productosScalarWhereInput | productosScalarWhereInput[]
    id_producto?: BigIntFilter<"productos"> | bigint | number
    id_comercio?: BigIntFilter<"productos"> | bigint | number
    id_categoria?: BigIntFilter<"productos"> | bigint | number
    nombre?: StringFilter<"productos"> | string
    descripcion?: StringNullableFilter<"productos"> | string | null
    precio_base?: DecimalFilter<"productos"> | Decimal | DecimalJsLike | number | string
    precio_actual?: DecimalNullableFilter<"productos"> | Decimal | DecimalJsLike | number | string | null
    fecha_vencimiento?: DateTimeNullableFilter<"productos"> | Date | string | null
    cantidad_disponible?: IntNullableFilter<"productos"> | number | null
    imagen_url?: StringNullableFilter<"productos"> | string | null
    fecha_publicacion?: DateTimeFilter<"productos"> | Date | string
    estado?: BoolFilter<"productos"> | boolean
    updated_at?: DateTimeFilter<"productos"> | Date | string
  }

  export type usuariosCreateWithoutComerciosInput = {
    id_usuario?: bigint | number
    nombre: string
    email: string
    contrasena_hash: string
    fecha_nacimiento?: Date | string | null
    foto_perfil?: string | null
    fecha_registro?: Date | string
    estado?: boolean
    updated_at?: Date | string
    notificaciones?: notificacionesCreateNestedManyWithoutUsuariosInput
    reservas?: reservasCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosUncheckedCreateWithoutComerciosInput = {
    id_usuario?: bigint | number
    nombre: string
    email: string
    contrasena_hash: string
    fecha_nacimiento?: Date | string | null
    foto_perfil?: string | null
    fecha_registro?: Date | string
    estado?: boolean
    updated_at?: Date | string
    notificaciones?: notificacionesUncheckedCreateNestedManyWithoutUsuariosInput
    reservas?: reservasUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosCreateOrConnectWithoutComerciosInput = {
    where: usuariosWhereUniqueInput
    create: XOR<usuariosCreateWithoutComerciosInput, usuariosUncheckedCreateWithoutComerciosInput>
  }

  export type productosCreateWithoutComerciosInput = {
    id_producto?: bigint | number
    nombre: string
    descripcion?: string | null
    precio_base: Decimal | DecimalJsLike | number | string
    precio_actual?: Decimal | DecimalJsLike | number | string | null
    fecha_vencimiento?: Date | string | null
    cantidad_disponible?: number | null
    imagen_url?: string | null
    fecha_publicacion?: Date | string
    estado?: boolean
    updated_at?: Date | string
    categorias: categoriasCreateNestedOneWithoutProductosInput
    reservas?: reservasCreateNestedManyWithoutProductosInput
  }

  export type productosUncheckedCreateWithoutComerciosInput = {
    id_producto?: bigint | number
    id_categoria: bigint | number
    nombre: string
    descripcion?: string | null
    precio_base: Decimal | DecimalJsLike | number | string
    precio_actual?: Decimal | DecimalJsLike | number | string | null
    fecha_vencimiento?: Date | string | null
    cantidad_disponible?: number | null
    imagen_url?: string | null
    fecha_publicacion?: Date | string
    estado?: boolean
    updated_at?: Date | string
    reservas?: reservasUncheckedCreateNestedManyWithoutProductosInput
  }

  export type productosCreateOrConnectWithoutComerciosInput = {
    where: productosWhereUniqueInput
    create: XOR<productosCreateWithoutComerciosInput, productosUncheckedCreateWithoutComerciosInput>
  }

  export type productosCreateManyComerciosInputEnvelope = {
    data: productosCreateManyComerciosInput | productosCreateManyComerciosInput[]
    skipDuplicates?: boolean
  }

  export type usuariosUpsertWithoutComerciosInput = {
    update: XOR<usuariosUpdateWithoutComerciosInput, usuariosUncheckedUpdateWithoutComerciosInput>
    create: XOR<usuariosCreateWithoutComerciosInput, usuariosUncheckedCreateWithoutComerciosInput>
    where?: usuariosWhereInput
  }

  export type usuariosUpdateToOneWithWhereWithoutComerciosInput = {
    where?: usuariosWhereInput
    data: XOR<usuariosUpdateWithoutComerciosInput, usuariosUncheckedUpdateWithoutComerciosInput>
  }

  export type usuariosUpdateWithoutComerciosInput = {
    id_usuario?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contrasena_hash?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    foto_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    notificaciones?: notificacionesUpdateManyWithoutUsuariosNestedInput
    reservas?: reservasUpdateManyWithoutUsuariosNestedInput
  }

  export type usuariosUncheckedUpdateWithoutComerciosInput = {
    id_usuario?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contrasena_hash?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    foto_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    notificaciones?: notificacionesUncheckedUpdateManyWithoutUsuariosNestedInput
    reservas?: reservasUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type productosUpsertWithWhereUniqueWithoutComerciosInput = {
    where: productosWhereUniqueInput
    update: XOR<productosUpdateWithoutComerciosInput, productosUncheckedUpdateWithoutComerciosInput>
    create: XOR<productosCreateWithoutComerciosInput, productosUncheckedCreateWithoutComerciosInput>
  }

  export type productosUpdateWithWhereUniqueWithoutComerciosInput = {
    where: productosWhereUniqueInput
    data: XOR<productosUpdateWithoutComerciosInput, productosUncheckedUpdateWithoutComerciosInput>
  }

  export type productosUpdateManyWithWhereWithoutComerciosInput = {
    where: productosScalarWhereInput
    data: XOR<productosUpdateManyMutationInput, productosUncheckedUpdateManyWithoutComerciosInput>
  }

  export type usuariosCreateWithoutNotificacionesInput = {
    id_usuario?: bigint | number
    nombre: string
    email: string
    contrasena_hash: string
    fecha_nacimiento?: Date | string | null
    foto_perfil?: string | null
    fecha_registro?: Date | string
    estado?: boolean
    updated_at?: Date | string
    comercios?: comerciosCreateNestedManyWithoutUsuariosInput
    reservas?: reservasCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosUncheckedCreateWithoutNotificacionesInput = {
    id_usuario?: bigint | number
    nombre: string
    email: string
    contrasena_hash: string
    fecha_nacimiento?: Date | string | null
    foto_perfil?: string | null
    fecha_registro?: Date | string
    estado?: boolean
    updated_at?: Date | string
    comercios?: comerciosUncheckedCreateNestedManyWithoutUsuariosInput
    reservas?: reservasUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosCreateOrConnectWithoutNotificacionesInput = {
    where: usuariosWhereUniqueInput
    create: XOR<usuariosCreateWithoutNotificacionesInput, usuariosUncheckedCreateWithoutNotificacionesInput>
  }

  export type usuariosUpsertWithoutNotificacionesInput = {
    update: XOR<usuariosUpdateWithoutNotificacionesInput, usuariosUncheckedUpdateWithoutNotificacionesInput>
    create: XOR<usuariosCreateWithoutNotificacionesInput, usuariosUncheckedCreateWithoutNotificacionesInput>
    where?: usuariosWhereInput
  }

  export type usuariosUpdateToOneWithWhereWithoutNotificacionesInput = {
    where?: usuariosWhereInput
    data: XOR<usuariosUpdateWithoutNotificacionesInput, usuariosUncheckedUpdateWithoutNotificacionesInput>
  }

  export type usuariosUpdateWithoutNotificacionesInput = {
    id_usuario?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contrasena_hash?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    foto_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    comercios?: comerciosUpdateManyWithoutUsuariosNestedInput
    reservas?: reservasUpdateManyWithoutUsuariosNestedInput
  }

  export type usuariosUncheckedUpdateWithoutNotificacionesInput = {
    id_usuario?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contrasena_hash?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    foto_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    comercios?: comerciosUncheckedUpdateManyWithoutUsuariosNestedInput
    reservas?: reservasUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type categoriasCreateWithoutProductosInput = {
    id_categoria?: bigint | number
    nombre: string
    descripcion?: string | null
    updated_at?: Date | string
  }

  export type categoriasUncheckedCreateWithoutProductosInput = {
    id_categoria?: bigint | number
    nombre: string
    descripcion?: string | null
    updated_at?: Date | string
  }

  export type categoriasCreateOrConnectWithoutProductosInput = {
    where: categoriasWhereUniqueInput
    create: XOR<categoriasCreateWithoutProductosInput, categoriasUncheckedCreateWithoutProductosInput>
  }

  export type comerciosCreateWithoutProductosInput = {
    id_comercio?: bigint | number
    nombre_negocio: string
    telefono?: string | null
    direccion?: string | null
    latitud?: Decimal | DecimalJsLike | number | string | null
    longitud?: Decimal | DecimalJsLike | number | string | null
    categoria?: string | null
    fecha_registro?: Date | string
    estado?: boolean
    updated_at?: Date | string
    usuarios: usuariosCreateNestedOneWithoutComerciosInput
  }

  export type comerciosUncheckedCreateWithoutProductosInput = {
    id_comercio?: bigint | number
    id_usuario: bigint | number
    nombre_negocio: string
    telefono?: string | null
    direccion?: string | null
    latitud?: Decimal | DecimalJsLike | number | string | null
    longitud?: Decimal | DecimalJsLike | number | string | null
    categoria?: string | null
    fecha_registro?: Date | string
    estado?: boolean
    updated_at?: Date | string
  }

  export type comerciosCreateOrConnectWithoutProductosInput = {
    where: comerciosWhereUniqueInput
    create: XOR<comerciosCreateWithoutProductosInput, comerciosUncheckedCreateWithoutProductosInput>
  }

  export type reservasCreateWithoutProductosInput = {
    id_reserva?: bigint | number
    cantidad: number
    total: Decimal | DecimalJsLike | number | string
    codigo_validacion: string
    estado?: $Enums.reserva_estado
    fecha_reserva?: Date | string
    ventana_retiro_inicio?: Date | string | null
    ventana_retiro_fin?: Date | string | null
    updated_at?: Date | string
    usuarios: usuariosCreateNestedOneWithoutReservasInput
  }

  export type reservasUncheckedCreateWithoutProductosInput = {
    id_reserva?: bigint | number
    id_usuario: bigint | number
    cantidad: number
    total: Decimal | DecimalJsLike | number | string
    codigo_validacion: string
    estado?: $Enums.reserva_estado
    fecha_reserva?: Date | string
    ventana_retiro_inicio?: Date | string | null
    ventana_retiro_fin?: Date | string | null
    updated_at?: Date | string
  }

  export type reservasCreateOrConnectWithoutProductosInput = {
    where: reservasWhereUniqueInput
    create: XOR<reservasCreateWithoutProductosInput, reservasUncheckedCreateWithoutProductosInput>
  }

  export type reservasCreateManyProductosInputEnvelope = {
    data: reservasCreateManyProductosInput | reservasCreateManyProductosInput[]
    skipDuplicates?: boolean
  }

  export type categoriasUpsertWithoutProductosInput = {
    update: XOR<categoriasUpdateWithoutProductosInput, categoriasUncheckedUpdateWithoutProductosInput>
    create: XOR<categoriasCreateWithoutProductosInput, categoriasUncheckedCreateWithoutProductosInput>
    where?: categoriasWhereInput
  }

  export type categoriasUpdateToOneWithWhereWithoutProductosInput = {
    where?: categoriasWhereInput
    data: XOR<categoriasUpdateWithoutProductosInput, categoriasUncheckedUpdateWithoutProductosInput>
  }

  export type categoriasUpdateWithoutProductosInput = {
    id_categoria?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type categoriasUncheckedUpdateWithoutProductosInput = {
    id_categoria?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type comerciosUpsertWithoutProductosInput = {
    update: XOR<comerciosUpdateWithoutProductosInput, comerciosUncheckedUpdateWithoutProductosInput>
    create: XOR<comerciosCreateWithoutProductosInput, comerciosUncheckedCreateWithoutProductosInput>
    where?: comerciosWhereInput
  }

  export type comerciosUpdateToOneWithWhereWithoutProductosInput = {
    where?: comerciosWhereInput
    data: XOR<comerciosUpdateWithoutProductosInput, comerciosUncheckedUpdateWithoutProductosInput>
  }

  export type comerciosUpdateWithoutProductosInput = {
    id_comercio?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre_negocio?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    latitud?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitud?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarios?: usuariosUpdateOneRequiredWithoutComerciosNestedInput
  }

  export type comerciosUncheckedUpdateWithoutProductosInput = {
    id_comercio?: BigIntFieldUpdateOperationsInput | bigint | number
    id_usuario?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre_negocio?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    latitud?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitud?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reservasUpsertWithWhereUniqueWithoutProductosInput = {
    where: reservasWhereUniqueInput
    update: XOR<reservasUpdateWithoutProductosInput, reservasUncheckedUpdateWithoutProductosInput>
    create: XOR<reservasCreateWithoutProductosInput, reservasUncheckedCreateWithoutProductosInput>
  }

  export type reservasUpdateWithWhereUniqueWithoutProductosInput = {
    where: reservasWhereUniqueInput
    data: XOR<reservasUpdateWithoutProductosInput, reservasUncheckedUpdateWithoutProductosInput>
  }

  export type reservasUpdateManyWithWhereWithoutProductosInput = {
    where: reservasScalarWhereInput
    data: XOR<reservasUpdateManyMutationInput, reservasUncheckedUpdateManyWithoutProductosInput>
  }

  export type reservasScalarWhereInput = {
    AND?: reservasScalarWhereInput | reservasScalarWhereInput[]
    OR?: reservasScalarWhereInput[]
    NOT?: reservasScalarWhereInput | reservasScalarWhereInput[]
    id_reserva?: BigIntFilter<"reservas"> | bigint | number
    id_usuario?: BigIntFilter<"reservas"> | bigint | number
    id_producto?: BigIntFilter<"reservas"> | bigint | number
    cantidad?: IntFilter<"reservas"> | number
    total?: DecimalFilter<"reservas"> | Decimal | DecimalJsLike | number | string
    codigo_validacion?: StringFilter<"reservas"> | string
    estado?: Enumreserva_estadoFilter<"reservas"> | $Enums.reserva_estado
    fecha_reserva?: DateTimeFilter<"reservas"> | Date | string
    ventana_retiro_inicio?: DateTimeNullableFilter<"reservas"> | Date | string | null
    ventana_retiro_fin?: DateTimeNullableFilter<"reservas"> | Date | string | null
    updated_at?: DateTimeFilter<"reservas"> | Date | string
  }

  export type productosCreateWithoutReservasInput = {
    id_producto?: bigint | number
    nombre: string
    descripcion?: string | null
    precio_base: Decimal | DecimalJsLike | number | string
    precio_actual?: Decimal | DecimalJsLike | number | string | null
    fecha_vencimiento?: Date | string | null
    cantidad_disponible?: number | null
    imagen_url?: string | null
    fecha_publicacion?: Date | string
    estado?: boolean
    updated_at?: Date | string
    categorias: categoriasCreateNestedOneWithoutProductosInput
    comercios: comerciosCreateNestedOneWithoutProductosInput
  }

  export type productosUncheckedCreateWithoutReservasInput = {
    id_producto?: bigint | number
    id_comercio: bigint | number
    id_categoria: bigint | number
    nombre: string
    descripcion?: string | null
    precio_base: Decimal | DecimalJsLike | number | string
    precio_actual?: Decimal | DecimalJsLike | number | string | null
    fecha_vencimiento?: Date | string | null
    cantidad_disponible?: number | null
    imagen_url?: string | null
    fecha_publicacion?: Date | string
    estado?: boolean
    updated_at?: Date | string
  }

  export type productosCreateOrConnectWithoutReservasInput = {
    where: productosWhereUniqueInput
    create: XOR<productosCreateWithoutReservasInput, productosUncheckedCreateWithoutReservasInput>
  }

  export type usuariosCreateWithoutReservasInput = {
    id_usuario?: bigint | number
    nombre: string
    email: string
    contrasena_hash: string
    fecha_nacimiento?: Date | string | null
    foto_perfil?: string | null
    fecha_registro?: Date | string
    estado?: boolean
    updated_at?: Date | string
    comercios?: comerciosCreateNestedManyWithoutUsuariosInput
    notificaciones?: notificacionesCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosUncheckedCreateWithoutReservasInput = {
    id_usuario?: bigint | number
    nombre: string
    email: string
    contrasena_hash: string
    fecha_nacimiento?: Date | string | null
    foto_perfil?: string | null
    fecha_registro?: Date | string
    estado?: boolean
    updated_at?: Date | string
    comercios?: comerciosUncheckedCreateNestedManyWithoutUsuariosInput
    notificaciones?: notificacionesUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type usuariosCreateOrConnectWithoutReservasInput = {
    where: usuariosWhereUniqueInput
    create: XOR<usuariosCreateWithoutReservasInput, usuariosUncheckedCreateWithoutReservasInput>
  }

  export type productosUpsertWithoutReservasInput = {
    update: XOR<productosUpdateWithoutReservasInput, productosUncheckedUpdateWithoutReservasInput>
    create: XOR<productosCreateWithoutReservasInput, productosUncheckedCreateWithoutReservasInput>
    where?: productosWhereInput
  }

  export type productosUpdateToOneWithWhereWithoutReservasInput = {
    where?: productosWhereInput
    data: XOR<productosUpdateWithoutReservasInput, productosUncheckedUpdateWithoutReservasInput>
  }

  export type productosUpdateWithoutReservasInput = {
    id_producto?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio_base?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    precio_actual?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fecha_vencimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cantidad_disponible?: NullableIntFieldUpdateOperationsInput | number | null
    imagen_url?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_publicacion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    categorias?: categoriasUpdateOneRequiredWithoutProductosNestedInput
    comercios?: comerciosUpdateOneRequiredWithoutProductosNestedInput
  }

  export type productosUncheckedUpdateWithoutReservasInput = {
    id_producto?: BigIntFieldUpdateOperationsInput | bigint | number
    id_comercio?: BigIntFieldUpdateOperationsInput | bigint | number
    id_categoria?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio_base?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    precio_actual?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fecha_vencimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cantidad_disponible?: NullableIntFieldUpdateOperationsInput | number | null
    imagen_url?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_publicacion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usuariosUpsertWithoutReservasInput = {
    update: XOR<usuariosUpdateWithoutReservasInput, usuariosUncheckedUpdateWithoutReservasInput>
    create: XOR<usuariosCreateWithoutReservasInput, usuariosUncheckedCreateWithoutReservasInput>
    where?: usuariosWhereInput
  }

  export type usuariosUpdateToOneWithWhereWithoutReservasInput = {
    where?: usuariosWhereInput
    data: XOR<usuariosUpdateWithoutReservasInput, usuariosUncheckedUpdateWithoutReservasInput>
  }

  export type usuariosUpdateWithoutReservasInput = {
    id_usuario?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contrasena_hash?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    foto_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    comercios?: comerciosUpdateManyWithoutUsuariosNestedInput
    notificaciones?: notificacionesUpdateManyWithoutUsuariosNestedInput
  }

  export type usuariosUncheckedUpdateWithoutReservasInput = {
    id_usuario?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contrasena_hash?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    foto_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    comercios?: comerciosUncheckedUpdateManyWithoutUsuariosNestedInput
    notificaciones?: notificacionesUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type comerciosCreateWithoutUsuariosInput = {
    id_comercio?: bigint | number
    nombre_negocio: string
    telefono?: string | null
    direccion?: string | null
    latitud?: Decimal | DecimalJsLike | number | string | null
    longitud?: Decimal | DecimalJsLike | number | string | null
    categoria?: string | null
    fecha_registro?: Date | string
    estado?: boolean
    updated_at?: Date | string
    productos?: productosCreateNestedManyWithoutComerciosInput
  }

  export type comerciosUncheckedCreateWithoutUsuariosInput = {
    id_comercio?: bigint | number
    nombre_negocio: string
    telefono?: string | null
    direccion?: string | null
    latitud?: Decimal | DecimalJsLike | number | string | null
    longitud?: Decimal | DecimalJsLike | number | string | null
    categoria?: string | null
    fecha_registro?: Date | string
    estado?: boolean
    updated_at?: Date | string
    productos?: productosUncheckedCreateNestedManyWithoutComerciosInput
  }

  export type comerciosCreateOrConnectWithoutUsuariosInput = {
    where: comerciosWhereUniqueInput
    create: XOR<comerciosCreateWithoutUsuariosInput, comerciosUncheckedCreateWithoutUsuariosInput>
  }

  export type comerciosCreateManyUsuariosInputEnvelope = {
    data: comerciosCreateManyUsuariosInput | comerciosCreateManyUsuariosInput[]
    skipDuplicates?: boolean
  }

  export type notificacionesCreateWithoutUsuariosInput = {
    id_notificacion?: bigint | number
    titulo?: string | null
    mensaje?: string | null
    tipo?: string | null
    fecha_envio?: Date | string
    leido?: boolean
    updated_at?: Date | string
  }

  export type notificacionesUncheckedCreateWithoutUsuariosInput = {
    id_notificacion?: bigint | number
    titulo?: string | null
    mensaje?: string | null
    tipo?: string | null
    fecha_envio?: Date | string
    leido?: boolean
    updated_at?: Date | string
  }

  export type notificacionesCreateOrConnectWithoutUsuariosInput = {
    where: notificacionesWhereUniqueInput
    create: XOR<notificacionesCreateWithoutUsuariosInput, notificacionesUncheckedCreateWithoutUsuariosInput>
  }

  export type notificacionesCreateManyUsuariosInputEnvelope = {
    data: notificacionesCreateManyUsuariosInput | notificacionesCreateManyUsuariosInput[]
    skipDuplicates?: boolean
  }

  export type reservasCreateWithoutUsuariosInput = {
    id_reserva?: bigint | number
    cantidad: number
    total: Decimal | DecimalJsLike | number | string
    codigo_validacion: string
    estado?: $Enums.reserva_estado
    fecha_reserva?: Date | string
    ventana_retiro_inicio?: Date | string | null
    ventana_retiro_fin?: Date | string | null
    updated_at?: Date | string
    productos: productosCreateNestedOneWithoutReservasInput
  }

  export type reservasUncheckedCreateWithoutUsuariosInput = {
    id_reserva?: bigint | number
    id_producto: bigint | number
    cantidad: number
    total: Decimal | DecimalJsLike | number | string
    codigo_validacion: string
    estado?: $Enums.reserva_estado
    fecha_reserva?: Date | string
    ventana_retiro_inicio?: Date | string | null
    ventana_retiro_fin?: Date | string | null
    updated_at?: Date | string
  }

  export type reservasCreateOrConnectWithoutUsuariosInput = {
    where: reservasWhereUniqueInput
    create: XOR<reservasCreateWithoutUsuariosInput, reservasUncheckedCreateWithoutUsuariosInput>
  }

  export type reservasCreateManyUsuariosInputEnvelope = {
    data: reservasCreateManyUsuariosInput | reservasCreateManyUsuariosInput[]
    skipDuplicates?: boolean
  }

  export type comerciosUpsertWithWhereUniqueWithoutUsuariosInput = {
    where: comerciosWhereUniqueInput
    update: XOR<comerciosUpdateWithoutUsuariosInput, comerciosUncheckedUpdateWithoutUsuariosInput>
    create: XOR<comerciosCreateWithoutUsuariosInput, comerciosUncheckedCreateWithoutUsuariosInput>
  }

  export type comerciosUpdateWithWhereUniqueWithoutUsuariosInput = {
    where: comerciosWhereUniqueInput
    data: XOR<comerciosUpdateWithoutUsuariosInput, comerciosUncheckedUpdateWithoutUsuariosInput>
  }

  export type comerciosUpdateManyWithWhereWithoutUsuariosInput = {
    where: comerciosScalarWhereInput
    data: XOR<comerciosUpdateManyMutationInput, comerciosUncheckedUpdateManyWithoutUsuariosInput>
  }

  export type comerciosScalarWhereInput = {
    AND?: comerciosScalarWhereInput | comerciosScalarWhereInput[]
    OR?: comerciosScalarWhereInput[]
    NOT?: comerciosScalarWhereInput | comerciosScalarWhereInput[]
    id_comercio?: BigIntFilter<"comercios"> | bigint | number
    id_usuario?: BigIntFilter<"comercios"> | bigint | number
    nombre_negocio?: StringFilter<"comercios"> | string
    telefono?: StringNullableFilter<"comercios"> | string | null
    direccion?: StringNullableFilter<"comercios"> | string | null
    latitud?: DecimalNullableFilter<"comercios"> | Decimal | DecimalJsLike | number | string | null
    longitud?: DecimalNullableFilter<"comercios"> | Decimal | DecimalJsLike | number | string | null
    categoria?: StringNullableFilter<"comercios"> | string | null
    fecha_registro?: DateTimeFilter<"comercios"> | Date | string
    estado?: BoolFilter<"comercios"> | boolean
    updated_at?: DateTimeFilter<"comercios"> | Date | string
  }

  export type notificacionesUpsertWithWhereUniqueWithoutUsuariosInput = {
    where: notificacionesWhereUniqueInput
    update: XOR<notificacionesUpdateWithoutUsuariosInput, notificacionesUncheckedUpdateWithoutUsuariosInput>
    create: XOR<notificacionesCreateWithoutUsuariosInput, notificacionesUncheckedCreateWithoutUsuariosInput>
  }

  export type notificacionesUpdateWithWhereUniqueWithoutUsuariosInput = {
    where: notificacionesWhereUniqueInput
    data: XOR<notificacionesUpdateWithoutUsuariosInput, notificacionesUncheckedUpdateWithoutUsuariosInput>
  }

  export type notificacionesUpdateManyWithWhereWithoutUsuariosInput = {
    where: notificacionesScalarWhereInput
    data: XOR<notificacionesUpdateManyMutationInput, notificacionesUncheckedUpdateManyWithoutUsuariosInput>
  }

  export type notificacionesScalarWhereInput = {
    AND?: notificacionesScalarWhereInput | notificacionesScalarWhereInput[]
    OR?: notificacionesScalarWhereInput[]
    NOT?: notificacionesScalarWhereInput | notificacionesScalarWhereInput[]
    id_notificacion?: BigIntFilter<"notificaciones"> | bigint | number
    id_usuario?: BigIntFilter<"notificaciones"> | bigint | number
    titulo?: StringNullableFilter<"notificaciones"> | string | null
    mensaje?: StringNullableFilter<"notificaciones"> | string | null
    tipo?: StringNullableFilter<"notificaciones"> | string | null
    fecha_envio?: DateTimeFilter<"notificaciones"> | Date | string
    leido?: BoolFilter<"notificaciones"> | boolean
    updated_at?: DateTimeFilter<"notificaciones"> | Date | string
  }

  export type reservasUpsertWithWhereUniqueWithoutUsuariosInput = {
    where: reservasWhereUniqueInput
    update: XOR<reservasUpdateWithoutUsuariosInput, reservasUncheckedUpdateWithoutUsuariosInput>
    create: XOR<reservasCreateWithoutUsuariosInput, reservasUncheckedCreateWithoutUsuariosInput>
  }

  export type reservasUpdateWithWhereUniqueWithoutUsuariosInput = {
    where: reservasWhereUniqueInput
    data: XOR<reservasUpdateWithoutUsuariosInput, reservasUncheckedUpdateWithoutUsuariosInput>
  }

  export type reservasUpdateManyWithWhereWithoutUsuariosInput = {
    where: reservasScalarWhereInput
    data: XOR<reservasUpdateManyMutationInput, reservasUncheckedUpdateManyWithoutUsuariosInput>
  }

  export type productosCreateManyCategoriasInput = {
    id_producto?: bigint | number
    id_comercio: bigint | number
    nombre: string
    descripcion?: string | null
    precio_base: Decimal | DecimalJsLike | number | string
    precio_actual?: Decimal | DecimalJsLike | number | string | null
    fecha_vencimiento?: Date | string | null
    cantidad_disponible?: number | null
    imagen_url?: string | null
    fecha_publicacion?: Date | string
    estado?: boolean
    updated_at?: Date | string
  }

  export type productosUpdateWithoutCategoriasInput = {
    id_producto?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio_base?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    precio_actual?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fecha_vencimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cantidad_disponible?: NullableIntFieldUpdateOperationsInput | number | null
    imagen_url?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_publicacion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    comercios?: comerciosUpdateOneRequiredWithoutProductosNestedInput
    reservas?: reservasUpdateManyWithoutProductosNestedInput
  }

  export type productosUncheckedUpdateWithoutCategoriasInput = {
    id_producto?: BigIntFieldUpdateOperationsInput | bigint | number
    id_comercio?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio_base?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    precio_actual?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fecha_vencimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cantidad_disponible?: NullableIntFieldUpdateOperationsInput | number | null
    imagen_url?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_publicacion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    reservas?: reservasUncheckedUpdateManyWithoutProductosNestedInput
  }

  export type productosUncheckedUpdateManyWithoutCategoriasInput = {
    id_producto?: BigIntFieldUpdateOperationsInput | bigint | number
    id_comercio?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio_base?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    precio_actual?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fecha_vencimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cantidad_disponible?: NullableIntFieldUpdateOperationsInput | number | null
    imagen_url?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_publicacion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productosCreateManyComerciosInput = {
    id_producto?: bigint | number
    id_categoria: bigint | number
    nombre: string
    descripcion?: string | null
    precio_base: Decimal | DecimalJsLike | number | string
    precio_actual?: Decimal | DecimalJsLike | number | string | null
    fecha_vencimiento?: Date | string | null
    cantidad_disponible?: number | null
    imagen_url?: string | null
    fecha_publicacion?: Date | string
    estado?: boolean
    updated_at?: Date | string
  }

  export type productosUpdateWithoutComerciosInput = {
    id_producto?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio_base?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    precio_actual?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fecha_vencimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cantidad_disponible?: NullableIntFieldUpdateOperationsInput | number | null
    imagen_url?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_publicacion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    categorias?: categoriasUpdateOneRequiredWithoutProductosNestedInput
    reservas?: reservasUpdateManyWithoutProductosNestedInput
  }

  export type productosUncheckedUpdateWithoutComerciosInput = {
    id_producto?: BigIntFieldUpdateOperationsInput | bigint | number
    id_categoria?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio_base?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    precio_actual?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fecha_vencimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cantidad_disponible?: NullableIntFieldUpdateOperationsInput | number | null
    imagen_url?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_publicacion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    reservas?: reservasUncheckedUpdateManyWithoutProductosNestedInput
  }

  export type productosUncheckedUpdateManyWithoutComerciosInput = {
    id_producto?: BigIntFieldUpdateOperationsInput | bigint | number
    id_categoria?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio_base?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    precio_actual?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fecha_vencimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cantidad_disponible?: NullableIntFieldUpdateOperationsInput | number | null
    imagen_url?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_publicacion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reservasCreateManyProductosInput = {
    id_reserva?: bigint | number
    id_usuario: bigint | number
    cantidad: number
    total: Decimal | DecimalJsLike | number | string
    codigo_validacion: string
    estado?: $Enums.reserva_estado
    fecha_reserva?: Date | string
    ventana_retiro_inicio?: Date | string | null
    ventana_retiro_fin?: Date | string | null
    updated_at?: Date | string
  }

  export type reservasUpdateWithoutProductosInput = {
    id_reserva?: BigIntFieldUpdateOperationsInput | bigint | number
    cantidad?: IntFieldUpdateOperationsInput | number
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    codigo_validacion?: StringFieldUpdateOperationsInput | string
    estado?: Enumreserva_estadoFieldUpdateOperationsInput | $Enums.reserva_estado
    fecha_reserva?: DateTimeFieldUpdateOperationsInput | Date | string
    ventana_retiro_inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ventana_retiro_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarios?: usuariosUpdateOneRequiredWithoutReservasNestedInput
  }

  export type reservasUncheckedUpdateWithoutProductosInput = {
    id_reserva?: BigIntFieldUpdateOperationsInput | bigint | number
    id_usuario?: BigIntFieldUpdateOperationsInput | bigint | number
    cantidad?: IntFieldUpdateOperationsInput | number
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    codigo_validacion?: StringFieldUpdateOperationsInput | string
    estado?: Enumreserva_estadoFieldUpdateOperationsInput | $Enums.reserva_estado
    fecha_reserva?: DateTimeFieldUpdateOperationsInput | Date | string
    ventana_retiro_inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ventana_retiro_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reservasUncheckedUpdateManyWithoutProductosInput = {
    id_reserva?: BigIntFieldUpdateOperationsInput | bigint | number
    id_usuario?: BigIntFieldUpdateOperationsInput | bigint | number
    cantidad?: IntFieldUpdateOperationsInput | number
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    codigo_validacion?: StringFieldUpdateOperationsInput | string
    estado?: Enumreserva_estadoFieldUpdateOperationsInput | $Enums.reserva_estado
    fecha_reserva?: DateTimeFieldUpdateOperationsInput | Date | string
    ventana_retiro_inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ventana_retiro_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type comerciosCreateManyUsuariosInput = {
    id_comercio?: bigint | number
    nombre_negocio: string
    telefono?: string | null
    direccion?: string | null
    latitud?: Decimal | DecimalJsLike | number | string | null
    longitud?: Decimal | DecimalJsLike | number | string | null
    categoria?: string | null
    fecha_registro?: Date | string
    estado?: boolean
    updated_at?: Date | string
  }

  export type notificacionesCreateManyUsuariosInput = {
    id_notificacion?: bigint | number
    titulo?: string | null
    mensaje?: string | null
    tipo?: string | null
    fecha_envio?: Date | string
    leido?: boolean
    updated_at?: Date | string
  }

  export type reservasCreateManyUsuariosInput = {
    id_reserva?: bigint | number
    id_producto: bigint | number
    cantidad: number
    total: Decimal | DecimalJsLike | number | string
    codigo_validacion: string
    estado?: $Enums.reserva_estado
    fecha_reserva?: Date | string
    ventana_retiro_inicio?: Date | string | null
    ventana_retiro_fin?: Date | string | null
    updated_at?: Date | string
  }

  export type comerciosUpdateWithoutUsuariosInput = {
    id_comercio?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre_negocio?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    latitud?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitud?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    productos?: productosUpdateManyWithoutComerciosNestedInput
  }

  export type comerciosUncheckedUpdateWithoutUsuariosInput = {
    id_comercio?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre_negocio?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    latitud?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitud?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    productos?: productosUncheckedUpdateManyWithoutComerciosNestedInput
  }

  export type comerciosUncheckedUpdateManyWithoutUsuariosInput = {
    id_comercio?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre_negocio?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    latitud?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitud?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type notificacionesUpdateWithoutUsuariosInput = {
    id_notificacion?: BigIntFieldUpdateOperationsInput | bigint | number
    titulo?: NullableStringFieldUpdateOperationsInput | string | null
    mensaje?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_envio?: DateTimeFieldUpdateOperationsInput | Date | string
    leido?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type notificacionesUncheckedUpdateWithoutUsuariosInput = {
    id_notificacion?: BigIntFieldUpdateOperationsInput | bigint | number
    titulo?: NullableStringFieldUpdateOperationsInput | string | null
    mensaje?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_envio?: DateTimeFieldUpdateOperationsInput | Date | string
    leido?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type notificacionesUncheckedUpdateManyWithoutUsuariosInput = {
    id_notificacion?: BigIntFieldUpdateOperationsInput | bigint | number
    titulo?: NullableStringFieldUpdateOperationsInput | string | null
    mensaje?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_envio?: DateTimeFieldUpdateOperationsInput | Date | string
    leido?: BoolFieldUpdateOperationsInput | boolean
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reservasUpdateWithoutUsuariosInput = {
    id_reserva?: BigIntFieldUpdateOperationsInput | bigint | number
    cantidad?: IntFieldUpdateOperationsInput | number
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    codigo_validacion?: StringFieldUpdateOperationsInput | string
    estado?: Enumreserva_estadoFieldUpdateOperationsInput | $Enums.reserva_estado
    fecha_reserva?: DateTimeFieldUpdateOperationsInput | Date | string
    ventana_retiro_inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ventana_retiro_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    productos?: productosUpdateOneRequiredWithoutReservasNestedInput
  }

  export type reservasUncheckedUpdateWithoutUsuariosInput = {
    id_reserva?: BigIntFieldUpdateOperationsInput | bigint | number
    id_producto?: BigIntFieldUpdateOperationsInput | bigint | number
    cantidad?: IntFieldUpdateOperationsInput | number
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    codigo_validacion?: StringFieldUpdateOperationsInput | string
    estado?: Enumreserva_estadoFieldUpdateOperationsInput | $Enums.reserva_estado
    fecha_reserva?: DateTimeFieldUpdateOperationsInput | Date | string
    ventana_retiro_inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ventana_retiro_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type reservasUncheckedUpdateManyWithoutUsuariosInput = {
    id_reserva?: BigIntFieldUpdateOperationsInput | bigint | number
    id_producto?: BigIntFieldUpdateOperationsInput | bigint | number
    cantidad?: IntFieldUpdateOperationsInput | number
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    codigo_validacion?: StringFieldUpdateOperationsInput | string
    estado?: Enumreserva_estadoFieldUpdateOperationsInput | $Enums.reserva_estado
    fecha_reserva?: DateTimeFieldUpdateOperationsInput | Date | string
    ventana_retiro_inicio?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ventana_retiro_fin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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