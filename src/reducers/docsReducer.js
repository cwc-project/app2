import data from '../data/db.json';
import {
  OPEN_DOC,
  SAVE_DOC,
  CLICK_DOC,
  TOGGLE_DOCS,
  EDIT_DOC,
} from '../actions/docsActions';

const initialState = {
  docsItems: data,
  opendDoc: {},
  selectedDoc: {
    docType: '',
    id: null,
  },
  visibleType: null,
  edit: false,
};

const getOpendDoc = ({ docsItems, selectedDoc }) => {
  const { docType, id } = selectedDoc;
  const properDocs = docsItems[docType];
  return (properDocs && properDocs.items.find((doc) => doc.id === id)) || {};
};

const updateDocs = (docs, doc) => {
  const type = doc.type;
  return {
    ...docs,
    [type]: {
      ...docs[type],
      items: docs[type].items.map((item) => (item.id === doc.id ? doc : item)),
    },
  };
};

export const docs = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_DOC:
      return {
        ...state,
        opendDoc: getOpendDoc(state),
      };
    case SAVE_DOC:
      return {
        ...state,
        docsItems: updateDocs(state.docsItems, action.doc),
        opendDoc: action.doc,
        edit: false,
      };

    case CLICK_DOC:
      return {
        ...state,
        selectedDoc: { docType: action.docType, id: action.id },
        edit: false,
      };

    case TOGGLE_DOCS: {
      return {
        ...state,
        visibleType: action.docType,
      };
    }

    case EDIT_DOC: {
      return {
        ...state,
        edit: true,
      };
    }

    default:
      return state;
  }
};
