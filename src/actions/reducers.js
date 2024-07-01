// reducers/exampleReducer.js
import en from '../idioma/ingles.json';
import pt from '../idioma/portugues.json';
import { voltarProntuario } from './actions';

const initialState = {
  idioma: pt,
  expandirNavegacao: true,
  voltarProntuario: false,
  modalAberta: false,
};

export const reduxH = (state = initialState, action) => {
    if (action.type === 'IDIOMA') {
        return {
            ...state, 
            idioma: action.payload
        }
    }
    else if (action.type === 'EXPANDIR_NAVEGACAO') {
        return {
            ...state, 
            expandirNavegacao: action.payload
        }
    }

    else if (action.type === 'VOLTAR_PRONTUARIO') {
        return {
            ...state, 
            voltarProntuario: action.payload
        }
    }

    else if (action.type === 'MODAL_ABERTA') {
        return {
            ...state, 
            modalAberta: action.payload
        }
    }

    else {
        return state;
    }
};


