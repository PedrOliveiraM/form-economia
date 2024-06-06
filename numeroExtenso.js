const unidades = [
  '',
  'um',
  'dois',
  'três',
  'quatro',
  'cinco',
  'seis',
  'sete',
  'oito',
  'nove',
];
const especiais = [
  'dez',
  'onze',
  'doze',
  'treze',
  'quatorze',
  'quinze',
  'dezesseis',
  'dezessete',
  'dezoito',
  'dezenove',
];
const dezenas = [
  '',
  '',
  'vinte',
  'trinta',
  'quarenta',
  'cinquenta',
  'sessenta',
  'setenta',
  'oitenta',
  'noventa',
];
const centenas = [
  '',
  'cem',
  'duzentos',
  'trezentos',
  'quatrocentos',
  'quinhentos',
  'seiscentos',
  'setecentos',
  'oitocentos',
  'novecentos',
];

function numeroParaExtenso(numero) {
  if (numero === 0) return 'zero';

  let extenso = '';

  if (numero >= 1000000) {
    let milhoes = Math.floor(numero / 1000000);
    extenso +=
      milhoes === 1 ? 'um milhão' : numeroParaExtenso(milhoes) + ' milhões';
    numero %= 1000000;
    if (numero > 0) extenso += ' e ';
  }

  if (numero >= 1000) {
    let milhares = Math.floor(numero / 1000);
    extenso += milhares === 1 ? 'mil' : numeroParaExtenso(milhares) + ' mil';
    numero %= 1000;
    if (numero > 0) extenso += ' e ';
  }

  if (numero >= 100) {
    let centena = Math.floor(numero / 100);
    if (centena === 1 && numero % 100 !== 0) {
      extenso += 'cento';
    } else {
      extenso += centenas[centena];
    }
    numero %= 100;
    if (numero > 0) extenso += ' e ';
  }

  if (numero >= 20) {
    let dezena = Math.floor(numero / 10);
    extenso += dezenas[dezena];
    numero %= 10;
    if (numero > 0) extenso += ' e ';
  }

  if (numero >= 10) {
    extenso += especiais[numero - 10];
    numero = 0;
  }

  if (numero > 0) {
    extenso += unidades[numero];
  }

  return extenso;
}

function valorMonetarioParaExtenso(valor) {
  // Separa a parte inteira da parte decimal
  let [reais, centavos] = valor.toFixed(2).split('.').map(Number);

  let extensoReais =
    numeroParaExtenso(reais) + (reais === 1 ? ' real' : ' reais');
  let extensoCentavos =
    centavos > 0
      ? numeroParaExtenso(centavos) +
        (centavos === 1 ? ' centavo' : ' centavos')
      : '';

  if (centavos > 0) {
    return `${extensoReais} e ${extensoCentavos}`;
  } else {
    return extensoReais;
  }
}

export { numeroParaExtenso, valorMonetarioParaExtenso };
