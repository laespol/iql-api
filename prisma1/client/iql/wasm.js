
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.18.0
 * Query Engine version: 4c784e32044a8a016d99474bd02a3b6123742169
 */
Prisma.prismaVersion = {
  client: "5.18.0",
  engine: "4c784e32044a8a016d99474bd02a3b6123742169"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable',
  Snapshot: 'Snapshot'
});

exports.Prisma.UsuarioScalarFieldEnum = {
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

exports.Prisma.NivelScalarFieldEnum = {
  idnivel: 'idnivel',
  nome: 'nome',
  idusercreateAt: 'idusercreateAt',
  createdAt: 'createdAt',
  iduserupdatedAt: 'iduserupdatedAt',
  updatedAt: 'updatedAt',
  status: 'status'
};

exports.Prisma.LoginScalarFieldEnum = {
  idlogin: 'idlogin',
  email: 'email',
  createdAt: 'createdAt',
  status: 'status',
  respsend: 'respsend',
  iporigem: 'iporigem'
};

exports.Prisma.MenuScalarFieldEnum = {
  idmenu: 'idmenu',
  idusercreateAt: 'idusercreateAt',
  createdAt: 'createdAt',
  iduserupdatedAt: 'iduserupdatedAt',
  updatedAt: 'updatedAt',
  status: 'status',
  nome: 'nome'
};

exports.Prisma.MenuitemScalarFieldEnum = {
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

exports.Prisma.ColunaScalarFieldEnum = {
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

exports.Prisma.UsuariocolunaScalarFieldEnum = {
  idusuariocoluna: 'idusuariocoluna',
  idcoluna: 'idcoluna',
  idusercreateAt: 'idusercreateAt',
  createdAt: 'createdAt',
  iduserupdatedAt: 'iduserupdatedAt',
  updatedAt: 'updatedAt',
  status: 'status',
  idusuario: 'idusuario'
};

exports.Prisma.UnidadeScalarFieldEnum = {
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

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  Usuario: 'Usuario',
  Nivel: 'Nivel',
  Login: 'Login',
  Menu: 'Menu',
  Menuitem: 'Menuitem',
  Coluna: 'Coluna',
  Usuariocoluna: 'Usuariocoluna',
  Unidade: 'Unidade'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
