const inputValorTotalSuplementacao = document.getElementById(
  "input-valor-total-suplementacao"
);
const inputValorTotalSuplementacaoExtenso = document.getElementById(
  "input-valor-total-suplementacao-extenso"
);

/*// problema no modulo
inputValorTotalSuplementacao.addEventListener('change', () => {
  numeroParaExtenso(1000);
  const valor = inputValorTotalSuplementacao.value;
  const valorPorExtenso = valorMonetarioParaExtenso(parseFloat(valor));
  alert(valorPorExtenso);
  inputValorTotalSuplementacaoExtenso.value = valor;
});
*/
//lista de orgaos
const lista_orgao = [
  { sigla: "ABC", nome_completo: "1261 - AGÊNCIA BRASIL CENTRAL" },
  { sigla: "AGEHAB", nome_completo: "4362 - AGÊNCIA GOIANA DE HABITAÇÃO S/A" },
  {
    sigla: "AGR",
    nome_completo:
      "1863 - AGÊNCIA GOIANA DE REGULAÇÃO, CONTROLE E FISCALIZAÇÃO DE SERVIÇOS PÚBLICOS",
  },
  {
    sigla: "AGRODEFESA",
    nome_completo: "3261 - AGÊNCIA GOIANA DE DEFESA AGROPECUÁRIA",
  },
  {
    sigla: "ALEGO",
    nome_completo: "100 - ASSEMBLEIA LEGISLATIVA DO ESTADO DE GOIÁS",
  },
  { sigla: "CBM", nome_completo: "2903 - CORPO DE BOMBEIROS MILITAR" },
  {
    sigla: "CEASA",
    nome_completo: "3290 - CENTRAIS DE ABASTECIMENTO DE GOIÁS S/A",
  },
  { sigla: "CELGPAR", nome_completo: "4092 - COMPANHIA CELG DE PARTICIPAÇÃO" },
  { sigla: "CGE", nome_completo: "1500 - CONTROLADORIA-GERAL DO ESTADO" },
  {
    sigla: "CODEGO",
    nome_completo: "3391 - COMPANHIA DE DESENVOLVIMENTO ECONÔMICO DE GOIÁS",
  },
  {
    sigla: "DETRAN",
    nome_completo: "2961 - DEPARTAMENTO ESTADUAL DE TRÂNSITO",
  },
  {
    sigla: "DGAP",
    nome_completo: "2906 - DIRETORIA GERAL DE ADMINISTRAÇÃO PENITENCIÁRIA",
  },
  {
    sigla: "DPE",
    nome_completo: "800 - DEFENSORIA PÚBLICA DO ESTADO DE GOIÁS",
  },
  {
    sigla: "ECONOMIA",
    nome_completo: "1700 - SECRETARIA DE ESTADO DA ECONOMIA",
  },
  {
    sigla: "EMATER",
    nome_completo:
      "3262 - AGÊNCIA GOIANA DE ASSISTÊNCIA TÉCNICA, EXTENSÃO RURAL E PESQUISA AGROPECUÁRIA",
  },
  {
    sigla: "FAPEG",
    nome_completo: "3161 - FUNDAÇÃO DE AMPARO À PESQUISA DO ESTADO DE GOIÁS",
  },
  {
    sigla: "FIRMINÓPOLIS",
    nome_completo: "4096 - FIRMINOPOLIS TRANSMISSAO S.A.",
  },
  {
    sigla: "GOIASFOMENTO",
    nome_completo: "3390 - AGÊNCIA DE FOMENTO DE GOIÁS S/A",
  },
  {
    sigla: "GOIASGÁS",
    nome_completo: "4090 - AGÊNCIA GOIANA DE GÁS CANALIZADO S/A",
  },
  {
    sigla: "GOIASPARCERIAS",
    nome_completo:
      "3392 - COMPANHIA DE INVESTIMENTO E PARCERIAS DO ESTADO DE GOIÁS",
  },
  { sigla: "GOIASPREV", nome_completo: "1762 - GOIÁS PREVIDÊNCIA" },
  { sigla: "GOIASTELECOM", nome_completo: "GOIÁS TELECOMUNICAÇÕES S/A" },
  {
    sigla: "GOIÁSTURISMO",
    nome_completo: "4261 - GOIÁS TURISMO - AGÊNCIA ESTADUAL DE TURISMO",
  },
  {
    sigla: "GOINFRA",
    nome_completo: "4361 - AGÊNCIA GOIANA DE INFRAESTRUTURA E TRANSPORTES",
  },
  {
    sigla: "IQUEGO",
    nome_completo: "3190 - INDUSTRIA QUIMICA DO ESTADO DE GOIAS S.A.",
  },
  {
    sigla: "JUCEG",
    nome_completo: "3362 - JUNTA COMERCIAL DO ESTADO DE GOIÁS",
  },
  { sigla: "LAGO AZUL", nome_completo: "4095 - LAGO AZUL TRANSMISSAO S.A." },
  {
    sigla: "METROBUS",
    nome_completo: "4093 - METROBUS TRANSPORTE COLETIVO S/A",
  },
  { sigla: "MPGO", nome_completo: "700 - MINISTÉRIO PÚBLICO" },
  { sigla: "PC", nome_completo: "2904 - POLÍCIA CIVIL" },
  { sigla: "PGE", nome_completo: "1400 - PROCURADORIA-GERAL DO ESTADO" },
  { sigla: "PM", nome_completo: "2902 - POLÍCIA MILITAR" },
  {
    sigla: "RETOMADA",
    nome_completo: "4200 - SECRETARIA DE ESTADO DA RETOMADA",
  },
  { sigla: "SANEAGO", nome_completo: "2192 - SANEAMENTO DE GOIÁS S/A" },
  {
    sigla: "SEAD",
    nome_completo: "1800 - SECRETARIA DE ESTADO DA ADMINISTRAÇÃO",
  },
  {
    sigla: "SEAPA",
    nome_completo:
      "3200 - SECRETARIA DE ESTADO DE AGRICULTURA, PECUÁRIA E ABASTECIMENTO",
  },
  {
    sigla: "SECOM",
    nome_completo: "1200 - SECRETARIA DE ESTADO DE COMUNICAÇÃO",
  },
  {
    sigla: "SECTI",
    nome_completo:
      "3100 - SECRETARIA DE ESTADO DE CIÊNCIA, TECNOLOGIA E INOVAÇÃO",
  },
  { sigla: "SECULT", nome_completo: "2500 - SECRETARIA DE ESTADO DE CULTURA" },
  {
    sigla: "SEDF",
    nome_completo: "4400 - SECRETARIA DE ESTADO DO ENTORNO DO DISTRITO FEDERAL",
  },
  {
    sigla: "SEDS",
    nome_completo: "3000 - SECRETARIA DE ESTADO DE DESENVOLVIMENTO SOCIAL",
  },
  { sigla: "SEDUC", nome_completo: "2400 - SECRETARIA DE ESTADO DA EDUCAÇÃO" },
  {
    sigla: "SEEL",
    nome_completo: "2600 - SECRETARIA DE ESTADO DE ESPORTE E LAZER",
  },
  {
    sigla: "SEINFRA",
    nome_completo: "4300 - SECRETARIA DE ESTADO DA INFRAESTRUTURA",
  },
  {
    sigla: "SEMAD",
    nome_completo:
      "2100 - SECRETARIA DE ESTADO DE MEIO AMBIENTE E DESENVOLVIMENTO SUSTENTÁVEL",
  },
  {
    sigla: "SERINT",
    nome_completo: "1900 - SECRETARIA DE ESTADO DE RELAÇÕES INSTITUCIONAIS",
  },
  { sigla: "SES", nome_completo: "2800 - SECRETARIA DA SAÚDE" },
  { sigla: "SGG", nome_completo: "4000 - SECRETARIA-GERAL DE GOVERNO" },
  {
    sigla: "SIC",
    nome_completo:
      "3300 - SECRETARIA DE ESTADO DE INDÚSTRIA, COMÉRCIO E SERVIÇOS",
  },
  {
    sigla: "SSP",
    nome_completo: "2900 - SECRETARIA DE ESTADO DE SEGURANÇA PÚBLICA",
  },
  {
    sigla: "TCE",
    nome_completo: "200 - TRIBUNAL DE CONTAS DO ESTADO DE GOIÁS",
  },
  { sigla: "TCM", nome_completo: "300 - TRIBUNAL DE CONTAS DOS MUNICÍPIOS" },
  {
    sigla: "TJGO",
    nome_completo: "400 - TRIBUNAL DE JUSTIÇA DO ESTADO DE GOIÁS",
  },
  { sigla: "UEG", nome_completo: "4062 - UNIVERSIDADE ESTADUAL DE GOIÁS" },
  { sigla: "VICE GOVERNADORIA", nome_completo: "1300 - VICE-GOVERNADORIA" },
];
const selectSiglaorgao = document.getElementById("select-sigla-orgao");

