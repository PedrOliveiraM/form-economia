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
  let colTable = 1;
  const newRow = `
                <tr>
                    <td><input id="row-${contRowTable1}-${colTable}" type="text" class="form-control" name="class-orca"></td>
                    <td><input id="row-${contRowTable1}-${
    colTable + 1
  }" type="text" class="form-control" name="valor-sup-red"></td>
                    <td><button
                        id="btn-remove-row-table1-id-${contRowTable1}"
                        type="button"
                        class="btn btn-danger"
                        data-id="${contRowTable1}"
                    >
                        <i class="fa-solid fa-trash"></i>
                    </button></td>
                </tr>
            `;
  rowtable1.insertAdjacentHTML('beforeend', newRow);

  const newRemoveButton = document.getElementById(
    `btn-remove-row-table1-id-${contRowTable1}`
  );
  addRemoveButtonListener(newRemoveButton);

  contRowTable1++;
});

// Adiciona o listener ao botão de remover da primeira linha
const initialRemoveButton = document.getElementById(
  'btn-remove-row-table1-id-1'
);
addRemoveButtonListener(initialRemoveButton);

//--------------------------------------------------------------------------------------------
// Table 2
const rowtable2 = document.getElementById('container-table2');
const btnAddRowTable2 = document.getElementById('btn-add-row-table2');
let contRowTable2 = 2; // Começa em 2, pois a primeira linha já existe

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
                    <td><input id="row-${contRowTable2}-${
    colTable2 + 1
  }" type="text" class="form-control" name="tb1-soliccit-siofi"></td>
                    <td><input id="row-${contRowTable2}-${
    colTable2 + 2
  }" type="text" class="form-control" name="tb1-cod-acao"></td>
                    <td><input id="row-${contRowTable2}-${
    colTable2 + 3
  }" type="text" class="form-control" name="tb1-produto"></td>
                    <td><input id="row-${contRowTable2}-${
    colTable2 + 4
  }" type="text" class="form-control" name="tb1-iniciativa"></td>
                    <td><input id="row-${contRowTable2}-${
    colTable2 + 5
  }" type="text" class="form-control" name="tb1-valor-suplementado"></td>
                    <td><input id="row-${contRowTable2}-${
    colTable2 + 6
  }" type="text" class="form-control" name="tb1-origem-recurso"></td>
                    <td><input id="row-${contRowTable2}-${
    colTable2 + 7
  }" type="text" class="form-control" name="tb1-acao-anulada"></td>
                    <td><input id="row-${contRowTable2}-${
    colTable2 + 8
  }" type="text" class="form-control" name="tb1-valor-reduzido"></td>
                    <td><input id="row-${contRowTable2}-${
    colTable2 + 9
  }" type="text" class="form-control" name="btn-remove"></td>
                    <td><button
                            id="btn-remove-row-table2-id-${contRowTable2}"
                            type="button"
                            class="btn btn-danger"
                            data-id="${contRowTable2}"
                        >
                            <i class="fa-solid fa-trash"></i>
                        </button></td>
                </tr>`;

  rowtable2.insertAdjacentHTML('beforeend', newRow);

  const newRemoveButton = document.getElementById(
    `btn-remove-row-table2-id-${contRowTable2}`
  );
  addRemoveButtonListener(newRemoveButton);

  contRowTable2++;
});

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
// Table 3
const rowtable3 = document.getElementById('container-table3');
const btnAddRowTable3 = document.getElementById('btn-add-row-table3');
let contRowTable3 = 2; // Começa em 2, pois a primeira linha já existe

function addRemoveButtonListenerTable3(button) {
  button.addEventListener('click', function () {
    const row = this.closest('tr');
    row.remove();
    updateRowNumbersTable3();
  });
}

btnAddRowTable3.addEventListener('click', () => {
  const colTable3 = 1;
  const newRow = `
                <tr>
                    <td>
                        <span id="row-${contRowTable3}-${colTable3}">
                            ${contRowTable3}
                        </span>
                    </td>
                    <td><input id="row-${contRowTable3}-${
    colTable3 + 1
  }" type="text" class="form-control" name="acao"></td>
                    <td><input id="row-${contRowTable3}-${
    colTable3 + 2
  }" type="text" class="form-control" name="produto"></td>
                    <td><input id="row-${contRowTable3}-${
    colTable3 + 3
  }" type="text" class="form-control" name="meta"></td>
                    <td><input id="row-${contRowTable3}-${
    colTable3 + 4
  }" type="text" class="form-control" name="unidade"></td>
                    <td><input id="row-${contRowTable3}-${
    colTable3 + 5
  }" type="text" class="form-control" name="acumula"></td>
                    <td><input id="row-${contRowTable3}-${
    colTable3 + 6
  }" type="text" class="form-control" name="custo_estimado"></td>
                    <td><input id="row-${contRowTable3}-${
    colTable3 + 7
  }" type="text" class="form-control" name="custo_unitario"></td>
                    <td><input id="row-${contRowTable3}-${
    colTable3 + 8
  }" type="text" class="form-control" name="saldo_orcamentario"></td>
                    <td><input id="row-${contRowTable3}-${
    colTable3 + 9
  }" type="text" class="form-control" name="saldo_liquidado"></td>
                    <td><button
                            id="btn-remove-row-table3-id-${contRowTable3}"
                            type="button"
                            class="btn btn-danger"
                            data-id="${contRowTable3}"
                        >
                            <i class="fa-solid fa-trash"></i>
                        </button></td>
                </tr>`;

  rowtable3.insertAdjacentHTML('beforeend', newRow);

  const newRemoveButton = document.getElementById(
    `btn-remove-row-table3-id-${contRowTable3}`
  );
  addRemoveButtonListenerTable3(newRemoveButton);

  contRowTable3++;
});

// Adiciona o listener ao botão de remover da primeira linha
const initialRemoveButtonTB3 = document.getElementById(
  'btn-remove-row-table3-id-1'
);
addRemoveButtonListenerTable3(initialRemoveButtonTB3);

function updateRowNumbersTable3() {
  const rows = rowtable3.getElementsByTagName('tr');
  for (let i = 0; i < rows.length; i++) {
    const rowNumCell = rows[i].getElementsByTagName('span')[0];
    if (rowNumCell) {
      rowNumCell.textContent = i + 1;
      const button = rows[i].getElementsByTagName('button')[0];
      if (button) {
        button.setAttribute('data-id', i + 1);
        button.id = `btn-remove-row-table3-id-${i + 1}`;
      }
    }
  }
  contRowTable3 = rows.length + 1;
}

//--------------------------------------------------------------------------------------------
// Table 4
const rowtable4 = document.getElementById('container-table4');
const btnAddRowTable4 = document.getElementById('btn-add-row-table4');
let contRowTable4 = 2; // Começa em 1, pois a primeira linha será adicionada dinamicamente

function addRemoveButtonListenerTable4(button) {
  button.addEventListener('click', function () {
    const row = this.closest('tr');
    row.remove();
    updateRowNumbersTable4();
  });
}

btnAddRowTable4.addEventListener('click', () => {
  const colTable4 = 1;
  const newRow = `
    <tr>
      <td>
        <span id="row-${contRowTable4}-${colTable4}">${contRowTable4}</span>
      </td>
      <td><input id="row-${contRowTable4}-${colTable4 + 1}" type="text" class="form-control" name="acao"></td>
      <td><input id="row-${contRowTable4}-${colTable4 + 2}" type="text" class="form-control" name="produto"></td>
      <td><input id="row-${contRowTable4}-${colTable4 + 3}" type="text" class="form-control" name="meta_proposta"></td>
      <td><input id="row-${contRowTable4}-${colTable4 + 4}" type="text" class="form-control" name="alteracao_meta"></td>
      <td><input id="row-${contRowTable4}-${colTable4 + 5}" type="text" class="form-control" name="custo_estimado_suplementado"></td>
      <td><input id="row-${contRowTable4}-${colTable4 + 6}" type="text" class="form-control" name="custo_unitario_suplementado"></td>
      <td><input id="row-${contRowTable4}-${colTable4 + 7}" type="text" class="form-control" name="suplementado_custo_estimado"></td>
      <td><input id="row-${contRowTable4}-${colTable4 + 8}" type="text" class="form-control" name="suplementado_saldo_orcamentario"></td>
      <td><input id="row-${contRowTable4}-${colTable4 + 9}" type="text" class="form-control" name="liquidado_saldo_orcamentario"></td>
      <td><button id="btn-remove-row-table4-id-${contRowTable4}" type="button" class="btn btn-danger" data-id="${contRowTable4}"><i class="fa-solid fa-trash"></i></button></td>
    </tr>
  `;

  rowtable4.insertAdjacentHTML('beforeend', newRow);

  const newRemoveButton = document.getElementById(`btn-remove-row-table4-id-${contRowTable4}`);
  addRemoveButtonListenerTable4(newRemoveButton);

  contRowTable4++;
});

function updateRowNumbersTable4() {
  const rows = rowtable4.getElementsByTagName('tr');
  for (let i = 0; i < rows.length; i++) {
    const rowNumCell = rows[i].getElementsByTagName('span')[0];
    if (rowNumCell) {
      rowNumCell.textContent = i + 1;
      const button = rows[i].getElementsByTagName('button')[0];
      if (button) {
        button.setAttribute('data-id', i + 1);
        button.id = `btn-remove-row-table4-id-${i + 1}`;
      }
    }
  }
  contRowTable4 = rows.length + 1;
}

// Inicializa o listener do botão de remover, se houver uma linha inicial
const initialRemoveButtonTB4 = document.getElementById('btn-remove-row-table4-id-1');
if (initialRemoveButtonTB4) {
  addRemoveButtonListenerTable4(initialRemoveButtonTB4);
}
