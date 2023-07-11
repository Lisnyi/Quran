import { FC } from 'react'
import { Text, TextInput, KeyboardAvoidingView, Platform } from 'react-native'
import { useFormikContext, ErrorMessage, useField } from 'formik';
import { styles } from './Input.styled'
import { CustomErrorMessage } from '../CustomErrorMessage'

type Props = {
    name: string,
    label: string,
    placeholder: string,
    multiline?: boolean,
    isValid: boolean
}

export const Input: FC<Props> = ({name, label, placeholder, multiline=false, isValid}) => {
    const { handleChange, handleBlur } = useFormikContext()
    const [meta] = useField(name)
    const { value } = meta;

  return (
    <KeyboardAvoidingView
      style={styles.inputBox}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
        <Text style={styles.label}>{label}</Text>
        <TextInput
            style={{
              ...styles.input,
              backgroundColor: value ? '#1D3837' : 'transparent',
              borderColor: !isValid ? '#88BBBB' : '#EDA7E6'
            }}
            onChangeText={handleChange(name)}
            onBlur={handleBlur(name)}
            value={value}
            placeholder={placeholder}
            placeholderTextColor='#578282'
            multiline={multiline}
        />
        <ErrorMessage name={name} render={msg => <CustomErrorMessage message={msg}/>}/>
    </KeyboardAvoidingView>
  )
}