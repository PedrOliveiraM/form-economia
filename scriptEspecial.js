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
          <input type="text" class="form-control" id="input-acao-atual" />
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