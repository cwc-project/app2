import React, { memo } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

const StatusBarComponent = ({ title = ' - ' }) => {
  const date = new Date();
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return (
    <div className="status-bar">
      <span>{`Открыт документ: ${title}`}</span>
      <span>{`Текущая дата: ${date.toLocaleDateString(
        'ru-RU',
        options,
      )}`}</span>
    </div>
  );
};

const mapStateToProps = ({ docs: { opendDoc } }) => ({
  title: opendDoc.title,
});

export const StatusBar = compose(
  connect(mapStateToProps),
  memo,
)(StatusBarComponent);
