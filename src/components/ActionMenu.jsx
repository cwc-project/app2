import React, { memo } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { openDoc, saveDoc } from '../actions/docsActions';

const ActionMenuComponent = ({ id, onOpenDoc, onSaveDoc, edit }) => (
  <div className="action-menu">
    <h5 className="action-menu_header">действия</h5>
    <input
      type="button"
      className="action-menu_btn"
      disabled={!Boolean(id)}
      value="Открыть"
      onClick={onOpenDoc}
    />
    <input
      type="button"
      className="action-menu_btn"
      disabled={!edit}
      value="Сохранить"
      onClick={onSaveDoc}
    />
  </div>
);

const mapStateToProps = ({ docs }) => ({
  id: docs.selectedDoc.id,
  text: docs.selectedDoc.text,
  opendDoc: docs.opendDoc,
  edit: docs.edit,
});

const mergeProps = (
  { id, text, opendDoc, edit },
  { dispatch },
  { textareaRef },
) => ({
  id,
  edit,
  textareaRef,
  onOpenDoc: () => dispatch(openDoc()),
  onSaveDoc: () => {
    const newText = textareaRef.current.value;
    if (text !== newText) {
      const doc = { ...opendDoc, text: newText };
      dispatch(saveDoc(doc));
    }
  },
});

export const ActionMenu = compose(
  connect(mapStateToProps, null, mergeProps),
  memo,
)(ActionMenuComponent);
