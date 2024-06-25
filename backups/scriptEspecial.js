import {
  numeroParaExtenso,
  valorMonetarioParaExtenso,
} from './numeroExtenso.js';
const inputValorTotalSuplementacao = document.getElementById(
  'input-valor-total-suplementacao'
);
const inputValorTotalSuplementacaoExtenso = document.getElementById(
  'input-valor-total-suplementacao-extenso'
);

inputValorTotalSuplementacao.addEventListener('change', () => {
  console.log(
    'inputValorTotalSuplementacao',
    inputValorTotalSuplementacao.value
  );
  const valor = inputValorTotalSuplementacao.value;
  const valorPorExtenso = valorMonetarioParaExtenso(parseFloat(valor));
  inputValorTotalSuplementacaoExtenso.value = valorPorExtenso;
});

// limite de caracteres dos inputs
const valueMax = 1000;
const inputs = [
  { id: 'input-descricao-produto', maxLength: valueMax },
  { id: 'input-metodo-comprovacao', maxLength: valueMax },
  { id: 'input-compromissos-plano-governo', maxLength: valueMax },
  { id: 'input-metas-desenvolvimento-sustentavel', maxLength: valueMax },
  { id: 'text-area-objeto', maxLength: valueMax },
  { id: 'text-area-justificativa', maxLength: valueMax },
  { id: 'text-area-impacto', maxLength: valueMax },
];
function limitInputLength(input, maxLength) {
  input.addEventListener('input', function () {
    if (input.value.length > maxLength) {
      input.value = input.value.slice(0, maxLength);
    }
  });
}
inputs.forEach((input) => {
  const element = document.getElementById(input.id); // pegar o id do input da lista
  if (element)
    // se existir essse elemento
    limitInputLength(element, input.maxLength); // chama a função limitInputLength
});

