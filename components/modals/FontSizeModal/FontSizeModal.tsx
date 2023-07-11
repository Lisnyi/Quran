import { FC, useMemo } from 'react'
import { View } from 'react-native'
import RadioGroup, { RadioButtonProps } from 'react-native-radio-buttons-group';
import Modal from "react-native-modal"
import { Title } from '../../common';
import { useTranslation, useFontSizeContext } from '../../../shared'
import { styles } from './FontSizeModal.styled'

type Props = {
    isModalVisible: boolean,
    onClose: () => void
}

export const FontSizeModal: FC<Props> = ({isModalVisible, onClose}) => {

    const translation = useTranslation()
    const { fontSize, changeFontSize } = useFontSizeContext() 

    const radioButtons: RadioButtonProps[] = useMemo(() => ([
        {
            id: '12',
            label: '12',
            color: '#FFFFFF',
            labelStyle: {...styles.label, fontSize: 12},
            containerStyle: styles.radio
        },
        {
            id: '16',
            label: '16',
            color: '#FFFFFF',
            labelStyle: {...styles.label, fontSize: 16}
        },
        {
            id: '20',
            label: '20',
            color: '#FFFFFF',
            labelStyle: {...styles.label, fontSize: 20}
        }
    ]), []);

    function selectFontSize (selectedId: string) {
        changeFontSize(Number(selectedId))
        onClose()
    }

    return(
        <Modal
            isVisible={isModalVisible}
            backdropOpacity={0.9}
            animationIn='fadeIn'
            animationOut='fadeOut'
            onBackdropPress={onClose}
            onSwipeComplete={onClose}
            hideModalContentWhileAnimating={true}
            useNativeDriver={true}
            backdropColor='#0D1A19'
        >
            <View style={styles.modal}>
                <View style={styles.contentBox} >
                    <Title>{translation.chooseFontSize}</Title>
                    <RadioGroup 
                        radioButtons={radioButtons} 
                        onPress={selectFontSize}
                        selectedId={fontSize.toString()}
                        layout='row'
                        containerStyle={styles.radioGroup}
                    />
                </View>
            </View>
        </Modal>
    )
}