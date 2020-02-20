const petModel= require("../model/petModel");

const petController = {
    index: (req, res) => {
        res.send(petModel.listarPet());
    }, 
    add: (req,res) => {
        let novoPet = req.params;
        petModel.adicionarPet(novoPet);
        res.send(`Opa, ${novoPet.nome} foi adicionado com sucesso!`);
    },
    buscar: (req,res) => {
        let nomePet = req.params.nome;
       let petsEncontrados = petModel.buscarPet(nomePet);
        res.send(`Oba, ${petsEncontrados.length} foi encontrado com sucesso!`);
    },

    
};
module.exports=petController;