//lista de orgaos
const lista_orgao = [
  { sigla: 'ABC', nome_completo: '1261 - AGÊNCIA BRASIL CENTRAL' },
  { sigla: 'AGEHAB', nome_completo: '4362 - AGÊNCIA GOIANA DE HABITAÇÃO S/A' },
  {
    sigla: 'AGR',
    nome_completo:
      '1863 - AGÊNCIA GOIANA DE REGULAÇÃO, CONTROLE E FISCALIZAÇÃO DE SERVIÇOS PÚBLICOS',
  },
  {
    sigla: 'AGRODEFESA',
    nome_completo: '3261 - AGÊNCIA GOIANA DE DEFESA AGROPECUÁRIA',
  },
  {
    sigla: 'ALEGO',
    nome_completo: '100 - ASSEMBLEIA LEGISLATIVA DO ESTADO DE GOIÁS',
  },
  { sigla: 'CBM', nome_completo: '2903 - CORPO DE BOMBEIROS MILITAR' },
  {
    sigla: 'CEASA',
    nome_completo: '3290 - CENTRAIS DE ABASTECIMENTO DE GOIÁS S/A',
  },
  { sigla: 'CELGPAR', nome_completo: '4092 - COMPANHIA CELG DE PARTICIPAÇÃO' },
  { sigla: 'CGE', nome_completo: '1500 - CONTROLADORIA-GERAL DO ESTADO' },
  {
    sigla: 'CODEGO',
    nome_completo: '3391 - COMPANHIA DE DESENVOLVIMENTO ECONÔMICO DE GOIÁS',
  },
  {
    sigla: 'DETRAN',
    nome_completo: '2961 - DEPARTAMENTO ESTADUAL DE TRÂNSITO',
  },
  {
    sigla: 'DGAP',
    nome_completo: '2906 - DIRETORIA GERAL DE ADMINISTRAÇÃO PENITENCIÁRIA',
  },
  {
    sigla: 'DPE',
    nome_completo: '800 - DEFENSORIA PÚBLICA DO ESTADO DE GOIÁS',
  },
  {
    sigla: 'ECONOMIA',
    nome_completo: '1700 - SECRETARIA DE ESTADO DA ECONOMIA',
  },
  {
    sigla: 'EMATER',
    nome_completo:
      '3262 - AGÊNCIA GOIANA DE ASSISTÊNCIA TÉCNICA, EXTENSÃO RURAL E PESQUISA AGROPECUÁRIA',
  },
  {
    sigla: 'FAPEG',
    nome_completo: '3161 - FUNDAÇÃO DE AMPARO À PESQUISA DO ESTADO DE GOIÁS',
  },
  {
    sigla: 'FIRMINÓPOLIS',
    nome_completo: '4096 - FIRMINOPOLIS TRANSMISSAO S.A.',
  },
  {
    sigla: 'GOIASFOMENTO',
    nome_completo: '3390 - AGÊNCIA DE FOMENTO DE GOIÁS S/A',
  },
  {
    sigla: 'GOIASGÁS',
    nome_completo: '4090 - AGÊNCIA GOIANA DE GÁS CANALIZADO S/A',
  },
  {
    sigla: 'GOIASPARCERIAS',
    nome_completo:
      '3392 - COMPANHIA DE INVESTIMENTO E PARCERIAS DO ESTADO DE GOIÁS',
  },
  { sigla: 'GOIASPREV', nome_completo: '1762 - GOIÁS PREVIDÊNCIA' },
  { sigla: 'GOIASTELECOM', nome_completo: 'GOIÁS TELECOMUNICAÇÕES S/A' },
  {
    sigla: 'GOIÁSTURISMO',
    nome_completo: '4261 - GOIÁS TURISMO - AGÊNCIA ESTADUAL DE TURISMO',
  },
  {
    sigla: 'GOINFRA',
    nome_completo: '4361 - AGÊNCIA GOIANA DE INFRAESTRUTURA E TRANSPORTES',
  },
  {
    sigla: 'IQUEGO',
    nome_completo: '3190 - INDUSTRIA QUIMICA DO ESTADO DE GOIAS S.A.',
  },
  {
    sigla: 'JUCEG',
    nome_completo: '3362 - JUNTA COMERCIAL DO ESTADO DE GOIÁS',
  },
  { sigla: 'LAGO AZUL', nome_completo: '4095 - LAGO AZUL TRANSMISSAO S.A.' },
  {
    sigla: 'METROBUS',
    nome_completo: '4093 - METROBUS TRANSPORTE COLETIVO S/A',
  },
  { sigla: 'MPGO', nome_completo: '700 - MINISTÉRIO PÚBLICO' },
  { sigla: 'PC', nome_completo: '2904 - POLÍCIA CIVIL' },
  { sigla: 'PGE', nome_completo: '1400 - PROCURADORIA-GERAL DO ESTADO' },
  { sigla: 'PM', nome_completo: '2902 - POLÍCIA MILITAR' },
  {
    sigla: 'RETOMADA',
    nome_completo: '4200 - SECRETARIA DE ESTADO DA RETOMADA',
  },
  { sigla: 'SANEAGO', nome_completo: '2192 - SANEAMENTO DE GOIÁS S/A' },
  {
    sigla: 'SEAD',
    nome_completo: '1800 - SECRETARIA DE ESTADO DA ADMINISTRAÇÃO',
  },
  {
    sigla: 'SEAPA',
    nome_completo:
      '3200 - SECRETARIA DE ESTADO DE AGRICULTURA, PECUÁRIA E ABASTECIMENTO',
  },
  {
    sigla: 'SECOM',
    nome_completo: '1200 - SECRETARIA DE ESTADO DE COMUNICAÇÃO',
  },
  {
    sigla: 'SECTI',
    nome_completo:
      '3100 - SECRETARIA DE ESTADO DE CIÊNCIA, TECNOLOGIA E INOVAÇÃO',
  },
  { sigla: 'SECULT', nome_completo: '2500 - SECRETARIA DE ESTADO DE CULTURA' },
  {
    sigla: 'SEDF',
    nome_completo: '4400 - SECRETARIA DE ESTADO DO ENTORNO DO DISTRITO FEDERAL',
  },
  {
    sigla: 'SEDS',
    nome_completo: '3000 - SECRETARIA DE ESTADO DE DESENVOLVIMENTO SOCIAL',
  },
  { sigla: 'SEDUC', nome_completo: '2400 - SECRETARIA DE ESTADO DA EDUCAÇÃO' },
  {
    sigla: 'SEEL',
    nome_completo: '2600 - SECRETARIA DE ESTADO DE ESPORTE E LAZER',
  },
  {
    sigla: 'SEINFRA',
    nome_completo: '4300 - SECRETARIA DE ESTADO DA INFRAESTRUTURA',
  },
  {
    sigla: 'SEMAD',
    nome_completo:
      '2100 - SECRETARIA DE ESTADO DE MEIO AMBIENTE E DESENVOLVIMENTO SUSTENTÁVEL',
  },
  {
    sigla: 'SERINT',
    nome_completo: '1900 - SECRETARIA DE ESTADO DE RELAÇÕES INSTITUCIONAIS',
  },
  { sigla: 'SES', nome_completo: '2800 - SECRETARIA DA SAÚDE' },
  { sigla: 'SGG', nome_completo: '4000 - SECRETARIA-GERAL DE GOVERNO' },
  {
    sigla: 'SIC',
    nome_completo:
      '3300 - SECRETARIA DE ESTADO DE INDÚSTRIA, COMÉRCIO E SERVIÇOS',
  },
  {
    sigla: 'SSP',
    nome_completo: '2900 - SECRETARIA DE ESTADO DE SEGURANÇA PÚBLICA',
  },
  {
    sigla: 'TCE',
    nome_completo: '200 - TRIBUNAL DE CONTAS DO ESTADO DE GOIÁS',
  },
  { sigla: 'TCM', nome_completo: '300 - TRIBUNAL DE CONTAS DOS MUNICÍPIOS' },
  {
    sigla: 'TJGO',
    nome_completo: '400 - TRIBUNAL DE JUSTIÇA DO ESTADO DE GOIÁS',
  },
  { sigla: 'UEG', nome_completo: '4062 - UNIVERSIDADE ESTADUAL DE GOIÁS' },
  { sigla: 'VICE GOVERNADORIA', nome_completo: '1300 - VICE-GOVERNADORIA' },
];
const selectSiglaorgao = document.getElementById('select-sigla-orgao');

lista_orgao.forEach((orgao) => {
  const option = document.createElement('option');
  option.value = orgao.sigla;
  option.text = orgao.sigla;
  selectSiglaorgao.appendChild(option);
});

selectSiglaorgao.addEventListener('change', () => {
  const orgao = lista_orgao.find(
    (orgao) => orgao.sigla === selectSiglaorgao.value
  );
  document.getElementById('input-orgao-selecionado').value =
    orgao.nome_completo;
});