lista_orgao.forEach((orgao) => {
  const option = document.createElement("option");
  option.value = orgao.sigla;
  option.text = orgao.sigla;
  selectSiglaorgao.appendChild(option);
});

selectSiglaorgao.addEventListener("change", () => {
  const orgao = lista_orgao.find(
    (orgao) => orgao.sigla === selectSiglaorgao.value
  );
  document.getElementById("input-orgao-selecionado").value =
    orgao.nome_completo;
});

// Fonte
const lista_fonte = [
  {
    numero: 15000100,
    nome: "RECURSOS NÃO VINCULADOS DE IMPOSTOS - RECEITAS ORDINÁRIAS",
  },
  {
    numero: 15010001,
    nome: "OUTROS RECURSOS NÃO VINCULADOS - DIVIDENDOS E JUROS SOBRE CAPITAL PRÓPRIO CELGPAR",
  },
  {
    numero: 15010100,
    nome: "OUTROS RECURSOS NÃO VINCULADOS - RECEITAS ORDINÁRIAS E DRE",
  },
  {
    numero: 15010123,
    nome: "OUTROS RECURSOS NÃO VINCULADOS - TRANSFERÊNCIA DE INSTITUIÇÕES PRIVADAS PARA ASSISTÊNCIA FINANCEIRA AO TRANSPORTE COLETIVO, EC Nº 123/2022",
  },
  {
    numero: 15010129,
    nome: "OUTROS RECURSOS NÃO VINCULADOS - CONCESSÕES, PERMISSÕES E DELEGAÇÕES",
  },
  { numero: 15010136, nome: "OUTROS RECURSOS NÃO VINCULADOS - AMORTIZAÇÕES" },
  {
    numero: 15010220,
    nome: "OUTROS RECURSOS NÃO VINCULADOS - DIRETAMENTE ARRECADADOS PRÓPRIOS",
  },
  {
    numero: 15020001,
    nome: "RECURSOS NÃO VINCULADOS DA COMPENSAÇÃO DE IMPOSTOS",
  },
  {
    numero: 15400108,
    nome: "TRANSFERÊNCIAS DO FUNDEB - IMPOSTOS E TRANSFERÊNCIAS DE IMPOSTOS",
  },
  {
    numero: 15430000,
    nome: "TRANSFERÊNCIAS DO FUNDEB - COMPLEMENTAÇÃO DA UNIÃO - VAAR",
  },
  {
    numero: 15430108,
    nome: "TRANSFERÊNCIAS DO FUNDEB - COMPLEMENTAÇÃO DA UNIÃO - VAAR",
  },
  { numero: 15440000, nome: "RECURSOS DE PRECATÓRIOS DO FUNDEF" },
  {
    numero: 15500116,
    nome: "TRANSFERÊNCIA DO SALÁRIO-EDUCAÇÃO - COTA ESTADUAL",
  },
  {
    numero: 15510000,
    nome: "TRANSFERÊNCIAS DE RECURSOS DO FNDE REFERENTES AO PROGRAMA DINHEIRO DIRETO NA ESCOLA (PDDE)",
  },
  {
    numero: 15520109,
    nome: "TRANSFERÊNCIAS DE RECURSOS DO FNDE REFERENTES AO PROGRAMA NACIONAL DE ALIMENTAÇÃO ESCOLAR (PNAE)",
  },
  { numero: 15690115, nome: "OUTRAS TRANSFERÊNCIAS DE RECURSOS DO FNDE" },
  {
    numero: 15700260,
    nome: "TRANSFERÊNCIAS DO GOVERNO FEDERAL REFERENTES A CONVÊNIOS E INSTRUMENTOS CONGÊNERES VINCULADOS À EDUCAÇÃO",
  },
  {
    numero: 15720261,
    nome: "TRANSFERÊNCIAS DE MUNICÍPIOS REFERENTES A CONVÊNIOS E INSTRUMENTOS CONGÊNERES VINCULADOS À EDUCAÇÃO",
  },
  { numero: 15740000, nome: "OPERAÇÕES DE CRÉDITO VINCULADAS À EDUCAÇÃO" },
  {
    numero: 15750262,
    nome: "OUTRAS TRANSFERÊNCIAS DE CONVÊNIOS E INSTRUMENTOS CONGÊNERES VINCULADOS À EDUCAÇÃO",
  },
  { numero: 15990000, nome: "OUTROS RECURSOS VINCULADOS À EDUCAÇÃO" },
  {
    numero: 15990158,
    nome: "OUTROS RECURSOS VINCULADOS À EDUCAÇÃO - EDUCAÇÃO INFANTIL",
  },
  {
    numero: 16000001,
    nome: "TRANSFERÊNCIAS FUNDO A FUNDO DE RECURSOS DO SUS PROVENIENTES DO GOVERNO FEDERAL - BLOCO DE MANUTENÇÃO ASPS - EC RP2 - EMENDA PROGRAMAÇÃO",
  },
  {
    numero: 16000002,
    nome: "TRANSFERÊNCIAS FUNDO A FUNDO DE RECURSOS DO SUS PROVENIENTES DO GOVERNO FEDERAL - BLOCO DE MANUTENÇÃO ASPS - EC RP6 - EMENDA INDIVIDUAL",
  },
  {
    numero: 16000003,
    nome: "TRANSFERÊNCIAS FUNDO A FUNDO DE RECURSOS DO SUS PROVENIENTES DO GOVERNO FEDERAL - BLOCO DE MANUTENÇÃO ASPS - EC RP7 - EMENDA DE BANCADA",
  },
  {
    numero: 16000004,
    nome: "TRANSFERÊNCIAS FUNDO A FUNDO DE RECURSOS DO SUS PROVENIENTES DO GOVERNO FEDERAL - BLOCO DE MANUTENÇÃO ASPS - EC RP8 - EMENDA DE COMISSÃO",
  },
  {
    numero: 16000232,
    nome: "TRANSFERÊNCIAS FUNDO A FUNDO DE RECURSOS DO SUS PROVENIENTES DO GOVERNO FEDERAL - BLOCO DE MANUTENÇÃO DAS AÇÕES E SERVIÇOS PÚBLICOS DE SAÚDE",
  },
  {
    numero: 16010233,
    nome: "TRANSFERÊNCIAS FUNDO A FUNDO DE RECURSOS DO SUS PROVENIENTES DO GOVERNO FEDERAL - BLOCO DE ESTRUTURAÇÃO DA REDE DE SERVIÇOS PÚBLICOS DE SAÚDE",
  },
  {
    numero: 16020238,
    nome: "TRANSFERÊNCIAS FUNDO A FUNDO DO SUS - BL. DE MAN. DAS ASPS - RECURSOS DESTINADOS AO ENFRENTAMENTO DA COVID-19 NO BOJO DA AÇÃO 21C0",
  },
  {
    numero: 16030239,
    nome: "TRANSFERÊNCIAS FUNDO A FUNDO DO SUS - BL. DE ESTR. DA REDE DE SERV. PÚB. DE SAÚDE - REC. DEST. AO ENFRENTAMENTO DA COVID-19 NO BOJO DA AÇÃO 21C0",
  },
  {
    numero: 16040000,
    nome: "TRANSFERÊNCIAS PROVENIENTES DO GOVERNO FEDERAL DESTINADAS AO VENCIMENTO DOS AGENTES COMUNITÁRIOS DE SAÚDE E DOS AGENTES DE COMBATE ÀS ENDEMIAS",
  },
  {
    numero: 16050001,
    nome: "ASSISTÊNCIA FINANCEIRA DA UNIÃO DESTINADA À COMPLEMENTAÇÃO AO PAGAMENTO DOS PISOS SALARIAIS PARA PROFISSIONAIS DA ENFERMAGEM",
  },
  {
    numero: 16310270,
    nome: "TRANSFERÊNCIAS DO GOVERNO FEDERAL REFERENTES A CONVÊNIOS E INSTRUMENTOS CONGÊNERES VINCULADOS À SAÚDE",
  },
  {
    numero: 16317872,
    nome: "TRANSFERÊNCIAS DO GOVERNO FEDERAL REFERENTES A CONVÊNIOS E INSTRUMENTOS CONGÊNERES VINCULADOS À SAÚDE - CONVÊNIO Nº 787297/2013, MS/IQUEGO",
  },
  { numero: 16340000, nome: "OPERAÇÕES DE CRÉDITO VINCULADAS À SAÚDE" },
  {
    numero: 16360272,
    nome: "OUTRAS TRANSFERÊNCIAS DE CONVÊNIOS E INSTRUMENTOS CONGÊNERES VINCULADOS À SAÚDE",
  },
  {
    numero: 16600234,
    nome: "TRANSFERÊNCIA DE RECURSOS DO FUNDO NACIONAL DE ASSISTÊNCIA SOCIAL - FNAS - CORRENTES",
  },
  {
    numero: 16600235,
    nome: "TRANSFERÊNCIA DE RECURSOS DO FUNDO NACIONAL DE ASSISTÊNCIA SOCIAL - FNAS - CAPITAL",
  },
  {
    numero: 16650274,
    nome: "TRANSFERÊNCIAS DE CONVÊNIOS E INSTRUMENTOS CONGÊNERES VINCULADOS À ASSISTÊNCIA SOCIAL - COM ÓRGÃOS FEDERAIS",
  },
  {
    numero: 16650276,
    nome: "TRANSFERÊNCIAS DE CONVÊNIOS E INSTRUMENTOS CONGÊNERES VINCULADOS À ASSISTÊNCIA SOCIAL - OUTRAS ENTIDADES",
  },
  {
    numero: 17000280,
    nome: "OUTRAS TRANSFERÊNCIAS DE CONVÊNIOS OU INSTRUMENTOS CONGÊNERES DA UNIÃO - ADMINISTRAÇÃO DIRETA",
  },
  {
    numero: 17000290,
    nome: "OUTRAS TRANSFERÊNCIAS DE CONVÊNIOS OU INSTRUMENTOS CONGÊNERES DA UNIÃO - ADMINISTRAÇÃO INDIRETA",
  },
  {
    numero: 17020291,
    nome: "OUTRAS TRANSFERÊNCIAS DE CONVÊNIOS OU INSTRUMENTOS CONGÊNERES DOS MUNICÍPIOS - ADMINSITRAÇÃO INDIRETA",
  },
  {
    numero: 17030282,
    nome: "OUTRAS TRANSFERÊNCIAS DE CONVÊNIOS OU INSTRUMENTOS CONGÊNERES DE OUTRAS ENTIDADES - ADMINISTRAÇÃO DIRETA",
  },
  {
    numero: 17030284,
    nome: "OUTRAS TRANSFERÊNCIAS DE CONVÊNIOS OU INSTRUMENTOS CONGÊNERES DE OUTRAS ENTIDADES - ADMINISTRAÇÃO DIRETA COM ENTES EXTERNOS",
  },
  {
    numero: 17040283,
    nome: "OUTRAS TRANSFERÊNCIAS DE CONVÊNIOS OU INSTRUMENTOS CONGÊNERES DE OUTRAS ENTIDADES - ADMINISTRAÇÃO INDIRETA",
  },
  {
    numero: 17040285,
    nome: "OUTRAS TRANSFERÊNCIAS DE CONVÊNIOS OU INSTRUMENTOS CONGÊNERES DE OUTRAS ENTIDADES - ADMINISTRAÇÃO INDIRETA COM ENTES EXTERNOS",
  },
  {
    numero: 17060289,
    nome: "TRANSFERÊNCIAS DE CONVÊNIOS E INSTRUMENTOS CONGÊNERES VINCULADOS AO SANEAMENTO",
  },
  {
    numero: 17290287,
    nome: "OUTRAS TRANSFERÊNCIAS DE CONVÊNIOS E INSTRUMENTOS CONGÊNERES VINCULADOS À ADMINISTRAÇÃO GERAL",
  },
  {
    numero: 17290288,
    nome: "OUTRAS TRANSFERÊNCIAS DE CONVÊNIOS E INSTRUMENTOS CONGÊNERES VINCULADOS À CULTURA",
  },
  {
    numero: 17400306,
    nome: "OUTRAS TRANSFERÊNCIAS DE CONVÊNIOS E INSTRUMENTOS CONGÊNERES DA UNIÃO - ADMINISTRAÇÃO INDIRETA - GERAIS",
  },
  {
    numero: 17430310,
    nome: "OUTRAS TRANSFERÊNCIAS DE CONVÊNIOS E INSTRUMENTOS CONGÊNERES DOS MUNICÍPIOS - ADMINISTRAÇÃO DIRETA",
  },
  {
    numero: 17600298,
    nome: "TRANSFERÊNCIAS DE CONVÊNIOS E INSTRUMENTOS CONGÊNERes VINCULADOS A TRANSPORTE",
  },
  {
    numero: 17990000,
    nome: "OUTRAS TRANSFERÊNCIAS DE CONVÊNIOS E INSTRUMENTOS CONGÊNERES",
  },
  {
    numero: 18000112,
    nome: "TRANSFERÊNCIAS ESPECIAIS DA UNIÃO RECEBIDAS MEDIANTE EMENDAS INDIVIDUAIS",
  },
  {
    numero: 18000210,
    nome: "TRANSFERÊNCIAS ESPECIAIS DA UNIÃO RECEBIDAS MEDIANTE EMENDAS DE BANCADA",
  },
  {
    numero: 18000212,
    nome: "TRANSFERÊNCIAS ESPECIAIS DA UNIÃO RECEBIDAS MEDIANTE EMENDAS DE COMISSÃO",
  },
  {
    numero: 18100100,
    nome: "TRANSFERÊNCIAS COMUNS DA UNIÃO RECEBIDAS MEDIANTE EMENDAS INDIVIDUAIS - EXCETO SAÚDE",
  },
  {
    numero: 18100213,
    nome: "TRANSFERÊNCIAS COMUNS DA UNIÃO RECEBIDAS MEDIANTE EMENDAS DE BANCADA - EXCETO SAÚDE",
  },
  {
    numero: 18100215,
    nome: "TRANSFERÊNCIAS COMUNS DA UNIÃO RECEBIDAS MEDIANTE EMENDAS DE COMISSÃO - EXCETO SAÚDE",
  },
  {
    numero: 18110212,
    nome: "TRANSFERÊNCIAS COMUNS DA UNIÃO RECEBIDAS MEDIANTE EMENDAS DE COMISSÃO - GERAIS",
  },
  {
    numero: 18200102,
    nome: "TRANSFERÊNCIAS COMUNS DA UNIÃO RECEBIDAS MEDIANTE EMENDAS INDIVIDUAIS - SAÚDE",
  },
  {
    numero: 18200214,
    nome: "TRANSFERÊNCIAS COMUNS DA UNIÃO RECEBIDAS MEDIANTE EMENDAS DE BANCADA - SAÚDE",
  },
  {
    numero: 18200216,
    nome: "TRANSFERÊNCIAS COMUNS DA UNIÃO RECEBIDAS MEDIANTE EMENDAS DE COMISSÃO - SAÚDE",
  },
  {
    numero: 19000000,
    nome: "RECURSOS VINCULADOS - ORÇAMENTO ESTADUAL DE CONTINGÊNCIA",
  },
];

