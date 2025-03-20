BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[nivel] (
    [idnivel] INT NOT NULL IDENTITY(1,1),
    [nome] VARCHAR(50) NOT NULL,
    [idusercreateAt] INT NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [nivel_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [iduserupdatedAt] INT,
    [updatedAt] DATETIME2,
    [status] VARCHAR(1) NOT NULL CONSTRAINT [nivel_status_df] DEFAULT 'A',
    CONSTRAINT [nivel_pkey] PRIMARY KEY CLUSTERED ([idnivel])
);

-- CreateTable
CREATE TABLE [dbo].[login] (
    [idlogin] INT NOT NULL IDENTITY(1,1),
    [email] VARCHAR(100) NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [login_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [status] VARCHAR(1) NOT NULL CONSTRAINT [login_status_df] DEFAULT 'A',
    [respsend] INT NOT NULL,
    [iporigem] VARCHAR(20) NOT NULL,
    CONSTRAINT [login_pkey] PRIMARY KEY CLUSTERED ([idlogin])
);

-- CreateTable
CREATE TABLE [dbo].[menu] (
    [idmenu] INT NOT NULL IDENTITY(1,1),
    [idusercreateAt] INT NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [menu_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [iduserupdatedAt] INT,
    [updatedAt] DATETIME2,
    [status] VARCHAR(1) NOT NULL CONSTRAINT [menu_status_df] DEFAULT 'A',
    [nome] VARCHAR(30) NOT NULL,
    CONSTRAINT [menu_pkey] PRIMARY KEY CLUSTERED ([idmenu])
);

-- CreateTable
CREATE TABLE [dbo].[menuitem] (
    [idmenuitem] INT NOT NULL IDENTITY(1,1),
    [idmenu] INT NOT NULL,
    [seq] INT NOT NULL,
    [titulo] VARCHAR(30) NOT NULL,
    [url] VARCHAR(200) NOT NULL,
    [icon] VARCHAR(30) NOT NULL,
    [idusercreateAt] INT NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [menuitem_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [iduserupdatedAt] INT,
    [updatedAt] DATETIME2,
    [status] VARCHAR(1) NOT NULL CONSTRAINT [menuitem_status_df] DEFAULT 'A',
    CONSTRAINT [menuitem_pkey] PRIMARY KEY CLUSTERED ([idmenuitem])
);

-- CreateTable
CREATE TABLE [dbo].[coluna] (
    [idcoluna] INT NOT NULL IDENTITY(1,1),
    [programa] VARCHAR(50) NOT NULL,
    [field] NVARCHAR(1000) NOT NULL,
    [header] NVARCHAR(1000) NOT NULL,
    [style] NVARCHAR(1000) NOT NULL,
    [type] NVARCHAR(1000) NOT NULL,
    [agregado1] NVARCHAR(1000),
    [agregado2] NVARCHAR(1000),
    [idusercreateAt] INT NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [coluna_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [iduserupdatedAt] INT,
    [updatedAt] DATETIME2,
    [status] VARCHAR(1) NOT NULL CONSTRAINT [coluna_status_df] DEFAULT 'A',
    [ordem] INT NOT NULL CONSTRAINT [coluna_ordem_df] DEFAULT 0,
    [ordena] NVARCHAR(1000) NOT NULL CONSTRAINT [coluna_ordena_df] DEFAULT 'true',
    [filtra] BIT NOT NULL CONSTRAINT [coluna_filtra_df] DEFAULT 0,
    CONSTRAINT [coluna_pkey] PRIMARY KEY CLUSTERED ([idcoluna])
);

-- CreateTable
CREATE TABLE [dbo].[usuariocoluna] (
    [idusuariocoluna] INT NOT NULL IDENTITY(1,1),
    [idcoluna] INT NOT NULL CONSTRAINT [usuariocoluna_idcoluna_df] DEFAULT 0,
    [idusercreateAt] INT NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [usuariocoluna_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [iduserupdatedAt] INT,
    [updatedAt] DATETIME2,
    [status] VARCHAR(1) NOT NULL CONSTRAINT [usuariocoluna_status_df] DEFAULT 'A',
    [idusuario] INT NOT NULL,
    CONSTRAINT [usuariocoluna_pkey] PRIMARY KEY CLUSTERED ([idusuariocoluna])
);

-- CreateTable
CREATE TABLE [dbo].[unidade] (
    [idunidade] INT NOT NULL IDENTITY(1,1),
    [nome] VARCHAR(30) NOT NULL,
    [idusercreateAt] INT NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [unidade_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [iduserupdatedAt] INT,
    [updatedAt] DATETIME2,
    [status] VARCHAR(1) NOT NULL CONSTRAINT [unidade_status_df] DEFAULT 'A',
    [idimovel] INT NOT NULL CONSTRAINT [unidade_idimovel_df] DEFAULT 5,
    [imagem1] VARBINARY(max),
    [imagem2] VARBINARY(max),
    CONSTRAINT [unidade_pkey] PRIMARY KEY CLUSTERED ([idunidade])
);

-- CreateIndex
CREATE NONCLUSTERED INDEX [menuitem_idmenu_fkey] ON [dbo].[menuitem]([idmenu]);

-- AddForeignKey
ALTER TABLE [dbo].[usuario] ADD CONSTRAINT [usuario_idnivel_fkey] FOREIGN KEY ([idnivel]) REFERENCES [dbo].[nivel]([idnivel]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[usuario] ADD CONSTRAINT [usuario_idmenu_fkey] FOREIGN KEY ([idmenu]) REFERENCES [dbo].[menu]([idmenu]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[usuario] ADD CONSTRAINT [usuario_idunidade_fkey] FOREIGN KEY ([idunidade]) REFERENCES [dbo].[unidade]([idunidade]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[menuitem] ADD CONSTRAINT [menuitem_idmenu_fkey] FOREIGN KEY ([idmenu]) REFERENCES [dbo].[menu]([idmenu]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[usuariocoluna] ADD CONSTRAINT [usuariocoluna_idcoluna_fkey] FOREIGN KEY ([idcoluna]) REFERENCES [dbo].[coluna]([idcoluna]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