// Lista de opções
const lista_origem_recursos = [
  'Anulação de Dotação',
  'Convênios, Ajustes e Acordos',
  'Excesso de Arrecadação',
  'Reserva de Contingência Tesouro',
  'Produto de Operação de Crédito Externo',
  'Produto de Operação de Crédito Interno',
  'Sem Indicação de Recursos',
  'Superávit Financeiro Diretamente Arrecadado',
  'Excesso de Arrecadação - Tendência',
  'Convênios, Ajustes e Acordos por Excesso de Arrecadação',
  'Produto de Operação de Crédito Externo por Excesso de Arrecadação',
  'Produto de Operação de Crédito Interno por Excesso de Arrecadação',
  'Cancelamento de Restos a Pagar oriundos da Lei Aldir Blanc',
  'Superávit de Cancelamento de Restos a Pagar',
  'Superávit Protege',
  'Excesso de Arrecadação Tendência',
];
const selectOrigemRecurso = document.getElementById('select-origem-recurso');
lista_origem_recursos.forEach((recurso) => {
  const option = document.createElement('option');
  option.value = recurso;
  option.text = recurso;
  selectOrigemRecurso.appendChild(option);
});

// MOTIVO
const lista_motivos = [
  'Alteração de Eixo',
  'Alteração de Iniciativa',
  'Alteração de Objetivo Estratégico',
  'Alteração de Programa',
  'Criação de Eixo',
  'Criação de Grupo de Natureza de Despesa em Ação Orçamentária existente',
  'Criação de Iniciativa',
  'Criação de nova Ação Orçamentária em Produto existente',
  'Criação de Objetivo Estratégico',
  'Criação de Produto e criação de nova Ação Orçamentária',
  'Criação de Programa',
  'Exclusão de Eixo',
  'Exclusão de Iniciativa',
  'Exclusão de Objetivo Estratégico',
  'Exclusão de Produto e Redução do saldo da Ação Orçamentária',
  'Exclusão de Programa',
];
const selectMotivo = document.getElementById('select-motivo');
const tabela1 = document.getElementById('tabela-1');
const tabela2 = document.getElementById('tabela-2');
const tabela3 = document.getElementById('tabela-3');
const tabela5 = document.getElementById('tabela-5');
const tabelaConfPPA = document.getElementById('tabela-config-ppa');
const tabelaConfLOA = document.getElementById('tabela-config-loa');

tabela1.setAttribute('hidden', 'true'); // class
tabela2.setAttribute('hidden', 'true'); // PROPOSIÇÃO DE CRIAÇÃO
tabela3.setAttribute('hidden', 'true'); //metricas
tabelaConfPPA.setAttribute('hidden', 'true'); // PPA
tabelaConfLOA.setAttribute('hidden', 'true'); // LOA
tabela5.setAttribute('hidden', 'true'); //efeitos

selectOrigemRecurso.addEventListener('change', function () {
  const selectedOption = this.options[this.selectedIndex].text;
  if (selectedOption.includes('Anulação')) {
    tabela1.removeAttribute('hidden');
    tabela5.removeAttribute('hidden');
  }
  return;
});

selectMotivo.addEventListener('change', function () {
  const selectedOption = this.options[this.selectedIndex].text;

  if (selectedOption.includes('Criação')) {
    tabela2.removeAttribute('hidden'); // PROPOSIÇÃO DE CRIAÇÃO
    tabela3.removeAttribute('hidden'); //metricas
    tabela5.removeAttribute('hidden'); //efeitos
  } else {
    tabelaConfPPA.removeAttribute('hidden');
    tabelaConfLOA.removeAttribute('hidden');
  }
});