const selectFonte = document.getElementById("select-fonte");
const inputFonte = document.getElementById("input-fonte-selecionada");

lista_fonte.forEach((fonte) => {
  const option = document.createElement("option");
  option.value = fonte.numero;
  option.text = fonte.numero;
  selectFonte.appendChild(option);
});

selectFonte.addEventListener("change", () => {
  const fonte = lista_fonte.find((fonte) => fonte.numero == selectFonte.value); // Comparação flexível usando == já que value é string
  if (fonte) {
    // Verifica se a fonte foi encontrada
    inputFonte.value = fonte.nome;
  } else {
    inputFonte.value = ""; // Limpa o campo se nenhuma fonte for encontrada
  }
});

//************************************************************************** */
const rowtable1 = document.getElementById("container-table1");
const btnAddRowTable1 = document.getElementById("btn-add-row-table1");
let contRowTable1 = 2; // Começa em 2, pois a primeira linha já existe

function addRemoveButtonListener(button) {
  button.addEventListener("click", function () {
    const row = this.closest("tr");
    row.remove();
  });
}

btnAddRowTable1.addEventListener("click", () => {
  const colTable = contRowTable1;
  const newRow = `
    <tr>
      <td>
        <input
          id="row-${contRowTable1}-1"
          type="text"
          class="form-control"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </td>
      <td>
        <select class="form-select" aria-label="tipo de pedido" id="combo-${contRowTable1}-2" >
          <option selected>Selecione</option>
          <option value="suplementar">Suplementar</option>
          <option value="reduzir">Reduzir</option>
        </select>
      </td>
      <td>
        <input
          id="row-${contRowTable1}-3"
          type="text"
          class="form-control"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          title="INFORME O VALOR NEGATIVO PARA REDUÇÃO DE CRÉDITO"
          placeholder="INFORME O VALOR NEGATIVO PARA REDUÇÃO DE CRÉDITO"
        />
      </td>
      <td>
        <button
          id="btn-remove-row-table1-id-${contRowTable1}"
          type="button"
          class="btn btn-danger"
          data-id="${contRowTable1}"
        >
          <i class="fa-solid fa-trash"></i>
        </button>
      </td>
    </tr>
  `;
  rowtable1.insertAdjacentHTML("beforeend", newRow);

  const newRemoveButton = document.getElementById(
    `btn-remove-row-table1-id-${contRowTable1}`
  );
  addRemoveButtonListener(newRemoveButton);

  contRowTable1++;
});

