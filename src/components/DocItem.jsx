import React, { memo } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { clickDoc, editDoc } from '../actions/docsActions';

const DocItemComponent = ({ title, id, selectedDocId, onClickDoc }) => {
  const defaultClass = 'doc-item';
  const className =
    selectedDocId === id ? `${defaultClass} active` : defaultClass;

  return (
    <li className={className} onClick={onClickDoc}>
      {title}
    </li>
  );
};

const mapStateToProps = ({ docs: { selectedDoc } }) => ({
  selectedDocId: selectedDoc.id,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClickDoc: (e) => {
    e.stopPropagation();
    dispatch(clickDoc(ownProps.type, ownProps.id));
  },
  onEditDoc: () => dispatch(editDoc()),
});

export const DocItem = compose(
  connect(mapStateToProps, mapDispatchToProps),
  memo,
)(DocItemComponent);