lista_motivos.forEach((motivo) => {
  const option = document.createElement('option');
  option.value = motivo;
  option.text = motivo;
  selectMotivo.appendChild(option);
});
// Fonte
const lista_fonte = [
  {
    numero: 15000100,
    nome: 'RECURSOS NÃO VINCULADOS DE IMPOSTOS - RECEITAS ORDINÁRIAS',
  },
  {
    numero: 15010001,
    nome: 'OUTROS RECURSOS NÃO VINCULADOS - DIVIDENDOS E JUROS SOBRE CAPITAL PRÓPRIO CELGPAR',
  },
  {
    numero: 15010100,
    nome: 'OUTROS RECURSOS NÃO VINCULADOS - RECEITAS ORDINÁRIAS E DRE',
  },
  {
    numero: 15010123,
    nome: 'OUTROS RECURSOS NÃO VINCULADOS - TRANSFERÊNCIA DE INSTITUIÇÕES PRIVADAS PARA ASSISTÊNCIA FINANCEIRA AO TRANSPORTE COLETIVO, EC Nº 123/2022',
  },
  {
    numero: 15010129,
    nome: 'OUTROS RECURSOS NÃO VINCULADOS - CONCESSÕES, PERMISSÕES E DELEGAÇÕES',
  },
  { numero: 15010136, nome: 'OUTROS RECURSOS NÃO VINCULADOS - AMORTIZAÇÕES' },
  {
    numero: 15010220,
    nome: 'OUTROS RECURSOS NÃO VINCULADOS - DIRETAMENTE ARRECADADOS PRÓPRIOS',
  },
  {
    numero: 15020001,
    nome: 'RECURSOS NÃO VINCULADOS DA COMPENSAÇÃO DE IMPOSTOS',
  },
  {
    numero: 15400108,
    nome: 'TRANSFERÊNCIAS DO FUNDEB - IMPOSTOS E TRANSFERÊNCIAS DE IMPOSTOS',
  },
  {
    numero: 15430000,
    nome: 'TRANSFERÊNCIAS DO FUNDEB - COMPLEMENTAÇÃO DA UNIÃO - VAAR',
  },
  {
    numero: 15430108,
    nome: 'TRANSFERÊNCIAS DO FUNDEB - COMPLEMENTAÇÃO DA UNIÃO - VAAR',
  },
  { numero: 15440000, nome: 'RECURSOS DE PRECATÓRIOS DO FUNDEF' },
  {
    numero: 15500116,
    nome: 'TRANSFERÊNCIA DO SALÁRIO-EDUCAÇÃO - COTA ESTADUAL',
  },
  {
    numero: 15510000,
    nome: 'TRANSFERÊNCIAS DE RECURSOS DO FNDE REFERENTES AO PROGRAMA DINHEIRO DIRETO NA ESCOLA (PDDE)',
  },
  {
    numero: 15520109,
    nome: 'TRANSFERÊNCIAS DE RECURSOS DO FNDE REFERENTES AO PROGRAMA NACIONAL DE ALIMENTAÇÃO ESCOLAR (PNAE)',
  },
  { numero: 15690115, nome: 'OUTRAS TRANSFERÊNCIAS DE RECURSOS DO FNDE' },
  {
    numero: 15700260,
    nome: 'TRANSFERÊNCIAS DO GOVERNO FEDERAL REFERENTES A CONVÊNIOS E INSTRUMENTOS CONGÊNERES VINCULADOS À EDUCAÇÃO',
  },
  {
    numero: 15720261,
    nome: 'TRANSFERÊNCIAS DE MUNICÍPIOS REFERENTES A CONVÊNIOS E INSTRUMENTOS CONGÊNERES VINCULADOS À EDUCAÇÃO',
  },
  { numero: 15740000, nome: 'OPERAÇÕES DE CRÉDITO VINCULADAS À EDUCAÇÃO' },
  {
    numero: 15750262,
    nome: 'OUTRAS TRANSFERÊNCIAS DE CONVÊNIOS E INSTRUMENTOS CONGÊNERES VINCULADOS À EDUCAÇÃO',
  },
  { numero: 15990000, nome: 'OUTROS RECURSOS VINCULADOS À EDUCAÇÃO' },
  {
    numero: 15990158,
    nome: 'OUTROS RECURSOS VINCULADOS À EDUCAÇÃO - EDUCAÇÃO INFANTIL',
  },
  {
    numero: 16000001,
    nome: 'TRANSFERÊNCIAS FUNDO A FUNDO DE RECURSOS DO SUS PROVENIENTES DO GOVERNO FEDERAL - BLOCO DE MANUTENÇÃO ASPS - EC RP2 - EMENDA PROGRAMAÇÃO',
  },
  {
    numero: 16000002,
    nome: 'TRANSFERÊNCIAS FUNDO A FUNDO DE RECURSOS DO SUS PROVENIENTES DO GOVERNO FEDERAL - BLOCO DE MANUTENÇÃO ASPS - EC RP6 - EMENDA INDIVIDUAL',
  },
  {
    numero: 16000003,
    nome: 'TRANSFERÊNCIAS FUNDO A FUNDO DE RECURSOS DO SUS PROVENIENTES DO GOVERNO FEDERAL - BLOCO DE MANUTENÇÃO ASPS - EC RP7 - EMENDA DE BANCADA',
  },
  {
    numero: 16000004,
    nome: 'TRANSFERÊNCIAS FUNDO A FUNDO DE RECURSOS DO SUS PROVENIENTES DO GOVERNO FEDERAL - BLOCO DE MANUTENÇÃO ASPS - EC RP8 - EMENDA DE COMISSÃO',
  },
  {
    numero: 16000232,
    nome: 'TRANSFERÊNCIAS FUNDO A FUNDO DE RECURSOS DO SUS PROVENIENTES DO GOVERNO FEDERAL - BLOCO DE MANUTENÇÃO DAS AÇÕES E SERVIÇOS PÚBLICOS DE SAÚDE',
  },
  {
    numero: 16010233,
    nome: 'TRANSFERÊNCIAS FUNDO A FUNDO DE RECURSOS DO SUS PROVENIENTES DO GOVERNO FEDERAL - BLOCO DE ESTRUTURAÇÃO DA REDE DE SERVIÇOS PÚBLICOS DE SAÚDE',
  },
  {
    numero: 16020238,
    nome: 'TRANSFERÊNCIAS FUNDO A FUNDO DO SUS - BL. DE MAN. DAS ASPS - RECURSOS DESTINADOS AO ENFRENTAMENTO DA COVID-19 NO BOJO DA AÇÃO 21C0',
  },
  {
    numero: 16030239,
    nome: 'TRANSFERÊNCIAS FUNDO A FUNDO DO SUS - BL. DE ESTR. DA REDE DE SERV. PÚB. DE SAÚDE - REC. DEST. AO ENFRENTAMENTO DA COVID-19 NO BOJO DA AÇÃO 21C0',
  },
  {
    numero: 16040000,
    nome: 'TRANSFERÊNCIAS PROVENIENTES DO GOVERNO FEDERAL DESTINADAS AO VENCIMENTO DOS AGENTES COMUNITÁRIOS DE SAÚDE E DOS AGENTES DE COMBATE ÀS ENDEMIAS',
  },
  {
    numero: 16050001,
    nome: 'ASSISTÊNCIA FINANCEIRA DA UNIÃO DESTINADA À COMPLEMENTAÇÃO AO PAGAMENTO DOS PISOS SALARIAIS PARA PROFISSIONAIS DA ENFERMAGEM',
  },
  {
    numero: 16310270,
    nome: 'TRANSFERÊNCIAS DO GOVERNO FEDERAL REFERENTES A CONVÊNIOS E INSTRUMENTOS CONGÊNERES VINCULADOS À SAÚDE',
  },
  {
    numero: 16317872,
    nome: 'TRANSFERÊNCIAS DO GOVERNO FEDERAL REFERENTES A CONVÊNIOS E INSTRUMENTOS CONGÊNERES VINCULADOS À SAÚDE - CONVÊNIO Nº 787297/2013, MS/IQUEGO',
  },
  { numero: 16340000, nome: 'OPERAÇÕES DE CRÉDITO VINCULADAS À SAÚDE' },
  {
    numero: 16360272,
    nome: 'OUTRAS TRANSFERÊNCIAS DE CONVÊNIOS E INSTRUMENTOS CONGÊNERES VINCULADOS À SAÚDE',
  },
  {
    numero: 16600234,
    nome: 'TRANSFERÊNCIA DE RECURSOS DO FUNDO NACIONAL DE ASSISTÊNCIA SOCIAL - FNAS - CORRENTES',
  },
  {
    numero: 16600235,
    nome: 'TRANSFERÊNCIA DE RECURSOS DO FUNDO NACIONAL DE ASSISTÊNCIA SOCIAL - FNAS - CAPITAL',
  },
  {
    numero: 16650274,
    nome: 'TRANSFERÊNCIAS DE CONVÊNIOS E INSTRUMENTOS CONGÊNERES VINCULADOS À ASSISTÊNCIA SOCIAL - COM ÓRGÃOS FEDERAIS',
  },
  {
    numero: 16650276,
    nome: 'TRANSFERÊNCIAS DE CONVÊNIOS E INSTRUMENTOS CONGÊNERES VINCULADOS À ASSISTÊNCIA SOCIAL - OUTRAS ENTIDADES',
  },
  {
    numero: 17000280,
    nome: 'OUTRAS TRANSFERÊNCIAS DE CONVÊNIOS OU INSTRUMENTOS CONGÊNERES DA UNIÃO - ADMINISTRAÇÃO DIRETA',
  },
  {
    numero: 17000290,
    nome: 'OUTRAS TRANSFERÊNCIAS DE CONVÊNIOS OU INSTRUMENTOS CONGÊNERES DA UNIÃO - ADMINISTRAÇÃO INDIRETA',
  },
  {
    numero: 17020291,
    nome: 'OUTRAS TRANSFERÊNCIAS DE CONVÊNIOS OU INSTRUMENTOS CONGÊNERES DOS MUNICÍPIOS - ADMINSITRAÇÃO INDIRETA',
  },
  {
    numero: 17030282,
    nome: 'OUTRAS TRANSFERÊNCIAS DE CONVÊNIOS OU INSTRUMENTOS CONGÊNERES DE OUTRAS ENTIDADES - ADMINISTRAÇÃO DIRETA',
  },
  {
    numero: 17030284,
    nome: 'OUTRAS TRANSFERÊNCIAS DE CONVÊNIOS OU INSTRUMENTOS CONGÊNERES DE OUTRAS ENTIDADES - ADMINISTRAÇÃO DIRETA COM ENTES EXTERNOS',
  },
  {
    numero: 17040283,
    nome: 'OUTRAS TRANSFERÊNCIAS DE CONVÊNIOS OU INSTRUMENTOS CONGÊNERES DE OUTRAS ENTIDADES - ADMINISTRAÇÃO INDIRETA',
  },
  {
    numero: 17040285,
    nome: 'OUTRAS TRANSFERÊNCIAS DE CONVÊNIOS OU INSTRUMENTOS CONGÊNERES DE OUTRAS ENTIDADES - ADMINISTRAÇÃO INDIRETA COM ENTES EXTERNOS',
  },
  {
    numero: 17060289,
    nome: 'TRANSFERÊNCIAS DE CONVÊNIOS E INSTRUMENTOS CONGÊNERES VINCULADOS AO SANEAMENTO',
  },
  {
    numero: 17290287,
    nome: 'OUTRAS TRANSFERÊNCIAS DE CONVÊNIOS E INSTRUMENTOS CONGÊNERES VINCULADOS À ADMINISTRAÇÃO GERAL',
  },
  {
    numero: 17290288,
    nome: 'OUTRAS TRANSFERÊNCIAS DE CONVÊNIOS E INSTRUMENTOS CONGÊNERES VINCULADOS À CULTURA',
  },
  {
    numero: 17400306,
    nome: 'OUTRAS TRANSFERÊNCIAS DE CONVÊNIOS E INSTRUMENTOS CONGÊNERES DA UNIÃO - ADMINISTRAÇÃO INDIRETA - GERAIS',
  },
  {
    numero: 17430310,
    nome: 'OUTRAS TRANSFERÊNCIAS DE CONVÊNIOS E INSTRUMENTOS CONGÊNERES DOS MUNICÍPIOS - ADMINISTRAÇÃO DIRETA',
  },
  {
    numero: 17600298,
    nome: 'TRANSFERÊNCIAS DE CONVÊNIOS E INSTRUMENTOS CONGÊNERes VINCULADOS A TRANSPORTE',
  },
  {
    numero: 17990000,
    nome: 'OUTRAS TRANSFERÊNCIAS DE CONVÊNIOS E INSTRUMENTOS CONGÊNERES',
  },
  {
    numero: 18000112,
    nome: 'TRANSFERÊNCIAS ESPECIAIS DA UNIÃO RECEBIDAS MEDIANTE EMENDAS INDIVIDUAIS',
  },
  {
    numero: 18000210,
    nome: 'TRANSFERÊNCIAS ESPECIAIS DA UNIÃO RECEBIDAS MEDIANTE EMENDAS DE BANCADA',
  },
  {
    numero: 18000212,
    nome: 'TRANSFERÊNCIAS ESPECIAIS DA UNIÃO RECEBIDAS MEDIANTE EMENDAS DE COMISSÃO',
  },
  {
    numero: 18100100,
    nome: 'TRANSFERÊNCIAS COMUNS DA UNIÃO RECEBIDAS MEDIANTE EMENDAS INDIVIDUAIS - EXCETO SAÚDE',
  },
  {
    numero: 18100213,
    nome: 'TRANSFERÊNCIAS COMUNS DA UNIÃO RECEBIDAS MEDIANTE EMENDAS DE BANCADA - EXCETO SAÚDE',
  },
  {
    numero: 18100215,
    nome: 'TRANSFERÊNCIAS COMUNS DA UNIÃO RECEBIDAS MEDIANTE EMENDAS DE COMISSÃO - EXCETO SAÚDE',
  },
  {
    numero: 18110212,
    nome: 'TRANSFERÊNCIAS COMUNS DA UNIÃO RECEBIDAS MEDIANTE EMENDAS DE COMISSÃO - GERAIS',
  },
  {
    numero: 18200102,
    nome: 'TRANSFERÊNCIAS COMUNS DA UNIÃO RECEBIDAS MEDIANTE EMENDAS INDIVIDUAIS - SAÚDE',
  },
  {
    numero: 18200214,
    nome: 'TRANSFERÊNCIAS COMUNS DA UNIÃO RECEBIDAS MEDIANTE EMENDAS DE BANCADA - SAÚDE',
  },
  {
    numero: 18200216,
    nome: 'TRANSFERÊNCIAS COMUNS DA UNIÃO RECEBIDAS MEDIANTE EMENDAS DE COMISSÃO - SAÚDE',
  },
  {
    numero: 19000000,
    nome: 'RECURSOS VINCULADOS - ORÇAMENTO ESTADUAL DE CONTINGÊNCIA',
  },
];

