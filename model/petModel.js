/*
    https://github.com/fronthendy/petshop-nodejs/blob/master/petshop.js
*/

let pets = [{ nome: "doug" }, { nome: "costelinha" }];

const listarPet = () => {
  let conteudo = "";
  for (let pet of pets) {
    conteudo += `
    -----------
    Nome: ${pet.nome}
    -----------`;
  }

  return conteudo;
};

const adicionarPet = novoPet => {
  return pets.push(novoPet);
};

const buscarPet = nomePet => {
  let petsEncontrados = pets.filter(pet => pet.nome == nomePet);

  return petsEncontrados;
};

module.exports = { listarPet, adicionarPet, buscarPet };
