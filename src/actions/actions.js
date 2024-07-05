// actions/exampleActions.js
export const IDIOMA = 'IDIOMA';

export const idioma = (data) => ({
  type: IDIOMA,
  payload: data,
});

export const expandirNavegacao = (data) => ({
  type: "EXPANDIR_NAVEGACAO",
  payload: data,
});
export const propsEditar = (data) => ({
  type: "PROPS_EDITAR",
  payload: data,
});
export const voltarProntuario = (data) => ({
  type: "VOLTAR_PRONTUARIO",
  payload: data,
});

export const modalAberta = (data) => ({
  type: "MODAL_ABERTA",
  payload: data,
});
export const editarProntuario = (data) => ({
  type: "EDITAR_PRONTUARIO",
  payload: data,
});
export const idUsuario = (data) => ({
  type: "ID_USER_PRONTUARIO",
  payload: data,
});
export const atualizarTabela = (data) => ({
  type: "ATUALIZAR_TABELA",
  payload: data,
});