const selectFonte = document.getElementById('select-fonte');
const inputFonte = document.getElementById('input-fonte-selecionada');

lista_fonte.forEach((fonte) => {
  const option = document.createElement('option');
  option.value = fonte.numero;
  option.text = fonte.numero;
  selectFonte.appendChild(option);
});

selectFonte.addEventListener('change', () => {
  const fonte = lista_fonte.find((fonte) => fonte.numero == selectFonte.value); // Comparação flexível usando == já que value é string
  if (fonte) {
    // Verifica se a fonte foi encontrada
    inputFonte.value = fonte.nome;
  } else {
    inputFonte.value = ''; // Limpa o campo se nenhuma fonte for encontrada
  }
});

// **********************************************************************
// Tabela 1
const tbodyTable1 = document.getElementById('tbody-tb1');
const btnAddRowTable1 = document.getElementById('btn-add-row-tb1');
let countRowTable1 = 1;

function addRemoveButtonListenerTb1(button) {
  button.addEventListener('click', function () {
    const row = this.closest('tr');
    row.remove();
  });
}

btnAddRowTable1.addEventListener('click', () => {
  const newRow = tbodyTable1.insertRow();
  newRow.innerHTML = `
    <td>
      <input
        type="text"
        class="form-control"
        name="classificacao-orcamentaria"
        id="input-classificacao-orcamentaria-${countRowTable1}"
        placeholder="Digite a classificação orçamentária"
      />
    </td>
    <td>
      <input
        type="text"
        class="form-control"
        name="valor-anulado"
        id="input-valor-anulado-${countRowTable1}"
        placeholder="Digite o valor a ser anulado"
      />
    </td>
    <td>
      <button
        type="button"
        class="btn btn-danger"
        id="btn-remove-row-tb1-${countRowTable1}"
      >
        <i class="fa-solid fa-trash"></i>
      </button>
    </td>`;

  // Adiciona o listener ao botão de remover da nova linha
  const newRemoveButton = newRow.querySelector(
    `#btn-remove-row-tb1-${countRowTable1}`
  );
  addRemoveButtonListenerTb1(newRemoveButton);

  countRowTable1++;
});
// chamar a primeira linha da tabela
btnAddRowTable1.click();

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Tabela 2
// Tabela 2
/*
const tbodyTable2 = document.getElementById('tbody-tb2');
const btnAddRowTable2 = document.getElementById('btn-add-row-tb2');
let countRowTable2 = 1;

function addRemoveButtonListenerTb2(button) {
  button.addEventListener('click', function () {
    const row = this.closest('tr');
    row.remove();
  });
}

btnAddRowTable2.addEventListener('click', () => {
  const newRow = tbodyTable2.insertRow();
  newRow.innerHTML = `
    <td><input type="text" class="form-control" name="iniciativa" id="iniciativa-${countRowTable2}" /></td>
    <td><input type="text" class="form-control" name="tipo" id="tipo-${countRowTable2}"  /></td>
    <td><input type="text" class="form-control" name="nome-produto" id="nome-produto-${countRowTable2}"  /></td>
    <td><input type="text" class="form-control" name="tipo-produto" id="tipo-produto-${countRowTable2}"  /></td>
    <td><input type="text" class="form-control" name="unidade-medida" id="unidade-medida-${countRowTable2}"  /></td>
    <td><input type="text" class="form-control" name="descricao-produto" id="descricao-produto-${countRowTable2}" /></td>
    <td><input type="text" class="form-control" name="responsavel-produto" id="responsavel-produto-${countRowTable2}"  /></td>
    <td><input type="text" class="form-control" name="metodo-comprovacao" id="metodo-comprovacao-${countRowTable2}"  /></td>
    <td><input type="text" class="form-control" name="substituto-responsavel" id="substituto-responsavel-${countRowTable2}"  /></td>
    <td><input type="text" class="form-control" name="compromissos-plano-governo" id="compromissos-plano-governo-${countRowTable2}"  /></td>
    <td><input type="text" class="form-control" name="nivel-monitoramento" id="nivel-monitoramento-${countRowTable2}"  /></td>
    <td><input type="text" class="form-control" name="acumula" id="acumula-${countRowTable2}"  /></td>
    <td><input type="text" class="form-control" name="meta-gepi1" id="meta-gepi1-${countRowTable2}"  /></td>
    <td><input type="text" class="form-control" name="meta-gepi2" id="meta-gepi2-${countRowTable2}"  /></td>
    <td><input type="text" class="form-control" name="metas-desenvolvimento-sustentavel" id="meta-dev-sustentavel-${countRowTable2}"  /></td>
    <td>
      <button
        type="button"
        class="btn btn-danger"
        id="btn-remove-row-tb2-${countRowTable1}"
      >
        <i class="fa-solid fa-trash"></i>
      </button>
    </td>
    `;
  const newRemoveButton = newRow.querySelector(
    `#btn-remove-row-tb2-${countRowTable1}`
  );
  addRemoveButtonListenerTb2(newRemoveButton);

  countRowTable2++;
});

btnAddRowTable2.click();
*/
// Tabela 3
// Tabela 3
const tbodyTable3 = document.getElementById('tbody-tb3');
const btnAddRowTable3 = document.getElementById('btn-add-row-tb3');
let countRowTable3 = 1;

