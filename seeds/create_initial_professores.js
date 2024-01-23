/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const bcrypt = require('bcrypt');
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('professores').del()
  await knex('professores').insert([
    {nome: 'Chico bateu no bode', email: 'Teste@email.com' , telefone: '(84)99952020', nascimento: '1996-02-19'},
    {nome: 'Bode bateu no chico', email: 'bode@email.com' , telefone: '(84)99952020', nascimento: '2000-02-20'},
    {nome: 'Bode chico', email: 'bodechico@email.com' , telefone: bcrypt.hashSync('prof', 10), nascimento: '2001-02-25'}
  ]);
};
