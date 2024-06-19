const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: false }); // Configurações headless: false para ver o navegador em ação
  const page = await browser.newPage();

  await page.goto("file:///C:/wamp64/www/pedro/formularioAnalise.html");

  // Preencher os campos do formulário
  await page.select("#select-sigla-orgao", "valor-da-sigla"); // Substitua 'valor-da-sigla' pelo valor adequado
  await page.type("#input-orgao-selecionado", "Nome do Órgão");
  await page.type(
    "#input-responsavel-pelas-informacoes",
    "Nome do Responsável"
  );
  await page.type("#input-whatsapp", "123456789");
  await page.type("#input-valor-total-suplementacao", "10000");
  await page.type("#input-valor-total-suplementacao-extenso", "Dez mil reais");
  await page.select("#select-fonte", "valor-da-fonte"); // Substitua 'valor-da-fonte' pelo valor adequado
  await page.type("#input-fonte-selecionada", "Nome da Fonte");
  await page.type("#text-area-objeto", "Descrição do objeto");
  await page.type("#text-area-justificativa", "Descrição da justificativa");
  await page.type("#text-area-impacto", "Descrição do impacto");

  // Simular o envio do formulário
  //await page.click('input[type="submit"]');

  // Aguardar um pouco para garantir que o formulário seja enviado
  //await page.waitForTimeout(2000);

  //await browser.close();
})();