function addRemoveButtonListenerTb3(button) {
  button.addEventListener('click', function () {
    const row = this.closest('tr');
    row.remove();
  });
}

btnAddRowTable3.addEventListener('click', () => {
  const newRow = tbodyTable3.insertRow();
  newRow.innerHTML = `
    <td><input type="text" class="form-control" name="localidade" id="localidade-${countRowTable3}" /></td>
    <td><input type="text" class="form-control" name="fisico-2024" id="fisico-2024-${countRowTable3}" /></td>
    <td><input type="text" class="form-control" name="fisico-2025" id="fisico-2025-${countRowTable3}" /></td>
    <td><input type="text" class="form-control" name="fisico-2026" id="fisico-2026-${countRowTable3}" /></td>
    <td><input type="text" class="form-control" name="fisico-2027" id="fisico-2027-${countRowTable3}" /></td>
    <td><input type="text" class="form-control" name="financeiro-2024" id="financeiro-2024-${countRowTable3}" /></td>
    <td><input type="text" class="form-control" name="financeiro-2025" id="financeiro-2025-${countRowTable3}" /></td>
    <td><input type="text" class="form-control" name="financeiro-2026" id="financeiro-2026-${countRowTable3}" /></td>
    <td><input type="text" class="form-control" name="financeiro-2027" id="financeiro-2027-${countRowTable3}" /></td>
    <td><input type="text" class="form-control" name="total-financeiro" id="total-financeiro-${countRowTable3}" /></td>
    <td>
      <button type="button" class="btn btn-danger" id="btn-remove-row-tb3-${countRowTable3}">
        <i class="fa-solid fa-trash"></i>
      </button>
    </td>`;

  // Adiciona o listener ao botão de remover da nova linha
  const newRemoveButton = newRow.querySelector(
    `#btn-remove-row-tb3-${countRowTable3}`
  );
  addRemoveButtonListenerTb3(newRemoveButton);

  countRowTable3++;
});

