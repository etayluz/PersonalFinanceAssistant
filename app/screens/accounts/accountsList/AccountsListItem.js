import React, { PropTypes } from 'react';
import { CustomListItem } from '../../../components';

const AccountsListItem = ({ name, icon, balance, ...props }) => (
  <CustomListItem
    {...props}
    title={name}
    icon={icon}
    rightTitle={`${balance}`}
  />
);

AccountsListItem.propTypes = {
  style: PropTypes.any,
  name: PropTypes.string,
  icon: PropTypes.string,
  balance: PropTypes.number,
};

export default AccountsListItem;
