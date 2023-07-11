import { FC } from 'react'
import { View, ScrollView } from 'react-native'
import { Formik, FormikValues, FormikHelpers } from 'formik'
import emailjs from '@emailjs/browser'
import { Input, CustomButton } from '../../common'
import { initialValues } from './initialValues'
import { schema } from './validationSchema'
import { useTranslation } from '../../../shared'
import { styles } from './SendMessageForm.styled'


type Props = {
  openModal: () => void
}

export const SendMessageForm: FC<Props> = ({openModal}) => {

  const translation = useTranslation();

  function submitForm (values: FormikValues, {resetForm}: FormikHelpers<{ email: string; message: string; }>) {
    emailjs.send('service_ad6rfjn', 'template_yq67nls', values, 'Rf109bg3nHkeJ_OsR')
    .then((result) => {
        console.log(result.text);
        openModal()
        resetForm()
    }, (error) => {
        console.log(error.text);
    });
  }

  return (
    <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={submitForm}
    >
    {({ handleSubmit, errors, touched }) => (
      <ScrollView>
        <View style={styles.form}>
          <View>
            <Input
              name='email'
              label='E-mail'
              placeholder={translation.enterYourEmail} 
              isValid={Boolean(errors.email && touched.email)}/>
            <Input
              name='message'
              label={translation.message}
              placeholder={translation.writeWhatDoesNotWork}
              multiline={true}
              isValid={Boolean(errors.message && touched.message)}/>
          </View>
          <CustomButton onPress={() => handleSubmit()} text={translation.send} />
        </View>
        </ScrollView>
    )}
    </Formik>
  )
}