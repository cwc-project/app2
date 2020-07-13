import React, { memo } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { toggleDocs } from '../actions/docsActions';
import { DocItem } from './DocItem';

const NavigationItemComponent = ({
  nestedNodes = [],
  type: rootType,
  visibleType,
  onToggleDoc,
}) => {
  const visible =
    nestedNodes.map(({ type }) => type).indexOf(visibleType) !== -1;
  if (rootType === visibleType || visible) {
    return nestedNodes.map(({ title, typeId, type, items }) => (
      <li
        className="navigation-menu_item"
        key={typeId}
        name={type}
        onClick={onToggleDoc}
      >
        {title}
        {visibleType === type && (
          <ul>
            {items.map(({ id, title }) => (
              <DocItem key={id} id={id} title={title} type={type} />
            ))}
          </ul>
        )}
      </li>
    ));
  }
  return null;
};

const mapStateToProps = ({ docs: { visibleType } }) => ({ visibleType });

const mapDispatchToProps = (dispatch) => ({
  onToggleDoc: (e) => {
    e.stopPropagation();
    return dispatch(toggleDocs(e.target.getAttribute('name')));
  },
});

export const NavigationItem = compose(
  connect(mapStateToProps, mapDispatchToProps),
  memo,
)(NavigationItemComponent);
