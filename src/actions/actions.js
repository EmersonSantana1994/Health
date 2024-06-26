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

export const voltarProntuario = (data) => ({
  type: "VOLTAR_PRONTUARIO",
  payload: data,
});

