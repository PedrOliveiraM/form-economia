<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <script src="./jquery-3.7.1.min.js"></script>
    <link rel="stylesheet" href="./DataTables/datatables.min.css" />
    <script src="./DataTables/datatables.min.js"></script>

    <!-- TOASTI FY -->
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css"
    />
    <script
      type="text/javascript"
      src="https://cdn.jsdelivr.net/npm/toastify-js"
      defer
    ></script>

    <!-- <script src="./script.js" defer></script> -->

    <title>Formulário para requisição de crédito adicional</title>

    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />

    <!-- <link rel="stylesheet" href="./jquery-ui-1.13.3/jquery-ui.min.css" /> -->
    <!-- <link
      rel="stylesheet"
      href="./bootstrap-5.3.3/bootstrap-5.3.3-dist/css/bootstrap-grid.min.css"
    /> -->

    <!-- <script src="./bootstrap-5.3.3/bootstrap-5.3.3-dist/js/bootstrap.min.js"></script>
 -->

    <!-- TESTANDO BOOT ONLINE -->
    <script
      defer
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
      crossorigin="anonymous"
    ></script>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
      crossorigin="anonymous"
    />
    <!-- FIM TESTE BOOT ONLINE -->
  </head>
  <body>
    <div class="container">
      <form id="formulario">
        <div id="apresentacao" class="d-flex flex-column gap-2 mt-5">
          <div class="row d-flex align-items-center">
            <div
              class="col-2 d-flex .justify-content-center align-items-center gap-3"
            >
              <label class="fw-bold" for="sigla-orgao">Órgão:</label>
              <select
                class="form-select"
                name="Órgão"
                aria-label="orgao"
                id="select-sigla-orgao"
              ></select>
            </div>
            <div class="col-10">
              <input
                type="text"
                class="form-control"
                name="Nome do Órgão"
                id="nomeOrgao"
                placeholder="Nome do Órgão selecionado"
                readonly
              />
            </div>
          </div>
          <div class="row">
            <!--  NOVA LINHA -->
            <div class="col-3">
              <label for="responsavel-pelas-informacoes" class="fw-bold"
                >Responsável Pelas Informações</label
              >
            </div>
            <div class="col-5">
              <input
                type="text"
                class="form-control"
                name="responsavel"
                id="input-responsavel-pelas-informacoes"
                placeholder="Digite o nome do responsável"
              />
            </div>
            <div class="col-4 d-flex align-items-center gap-3">
              <label for="whatsapp" class="fw-bold">Whatsapp</label>
              <input
                type="text"
                class="form-control"
                name="whatsapp"
                id="input-whatsapp"
                placeholder="Digite o Whatsapp"
              />
            </div>
          </div>
          <!-- nova linha -->
          <div class="row">
            <div class="col-3">
              <label for="valor-total-suplementacao" class="fw-bold"
                >Valor Total Suplementaçao</label
              >
            </div>
            <div class="col-5">
              <input
                type="text"
                class="form-control"
                name="valorTotalSuplementacao"
                id="input-valor-total-suplementacao"
                placeholder="Digite o valor total da suplementação"
              />
            </div>
            <div class="col-4">
              <input
                type="text"
                class="form-control"
                name="valorTotalSuplementacaoExtenso"
                id="input-valor-total-suplementacao-extenso"
                placeholder="Valor por Extenso"
                readonly
              />
            </div>
          </div>

          <div class="row d-flex align-items-center">
            <div
              class="col-2 d-flex justify-content-center align-items-center gap-3"
            >
              <label for="fonte" class="fw-bold">Fonte:</label>
              <select
                class="form-select"
                name="numeroFonte"
                aria-label="selecione a fonte"
                id="select-fonte"
              ></select>
            </div>
            <div class="col-10">
              <input
                type="text"
                class="form-control"
                name="fonte"
                id="input-fonte-selecionada"
                placeholder="Nome da Fonte"
                readonly
              />
            </div>
          </div>
        </div>
        <!-- Novo Container Objeto -->
        <div id="detalhes_credito">
          <div id="objeto">
            <div class="row">
              <div class="col-12">
                <label for="objeto" class="fw-bold">Objeto</label>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <textarea
                  class="form-control"
                  name="objeto"
                  id="text-area-objeto"
                  placeholder="Informe o objeto"
                ></textarea>
              </div>
            </div>
          </div>
          <!-- JUSTIFICATIVA -->
          <div id="justificativa">
            <div class="row">
              <div class="col-12">
                <label for="justificativa" class="fw-bold">Justificativa</label>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <textarea
                  class="form-control"
                  name="justificativa"
                  id="input-justificativa"
                  placeholder="Informe a justificativa"
                ></textarea>
              </div>
            </div>
          </div>
          <!-- IMPACTOS -->
          <div id="impacto">
            <div class="row">
              <div class="col-12">
                <label for="impacto" class="fw-bold">Impacto</label>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <textarea
                  class="form-control"
                  name="impacto"
                  id="text-area-impacto"
                  placeholder="Informe o impacto do não atendimento do pedido"
                ></textarea>
              </div>
            </div>
          </div>
        </div>

        <!-- INICIO TABELA 1 -->
        <div id="tabela-1">
          <div class="ind-class-orca">
            <table class="table" id="tabela1">
              <thead>
                <tr>
                  <th scope="col">CLASSIFICAÇÃO ORÇAMENTÁRIA</th>
                  <th scope="col">TIPO DE REMANEJAMENTO</th>
                  <th scope="col">VALOR</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody id="container-table1"></tbody>
            </table>
          </div>
        </div>

        <div class="container-btn">
          <button id="btn-add-row-table1" type="button" class="btn btn-primary">
            Adicionar
          </button>
        </div>
        <!-- FIM TABELA 1 -->

        <!-- INICIO TABELA 2 -->
        <div id="tabela-2">
          <div class="detalhamento-pedido">
            <table class="table" id="tabela2">
              <thead>
                <tr>
                  <!-- Tirar aki  <th scope="col">Nº</th>-->
                  <th class="w-5" scope="col">Nº SOLICCIT. SIOFI</th>
                  <th class="w-10" scope="col">COD. AÇÃO</th>
                  <th class="w-25" scope="col">AÇÃO</th>
                  <th class="w-25" scope="col">PRODUTO</th>
                  <th class="w-25" scope="col">INICIATIVA</th>
                  <th class="w-10" scope="col">VALOR A SER SUPLEMENTADO</th>
                  <th class="w-25" scope="col">ORIGEM DO RECURSO</th>
                  <th class="w-15" scope="col">AÇÃO A SER ANULADA</th>
                  <th class="w-15" scope="col">VALOR A SER REDUZIDO</th>
                  <th class="w-10" scope="col"></th>
                </tr>
              </thead>

              <tfoot>
                <tr>
                  <!-- tirar <td></td>  -->

                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <label for="valor-total" class="fw-bold">Valor Total</label>
                  </td>
                  <td>
                    <span class="input-group-text" id="valor-total-tb2"></span>
                  </td>
                  <td colspan="2">
                    <span hidden class="fw-bold text-danger" id="tb-2-aviso"
                      >Valor Diferente do Informado !</span
                    >
                  </td>
                  <td><span hidden id="valor-somatorio"></span></td>
                  <td></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
        <div class="container-btn">
          <button id="btn-add-row-table2" type="button" class="btn btn-primary">
            Adicionar
          </button>
        </div>
        <!-- FIM TABela 2 -->

        <!-- INICIO TABELA 3 -->
        <div id="tabela-3" class="mt-5">
          <div class="elementos-macroprocesso">
            <table class="table" id="tabela3">
              <thead>
                <tr>
                  <th scope="col">Nº</th>
                  <th scope="col">AÇÃO</th>
                  <th scope="col">PRODUTO</th>
                  <th scope="col">META FÍSICA ATUAL</th>
                  <th scope="col">UNIDADE DE MEDIDA</th>
                  <th scope="col">ACUMU-LÁ?</th>
                  <th scope="col">
                    CUSTO ESTIMADO DO PRODUTO (PPA) PARA O ANO
                  </th>
                  <th scope="col">
                    CUSTO UNITÁRIO MEDIO ESTIMADO (PPA) PARA O ANO
                  </th>
                  <th scope="col">SALDO ORÇAMENTÁRIO AUTORIZADO ATUAL</th>
                  <th scope="col">SALDO LIQUIDADO ATUAL</th>
                </tr>
              </thead>
              <tbody id="container-table3">
                <tr>
                  <td><span id="tb3-acao">1</span></td>
                  <td><span class="input-group-text" id="tb3-acao"></span></td>
                  <td>
                    <span class="input-group-text" id="tb3-produto"></span>
                  </td>
                  <td><span class="input-group-text" id="tb3-meta"></span></td>
                  <td>
                    <span class="input-group-text" id="tb3-unidade"></span>
                  </td>
                  <td>
                    <span class="input-group-text" id="tb3-acumula"></span>
                  </td>
                  <td>
                    <span
                      class="input-group-text"
                      id="tb3-custo-estimado"
                    ></span>
                  </td>
                  <td>
                    <span
                      class="input-group-text"
                      id="tb3-custo-unitario"
                    ></span>
                  </td>
                  <td>
                    <span
                      class="input-group-text"
                      id="tb3-saldo-orcamentario"
                    ></span>
                  </td>
                  <td>
                    <span
                      class="input-group-text"
                      id="tb3-saldo-liquidado"
                    ></span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!-- FIM TABELA 3 -->

        <!-- INÍCIO TABELA 4 -->
        <div id="tabela-4" class="mt-5">
          <div class="efeitos-pedido">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Nº</th>
                  <th scope="col">AÇÃO</th>
                  <th scope="col">PRODUTO</th>
                  <th scope="col">META FÍSICA PROPOSTA</th>
                  <th scope="col">% ALTERAÇÃO DA META FÍSICA</th>
                  <th scope="col">CUSTO ESTIMADO DO PRODUTO SUPLEMENTADO</th>
                  <th scope="col">
                    CUSTO UNITÁRIO MÉDIO ESTIMADO SUPLEMENTADO
                  </th>
                  <th scope="col">% SUPLEMENTADO X CUSTO ESTIMADO</th>
                  <th scope="col">% SUPLEMENTADO X SALDO ORÇÃMENTÁRIO</th>
                  <th scope="col">% LIQUIDADO X SALDO ORÇAMENTÁRIO</th>
                </tr>
              </thead>
              <tbody id="container-table4">
                <tr>
                  <td><span id="row-1-1">1</span></td>
                  <td>
                    <span class="input-group-text" id="tb4-acao"></span>
                  </td>
                  <td>
                    <span class="input-group-text" id="tb4-produto"></span>
                  </td>
                  <td>
                    <span
                      class="input-group-text"
                      id="tb4-meta-fisi-proposta"
                    ></span>
                  </td>
                  <td>
                    <span
                      class="input-group-text"
                      id="tb4-alte-meta-fisica"
                    ></span>
                  </td>
                  <td>
                    <span
                      class="input-group-text"
                      id="tb4-custo-esti-produto"
                    ></span>
                  </td>
                  <td>
                    <span
                      class="input-group-text"
                      id="tb4-custo-unit-medio"
                    ></span>
                  </td>
                  <td>
                    <span
                      class="input-group-text"
                      id="tb4-suple-custo-estimado"
                    ></span>
                  </td>
                  <td>
                    <span
                      class="input-group-text"
                      id="tb4-suple-saldo-orcamentario"
                    ></span>
                  </td>
                  <td>
                    <span
                      class="input-group-text"
                      id="tb4-liqui-saldo-orcamentario"
                    ></span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!-- FIM TABELA 4 -->
      </form>
    </div>
    <div class="d-flex justify-content-center mt-5 mb-5 gap-3">
      <!-- botao de download -->
      <button id="btn-download" class="btn btn-primary px-5">Download</button>

      <!-- botao enviar -->
      <button id="btn-preencher" class="btn btn-success px-5">PREENCHER</button>
      <button id="btn-gerar-pdf" class="btn btn-warning px-5">GERAR PDF</button>
    </div>
  </body>

  <!--
    
  <script src="./script.js"></script>
   -->
  <script>
    // JSON para PPA
    const lista_ppa = {
      2033: [
        "2033 - COTA PARA O EXERCÍCIO DA ATIVIDADE PARLAMENTAR - CEAP - ALEGO",
        "19387 - GESTÃO DEMOCRÁTICA E TRANSPARENTE, GOVERNANÇA E RESPONSABILIDADE SOCIAL DO PODER LEGISLATIVO",
        "10138 - GESTÃO DEMOCRÁTICA E TRANSPARENTE, GOVERNANÇA E RESPONSABILIDADE SOCIAL DO PODER LEGISLATIVO",
        "ALEGO",
      ],
      2325: [
        "2325 - GESTÃO DA ESTRUTURA DE TECNOLOGIA DA INFORMAÇÃO",
        "17700 - SOLUÇÃO DE TI",
        "10013 - APERFEIÇOAMENTO DA GESTÃO ORGANIZACIONAL FOCADA EM TECNOLOGIA DA INFORMAÇÃO",
        "TCE",
      ],
      3148: [
        "3148 - CONSTRUÇÃO DA SEDE DA ESCOLA DE CONTAS DO TCE-GO",
        "18269 - SEDE DA ESCOLA DE CONTAS DO TCE-GO",
        "10053 - CONSTRUÇÃO DA SEDE DA ESCOLA DE CONTAS DO TCE-GO",
        "TCE",
      ],
      2002: [
        "2002 - DESENVOLVIMENTO DE COMPETÊNCIAS DE MEMBROS, SERVIDORES, JURISDICIONADOS E CONTROLADORES",
        "18280 - ATIVIDADE DE CAPACITAÇÃO",
        "10219 - PROMOÇÃO E DIFUSÃO DA CAPACITAÇÃO E DO CONHECIMENTO",
        "TCE",
      ],
      2008: [
        "2008 - AUXÍLIO E FISCALIZAÇÃO JUNTO AO PODER PÚBLICO MUNICIPAL",
        "18214 - PRODUTO DE GESTÃO DE INICIATIVA DE SERVIÇOS DO TCMGO",
        "10137 - GESTÃO DA INICIATIVA DE SERVIÇOS DO TCMGO",
        "TCM",
      ],
      3149: [
        "3149 - CONSTRUÇÃO DE SEDE DO INSTITUTO ESCOLA DE CONTAS",
        "13620 - OBRA CIVIL GERENCIADA ",
        "10154 - IMPLANTAÇÃO DO INSTITUTO ESCOLA DE CONTAS",
        "TCM",
      ],
      3150: [
        "3150 - REFORMA E AMPLIAÇÃO DA NOVA SEDE DO TCMGO",
        "18504 - REFORMA E AMPLIAÇÃO DA NOVA SEDE DO TCMGO",
        "10246 - REFORMA E AMPLIAÇÃO DA NOVA SEDE DO TCMGO",
        "TCM",
      ],
      2327: [
        "2327 - GESTÃO DA INICIATIVA DE AGILIDADE E PRODUTIVIDADE NA PRESTAÇÃO JURISDICIONAL",
        "18080 - GESTÃO DA INICIATIVA AGILIDADE E PRODUTIVIDADE NA PRESTAÇÃO JURISDICIONAL",
        "10004 - AGILIDADE E PRODUTIVIDADE NA PRESTAÇÃO JURISDICIONAL",
        "TJGO",
      ],
      2326: [
        "2326 - CAPACITAÇÃO DE MAGISTRADOS E SERVIDORES",
        "18081 - MAGISTRADOS E SERVIDORES CAPACITADOS",
        "10004 - AGILIDADE E PRODUTIVIDADE NA PRESTAÇÃO JURISDICIONAL",
        "TJGO",
      ],
      3151: [
        "3151 - CONSTRUÇÃO / AQUISIÇÃO / AMPLIAÇÃO DA SEDE DO MINISTÉRIO PÚBLICO",
        "18255 - SEDES DO MINISTÉRIO PÚBLICO CONSTRUÍDAS/ADQUIRIDAS/AMPLIADAS",
        "10173 - MELHORIA DA ESTRUTURA DO MINISTÉRIO PÚBLICO",
        "MPGO",
      ],
      3152: [
        "3152 - CONSTRUÇÃO DA SEDE DA DEFENSORIA PÚBLICA",
        "17600 - PROJETOS PARA CONSTRUÇÃO DA SEDE REALIZADOS",
        "10001 - ACESSO À JUSTIÇA AOS NECESSITADOS, DE FORMA INTEGRAL E GRATUITA",
        "DPE",
      ],
      2328: [
        "2328 - GESTÃO E MANUTENÇÃO DAS UNIDADES DE ATENDIMENTO",
        "17601 - GESTÃO DAS UNIDADES DE ATENDIMENTO CONSOLIDADAS",
        "10001 - ACESSO À JUSTIÇA AOS NECESSITADOS, DE FORMA INTEGRAL E GRATUITA",
        "DPE",
      ],
      2329: [
        "2329 - REALIZAÇÃO DE ATIVIDADE ITINERANTE",
        "17782 - ATIVIDADE ITINERANTE REALIZADA",
        "10001 - ACESSO À JUSTIÇA AOS NECESSITADOS, DE FORMA INTEGRAL E GRATUITA",
        "DPE",
      ],
      3153: [
        "3153 - INSTALAÇÃO DE NOVAS UNIDADES DE ATENDIMENTO",
        "17982 - UNIDADE DE ATENDIMENTO INSTALADA",
        "10001 - ACESSO À JUSTIÇA AOS NECESSITADOS, DE FORMA INTEGRAL E GRATUITA",
        "DPE",
      ],
      3119: [
        "3119 - PUBLICIDADE DE UTILIDADE PÚBLICA",
        "10897 - CAMPANHA DE UTILIDADE PÚBLICA REALIZADA",
        "10224 - PROMOVER A PUBLICIDADE DAS AÇÕES DE GOVERNO",
        "SECOM",
      ],
      3019: [
        "3019 - PUBLICIZAÇÃO DAS AÇÕES DO GOVERNO",
        "10898 - CAMPANHA DE PUBLICIDADE INSTITUCIONAL REALIZADA",
        "10224 - PROMOVER A PUBLICIDADE DAS AÇÕES DE GOVERNO",
        "SECOM",
      ],
      2470: [
        "2470 - AMPLIAÇÃO DA DIVULGAÇÃO DE INFORMAÇÕES CULTURAIS E INSTITUCIONAIS DO ESTADO DE GOIÁS",
        "18295 - COMUNICAÇÃO PÚBLICA PARA TRANSPARÊNCIA E EFETIVIDADE FORTALECIDA",
        "10011 - AMPLIAR A DIVULGAÇÃO DE INFORMAÇÕES CULTURAIS E INSTITUCIONAIS DO ESTADO DE GOIÁS",
        "ABC",
      ],
      2471: [
        "2471 - DESENVOLVIMENTO E IMPLEMENTAÇÃO DE RECURSOS EM PLATAFORMA DIGITAL DE COMUNICAÇÃO PÚBLICA",
        "18294 - PLATAFORMA INTERATIVA DE PARTICIPAÇÃO CIDADÃ AMPLIADA",
        "10106 - FERRAMENTA INTERATIVA DE PARTICIPAÇÃO CIDADÃ",
        "ABC",
      ],
      2528: [
        "2528 - GESTÃO DA INICIATIVA DE AUMENTO DE RESOLUÇÕES CONSENSUAIS DE CONFLITOS NA CCMA",
        "18539 - PRODUTO  DE GESTÃO DA INICIATIVA DE AUMENTO DE RESOLUÇÕES CONSENSUAIS DE CONFLITOS NA CCMA",
        "10034 - AUMENTO DE RESOLUÇÕES CONSENSUAIS DE CONFLITOS PELA CCMA",
        "PGE",
      ],
      2529: [
        "2529 - GESTÃO DA INICIATIVA DE MELHORIA DA INFRAEST. E DO SERVIÇO DE INSCR. E COBRANÇA DA DÍVIDA ATIVA NÃO TRIBUTÁRIA",
        "18574 - PRODUTO DE GESTÃO DA INICIATIVA DE MELHORIA DA INFRAESTRUTURA E DO SERVIÇO DE INSCRIÇÃO E COBRANÇA DA DÍVIDA ATIVA NÃO TRIBUTÁRIA",
        "10175 - MELHORIA DA INFRAESTRUTURA E DO SERVIÇO DE INSCRIÇÃO E COBRANÇA DA DÍVIDA ATIVA NÃO TRIBUTÁRIA",
        "PGE",
      ],
      2330: [
        "2330 - APRIMORAMENTO DO COMPLIANCE PÚBLICO",
        "18032 - GESTÃO DA INICIATIVA DE APRIMORAMENTO DO COMPLIANCE PÚBLICO POR MEIO DE SERVIÇOS DE CONSULTORIA E AVALIAÇÃO PARA ÓRGÃOS E ENTIDADES",
        "10017 - APRIMORAMENTO DO COMPLIANCE PÚBLICO POR MEIO DE SERVIÇOS DE CONSULTORIA E AVALIAÇÃO PARA ÓRGÃOS E ENTIDADES",
        "CGE",
      ],
      2050: [
        "2050 - GOVERNO ABERTO E PARTICIPAÇÃO CIDADÃ",
        "18145 - GESTÃO DA INICIATIVA DE PROMOÇÃO DA POLÍTICA DE GOVERNO ABERTO E PARTICIPAÇÃO CIDADÃ",
        "10216 - PROMOÇÃO DA POLÍTICA DE GOVERNO ABERTO E PARTICIPAÇÃO CIDADÃ",
        "CGE",
      ],
      3248: [
        "3248 - ELABORAÇÃO DO PLANO ESTADUAL DE MÉDIO E LONGO PRAZO",
        "18626 - PLANO ESTADUAL DE MÉDIO E LONGO PRAZO ELABORADO",
        "10007 - AMPLIAÇÃO DA EFICIÊNCIA E DA QUALIDADE DAS FINANÇAS, DO PLANEJAMENTO E DO GASTO PÚBLICO",
        "ECONOMIA",
      ],
      3249: [
        "3249 - IMPLANTAÇÃO DO SISTEMA ESTRUTURADOR DE PLANEJAMENTO, ORÇAMENTO E FINANÇAS",
        "19179 - SOLUÇÃO PARA ESTRUTURAÇÃO DA REDE DE PLANEJAMENTO, ORÇAMENTO E TESOURO IMPLANTADA",
        "10007 - AMPLIAÇÃO DA EFICIÊNCIA E DA QUALIDADE DAS FINANÇAS, DO PLANEJAMENTO E DO GASTO PÚBLICO",
        "ECONOMIA",
      ],
      3250: [
        "3250 - MODERNIZAÇÃO DA FISCALIZAÇÃO DE MERCADORIAS EM TRÂNSITO",
        "18167 - FISCALIZAÇÃO DE MERCADORIAS EM TRÂNSITO MODERNIZADA",
        "10033 - AUMENTO DA ARRECADAÇÃO E MODERNIZAÇÃO TRIBUTÁRIA ESTADUAL",
        "ECONOMIA",
      ],
      2435: [
        "2435 - MODERNIZAÇÃO E INSTITUCIONALIZAÇÃO DA SECRETARIA DA ECONOMIA",
        "19155 - GESTÃO DA INICIATIVA DE INSTITUCIONALIZAÇÃO E MODERNIZAÇÃO IMPLANTADA",
        "10163 - INSTITUCIONALIZAÇÃO, AUTOMATIZAÇÃO E APARELHAMENTO DA SECRETARIA",
        "ECONOMIA",
      ],
      2437: [
        "2437 - MELHORIA DE METODOLOGIAS E PROCESSOS DE GESTÃO DE PESSOAS",
        "18298 - GESTÃO DE PESSOAS OTIMIZADA",
        "10185 - M.O.V.E. MODERNIZAR, OPORTUNIZAR, VALORIZAR E ENVOLVER",
        "SEAD",
      ],
      2188: [
        "2188 - PROJETOS SOCIAIS A CARGO DE ORGANIZAÇÕES SOCIAIS",
        "18249 - GESTÃO DOS SERVIÇOS SOCIAIS AO CIDADÃO E DE FOMENTO AO VOLUNTARIADO",
        "10187 - OFERTA DE PROGRAMAS SOCIAIS",
        "SEAD",
      ],
      2187: [
        "2187 - RESTAURANTE DO BEM",
        "18254 - REFEIÇÃO SERVIDA NO RESTAURANTE DO BEM",
        "10187 - OFERTA DE PROGRAMAS SOCIAIS",
        "SEAD",
      ],
      2186: [
        "2186 - UNIVERSITÁRIO DO BEM",
        "18263 - ALUNO BENEFICIADO COM PROGRAMA UNIVERSITÁRIO DO BEM - PROBEM",
        "10187 - OFERTA DE PROGRAMAS SOCIAIS",
        "SEAD",
      ],
      3251: [
        "3251 - GESTÃO DE COMPRAS, PATRIMÔNIO, LOGÍSTICA",
        "18316 - GESTÃO DE COMPRAS, PATRIMÔNIO, LOGÍSTICA SISTEMATIZADOS",
        "10003 - ADMINSTRAÇÃO/ESTRUTURAÇÃO DE PATRIMÔNIO, COMPRAS, LOGÍSTICA E DOCUMENTAL DO ESTADO",
        "SEAD",
      ],
      2436: [
        "2436 - GESTÃO DO ATENDIMENTO AO CIDADÃO",
        "18300 - GESTÃO DO ATENDIMENTO AO CIDADÃO",
        "10161 - INOVAÇÃO E TRANSFORMAÇÃO DA GESTÃO E DOS SERVIÇOS PÚBLICOS",
        "SEAD",
      ],
      2472: [
        "2472 - GESTÃO DO MONITORAMENTO DOS SERVIÇOS PÚBLICOS OBJETO DE CONCESSÃO, PERMISSÃO, AUTORIZAÇÃO OU CONVÊNIO",
        "18042 - GESTÃO DO MONITORAMENTO DA PRESTAÇÃO DOS SERVIÇOS PÚBLICOS OBJETOS DE CONCESSÕES, PERMISSÕES, AUTORIZAÇÕES OU CONVÊNIOS",
        "10183 - MONITORAMENTO DA PRESTAÇÃO DOS SERVIÇOS PÚBLICOS OBJETOS DE CONCESSÕES, PERMISSÕES, AUTORIZAÇÕES OU CONVÊNIOS",
        "AGR",
      ],
      2134: [
        "2134 - ASSISTÊNCIA JURÍDICA JUDICIAL E EXTRAJUDICIAL",
        "9040 - SERVIÇO DE ASSISTÊNCIA JUDICIAL E EXTRAJUDICIAL PRESTADO",
        "10023 - ASSISTÊNCIA JUDICIAL DATIVA AOS HIPOSSUFICIENTES",
        "SERINT",
      ],
      2332: [
        "2332 - GESTÃO DA INICIATIVA DE APRIMORAMENTO DOS RECURSOS NATURAIS",
        "18048 - GESTÃO DA INICIATIVA DE APRIMORAMENTO DA GESTÃO DOS RECURSOS NATURAIS",
        "10016 - APRIMORAMENTO DA GESTÃO DOS RECURSOS NATURAIS",
        "SEMAD",
      ],
      3119: [
        "3119 - PUBLICIDADE DE UTILIDADE PÚBLICA",
        "18048 - GESTÃO DA INICIATIVA DE APRIMORAMENTO DA GESTÃO DOS RECURSOS NATURAIS",
        "10016 - APRIMORAMENTO DA GESTÃO DOS RECURSOS NATURAIS",
        "SEMAD",
      ],
      3157: [
        "3157 - CONSTRUÇÃO DA ESCOLA DE MEIO AMBIENTE",
        "18264 - ESCOLA DE MEIO AMBIENTE CONSTRUÍDA",
        "10052 - CONSTRUÇÃO DA ESCOLA DE MEIO AMBIENTE",
        "SEMAD",
      ],
      2331: [
        "2331 - GESTÃO DA ESCOLA DE MEIO AMBIENTE",
        "18132 - GESTÃO DA INICIATIVA ESCOLA DE MEIO AMBIENTE",
        "10084 - ESCOLA DE MEIO AMBIENTE",
        "SEMAD",
      ],
      2524: [
        "2524 - ELABORAÇÃO DE ESTUDOS PARA VIABILIZAR A CONFORMIDADE CLIMÁTICA",
        "18098 - CONFORMIDADE CLIMÁTICA ESTADUAL E MERCADO DE CARBONO JURISDICIONAL IMPLANTADOS",
        "10122 - FORTALECER A RESILIÊNCIA DE GOIÁS AOS IMPACTOS DAS MUDANÇAS CLIMÁTICAS",
        "SEMAD",
      ],
      2525: [
        "2525 - ELABORAÇÃO DE ESTUDOS PARA IMPLANTAÇÃO DOS PAGAMENTOS DOS SERVIÇOS AMBIENTAIS",
        "18099 - PAGAMENTO PELOS SERVIÇOS AMBIENTAIS IMPLANTADO",
        "10122 - FORTALECER A RESILIÊNCIA DE GOIÁS AOS IMPACTOS DAS MUDANÇAS CLIMÁTICAS",
        "SEMAD",
      ],
      2526: [
        "2526 - ELABORAÇÃO DE ESTUDOS PARA CRIAÇÃO DA POLÍTICA DO DESMATAMENTO EVITADO",
        "18140 - POLÍTICA DO DESMATAMENTO EVITADO IMPLANTADA",
        "10122 - FORTALECER A RESILIÊNCIA DE GOIÁS AOS IMPACTOS DAS MUDANÇAS CLIMÁTICAS",
        "SEMAD",
      ],
      3164: [
        "3164 - REGULARIZAÇÃO FUNDIÁRIA EM UNIDADE DE CONSERVAÇÃO",
        "18115 - REGULARIZAÇÃO FUNDIÁRIA EM UNIDADE DE CONSERVAÇÃO REALIZADA",
        "10125 - FORTALECIMENTO DA CONSERVAÇÃO DOS RECURSOS NATURAIS E DA BIODIVERSIDADE",
        "SEMAD",
      ],
      3155: [
        "3155 - CONCESSÃO DE PARQUES ESTADUAIS",
        "18116 - CONCESSÃO DE PARQUES ESTADUAIS REALIZADAS",
        "10125 - FORTALECIMENTO DA CONSERVAÇÃO DOS RECURSOS NATURAIS E DA BIODIVERSIDADE",
        "SEMAD",
      ],
      3287: [
        "3287 - ELABORAÇÃO DO PLANO ESTADUAL DE CONSERVAÇÃO DA BIODIVERSIDADE",
        "18117 - PLANO ESTADUAL DE CONSERVAÇÃO DA BIODIVERSIDADE ELABORADO",
        "10125 - FORTALECIMENTO DA CONSERVAÇÃO DOS RECURSOS NATURAIS E DA BIODIVERSIDADE",
        "SEMAD",
      ],
      2333: [
        "2333 - GESTÃO DA INICIATIVA DE FORTALECIMENTO DA CONSERVAÇÃO DOS RECURSOS NATURAIS E DA BIODIVERSIDADE",
        "18118 - GESTÃO DA INICIATIVA DE FORTALECIMENTO DA CONSERVAÇÃO DOS RECURSOS NATURAIS E DA BIODIVERSIDADE",
        "10125 - FORTALECIMENTO DA CONSERVAÇÃO DOS RECURSOS NATURAIS E DA BIODIVERSIDADE",
        "SEMAD",
      ],
      2336: [
        "2336 - REALIZAÇÃO DE AÇÕES DE SEGURANÇA HÍDRICA",
        "18083 - AÇÕES DE SEGURANÇA HÍDRICA REALIZADA",
        "10127 - FORTALECIMENTO DA GESTÃO E CONTROLE DA POLÍTICA DE RECURSOS HÍDRICOS",
        "SEMAD",
      ],
      3288: [
        "3288 - ELABORAÇÃO DOS PLANOS DE BACIAS HIDROGRÁFICAS E ESTUDOS DE ENQUADRAMENTO",
        "18084 - PLANOS DE BACIAS HIDROGRÁFICAS E ESTUDOS DE ENQUADRAMENTO ELABORADOS",
        "10127 - FORTALECIMENTO DA GESTÃO E CONTROLE DA POLÍTICA DE RECURSOS HÍDRICOS",
        "SEMAD",
      ],
      2334: [
        "2334 - GESTÃO DA INICIATIVA DE FORTALECIMENTO DA POLÍTICA DE RECURSOS HÍDRICOS",
        "18085 - GESTÃO DA INICIATIVA DE FORTALECIMENTO DA POLÍTICA DE RECURSOS HÍDRICOS",
        "10127 - FORTALECIMENTO DA GESTÃO E CONTROLE DA POLÍTICA DE RECURSOS HÍDRICOS",
        "SEMAD",
      ],
      2527: [
        "2527 - ELABORAÇÃO DE ESTUDOS PARA A CARACTERIZAÇÃO DE AQUÍFEROS SUBTERRÂNEOS",
        "18086 - CARACTERIZAÇÃO DOS PRINCIPAIS AQUÍFEROS SUBTERRÂNEOS DO ESTADO DE GOIÁS",
        "10127 - FORTALECIMENTO DA GESTÃO E CONTROLE DA POLÍTICA DE RECURSOS HÍDRICOS",
        "SEMAD",
      ],
      3159: [
        "3159 - ATUALIZAÇÃO DO PLANO ESTADUAL DE RECURSOS HÍDRICOS",
        "18087 - PLANO DE RECURSOS HÍDRICOS ATUALIZADO",
        "10127 - FORTALECIMENTO DA GESTÃO E CONTROLE DA POLÍTICA DE RECURSOS HÍDRICOS",
        "SEMAD",
      ],
      2335: [
        "2335 - GESTÃO DA INICIATIVA DE FORTALECIMENTO E CONTROLE DE POLÍTICAS PÚBLICAS DE MEIO AMBIENTE",
        "18100 - GESTÃO DA INICIATIVA DE FORTALECIMENTO DA GESTÃO E CONTROLE DE POLÍTICAS PÚBLICAS DE MEIO AMBIENTE",
        "10128 - FORTALECIMENTO DA GESTÃO E CONTROLE DE POLÍTICAS PÚBLICAS DE MEIO AMBIENTE",
        "SEMAD",
      ],
      3158: [
        "3158 - CONSTRUÇÃO DE INFRAESTRUTURA PARA GERENCIAMENTO E TRATAMENTO DE RESÍDUOS SÓLIDOS",
        "18125 - ECOPONTOS CONSTRUÍDOS",
        "10126 - FORTALECIMENTO DA FORMULAÇÃO E GESTÃO DA POLÍTICA DE SANEAMENTO BÁSICO",
        "SEMAD",
      ],
      3244: [
        "3244 - IMPLANTAÇÃO DE UNIDADES REGIONAIS PARA MANEJO DE RESÍDUOS SÓLIDOS - URBANO",
        "18126 - UNIDADES REGIONAIS PARA A PRESTAÇÃO DO SERVIÇO DE MANEJO DE RESÍDUOS SÓLIDOS IMPLANTADAS",
        "10126 - FORTALECIMENTO DA FORMULAÇÃO E GESTÃO DA POLÍTICA DE SANEAMENTO BÁSICO",
        "SEMAD",
      ],
      3245: [
        "3245 - MODELAGEM DE CONCESSÃO DO SERVIÇO DE TRATAMENTO DE RESÍDUOS SÓLIDOS - URBANO",
        "18127 - MODELAGEM DE CONCESSÃO DE RESÍDUOS SÓLIDOS REALIZADA",
        "10126 - FORTALECIMENTO DA FORMULAÇÃO E GESTÃO DA POLÍTICA DE SANEAMENTO BÁSICO",
        "SEMAD",
      ],
      3165: [
        "3165 - EXPANSÃO DA COBERTURA DO SISTEMA DE ABASTECIMENTO DE ÁGUA",
        "19284 - UNIDADES IMOBILIÁRIAS ATENDIDAS COM ABASTECIMENTO DE ÁGUA",
        "10102 - EXPANSÃO DA COBERTURA DO SISTEMA DE ABASTECIMENTO DE ÁGUA (SAA)",
        "SANEAGO",
      ],
      3166: [
        "3166 - EXPANSÃO DA COBERTURA DO SISTEMA DE ESGOTAMENTO SANITÁRIO",
        "19285 - UNIDADES IMOBILIÁRIAS ATENDIDAS COM ESGOTAMENTO SANITÁRIO",
        "10103 - EXPANSÃO DA COBERTURA DO SISTEMA DE ESGOTAMENTO SANITÁRIO",
        "SANEAGO",
      ],
      2476: [
        "2476 - ALFAMAIS GOIÁS - ENSINO FUNDAMENTAL I - PRÊMIO LEIA",
        "16423 - ESCOLA DO ENSINO FUNDAMENTAL I BENEFICIADA COM PRÊMIO LEIA",
        "10005 - ALFAMAIS GOIÁS",
        "SEDUC",
      ],
      2478: [
        "2478 - ALFAMAIS GOIÁS - ENSINO FUNDAMENTAL I - PROFISSIONAL BENEFICIADO COM BOLSA",
        "18348 - PROFISSIONAL DA EDUCAÇÃO FUNDAMENTAL I BENEFICIADO COM BOLSA DE APOIO TÉCNICO - ALFAMAIS GOIAS",
        "10005 - ALFAMAIS GOIÁS",
        "SEDUC",
      ],
      2480: [
        "2480 - GESTÃO DA INICIATIVA ALFAMAIS GOIÁS",
        "18349 - GESTÃO DA INICIATIVA ALFAMAIS GOIÁS.",
        "10005 - ALFAMAIS GOIÁS",
        "SEDUC",
      ],
      2477: [
        "2477 - ALFAMAIS GOIÁS - ENSINO FUNDAMENTAL I - KIT ESCOLAR",
        "18360 - ALUNO DA EDUCAÇÃO FUNDAMENTAL I BENEFICIADO COM KIT ESCOLAR - ALFAMAIS GOIÁS",
        "10005 - ALFAMAIS GOIÁS",
        "SEDUC",
      ],
      2479: [
        "2479 - ALFAMAIS GOIÁS - EDUCAÇÃO INFANTIL - KIT ESCOLAR",
        "18402 - ALUNO DA EDUCAÇÃO INFANTIL BENEFICIADO COM KIT ESCOLAR - ALFAMAIS GOIÁS",
        "10005 - ALFAMAIS GOIÁS",
        "SEDUC",
      ],
      2545: [
        "2545 - ALFAMAIS GOIAS - EDUCAÇÃO INFANTIL - PROFISSIONAL BENEFICIADO COM BOLSA",
        "18420 - PROFISSIONAL DA EDUCAÇÃO INFANTIL BENEFICIADO COM BOLSA DE APOIO TÉCNICO - ALFAMAIS GOIAS",
        "10005 - ALFAMAIS GOIÁS",
        "SEDUC",
      ],
      2481: [
        "2481 - DISPONIBILIZAÇÃO DE CHROMEBOOKS - INCLUSÃO DIGITAL",
        "18568 - ALUNO BENEFICIADO COM EMPRÉSTIMO DE CHROMEBOOKS",
        "10077 - EDUCAÇÃO TECNODIGITAL - DESENVOLVENDO COMPETÊNCIAS, CONECTANDO CONHECIMENTOS",
        "SEDUC",
      ],
      2482: [
        "2482 - IMPLEMENTAÇÃO DE REALIDADE VIRTUAL NAS ESCOLAS",
        "18590 - ESCOLA BENEFICIADA COM KIT DE LABORATÓRIO MÓVEL - ÓCULOS DE REALIDADE VIRTUAL",
        "10077 - EDUCAÇÃO TECNODIGITAL - DESENVOLVENDO COMPETÊNCIAS, CONECTANDO CONHECIMENTOS",
        "SEDUC",
      ],
      2546: [
        "2546 - GESTÃO DA INICIATIVA EDUCAÇÃO TECNODIGITAL - DESENVOLVENDO COMPETÊNCIAS, CONECTANDO CONHECIMENTOS",
        "18610 - GESTÃO DA INICIATIVA EDUCAÇÃO TECNODIGITAL - DESENVOLVENDO COMPETÊNCIAS, CONECTANDO CONHECIMENTOS.",
        "10077 - EDUCAÇÃO TECNODIGITAL - DESENVOLVENDO COMPETÊNCIAS, CONECTANDO CONHECIMENTOS",
        "SEDUC",
      ],
      2483: [
        "2483 - DISPONIBILIZAÇÃO DE LOUSA DIGITAL",
        "18647 - UNIDADE ESCOLAR BENEFICIADA COM LOUSA DIGITAL ",
        "10077 - EDUCAÇÃO TECNODIGITAL - DESENVOLVENDO COMPETÊNCIAS, CONECTANDO CONHECIMENTOS",
        "SEDUC",
      ],
      2473: [
        "2473 - CORREÇÃO DE FLUXO - IDADE / ANO ESCOLAR",
        "18322 - ALUNO ATENDIDO COM CORREÇÃO DE FLUXO / IDADE / ANO ESCOLAR",
        "10229 - PROMOVER O ACESSO DA POPULAÇÃO À EDUCAÇÃO BÁSICA COM EQÜIDADE, QUALIDADE E VALORIZAÇÃO DA INCLUSÃO",
        "SEDUC",
      ],
      2292: [
        "2292 - FORNECIMENTO DE UNIFORME ESCOLAR PARA ALUNOS DA EDUCAÇÃO DE JOVENS E ADULTOS",
        "18323 - ALUNO BENEFICIADO COM UNIFORME ESCOLAR",
        "10229 - PROMOVER O ACESSO DA POPULAÇÃO À EDUCAÇÃO BÁSICA COM EQÜIDADE, QUALIDADE E VALORIZAÇÃO DA INCLUSÃO",
        "SEDUC",
      ],
      2293: [
        "2293 - FORNECIMENTO DE UNIFORME ESCOLAR PARA ALUNOS DA EDUCAÇÃO ESPECIAL",
        "18323 - ALUNO BENEFICIADO COM UNIFORME ESCOLAR",
        "10229 - PROMOVER O ACESSO DA POPULAÇÃO À EDUCAÇÃO BÁSICA COM EQÜIDADE, QUALIDADE E VALORIZAÇÃO DA INCLUSÃO",
        "SEDUC",
      ],
      2294: [
        "2294 - FORNECIMENTO DE UNIFORME ESCOLAR PARA ALUNOS DO ENSINO FUNDAMENTAL",
        "18323 - ALUNO BENEFICIADO COM UNIFORME ESCOLAR",
        "10229 - PROMOVER O ACESSO DA POPULAÇÃO À EDUCAÇÃO BÁSICA COM EQÜIDADE, QUALIDADE E VALORIZAÇÃO DA INCLUSÃO",
        "SEDUC",
      ],
      2295: [
        "2295 - FORNECIMENTO DE UNIFORME ESCOLAR PARA ALUNOS DO ENSINO MÉDIO",
        "18323 - ALUNO BENEFICIADO COM UNIFORME ESCOLAR",
        "10229 - PROMOVER O ACESSO DA POPULAÇÃO À EDUCAÇÃO BÁSICA COM EQÜIDADE, QUALIDADE E VALORIZAÇÃO DA INCLUSÃO",
        "SEDUC",
      ],
      2287: [
        "2287 - FORNECIMENTO DE MATERIAL ESCOLAR PARA ALUNOS DA EDUCAÇÃO DE JOVENS E ADULTOS",
        "18324 - ALUNO BENEFICIADO COM MATERIAL ESCOLAR",
        "10229 - PROMOVER O ACESSO DA POPULAÇÃO À EDUCAÇÃO BÁSICA COM EQÜIDADE, QUALIDADE E VALORIZAÇÃO DA INCLUSÃO",
        "SEDUC",
      ],
      2288: [
        "2288 - FORNECIMENTO DE MATERIAL ESCOLAR PARA ALUNOS DA EDUCAÇÃO ESPECIAL",
        "18324 - ALUNO BENEFICIADO COM MATERIAL ESCOLAR",
        "10229 - PROMOVER O ACESSO DA POPULAÇÃO À EDUCAÇÃO BÁSICA COM EQÜIDADE, QUALIDADE E VALORIZAÇÃO DA INCLUSÃO",
        "SEDUC",
      ],
      2289: [
        "2289 - FORNECIMENTO DE MATERIAL ESCOLAR PARA ALUNOS DO ENSINO FUNDAMENTAL",
        "18324 - ALUNO BENEFICIADO COM MATERIAL ESCOLAR",
        "10229 - PROMOVER O ACESSO DA POPULAÇÃO À EDUCAÇÃO BÁSICA COM EQÜIDADE, QUALIDADE E VALORIZAÇÃO DA INCLUSÃO",
        "SEDUC",
      ],
      2290: [
        "2290 - FORNECIMENTO DE MATERIAL ESCOLAR PARA ALUNOS DO ENSINO MÉDIO",
        "18324 - ALUNO BENEFICIADO COM MATERIAL ESCOLAR",
        "10229 - PROMOVER O ACESSO DA POPULAÇÃO À EDUCAÇÃO BÁSICA COM EQÜIDADE, QUALIDADE E VALORIZAÇÃO DA INCLUSÃO",
        "SEDUC",
      ],
      2547: [
        "2547 - REPASSE DE RECURSOS ÀS UNIDADES JURISDICIONADAS",
        "18325 - UNIDADES JURISDICIONADAS ATENDIDAS COM REPASSE DE RECURSOS",
        "10229 - PROMOVER O ACESSO DA POPULAÇÃO À EDUCAÇÃO BÁSICA COM EQÜIDADE, QUALIDADE E VALORIZAÇÃO DA INCLUSÃO",
        "SEDUC",
      ],
      2249: [
        "2249 - PROMOÇÃO DA DIGNIDADE MENSTRUAL DA MULHER - SEDUC",
        "18342 - ALUNA BENEFICIADA COM ABSORVENTE",
        "10229 - PROMOVER O ACESSO DA POPULAÇÃO À EDUCAÇÃO BÁSICA COM EQÜIDADE, QUALIDADE E VALORIZAÇÃO DA INCLUSÃO",
        "SEDUC",
      ],
      2474: [
        "2474 - GESTÃO DA INICIATIVA PROMOVER ACESSO DA POPULAÇÃO À EDUCAÇÃO COM EQUIDADE,QUALIDADE E VALORIZAÇÃO DA INCLUSÃO",
        "18354 - GESTÃO DA INICIATIVA  PROMOVER O ACESSO DA POPULAÇÃO À EDUCAÇÃO COM EQÜIDADE, QUALIDADE E VALORIZAÇÃO DA DIVERSIDADE",
        "10229 - PROMOVER O ACESSO DA POPULAÇÃO À EDUCAÇÃO BÁSICA COM EQÜIDADE, QUALIDADE E VALORIZAÇÃO DA INCLUSÃO",
        "SEDUC",
      ],
      2475: [
        "2475 - REDUÇÃO DO ANALFABETISMO",
        "18401 - PESSOA ATENDIDA EM PROJETO DE REDUÇÃO DO ANALFABETISMO ",
        "10229 - PROMOVER O ACESSO DA POPULAÇÃO À EDUCAÇÃO BÁSICA COM EQÜIDADE, QUALIDADE E VALORIZAÇÃO DA INCLUSÃO",
        "SEDUC",
      ],
      2025: [
        "2025 - REALIZAÇÃO DE ATIVIDADES ESPORTIVAS E JOGOS ESTUDANTIS",
        "18616 - ALUNO BENEFICIADO COM JOGOS ESTUDANTIS E PRÁTICAS ESPORTIVAS",
        "10229 - PROMOVER O ACESSO DA POPULAÇÃO À EDUCAÇÃO BÁSICA COM EQÜIDADE, QUALIDADE E VALORIZAÇÃO DA INCLUSÃO",
        "SEDUC",
      ],
      2301: [
        "2301 - MANUTENÇÃO E DESENVOLVIMENTO DO ENSINO PROFISSIONAL",
        "18630 - ALUNO ATENDIDO COM CURSO DE  EDUCAÇÃO PROFISSIONAL",
        "10229 - PROMOVER O ACESSO DA POPULAÇÃO À EDUCAÇÃO BÁSICA COM EQÜIDADE, QUALIDADE E VALORIZAÇÃO DA INCLUSÃO",
        "SEDUC",
      ],
      3131: [
        "3131 - CONSTRUÇÃO DE PRÉDIO PÚBLICO",
        "18643 - UNIDADES JURISDICIONADAS E PRÉDIOS PÚBLICOS CONSTRUÍDOS",
        "10229 - PROMOVER O ACESSO DA POPULAÇÃO À EDUCAÇÃO BÁSICA COM EQÜIDADE, QUALIDADE E VALORIZAÇÃO DA INCLUSÃO",
        "SEDUC",
      ],
      3132: [
        "3132 - CONSTRUÇÃO DE UNIDADES ESCOLARES",
        "18643 - UNIDADES JURISDICIONADAS E PRÉDIOS PÚBLICOS CONSTRUÍDOS",
        "10229 - PROMOVER O ACESSO DA POPULAÇÃO À EDUCAÇÃO BÁSICA COM EQÜIDADE, QUALIDADE E VALORIZAÇÃO DA INCLUSÃO",
        "SEDUC",
      ],
      2282: [
        "2282 - AMPLIAÇÃO, REFORMA E ADEQUAÇÃO DE PRÉDIO PÚBLICO",
        "18644 - UNIDADES JURISDICIONADAS E PRÉDIOS PÚBLICOS REFORMADOS E AMPLIADOS",
        "10229 - PROMOVER O ACESSO DA POPULAÇÃO À EDUCAÇÃO BÁSICA COM EQÜIDADE, QUALIDADE E VALORIZAÇÃO DA INCLUSÃO",
        "SEDUC",
      ],
      2283: [
        "2283 - AMPLIAÇÃO, REFORMA E ADEQUAÇÃO DE UNIDADES ESCOLARES",
        "18644 - UNIDADES JURISDICIONADAS E PRÉDIOS PÚBLICOS REFORMADOS E AMPLIADOS",
        "10229 - PROMOVER O ACESSO DA POPULAÇÃO À EDUCAÇÃO BÁSICA COM EQÜIDADE, QUALIDADE E VALORIZAÇÃO DA INCLUSÃO",
        "SEDUC",
      ],
      2548: [
        "2548 - BOLSA ESTUDO - ENSINO FUNDAMENTAL",
        "18645 - ALUNO BENEFICIADO COM BOLSA ESTUDO",
        "10229 - PROMOVER O ACESSO DA POPULAÇÃO À EDUCAÇÃO BÁSICA COM EQÜIDADE, QUALIDADE E VALORIZAÇÃO DA INCLUSÃO",
        "SEDUC",
      ],
      2549: [
        "2549 - BOLSA ESTUDO - ENSINO MEDIO",
        "18645 - ALUNO BENEFICIADO COM BOLSA ESTUDO",
        "10229 - PROMOVER O ACESSO DA POPULAÇÃO À EDUCAÇÃO BÁSICA COM EQÜIDADE, QUALIDADE E VALORIZAÇÃO DA INCLUSÃO",
        "SEDUC",
      ],
      2019: [
        "2019 - FORNECIMENTO DE ALIMENTAÇÃO ESCOLAR",
        "7471 - ALUNO BENEFICIADO COM MERENDA ESCOLAR",
        "10229 - PROMOVER O ACESSO DA POPULAÇÃO À EDUCAÇÃO BÁSICA COM EQÜIDADE, QUALIDADE E VALORIZAÇÃO DA INCLUSÃO",
        "SEDUC",
      ],
      2027: [
        "2027 - TRANSPORTE ESCOLAR",
        "7473 - ALUNO BENEFICIADO COM TRANSPORTE ESCOLAR ",
        "10229 - PROMOVER O ACESSO DA POPULAÇÃO À EDUCAÇÃO BÁSICA COM EQÜIDADE, QUALIDADE E VALORIZAÇÃO DA INCLUSÃO",
        "SEDUC",
      ],
      3172: [
        "3172 - REALIZAÇÃO DO CIRCUITO DAS CAVALHADAS",
        "18612 - CIRCUITO DAS CAVALHADAS REALIZADO",
        "10113 - FOMENTO A FESTIVIDADES DA CULTURA POPULAR, TRADICIONAIS E RELIGIOSAS.",
        "SECULT",
      ],
      3167: [
        "3167 - REALIZAÇÃO DE EDITAIS DO FUNDO DE ARTE E CULTURA (FAC)",
        "18589 - EDITAIS DO FUNDO DE ARTE E CULTURA (FAC) CONCLUÍDOS",
        "10119 - FOMENTO E INCENTIVO A PROJETOS CULTURAIS E ARTÍSTICOS",
        "SECULT",
      ],
      2098: [
        "2098 - FOMENTO E INCENTIVO À CULTURA GOIANA",
        "19154 - PRODUTO DE GESTÃO DAS AÇÕES DE FOMENTO E INCENTIVO A PROJETOS CULTURAIS E ARTÍSTICOS",
        "10119 - FOMENTO E INCENTIVO A PROJETOS CULTURAIS E ARTÍSTICOS",
        "SECULT",
      ],
      2338: [
        "2338 - GESTÃO E MANUTENÇÃO DO CINE CULTURA",
        "19079 - PRODUTO DE GESTÃO DO CINE CULTURA ",
        "10120 - FOMENTO E INCENTIVO AO AUDIOVISUAL",
        "SECULT",
      ],
      3171: [
        "3171 - REALIZAÇÃO DO CINEMA ITINERANTE - CINE-CLUBE",
        "7634 - CINEMA ITINERANTE - CINE-CLUBE REALIZADO",
        "10120 - FOMENTO E INCENTIVO AO AUDIOVISUAL",
        "SECULT",
      ],
      2339: [
        "2339 - GESTÃO E MANUTENÇÃO DOS EQUIPAMENTOS CULTURAIS",
        "19073 - PRODUTO DE GESTÃO DOS EQUIPAMENTOS CULTURAIS DO ESTADO DE GOIÁS",
        "10142 - GESTÃO E MANUTENÇÃO DOS EQUIPAMENTOS CULTURAIS",
        "SECULT",
      ],
      2341: [
        "2341 - PRESERVAÇÃO DO PATRIMÔNIO HISTÓRICO E CULTURAL",
        "16081 - AÇÃO DE PRESERVAÇÃO DO PATRIMÔNIO HISTÓRICO E CULTURAL ",
        "10214 - PROJETOS E OBRAS DE CONSERVAÇÃO E RESTAURAÇÃO DO PATRIMÔNIO CULTURAL",
        "SECULT",
      ],
      3173: [
        "3173 - RESTAURAÇÃO DE BEM CULTURAL",
        "19066 - BEM CULTURAL RESTAURADO ",
        "10214 - PROJETOS E OBRAS DE CONSERVAÇÃO E RESTAURAÇÃO DO PATRIMÔNIO CULTURAL",
        "SECULT",
      ],
      2337: [
        "2337 - GESTÃO DA PROMOÇÃO, PROTEÇÃO E SALVAGUARDA DO PATRIMÔNIO CULTURAL",
        "19112 - PRODUTO DE GESTÃO DE PROJETOS E OBRAS DE CONSERVAÇÃO E RESTAURAÇÃO DO PATRIMÔNIO CULTURAL ",
        "10214 - PROJETOS E OBRAS DE CONSERVAÇÃO E RESTAURAÇÃO DO PATRIMÔNIO CULTURAL",
        "SECULT",
      ],
      3168: [
        "3168 - REALIZAÇÃO DE FESTIVAL INTERNACIONAL DE CINEMA E VÍDEO AMBIENTAL - FICA",
        "18350 - FESTIVAL INTERNACIONAL DE CINEMA E VÍDEO AMBIENTAL REALIZADO",
        "10241 - REALIZAÇÃO DE FESTIVAIS ARTÍSTICOS E CULTURAIS",
        "SECULT",
      ],
      3170: [
        "3170 - REALIZAÇÃO DO CANTO DA PRIMAVERA",
        "18352 - CANTO DA PRIMAVERA REALIZADO",
        "10241 - REALIZAÇÃO DE FESTIVAIS ARTÍSTICOS E CULTURAIS",
        "SECULT",
      ],
      3169: [
        "3169 - REALIZAÇÃO DE TENPO",
        "8203 - TENPO REALIZADO",
        "10241 - REALIZAÇÃO DE FESTIVAIS ARTÍSTICOS E CULTURAIS",
        "SECULT",
      ],
      2340: [
        "2340 - GESTÃO E MANUTENÇÃO DOS MUSEUS, BIBLIOTECAS E ARQUIVO HISTÓRICO",
        "19122 - PRODUTO DE GESTÃO DOS MUSEUS, BIBLIOTECAS E ARQUIVO HISTÓRICO",
        "10250 - SALVAGUARDA E PROMOÇÃO DOS ACERVOS DOS MUSEUS, BIBLIOTECAS E ARQUIVO HISTÓRICO",
        "SECULT",
      ],
      2342: [
        "2342 - AQUISIÇÃO DE EQUIPAMENTOS E MATERIAIS ESPORTIVOS",
        "18274 - EQUIPAMENTOS E MATERIAIS ESPORTIVOS ADQUIRIDOS",
        "10019 - AQUISIÇÃO DE EQUIPAMENTOS E MATERIAIS ESPORTIVOS",
        "SEEL",
      ],
      2343: [
        "2343 - PROMOÇÃO DE ATIVIDADES DESPORTIVAS E DE LAZER PARA GRUPOS MINORITÁRIOS",
        "18705 - PESSOA DE GRUPO MINORITÁRIO ATENDIDA",
        "10030 - ATIVIDADES DESPORTIVAS E DE LAZER PARA GRUPOS MINORITÁRIOS",
        "SEEL",
      ],
      2344: [
        "2344 - PROMOÇÃO DE ATIVIDADES DESPORTIVAS PARA PESSOAS COM DEFICIÊNCIA",
        "18287 - PESSOA COM DEFICIÊNCIA MATRICULADA EM DESPORTO",
        "10031 - ATIVIDADES DESPORTIVAS PARA PESSOAS COM DEFICIÊNCIA",
        "SEEL",
      ],
      2345: [
        "2345 - PROMOÇÃO DE ATIVIDADES DESPORTIVAS PARA IDOSOS",
        "18278 - IDOSO MATRICULADO EM ATIVIDADE ESPORTIVA",
        "10032 - ATIVIDADES ESPORTIVAS PARA IDOSOS",
        "SEEL",
      ],
      2346: [
        "2346 - BOLSA PRO-ATLETA",
        "18279 - BOLSA PRO-ATLETA CONCEDIDA",
        "10039 - BOLSA ATLETA",
        "SEEL",
      ],
      2347: [
        "2347 - BOLSA PRO-TÉCNICO",
        "18684 - BOLSA TÉCNICO CONCEDIDA",
        "10040 - BOLSA PRÓ-TÉCNICO",
        "SEEL",
      ],
      3175: [
        "3175 - REALIZAÇÃO DA COPA QUILOMBOLA DE ESPORTES",
        "18704 - COPA QUILOMBOLA DE ESPORTES REALIZADA",
        "10062 - COPA QUILOMBOLA DE ESPORTES",
        "SEEL",
      ],
      2349: [
        "2349 - PARCERIAS ESCOLARES PARA ATIVIDADES DESPORTIVAS E LAZER",
        "18683 - ALUNO MATRICULADO EM ATIVIDADES DESPORTIVAS E LAZER NAS ESCOLAS",
        "10087 - ESPORTE E LAZER ESCOLAR",
        "SEEL",
      ],
      3176: [
        "3176 - REALIZAÇÃO DE JOGOS ABERTOS DE GOIÁS",
        "18703 - JOGO ABERTO DE GOIAS REALIZADO",
        "10164 - JOGOS ABERTOS DE GOIAS",
        "SEEL",
      ],
      2280: [
        "2280 - MANUTENÇÃO DE ESTÁDIOS, PRAÇAS ESPORTIVAS E GINÁSIOS  ",
        "18302 - ESPAÇO ESPORTIVO MANTIDO",
        "10168 - MANTER OS ESPAÇOS ESPORTIVOS CONSERVADOS",
        "SEEL",
      ],
      2556: [
        "2556 - PROMOÇÃO DO ESPORTE COM ALCANCE DE PESSOAS EM SITUAÇÃO DE VULNERABILIDADE SOCIAL",
        "18706 - PESSOA VULNERÁVEL MATRICULADA EM ATIVIDADE DE LAZER OU ESPORTE ",
        "10189 - OPORTUNIZAR ATIVIDADES ESPORTIVAS E DE LAZER",
        "SEEL",
      ],
      2348: [
        "2348 - DISPONIBILIZAÇÃO DE ATIVIDADES DESPORTIVAS, ARTES MARCIAIS E LAZER PARA ALUNOS",
        "18303 - ALUNO MATRICULADO EM ATIVIDADES DESPORTIVAS, ARTES MARCIAIS E LAZER",
        "10190 - OPORTUNIZAR ATIVIDADES ESPORTIVAS E DE LAZER PARA GRUPOS VULNERÁVEIS",
        "SEEL",
      ],
      2350: [
        "2350 - PROMOÇÃO DE ESPORTE E LAZER NOS MUNICÍPIOS",
        "18306 - MUNICIPIO ASSISTIDO NO ESPORTE",
        "10218 - PROMOÇÃO DE ESPORTE E LAZER NOS MUNICÍPIOS",
        "SEEL",
      ],
      2451: [
        "2451 - IMPLEMENTAÇÃO DE ATIVIDADES DESPORTIVAS E DE LAZER NOS MUNICÍPIOS COM MAIOR VULNERABILIDADE",
        "18306 - MUNICIPIO ASSISTIDO NO ESPORTE",
        "10218 - PROMOÇÃO DE ESPORTE E LAZER NOS MUNICÍPIOS",
        "SEEL",
      ],
      2279: [
        "2279 - CONSTRUÇÃO, REFORMA, AMPLIAÇÃO E MODERNIZAÇÃO DE ESTÁDIOS, PRAÇAS ESPORTIVAS E GINÁSIOS  ",
        "18682 - ESPAÇO PARA PRÁTICA DESPORTIVA CONSTRUÍDO",
        "10245 - REFORMA, CONSTRUÇÃO E MANUTENÇÃO DE ESPAÇOS ESPORTIVOS",
        "SEEL",
      ],
      3174: [
        "3174 - IMPLANTAÇÃO DE RUA DO LAZER",
        "18702 - RUA DO LAZER IMPLANTADA",
        "10249 - RUA DO LAZER",
        "SEEL",
      ],
      2506: [
        "2506 - COFINANCIAMENTO DE COMPONENTE BÁSICO DA ASSISTÊNCIA FARMACÊUTICA",
        "17640 -  COMPONENTE BÁSICO DA ASSISTÊNCIA FARMACÊUTICA COFINANCIADO",
        "10022 - ASSISTÊNCIA FARMACÊUTICA",
        "SES",
      ],
      2501: [
        "2501 - ATENÇÃO AO USUÁRIO DE MEDICAMENTOS DO COMPONENTE ESPECIALIZADO (ALTO CUSTO)",
        "17660 - USUÁRIO ATENDIDO COM MEDICAMENTOS DO COMPONENTE ESPECIALIZADO DA ASSISTÊNCIA FARMACÊUTICA (ALTO CUSTO)",
        "10022 - ASSISTÊNCIA FARMACÊUTICA",
        "SES",
      ],
      2514: [
        "2514 - DISPONIBILIZAÇÃO DE MEDICAMENTOS ÀS UNIDADES DE SERVIÇO DE ASSISTÊNCIA ESPECIALIZADA - SAE",
        "17662 - MEDICAMENTOS PARA INFECÇÕES OPORTUNISTAS  (HIV/AIDS) - UNIDADE DA SAE (SERVIÇOS DE ASSISTÊNCIA ESPECIALIZADA) ATENDIDA",
        "10022 - ASSISTÊNCIA FARMACÊUTICA",
        "SES",
      ],
      2502: [
        "2502 - ATENDIMENTO À CRIANÇA EXPOSTA AO HIV E HTLV - FÓRMULA INFANTIL",
        "17663 - FÓRMULA INFANTIL - CRIANÇA EXPOSTA AO (HIV E HTLV) ATENDIDA ",
        "10022 - ASSISTÊNCIA FARMACÊUTICA",
        "SES",
      ],
      2491: [
        "2491 - AQUISIÇÃO E DISPONIBILIZAÇÃO DE MEDICAMENTOS E INSUMOS DOS PLANOS DE CONTINGÊNCIA",
        "17680 - MEDICAMENTOS  E INSUMOS DESCRITOS NOS PLANOS DE CONTINGÊNCIAS - MUNICÍPIO ATENDIDO",
        "10022 - ASSISTÊNCIA FARMACÊUTICA",
        "SES",
      ],
      2515: [
        "2515 - GESTÃO DA ASSISTÊNCIA FARMACÊUTICA",
        "19742 - GESTÃO DA ASSISTÊNCIA FARMACÊUTICA",
        "10022 - ASSISTÊNCIA FARMACÊUTICA",
        "SES",
      ],
      2523: [
        "2523 - REALIZAÇÃO DE ATENDIMENTO NOS SERVIÇOS DE SAÚDE DE MÉDIA E ALTA COMPLEX. (TRATAMENTO FORA DO DOMICÍLIO - TFD)",
        "17945 - SERVIÇOS DE SAÚDE DE MÉDIA E ALTA COMPLEXIDADE (TRATAMENTO FORA DO DOMICÍLIO-TFD) - PACIENTE ATENDIDO",
        "10024 - ATENÇÃO ESPECIALIZADA",
        "SES",
      ],
      2492: [
        "2492 - COFINANCIAMENTO DE COMPLEXOS REGULADORES",
        "17946 - COMPLEXO REGULADOR REGIONAL ATENDIDO",
        "10024 - ATENÇÃO ESPECIALIZADA",
        "SES",
      ],
      2516: [
        "2516 - GESTÃO INDIRETA - ATENDIMENTO AMBULATORIAL E / OU HOSPITALAR E PRODUÇÃO DE HEMOCOMPONENTES",
        "18050 - GESTÃO INDIRETA - ATENDIMENTO AMBULATORIAL E OU HOSPITALAR E PRODUÇÃO DE HEMOCOMPONENTES REALIZADA",
        "10024 - ATENÇÃO ESPECIALIZADA",
        "SES",
      ],
      2498: [
        "2498 - REALIZAÇÃO DE SERVIÇOS CREDENCIADOS DE MÉDIA E ALTA COMPLEXIDADE",
        "18200 - SERVIÇOS CREDENCIADOS - ATENDIMENTO REALIZADO",
        "10024 - ATENÇÃO ESPECIALIZADA",
        "SES",
      ],
      2510: [
        "2510 - CONTRAPARTIDA DO SERVIÇO DE ATENDIMENTO MÓVEL DE URGÊNCIA / SAMU 192",
        "18201 - SERVIÇO DE ATENDIMENTO MÓVEL DE URGÊNCIA/SAMU 192 - CONTRAPARTIDA EFETUADA",
        "10024 - ATENÇÃO ESPECIALIZADA",
        "SES",
      ],
      2511: [
        "2511 - CONTRAPARTIDA PARA UNIDADE DE PRONTO ATENDIMENTO - UPA 24H",
        "18202 - UNIDADE DE PRONTO ATENDIMENTO UPA 24H - CONTRAPARTIDA EFETUADA",
        "10024 - ATENÇÃO ESPECIALIZADA",
        "SES",
      ],
      2509: [
        "2509 - CONTRAPARTIDA DO PROGRAMA DESOSPITALIZA GOIÁS",
        "18203 - CONTRAPARTIDA DO PROGRAMA DESOSPITALIZA GOIÁS - PACIENTE ATENDIDO",
        "10024 - ATENÇÃO ESPECIALIZADA",
        "SES",
      ],
      2503: [
        "2503 - ATENDIMENTO ESPECIALIZADO AO PORTADOR DE XERODERMA",
        "18204 - ATENDIMENTO ESPECIALIZADO AO PORTADOR DE XERODERMA - PACIENTE ATENDIDO",
        "10024 - ATENÇÃO ESPECIALIZADA",
        "SES",
      ],
      2518: [
        "2518 - PLANO DE FORTALECIMENTO - DISPONIBILIZAÇÃO DE LEITOS DE UTI",
        "18205 - PLANO DE FORTALECIMENTO DE MÉDIA E ALTA COMPLEXIDADE - LEITO DISPONIBILIZADO",
        "10024 - ATENÇÃO ESPECIALIZADA",
        "SES",
      ],
      2522: [
        "2522 - REALIZAÇÃO DE ATENDIMENTO NAS UNIDADES GERIDAS PELA SES",
        "18206 - GESTÃO DIRETA - ATENDIMENTO NAS UNIDADES GERIDAS PELA SECRETARIA DE ESTADO DA SAÚDE REALIZADO",
        "10024 - ATENÇÃO ESPECIALIZADA",
        "SES",
      ],
      2496: [
        "2496 - REALIZAÇÃO DE APORTE FINANCEIRO PARA O PROGRAMA DE QUALIFICAÇÃO DA ATENÇÃO PRIMÁRIA À SAUDE (QUALIFICA-APS)",
        "17880 - PROGRAMA QUALIFICA  APS GOIÁS - MUNICÍPIO ATENDIDO ",
        "10025 - ATENÇÃO PRIMÁRIA",
        "SES",
      ],
      2493: [
        "2493 - CONTRAPARTIDA DA ATENÇÃO PRIMÁRIA À SAÚDE",
        "17900 - CONTRAPARTIDA DA ATENÇÃO PRIMÁRIA - MUNICÍPIO ATENDIDO - ESF (EQUIPE DA SAÚDE DA FAMÍLIA)",
        "10025 - ATENÇÃO PRIMÁRIA",
        "SES",
      ],
      2490: [
        "2490 - AQUISIÇÃO DE INSUMOS PARA PREVENÇÃO E DIAGNÓSTICO NA ATENÇÃO PRIMÁRIA",
        "17929 - INSUMO À PREVENÇÃO E DIAGNÓSTICO NA ATENÇÃO PRIMÁRIA ADQUIRIDO",
        "10025 - ATENÇÃO PRIMÁRIA",
        "SES",
      ],
      2505: [
        "2505 - COFINANCIAMENTO DA REDE DE ATENÇÃO PSICOSSOCIAL",
        "17620 - REDE DE ATENÇÃO PSICOSSOCIAL COFINANCIADA",
        "10026 - ATENÇÃO PSICOSSOCIAL",
        "SES",
      ],
      2507: [
        "2507 - COFINANCIAMENTO DE LEITOS PSIQUIÁTRICOS",
        "17621 - LEITO PSIQUIÁTRICO COFINANCIADO",
        "10026 - ATENÇÃO PSICOSSOCIAL",
        "SES",
      ],
      2495: [
        "2495 - PREVENÇÃO, PROTEÇÃO E INTEGRAÇÃO DO DEPENDENTE QUÍMICO",
        "19402 - ACOLHIMENTO TRANSITÓRIO DE USUÁRIOS DE ÁLCOOL E OUTRAS DROGAS EM COMUNIDADES TERAPÊUTICAS REALIZADO",
        "10026 - ATENÇÃO PSICOSSOCIAL",
        "SES",
      ],
      2494: [
        "2494 - MANUTENÇÃO DOS SERVIÇOS DE VERIFICAÇÃO DE ÓBITOS - SVO",
        "18040 - REDE ESTADUAL DE SERVIÇO DE VERIFICAÇÃO DE ÓBITOS - MUNICÍPIO ATENDIDO  ",
        "10043 - COFINANCIAMENTO DE VIGILÂNCIA EM SAÚDE",
        "SES",
      ],
      2489: [
        "2489 - COFINANCIAMENTO DAS AÇÕES DE VIGILÂNCIA EM SAÚDE",
        "18041 - COFINANCIAMENTO DAS AÇÕES DE VIGILÂNCIA EM SAÚDE - MUNICÍPIO ADERIDO",
        "10043 - COFINANCIAMENTO DE VIGILÂNCIA EM SAÚDE",
        "SES",
      ],
      3286: [
        "3286 - CONSTRUÇÃO, REFORMA E ESTRUTURAÇÃO DE UNIDADES DA SES",
        "17560 - UNIDADE DA SECRETARIA DE ESTADO DA SAÚDE CONSTRUÍDA, REFORMADA E/OU ESTRUTURADA",
        "10057 - CONSTRUÇÃO, REFORMA E ESTRUTURAÇÃO DE UNIDADES DA SES/GO",
        "SES",
      ],
      3285: [
        "3285 - CONSTRUÇÃO E ESTRUTURAÇÃO DO HOSPITAL DE ÁGUAS LINDAS DE GOIÁS",
        "17562 - HOSPITAL ESTADUAL RONALDO RAMOS CAIADO FILHO - ÁGUAS LINDAS DE GOIÁS CONSTRUÍDO E ESTRUTURADO",
        "10057 - CONSTRUÇÃO, REFORMA E ESTRUTURAÇÃO DE UNIDADES DA SES/GO",
        "SES",
      ],
      3335: [
        "3335 - CONSTRUÇÃO DA POLICLÍNICA DE MINEIROS",
        "17560 - UNIDADE DA SECRETARIA DE ESTADO DA SAÚDE CONSTRUÍDA, REFORMADA E/OU ESTRUTURADA",
        "10057 - CONSTRUÇÃO, REFORMA E ESTRUTURAÇÃO DE UNIDADES DA SES/GO",
        "SES",
      ],
      3336: [
        "3336 - CONSTRUÇÃO DA POLICLÍNICA DE CAMPOS BELOS",
        "17560 - UNIDADE DA SECRETARIA DE ESTADO DA SAÚDE CONSTRUÍDA, REFORMADA E/OU ESTRUTURADA",
        "10057 - CONSTRUÇÃO, REFORMA E ESTRUTURAÇÃO DE UNIDADES DA SES/GO",
        "SES",
      ],
      3337: [
        "3337 - CONSTRUÇÃO DA POLICLÍNICA DE MOZARLÂNDIA",
        "17560 - UNIDADE DA SECRETARIA DE ESTADO DA SAÚDE CONSTRUÍDA, REFORMADA E/OU ESTRUTURADA",
        "10057 - CONSTRUÇÃO, REFORMA E ESTRUTURAÇÃO DE UNIDADES DA SES/GO",
        "SES",
      ],
      3338: [
        "3338 - CONSTRUÇÃO DA POLICLÍNICA DE SANTO ANTÔNIO DO DESCOBERTO",
        "17560 - UNIDADE DA SECRETARIA DE ESTADO DA SAÚDE CONSTRUÍDA, REFORMADA E/OU ESTRUTURADA",
        "10057 - CONSTRUÇÃO, REFORMA E ESTRUTURAÇÃO DE UNIDADES DA SES/GO",
        "SES",
      ],
      3284: [
        "3284 - CONSTRUÇÃO E ESTRUTURAÇÃO DO COMPLEXO ONCOLÓGICO DE REFERÊNCIA - CORA",
        "17561 -  COMPLEXO ONCOLÓGICO DE REFERÊNCIA - CORA CONSTRUÍDO E ESTRUTURADO",
        "10058 - CONSTRUÇÃO, REFORMA E ESTRUTURAÇÃO DO COMPLEXO ONCOLÓGICO DE REFERÊNCIA - CORA",
        "SES",
      ],
      2083: [
        "2083 - OUVIDORIA E CONTROLE SOCIAL NA GESTÃO DO SUS",
        "19176 - GESTÃO DE CONTROLE SOCIAL E OUVIDORIA NO SUS",
        "10060 - CONTROLE SOCIAL NA GESTÃO DO SUS E OUVIDORIA.",
        "SES",
      ],
      2513: [
        "2513 - DESENVOLVIMENTO DE COMPETÊNCIAS PROFISSIONAIS",
        "17540 - PROFISSIONAL DESENVOLVIDO NAS SUAS COMPETÊNCIAS PROFISSIONAIS",
        "10072 - DESENVOLVIMENTO DE PESSOAS",
        "SES",
      ],
      2520: [
        "2520 - QUALIFICAÇÃO DE PROFISSIONAIS DO SISTEMA ÚNICO DE SAÚDE - SUS",
        "17520 - PROFISSIONAL DO SUS QUALIFICADO",
        "10081 - ENSINO E PESQUISA EM SAÚDE",
        "SES",
      ],
      2500: [
        "2500 - AMPLIAÇÃO DE VAGAS DE RESIDÊNCIA MÉDICA",
        "17521 - VAGA DE RESIDÊNCIA MÉDICA AMPLIADA",
        "10081 - ENSINO E PESQUISA EM SAÚDE",
        "SES",
      ],
      2508: [
        "2508 - COFINANCIAMENTO PARA A SAÚDE DE POPULAÇÕES ESPECÍFICAS",
        "19646 - COFINANCIAMENTO PARA EQUIPES E ATENDIMENTO DE SAÚDE ÀS POPULAÇÕES ESPECÍFICAS",
        "10083 - EQUIDADE NA ATENÇÃO À SAÚDE ÀS POPULAÇÕES ESPECÍFICAS",
        "SES",
      ],
      2517: [
        "2517 - IMPLEMENTAÇÂO DA POLÍTICA NACIONAL DE ALIMENTAÇÃO E NUTRIÇÃO",
        "18027 - POLÍTICA NACIONAL DE ALIMENTAÇÃO E NUTRIÇÃO IMPLEMENTADA ",
        "10200 - POLÍTICA NACIONAL DE ALIMENTAÇÃO E NUTRIÇÃO",
        "SES",
      ],
      3119: [
        "3119 - PUBLICIDADE DE UTILIDADE PÚBLICA",
        "19762 - CAMPANHA E EVENTO INFORMATIVO E EDUCATIVO DE ATENÇÃO INTEGRAL À SAÚDE, À CAPTAÇÃO DE ÓRGÃOS E TECIDOS E À VIGILÂNCIA EM SAÚDE REALIZADO",
        "10234 - PUBLICIDADE DE UTILIDADE PÚBLICA",
        "SES",
      ],
      2499: [
        "2499 - ADEQUAÇÃO DA INFRAESTRUTURA DE SERVIÇOS DE TI",
        "19626 - INFRAESTRUTURA DE SERVIÇOS DE TI E SOLUÇÃO TECNOLÓGICA DISPONIBILIZADA",
        "10259 - TECNOLOGIA, INOVAÇÃO E SAÚDE DIGITAL",
        "SES",
      ],
      2504: [
        "2504 - CAPTAÇÃO E TRANSPLANTE DE ÓRGÃO E TECIDO",
        "17480 - ÓRGÃO E TECIDO CAPTADO E TRANSPLANTADO ",
        "10261 - TRANSPLANTES",
        "SES",
      ],
      2519: [
        "2519 - PROMOÇÃO DA SAÚDE, PREVENÇÃO E CONTROLE DE RISCOS E DANOS, AGRAVOS E DOENÇAS",
        "18020 - PROMOÇÃO DA SAÚDE, PREVENÇÃO E CONTROLE DE RISCOS E DANOS, AGRAVOS E DOENÇAS REALIZADO",
        "10266 - VIGILÂNCIA EM SAÚDE",
        "SES",
      ],
      2512: [
        "2512 - COORDENAÇÃO DO PROGRAMA NACIONAL DE IMUNIZAÇÃO EM ÂMBITO ESTADUAL",
        "18021 - PROGRAMA  NACIONAL DE IMUNIZAÇÃO  EM ÂMBITO ESTADUAL COORDENADO",
        "10266 - VIGILÂNCIA EM SAÚDE",
        "SES",
      ],
      2521: [
        "2521 - REALIZAÇÃO DE PROCEDIMENTOS E ENSAIOS LABORATORIAIS PARA OS SERVIÇOS DE VIGILÂNCIA EM SAÚDE",
        "17500 - PROCEDIMENTO E ENSAIO LABORATORIAL PARA OS SERVIÇOS DE VIGILÂNCIA EM SAÚDE REALIZADO",
        "10267 - VIGILÂNCIA LABORATORIAL",
        "SES",
      ],
      2497: [
        "2497 - REALIZAÇÃO DE CAMPANHAS E AÇÕES DE VIGILÂNCIA SANITÁRIA, AMBIENTAL E SAÚDE DO TRABALHADOR",
        "18022 - AÇÃO DE VIGILÂNCIA SANITÁRIA DE PRODUTOS, SERVIÇOS, MEIO AMBIENTE E SAÚDE DO TRABALHADOR REALIZADA",
        "10268 - VIGILÂNCIA SANITÁRIA, AMBIENTAL E SAÚDE DO TRABALHADOR",
        "SES",
      ],
      3180: [
        "3180 - ESTRUTURAÇÃO, OPERACIONALIZAÇÃO E MODERNIZAÇÃO DO SISTEMA DE PROTEÇÃO AOS DIREITOS DO CONSUMIDOR",
        "19042 - SISTEMA DE PROTEÇÃO AOS DIREITOS DO CONSUMIDOR ESTRUTURADO, OPERACIONALIZADO E MODERNIZADO",
        "10097 - ESTRUTURAÇÃO, OPERACIONALIZAÇÃO E MODERNIZAÇÃO DO SISTEMA DE PROTEÇÃO AOS DIREITOS DO CONSUMIDOR",
        "SSP",
      ],
      3178: [
        "3178 - ESTRUTURAÇÃO DE UNIDADE DE SEGURANÇA PÚBLICA",
        "13520 - UNIDADE DE SEGURANÇA PÚBLICA EQUIPADA/ESTRUTURADA",
        "10012 - APARELHAMENTO E MODERNIZAÇÃO DAS UNIDADES DE SEGURANÇA PÚBLICA",
        "SSP",
      ],
      2351: [
        "2351 - DISPONIBILIZAÇÃO DE FROTA PARA AS ATIVIDADES DE SEGURANÇA PÚBLICA",
        "19005 - FROTA DISPONIBILIZADA PARA AS ATIVIDADES DE SEGURANÇA PÚBLICA",
        "10075 - DISPONIBILIZAÇÃO DE FROTA PARA AS ATIVIDADES DE SEGURANÇA PÚBLICA",
        "SSP",
      ],
      3179: [
        "3179 - ESTRUTURAÇÃO, OPERACIONALIZAÇÃO E MODERNIZAÇÃO DO SISTEMA DE INTELIGÊNCIA DE SEGURANÇA PÚBLICA",
        "19023 - SISTEMA DE INTELIGÊNCIA DE SEGURANÇA PÚBLICA ESTRUTURADO, OPERACIONALIZADO E MODERNIZADO",
        "10096 - ESTRUTURAÇÃO, OPERACIONALIZAÇÃO E MODERNIZAÇÃO DO SISTEMA DE INTELIGÊNCIA DE SEGURANÇA PÚBLICA",
        "SSP",
      ],
      2352: [
        "2352 - FORTALECIMENTO DO SISTEMA DE SEGURANÇA PÚBLICA",
        "19063 - SISTEMA DE SEGURANÇA PÚBLICA FORTALECIDO",
        "10133 - FORTALECIMENTO DO SISTEMA DE SEGURANÇA PÚBLICA",
        "SSP",
      ],
      2353: [
        "2353 - VALORIZAÇÃO E QUALIFICAÇÃO DO PROFISSIONAL DE SEGURANÇA PÚBLICA",
        "19064 - PROFISSIONAL DE SEGURANÇA PÚBLICA INGRESSO, VALORIZADO E QUALIFICADO",
        "10139 - GESTÃO DO INGRESSO, DA VALORIZAÇÃO E DA QUALIFICAÇÃO DE PROFISSIONAIS DE SEGURANÇA PÚBLICA",
        "SSP",
      ],
      3177: [
        "3177 - CONSTRUÇÃO, REFORMA OU AMPLIAÇÃO DE UNIDADE DE SEGURANÇA PÚBLICA",
        "19082 - UNIDADE DE SEGURANÇA PÚBLICA CONSTRUÍDA, REFORMADA OU AMPLIADA",
        "10174 - MELHORIA DA INFRAESTRUTURA DAS UNIDADES DE SEGURANÇA PÚBLICA",
        "SSP",
      ],
      2363: [
        "2363 - GESTÃO DA INICIATIVA DE PREVENÇÃO E REPRESSÃO AO CRIME CONTRA MULHERES EM SITUAÇÃO DE VULNERABILIDADE",
        "18168 - GESTÃO DA INICIATIVA DE PREVENÇÃO E REPRESSÃO AO CRIME CONTRA MULHERES EM SITUAÇÃO DE VULNERABILIDADE",
        "10208 - PREVENÇÃO E REPRESSÃO AO CRIME CONTRA MULHERES EM SITUAÇÃO DE VULNERABILIDADE",
        "PM",
      ],
      3181: [
        "3181 - CONSTRUÇÃO / AMPLIAÇÃO DE UNIDADE DA PMGO",
        "18045 - UNIDADE DA PMGO CONSTRUÍDA/AMPLIADA",
        "10051 - CONSTRUÇÃO, AMPLIAÇÃO E REFORMA DE UNIDADES DA POLÍCIA MILITAR",
        "PM",
      ],
      3182: [
        "3182 - REFORMA DE UNIDADE DA PMGO",
        "8268 - UNIDADE DA PMGO REFORMADA ",
        "10051 - CONSTRUÇÃO, AMPLIAÇÃO E REFORMA DE UNIDADES DA POLÍCIA MILITAR",
        "PM",
      ],
      2358: [
        "2358 - AQUISIÇÃO DE MUNIÇÃO PELA PM",
        "10298 - MUNIÇÃO ADQUIRIDA ",
        "10207 - PREVENÇÃO E REPRESSÃO AO CRIME",
        "PM",
      ],
      2484: [
        "2484 - DISPONIBILIZAÇÃO DE VIATURA PELA POLÍCIA MILITAR",
        "12920 - VIATURA DISPONIBILIZADA PELA POLÍCIA MILITAR",
        "10207 - PREVENÇÃO E REPRESSÃO AO CRIME",
        "PM",
      ],
      2357: [
        "2357 - AQUISIÇÃO DE FARDAMENTO PARA PM",
        "18141 - FARDAMENTO ENTREGUE",
        "10207 - PREVENÇÃO E REPRESSÃO AO CRIME",
        "PM",
      ],
      2355: [
        "2355 - AQUISIÇÃO DE EQUIPAMENTO / MATERIAL DE PROTEÇÃO E SEGURANÇA INDIVIDUAL PARA PMGO",
        "5087 - EQUIPAMENTO/MATERIAL DE PROTEÇÃO E SEGURANÇA INDIVIDUAL ADQUIRIDO PARA PMGO",
        "10207 - PREVENÇÃO E REPRESSÃO AO CRIME",
        "PM",
      ],
      2354: [
        "2354 - AQUISIÇÃO DE ARMAMENTO PELA PM",
        "7521 - ARMAMENTO ADQUIRIDO",
        "10207 - PREVENÇÃO E REPRESSÃO AO CRIME",
        "PM",
      ],
      2356: [
        "2356 - AQUISIÇÃO DE EQUIPAMENTOS DE TI, TELECOMUNICAÇÃO E MATERIAL",
        "7755 - EQUIPAMENTO DE TI, DE TELECOM E MATERIAL ADQUIRIDO",
        "10207 - PREVENÇÃO E REPRESSÃO AO CRIME",
        "PM",
      ],
      2359: [
        "2359 - DISPONIBILIZAÇÃO DE SEMOVENTE",
        "9177 - SEMOVENTE DISPONIBILIZADO",
        "10207 - PREVENÇÃO E REPRESSÃO AO CRIME",
        "PM",
      ],
      2362: [
        "2362 - GESTÃO DA INICIATIVA DE PREVENÇÃO E REPRESSÃO AO CRIME CONTRA CRIANÇAS E JOVENS",
        "18143 - GESTÃO DA INICIATIVA DE PREVENÇÃO E REPRESSÃO AO CRIME CONTRA CRIANÇAS E JOVENS",
        "10205 - PREVENÇÃO DA EXPOSIÇÃO DE CRIANÇAS E ADOLESCENTES À CRIMINALIDADE PRECOCE",
        "PM",
      ],
      2551: [
        "2551 - GESTÃO OPERACIONAL DE PREVENÇÃO E SOCORRO - KIT RESGATE NORDESTE SOLIDÁRIO",
        "18649 - GESTÃO OPERACIONAL DE PREVENÇÃO E SOCORRO",
        "10172 - MELHORIA CONTÍNUA DOS ATENDIMENTOS PREVENTIVOS E DE SOCORRO",
        "CBM",
      ],
      2368: [
        "2368 - GESTÃO OPERACIONAL DE PREVENÇÃO E SOCORRO",
        "18649 - GESTÃO OPERACIONAL DE PREVENÇÃO E SOCORRO",
        "10172 - MELHORIA CONTÍNUA DOS ATENDIMENTOS PREVENTIVOS E DE SOCORRO",
        "CBM",
      ],
      2365: [
        "2365 - GESTÃO DA MOBILIZAÇÃO DE GRANDES OPERAÇÕES",
        "18646 - GESTÃO DA MOBILIZAÇÃO DE GRANDES OPERAÇÕES",
        "10177 - MOBILIZAÇÃO DE GRANDES OPERAÇÕES",
        "CBM",
      ],
      2366: [
        "2366 - GESTÃO OPERACIONAL DE COMBATE A INCÊNDIOS FLORESTAIS",
        "18662 - GESTÃO OPERACIONAL DE COMBATE A INCÊNDIOS FLORESTAIS",
        "10203 - PREPARAÇÃO E RESPOSTA AOS INCÊNDIOS FLORESTAIS",
        "CBM",
      ],
      3183: [
        "3183 - ESTRUTURAÇÃO DE POSTOS AVANÇADOS REGIONAIS - PROJETO CAPILARIDADE",
        "18481 - POSTO AVANÇADO ATIVADO",
        "10213 - PROJETO CAPILARIDADE REGIONALIZAÇÃO BOMBEIRO MILITAR",
        "CBM",
      ],
      2367: [
        "2367 - GESTÃO OPERACIONAL DE DEFESA CIVIL",
        "18651 - GESTÃO OPERACIONAL DE DEFESA CIVIL",
        "10233 - PROTEÇÃO SOCIAL E DEFESA CIVIL",
        "CBM",
      ],
      2364: [
        "2364 - FORMAÇÃO DE BOMBEIRO MIRIM - PROEBOM",
        "7495 - ALUNO DO PROGRAMA EDUCACIONAL BOMBEIRO MIRIM - PROEBOM FORMADO",
        "10212 - PROGRAMA EDUCACIONAL BOMBEIRO MIRIM",
        "CBM",
      ],
      3128: [
        "3128 - CONSTRUÇÃO DE UNIDADES DA POLÍCIA CIVIL",
        "8228 - UNIDADE DA POLÍCIA CIVIL CONSTRUÍDA ",
        "10059 - CONSTRUÇÃO/REFORMA DE UNIDADES DA POLÍCIA CIVIL",
        "PC",
      ],
      2273: [
        "2273 - REFORMA E AMPLIAÇÃO DE UNIDADES DA POLÍCIA CIVIL",
        "8229 - UNIDADE DA POLÍCIA CIVIL REFORMADA/AMPLIADA",
        "10059 - CONSTRUÇÃO/REFORMA DE UNIDADES DA POLÍCIA CIVIL",
        "PC",
      ],
      2369: [
        "2369 - ESTRUTURAÇÃO E MODERNIZAÇÃO DAS UNIDADES DA POLÍCIA CIVIL",
        "18319 - PRODUTO DE GESTÃO DA INICIATIVA ESTRUTURAÇÃO E MODERNIZAÇÃO DAS UNIDADES DA POLÍCIA CIVIL",
        "10095 - ESTRUTURAÇÃO E MODERNIZAÇÃO DAS UNIDADES DA POLÍCIA CIVIL",
        "PC",
      ],
      2370: [
        "2370 - FORTALECIMENTO DA INVESTIGAÇÃO POLICIAL",
        "18177 - PRODUTO DE GESTÃO DA INICIATIVA FORTALECIMENTO DA INVESTIGAÇÃO POLICIAL",
        "10131 - FORTALECIMENTO DA INVESTIGAÇÃO POLICIAL",
        "PC",
      ],
      2371: [
        "2371 - FORTALECIMENTO DO COMBATE AOS CRIMES DE LAVAGEM DE CAPITAIS E ORGANIZAÇÕES CRIMINOSAS",
        "18173 - PRODUTO DE GESTÃO DA INICIATIVA DE FORTALECIMENTO DO COMBATE AOS CRIMES DE LAVAGEM DE CAPITAIS E ORGANIZAÇÕES CRIMINOSAS",
        "10132 - FORTALECIMENTO DO COMBATE AOS CRIMES DE LAVAGEM DE CAPITAIS E ORGANIZAÇÕES CRIMINOSAS",
        "PC",
      ],
      3184: [
        "3184 - IMPLANTAÇÃO DO COMPLEXO ESTADUAL DA POLÍCIA CIVIL",
        "18321 - COMPLEXO ESTADUAL DA POLÍCIA CIVIL IMPLANTADO",
        "10153 - IMPLANTAÇÃO DO COMPLEXO ESTADUAL DA POLÍCIA CIVIL DE GOIÁS",
        "PC",
      ],
      2320: [
        "2320 - EMISSÃO DE CARTEIRA DE IDENTIDADE CIDADÃ",
        "18340 - CARTEIRA DE IDENTIDADE CIDADÃ EMITIDA",
        "10239 - REALIZAÇÃO DE AÇÕES SOCIAIS E DE PREVENÇÃO A CRIMES",
        "PC",
      ],
      2183: [
        "2183 - ESCOLA SEM DROGAS - PREVENÇÃO E REPRESSÃO AO USO DE DROGAS E ENTORPECENTES EM REGIÕES VULNERÁVEIS",
        "7987 - PALESTRA DO PROGRAMA ESCOLA SEM DROGAS REALIZADA",
        "10239 - REALIZAÇÃO DE AÇÕES SOCIAIS E DE PREVENÇÃO A CRIMES",
        "PC",
      ],
      3185: [
        "3185 - CONSTRUÇÃO DE UNIDADES PRISIONAIS",
        "19022 - CONSTRUÇÃO DE VAGAS PRISIONAIS",
        "10055 - CONSTRUÇÃO DE VAGAS PRISIONAIS",
        "DGAP",
      ],
      3186: [
        "3186 - REFORMA DE UNIDADE PRISIONAL",
        "13940 - UNIDADE PRISIONAL REFORMADA  ",
        "10178 - MODERNIZAÇÃO DA ESTRUTURA FÍSICA EXISTENTE",
        "DGAP",
      ],
      2267: [
        "2267 - MONITORAMENTO ELETRÔNICO DAS PESSOAS PRIVADAS DE LIBERDADE",
        "8057 - REEDUCANDO MONITORADO COM TORNOZELEIRA ELETRÔNICA ",
        "10184 - MONITORAMENTO ELETRÔNICO COM ÊNFASE NA COMPOSIÇÃO DE EQUIPES MULTIDISCIPLINARES E NAS MEDIDAS CAUTELARES",
        "DGAP",
      ],
      2485: [
        "2485 - GESTÃO DA INICIATIVA NOVOS TEMPOS EM RESSOCIALIZAÇÃO",
        "19722 - GESTÃO DO ATENDIMENTO DE CIDADANIA AO REEDUCANDO",
        "10186 - NOVOS TEMPOS EM RESSOCIALIZAÇÃO",
        "DGAP",
      ],
      2550: [
        "2550 - GESTÃO DO ATENDIMENTO DE CIDADANIA AO REEDUCANDO",
        "19722 - GESTÃO DO ATENDIMENTO DE CIDADANIA AO REEDUCANDO",
        "10186 - NOVOS TEMPOS EM RESSOCIALIZAÇÃO",
        "DGAP",
      ],
      2372: [
        "2372 - AQUISIÇÃO DE ARMAMENTO",
        "7521 - ARMAMENTO ADQUIRIDO",
        "10253 - SEGURANÇA PRISIONAL DE VANGUARDA",
        "DGAP",
      ],
      2373: [
        "2373 - AQUISIÇÃO DE EQUIPAMENTO DE SEGURANÇA PRISIONAL",
        "7746 - EQUIPAMENTO DE SEGURANÇA PRISIONAL ADQUIRIDO",
        "10253 - SEGURANÇA PRISIONAL DE VANGUARDA",
        "DGAP",
      ],
      2452: [
        "2452 - GESTÃO DE ATENDIMENTOS DO DETRAN",
        "18762 - PRODUTO DE GESTÃO ATENDIMENTO DETRAN REALIZADO",
        "10028 - ATENDIMENTO DETRAN REALIZADO",
        "DETRAN",
      ],
      2453: [
        "2453 - GESTÃO DA INICIATIVA DE CONDUTOR HABILITADO",
        "18942 - PRODUTO DE GESTÃO CONDUTOR HABILITADO",
        "10048 - CONDUTOR HABILITADO",
        "DETRAN",
      ],
      2455: [
        "2455 - EMISSÃO DE CNH SOCIAL",
        "7640 - CNH SOCIAL EMITIDA",
        "10211 - PROGRAMA DETRAN SOCIAL",
        "DETRAN",
      ],
      2456: [
        "2456 - GESTÃO DA SEGURANÇA NO TRÂNSITO",
        "18051 - PRODUTO DE GESTÃO DO DETRAN MAIS SEGURO ",
        "10252 - SEGURANÇA NO TRÂNSITO",
        "DETRAN",
      ],
      3120: [
        "3120 - PUBLICIDADE DE UTILIDADE PÚBLICA",
        "8618 - CAMPANHA EDUCATIVA/INFORMATIVA REALIZADA",
        "10252 - SEGURANÇA NO TRÂNSITO",
        "DETRAN",
      ],
      3256: [
        "3256 - CONSTRUÇÃO DA ESCOLA PÚBLICA DE TRÂNSITO",
        "18047 -  ESCOLA PÚBLICA DE TRÂNSITO CONSTRUÍDA",
        "10262 - UNIDADE DETRAN CONSTRUÍDA",
        "DETRAN",
      ],
      3258: [
        "3258 - CONSTRUÇÃO DO CONDOMÍNIO GOIÁS",
        "18525 - CONDOMÍNIO GOIÁS CONSTRUÍDO",
        "10262 - UNIDADE DETRAN CONSTRUÍDA",
        "DETRAN",
      ],
      3259: [
        "3259 - CONSTRUÇÃO DA SEDE ADMINISTRATIVA",
        "18984 - SEDE ADMINISTRATIVA CONSTRUÍDA",
        "10262 - UNIDADE DETRAN CONSTRUÍDA",
        "DETRAN",
      ],
      2457: [
        "2457 - GESTÃO DA INICIATIVA VEÍCULO LEGAL",
        "18709 - PRODUTO DE GESTÃO VEÍCULO LEGAL",
        "10264 - VEÍCULO LEGAL",
        "DETRAN",
      ],
      2454: [
        "2454 - GESTÃO DO DETRAN DIGITAL",
        "18359 - PRODUTO DE GESTÃO DO DETRAN DIGITAL",
        "10073 - DETRAN DIGITAL",
        "DETRAN",
      ],
      3192: [
        "3192 - IMPLANTAÇÃO DO CENTRO DE SERVIÇOS SOCIAIS",
        "19181 - CENTRO DE SERVIÇOS SOCIAIS IMPLANTADO",
        "10204 - PRESTAÇÃO DE SERVIÇOS SOCIAIS E GARANTIA DE DIREITOS",
        "SEDS",
      ],
      2254: [
        "2254 - PROMOÇÃO DA DIGNIDADE MENSTRUAL DA MULHER - SEDS",
        "19192 - GESTÃO DA INICIATIVA PRESTAÇÃO DE SERVIÇOS SOCIAIS",
        "10204 - PRESTAÇÃO DE SERVIÇOS SOCIAIS E GARANTIA DE DIREITOS",
        "SEDS",
      ],
      2380: [
        "2380 - GESTÃO DA INICIATIVA PRESTAÇÃO DE SERVIÇOS SOCIAIS",
        "19192 - GESTÃO DA INICIATIVA PRESTAÇÃO DE SERVIÇOS SOCIAIS",
        "10204 - PRESTAÇÃO DE SERVIÇOS SOCIAIS E GARANTIA DE DIREITOS",
        "SEDS",
      ],
      2194: [
        "2194 - PASSE LIVRE ESTUDANTIL - ENSINO FUNDAMENTAL",
        "19183 - PASSE LIVRE ESTUDANTIL - ENSINO FUNDAMENTAL DISPONIBILIZADO",
        "10195 - PASSE LIVRE ESTUDANTIL",
        "SEDS",
      ],
      2195: [
        "2195 - PASSE LIVRE ESTUDANTIL - ENSINO SUPERIOR",
        "19184 - PASSE LIVRE ESTUDANTIL - ENSINO SUPERIOR DISPONIBILIZADO",
        "10195 - PASSE LIVRE ESTUDANTIL",
        "SEDS",
      ],
      2196: [
        "2196 - PASSE LIVRE ESTUDANTIL - ENSINO MÉDIO",
        "19185 - PASSE LIVRE ESTUDANTIL - ENSINO MÉDIO DISPONIBILIZADO",
        "10195 - PASSE LIVRE ESTUDANTIL",
        "SEDS",
      ],
      3190: [
        "3190 - CONSTRUÇÃO E IMPLANTAÇÃO DA CASA DA PESSOA IDOSA",
        "18741 - CASA DA PESSOA IDOSA IMPLEMENTADA",
        "10002 - ACOLHIMENTO E QUALIFICAÇÃO PARA ATENDIMENTO À PESSOA IDOSA",
        "SEDS",
      ],
      3188: [
        "3188 - CAPACITAÇÃO DE CUIDADOR PARA ATENDIMENTO À PESSOA IDOSA",
        "19189 - CUIDADOR PARA ATENDIMENTO À PESSOA IDOSA CAPACITADO",
        "10002 - ACOLHIMENTO E QUALIFICAÇÃO PARA ATENDIMENTO À PESSOA IDOSA",
        "SEDS",
      ],
      2381: [
        "2381 - GESTÃO DA INICIATIVA QUALIFICAÇÃO DOS MUNICÍPIOS PARA A GARANTIA DE DIREITOS DA POPULAÇÃO",
        "19190 - GESTÃO DA INICIATIVA QUALIFICAÇÃO DOS MUNICÍPIOS PARA A GARANTIA DE DIREITOS DA POPULAÇÃO",
        "10021 - ASSESSORIA, QUALIFICAÇÃO E CAPACITAÇÃO DOS MUNICÍPIOS PARA A GARANTIA DE DIREITOS DA POPULAÇÃO",
        "SEDS",
      ],
      3189: [
        "3189 - COFINANCIAMENTO ESTADUAL DO SUAS",
        "7945 - MUNICÍPIO COFINANCIADO PARA A GESTÃO DO SUAS",
        "10021 - ASSESSORIA, QUALIFICAÇÃO E CAPACITAÇÃO DOS MUNICÍPIOS PARA A GARANTIA DE DIREITOS DA POPULAÇÃO",
        "SEDS",
      ],
      3187: [
        "3187 - DIGNIDADE DA PESSOA EM SITUAÇÃO DE RUA",
        "18752 - AÇÃO DIGNIDADE NA RUA REALIZADA",
        "10029 - ATENDIMENTO E ENCAMINHAMENTO ÀS PESSOAS EM SITUAÇÃO DE RUA",
        "SEDS",
      ],
      2379: [
        "2379 - GESTÃO DA INICIATIVA ATENDIMENTO E ENCAMINHAMENTO ÀS PESSOAS EM SITUAÇÃO DE RUA",
        "19191 - GESTÃO DA INICIATIVA ATENDIMENTO E ENCAMINHAMENTO DE PESSOAS EM SITUAÇÃO DE RUA",
        "10029 - ATENDIMENTO E ENCAMINHAMENTO ÀS PESSOAS EM SITUAÇÃO DE RUA",
        "SEDS",
      ],
      2374: [
        "2374 - APOIO AOS MUNICÍPIOS NO DESENVOLVIMENTO SOCIAL DAS COMUNIDADES TRADICIONAIS E IGUALDADE RACIAL",
        "18734 - MUNICÍPIO APOIADO PARA O DESENVOLVIMENTO SOCIAL DAS COMUNIDADES TRADICIONAIS E IGUALDADE RACIAL",
        "10014 - APOIO AOS MUNICÍPIOS PARA O DESENVOLVIMENTO SOCIAL DAS COMUNIDADES TRADICIONAIS",
        "SEDS",
      ],
      2376: [
        "2376 - AUXÍLIO FINANCEIRO NUTRICIONAL E DE TARIFAS ÀS ENTIDADES SOCIAIS",
        "18735 - ENTIDADE BENEFICIADA COM AUXÍLIO FINANCEIRO (TAXAS E NUTRICIONAL)",
        "10036 - AUXÍLIO FINANCEIRO À ENTIDADES SEM FINS LUCRATIVOS",
        "SEDS",
      ],
      2377: [
        "2377 - GESTÃO DA INICATIVA DISCRIMINAÇÃO E VIOLÊNCIA NÃO!",
        "19194 - GESTÃO DA INICATIVA DISCRIMINAÇÃO E VIOLÊNCIA NÃO!",
        "10074 - DISCRIMINAÇÃO E VIOLÊNCIA NÃO!",
        "SEDS",
      ],
      2315: [
        "2315 - TRANSFERÊNCIA DE RENDA COMPLEMENTAR - DIGNA IDADE",
        "18737 - PESSOA IDOSA BENEFICIADA COM AUXÍLIO FINANCEIRO - PROGRAMA DIGNIDADE",
        "10248 - RENDA SOCIAL E SEGURANÇA ALIMENTAR",
        "SEDS",
      ],
      2316: [
        "2316 - TRANSFERÊNCIA DE RENDA COMPLEMENTAR - PROGRAMA GOIÁS POR ELAS",
        "18738 - MULHER VÍTIMA DE VIOLÊNCIA BENEFICIADA COM AUXÍLIO FINANCEIRO - GOIÁS POR ELAS",
        "10248 - RENDA SOCIAL E SEGURANÇA ALIMENTAR",
        "SEDS",
      ],
      2317: [
        "2317 - TRANSFERÊNCIA DE RENDA COMPLEMENTAR - BOLSA AUXÍLIO - FAMÍLIA ACOLHEDORA",
        "18739 - FAMÍLIA ACOLHEDORA BENEFICIADA",
        "10248 - RENDA SOCIAL E SEGURANÇA ALIMENTAR",
        "SEDS",
      ],
      2312: [
        "2312 -TRANSFERÊNCIA DE RENDA COMPLEMENTAR - MÃES DE GOIÁS",
        "18740 - MÃES EM SITUAÇÃO DE VULNERABILIDADE BENEFICIADA COM AUXÍLIO FINANCEIRO (MÃES DE GOIÁS)",
        "10248 - RENDA SOCIAL E SEGURANÇA ALIMENTAR",
        "SEDS",
      ],
      2311: [
        "2311 - CONCESSÃO DE CRÉDITO SOCIAL",
        "19186 - PESSOA BENEFICIADA COM CRÉDITO SOCIAL",
        "10248 - RENDA SOCIAL E SEGURANÇA ALIMENTAR",
        "SEDS",
      ],
      2199: [
        "2199 - SEGURANÇA ALIMENTAR E NUTRICIONAL",
        "19187 - CESTAS BÁSICAS ENTREGUES",
        "10248 - RENDA SOCIAL E SEGURANÇA ALIMENTAR",
        "SEDS",
      ],
      2375: [
        "2375 - AUXÍLIO ALIMENTAÇÃO AO APRENDIZ DO FUTURO",
        "18731 - ADOLESCENTE APRENDIZ BENEFICIADO COM AUXÍLIO FINANCEIRO",
        "10015 - APRENDIZ DO FUTURO",
        "SEDS",
      ],
      2197: [
        "2197 - PROJETO JOVEM APRENDIZ DO FUTURO",
        "19182 - VAGA A ADOLESCENTE APRENDIZ DISPONIBILIZADA",
        "10015 - APRENDIZ DO FUTURO",
        "SEDS",
      ],
      3327: [
        "3327 - PROMOÇÃO E VALORIZAÇÃO DA CRIANÇA E DA JUVENTUDE",
        "19182 - VAGA A ADOLESCENTE APRENDIZ DISPONIBILIZADA",
        "10015 - APRENDIZ DO FUTURO",
        "SEDS",
      ],
      3193: [
        "3193 - REFORMA DE CENTROS DE ATENDIMENTO SOCIOEDUCATIVO",
        "18756 - CASE'S REFORMADOS",
        "10027 - ATENDIMENTO AO ADOLESCENTE EM CUMPRIMENTO DE MEDIDA SOCIOEDUCATIVA",
        "SEDS",
      ],
      2378: [
        "2378 - GESTÃO DA INICIATIVA ATENDIMENTO AO ADOLESCENTE EM CUMPRIMENTO DE MEDIDA SOCIOEDUCATIVA",
        "19193 - GESTÃO DA INICIATIVA ATENDIMENTO AO ADOLESCENTE EM CUMPRIMENTO DE MEDIDA SOCIOEDUCATIVA",
        "10027 - ATENDIMENTO AO ADOLESCENTE EM CUMPRIMENTO DE MEDIDA SOCIOEDUCATIVA",
        "SEDS",
      ],
      3191: [
        "3191 - IMPLANTAÇÃO DE CENTROS DE ATENDIMENTO SOCIOEDUCATIVO",
        "16022 -  IMPLANTAÇÃO DE CENTRO DE ATENDIMENTO SOCIOEDUCATIVO - CASE",
        "10054 - CONSTRUÇÃO DE CASES - CENTRO DE ATENDIMENTO SOCIOEDUCATIVO",
        "SEDS",
      ],
      2389: [
        "2389 - GESTÃO DOS SERVIÇOS DA CULTURA, TERRITORIALIZAÇÃO E CAPACITAÇÃO PARA UM DESENVOLVIMENTO SUSTENTÁVEL",
        "18909 - GESTÃO DOS SERVIÇOS DA CULTURA, TERRITORIALIZAÇÃO E CAPACITAÇÃO PARA UM DESENVOLVIMENTO SUSTENTÁVEL",
        "10068 - CULTURA, TERRITORIALIZAÇÃO E CAPACITAÇÃO PARA UM DESENVOLVIMENTO SUSTENTÁVEL",
        "SECTI",
      ],
      2386: [
        "2386 - GESTÃO DA INICIATIVA ESTRATÉGIA ESTADUAL DE NEGÓCIO DE IMPACTO SOCIOAMBIENTAL POSITIVO",
        "18860 - PRODUTO DE GESTÃO DA ESTRATÉGIA ESTADUAL DE NEGÓCIOS DE IMPACTO SOCIOAMBIENTAL POSITIVO",
        "10090 - ESTRATÉGIA ESTADUAL DE NEGÓCIO DE IMPACTO SOCIOAMBIENTAL POSITIVO",
        "SECTI",
      ],
      2387: [
        "2387 - GESTÃO DE EVENTOS DE INOVAÇÃO E DE INTELIGÊNCIA ARTIFICIAL",
        "19077 - GESTÃO DE EVENTOS DE INOVAÇÃO E DE INTELIGÊNCIA ARTIFICIAL",
        "10098 - EVENTOS DE ATIVAÇÃO DE ECOSSISTEMA",
        "SECTI",
      ],
      3198: [
        "3198 - IMPLEMENTAÇÃO DO PROGRAMA DE CLUSTERS PRODUTIVOS INOVADORES",
        "18866 - PROGRAMA GOIÁS ATIVA IMPLEMENTADO",
        "10150 - IDENTIFICAÇÃO E FORTALECIMENTO DE CLUSTERS DE INOVAÇÃO",
        "SECTI",
      ],
      3200: [
        "3200 - IMPLEMENTAÇÂO DO PROGRAMA GOIÁS ATIVA",
        "18866 - PROGRAMA GOIÁS ATIVA IMPLEMENTADO",
        "10150 - IDENTIFICAÇÃO E FORTALECIMENTO DE CLUSTERS DE INOVAÇÃO",
        "SECTI",
      ],
      3199: [
        "3199 - IMPLEMENTAÇÂO DO PROGRAMA DE INOVAÇÃO ABERTA",
        "18872 - PROGRAMA DE INOVAÇÃO ABERTA IMPLEMENTADO",
        "10210 - PROGRAMA DE INOVAÇÃO ABERTA",
        "SECTI",
      ],
      3201: [
        "3201 - IMPLEMENTAÇÃO DO PROGRAMA GOVTECH",
        "18875 - PROGRAMA GOVTECH IMPLEMENTADO",
        "10210 - PROGRAMA DE INOVAÇÃO ABERTA",
        "SECTI",
      ],
      2388: [
        "2388 - GESTÃO DO OBSERVATÓRIO DE INOVAÇÃO DO ESTADO DE GOIÁS",
        "18910 - OBSERVATÓRIO DE INOVAÇÃO DO ESTADO DE GOIÁS GERIDO",
        "10260 - TRANSFORMAÇÃO DIGITAL NO ESTADO DE GOIÁS",
        "SECTI",
      ],
      3195: [
        "3195 - CRIAÇÃO DO OBSERVATÓRIO DE INOVAÇÃO DO ESTADO DE GOIÁS",
        "18928 - OBSERVATÓRIO DE INOVAÇÃO DO ESTADO DE GOIÁS CRIADO",
        "10260 - TRANSFORMAÇÃO DIGITAL NO ESTADO DE GOIÁS",
        "SECTI",
      ],
      3203: [
        "3203 - REFORMA E AMPLIAÇÃO DA ESCOLA DO FUTURO DO ESTADO DE GOIÁS",
        "18803 - ESCOLA DO FUTURO DO ESTADO DE GOIÁS AMPLIADA",
        "10008 - AMPLIAÇÃO DE ESCOLA DO FUTURO DO ESTADO DE GOIÁS",
        "SECTI",
      ],
      3197: [
        "3197 - IMPLEMENTAÇÃO DE PROGRAMAS DE INCENTIVOS À STARTUPS",
        "18783 - PROGRAMAS DE INCENTIVOS A STARTUPS  IMPLEMENTADOS",
        "10035 - AUMENTO E FORTALECIMENTO DE STARTUPS",
        "SECTI",
      ],
      2383: [
        "2383 - CONCESSÃO DE BOLSAS DE INICIAÇÃO CIENTÍFICA PARA ALUNAS DE GRADUAÇÃO",
        "18787 - BOLSAS DE INICIAÇÃO CIENTÍFICA PARA ALUNAS DE GRADUAÇÃO CONCEDIDAS",
        "10046 - CONCESSÃO DE BOLSA DE INICIAÇÃO CIENTÍFICA PARA MULHERES NA GRADUAÇÃO",
        "SECTI",
      ],
      2391: [
        "2391 - GESTÃO DOS SERVIÇOS DO PLANO DIRETOR DA EDUCAÇÃO SUPERIOR DO ESTADO DE GOIÁS",
        "18806 - GESTÃO DOS SERVIÇOS DO PLANO DIRETOR DA EDUCAÇÃO SUPERIOR DO ESTADO DE GOIÁS",
        "10069 - CUMPRIMENTO DO PLANO DIRETOR DA EDUCAÇÃO SUPERIOR",
        "SECTI",
      ],
      2192: [
        "2192 - BOLSA ARTISTA",
        "18800 - BOLSA ARTISTA CONCEDIDA",
        "10085 - ESCOLA DO FUTURO DO ESTADO DE GOIÁS",
        "SECTI",
      ],
      3194: [
        "3194 - AQUISIÇÃO DO MOBILIÁRIO DA ESCOLA DO FUTURO DO ESTADO DE GOIÁS",
        "18834 - ESCOLA DO FUTURO DO ESTADO DE GOIÁS COM MOBILIÁRIO ATUALIZADO",
        "10085 - ESCOLA DO FUTURO DO ESTADO DE GOIÁS",
        "SECTI",
      ],
      2390: [
        "2390 - GESTÃO DOS SERVIÇOS DAS ESCOLAS DO FUTURO DO ESTADO DE GOIÁS",
        "18845 - GESTÃO DOS SERVIÇOS DAS ESCOLAS DO FUTURO DO ESTADO DE GOIÁS",
        "10085 - ESCOLA DO FUTURO DO ESTADO DE GOIÁS",
        "SECTI",
      ],
      2553: [
        "2553 - CONCESSÃO DE CRÉDITO SOCIAL - TECH",
        "18845 - GESTÃO DOS SERVIÇOS DAS ESCOLAS DO FUTURO DO ESTADO DE GOIÁS",
        "10085 - ESCOLA DO FUTURO DO ESTADO DE GOIÁS",
        "SECTI",
      ],
      2554: [
        "2554 - BOLSA PERMANÊNCIA",
        "18845 - GESTÃO DOS SERVIÇOS DAS ESCOLAS DO FUTURO DO ESTADO DE GOIÁS",
        "10085 - ESCOLA DO FUTURO DO ESTADO DE GOIÁS",
        "SECTI",
      ],
      2384: [
        "2384 - CONCESSÃO DE BOLSAS PARA ALUNOS DE GRADUAÇÃO E EDUCAÇÃO PROFISSIONAL E TECNOLÓGICA - EPT",
        "19067 - CONCESSÃO DE BOLSAS PARA ALUNOS DE GRADUAÇÃO E EDUCAÇÃO, PROFISSIONAL E TECNOLÓGICA - EPT",
        "10085 - ESCOLA DO FUTURO DO ESTADO DE GOIÁS",
        "SECTI",
      ],
      3202: [
        "3202 - PUBLICAÇÃO DE EDITAIS DE FOMENTO, EVENTOS E CAPACITAÇÃO DESTINADOS À ECONOMIA VERDE",
        "18854 - EDITAIS DE FOMENTO PUBLICADOS, EVENTOS E CAPACITAÇÃO",
        "10089 - ESTRATÉGIA ESTADUAL DE ECONOMIA VERDE",
        "SECTI",
      ],
      3196: [
        "3196 - CRIAÇÃO E ATRAÇÃO DE ACELERADORAS",
        "18863 - CRIAÇÃO E ATRAÇÃO DE ACELERADORAS",
        "10130 - FORTALECIMENTO DA INDÚSTRIA DE CAPITAL PARA INVESTIMENTOS EM EMPREENDEDORISMO INOVADOR",
        "SECTI",
      ],
      2382: [
        "2382 - APOIO A AMBIENTES DE INOVAÇÃO",
        "18882 - AMBIENTES DE INOVAÇÃO APOIADOS",
        "10134 - FORTALECIMENTO DOS AMBIENTES DE INOVAÇÃO",
        "SECTI",
      ],
      2393: [
        "2393 - GESTÃO E OPERACIONALIZAÇÃO DO HUB GOIÁS",
        "18883 - GESTÃO E OPERACIONALIZAÇÃO DO HUB GOIÁS",
        "10134 - FORTALECIMENTO DOS AMBIENTES DE INOVAÇÃO",
        "SECTI",
      ],
      2392: [
        "2392 - GESTÃO DOS SERVIÇOS DO PRONATEC",
        "18870 - GESTÃO DOS SERVIÇOS DO PRONATEC",
        "10209 - PROGRAMA BOLSA FORMAÇÃO/PRONATEC",
        "SECTI",
      ],
      2395: [
        "2395 - IMPLEMENTAÇÃO DO PROGRAMA DE INTERNACIONALIZAÇÃO DE AMBIENTES",
        "18890 - PROGRAMA DE INTERNACIONALIZAÇÃO DE AMBIENTES",
        "10215 - PROMOÇÃO DA INTERNACIONALIZAÇÃO DAS EMPRESAS E AMBIENTES DE INOVAÇÃO",
        "SECTI",
      ],
      2396: [
        "2396 - IMPLEMENTAÇÃO DO PROGRAMA DE INTERNACIONALIZAÇÃO DE EMPRESAS",
        "18893 - PROGRAMA DE INTERNACIONALIZAÇÃO DE EMPRESAS",
        "10215 - PROMOÇÃO DA INTERNACIONALIZAÇÃO DAS EMPRESAS E AMBIENTES DE INOVAÇÃO",
        "SECTI",
      ],
      2394: [
        "2394 - IMPLEMENTAÇÃO DE EVENTOS E PROJETOS DE TECNOLOGIA E EDUCAÇÃO",
        "18881 - EVENTOS E PROJETOS DE TECNOLOGIA E EDUCAÇÃO",
        "10240 - REALIZAÇÃO DE EVENTOS E PROJETOS DE TECNOLOGIA, INOVAÇÃO E FOMENTO À CULTURA",
        "SECTI",
      ],
      2385: [
        "2385 - DESENVOLVIMENTO DA ECONOMIA CIRCULAR - SUKATECH",
        "18902 - ECONOMIA CIRCULAR E INCLUSÃO DIGITAL",
        "10258 - SUKATECH - DESENVOLVIMENTO DA ECONOMIA CIRCULAR",
        "SECTI",
      ],
      2398: [
        "2398 - CONCESSÃO DE BOLSA DE CTI",
        "18052 - BOLSA DE CTI CONCEDIDA",
        "10114 - FOMENTO À FORMAÇÃO, ATRAÇÃO E RETENÇÃO DE TALENTOS E PESQUISADORES COM ÊNFASE NA CIÊNCIA E TECNOLOGIA",
        "FAPEG",
      ],
      2397: [
        "2397 - CONCESSÃO DE AUXÍLIO EM CTI",
        "18074 - AUXÍLIO EM CTI CONCEDIDO",
        "10118 - FOMENTO ÀS ATIVIDADES DE INOVAÇÃO E DE PESQUISA EM CTI NO ESTADO DE GOIÁS",
        "FAPEG",
      ],
      2458: [
        "2458 - DISPONIBILIZAÇÃO DE PRODUTOS DESCARTÁVEIS PARA SAÚDE",
        "18591 - PRODUTOS DESCARTÁVEIS PARA SAÚDE DISPONIBILIZADOS",
        "10070 - DESCARTÁVEIS PARA SAÚDE",
        "IQUEGO",
      ],
      2459: [
        "2459 - DISPONIBILIZAÇÃO DE CANABIDIOL",
        "18536 - CANABIDIOL DISPONIBILIZADOS",
        "10176 - MELHORIA DA QUALIDADE DE VIDA",
        "IQUEGO",
      ],
      2460: [
        "2460 - DISPONIBILIZAÇÃO DE MEDICAMENTOS ANDALOUS",
        "18583 - MEDICAMENTOS ANDALOUS DISPONIBILIZADOS",
        "10176 - MELHORIA DA QUALIDADE DE VIDA",
        "IQUEGO",
      ],
      2461: [
        "2461 - DISPONIBILIZAÇÃO DE TIRAS DE TESTE DE GLICOSE SANGUÍNEA",
        "18552 - TIRAS DE TESTE DE GLICOSE SANGUÍNEA DISPONIBILIZADAS",
        "10182 - MONITORAMENTO DA DIABETES",
        "IQUEGO",
      ],
      2462: [
        "2462 - DISPONIBILIZAÇÃO DE MEDIDORES DE GLICOSE",
        "7915 - MEDIDOR DE GLICOSE DISPONIBILIZADO",
        "10182 - MONITORAMENTO DA DIABETES",
        "IQUEGO",
      ],
      3216: [
        "3216 - IMPLANTAÇÃO DE SISTEMA DE IRRIGAÇÃO E ESPALDEIRAS",
        "18585 - SISTEMA DE IRRIGAÇÃO E ESPALDEIRAS ENTREGUES",
        "10155 - IMPLANTAÇÃO DO POLO DE FRUTICULTURA IRRIGADA DO VÃO DO PARANÃ",
        "SEAPA",
      ],
      3213: [
        "3213 - CONSTRUÇÃO DE AGROINDÚSTRIA",
        "18603 - AGROINDÚSTRIA CONSTRUÍDA",
        "10155 - IMPLANTAÇÃO DO POLO DE FRUTICULTURA IRRIGADA DO VÃO DO PARANÃ",
        "SEAPA",
      ],
      3211: [
        "3211 - AQUISIÇÃO DE MÁQUINAS / EQUIPAMENTOS AGRÍCOLAS PARA CONSERVAÇÃO DE SOLO E PROTEÇÃO DE BACIAS HIDROGRÁFICAS",
        "18522 - MÁQUINA/EQUIPAMENTO AGRÍCOLA PARA CONSERVAÇÃO DE SOLO E PROTEÇÃO DE BACIAS HIDROGRÁFICAS ADQUIRIDO",
        "10263 - USO SUSTENTÁVEL DE RECURSOS HÍDRICOS E CONSERVAÇÃO DE SOLO NA PRODUÇÃO AGROPECUÁRIA",
        "SEAPA",
      ],
      2530: [
        "2530 - IMPLANTAÇÃO DE SISTEMA DE BARRAGENS, MANUTENÇÃO E SEGURANÇA",
        "18838 - SISTEMA DE BARRAGENS, MANUTENÇÃO E SEGURANÇA IMPLANTADO",
        "10263 - USO SUSTENTÁVEL DE RECURSOS HÍDRICOS E CONSERVAÇÃO DE SOLO NA PRODUÇÃO AGROPECUÁRIA",
        "SEAPA",
      ],
      3208: [
        "3208 - AQUISIÇÃO DE EQUIPAMENTO PARA AS CADEIAS PRODUTIVAS AGROPECUÁRIAS",
        "18608 - EQUIPAMENTOS PARA AS CADEIAS PRODUTIVAS AGROPECUÁRIAS ADQUIRIDOS",
        "10094 - ESTRUTURAÇÃO E FOMENTO DAS CADEIAS PRODUTIVAS AGROPECUÁRIAS",
        "SEAPA",
      ],
      2407: [
        "2407 - GESTÃO DA INICIATIVA DE ESTRUTURAÇÃO E FOMENTO ÀS CADEIAS PRODUTIVAS AGROPECUÁRIAS",
        "19645 - GESTÃO DA INICIATIVA DE ESTRUTURAÇÃO, FORTALECIMENTO E FOMENTO DAS CADEIAS PRODUTIVAS AGROPECUÁRIAS",
        "10094 - ESTRUTURAÇÃO E FOMENTO DAS CADEIAS PRODUTIVAS AGROPECUÁRIAS",
        "SEAPA",
      ],
      2404: [
        "2404 - CONCESSÃO DE BENEFÍCIOS AO PRODUTOR PELO PROGRAMA DE AQUISIÇÃO DE ALIMENTOS",
        "10966 - PRODUTOR BENEFICIADO COM O PROGRAMA DE AQUISIÇÃO DE ALIMENTOS",
        "10157 - INCLUSÃO PRODUTIVA RURAL DE AGRICULTORES FAMILIARES EM GOIÁS",
        "SEAPA",
      ],
      3214: [
        "3214 - DISPONIBILIZAÇÃO DE FÁBRICA MÓVEL DE FARINHA E GOMA",
        "18558 - FÁBRICA MÓVEL DE FARINHA E GOMA ENTREGUE",
        "10157 - INCLUSÃO PRODUTIVA RURAL DE AGRICULTORES FAMILIARES EM GOIÁS",
        "SEAPA",
      ],
      3215: [
        "3215 - IMPLANTAÇÃO DE HORTAS COMUNITÁRIAS",
        "18597 - HORTAS COMUNITÁRIAS IMPLANTADAS",
        "10157 - INCLUSÃO PRODUTIVA RURAL DE AGRICULTORES FAMILIARES EM GOIÁS",
        "SEAPA",
      ],
      2408: [
        "2408 - REALIZAÇÃO DE CAPACITAÇÃO TÉCNICA PARA O GOIÁS SOCIAL",
        "18614 - CAPACITAÇÃO TÉCNICA PARA O GOIAS SOCIAL EFETUADA",
        "10157 - INCLUSÃO PRODUTIVA RURAL DE AGRICULTORES FAMILIARES EM GOIÁS",
        "SEAPA",
      ],
      2405: [
        "2405 - DISTRIBUIÇÃO DE SEMENTES E INSUMOS PARA PRODUTORES EM SITUAÇÃO DE VULNERABILIDADE",
        "18782 - SEMENTES E INSUMOS PARA PRODUTORES EM SITUAÇÃO DE VULNERABILIDADE ENTREGUES",
        "10157 - INCLUSÃO PRODUTIVA RURAL DE AGRICULTORES FAMILIARES EM GOIÁS",
        "SEAPA",
      ],
      2552: [
        "2552 - CONCESSÃO DE CRÉDITO SOCIAL - GOIÁS SOCIAL",
        "18913 - CREDITO SOCIAL ENTREGUE",
        "10157 - INCLUSÃO PRODUTIVA RURAL DE AGRICULTORES FAMILIARES EM GOIÁS",
        "SEAPA",
      ],
      3210: [
        "3210 - AQUISIÇÃO DE MÁQUINA / EQUIPAMENTO AGRÍCOLA",
        "3989 - MAQUINA/EQUIPAMENTO AGRICOLA ADQUIRIDO",
        "10158 - INCREMENTO DA INFRAESTRUTURA RURAL",
        "SEAPA",
      ],
      3209: [
        "3209 - AQUISIÇÃO DE EQUIPAMENTOS E LABORATÓRIOS MÓVEIS",
        "18581 - EQUIPAMENTOS E LABORATÓRIOS MÓVEIS ADQUIRIDOS",
        "10162 - INOVAÇÃO SISTEMÁTICA SOBRE INSUMOS AGROPECUÁRIOS E MELHORIA DA COMPETITIVIDADE DOS PRODUTORES.",
        "SEAPA",
      ],
      2409: [
        "2409 - REGULARIZAÇÃO DAS AGROINDÚSTRIAS DE PEQUENO PORTE",
        "18598 - REGULARIZAÇÃO DAS AGROINDÚSTRIAS DE PEQUENO PORTE",
        "10162 - INOVAÇÃO SISTEMÁTICA SOBRE INSUMOS AGROPECUÁRIOS E MELHORIA DA COMPETITIVIDADE DOS PRODUTORES.",
        "SEAPA",
      ],
      3217: [
        "3217 - INSTALAÇÃO DE UNIDADES DE REFERÊNCIA TECNOLÓGICA",
        "18604 - UNIDADES DE REFERÊNCIA TECNOLÓGICA INSTALADAS",
        "10162 - INOVAÇÃO SISTEMÁTICA SOBRE INSUMOS AGROPECUÁRIOS E MELHORIA DA COMPETITIVIDADE DOS PRODUTORES.",
        "SEAPA",
      ],
      2532: [
        "2532 - IMPLANTAÇÃO DAS METAS DO PLANO ABC",
        "18983 - METAS DO PLANO ABC IMPLANTADAS",
        "10244 - REDUÇÃO NA EMISSÃO DE CARBONO NA AGRICULTURA",
        "SEAPA",
      ],
      2531: [
        "2531 - REALIZAÇÃO DE APORTE FINANCEIRO PARA INVESTIMENTOS EM PROCESSAMENTO E GERENCIAMENTO DE RESÍDUOS SÓLIDOS",
        "19627 - APORTE FINANCEIRO PARA INVESTIMENTOS EM PROCESSAMENTO E GERENCIAMENTO DE RESÍDUOS SÓLIDOS REALIZADO",
        "10244 - REDUÇÃO NA EMISSÃO DE CARBONO NA AGRICULTURA",
        "SEAPA",
      ],
      2406: [
        "2406 - GEORREFERENCIAMENTO DE TERRAS RURAIS E EMISSÃO DE TÍTULOS DE DOMÍNIO",
        "18587 - EMISSÃO DE TÍTULOS DE DOMÍNIO E GEORREFERENCIAMENTO EXECUTADOS",
        "10247 - REGULARIZAÇÃO E REORDENAÇÃO FUNDIÁRIA",
        "SEAPA",
      ],
      2555: [
        "2555 - GESTÃO DA INICIATIVA REGULARIZAÇÃO E REORDENAÇÃO FUNDIÁRIA",
        "18609 - DIGITALIZAÇÃO E CATALOGAÇÃO DE DOCUMENTOS EFETUADOS",
        "10247 - REGULARIZAÇÃO E REORDENAÇÃO FUNDIÁRIA",
        "SEAPA",
      ],
      2533: [
        "2533 - CRÉDITO FUNDIÁRIO TERRA BRASIL",
        "18641 - VISTORIA, EQUIPAMENTOS E MONITORAMENTO - CRÉDITO FUNDIÁRIO TERRA BRASIL",
        "10247 - REGULARIZAÇÃO E REORDENAÇÃO FUNDIÁRIA",
        "SEAPA",
      ],
      3212: [
        "3212 - CERTIFICAÇÃO E PREMIAÇÃO DAS AGROINDÚSTRIAS E CADEIAS PRODUTIVAS COM SELO AGROSUSTENTÁVEL",
        "18538 - CERTIFICAR E PREMIAR AGROINDÚSTRIAS E CADEIAS PRODUTIVAS COM O SELO AGROSUSTENTÁVEL",
        "10254 - SELO AGROSUSTENTÁVEL",
        "SEAPA",
      ],
      3218: [
        "3218 - CONSTRUÇÃO DO COMPLEXO DE LABORATÓRIOS DA AGRODEFESA",
        "18789 - COMPLEXO DE LABORATÓRIOS DA AGRODEFESA CONSTRUÍDO",
        "10056 - CONSTRUÇÃO DO COMPLEXO DE LABORATÓRIOS DA AGRODEFESA",
        "AGRODEFESA",
      ],
      2412: [
        "2412 - PROMOVER A SANIDADE DA PROD. AGROPEC., A IDONEID. DOS PROD. E INSUM. E A MANUT. DOS STATUS ZOOFITOSSANITÁRIOS",
        "19628 - GESTÃO DOS SERVIÇOS DA INICIATIVA “PROMOVER A SANIDADE DA PRODUÇÃO AGROPECUÁRIA, A IDONEIDADE DOS PRODUTOS E INSUMOS, E GARANTIR A MANUTENÇÃO DOS STATUS ZOOFITOSSANITÁRIOS“",
        "10225 - PROMOVER A SANIDADE E IDONEIDADE DOS PRODUTOS E INSUMOS E GARANTIR A MANUTENÇÃO DOS STATUS ZOOFITOSSANITÁRIOS",
        "AGRODEFESA",
      ],
      2414: [
        "2414 - GESTÃO DE EDUCAÇÃO SANITÁRIA DESENVOLVIDAS PELA AGRODEFESA",
        "18896 - GESTÃO DAS AÇÕES DE EDUCAÇÃO SANITÁRIA DESENVOLVIDAS PELA AGRODEFESA",
        "10226 - PROMOVER E INCENTIVAR A DEFESA AGROPECUÁRIA POR MEIO DA EDUCAÇÃO",
        "AGRODEFESA",
      ],
      2413: [
        "2413 - GESTÃO DA INICIATIVA SOLUÇÃO DE ATENDIMENTO DIGITAL E OFERTA DE SERVIÇOS ÁGEIS E INTELIGENTES AOS CIDADÃOS",
        "18924 - GERENCIAR OS SERVIÇOS DA INICIATIVA ",
        "SOLUÇÃO DE ATENDIMENTO DIGITAL E OFERTA DE SERVIÇOS ÁGEIS E INTELIGENTES AOS CIDADÃOS",
        "10256 - SOLUÇÃO DE ATENDIMENTO DIGITAL E OFERTA DE SERVIÇOS ÁGEIS E INTELIGENTES AOS CIDADÃOS",
        "AGRODEFESA",
      ],
      3221: [
        "3221 - IMPLANTAÇÃO DE UNIDADES DEMONSTRATIVAS DE AGRICULTURA FAMILIAR",
        "18791 - UNIDADES DEMONSTRATIVAS IMPLANTADAS",
        "10063 - CRIAÇÃO DE VITRINE TECNOLÓGICA PARA AGRICULTURA FAMILIAR",
        "EMATER",
      ],
      3223: [
        "3223 - VALIDAÇÃO E DISPONIBILIZAÇÃO DE TECNOLOGIAS AGROPECUÁRIAS",
        "18792 - TECNOLOGIAS AGROPECUÁRIAS VALIDADAS E DISPONIBILIZADAS",
        "10063 - CRIAÇÃO DE VITRINE TECNOLÓGICA PARA AGRICULTURA FAMILIAR",
        "EMATER",
      ],
      3219: [
        "3219 - IMPLANTAÇÃO DA ESCOLA AGROTÉCNICA DA EMATER",
        "18786 - COLÉGIO AGROTÉCNICO DA EMATER IMPLANTADO",
        "10064 - CRIAÇÃO DO COLÉGIO AGROTÉCNICO DA EMATER",
        "EMATER",
      ],
      2423: [
        "2423 - REALIZAÇÃO DE MUTIRÕES DE DIFUSÃO DE TECNOLOGIAS E SERVIÇOS DA EMATER",
        "18795 - MUTIRÕES DE DIFUSÃO DE TECNOLOGIAS E SERVIÇOS REALIZADOS",
        "10067 - CRIAÇÃO E EXECUÇÃO DE MUTIRÕES REGIONAIS DA EMATER",
        "EMATER",
      ],
      2419: [
        "2419 - GESTÃO DOS SERVIÇOS DE PESQUISA AGROPECUÁRIA",
        "18822 - GESTÃO DOS SERVIÇOS DE PESQUISA AGROPECUÁRIA",
        "10099 - EXECUÇÃO DA POLÍTICA ESTADUAL DE PESQUISA AGROPECUÁRIA",
        "EMATER",
      ],
      2422: [
        "2422 - REALIZAÇÃO DE ASSISTÊNCIA TÉCNICA E EXTENSÃO RURAL CONTINUADA",
        "18825 - ASSISTÊNCIA TÉCNICA E EXTENSÃO RURAL CONTINUADA DE QUALIDADE REALIZADA",
        "10100 - EXECUÇÃO DAS POLÍTICAS PÚBLICAS DE ASSISTÊNCIA TÉCNICA E EXTENSÃO RURAL",
        "EMATER",
      ],
      2418: [
        "2418 - GESTÃO DE SERVIÇOS DE ASSISTÊNCIA TÉCNICA E EXTENSÃO RURAL",
        "18826 - GESTÃO DE SERVIÇOS DE ASSISTÊNCIA TÉCNICA E EXTENSÃO RURAL",
        "10100 - EXECUÇÃO DAS POLÍTICAS PÚBLICAS DE ASSISTÊNCIA TÉCNICA E EXTENSÃO RURAL",
        "EMATER",
      ],
      2417: [
        "2417 - EXPANSÃO DAS ATIVIDADES DE APOIO À PRODUÇÃO DA AGRICULTURA FAMILIAR",
        "18827 - EXPANSÃO FÍSICA E TERRITORIAL DO ALCANCE DE ATENDIMENTO AO AGRICULTOR FAMILIAR REALIZADO",
        "10104 - EXPANSÃO DAS ATIVIDADES DE APOIO À PRODUÇÃO DA AGRICULTURA FAMILIAR",
        "EMATER",
      ],
      2416: [
        "2416 - CONSTRUÇÃO, REFORMA E AMPLIAÇÃO DA INFRAESTRUTURA DAS UNIDADES DA EMATER",
        "18828 - GESTÃO DE SERVIÇOS DE RESTRUTURAÇÃO DA INFRAESTRUTURA  DAS UNIDADES",
        "10104 - EXPANSÃO DAS ATIVIDADES DE APOIO À PRODUÇÃO DA AGRICULTURA FAMILIAR",
        "EMATER",
      ],
      3220: [
        "3220 - IMPLANTAÇÃO DE MINI AGROINDÚSTRIAS ITINERANTES",
        "18831 - MÍNIS AGROINDÚSTRIAS ITINERANTES IMPLANTADAS",
        "10235 - QUALIFICAÇÃO DE JOVENS, MULHERES E EMPREENDEDORES RURAIS, EM CURSOS PROFISSIONALIZANTES",
        "EMATER",
      ],
      3262: [
        "3262 - CONSTRUÇÃO DE SISTEMA BIODIGESTOR DE RESÍDUOS",
        "18180 - TONELADAS DE  RESÍDUOS ORGÂNICOS TRATADAS NO BIODIGESTOR ",
        "10143 - GESTÃO SUSTENTÁVEL DE RESÍDUOS SÓLIDOS MEDIANTE OPERACIONALIZAÇÃO DE BIODIGESTOR",
        "CEASA",
      ],
      2438: [
        "2438 - GESTÃO DA INICIATIVA DE FOMENTO DA ECONOMIA GOIANA",
        "18011 - GESTÃO DA INICIATIVA  DE FOMENTO DA ECONOMIA GOIANA MEDIANTE A EXECUÇÃO DOS PROGRAMAS DE DESENVOLVIMENTO",
        "10107 - FOMENTAR A ECONOMIA GOIANA MEDIANTE A EXECUÇÃO DOS PROGRAMAS DE DESENVOLVIMENTO",
        "SIC",
      ],
      2439: [
        "2439 - GESTÃO DA INICIATIVA DE FOMENTO AO COMÉRCIO EXTERIOR E A ATRAÇÃO DE INVESTIMENTOS INTERNACIONAIS",
        "18516 - GESTÃO DA INICIATIVA DE FOMENTO AO COMÉRCIO EXTERIOR E A ATRAÇÃO DE INVESTIMENTOS INTERNACIONAIS",
        "10109 - FOMENTAR O COMÉRCIO EXTERIOR E A ATRAÇÃO DE INVESTIMENTOS INTERNACIONAIS",
        "SIC",
      ],
      2440: [
        "2440 - GESTÃO DA INICIATIVA DESENVOLVIMENTO DA MINERAÇÃO",
        "19076 - PRODUTO DE GESTÃO DA INICIATIVA DESENVOLVIMENTO DA MINERAÇÃO",
        "10201 - POLÍTICAS PÚBLICAS DE DESENVOLVIMENTO DA MINERAÇÃO",
        "SIC",
      ],
      3253: [
        "3253 - CONSTRUÇÃO DE MERCADÕES GOIANOS",
        "18246 - CONSTRUÇÃO DE MERCADÕES GOIANOS",
        "10202 - POLÍTICAS PÚBLICAS DE DESENVOLVIMENTO ECONÔMICO E SOCIAL REGIONALIZADO DO ESTADO DE GOIÁS",
        "SIC",
      ],
      2441: [
        "2441 - GESTÃO DA INICIATIVA DE POLÍTICAS PÚBLICAS DE DESENVOLVIMENTO ECONÔMICO E SOCIAL REGIONALIZADO",
        "18247 - GESTÃO DA INICIATIVA DE POLÍTICAS PÚBLICAS DE DESENVOLVIMENTO ECONÔMICO E SOCIAL REGIONALIZADO DO ESTADO DE GOIÁS",
        "10202 - POLÍTICAS PÚBLICAS DE DESENVOLVIMENTO ECONÔMICO E SOCIAL REGIONALIZADO DO ESTADO DE GOIÁS",
        "SIC",
      ],
      2442: [
        "2442 - GESTÃO DA INICIATIVA DE PROSPECTAR E ATRAIR NOVOS NEGÓCIOS E INVESTIMENTOS NACIONAIS",
        "18176 - GESTÃO DA INICIATIVA DE PROSPECTAR E ATRAIR NOVOS NEGÓCIOS E INVESTIMENTOS NACIONAIS",
        "10232 - PROSPECTAR E ATRAIR NOVOS NEGÓCIOS E INVESTIMENTOS NACIONAIS",
        "SIC",
      ],
      2431: [
        "2431 - GESTÃO DOS SERVIÇOS POR MEIO DA REDESIM",
        "19171 - GESTÃO DA OFERTA DE SERVIÇOS POR MEIO DA REDESIM ",
        "10188 - OFERTAR SERVIÇOS POR MEIO DA REDESIM",
        "JUCEG",
      ],
      3225: [
        "3225 - AMPLIAÇÃO / ADEQUAÇÃO DA ESTRUTURA FÍSICA E TECNOLÓGICA DA SEDE DA GOIÁS FOMENTO",
        "12039 - SEDE DA GOIÁS FOMENTO COM ESTRUTURA FÍSICA E TECNOLÓGICA AMPLIADA/ADEQUADA",
        "10050 - CONSTRUÇÃO, AMPLIAÇÃO E MODERNIZAÇÃO TECNOLÓGICA DA SEDE DA GOIÁSFOMENTO.",
        "GOIASFOMENTO",
      ],
      3228: [
        "3228 - EXPANSÃO DA ESTAÇÃO DE TRATAMENTO DE ÁGUA DO DISTRITO AGROINDUSTRIAL DE ANÁPOLIS - ETA DAIA",
        "19203 - ETA DAIA EXPANDIDA",
        "10044 - COMBATE À ESCASSEZ HÍDRICA",
        "CODEGO",
      ],
      3227: [
        "3227 - DESASSOREAMENTO DA LAGOA DE CAPTAÇÃO DE ÁGUA BRUTA DO DISTRITO AGROINDUSTRIAL DE ANÁPOLIS - DAIA",
        "19222 - LAGOA DE CAPTAÇÃO DE ÁGUA BRUTA DO DAIA 1 DESASSOREADA",
        "10044 - COMBATE À ESCASSEZ HÍDRICA",
        "CODEGO",
      ],
      3231: [
        "3231 - IMPLANTAÇÃO DO DISTRITO AGROINDUSTRIAL DO ESTADO DE GOIÁS - DIANOT",
        "19243 - INFRAESTRUTURA DIANOT IMPLANTADA",
        "10151 - IMPLANTAÇÃO DA INFRAESTRUTURA DE DISTRITOS AGROINDUSTRIAIS",
        "CODEGO",
      ],
      3232: [
        "3232 - IMPLANTAÇÃO DO DISTRITO DE CALDAS NOVAS",
        "19282 - INFRAESTRUTURA DISTRITO CALDAS NOVAS IMPLANTADA",
        "10151 - IMPLANTAÇÃO DA INFRAESTRUTURA DE DISTRITOS AGROINDUSTRIAIS",
        "CODEGO",
      ],
      3233: [
        "3233 - IMPLANTAÇÃO DO DISTRITO DE NOVO GAMA",
        "19283 - INFRAESTRUTURA DISTRITO NOVO GAMA IMPLANTADA",
        "10151 - IMPLANTAÇÃO DA INFRAESTRUTURA DE DISTRITOS AGROINDUSTRIAIS",
        "CODEGO",
      ],
      3230: [
        "3230 - IMPLANTAÇÃO DA INFRAESTRUTURA DO DISTRITO AGROINDUSTRIAL DE URUAÇU",
        "19205 - INFRAESTRUTURA DISTRITO DE URUAÇU IMPLANTADA",
        "10159 - INFRAESTRUTURA DOS DISTRITOS AGROINDUSTRIAIS",
        "CODEGO",
      ],
      3234: [
        "3234 - INSTALAÇÃO DE ILUMINAÇÃO PÚBLICA DO DISTRITO AGROINDUSTRIAL DE ANÁPOLIS - DAIA",
        "19242 - ILUMINAÇÃO PÚBLICA DO DAIA INSTALADA",
        "10159 - INFRAESTRUTURA DOS DISTRITOS AGROINDUSTRIAIS",
        "CODEGO",
      ],
      3226: [
        "3226 - AMPLIAÇÃO DA ESTAÇÃO DE TRATAMENTO DE ESGOTO DO DISTRITO AGROINDUSTRIAL DE ANÁPOLIS - ETE DAIA",
        "19245 - ETE DAIA AMPLIADA",
        "10159 - INFRAESTRUTURA DOS DISTRITOS AGROINDUSTRIAIS",
        "CODEGO",
      ],
      3229: [
        "3229 - IMPLANTAÇÃO DA INFRAESTRUTURA DO DISTRITO AGROINDUSTRIAL DE ANÁPOLIS - DAIA NORTE",
        "19262 - INICIATIVA DA INFRAESTRUTURA DOS DISTRITOS AGROINDUSTRIAIS GERIDA",
        "10159 - INFRAESTRUTURA DOS DISTRITOS AGROINDUSTRIAIS",
        "CODEGO",
      ],
      3281: [
        "3281 - INFRAESTRUTURA DE CIDADES INTELIGENTES",
        "18192 - IMPLANTAÇÃO DE PLATAFORMAS E EQUIPAMENTOS RELACIONADOS AO CONCEITO DE CIDADES INTELIGENTES NO ESTADO DE GOIÁS",
        "10042 - CIDADES INTELIGENTES",
        "SGG",
      ],
      3278: [
        "3278 - EXPANSÃO DA CAPACIDADE DE RECURSOS EM NUVEM PARA TECNOLOGIA DA INFORMAÇÃO E COMUNICAÇÃO - TIC",
        "18289 - MODERNIZAÇÃO DA INFRAESTRUTURA  E DA SEGURANÇA DE TECNOLOGIA DA INFORMAÇÃO E COMUNICAÇÃO",
        "10129 - FORTALECIMENTO DA GOVERNANÇA DE TI, COMUNICAÇÃO DOS SISTEMAS E SOLUÇÕES ESTADUAIS E DA TRANSFORMAÇÃO DIGITAL",
        "SGG",
      ],
      3283: [
        "3283 - MODERNIZAÇÃO DE SOLUÇÕES DE TI DESENVOLVIDAS",
        "18307 - DESENVOLVIMENTO E AMPLIAÇÃO DE SOLUÇÕES DE TECNOLOGIA DA INFORMAÇÃO E COMUNICAÇÃO DO GOVERNO ESTADUAL, CONTEMPLANDO SERVIÇOS DIGITAIS AOS CIDADÃOS, SISTEMAS E SOFTWARES",
        "10129 - FORTALECIMENTO DA GOVERNANÇA DE TI, COMUNICAÇÃO DOS SISTEMAS E SOLUÇÕES ESTADUAIS E DA TRANSFORMAÇÃO DIGITAL",
        "SGG",
      ],
      2487: [
        "2487 - MANUTENÇÃO DE SOLUÇÕES DE TI DESENVOLVIDAS",
        "18308 - GESTÃO DA OPERAÇÃO DOS SISTEMAS E SOLUÇÕES DE TECNOLOGIA DA INFORMAÇÃO E COMUNICAÇÃO DO GOVERNO ESTADUAL",
        "10135 - GARANTIR A DISPONIBILIDADE E QUALIDADE DOS SISTEMAS E SOLUÇÕES DE TI E COMUNICAÇÃO DO GOVERNO ESTADUAL",
        "SGG",
      ],
      2486: [
        "2486 - GESTÃO DE SERVIÇOS DE INFRAESTRUTURA, CIDADES E TRANSPORTES",
        "18187 - GESTÃO DE SERVIÇOS DE INFRAESTRUTURA, CIDADES E TRANSPORTES ",
        "10140 - GESTÃO DOS TERMINAIS RODOVIÁRIOS, CIDADES E TRANSPORTE",
        "SGG",
      ],
      3282: [
        "3282 - INSTALAÇÃO DE ESTAÇÕES DE EMBARQUE",
        "18186 - INFRAESTRUTURA DE TERMINAIS, ESTAÇÕES NO EIXO-ANHANGUERA E PONTOS DE EMBARQUE NAS EXTENSÕES DA REGIÃO METROPOLITANA DE GOIÂNIA",
        "10160 - INFRAESTRUTURA E MOBILIDADE URBANA",
        "SGG",
      ],
      2488: [
        "2488 - SUBSÍDIO TARIFÁRIO DO TRANSPORTE COLETIVO",
        "18212 - SUBSÍDIO TARIFÁRIO DO TRANSPORTE COLETIVO",
        "10160 - INFRAESTRUTURA E MOBILIDADE URBANA",
        "SGG",
      ],
      3280: [
        "3280 - IMPLEMENTAÇÃO DE SOLUÇÕES DE ECONOMIA E EFICIÊNCIA ENERGÉTICA",
        "18163 - SOLUÇÕES DE EFICIÊNCIA ENERGÉTICA PARA O PODER EXECUTIVO",
        "10078 - EFICIÊNCIA ENERGÉTICA E MATRIZ ENERGÉTICA",
        "SGG",
      ],
      3277: [
        "3277 - AMPLIAÇÃO E DIVERSIFICAÇÃO DA MATRIZ ENERGÉTICA",
        "18570 - PLANEJAMENTO ENERGÉTICO DO ESTADO DE GOIÁS",
        "10078 - EFICIÊNCIA ENERGÉTICA E MATRIZ ENERGÉTICA",
        "SGG",
      ],
      2069: [
        "2069 - APOIO AS FAMÍLIAS DE NACIONAIS NO EXTERIOR",
        "18162 - GESTÃO DE AUXÍLIO E APOIO ÀS FAMÍLIAS DE GOIANOS VITIMADOS, VULNERÁVEIS OU EM SITUAÇÃO DE RISCO NO EXTERIOR",
        "10037 - AUXÍLIO FINANCEIRO E APOIO ÀS FAMÍLIAS DE GOIANOS VITIMADOS OU EM CONDIÇÕES DE RISCO E VULNERABILIDADE SOCIAL",
        "SGG",
      ],
      3279: [
        "3279 - IMPLANTAÇÃO DA REDE DE FIBRA ÓTICA EM MUNICÍPIOS - GOIÁS DE FIBRA",
        "18191 - IMPLANTAÇÃO DA REDE DE FIBRA ÓTICA NOS MUNICÍPIOS DO ESTADO DE GOIÁS",
        "10144 - GOIÁS DE FIBRA",
        "SGG",
      ],
      2402: [
        "2402 - TITULAÇÃO DE ALUNO DE GRADUAÇÃO",
        "17746 - ALUNO DE GRADUAÇÃO TITULADO",
        "10009 - AMPLIAÇÃO DO ACESSO DA SOCIEDADE AO ENSINO SUPERIOR DE QUALIDADE",
        "UEG",
      ],
      3207: [
        "3207 - ESTRUTURAÇÃO DO CENTRO REGIONAL INTEGRADO DE PESQUISA, PÓS-GRADUAÇÃO E INOVAÇÃO",
        "17721 - CENTRO REGIONAL INTEGRADO DE PESQUISA, PÓS-GRADUAÇÃO E INOVAÇÃO ESTRUTURADO",
        "10049 - CONSOLIDAÇÃO DE CENTROS REGIONAIS INTEGRADOS DE PESQUISA, PÓS-GRADUAÇÃO E INOVAÇÃO NA UEG",
        "UEG",
      ],
      2403: [
        "2403 - TITULAÇÃO DE ALUNO DE PÓS-GRADUAÇÃO",
        "17745 - ALUNO DE PÓS-GRADUAÇÃO TITULADO",
        "10093 - ESTRUTURAÇÃO DOS CURSOS DE PÓS-GRADUAÇÃO NA UEG.",
        "UEG",
      ],
      2399: [
        "2399 - APOIO A PROJETOS E ATIVIDADES PARA ENSINO, PESQUISA, EXTENSÃO E DESENVOLVIMENTO INSTITUCIONAL DA UEG",
        "17741 - PROJETOS E ATIVIDADES PARA ENSINO, PESQUISA, EXTENSÃO E DESENVOLVIMENTO INSTITUCIONAL DA UEG DECORRENTES DE CAPTAÇÃO DE RECURSOS EXTERNOS APOIADOS",
        "10101 - EXECUÇÃO DE CONVÊNIOS E OUTROS AJUSTES COM CAPTAÇÃO DE RECURSOS",
        "UEG",
      ],
      2401: [
        "2401 - FOMENTO A PROJETO DE PESQUISA / INOVAÇÃO",
        "17744 - PROJETO DE PESQUISA/INOVAÇÃO FOMENTADO",
        "10115 - FOMENTO À PESQUISA, PÓS-GRADUAÇÃO E INOVAÇÃO NA UEG",
        "UEG",
      ],
      3333: [
        "3333 - PROJETOS E ATIVIDADES NA ÁREA DA EDUCAÇÃO (UEG), DECORRENTES DE EMENDAS PARLAMENTARES IMPOSITIVAS - LOA 2024",
        "17742 - PROJETOS E ATIVIDADES NA ÁREA DA EDUCAÇÃO, CIÊNCIA E TECNOLOGIA DECORRENTES DE EMENDAS PARLAMENTARES ESTADUAIS APOIADOS",
        "10196 - PLANO DE CAPTAÇÃO DE RECURSOS VIA EMENDAS ESTADUAIS EM BENEFÍCIO DE PROJETOS E ATIVIDADES DA UEG",
        "UEG",
      ],
      2467: [
        "2467 - APARELHAMENTO DAS UNIDADES DA UEG",
        "19662 - UNIDADE DA UEG APARELHADA",
        "10197 - PLANO DE MELHORIA INSTITUCIONAL NA UEG ATRAVÉS DE AQUISIÇÕES E CONTRATAÇÕES",
        "UEG",
      ],
      2400: [
        "2400 - FOMENTO A AÇÃO DE EXTENSÃO",
        "17720 - AÇÃO DE EXTENSÃO FOMENTADA",
        "10198 - POLÍTICA DE EXTENSÃO DA UEG",
        "UEG",
      ],
      2466: [
        "2466 - CONCESSÃO DE BOLSA/AUXÍLIO FINANCEIRO ACADÊMICO",
        "17760 - PESSOA BENEFICIADA COM BOLSA OU AUXÍLIO FINANCEIRO ACADÊMICO",
        "10199 - POLÍTICA DE INCENTIVO ACADÊMICO E FINANCEIRO PARA ESTUDANTES UNIVERSITÁRIOS",
        "UEG",
      ],
      3206: [
        "3206 - CONSTRUÇÃO OU REFORMA DE INSTALAÇÃO FÍSICA DA UEG",
        "17743 - INSTALAÇÃO FÍSICA DA UEG CONSTRUÍDA OU REFORMADA",
        "10217 - PROMOÇÃO DA QUALIDADE DE INFRAESTRUTURA DOS CAMPUS E UNIDADES UNIVERSITÁRIAS DA UEG",
        "UEG",
      ],
      3205: [
        "3205 - CONSTRUÇÂO DE OBRA PRIORITÁRIA DO GOVERNO PELA UEG",
        "19004 - OBRA PRIORITÁRIA DO GOVERNO CONSTRUÍDA",
        "10217 - PROMOÇÃO DA QUALIDADE DE INFRAESTRUTURA DOS CAMPUS E UNIDADES UNIVERSITÁRIAS DA UEG",
        "UEG",
      ],
      3263: [
        "3263 - DISTRIBUIÇÃO E COMERCIALIZAÇÃO DE GÁS NATURAL PARA O SEGMENTO INDUSTRIAL",
        "19142 - CONTRATO FIRMADO PARA A DISTRIBUIÇÃO DE GÁS NATURAL INDUSTRIAL",
        "10045 - COMERCIALIZAÇÃO DE GÁS NATURAL PARA O SEGMENTO INDUSTRIAL",
        "GOIASGÁS",
      ],
      3264: [
        "3264 - DISTRIBUIÇÃO E COMERCIALIZAÇÃO DE GÁS NATURAL RENOVÁVEL # BIOMETANO",
        "9017 - GÁS NATURAL DISTRIBUÍDO",
        "10076 - DISTRIBUIÇÃO E COMERCIALIZAÇÃO DE GÁS NATURAL RENOVÁVEL – BIOMETANO",
        "GOIASGÁS",
      ],
      3236: [
        "3236 - AMPLIAÇÃO DA USINA HIDRELÉTRICA DE ROCHEDO",
        "18137 - USINA HIDRELÉTRICA DE ROCHEDO AMPLIADA",
        "10006 - AMPLIAÇÃO DA CAPACIDADE INSTALADA DE GERAÇÃO DE ENERGIA NO ESTADO DE GOIÁS",
        "CELGPAR",
      ],
      3239: [
        "3239 - IMPLANTAÇÃO DE USINAS FOTOVOLTAICAS",
        "18139 - USINAS FOTOVOLTAICAS (INCLUSIVE FLUTUANTES) IMPLANTADAS",
        "10006 - AMPLIAÇÃO DA CAPACIDADE INSTALADA DE GERAÇÃO DE ENERGIA NO ESTADO DE GOIÁS",
        "CELGPAR",
      ],
      3238: [
        "3238 - EXPANSÃO DAS INSTALAÇÕES DE TRANSMISSÃO DE ENERGIA",
        "18183 - INSTALAÇÃO DE TRANSMISSÃO DE ENERGIA CONSTRUÍDA",
        "10105 - EXPANSÃO DAS INSTALAÇÕES DE TRANSMISSÃO DE ENERGIA",
        "CELGPAR",
      ],
      3241: [
        "3241 - INSTALAÇÃO DE PONTOS DE RECARGA PARA VEÍCULOS ELÉTRICOS",
        "18136 - INSTALAÇÃO DE PONTOS DE RECARGAS PARA VEÍCULOS ELÉTRICOS EM GOIÁS INSTALADOS",
        "10152 - IMPLANTAÇÃO DE INFRAESTRURA DE RECARGA PARA VEÍCULOS ELÉTRICOS EM GOIÁS",
        "CELGPAR",
      ],
      3242: [
        "3242 - MODERNIZAÇÃO DE INSTALAÇÕES DA CELGPAR",
        "18161 - INSTALAÇÕES MODERNIZADAS",
        "10180 - MODERNIZAÇÃO DAS INSTALAÇÕES",
        "CELGPAR",
      ],
      3237: [
        "3237 - CONSTRUÇÃO DE PLANTAS DE RECUPERAÇÃO ENERGÉTICA DE RESÍDUOS SÓLIDOS URBANOS",
        "18184 - NOVAS PLANTAS DE RECUPERAÇÃO ENERGÉTICA DE RESÍDUOS SÓLIDOS URBANOS CONSTRUÍDAS",
        "10117 - FOMENTO A PROJETOS DE RECUPERAÇÃO ENERGÉTICA DE RESÍDUOS SÓLIDOS",
        "CELGPAR",
      ],
      3276: [
        "3276 - ESTRUTURAÇÃO PARA RECEPÇÃO DE ÔNIBUS ELÉTRICO",
        "19682 - ESTRUTURA PARA RECEBER ÔNIBUS ELÉTRICO ",
        "10091 - ESTRUTURA PARA RECEBER ÔNIBUS ELÉTRICO",
        "METROBUS",
      ],
      2432: [
        "2432 - GESTÃO E MANUTENÇÃO DA FROTA DE ÔNIBUS À COMBUSTÃO",
        "18462 - ÓNIBUS EM OPERAÇÃO",
        "10141 - GESTÃO E MANUTENÇÃO DAS ATIVIDADES DA METROBUS",
        "METROBUS",
      ],
      2443: [
        "2443 - CERTIFICAÇÃO EM QUALIFICAÇÃO PROFISSIONAL",
        "16760 - ALUNO CERTIFICADO EM QUALIFICAÇÃO PROFISSIONAL",
        "10010 - AMPLIAR A CAPACITAÇÃO E QUALIFICAÇÃO DA MÃO DE OBRA PROFISSIONAL NO ESTADO DE GOIÁS - COTEC´S",
        "RETOMADA",
      ],
      2444: [
        "2444 - BOLSA QUALIFICAÇÃO PROFISSIONAL",
        "18879 - BOLSA QUALIFICAÇÃO PROFISSIONAL ENTREGUE",
        "10010 - AMPLIAR A CAPACITAÇÃO E QUALIFICAÇÃO DA MÃO DE OBRA PROFISSIONAL NO ESTADO DE GOIÁS - COTEC´S",
        "RETOMADA",
      ],
      2445: [
        "2445 - ATENDIMENTO AO ARTESÃO",
        "18858 - ARTESÃO ATENDIDO",
        "10041 - BORÁ GOIÁS - POTENCIALIZAR A ECONOMIA CRIATIVA DO ESTADO DE GOIÁS",
        "RETOMADA",
      ],
      3254: [
        "3254 - REALIZAÇÃO DE EVENTOS DE PROMOÇÃO DA ECONOMIA",
        "18861 - PROMOÇÃO DA ECONOMIA - EVENTOS REALIZADOS",
        "10041 - BORÁ GOIÁS - POTENCIALIZAR A ECONOMIA CRIATIVA DO ESTADO DE GOIÁS",
        "RETOMADA",
      ],
      2446: [
        "2446 - ASSESSORIA DE COOPERATIVA PELA RETOMADA",
        "18864 - COOPERATIVA ASSESSORADA",
        "10061 - COOPERA GOIÁS - APOIO E FOMENTO AO COOPERATIVISMO",
        "RETOMADA",
      ],
      2447: [
        "2447 - FOMENTO DE COOPERATIVA - RECICLA GOIÁS",
        "18884 - COOPERATIVA FOMENTADA - RECICLA GOIÁS",
        "10061 - COOPERA GOIÁS - APOIO E FOMENTO AO COOPERATIVISMO",
        "RETOMADA",
      ],
      2448: [
        "2448 - FOMENTO A ARRANJOS PRODUTIVOS LOCAIS - APL'S",
        "18851 - APL'S FOMENTADAS",
        "10111 - FOMENTAR OS ARRANJOS PRODUTIVOS LOCAIS NO ESTADO DE GOIÁS - APL´S",
        "RETOMADA",
      ],
      2318: [
        "2318 - CONCESSÃO DE CRÉDITO SOCIAL - FOMENTO À PROFISSIONALIZAÇÃO E AO EMPREENDEDORISMO",
        "18930 - CRÉDITO CONCEDIDO",
        "10166 - MAIS CRÉDITO - FACILITAR O ACESSO AO CRÉDITO",
        "RETOMADA",
      ],
      3255: [
        "3255 - CONCESSÃO DE CRÉDITO - MAIS CRÉDITO",
        "18937 - PESSOAS ATENDIDAS - MAIS CRÉDITO",
        "10166 - MAIS CRÉDITO - FACILITAR O ACESSO AO CRÉDITO",
        "RETOMADA",
      ],
      2449: [
        "2449 - INSERÇÃO / REINSERÇÃO DE TRABALHADOR NO MERCADO DE TRABALHO",
        "16755 - TRABALHADOR INSERIDO/REINSERIDO NO MERCADO DE TRABALHO",
        "10167 - MAIS EMPREGO - AMPLIAR O ACESSO AO MERCADO DE TRABALHO",
        "RETOMADA",
      ],
      2450: [
        "2450 - OFERTA DE VAGAS DE EMPREGO - MAIS EMPREGO",
        "18917 - VAGAS DE EMPREGOS OFERTADAS - MAIS EMPREGO",
        "10167 - MAIS EMPREGO - AMPLIAR O ACESSO AO MERCADO DE TRABALHO",
        "RETOMADA",
      ],
      2426: [
        "2426 - GESTÃO DA ESTRUTURAÇÃO DOS PRODUTOS TURÍSTICOS",
        "18026 - GESTÃO DA ESTRUTURAÇÃO DOS PRODUTOS",
        "10092 - ESTRUTURAÇÃO DE PRODUTOS TURÍSTICOS",
        "GOIÁSTURISMO",
      ],
      2424: [
        "2424 - ESTRUTURAÇÃO DE NOVOS PRODUTOS TURÍSTICOS",
        "18523 - PRODUTOS TURÍSTICOS ESTRUTURADOS",
        "10092 - ESTRUTURAÇÃO DE PRODUTOS TURÍSTICOS",
        "GOIÁSTURISMO",
      ],
      2425: [
        "2425 - FORMATAÇÃO DE PRODUTO TURÍSTICO PARA REGIÃO DO NORDESTE GOIANO",
        "18001 - FORMATAÇÃO DE PRODUTO TURÍSTICO ESTRUTURADO",
        "10110 - FOMENTAR O TURISMO NA REGIÃO DO NORDESTE GOIANO",
        "GOIÁSTURISMO",
      ],
      2429: [
        "2429 - GESTÃO DO FOMENTO AO TURISMO NA REGIÃO NORDESTE GOIANO",
        "18004 - GESTÃO DE FOMENTO AO NORDESTE GOIANO",
        "10110 - FOMENTAR O TURISMO NA REGIÃO DO NORDESTE GOIANO",
        "GOIÁSTURISMO",
      ],
      2428: [
        "2428 - GESTÃO DE QUALIFICAÇÃO DO TRADE TURÍSTICO",
        "17947 - GESTÃO DE QUALIFICAÇÃO DO TRADE TURÍSTICO",
        "10237 - QUALIFICAÇÃO DO TRADE TURÍSTICO",
        "GOIÁSTURISMO",
      ],
      2468: [
        "2468 - REALIZAÇÃO DE QUALIFICAÇÃO DE TURISMO",
        "18524 - QUALIFICAÇÃO DE TURISMO REALIZADA",
        "10237 - QUALIFICAÇÃO DO TRADE TURÍSTICO",
        "GOIÁSTURISMO",
      ],
      2430: [
        "2430 - PARTICIPAÇÃO EM FEIRAS, EVENTOS E AÇÕES TURÍSTICAS",
        "17950 - PARTICIPAÇÃO EM FEIRAS, EVENTOS E AÇÕES TURÍSTICAS SEGMENTADAS",
        "10251 - SEGMENTAÇÃO DO MERCADO TURÍSTICO",
        "GOIÁSTURISMO",
      ],
      2427: [
        "2427 - GESTÃO DA INICIATIVA SEGMENTAÇÃO DO MERCADO TURÍSTICO",
        "17964 - GESTÃO DA SEGMENTAÇÃO DO MERCADO TURÍSTICO",
        "10251 - SEGMENTAÇÃO DO MERCADO TURÍSTICO",
        "GOIÁSTURISMO",
      ],
      2469: [
        "2469 - FORMALIZAÇÃO DE CONVÊNIOS PARA A PROMOÇÃO DO TURISMO ATRAVÉS DA TRANSFERÊNCIA ESPECIAL A MUNICÍPIOS GOIANOS",
        "17966 - TRANSFERÊNCIA ESPECIAL A MUNICÍPIOS GOIANOS",
        "10251 - SEGMENTAÇÃO DO MERCADO TURÍSTICO",
        "GOIÁSTURISMO",
      ],
      3304: [
        "3304 - EXECUÇÃO DO PROGRAMA DE AQUISIÇÃO DE IMÓVEIS PARA FINS HABITACIONAIS DE INTERESSE SOCIAL",
        "18353 - PROGRAMA DE AQUISIÇÃO DE IMÓVEIS PARA FINS HABITACIONAIS DE INTERESSE SOCIAL",
        "10121 - FORMULAR POLÍTICAS PÚBLICAS DE HABITAÇÃO DE INTERESSE SOCIAL",
        "SEINFRA",
      ],
      3305: [
        "3305 - EXECUÇÃO DO PROGRAMA DE IMPLEMENTAÇÃO DE LOTEAMENTO DE HABITAÇÃO DE INTERESSE SOCIAL",
        "18460 - PROGRAMA DE IMPLEMENTAÇÃO DE LOTEAMENTO DE HABITAÇÃO DE INTERESSE SOCIAL",
        "10121 - FORMULAR POLÍTICAS PÚBLICAS DE HABITAÇÃO DE INTERESSE SOCIAL",
        "SEINFRA",
      ],
      3306: [
        "3306 - FORMULAÇÃO DE PROGRAMAS HABITACIONAIS DIRECIONADOS ÀS NECESSIDADES DOS GRUPOS VULNERÁVEIS",
        "18358 - FORMULAR PROGRAMAS HABITACIONAIS DIRECIONADOS ÀS NECESSIDADES DOS GRUPOS VULNERÁVEIS",
        "10156 - IMPLEMENTAR POLÍTICAS PÚBLICAS VOLTADAS PARA GRUPOS VULNERÁVEIS",
        "SEINFRA",
      ],
      3297: [
        "3297 - ELABORAÇÃO DE ESTUDOS DE VIABILIDADE TÉCNICA, ECONÔMICA E AMBIENTAL - EVTEA PARA PROJETOS DE HABITAÇÃO",
        "19503 - ESTUDOS DE VIABILIDADE TÉCNICA, ECONÔMICA E AMBIENTAL - EVTEA",
        "10156 - IMPLEMENTAR POLÍTICAS PÚBLICAS VOLTADAS PARA GRUPOS VULNERÁVEIS",
        "SEINFRA",
      ],
      3298: [
        "3298 - ELABORAÇÃO DE ESTUDOS DE VIABILIDADE TÉCNICA, ECONÔMICA E AMBIENTAL - EVTEA PARA PROJETOS DE SANEAMENTO BÁSICO",
        "19503 - ESTUDOS DE VIABILIDADE TÉCNICA, ECONÔMICA E AMBIENTAL - EVTEA",
        "10222 - PROMOVER A EXPANSÃO DO SANEAMENTO BÁSICO NO ESTADO DE GOIÁS",
        "SEINFRA",
      ],
      3312: [
        "3312 - IMPLANTAÇÃO DE SANEAMENTO EM ÁREAS RURAIS",
        "19510 - IMPLANTAÇÃO DE SANEAMENTO RURAL",
        "10222 - PROMOVER A EXPANSÃO DO SANEAMENTO BÁSICO NO ESTADO DE GOIÁS",
        "SEINFRA",
      ],
      3320: [
        "3320 - PROMOVER ESTUDOS DE PARCERIAS PÚBLICO-PRIVADAS (PPP) PARA A IMPLANTAÇÃO DE PROJETOS DE SANEAMENTO",
        "19003 - PROMOÇÃO DE ESTUDOS PARA UNIVERSALIZAÇÃO DO SANEAMENTO BÁSICO",
        "10223 - PROMOVER A EXPANSÃO DO SANEAMENTO BÁSICO NO ESTADO DE GOIÁS POR MEIO DE PPPS",
        "SEINFRA",
      ],
      2535: [
        "2535 - DISTRIBUIÇÃO E INSTALAÇÃO DE RESERVATÓRIOS DOMICILIARES DE ÁGUA",
        "19542 - DISTRIBUIÇÃO E INSTALAÇÃO DE RESERVATÓRIO",
        "10228 - PROMOVER MELHORIA E AUMENTO DA QUALIDADE E GARANTIR A CONTINUIDADE NO ABASTECIMENTO DE ÁGUA NAS RESIDÊNCIAS DE",
        "SEINFRA",
      ],
      3324: [
        "3324 - CONSTRUÇÃO DE OBRAS DE ARTE ESPECIAIS",
        "19462 - CONSTRUÇÃO DE OBRAS DE ARTE ESPECIAIS",
        "10018 - APRIMORAR A MALHA RODOVIÁRIA E PROMOVER O CRESCIMENTO ECONÔMICO ATRAVÉS DO ESCOAMENTO EFICIENTE DE CARGAS",
        "SEINFRA",
      ],
      2323: [
        "2323 - IMPLANTAÇÃO E CONSTRUÇÃO DE OBRAS DE ARTE",
        "19462 - CONSTRUÇÃO DE OBRAS DE ARTE ESPECIAIS",
        "10018 - APRIMORAR A MALHA RODOVIÁRIA E PROMOVER O CRESCIMENTO ECONÔMICO ATRAVÉS DO ESCOAMENTO EFICIENTE DE CARGAS",
        "SEINFRA",
      ],
      2539: [
        "2539 - MANUTENÇÃO E RECUPERAÇÃO DE OBRAS DE ARTE ESPECIAIS",
        "19482 - RECUPERAÇÃO DE OBRAS DE ARTE ESPECIAIS",
        "10018 - APRIMORAR A MALHA RODOVIÁRIA E PROMOVER O CRESCIMENTO ECONÔMICO ATRAVÉS DO ESCOAMENTO EFICIENTE DE CARGAS",
        "SEINFRA",
      ],
      2324: [
        "2324 - MANUTENÇÃO E CONSERVAÇÃO DE INFRAESTRUTURA RODOVIÁRIA",
        "19502 - PROJETOS EXECUTIVOS DE OBRAS",
        "10018 - APRIMORAR A MALHA RODOVIÁRIA E PROMOVER O CRESCIMENTO ECONÔMICO ATRAVÉS DO ESCOAMENTO EFICIENTE DE CARGAS",
        "SEINFRA",
      ],
      3296: [
        "3296 - ELABORAÇÃO DE ESTUDOS DE VIABILIDADE TÉCNICA, ECONÔMICA E AMBIENTAL - EVTEA PARA INFRAESTRUTURA DE TRANSPORTES",
        "19503 - ESTUDOS DE VIABILIDADE TÉCNICA, ECONÔMICA E AMBIENTAL - EVTEA",
        "10018 - APRIMORAR A MALHA RODOVIÁRIA E PROMOVER O CRESCIMENTO ECONÔMICO ATRAVÉS DO ESCOAMENTO EFICIENTE DE CARGAS",
        "SEINFRA",
      ],
      3310: [
        "3310 - IMPLANTAÇÃO DE BALANÇAS RODOVIÁRIAS PARA PESAGEM DE VEÍCULOS DE CARGA",
        "19505 - IMPLANTAÇÃO DE BALANÇAS RODOVIÁRIAS",
        "10018 - APRIMORAR A MALHA RODOVIÁRIA E PROMOVER O CRESCIMENTO ECONÔMICO ATRAVÉS DO ESCOAMENTO EFICIENTE DE CARGAS",
        "SEINFRA",
      ],
      3314: [
        "3314 - IMPLANTAÇÃO DO ANEL VIÁRIO DO ENTORNO DO DISTRITO FEDERAL",
        "19782 - ANEL VIÁRIO IMPLANTADO - ENTORNO DO DISTRITO FEDERAL",
        "10018 - APRIMORAR A MALHA RODOVIÁRIA E PROMOVER O CRESCIMENTO ECONÔMICO ATRAVÉS DO ESCOAMENTO EFICIENTE DE CARGAS",
        "SEINFRA",
      ],
      3313: [
        "3313 - IMPLANTAÇÃO DO ANEL VIÁRIO DA REGIÃO METROPOLITANA DE GOIÂNIA",
        "19783 - ANEL VIÁRIO IMPLANTADO - REGIÃO METROPOLITANA DE GOIÂNIA",
        "10018 - APRIMORAR A MALHA RODOVIÁRIA E PROMOVER O CRESCIMENTO ECONÔMICO ATRAVÉS DO ESCOAMENTO EFICIENTE DE CARGAS",
        "SEINFRA",
      ],
      3145: [
        "3145 - PAVIMENTAÇÃO DA GO-309",
        "9782 - Nova rodovia pavimentada",
        "10018 - APRIMORAR A MALHA RODOVIÁRIA E PROMOVER O CRESCIMENTO ECONÔMICO ATRAVÉS DO ESCOAMENTO EFICIENTE DE CARGAS",
        "SEINFRA",
      ],
      3146: [
        "3146 - PAVIMENTAÇÃO DA GO-401",
        "9782 - Nova rodovia pavimentada",
        "10018 - APRIMORAR A MALHA RODOVIÁRIA E PROMOVER O CRESCIMENTO ECONÔMICO ATRAVÉS DO ESCOAMENTO EFICIENTE DE CARGAS",
        "SEINFRA",
      ],
      3265: [
        "3265 - PAVIMENTAÇÃO DA GO-341",
        "9782 - Nova rodovia pavimentada",
        "10018 - APRIMORAR A MALHA RODOVIÁRIA E PROMOVER O CRESCIMENTO ECONÔMICO ATRAVÉS DO ESCOAMENTO EFICIENTE DE CARGAS",
        "SEINFRA",
      ],
      3266: [
        "3266 - PAVIMENTAÇÃO DA GO-461",
        "9782 - Nova rodovia pavimentada",
        "10018 - APRIMORAR A MALHA RODOVIÁRIA E PROMOVER O CRESCIMENTO ECONÔMICO ATRAVÉS DO ESCOAMENTO EFICIENTE DE CARGAS",
        "SEINFRA",
      ],
      3267: [
        "3267 - PAVIMENTAÇÃO DA GO-050",
        "9782 - Nova rodovia pavimentada",
        "10018 - APRIMORAR A MALHA RODOVIÁRIA E PROMOVER O CRESCIMENTO ECONÔMICO ATRAVÉS DO ESCOAMENTO EFICIENTE DE CARGAS",
        "SEINFRA",
      ],
      3268: [
        "3268 - PAVIMENTAÇÃO DA GO-178",
        "9782 - Nova rodovia pavimentada",
        "10018 - APRIMORAR A MALHA RODOVIÁRIA E PROMOVER O CRESCIMENTO ECONÔMICO ATRAVÉS DO ESCOAMENTO EFICIENTE DE CARGAS",
        "SEINFRA",
      ],
      3269: [
        "3269 - PAVIMENTAÇÃO DA GO-206",
        "9782 - Nova rodovia pavimentada",
        "10018 - APRIMORAR A MALHA RODOVIÁRIA E PROMOVER O CRESCIMENTO ECONÔMICO ATRAVÉS DO ESCOAMENTO EFICIENTE DE CARGAS",
        "SEINFRA",
      ],
      3270: [
        "3270 - PAVIMENTAÇÃO DA GO-194",
        "9782 - Nova rodovia pavimentada",
        "10018 - APRIMORAR A MALHA RODOVIÁRIA E PROMOVER O CRESCIMENTO ECONÔMICO ATRAVÉS DO ESCOAMENTO EFICIENTE DE CARGAS",
        "SEINFRA",
      ],
      3271: [
        "3271 - PAVIMENTAÇÃO DA GO-139",
        "9782 - Nova rodovia pavimentada",
        "10018 - APRIMORAR A MALHA RODOVIÁRIA E PROMOVER O CRESCIMENTO ECONÔMICO ATRAVÉS DO ESCOAMENTO EFICIENTE DE CARGAS",
        "SEINFRA",
      ],
      3272: [
        "3272 - PAVIMENTAÇÃO DA GO-425",
        "9782 - Nova rodovia pavimentada",
        "10018 - APRIMORAR A MALHA RODOVIÁRIA E PROMOVER O CRESCIMENTO ECONÔMICO ATRAVÉS DO ESCOAMENTO EFICIENTE DE CARGAS",
        "SEINFRA",
      ],
      3273: [
        "3273 - PAVIMENTAÇÃO DA GO-219",
        "9782 - Nova rodovia pavimentada",
        "10018 - APRIMORAR A MALHA RODOVIÁRIA E PROMOVER O CRESCIMENTO ECONÔMICO ATRAVÉS DO ESCOAMENTO EFICIENTE DE CARGAS",
        "SEINFRA",
      ],
      3274: [
        "3274 - PAVIMENTAÇÃO DA GO-236",
        "9782 - Nova rodovia pavimentada",
        "10018 - APRIMORAR A MALHA RODOVIÁRIA E PROMOVER O CRESCIMENTO ECONÔMICO ATRAVÉS DO ESCOAMENTO EFICIENTE DE CARGAS",
        "SEINFRA",
      ],
      3275: [
        "3275 - PAVIMENTAÇÃO DA GO-411",
        "9782 - Nova rodovia pavimentada",
        "10018 - APRIMORAR A MALHA RODOVIÁRIA E PROMOVER O CRESCIMENTO ECONÔMICO ATRAVÉS DO ESCOAMENTO EFICIENTE DE CARGAS",
        "SEINFRA",
      ],
      3334: [
        "3334 - PAVIMENTAÇÃO DA GO-460 (DIOLÂNDIA/SÃO PATRÍCIO)",
        "9782 - Nova rodovia pavimentada",
        "10018 - APRIMORAR A MALHA RODOVIÁRIA E PROMOVER O CRESCIMENTO ECONÔMICO ATRAVÉS DO ESCOAMENTO EFICIENTE DE CARGAS",
        "SEINFRA",
      ],
      3325: [
        "3325 - PAVIMENTAÇÃO E CONSTRUÇÃO DE NOVAS RODOVIAS",
        "9782 - Nova rodovia pavimentada",
        "10018 - APRIMORAR A MALHA RODOVIÁRIA E PROMOVER O CRESCIMENTO ECONÔMICO ATRAVÉS DO ESCOAMENTO EFICIENTE DE CARGAS",
        "SEINFRA",
      ],
      3144: [
        "3144 - DUPLICAÇÃO DA GO-174",
        "9783 - Rodovia duplicada",
        "10018 - APRIMORAR A MALHA RODOVIÁRIA E PROMOVER O CRESCIMENTO ECONÔMICO ATRAVÉS DO ESCOAMENTO EFICIENTE DE CARGAS",
        "SEINFRA",
      ],
      3293: [
        "3293 - DUPLICAÇÃO DE RODOVIAS",
        "9783 - Rodovia duplicada",
        "10018 - APRIMORAR A MALHA RODOVIÁRIA E PROMOVER O CRESCIMENTO ECONÔMICO ATRAVÉS DO ESCOAMENTO EFICIENTE DE CARGAS",
        "SEINFRA",
      ],
      3147: [
        "3147 - RESTAURAÇÃO DA GO-080",
        "9792 - RODOVIA PAVIMENTADA RECONSTRUÍDA ",
        "10018 - APRIMORAR A MALHA RODOVIÁRIA E PROMOVER O CRESCIMENTO ECONÔMICO ATRAVÉS DO ESCOAMENTO EFICIENTE DE CARGAS",
        "SEINFRA",
      ],
      3326: [
        "3326 - RESTAURAÇÃO DE RODOVIAS PAVIMENTADAS",
        "9792 - RODOVIA PAVIMENTADA RECONSTRUÍDA ",
        "10018 - APRIMORAR A MALHA RODOVIÁRIA E PROMOVER O CRESCIMENTO ECONÔMICO ATRAVÉS DO ESCOAMENTO EFICIENTE DE CARGAS",
        "SEINFRA",
      ],
      3295: [
        "3295 - ELABORAÇÃO DE ESTUDOS DE VIABILIDADE TÉCNICA, ECONÔMICA E AMBIENTAL - EVTEA EM DISTRITOS AGROINDUSTRIAIS",
        "19503 - ESTUDOS DE VIABILIDADE TÉCNICA, ECONÔMICA E AMBIENTAL - EVTEA",
        "10071 - DESCONCENTRAR A IMPLANTAÇÃO E PROMOVER A ATRATIVIDADE DOS DISTRITOS AGROINDUSTRIAIS DO ESTADO DE GOIÁS",
        "SEINFRA",
      ],
      3319: [
        "3319 - PROMOÇÃO DA ATRATIVIDADE DOS DISTRITOS AGROINDUSTRIAIS",
        "19504 - SUPERVISÃO DE OBRAS",
        "10071 - DESCONCENTRAR A IMPLANTAÇÃO E PROMOVER A ATRATIVIDADE DOS DISTRITOS AGROINDUSTRIAIS DO ESTADO DE GOIÁS",
        "SEINFRA",
      ],
      3311: [
        "3311 - IMPLANTAÇÃO DE NOVOS DISTRITOS AGROINDUSTRIAIS",
        "19522 - GERENCIAMENTO DE PROJETOS E OBRAS",
        "10071 - DESCONCENTRAR A IMPLANTAÇÃO E PROMOVER A ATRATIVIDADE DOS DISTRITOS AGROINDUSTRIAIS DO ESTADO DE GOIÁS",
        "SEINFRA",
      ],
      3321: [
        "3321 - REALIZAÇÃO DE PROJETO DE INFRAESTRUTURA TURÍSTICA",
        "19506 - PROJETO DE INFRAESTRUTURA TURÍSTICA REALIZADO",
        "10181 - MODERNIZAÇÃO E AMPLIAÇÃO DA INFRAESTRUTURA DE FORMA REGIONALIZADA",
        "SEINFRA",
      ],
      3316: [
        "3316 - MODERNIZAÇÃO E ESTRUTURAÇÃO DE AERÓDROMOS PARA REALIZAÇÃO DE VÔOS REGIONAIS",
        "19509 - CAPACITAÇÃO DE AERÓDROMOS PARA REALIZAÇÃO DE VOOS REGIONAIS",
        "10181 - MODERNIZAÇÃO E AMPLIAÇÃO DA INFRAESTRUTURA DE FORMA REGIONALIZADA",
        "SEINFRA",
      ],
      3322: [
        "3322 - REALIZAÇÃO DE PROJETOS DE CAPTAÇÃO DE RECURSOS PARA OBRAS PÚBLICAS MUNICIPAIS",
        "19523 - PROJETOS DE CAPTAÇÃO DE RECURSOS FINALIZADOS",
        "10181 - MODERNIZAÇÃO E AMPLIAÇÃO DA INFRAESTRUTURA DE FORMA REGIONALIZADA",
        "SEINFRA",
      ],
      3303: [
        "3303 - EXECUÇÃO DE OBRAS PÚBLICAS DE INFRAESTRUTURA MUNICIPAIS",
        "19802 - OBRA DE INFRAESTRUTURA MUNICIPAL REALIZADA",
        "10181 - MODERNIZAÇÃO E AMPLIAÇÃO DA INFRAESTRUTURA DE FORMA REGIONALIZADA",
        "SEINFRA",
      ],
      3290: [
        "3290 - CESSÃO DE MÁQUINAS E EQUIPAMENTOS PARA CONSTRUÇÃO, MANUTENÇÃO E RESTAURAÇÃO DA INFRAESTRUTURA DOS MUNICÍPIOS",
        "19803 - MÁQUINA / EQUIPAMENTO ENTREGUE",
        "10181 - MODERNIZAÇÃO E AMPLIAÇÃO DA INFRAESTRUTURA DE FORMA REGIONALIZADA",
        "SEINFRA",
      ],
      3289: [
        "3289 - AMPLIAÇÃO, REFORMA E ADEQUAÇÃO DE EDIFICAÇÕES PÚBLICAS - GOIÁS EM MOVIMENTO",
        "18802 - GOIÁS EM MOVIMENTO - EDIFICAÇÕES PÚBLICAS AMPLIADAS, REFORMADAS E ADEQUADAS ",
        "10145 - GOIÁS EM MOVIMENTO - CONSTRUÇÃO E CONSERVAÇÃO DE PRÓPRIOS PÚBLICOS - OBRAS CIVIS",
        "GOINFRA",
      ],
      3291: [
        "3291 - CONSTRUÇÃO DE EDIFICAÇÕES PÚBLICAS - GOIÁS EM MOVIMENTO",
        "18804 - GOIÁS EM MOVIMENTO - EDIFICAÇÕES PÚBLICAS CONSTRUÍDAS",
        "10145 - GOIÁS EM MOVIMENTO - CONSTRUÇÃO E CONSERVAÇÃO DE PRÓPRIOS PÚBLICOS - OBRAS CIVIS",
        "GOINFRA",
      ],
      2538: [
        "2538 - MANUTENÇÃO DA INFRAESTRUTURA VIÁRIA - GOIÁS EM MOVIMENTO",
        "18918 - GOIÁS EM MOVIMENTO - MANUTENÇÃO DA INFRAESTRUTURA VIÁRIA",
        "10146 - GOIÁS EM MOVIMENTO - EXPANSÃO E MELHORIA DA INFRAESTRUTURA VIÁRIA",
        "GOINFRA",
      ],
      3323: [
        "3323 - RECONSTRUÇÃO DE RODOVIAS - GOIÁS EM MOVIMENTO",
        "18919 - GOIÁS EM MOVIMENTO - RECONSTRUÇÃO DE RODOVIAS",
        "10146 - GOIÁS EM MOVIMENTO - EXPANSÃO E MELHORIA DA INFRAESTRUTURA VIÁRIA",
        "GOINFRA",
      ],
      3340: [
        "3340 - CONSTRUÇÃO DE CICLOVIA ENTRE O INSTITUTO FEDERAL GOIANO - IFG CAMPUS CERES ATÉ O MUNICÍPIO DE CERES",
        "18920 - GOIÁS EM MOVIMENTO - RODOVIA PAVIMENTADA, DUPLICAÇÃO E OBRAS DE ARTE",
        "10146 - GOIÁS EM MOVIMENTO - EXPANSÃO E MELHORIA DA INFRAESTRUTURA VIÁRIA",
        "GOINFRA",
      ],
      3292: [
        "3292 - CONSTRUÇÃO DE OBRAS DE ARTE EM RODOVIAS - GOIÁS EM MOVIMENTO",
        "18920 - GOIÁS EM MOVIMENTO - RODOVIA PAVIMENTADA, DUPLICAÇÃO E OBRAS DE ARTE",
        "10146 - GOIÁS EM MOVIMENTO - EXPANSÃO E MELHORIA DA INFRAESTRUTURA VIÁRIA",
        "GOINFRA",
      ],
      3341: [
        "3341 - PAVIMENTAÇÃO ASFÁLTICA NO MUNICÍPIO DE SANTO ANTÔNIO DO DESCOBERTO",
        "18920 - GOIÁS EM MOVIMENTO - RODOVIA PAVIMENTADA, DUPLICAÇÃO E OBRAS DE ARTE",
        "10146 - GOIÁS EM MOVIMENTO - EXPANSÃO E MELHORIA DA INFRAESTRUTURA VIÁRIA",
        "GOINFRA",
      ],
      3342: [
        "3342 - CONSTRUÇÃO DA TERCEIRA FAIXA NA GO-080 NO TRECHO QUE LIGA GOIANÉSIA E JARAGUÁ",
        "18920 - GOIÁS EM MOVIMENTO - RODOVIA PAVIMENTADA, DUPLICAÇÃO E OBRAS DE ARTE",
        "10146 - GOIÁS EM MOVIMENTO - EXPANSÃO E MELHORIA DA INFRAESTRUTURA VIÁRIA",
        "GOINFRA",
      ],
      3339: [
        "3339 - CONSTRUÇÃO DO ANEL VIÁRIO NO MUNICÍPIO DE JARAGUÁ-GO",
        "18920 - GOIÁS EM MOVIMENTO - RODOVIA PAVIMENTADA, DUPLICAÇÃO E OBRAS DE ARTE",
        "10146 - GOIÁS EM MOVIMENTO - EXPANSÃO E MELHORIA DA INFRAESTRUTURA VIÁRIA",
        "GOINFRA",
      ],
      3317: [
        "3317 - PAVIMENTAÇÃO DE RODOVIAS - GOIÁS EM MOVIMENTO",
        "18920 - GOIÁS EM MOVIMENTO - RODOVIA PAVIMENTADA, DUPLICAÇÃO E OBRAS DE ARTE",
        "10146 - GOIÁS EM MOVIMENTO - EXPANSÃO E MELHORIA DA INFRAESTRUTURA VIÁRIA",
        "GOINFRA",
      ],
      3318: [
        "3318 - PAVIMENTAÇÃO DE VIAS PARA ACESSO A COMUNIDADES ISOLADAS - GOIÁS EM MOVIMENTO",
        "18932 - GOIÁS EM MOVIMENTO - VIAS PARA ACESSO A COMUNIDADES ISOLADAS PAVIMENTADAS",
        "10146 - GOIÁS EM MOVIMENTO - EXPANSÃO E MELHORIA DA INFRAESTRUTURA VIÁRIA",
        "GOINFRA",
      ],
      2536: [
        "2536 - GESTÃO DA MANUTENÇÃO DA INFRAESTRUTURA MUNICIPAL - GOIÁS EM MOVIMENTO",
        "19173 - GOIÁS EM MOVIMENTO - GESTÃO DA MANUTENÇÃO DA INFRAESTRUTURA MUNICIPAL",
        "10147 - GOIÁS EM MOVIMENTO - MANUTENÇÃO DA INFRAESTRUTURA MUNICIPAL",
        "GOINFRA",
      ],
      2537: [
        "2537 - HOMOLOGAÇÃO DE AERÓDROMO - GOIÁS EM MOVIMENTO",
        "18921 - GOIÁS EM MOVIMENTO - AERÓDROMO HOMOLOGADO",
        "10148 - GOIÁS EM MOVIMENTO - OTIMIZAÇÃO DE AERÓDROMOS",
        "GOINFRA",
      ],
      3119: [
        "3119 - PUBLICIDADE DE UTILIDADE PÚBLICA",
        "19125 - CAMPANHAS EDUCATIVAS REALIZADAS",
        "10149 - GOIÁS EM MOVIMENTO - SINALIZAÇÃO E SEGURANÇA VIÁRIA",
        "GOINFRA",
      ],
      2540: [
        "2540 - MONITORAMENTO DE FAIXAS DE ROLAMENTO - GOINFRA - GOIÁS EM MOVIMENTO",
        "19151 - FAIXAS DE ROLAMENTO MONITORADAS PARA REDUÇÃO DE ACIDENTES RODOVIÁRIOS",
        "10149 - GOIÁS EM MOVIMENTO - SINALIZAÇÃO E SEGURANÇA VIÁRIA",
        "GOINFRA",
      ],
      2534: [
        "2534 - CONSERVAÇÃO DE SINALIZAÇÃO VIÁRIA PELA GOINFRA - GOIÁS EM MOVIMENTO",
        "19178 - SINALIZAÇÃO VIÁRIA -CONSERVADA",
        "10149 - GOIÁS EM MOVIMENTO - SINALIZAÇÃO E SEGURANÇA VIÁRIA",
        "GOINFRA",
      ],
      3260: [
        "3260 - CONSTRUÇÃO DE HABITAÇÕES DE INTERESSE SOCIAL",
        "15780 - CONSTRUÇÃO DE HABITAÇÃO DE INTERESSE SOCIAL (RECURSOS DO  PROTEGE)",
        "10108 - FOMENTAR CONSTRUÇÃO HABITACIONAL",
        "AGEHAB",
      ],
      2248: [
        "2248 - PRA TER ONDE MORAR - AUXÍLIO-MORADIA",
        "10684 - PESSOA ATENDIDA COM AUXILIO SOCIAL",
        "10136 - GERIR ALUGUEL SOCIAL",
        "AGEHAB",
      ],
      2178: [
        "2178 - MORADIA LEGAL (REGULARIZAÇÃO FUNDIÁRIA DE HABITAÇÕES DE INTERESSE SOCIAL)",
        "7764 - ESCRITURA ENTREGUE",
        "10231 - PROMOVER REGULARIZAÇÃO FUNDIÁRIA SOCIAL",
        "AGEHAB",
      ],
      3261: [
        "3261 - REFORMA DE HABITAÇÕES DE INTERESSE SOCIAL",
        "15800 - REFORMA DE HABITAÇÃO DE INTERESSE SOCIAL (RECURSOS DO PROTEGE)",
        "10265 - VIABILIZAR REFORMA HABITACIONAL",
        "AGEHAB",
      ],
      3235: [
        "3235 - MANUTENÇÃO DA REDE DE FIBRA ÓTICA EM MUNICÍPIOS",
        "",
        "",
        "GOIASTELECOM",
      ],
    };
    // COMBO BOX ORGAO {
    const lista_orgao = [
      { sigla: "ABC", nome_completo: "1261 - AGÊNCIA BRASIL CENTRAL" },
      {
        sigla: "AGEHAB",
        nome_completo: "4362 - AGÊNCIA GOIANA DE HABITAÇÃO S/A",
      },
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
      {
        sigla: "CELGPAR",
        nome_completo: "4092 - COMPANHIA CELG DE PARTICIPAÇÃO",
      },
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
        nome_completo:
          "3161 - FUNDAÇÃO DE AMPARO À PESQUISA DO ESTADO DE GOIÁS",
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
      {
        sigla: "LAGO AZUL",
        nome_completo: "4095 - LAGO AZUL TRANSMISSAO S.A.",
      },
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
      {
        sigla: "SECULT",
        nome_completo: "2500 - SECRETARIA DE ESTADO DE CULTURA",
      },
      {
        sigla: "SEDF",
        nome_completo:
          "4400 - SECRETARIA DE ESTADO DO ENTORNO DO DISTRITO FEDERAL",
      },
      {
        sigla: "SEDS",
        nome_completo: "3000 - SECRETARIA DE ESTADO DE DESENVOLVIMENTO SOCIAL",
      },
      {
        sigla: "SEDUC",
        nome_completo: "2400 - SECRETARIA DE ESTADO DA EDUCAÇÃO",
      },
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
      {
        sigla: "TCM",
        nome_completo: "300 - TRIBUNAL DE CONTAS DOS MUNICÍPIOS",
      },
      {
        sigla: "TJGO",
        nome_completo: "400 - TRIBUNAL DE JUSTIÇA DO ESTADO DE GOIÁS",
      },
      { sigla: "UEG", nome_completo: "4062 - UNIVERSIDADE ESTADUAL DE GOIÁS" },
      { sigla: "VICE GOVERNADORIA", nome_completo: "1300 - VICE-GOVERNADORIA" },
    ];
    $(document).ready(function () {
      const select = $("#select-sigla-orgao");
      select.append(new Option("Selecione", ""));
      lista_orgao.forEach((orgao) => {
        select.append(new Option(orgao.sigla, orgao.sigla));
      });

      $("#select-sigla-orgao").on("change", function () {
        const sigla = $(this).val(); // pegar o valor do select
        console.log(sigla);
        const orgao = lista_orgao.find(function (orgao) {
          if (orgao.sigla === sigla) return orgao;
        });
        console.log(orgao);
        $("#nomeOrgao").val(orgao.nome_completo);
      });

      // COMBO BOX ORGAO }

      // COMBO BOX FONTE {
      const lista_fonte = {
        15000100: "RECURSOS NÃO VINCULADOS DE IMPOSTOS - RECEITAS ORDINÁRIAS",
        15010001:
          "OUTROS RECURSOS NÃO VINCULADOS - DIVIDENDOS E JUROS SOBRE CAPITAL PRÓPRIO CELGPAR",
        15010100: "OUTROS RECURSOS NÃO VINCULADOS - RECEITAS ORDINÁRIAS E DRE",
        15010123:
          "OUTROS RECURSOS NÃO VINCULADOS - TRANSFERÊNCIA DE INSTITUIÇÕES PRIVADAS PARA ASSISTÊNCIA FINANCEIRA AO TRANSPORTE COLETIVO, EC Nº 123/2022",
        15010129:
          "OUTROS RECURSOS NÃO VINCULADOS - CONCESSÕES, PERMISSÕES E DELEGAÇÕES",
        15010136: "OUTROS RECURSOS NÃO VINCULADOS - AMORTIZAÇÕES",
        15010220:
          "OUTROS RECURSOS NÃO VINCULADOS - DIRETAMENTE ARRECADADOS PRÓPRIOS",
        15020001: "RECURSOS NÃO VINCULADOS DA COMPENSAÇÃO DE IMPOSTOS",
        15400108:
          "TRANSFERÊNCIAS DO FUNDEB - IMPOSTOS E TRANSFERÊNCIAS DE IMPOSTOS",
        15430000: "TRANSFERÊNCIAS DO FUNDEB - COMPLEMENTAÇÃO DA UNIÃO - VAAR",
        15430108: "TRANSFERÊNCIAS DO FUNDEB - COMPLEMENTAÇÃO DA UNIÃO - VAAR",
        15440000: "RECURSOS DE PRECATÓRIOS DO FUNDEF",
        15500116: "TRANSFERÊNCIA DO SALÁRIO-EDUCAÇÃO - COTA ESTADUAL",
        15510000:
          "TRANSFERÊNCIAS DE RECURSOS DO FNDE REFERENTES AO PROGRAMA DINHEIRO DIRETO NA ESCOLA (PDDE)",
        15520109:
          "TRANSFERÊNCIAS DE RECURSOS DO FNDE REFERENTES AO PROGRAMA NACIONAL DE ALIMENTAÇÃO ESCOLAR (PNAE)",
        15690115: "OUTRAS TRANSFERÊNCIAS DE RECURSOS DO FNDE",
        15700260:
          "TRANSFERÊNCIAS DO GOVERNO FEDERAL REFERENTES A CONVÊNIOS E INSTRUMENTOS CONGÊNERES VINCULADOS À EDUCAÇÃO",
        15720261:
          "TRANSFERÊNCIAS DE MUNICÍPIOS REFERENTES A CONVÊNIOS E INSTRUMENTOS CONGÊNERES VINCULADOS À EDUCAÇÃO",
        15740000: "OPERAÇÕES DE CRÉDITO VINCULADAS À EDUCAÇÃO",
        15750262:
          "OUTRAS TRANSFERÊNCIAS DE CONVÊNIOS E INSTRUMENTOS CONGÊNERES VINCULADOS À EDUCAÇÃO",
        15990000: "OUTROS RECURSOS VINCULADOS À EDUCAÇÃO",
        15990158: "OUTROS RECURSOS VINCULADOS À EDUCAÇÃO - EDUCAÇÃO INFANTIL",
        16000001:
          "TRANSFERÊNCIAS FUNDO A FUNDO DE RECURSOS DO SUS PROVENIENTES DO GOVERNO FEDERAL - BLOCO DE MANUTENÇÃO ASPS - EC RP2 - EMENDA PROGRAMAÇÃO",
        16000002:
          "TRANSFERÊNCIAS FUNDO A FUNDO DE RECURSOS DO SUS PROVENIENTES DO GOVERNO FEDERAL - BLOCO DE MANUTENÇÃO ASPS - EC RP6 - EMENDA INDIVIDUAL",
        16000003:
          "TRANSFERÊNCIAS FUNDO A FUNDO DE RECURSOS DO SUS PROVENIENTES DO GOVERNO FEDERAL - BLOCO DE MANUTENÇÃO ASPS - EC RP7 - EMENDA DE BANCADA",
        16000004:
          "TRANSFERÊNCIAS FUNDO A FUNDO DE RECURSOS DO SUS PROVENIENTES DO GOVERNO FEDERAL - BLOCO DE MANUTENÇÃO ASPS - EC RP8 - EMENDA DE COMISSÃO",
        16000232:
          "TRANSFERÊNCIAS FUNDO A FUNDO DE RECURSOS DO SUS PROVENIENTES DO GOVERNO FEDERAL - BLOCO DE MANUTENÇÃO DAS AÇÕES E SERVIÇOS PÚBLICOS DE SAÚDE",
        16010233:
          "TRANSFERÊNCIAS FUNDO A FUNDO DE RECURSOS DO SUS PROVENIENTES DO GOVERNO FEDERAL - BLOCO DE ESTRUTURAÇÃO DA REDE DE SERVIÇOS PÚBLICOS DE SAÚDE",
        16020238:
          "TRANSFERÊNCIAS FUNDO A FUNDO DO SUS - BL. DE MAN. DAS ASPS - RECURSOS DESTINADOS AO ENFRENTAMENTO DA COVID-19 NO BOJO DA AÇÃO 21C0",
        16030239:
          "TRANSFERÊNCIAS FUNDO A FUNDO DO SUS - BL. DE ESTR. DA REDE DE SERV. PÚB. DE SAÚDE - REC. DEST. AO ENFRENTAMENTO DA COVID-19 NO BOJO DA AÇÃO 21C0",
        16040000:
          "TRANSFERÊNCIAS PROVENIENTES DO GOVERNO FEDERAL DESTINADAS AO VENCIMENTO DOS AGENTES COMUNITÁRIOS DE SAÚDE E DOS AGENTES DE COMBATE ÀS ENDEMIAS",
        16050001:
          "ASSISTÊNCIA FINANCEIRA DA UNIÃO DESTINADA À COMPLEMENTAÇÃO AO PAGAMENTO DOS PISOS SALARIAIS PARA PROFISSIONAIS DA ENFERMAGEM",
        16310270:
          "TRANSFERÊNCIAS DO GOVERNO FEDERAL REFERENTES A CONVÊNIOS E INSTRUMENTOS CONGÊNERES VINCULADOS À SAÚDE",
        16317872:
          "TRANSFERÊNCIAS DO GOVERNO FEDERAL REFERENTES A CONVÊNIOS E INSTRUMENTOS CONGÊNERES VINCULADOS À SAÚDE - CONVÊNIO Nº 787297/2013, MS/IQUEGO",
        16340000: "OPERAÇÕES DE CRÉDITO VINCULADAS À SAÚDE",
        16360272:
          "OUTRAS TRANSFERÊNCIAS DE CONVÊNIOS E INSTRUMENTOS CONGÊNERES VINCULADOS À SAÚDE",
        16600234:
          "TRANSFERÊNCIA DE RECURSOS DO FUNDO NACIONAL DE ASSISTÊNCIA SOCIAL - FNAS - CORRENTES",
        16600235:
          "TRANSFERÊNCIA DE RECURSOS DO FUNDO NACIONAL DE ASSISTÊNCIA SOCIAL - FNAS - CAPITAL",
        16650274:
          "TRANSFERÊNCIAS DE CONVÊNIOS E INSTRUMENTOS CONGÊNERES VINCULADOS À ASSISTÊNCIA SOCIAL - COM ÓRGÃOS FEDERAIS",
        16650276:
          "TRANSFERÊNCIAS DE CONVÊNIOS E INSTRUMENTOS CONGÊNERES VINCULADOS À ASSISTÊNCIA SOCIAL - OUTRAS ENTIDADES",
        17000280:
          "OUTRAS TRANSFERÊNCIAS DE CONVÊNIOS OU INSTRUMENTOS CONGÊNERES DA UNIÃO - ADMINISTRAÇÃO DIRETA",
        17000290:
          "OUTRAS TRANSFERÊNCIAS DE CONVÊNIOS OU INSTRUMENTOS CONGÊNERES DA UNIÃO - ADMINISTRAÇÃO INDIRETA",
        17020291:
          "OUTRAS TRANSFERÊNCIAS DE CONVÊNIOS OU INSTRUMENTOS CONGÊNERES DOS MUNICÍPIOS - ADMINSITRAÇÃO INDIRETA",
        17030282:
          "OUTRAS TRANSFERÊNCIAS DE CONVÊNIOS OU INSTRUMENTOS CONGÊNERES DE OUTRAS ENTIDADES - ADMINISTRAÇÃO DIRETA",
        17030284:
          "OUTRAS TRANSFERÊNCIAS DE CONVÊNIOS OU INSTRUMENTOS CONGÊNERES DE OUTRAS ENTIDADES - ADMINISTRAÇÃO DIRETA COM ENTES EXTERNOS",
        17040283:
          "OUTRAS TRANSFERÊNCIAS DE CONVÊNIOS OU INSTRUMENTOS CONGÊNERES DE OUTRAS ENTIDADES - ADMINISTRAÇÃO INDIRETA",
        17040285:
          "OUTRAS TRANSFERÊNCIAS DE CONVÊNIOS OU INSTRUMENTOS CONGÊNERES DE OUTRAS ENTIDADES - ADMINISTRAÇÃO INDIRETA COM ENTES EXTERNOS",
        17060289:
          "TRANSFERÊNCIAS DE CONVÊNIOS E INSTRUMENTOS CONGÊNERES VINCULADOS AO SANEAMENTO",
        17290287:
          "OUTRAS TRANSFERÊNCIAS DE CONVÊNIOS E INSTRUMENTOS CONGÊNERES VINCULADOS À ADMINISTRAÇÃO GERAL",
        17290288:
          "OUTRAS TRANSFERÊNCIAS DE CONVÊNIOS E INSTRUMENTOS CONGÊNERES VINCULADOS À CULTURA",
        17400306:
          "OUTRAS TRANSFERÊNCIAS DE CONVÊNIOS E INSTRUMENTOS CONGÊNERES DA UNIÃO - ADMINISTRAÇÃO INDIRETA - GERAIS",
        17430310:
          "OUTRAS TRANSFERÊNCIAS DE CONVÊNIOS E INSTRUMENTOS CONGÊNERES DOS MUNICÍPIOS - ADMINISTRAÇÃO DIRETA",
        17600298:
          "TRANSFERÊNCIAS DE CONVÊNIOS E INSTRUMENTOS CONGÊNERes VINCULADOS A TRANSPORTE",
        17990000:
          "OUTRAS TRANSFERÊNCIAS DE CONVÊNIOS E INSTRUMENTOS CONGÊNERES",
        18000112:
          "TRANSFERÊNCIAS ESPECIAIS DA UNIÃO RECEBIDAS MEDIANTE EMENDAS INDIVIDUAIS",
        18000210:
          "TRANSFERÊNCIAS ESPECIAIS DA UNIÃO RECEBIDAS MEDIANTE EMENDAS DE BANCADA",
        18000212:
          "TRANSFERÊNCIAS ESPECIAIS DA UNIÃO RECEBIDAS MEDIANTE EMENDAS DE COMISSÃO",
        18100100:
          "TRANSFERÊNCIAS COMUNS DA UNIÃO RECEBIDAS MEDIANTE EMENDAS INDIVIDUAIS - EXCETO SAÚDE",
        18100213:
          "TRANSFERÊNCIAS COMUNS DA UNIÃO RECEBIDAS MEDIANTE EMENDAS DE BANCADA - EXCETO SAÚDE",
        18100215:
          "TRANSFERÊNCIAS COMUNS DA UNIÃO RECEBIDAS MEDIANTE EMENDAS DE COMISSÃO - EXCETO SAÚDE",
        18110212:
          "TRANSFERÊNCIAS COMUNS DA UNIÃO RECEBIDAS MEDIANTE EMENDAS DE COMISSÃO - GERAIS",
        18200102:
          "TRANSFERÊNCIAS COMUNS DA UNIÃO RECEBIDAS MEDIANTE EMENDAS INDIVIDUAIS - SAÚDE",
        18200214:
          "TRANSFERÊNCIAS COMUNS DA UNIÃO RECEBIDAS MEDIANTE EMENDAS DE BANCADA - SAÚDE",
        18200216:
          "TRANSFERÊNCIAS COMUNS DA UNIÃO RECEBIDAS MEDIANTE EMENDAS DE COMISSÃO - SAÚDE",
        19000000: "RECURSOS VINCULADOS - ORÇAMENTO ESTADUAL DE CONTINGÊNCIA",
      };
      const listaDasFontes = Object.keys(lista_fonte);
      const selectFonte = $("#select-fonte");
      selectFonte.append(new Option("Selecione", ""));
      listaDasFontes.forEach(function (fonte) {
        selectFonte.append(new Option(`${fonte}`, `${fonte}`));
      });
      $("#select-fonte").on("change", function () {
        const numeroFonte = $(this).val(); // pegar o valor do select
        const fonte = lista_fonte[numeroFonte];
        $("#input-fonte-selecionada").val(fonte);
      });

      // COMBO BOX FONTE }

      const unidades = [
        "",
        "um",
        "dois",
        "três",
        "quatro",
        "cinco",
        "seis",
        "sete",
        "oito",
        "nove",
      ];
      const especiais = [
        "dez",
        "onze",
        "doze",
        "treze",
        "quatorze",
        "quinze",
        "dezesseis",
        "dezessete",
        "dezoito",
        "dezenove",
      ];
      const dezenas = [
        "",
        "",
        "vinte",
        "trinta",
        "quarenta",
        "cinquenta",
        "sessenta",
        "setenta",
        "oitenta",
        "noventa",
      ];
      const centenas = [
        "",
        "cem",
        "duzentos",
        "trezentos",
        "quatrocentos",
        "quinhentos",
        "seiscentos",
        "setecentos",
        "oitocentos",
        "novecentos",
      ];
      function numeroParaExtenso(numero) {
        if (numero === 0) return "zero";

        let extenso = "";

        if (numero >= 1000000) {
          let milhoes = Math.floor(numero / 1000000);
          extenso +=
            milhoes === 1
              ? "um milhão"
              : numeroParaExtenso(milhoes) + " milhões";
          numero %= 1000000;
          if (numero > 0) extenso += " e ";
        }

        if (numero >= 1000) {
          let milhares = Math.floor(numero / 1000);
          extenso +=
            milhares === 1 ? "mil" : numeroParaExtenso(milhares) + " mil";
          numero %= 1000;
          if (numero > 0) extenso += " e ";
        }

        if (numero >= 100) {
          let centena = Math.floor(numero / 100);
          if (centena === 1 && numero % 100 !== 0) {
            extenso += "cento";
          } else {
            extenso += centenas[centena];
          }
          numero %= 100;
          if (numero > 0) extenso += " e ";
        }

        if (numero >= 20) {
          let dezena = Math.floor(numero / 10);
          extenso += dezenas[dezena];
          numero %= 10;
          if (numero > 0) extenso += " e ";
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
        let [reais, centavos] = valor.toFixed(2).split(".").map(Number);

        let extensoReais =
          numeroParaExtenso(reais) + (reais === 1 ? " real" : " reais");
        let extensoCentavos =
          centavos > 0
            ? numeroParaExtenso(centavos) +
              (centavos === 1 ? " centavo" : " centavos")
            : "";

        if (centavos > 0) {
          return `${extensoReais} e ${extensoCentavos}`;
        } else {
          return extensoReais;
        }
      }

      $("#input-valor-total-suplementacao").on("focusout", function () {
        var str = $("#input-valor-total-suplementacao").val();
        var extenso = valorMonetarioParaExtenso(parseFloat(str));
        $("#input-valor-total-suplementacao-extenso").val(extenso);
      });
      // TABELA 1 {

      var tabela1 = $("#tabela1").DataTable({
        data: [],
        columns: [
          { title: "CLASSIFICAÇÃO ORÇAMENTÁRIA" },
          { title: "TIPO DE REMANEJAMENTO" },
          { title: "VALOR" },
          { title: "" },
        ],
      });

      // ****************** ADICIONAR LINHA TABELA 1 ******************
      $("#btn-add-row-table1").on("click", function () {
        const timestampNow = Date.now();
        tabela1.row
          .add([
            `<input class="form-control class-orcamentaria" name="tb1-class-orcamentaria-${timestampNow}" type="text" id="class-orcamentaria-${timestampNow}">`,
            `<select class="form-select tipo-remanejamento" name="tb1-tipo-remanejamento-${timestampNow}" id="tipo-remanejamento-${timestampNow}">
                              <option selected>Selecione</option>
                              <option value="suplementar">Suplementar</option>
                              <option value="reduzir">Reduzir</option>
                          </select>`,
            `<input class="form-control valor" name="tb1-valor-${timestampNow}"" type="text" id="valor-${timestampNow}">`,
            `<button type="button" class="btn btn-danger btn-remover">Remover</button>`,
          ])
          .draw();
      });

      // Evento para remover uma linha ao clicar no botão "Remover"
      $("#tabela1 tbody").on("click", ".btn-remover", function () {
        tabela1.row($(this).closest("tr")).remove().draw();
      });

      // FIM DA TABELA 1 }
      //--------------------------------------------------------------------------------------
      // TABELA 2 {

      var tabela2 = $("#tabela2").DataTable({
        data: [],

        columns: [
          { title: "Nº SOLICCIT. SIOFI" },
          { title: "COD. AÇÃO" },
          { title: "AÇÃO" },
          { title: "PRODUTO" },
          { title: "INICIATIVA" },
          { title: "VALOR A SER SUPLEMENTADO" },
          { title: "ORIGEM DO RECURSO" },
          { title: "AÇÃO A SER ANULADA" },
          { title: "VALOR A SER REDUZIDO" },
          { title: "" },
        ],
      });

      // ****************** ADICIONAR LINHA TABELA 2 ******************
      $("#btn-add-row-table2").on("click", function () {
        const timestampNow = Date.now();
        tabela2.row
          .add([
            `<input class="form-control num-solid" name="tb-num-soli-${timestampNow}"          type="text" id="num-soli-${timestampNow}">`,
            `<input class="form-control cod-acao"  name="tb-cod-acao-${timestampNow}" type="text" id="cod-acao-${timestampNow}">`,
            `<input class="form-control acao    "  name="tb-acao-${timestampNow}" type="text" id="acao-${timestampNow}" readonly>`,
            `<input class="form-control produto"   name="tb-produto-${timestampNow}" type="text" id="produto-${timestampNow}" readonly>`,
            `<input class="form-control iniciativa" name="tb-iniciativa-${timestampNow}" type="text" id="iniciativa-${timestampNow}" readonly>`,
            `<input class="form-control valor-suplementado" name="tb-valor-suplementado-${timestampNow}" type="text" id="valor-suplementado-${timestampNow}">`,

            `<select class="form-select origem-recurso" name="tb-origem-recursos-${timestampNow}" id="origem-recursos-${timestampNow}" >
                          <option selected>Selecione</option>
                          <option value="Anulação total ou parcial de dotação orçamentária">Anulação total ou parcial de dotação orçamentária</option>
                          <option value="Excesso de arrecadação">Excesso de arrecadação</option>
                          <option value="Sem indicação de recursos">Sem indicação de recursos</option>
                          <option value="Superávit financeiro diretamente arrecadado">Superávit financeiro diretamente arrecadado</option>
                      </select>`,

            `<input class="form-control acao-anulada" name="tb-acao-anulada-${timestampNow}" type="text" id="acao-anulada-${timestampNow}" readonly>`,
            `<input class="form-control valor-reduzir" name="tb-valor-reduzir-${timestampNow}" type="text" id="valor-reduzir-${timestampNow}" readonly>`,
            `<button type="button" class="btn btn-danger btn-remover">Remover</button>`,
          ])
          .draw();

        attachEvents();
        $("#tabela2 tbody").on("click", ".btn-remover", function () {
          tabela2.row($(this).closest("tr")).remove().draw();
        });

        // Função para atualizar os eventos dos elementos novos
        function attachEvents() {
          // Evento para remover linha
          $(".btn-remover")
            .off("click")
            .on("click", function () {
              tabela2.row($(this).closest("tr")).remove().draw();
            });
          // Evento para verificar mudanças no select
          $(".origem-recurso")
            .off()
            .on("change", function () {
              var $row = $(this).closest("tr");
              if (
                $(this).val() ===
                "Anulação total ou parcial de dotação orçamentária"
              ) {
                $row.find(".acao-anulada").removeAttr("readonly");
                $row.find(".valor-reduzir").removeAttr("readonly");
              } else {
                $row.find(".acao-anulada").attr("readonly", "readonly");
                $row.find(".valor-reduzir").attr("readonly", "readonly");
              }
            });

          //evento para preencher as colunas ação | produto | iniciativa
          $(".cod-acao").on("change", function () {
            var $row = $(this).closest("tr");
            var codAcao = $(this).val();

            // VALIDAÇÃO DE SIGLA COM AÇÃO
            const siglaInformada = $("#select-sigla-orgao").val();
            if (siglaInformada !== lista_ppa[codAcao][3]) {
              Toastify({
                text: "A ação informada não pertence a este Orgão !",
                duration: 2000,
                newWindow: true,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "center", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "red",
                },
              }).showToast();
              $row.find(".cod-acao").val("");
              $row.find(".acao").val("");
              $row.find(".produto").val("");
              $row.find(".iniciativa").val("");
              return;
            }
            if (lista_ppa[codAcao]) {
              $row.find(".acao").val(lista_ppa[codAcao][0]);
              $row.find(".produto").val(lista_ppa[codAcao][1]);
              $row.find(".iniciativa").val(lista_ppa[codAcao][2]);
            } else {
              $row.find(".acao").val("");
              $row.find(".produto").val("");
              $row.find(".iniciativa").val("");
            }
          });
        }
        // Inicializa eventos para elementos existentes
        attachEvents();
      });
      // FIM TABELA 2 }

      //***************************** Botao DOWNLOAD *****************************//

      $("#btn-download").on("click", function (event) {
        event.preventDefault();
        const form = $("form").serializeArray();
        //console.log("MEU FORMULARIO:",form);
        let formJSON = {
          apresentacao: {
            orgao: "",
            nomeOrgao: "",
            responsavel: "",
            whatsapp: "",
            valorTotalSuplementacao: "",
            valorTotalSuplementacaoExtenso: "",
            numeroFonte: "",
            fonte: "",
            objeto: "",
            justificativa: "",
            impacto: "",
          },
          tabela1: [
            {
              classificacao: [],
              tipo: [],
              valor: [],
            },
          ],
          tabela2: [
            {
              num_solicitacao: [],
              cod_acao: [],
              acao: [],
              produto: [],
              iniciativa: [],
              valor_suplementado: [],
              origem_recurso: [],
              acao_anulada: [],
              valor_reduzir: [],
            },
          ],
        };

        let cont = 11;

        form.forEach(function (input) {
          const chave = input.name;
          const valor = input.value;

          formJSON.apresentacao.orgao = form[0].value;
          formJSON.apresentacao.nomeOrgao = form[1].value;
          formJSON.apresentacao.responsavel = form[2].value;
          formJSON.apresentacao.whatsapp = form[3].value;
          formJSON.apresentacao.valorTotalSuplementacao = form[4].value;
          formJSON.apresentacao.valorTotalSuplementacaoExtenso = form[5].value;
          formJSON.apresentacao.numeroFonte = form[6].value;
          formJSON.apresentacao.fonte = form[7].value;
          formJSON.apresentacao.objeto = form[8].value;
          formJSON.apresentacao.justificativa = form[9].value;
          formJSON.apresentacao.impacto = form[10].value;

          // Expressões regulares para identificar os campos
          let regexClass = /tb1-class-orcamentaria-(\d+)/;
          let regexTipo = /tb1-tipo-remanejamento-(\d+)/;
          let regexValor = /tb1-valor-(\d+)/;
          let regexNumSolid = /tb-num-soli-(\d+)/;
          let regexCodAcao = /cod-acao-(\d+)/;
          let regexAcao = /tb-acao-(\d+)/;
          let regexProduto = /tb-produto-(\d+)/;
          let regexIniciativa = /tb-iniciativa-(\d+)/;
          let regexValorSuplementado = /tb-valor-suplementado-(\d+)/;
          let regexOrigemRecurso = /tb-origem-recursos-(\d+)/;
          let regexAcaoAnulada = /tb-acao-anulada-(\d+)/;
          let regexValorReduzir = /tb-valor-reduzir-(\d+)/;

          // Display in console
          //console.log(`Name: ${chave},Value: ${valor}`);

          // TODO:  TABELA 1 - CLASSIFICAÇÃO ORÇAMENTÁRIA
          if (regexClass.test(chave))
            formJSON.tabela1[0].classificacao.push(valor);
          if (regexTipo.test(chave)) formJSON.tabela1[0].tipo.push(valor);
          if (regexValor.test(chave)) formJSON.tabela1[0].valor.push(valor);
          // TODO: TABELA 2 - SOLICITAÇÃO DE REMANEJAMENTO
          if (regexNumSolid.test(chave))
            formJSON.tabela2[0].num_solicitacao.push(valor);
          if (regexCodAcao.test(chave))
            formJSON.tabela2[0].cod_acao.push(valor);
          if (regexAcao.test(chave)) formJSON.tabela2[0].acao.push(valor);
          if (regexProduto.test(chave)) formJSON.tabela2[0].produto.push(valor);
          if (regexIniciativa.test(chave))
            formJSON.tabela2[0].iniciativa.push(valor);
          if (regexValorSuplementado.test(chave))
            formJSON.tabela2[0].valor_suplementado.push(valor);
          if (regexOrigemRecurso.test(chave))
            formJSON.tabela2[0].origem_recurso.push(valor);
          if (regexAcaoAnulada.test(chave))
            formJSON.tabela2[0].acao_anulada.push(valor);
          if (regexValorReduzir.test(chave))
            formJSON.tabela2[0].valor_reduzir.push(valor);
        });
        console.log("json preenchido: ", formJSON);

        // TODO: GERAR PDF
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        let y = 20;
        const pageHeight = doc.internal.pageSize.height;

        for (let chave in formJSON.apresentacao) {
          if (formJSON.apresentacao.hasOwnProperty(chave)) {
            let textoChave = chave + ": ";
            let textoValor = formJSON.apresentacao[chave];
            let splitText = doc.splitTextToSize(textoValor, 150); // Ajusta a largura do texto

            doc.setFont("helvetica", "bold");
            doc.text(textoChave, 9, y);

            doc.setFont("helvetica", "normal");
            doc.text(splitText, 15 + doc.getTextWidth(textoChave), y);

            y += splitText.length * 10; // Ajusta a posição Y para a próxima linha
            if (y + 10 > pageHeight) {
              // Verifica se a próxima linha excederá a página
              doc.addPage();
              y = 15; // Reseta a posição Y para a nova página
            }
          }
        }

        doc.setFont("helvetica", "bold");
        doc.text("TABELA 1 - CLASSIFICAÇÃO ORÇAMENTÁRIA", 35, y);
        // TABELA 1
        if (formJSON.tabela1 && formJSON.tabela1.length > 0) {
          y += 5; // Espaçamento entre o texto e a tabela
          if (y + 10 > pageHeight) {
            // Verifica se a tabela excederá a página
            doc.addPage();
            y = 10;
          }
          doc.autoTable({
            head: [
              ["CLASSIFICAÇÃO ORÇAMENTÁRIA", "TIPO DE REMANEJAMENTO", "VALOR"],
            ],
            body: formJSON.tabela1[0].classificacao.map((_, index) => [
              formJSON.tabela1[0].classificacao[index],
              formJSON.tabela1[0].tipo[index],
              formJSON.tabela1[0].valor[index],
            ]),
            startY: y + 10, // Posição inicial da tabela
          });
          y = doc.lastAutoTable.finalY + 10; // Atualiza Y após a tabela
        }
        // TABELA 2
        if (formJSON.tabela2 && formJSON.tabela2.length > 0) {
          y += 10; // Espaçamento entre as tabelas
          if (y + 10 > pageHeight) {
            // Verifica se a tabela excederá a página
            doc.addPage();
            y = 10;
          }
          doc.autoTable({
            head: [
              [
                "Nº SOLICITAÇÃO SIOFI",
                "COD. AÇÃO",
                "AÇÃO",
                "PRODUTO",
                "INICIATIVA",
                "VALOR A SER SUPLEMENTADO",
                "ORIGEM DO RECURSO",
                "AÇÃO A SER ANULADA",
                "VALOR A SER REDUZIDO",
              ],
            ],
            body: formJSON.tabela2[0].num_solicitacao.map((_, index) => [
              formJSON.tabela2[0].num_solicitacao[index],
              formJSON.tabela2[0].cod_acao[index],
              formJSON.tabela2[0].acao[index],
              formJSON.tabela2[0].produto[index],
              formJSON.tabela2[0].iniciativa[index],
              formJSON.tabela2[0].valor_suplementado[index],
              formJSON.tabela2[0].origem_recurso[index],
              formJSON.tabela2[0].acao_anulada[index],
              formJSON.tabela2[0].valor_reduzir[index],
            ]),
            startY: y + 10, // Posição inicial da tabela
          });
          y = doc.lastAutoTable.finalY + 10; // Atualiza Y após a tabela
        }

        // Save or open the PDF
        const pdfURL = doc.output("bloburl");
        window.open(pdfURL);
      });

      // TODO: PARTE DE PREECHER AUTOMATICAMENTE
      $("#btn-preencher").on("click", function () {
        // Preencher os campos de apresentação
        let dados = {
          orgao: "TCE",
          nomeOrgao: "Tribunal de Contas do Estado",
          responsavel: "João Silva",
          whatsapp: "12345-6789",
          valorTotalSuplementacao: "50000",
          fonte: "15000100",
          objeto: "Este é o objeto do créditoda tce",
          justificativa: "Esta é a justificativa mais top que ja teve por aki",
          impacto:
            "Este é o impacto do não atendimento, se acontecer tamo lascado",
        };
        $("#select-sigla-orgao").val(dados.orgao);
        $("#input-orgao-selecionado").val(dados.nomeOrgao);
        $("#input-responsavel-pelas-informacoes").val(dados.responsavel);
        $("#input-whatsapp").val(dados.whatsapp);
        $("#input-valor-total-suplementacao").val(
          dados.valorTotalSuplementacao
        );
        $("#select-fonte").val(dados.fonte);
        // Preencher os campos de detalhes do crédito
        $("#text-area-objeto").val(dados.objeto);
        $("#input-justificativa").val(dados.justificativa);
        $("#text-area-impacto").val(dados.impacto);
        // Preencher a tabela 1
      });

      //FIXME: botao gerar pdf {
      $("#btn-gerar-pdf").on("click", function () {
        const form = $("form").serializeArray();
        let formJSON = {
          apresentacao: {
            orgao: "",
            nomeOrgao: "",
            responsavel: "",
            whatsapp: "",
            valorTotalSuplementacao: "",
            valorTotalSuplementacaoExtenso: "",
            numeroFonte: "",
            fonte: "",
            objeto: "",
            justificativa: "",
            impacto: "",
          },
          tabela1: [
            {
              classificacao: [],
              tipo: [],
              valor: [],
            },
          ],
          tabela2: [
            {
              num_solicitacao: [],
              cod_acao: [],
              acao: [],
              produto: [],
              iniciativa: [],
              valor_suplementado: [],
              origem_recurso: [],
              acao_anulada: [],
              valor_reduzir: [],
            },
          ],
        };

        let cont = 11;

        form.forEach(function (input) {
          const chave = input.name;
          const valor = input.value;

          formJSON.apresentacao.orgao = form[0].value;
          formJSON.apresentacao.nomeOrgao = form[1].value;
          formJSON.apresentacao.responsavel = form[2].value;
          formJSON.apresentacao.whatsapp = form[3].value;
          formJSON.apresentacao.valorTotalSuplementacao = form[4].value;
          formJSON.apresentacao.valorTotalSuplementacaoExtenso = form[5].value;
          formJSON.apresentacao.numeroFonte = form[6].value;
          formJSON.apresentacao.fonte = form[7].value;
          formJSON.apresentacao.objeto = form[8].value;
          formJSON.apresentacao.justificativa = form[9].value;
          formJSON.apresentacao.impacto = form[10].value;

          let regexClass = /tb1-class-orcamentaria-(\d+)/;
          let regexTipo = /tb1-tipo-remanejamento-(\d+)/;
          let regexValor = /tb1-valor-(\d+)/;
          let regexNumSolid = /tb-num-soli-(\d+)/;
          let regexCodAcao = /cod-acao-(\d+)/;
          let regexAcao = /tb-acao-(\d+)/;
          let regexProduto = /tb-produto-(\d+)/;
          let regexIniciativa = /tb-iniciativa-(\d+)/;
          let regexValorSuplementado = /tb-valor-suplementado-(\d+)/;
          let regexOrigemRecurso = /tb-origem-recursos-(\d+)/;
          let regexAcaoAnulada = /tb-acao-anulada-(\d+)/;
          let regexValorReduzir = /tb-valor-reduzir-(\d+)/;

          // Display in console
          //console.log(`Name: ${chave},Value: ${valor}`);

          // TODO:  TABELA 1 - CLASSIFICAÇÃO ORÇAMENTÁRIA
          if (regexClass.test(chave))
            formJSON.tabela1[0].classificacao.push(valor);
          if (regexTipo.test(chave)) formJSON.tabela1[0].tipo.push(valor);
          if (regexValor.test(chave)) formJSON.tabela1[0].valor.push(valor);

          // TODO: TABELA 2 - SOLICITAÇÃO DE REMANEJAMENTO
          if (regexNumSolid.test(chave))
            formJSON.tabela2[0].num_solicitacao.push(valor);
          if (regexCodAcao.test(chave))
            formJSON.tabela2[0].cod_acao.push(valor);
          if (regexAcao.test(chave)) formJSON.tabela2[0].acao.push(valor);
          if (regexProduto.test(chave)) formJSON.tabela2[0].produto.push(valor);
          if (regexIniciativa.test(chave))
            formJSON.tabela2[0].iniciativa.push(valor);
          if (regexValorSuplementado.test(chave))
            formJSON.tabela2[0].valor_suplementado.push(valor);
          if (regexOrigemRecurso.test(chave))
            formJSON.tabela2[0].origem_recurso.push(valor);
          if (regexAcaoAnulada.test(chave))
            formJSON.tabela2[0].acao_anulada.push(valor);
          if (regexValorReduzir.test(chave))
            formJSON.tabela2[0].valor_reduzir.push(valor);
        });
        console.log(formJSON);

        // TODO: GERAR PDF
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        let y = 20;
        const pageHeight = doc.internal.pageSize.height;
        const json = formJSON.apresentacao;
        // Abrir nova janela
        const win = window.open("", "", "width=900,height=900");
        // FIXME: BODY
        win.document.write(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PDF Content</title>
     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
  </head>
  <body>
    <div id="apresentacao" class="d-flex flex-column gap-2 mt-5">
      <div class="row d-flex align-items-center">
        <div class="col-2 d-flex justify-content-center align-items-center gap-3">
          <label class="fw-bold" for="sigla-orgao"><strong>Órgão:</strong></label>
          <p>${json.orgao}</p>
        </div>
        <div class="col-10">
          <p>${json.nomeOrgao}</p>
        </div>
      </div>
      <div class="row">
        <div class="col-3">
          <label for="responsavel-pelas-informacoes" class="fw-bold"><strong>Responsável Pelas Informações</strong></label>
        </div>
        <div class="col-5">
          <p>${json.responsavel}</p>
        </div>
        <div class="col-4 d-flex align-items-center gap-3">
          <label for="whatsapp" class="fw-bold"><strong>Whatsapp</strong></label>
          <p>${json.whatsapp}</p>
        </div>
      </div>
      <div class="row">
        <div class="col-3">
          <label for="valor-total-suplementacao" class="fw-bold"><strong>Valor Total Suplementação</strong></label>
        </div>
        <div class="col-5">
          <p>${json.valorTotalSuplementacao}</p>
        </div>
        <div class="col-4">
          <p>${json.valorTotalSuplementacaoExtenso}</p>
        </div>
      </div>
      <div class="row d-flex align-items-center">
        <div class="col-2 d-flex justify-content-center align-items-center gap-3">
          <label for="fonte" class="fw-bold"><strong>Fonte:</strong></label>
          <p>${json.fonte}</p>
        </div>
        <div class="col-10">
          <p>${json.nomeOrgao}</p>
        </div>
      </div>
    </div>
    <div id="detalhes_credito">
      <div id="objeto">
        <div class="row">
          <div class="col-12">
            <label for="objeto" class="fw-bold"><strong>Objeto</strong></label>
          </div>
        </div>
        <div class="row">
          <p>${json.objeto}</p>
        </div>
      </div>
      <!-- JUSTIFICATIVA -->
      <div id="justificativa">
        <div class="row">
          <div class="col-12">
            <label for="justificativa" class="fw-bold"><strong>Justificativa</strong></label>
          </div>
        </div>
        <div class="row">
          <p>${json.justificativa}</p>
        </div>
      </div>
      <!-- IMPACTOS -->
      <div id="impacto">
        <div class="row">
          <div class="col-12">
            <label for="impacto" class="fw-bold"><strong>Impacto</strong></label>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <p>${json.impacto}</p>
          </div>
        </div>
      </div>
    </div>
  </body>
  </html>
`);
        // FIXME: FIM DO BODY
        // Pegar a apresentação

        win.document.write("<h2>Tabela 1 - Classificação Orçamentária</h2>");
        win.document.write(
          `<table border="1" style="width:100%; border-collapse: collapse;">
      <thead>
        <tr>
          <th>CLASSIFICAÇÃO ORÇAMENTÁRIA</th>
          <th>TIPO DE REMANEJAMENTO</th>
          <th>VALOR</th>
        </tr>
      </thead>
      <tbody>`
        );

        formJSON.tabela1[0].classificacao.forEach((_, index) => {
          win.document.write(`
      <tr>
        <td>${formJSON.tabela1[0].classificacao[index]}</td>
        <td>${formJSON.tabela1[0].tipo[index]}</td>
        <td>${formJSON.tabela1[0].valor[index]}</td>
      </tr>
    `);
        });

        win.document.write(`</tbody></table>`);

        // Imprimir o conteúdo HTML na nova janela
        win.print();

        // Salvar o PDF
        const pdfURL = doc.output("bloburl");
        window.open(pdfURL);
      });
      //}
    });
  </script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.3.1/jspdf.umd.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.5.23/jspdf.plugin.autotable.min.js"></script>
</html>
