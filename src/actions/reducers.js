// reducers/exampleReducer.js
import en from '../idioma/ingles.json';
import pt from '../idioma/portugues.json';
import { voltarProntuario } from './actions';

const initialState = {
  idioma: pt,
  expandirNavegacao: true,
  voltarProntuario: false,
<<<<<<< HEAD
  modalAberta: false,
=======
>>>>>>> 9f185d612c326fa12f3cdfa36436ff2b72b61bff
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

<<<<<<< HEAD
    else if (action.type === 'MODAL_ABERTA') {
        return {
            ...state, 
            modalAberta: action.payload
        }
    }

=======
>>>>>>> 9f185d612c326fa12f3cdfa36436ff2b72b61bff
    else {
        return state;
    }
};