// Adiciona o listener ao botão de remover da primeira linha (se existir)
const initialRemoveButton = document.getElementById(
  "btn-remove-row-table1-id-1"
);
if (initialRemoveButton) {
  addRemoveButtonListener(initialRemoveButton);
}

//--------------------------------------------------------------------------------------------
// Table 2
const rowtable2 = document.getElementById("container-table2");
const btnAddRowTable2 = document.getElementById("btn-add-row-table2");
const valorTotalTb2 = document.getElementById("valor-total-tb2");

inputValorTotalSuplementacao.addEventListener("input", () => {
  valorTotalTb2.textContent = inputValorTotalSuplementacao.value;
});

let contRowTable2 = 1; // Começa em 2, pois a primeira linha já existe

listaOrigemDosRecursos = [
  "Anulação total ou parcial de dotação orçamentária",
  "Excesso de arrecadação",
  "Sem indicação de recursos",
  "Superávit financeiro diretamente arrecadado",
];

// Adiciona o listener ao botão de remover da primeira linha (se existir)
function addRemoveButtonListener(button) {
  button.addEventListener("click", function () {
    const row = this.closest("tr");
    row.remove();
    updateRowNumbers();
  });
}
// Adiciona o listener para escutar e pegar os valores dos inputs
function addInputValorSuplementadoListener(input) {
  input.forEach((input) => {
    input.addEventListener("input", () => {
      calcularSomatorio();
      validarSomatorio();
    });
  });
}

