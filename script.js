const rowtable1 = document.getElementById('container-table1');
const btnAddRowTable1 = document.getElementById('btn-add-row-table1');
const btnRemoveTable1 = document.getElementById('btn-remove-row-table1');
let contRowTable1 = 2; // Mudei para 2, pois a primeira linha já existe

function updateRowCount() {
  const rowCount = rowtable1.getElementsByTagName('tr').length;
  return rowCount;
}

btnAddRowTable1.addEventListener('click', () => {
  let colTable = 1;
  const newRow = `
          <tr>
              <td><input id="row-${contRowTable1}-${colTable}" type="text" class="form-control" name="name""></td>
              <td><input id="row-${contRowTable1}-${
    colTable + 1
  }" type="text" class="form-control" name="name"></td>
          </tr>
      `;
  rowtable1.insertAdjacentHTML('beforeend', newRow);
  contRowTable1++;
});

btnRemoveTable1.addEventListener('click', () => {
  quantRow = updateRowCount();
  if (quantRow >= 1) {
    rowtable1.deleteRow(quantRow - 1);
    rowtable1.onresize;
    contRowTable1--;
  } else {
    alert('Não é possível remover mais linhas');
  }
});

//--------------------------------------------------------------------------------------------
// Table 2

const rowtable2 = document.getElementById('container-table2');
const btnAddRowTable2 = document.getElementById('btn-add-row-table2');
const btnRemoveTable2 = document.getElementById('btn-remove-row-table2');
let contRowTable2 = 2; // Mudei para 2, pois a primeira linha já existe

function updateRowCount() {
  const rowCount = rowtable2.getElementsByTagName('tr').length;
  return rowCount;
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
  }" type="text" class="form-control" name="name">
        </td>
        <td>
           <input id="row-${contRowTable2}-${
    colTable2 + 2
  }" type="text" class="form-control" name="name">
        </td>
                <td><input id="row-${contRowTable2}-${
    colTable2 + 3
  }" type="text" class="form-control" name="name"></td>
                <td><input id="row-${contRowTable2}-${
    colTable2 + 4
  }" type="text" class="form-control" name="name"></td>
                <td><input id="row-${contRowTable2}-${
    colTable2 + 5
  }" type="text" class="form-control" name="name"></td>
                <td><input id="row-${contRowTable2}-${
    colTable2 + 6
  }" type="text" class="form-control" name="name"></td>
                <td><input id="row-${contRowTable2}-${
    colTable2 + 7
  }" type="text" class="form-control" name="name"></td>
                <td><input id="row-${contRowTable2}-${
    colTable2 + 8
  }" type="text" class="form-control" name="name"></td>
                <td><input id="row-${contRowTable2}-${
    colTable2 + 9
  }" type="text" class="form-control" name="name"></td>
    
  </tr>`;

  rowtable2.insertAdjacentHTML('beforeend', newRow);
  contRowTable2++;
});

btnRemoveTable2.addEventListener('click', () => {
  quantRow = updateRowCount();
  if (quantRow >= 1) {
    rowtable2.deleteRow(quantRow - 1);
    rowtable2.onresize;
    contRowTable2--;
  } else {
    alert('Não é possível remover mais linhas');
  }
});