function updateTotals() {
  let totalFisico24 = 0,
    totalFisico25 = 0,
    totalFisico26 = 0,
    totalFisico27 = 0;
  let totalFinanceiro24 = 0,
    totalFinanceiro25 = 0,
    totalFinanceiro26 = 0,
    totalFinanceiro27 = 0,
    totalFinanceiro = 0;

  tbodyTable3.querySelectorAll('tr').forEach((row) => {
    totalFisico24 +=
      parseFloat(row.querySelector('input[name="fisico-2024"]').value) || 0;
    totalFisico25 +=
      parseFloat(row.querySelector('input[name="fisico-2025"]').value) || 0;
    totalFisico26 +=
      parseFloat(row.querySelector('input[name="fisico-2026"]').value) || 0;
    totalFisico27 +=
      parseFloat(row.querySelector('input[name="fisico-2027"]').value) || 0;
    totalFinanceiro24 +=
      parseFloat(row.querySelector('input[name="financeiro-2024"]').value) || 0;
    totalFinanceiro25 +=
      parseFloat(row.querySelector('input[name="financeiro-2025"]').value) || 0;
    totalFinanceiro26 +=
      parseFloat(row.querySelector('input[name="financeiro-2026"]').value) || 0;
    totalFinanceiro27 +=
      parseFloat(row.querySelector('input[name="financeiro-2027"]').value) || 0;
    totalFinanceiro +=
      parseFloat(row.querySelector('input[name="total-financeiro"]').value) ||
      0;
  });

  document.getElementById('total-fisico-24').textContent = totalFisico24;
  document.getElementById('total-fisico-25').textContent = totalFisico25;
  document.getElementById('total-fisico-26').textContent = totalFisico26;
  document.getElementById('total-fisico-27').textContent = totalFisico27;
  document.getElementById(
    'total-financeiro-24'
  ).textContent = `R$ ${totalFinanceiro24}`;
  document.getElementById(
    'total-financeiro-25'
  ).textContent = `R$ ${totalFinanceiro25}`;
  document.getElementById(
    'total-financeiro-26'
  ).textContent = `R$ ${totalFinanceiro26}`;
  document.getElementById(
    'total-financeiro-27'
  ).textContent = `R$ ${totalFinanceiro27}`;
  document.getElementById(
    'total-financeiro'
  ).textContent = `R$ ${totalFinanceiro}`;
}