// Adiciona uma linha na tabela 2
btnAddRowTable2.addEventListener("click", () => {
  const newRow = `
  <tr>
      <td>
          <span id="num-solic-${contRowTable2}">
          ${contRowTable2}
          </span>
      </td>
      <td>
          <input id="num-solic-${contRowTable2}
  }" type="text" class="form-control" name="tb2-soliccit-siofi">
      </td>
      <td>
          <input id="cod-acao-${contRowTable2}
  }" type="text" class="form-control" name="tb2-cod-acao">
      </td>
      <td>
          <input id="nome-acao-${contRowTable2}-
  }" type="text" class="form-control" name="tb2-acao" disabled>
      </td>
      <td>
          <input id="nome-produto-${contRowTable2}
  }" type="text" class="form-control" name="tb2-produto" disabled>
      </td>
      <td>
          <input id="nome-iniciativa-${contRowTable2}
  }" type="text" class="form-control" name="tb2-iniciativa" disabled>
      </td>
      <td>
          <input id="nome-valor-suplementado-${contRowTable2}
  }" type="text" class="form-control" name="tb2-valor-suplementado">
      </td>
      <td>
          <select class="form-select" aria-label="Origem dos Recursos" id="select-origem-recursos-${contRowTable2}" >
              <option selected>Selecione</option>
              <option value="Anulação total ou parcial de dotação orçamentária">Anulação total ou parcial de dotação orçamentária</option>
              <option value="Excesso de arrecadação">Excesso de arrecadação</option>
              <option value="Sem indicação de recursos">Sem indicação de recursos</option>
              <option value="Superávit financeiro diretamente arrecadado">Superávit financeiro diretamente arrecadado</option>
          </select>
      </td>
      <td>
          <input id="nome-acao-anulada-${contRowTable2}
  }" type="text" class="form-control" name="tb2-acao-anulada" disabled>
      </td>
      <td>
          <input id="valor-reduzido-${contRowTable2}
  }" type="text" class="form-control" name="tb2-valor-reduzido" disabled>
      </td>
      <td>
          <button id="btn-remove-row-table2-id-${contRowTable2}" type="button" class="btn btn-danger" data-id="${contRowTable2}">
              <i class="fa-solid fa-trash"></i>
          </button>
      </td>
  </tr>`;

  rowtable2.insertAdjacentHTML("beforeend", newRow);

  const newRemoveButton = document.getElementById(
    `btn-remove-row-table2-id-${contRowTable2}`
  );
  const inputValorSuplementado = document.querySelectorAll(
    'input[name="tb2-valor-suplementado"]'
  );

  const selectElement = document.getElementById(
    `select-origem-recursos-${contRowTable2}`
  );

  addRemoveButtonListener(newRemoveButton);
  addInputValorSuplementadoListener(inputValorSuplementado);
  addChangeListenerToSelect(selectElement);
  contRowTable2++;
});

