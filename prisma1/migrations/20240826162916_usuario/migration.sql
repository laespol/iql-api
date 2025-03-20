BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[usuario] (
    [idusuario] INT NOT NULL IDENTITY(1,1),
    [nome] VARCHAR(100) NOT NULL,
    [email] VARCHAR(100) NOT NULL,
    [cpf] VARCHAR(50),
    [dtnascimento] DATE,
    [sexo] VARCHAR(1),
    [idusercreateAt] INT NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [usuario_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [iduserupdatedAt] INT,
    [updatedAt] DATETIME2,
    [status] VARCHAR(1) NOT NULL CONSTRAINT [usuario_status_df] DEFAULT 'A',
    [senha] NVARCHAR(1000) NOT NULL,
    [trocasenha] BIT NOT NULL CONSTRAINT [usuario_trocasenha_df] DEFAULT 1,
    [iddepartamento] INT NOT NULL,
    [idmenu] INT NOT NULL CONSTRAINT [usuario_idmenu_df] DEFAULT 1,
    [celular] VARCHAR(20),
    [ramaln] VARCHAR(20),
    [idnivel] INT NOT NULL CONSTRAINT [usuario_idnivel_df] DEFAULT 1,
    [chatid] NVARCHAR(1000) CONSTRAINT [usuario_chatid_df] DEFAULT '0',
    [ti] BIT NOT NULL CONSTRAINT [usuario_ti_df] DEFAULT 0,
    [contrato] BIT NOT NULL CONSTRAINT [usuario_contrato_df] DEFAULT 0,
    [contratost] BIT NOT NULL CONSTRAINT [usuario_contratost_df] DEFAULT 0,
    [idunidade] INT NOT NULL CONSTRAINT [usuario_idunidade_df] DEFAULT 1,
    [vtodoscontratos] BIT NOT NULL CONSTRAINT [usuario_vtodoscontratos_df] DEFAULT 0,
    [vtodoshoraextra] BIT NOT NULL CONSTRAINT [usuario_vtodoshoraextra_df] DEFAULT 0,
    [ccontratos] BIT NOT NULL CONSTRAINT [usuario_ccontratos_df] DEFAULT 0,
    [choraextra] BIT NOT NULL CONSTRAINT [usuario_choraextra_df] DEFAULT 0,
    CONSTRAINT [usuario_pkey] PRIMARY KEY CLUSTERED ([idusuario])
);

-- CreateIndex
CREATE NONCLUSTERED INDEX [usuario_email_idx] ON [dbo].[usuario]([email]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [usuario_iddepartamento_fkey] ON [dbo].[usuario]([iddepartamento]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [usuario_idmenu_fkey] ON [dbo].[usuario]([idmenu]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [usuario_idnivel_fkey] ON [dbo].[usuario]([idnivel]);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
