const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
//const { PrismaClient } = require('@prisma/client')
const { PrismaClient } = require('../prisma/client/iql')

const prisma = new PrismaClient()
const iql = new PrismaClient()

exports.getMenu = async (req, res, next) => {

    try {
        const menus = await iql.menu.findMany({
            where: {
                status: 'A'
            }
        })
        await iql.$disconnect()
        const response = {
            ok: true,
            length: menus.length,
            menus: menus
        }
        return res.status(200).send(response);
    } catch (error) {
        console.log(error);
        await iql.$disconnect()
        return res.status(500).send({
            ok: false,
            error: error
        });
    }
};

exports.postMenu = async (req, res, next) => {
    try {
        console.log(req.body);
        const valor = await iql.menu.count({
            where: {
                email: req.body.menu.nome,
                status: 'A'
            }
        })

        if (valor != 0) {
            await iql.$disconnect()
            return res.status(200).send({ ok: false, message: 'Menu já cadastrado' })
        }


        const createMenu = await iql.menu.create({
            data: {
                nome: req.body.menu.nome,
                idusercreateAt: Number(req.user.idusuario)
            },
        });
        await iql.$disconnect()

        const response = {
            ok: true,
            message: 'Menu inserido com sucesso',
            createMenu: createMenu
        }
        return res.status(201).send(response);
    } catch (error) {
        console.log(error);
        await iql.$disconnect()
        return res.status(500).send({
            ok: false,
            error: error
        });
    }
};

exports.getMenuDetail = async (req, res, next) => {
    var menu;
    try {
        const menu = await iql.menu.findUnique({
            where: {
                idmenu: Number(req.params.idmenu),
                status: 'A'
            }
        })

        if (result.length == 0) {
            await iql.$disconnect()
            return res.status(404).send({
                ok: false,
                message: 'Menu não encontrado'
            })
        }
        await iql.$disconnect()
        const response = {
            ok: true,
            menu: menu
        }
        return res.status(200).send(response);
    } catch (error) {
        await iql.$disconnect()
        return res.status(500).send({
            ok: false,
            error: error
        });
    }
};

exports.updateMenu = async (req, res, next) => {

    try {

        const valor = await iql.menu.count({
            where: {
                idmenu: Number(req.params.idmenu),
                status: 'A'
            }
        })
        if (valor == 0) {
            await iql.$disconnect()
            return res.status(200).send({ ok: false, message: 'Menu não cadastrado' })
        }

        const updateMenu = await iql.menu.update({
            where: {
                idmenu: Number(req.params.idmenu),
            },
            data: {
                nome: req.body.menu.nome,
                iduserupdatedAt: Number(req.user.idusuario),
            },
        });
        await iql.$disconnect()
        const response = {
            ok: true,
            message: 'Menu atualizado com sucesso',
            updateMenu: updateMenu
        }
        return res.status(202).send(response);
    } catch (error) {
        console.log(error);
        await iql.$disconnect()
        return res.status(500).send({
            ok: false,
            error: error
        });
    }
};

exports.deleteMenu = async (req, res, next) => {
    const idmenu = parseInt(req.params.idmenu);
    const idusuarioAcesso = parseInt(req.user.idusuario);
    var valor;
    try {

        const valor = await iql.menu.count({
            where: {
                idmenu: Number(req.params.idmenu),
                status: 'A'
            }
        })
        if (valor == 0) {
            await iql.$disconnect()
            return res.status(200).send({ ok: false, message: 'Menu não cadastrado' })
        }
        await iql.$disconnect()
        const deleteMenu = await iql.menu.update({
            where: {
                idmenu: Number(req.params.idmenu),
            },
            data: {
                iduserupdatedAt: Number(req.user.idusuario),
                status: "D"
            },
        });
    } catch (error) {
        await iql.$disconnect()
        return res.status(500).send({
            ok: false,
            error: error
        });
    }
};






