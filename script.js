const rowtable1 = document.getElementById('container-table1');
const btnAddRowTable1 = document.getElementById('btn-add-row-table1');
let contRowTable1 = 2; // Começa em 2, pois a primeira linha já existe

function addRemoveButtonListener(button) {
  button.addEventListener('click', function () {
    const row = this.closest('tr');
    row.remove();
  });
}

btnAddRowTable1.addEventListener('click', () => {
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
  rowtable1.insertAdjacentHTML('beforeend', newRow);

  const newRemoveButton = document.getElementById(
    `btn-remove-row-table1-id-${contRowTable1}`
  );
  addRemoveButtonListener(newRemoveButton);

  contRowTable1++;
});

// Adiciona o listener ao botão de remover da primeira linha (se existir)
const initialRemoveButton = document.getElementById(
  'btn-remove-row-table1-id-1'
);
if (initialRemoveButton) {
  addRemoveButtonListener(initialRemoveButton);
}

//--------------------------------------------------------------------------------------------
// Table 2
const rowtable2 = document.getElementById('container-table2');
const btnAddRowTable2 = document.getElementById('btn-add-row-table2');
const valorTotalTb2 = document.getElementById('valor-total-tb2');

const inputValorTotalSuplementacao = document.getElementById(
  'input-valor-total-suplementacao'
);
inputValorTotalSuplementacao.addEventListener('input', () => {
  valorTotalTb2.textContent = inputValorTotalSuplementacao.value;
});

let contRowTable2 = 1; // Começa em 2, pois a primeira linha já existe

listaOrigemDosRecursos = [
  'Anulação total ou parcial de dotação orçamentária',
  'Excesso de arrecadação',
  'Sem indicação de recursos',
  'Superávit financeiro diretamente arrecadado',
];

// Adiciona o listener ao botão de remover da primeira linha (se existir)
function addRemoveButtonListener(button) {
  button.addEventListener('click', function () {
    const row = this.closest('tr');
    row.remove();
    updateRowNumbers();
  });
}
// Adiciona o listener para escutar e pegar os valores dos inputs
function addInputValorSuplementadoListener(input) {
  input.forEach((input) => {
    input.addEventListener('input', () => {
      calcularSomatorio();
      validarSomatorio();
    });
  });
}

// Adiciona uma linha na tabela 2
btnAddRowTable2.addEventListener('click', () => {
  const newRow = `
  <tr>
      <td>
          <span id="row-${contRowTable2}">
          ${contRowTable2}
          </span>
      </td>
      <td>
          <input id="row-${contRowTable2}
  }" type="text" class="form-control" name="tb2-soliccit-siofi">
      </td>
      <td>
          <input id="row-${contRowTable2}
  }" type="text" class="form-control" name="tb2-cod-acao">
      </td>
      <td>
          <input id="row-${contRowTable2}-
  }" type="text" class="form-control" name="tb2-acao" disabled>
      </td>
      <td>
          <input id="row-${contRowTable2}
  }" type="text" class="form-control" name="tb2-produto" disabled>
      </td>
      <td>
          <input id="row-${contRowTable2}
  }" type="text" class="form-control" name="tb2-iniciativa" disabled>
      </td>
      <td>
          <input id="row-${contRowTable2}
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
          <input id="row-${contRowTable2}
  }" type="text" class="form-control" name="tb2-acao-anulada" disabled>
      </td>
      <td>
          <input id="row-${contRowTable2}
  }" type="text" class="form-control" name="tb2-valor-reduzido" disabled>
      </td>
      <td>
          <button id="btn-remove-row-table2-id-${contRowTable2}" type="button" class="btn btn-danger" data-id="${contRowTable2}">
              <i class="fa-solid fa-trash"></i>
          </button>
      </td>
  </tr>`;

  rowtable2.insertAdjacentHTML('beforeend', newRow);

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
function addChangeListenerToSelect(selectElement) {
  selectElement.addEventListener('change', (event) => {
    const selectedValue = event.target.value;
    const row = selectElement.closest('tr');
    const acaoAnuladaInput = row.querySelector(
      'input[name="tb2-acao-anulada"]'
    );
    const valorReduzidoInput = row.querySelector(
      'input[name="tb2-valor-reduzido"]'
    );

    if (selectedValue !== 'Anulação total ou parcial de dotação orçamentária') {
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
  input.addEventListener('input', () => {
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
  document.getElementById('valor-somatorio').textContent = somatorio;
}

// Adiciona o listener ao botão de remover da primeira linha
const initialRemoveButtonTB2 = document.getElementById(
  'btn-remove-row-table2-id-1'
);
addRemoveButtonListener(initialRemoveButtonTB2);

function updateRowNumbers() {
  const rows = rowtable2.getElementsByTagName('tr');
  for (let i = 0; i < rows.length; i++) {
    const rowNumCell = rows[i].getElementsByTagName('span')[0];
    if (rowNumCell) {
      rowNumCell.textContent = i;
      const button = rows[i].getElementsByTagName('button')[0];
      if (button) {
        button.setAttribute('data-id', i );
        button.id = `btn-remove-row-table2-id-${i }`;
      }
    }
  }
  contRowTable2 = rows.length + 1;
}

const tb2Aviso = document.getElementById('tb-2-aviso');
const valorSomatorio = document.getElementById('valor-somatorio');

function validarSomatorio() {
  if (valorSomatorio.textContent !== valorTotalTb2.textContent) {
    tb2Aviso.removeAttribute('hidden');
  } else {
    tb2Aviso.setAttribute('hidden', true);
  }
}

//--------------------------------------------------------------------------------------------
