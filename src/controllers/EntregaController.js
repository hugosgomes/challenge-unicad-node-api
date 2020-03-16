const Entrega = require ('../models/Entrega');

module.exports = {
    async index(req, res) {
        try {
            const entregas = await Entrega.findAll();
            return res.json(entregas);
        } catch (error) {
            return res.json({error});
        }        
    },

    async store(req, res) {
        const { nome_cliente, ponto_partida, ponto_destino, data_entrega } = req.body;

        try {
            const entrega = await Entrega.create({
                nome_cliente,
                ponto_partida,
                ponto_destino,
                data_entrega
            });
            return res.json(entrega);
        } catch (error) {
            return res.json({error});
        }        
    },

    async update(req, res) {
        const { id } = req.params;
        const { nome_cliente, ponto_partida, ponto_destino, data_entrega } = req.body;

        try {
            const entrega = await Entrega.findByPk(id);
    
            if (!entrega) {
                return res.status(400).json({ error: 'Não existe entrega com este ID!'});
            }
    
            await entrega.update({
                nome_cliente,
                ponto_partida,
                ponto_destino,
                data_entrega
            });
            return res.json(entrega);
        } catch (error) {
            return res.json({error});
        }        
    },

    async delete(req, res) {
        const { id } = req.params;

        try {
            const entrega = await Entrega.findByPk(id);
    
            if (!entrega) {
                return res.status(400).json({ error: 'Não existe entrega com este ID!'});
            }
    
            await entrega.destroy();
            return res.json('Entrega excluída com êxito!');
        } catch (error) {
            return res.json({error});
        }        
    }
};