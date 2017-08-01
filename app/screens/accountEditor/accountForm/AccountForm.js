import React, { PropTypes } from 'react';
import { FormInput, Icon } from 'react-native-elements';
import { View } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import {
  ActionButton,
  CalculatorModal,
  Card,
  IconsPickerModal,
  PickerIcon,
  SecondaryText,
  TouchableFormInput,
} from '../../../components';
import calendarDateFormat from '../../../utils/calendarDateFormat';
import appStyles from '../../../styles/AppStyles';

const AccountForm = (props) => {
  const {
    name,
    icon,
    icons,
    date,
    onSubmit,
    isValid,
    initialBalance,
    onNameChange,
    onIconChange,
    onDateChange,
    isPickerVisible,
    onChangeBalance,
    onToggleCalculator,
    onTogglePicker,
    onToggleDatePicker,
    isDatePickerVisible,
    isCalculatorVisible,
  } = props;

  return (
    <View style={appStyles.rootStyle}>
      <Card wrapperStyle={appStyles.rowStyle}>
        <PickerIcon
          onPress={onTogglePicker}
          name={icon}
        />
        <FormInput
          inputStyle={appStyles.formInputStyle}
          value={name}
          onChangeText={onNameChange}
        />
      </Card>
      <Card>
        <SecondaryText>Initial balance</SecondaryText>
        <TouchableFormInput
          icon="calculator"
          value={initialBalance.toString()}
          onPress={onToggleCalculator}
        />
        <SecondaryText style={appStyles.withMarginTop}>Initial date</SecondaryText>
        <TouchableFormInput
          icon="calendar"
          onPress={onToggleDatePicker}
          value={calendarDateFormat(date)}
        />
      </Card>
      {isValid && (
        <ActionButton
          onPress={onSubmit}
          iconName="check"
        />
      )}
      <DateTimePicker
        isVisible={isDatePickerVisible}
        onConfirm={onDateChange}
        onCancel={onToggleDatePicker}
      />
      <IconsPickerModal
        isVisible={isPickerVisible}
        onIconPick={onIconChange}
        icons={icons}
        selectedIconName={icon}
        hideModal={onTogglePicker}
      />
      <CalculatorModal
        value={initialBalance}
        onSubmit={onChangeBalance}
        isVisible={isCalculatorVisible}
      />
    </View>
  );
};

AccountForm.propTypes = {
  isValid: PropTypes.bool,
  isPickerVisible: PropTypes.bool,
  icons: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string,
  icon: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  initialBalance: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  onToggleDatePicker: PropTypes.func,
  isDatePickerVisible: PropTypes.bool,
  isCalculatorVisible: PropTypes.bool,
  onNameChange: PropTypes.func,
  onChangeBalance: PropTypes.func,
  onIconChange: PropTypes.func,
  onDateChange: PropTypes.func,
  onToggleCalculator: PropTypes.func,
  onTogglePicker: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default AccountForm;
