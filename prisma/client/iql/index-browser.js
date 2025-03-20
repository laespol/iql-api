
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.21.1
 * Query Engine version: bf0e5e8a04cada8225617067eaa03d041e2bba36
 */
Prisma.prismaVersion = {
  client: "5.21.1",
  engine: "bf0e5e8a04cada8225617067eaa03d041e2bba36"
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
  Serializable: 'Serializable'
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
  filtra: 'filtra',
  fixa: 'fixa'
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

exports.Prisma.CustoiqlScalarFieldEnum = {
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

exports.Prisma.InventarioScalarFieldEnum = {
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

exports.Prisma.SendmailScalarFieldEnum = {
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

exports.Prisma.ResumocomprasScalarFieldEnum = {
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

exports.Prisma.ComprasScalarFieldEnum = {
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

exports.Prisma.NecessidadeScalarFieldEnum = {
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

exports.Prisma.PainelScalarFieldEnum = {
  idpainel: 'idpainel',
  idnivel: 'idnivel',
  nrpainel: 'nrpainel',
  status: 'status',
  descricao: 'descricao'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.UsuarioOrderByRelevanceFieldEnum = {
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

exports.Prisma.NivelOrderByRelevanceFieldEnum = {
  nome: 'nome',
  status: 'status'
};

exports.Prisma.LoginOrderByRelevanceFieldEnum = {
  email: 'email',
  status: 'status',
  iporigem: 'iporigem'
};

exports.Prisma.MenuOrderByRelevanceFieldEnum = {
  status: 'status',
  nome: 'nome'
};

exports.Prisma.MenuitemOrderByRelevanceFieldEnum = {
  titulo: 'titulo',
  url: 'url',
  icon: 'icon',
  status: 'status'
};

exports.Prisma.ColunaOrderByRelevanceFieldEnum = {
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

exports.Prisma.UsuariocolunaOrderByRelevanceFieldEnum = {
  status: 'status'
};

exports.Prisma.UnidadeOrderByRelevanceFieldEnum = {
  nome: 'nome',
  status: 'status'
};

exports.Prisma.CustoiqlOrderByRelevanceFieldEnum = {
  numero_op: 'numero_op',
  produzido: 'produzido',
  codigo_produto: 'codigo_produto',
  desc_tecnica: 'desc_tecnica',
  descricao: 'descricao'
};

exports.Prisma.InventarioOrderByRelevanceFieldEnum = {
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

exports.Prisma.SendmailOrderByRelevanceFieldEnum = {
  destinatario: 'destinatario',
  subject: 'subject',
  status: 'status'
};

exports.Prisma.ResumocomprasOrderByRelevanceFieldEnum = {
  Apelido_empresa: 'Apelido_empresa',
  Apelido_estabelecimento: 'Apelido_estabelecimento',
  Codigo_produto: 'Codigo_produto',
  Unidade_estoque: 'Unidade_estoque',
  Unidade_compra: 'Unidade_compra',
  Desc_tecnica: 'Desc_tecnica'
};

exports.Prisma.ComprasOrderByRelevanceFieldEnum = {
  chavearquivo: 'chavearquivo',
  codigo_produto: 'codigo_produto',
  desc_tecnica: 'desc_tecnica'
};

exports.Prisma.NecessidadeOrderByRelevanceFieldEnum = {
  codigo_produto: 'codigo_produto',
  desc_tecnica: 'desc_tecnica',
  processo: 'processo'
};

exports.Prisma.PainelOrderByRelevanceFieldEnum = {
  status: 'status',
  descricao: 'descricao'
};


exports.Prisma.ModelName = {
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
