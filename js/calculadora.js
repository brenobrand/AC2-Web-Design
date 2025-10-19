// js/calculadora.js

document.addEventListener('DOMContentLoaded', () => {

    // Pega os elementos do formulário e do resultado pelo ID
    const calculatorForm = document.getElementById('calculatorForm');
    const salarioInput = document.getElementById('salarioInput');
    const precoInput = document.getElementById('precoInput');
    const horasMensaisInput = document.getElementById('horasMensaisInput');
    const resultadoCard = document.getElementById('resultadoCard');
    const resultadoHoras = document.getElementById('resultadoHoras');
    const resultadoDias = document.getElementById('resultadoDias');
    const resultadoValorHora = document.getElementById('resultadoValorHora');
// Função para formatar números para a moeda BRL (Real)
    const formatarBRL = (valor) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(valor);
    };

    // Adiciona o evento de 'submit' no formulário
    calculatorForm.addEventListener('submit', (event) => {
        // Previne o comportamento padrão de recarregar a página
        event.preventDefault();

        // Pega os valores e converte para número
        const salario = parseFloat(salarioInput.value);
        const preco = parseFloat(precoInput.value);
        const horasMensais = parseFloat(horasMensaisInput.value);

        // Validação básica para evitar erros
        if (isNaN(salario) || isNaN(preco) || isNaN(horasMensais) || salario <= 0) {
            alert('Por favor, preencha todos os campos com valores numéricos válidos e um salário maior que zero.');
            return;
        }
