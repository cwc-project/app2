export const OPEN_DOC = 'OPEN_DOC';
export const SAVE_DOC = 'SAVE_DOC';
export const CLICK_DOC = 'CLICK_DOC';
export const TOGGLE_DOCS = 'TOGGLE_DOCS';
export const EDIT_DOC = 'EDIT_DOC';

export const toggleDocs = docType => ({
  type: TOGGLE_DOCS,
  docType
});

export const openDoc = () => ({
  type: OPEN_DOC
});

export const saveDoc = (doc) => ({
  type: SAVE_DOC,
  doc
});

export const clickDoc = (docType, id) => ({
  type: CLICK_DOC,
  docType,
  id
});

export const editDoc = () => {console.log('edit doc');return ({
  type: EDIT_DOC,
})};
