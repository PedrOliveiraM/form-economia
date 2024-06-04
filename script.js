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
let contRowTable2 = 1; // Começa em 2, pois a primeira linha já existe

listaOrigemDosRecursos = [
  'Anulação total ou parcial de dotação orçamentária',
  'Excesso de arrecadação',
  'Sem indicação de recursos',
  'Superávit financeiro diretamente arrecadado',
];

function addRemoveButtonListener(button) {
  button.addEventListener('click', function () {
    const row = this.closest('tr');
    row.remove();
    updateRowNumbers();
  });
}

btnAddRowTable2.addEventListener('click', () => {
  const colTable2 = 1;
  const newRow = `
  <tr>
      <td>
          <span id="row-${contRowTable2}-${colTable2}">
              ${contRowTable2}
          </span>
      </td>
      <td>
          <input id="row-${contRowTable2}-${
    colTable2 + 1
  }" type="text" class="form-control" name="tb1-soliccit-siofi">
      </td>
      <td>
          <input id="row-${contRowTable2}-${
    colTable2 + 2
  }" type="text" class="form-control" name="tb1-cod-acao">
      </td>
      <td>
          <input id="row-${contRowTable2}-${
    colTable2 + 3
  }" type="text" class="form-control" name="tb1-acao" disabled>
      </td>
      <td>
          <input id="row-${contRowTable2}-${
    colTable2 + 4
  }" type="text" class="form-control" name="tb1-produto" disabled>
      </td>
      <td>
          <input id="row-${contRowTable2}-${
    colTable2 + 5
  }" type="text" class="form-control" name="tb1-iniciativa" disabled>
      </td>
      <td>
          <input id="row-${contRowTable2}-${
    colTable2 + 6
  }" type="text" class="form-control" name="tb1-valor-suplementado">
      </td>
      <td>
          <select class="form-select" aria-label="Origem dos Recursos">
              <option selected>Selecione</option>
              <option value="Anulação total ou parcial de dotação orçamentária">Anulação total ou parcial de dotação orçamentária</option>
              <option value="Excesso de arrecadação">Excesso de arrecadação</option>
              <option value="Sem indicação de recursos">Sem indicação de recursos</option>
              <option value="Superávit financeiro diretamente arrecadado">Superávit financeiro diretamente arrecadado</option>
          </select>
      </td>
      <td>
          <input id="row-${contRowTable2}-${
    colTable2 + 7
  }" type="text" class="form-control" name="tb1-valor-reduzido">
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
  addRemoveButtonListener(newRemoveButton);

  contRowTable2++;
});

btnAddRowTable2.click();

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
      rowNumCell.textContent = i + 1;
      const button = rows[i].getElementsByTagName('button')[0];
      if (button) {
        button.setAttribute('data-id', i + 1);
        button.id = `btn-remove-row-table2-id-${i + 1}`;
      }
    }
  }
  contRowTable2 = rows.length + 1;
}

//--------------------------------------------------------------------------------------------
