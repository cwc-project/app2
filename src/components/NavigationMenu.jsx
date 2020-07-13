import React, { memo } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { NavigationItem } from './NavigationItem';
import { toggleDocs } from '../actions/docsActions';
import { docTypes } from '../constants/docTypes';

const {
  AGREEMENTS,
  DECLARATIONS,
  LETTERS,
  NOTIFICATIONS,
  CORRESPONDING,
  DOCUMENTS,
} = docTypes;

const NavigationMenuComponent = ({
  agreements = {},
  declarations = {},
  letters = {},
  notifications = {},
  onToggleDoc,
}) => {
  return (
    <div className="navigation-menu">
      <ul>
        <li
          className="navigation-menu_item"
          onClick={() => onToggleDoc(DOCUMENTS)}
        >
          Документы
          <ul>
            <NavigationItem
              nestedNodes={[agreements, declarations]}
              type={DOCUMENTS}
            />
          </ul>
        </li>

        <li
          className="navigation-menu_item"
          onClick={() => onToggleDoc(CORRESPONDING)}
        >
          Переписка
          <ul>
            <NavigationItem
              nestedNodes={[letters, notifications]}
              type={CORRESPONDING}
            />
          </ul>
        </li>
      </ul>
    </div>
  );
};

const mapStateToProps = ({ docs: { docsItems } }) => ({
  agreements: docsItems[AGREEMENTS],
  declarations: docsItems[DECLARATIONS],
  letters: docsItems[LETTERS],
  notifications: docsItems[NOTIFICATIONS],
});

const mapDispatchToProps = (dispatch) => ({
  onToggleDoc: (docType) => dispatch(toggleDocs(docType)),
});

export const NavigationMenu = compose(
  connect(mapStateToProps, mapDispatchToProps),
  memo,
)(NavigationMenuComponent);