tbodyTable3.addEventListener('input', updateTotals);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Tabela de configs LOA

const btnAddTbConfigLoa = document.getElementById('btn-add-tb-config-loa');
const tbLoaItem = document.getElementById('tb-loa-item');
let contTablesLoa = 1;

btnAddTbConfigLoa.addEventListener('click', function () {
  // Cria um novo elemento tb-loa-item
  const newTbLoaItem = document.createElement('div');
  newTbLoaItem.classList.add(`tb-loa-item-${contTablesLoa}`);
  newTbLoaItem.classList.add('mt-5');
  newTbLoaItem.innerHTML = `
    <div class="row">
      <div class="col-6 De d-flex justify-content-between">
        <div class="col-8">
          <label for="inputAcaoAtual" class="form-label fw-bold">AÇÃO</label>
          <input type="text" class="form-control" id="input-acao-atual"/>
        </div>
        <div class="col-3">
          <label for="inputGndAtual" class="form-label fw-bold">GND</label>
          <input type="text" class="form-control" id="input-gnd-atual" />
        </div>
      </div>
      <div class="col-6 Para d-flex justify-content-between">
        <div class="col-8">
          <label for="inputAcaoPara" class="form-label fw-bold">AÇÃO</label>
          <input type="text" class="form-control" id="input-acao-para" />
        </div>
        <div class="col-3">
          <label for="inputGndPara" class="form-label fw-bold">GND</label>
          <input type="text" class="form-control" id="input-gnd-para" />
        </div>
      </div>
    </div>
    <div class="row mt-2">
      <div class="col-6 De d-flex justify-content-between">
        <div class="col-6">
          <label for="inputSaldoOrcaDe" class="form-label fw-bold">SALDO ORÇAMENTÁRIO ATUAL</label>
          <input type="text" class="form-control" id="input-saldo-orca-de" />
        </div>
        <div class="col-5">
          <label for="inputValorRemanejadoDe" class="form-label fw-bold">VALOR A SER REMANEJADO</label>
          <input type="text" class="form-control" id="input-valor-remanejado-de" />
        </div>
      </div>
      <div class="col-6 Para d-flex justify-content-between">
        <div class="col-6">
          <label for="inputSaldoOrcaPara" class="form-label fw-bold">SALDO ORÇAMENTÁRIO ATUAL</label>
          <input type="text" class="form-control" id="input-saldo-orca-para" />
        </div>
        <div class="col-5">
          <label for="inputValorRemanejadoPara" class="form-label fw-bold">VALOR A SER REMANEJADO</label>
          <input type="text" class="form-control" id="input-valor-remanejado-para" />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <label for="inputClassOrcamentariaDe" class="form-label fw-bold">CLASSIFICAÇÃO ORÇAMENTÁRIA</label>
        <input type="text" class="form-control" id="input-class-orcamentaria-de" />
      </div>
      <div class="col-6">
        <label for="inputClassOrcamentariaPara" class="form-label fw-bold">CLASSIFICAÇÃO ORÇAMENTÁRIA</label>
        <input type="text" class="form-control" id="input-class-orcamentaria-para" />
      </div>
    </div>
  `;

  // Adiciona o novo tb-loa-item ao container
  tbLoaItem.appendChild(newTbLoaItem);
});

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// TABELA 5

// Função para adicionar uma nova linha à tabela
function addRow() {
  // Seleciona o tbody da tabela
  const tbody = document.getElementById('tbody-tb5');

  // Cria uma nova linha (tr)
  const newRow = document.createElement('tr');

  // Conteúdo da nova linha
  newRow.innerHTML = `
    <td><input type="text" class="form-control" /></td>
    <td><input type="text" class="form-control" /></td>
    <td><input type="text" class="form-control" /></td>
    <td><input type="text" class="form-control" /></td>
    <td><input type="text" class="form-control" /></td>
    <td><input type="text" class="form-control" /></td>
    <td><input type="text" class="form-control" /></td>
    <td><input type="text" class="form-control" /></td>
    <td><input type="text" class="form-control" /></td>
    <td>
        <button
        type="button"
        class="btn btn-danger"
        onclick="removeRow(this)"
        >
        <i class="fa-solid fa-trash"></i>
      </button>
    </td>
  `;

  // Adiciona a nova linha ao tbody
  tbody.appendChild(newRow);
}

// Função para remover uma linha da tabela
function removeRow(button) {
  // Obtém a referência à linha (tr) que contém o botão
  const row = button.parentNode.parentNode;

  // Remove a linha da tabela
  row.parentNode.removeChild(row);
}

// Event listener para o botão de adicionar
document.getElementById('btn-add-row-tb5').addEventListener('click', addRow);

addRow();