btnAddRowTable2.click();

//***********************************************************************
// validar COMBOBOX Origem dos Recursos
acaoAnuladaInput.disabled = true;
valorReduzidoInput.disabled = true;
function addChangeListenerToSelect(selectElement) {
  selectElement.addEventListener("change", (event) => {
    const selectedValue = event.target.value;
    const row = selectElement.closest("tr");
    const acaoAnuladaInput = row.querySelector(
      'input[name="tb2-acao-anulada"]'
    );
    const valorReduzidoInput = row.querySelector(
      'input[name="tb2-valor-reduzido"]'
    );

    if (selectedValue !== "Anulação total ou parcial de dotação orçamentária") {
      acaoAnuladaInput.disabled = true;
      valorReduzidoInput.disabled = true;
    } else {
      acaoAnuladaInput.disabled = false;
      valorReduzidoInput.disabled = false;
    }
  });
}

// ***********************************************************************

// Validar valor de suplementação com os valores da tabela
const inputsValorSuplementado = document.querySelectorAll(
  'input[name="tb2-valor-suplementado"]'
);
inputsValorSuplementado.forEach((input) => {
  input.addEventListener("input", () => {
    calcularSomatorio();
  });
});

function calcularSomatorio() {
  // Selecionar todos os inputs com o atributo name="tb2-valor-suplementado"
  const inputs = document.querySelectorAll(
    'input[name="tb2-valor-suplementado"]'
  );
  // Inicializar o somatório
  let somatorio = 0;

  // Percorrer os inputs e somar os valores
  inputs.forEach((input) => {
    // Converter o valor do input para número e adicionar ao somatório
    const valor = parseFloat(input.value) || 0;
    somatorio += valor;
  });
  // Atualizar o texto do elemento de somatório
  document.getElementById("valor-somatorio").textContent = somatorio;
}

// Adiciona o listener ao botão de remover da primeira linha
const initialRemoveButtonTB2 = document.getElementById(
  "btn-remove-row-table2-id-1"
);
addRemoveButtonListener(initialRemoveButtonTB2);

function updateRowNumbers() {
  const rows = rowtable2.getElementsByTagName("tr");
  for (let i = 0; i < rows.length; i++) {
    const rowNumCell = rows[i].getElementsByTagName("span")[0];
    if (rowNumCell) {
      rowNumCell.textContent = i;
      const button = rows[i].getElementsByTagName("button")[0];
      if (button) {
        button.setAttribute("data-id", i);
        button.id = `btn-remove-row-table2-id-${i}`;
      }
    }
  }
  contRowTable2 = rows.length + 1;
}

const tb2Aviso = document.getElementById("tb-2-aviso");
const valorSomatorio = document.getElementById("valor-somatorio");

function validarSomatorio() {
  if (valorSomatorio.textContent !== valorTotalTb2.textContent) {
    tb2Aviso.removeAttribute("hidden");
  } else {
    tb2Aviso.setAttribute("hidden", true);
  }
}

//--------------------------------------------------------------------------------------------
