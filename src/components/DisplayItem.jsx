import React, { memo } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { editDoc } from '../actions/docsActions';

const DisplayItemComponent = React.forwardRef(
  ({ text, edit, onEditDoc }, ref) => {
    if (!text)
      return (
        <div className="display-item">
          выберите и откройте документ или письмо
        </div>
      );
    return (
      <div className="display-item">
        <p className="display-item_info">
          {edit
            ? 'внесите изменения, нажмите "Сохранить"'
            : 'двойной клик, чтобы изменить текст'}
        </p>

        {edit ? (
          <textarea defaultValue={text} ref={ref} />
        ) : (
          <p onDoubleClick={onEditDoc}>{text}</p>
        )}
      </div>
    );
  },
);

const mapStateToProps = ({ docs }) => ({
  text: docs.opendDoc.text,
  edit: docs.edit,
});

const mapDispatchToProps = (dispatch) => ({
  onEditDoc: () => dispatch(editDoc()),
});

export const DisplayItem = compose(
  connect(mapStateToProps, mapDispatchToProps, null, {
    forwardRef: true,
  }),
  memo,
)(DisplayItemComponent);
