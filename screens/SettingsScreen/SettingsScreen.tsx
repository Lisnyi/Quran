import { FC, useState, useEffect } from 'react'
import type { StackScreenProps } from '@react-navigation/stack';
import { ScrollView, View, Platform } from 'react-native';
import { removeAllBookmarks } from '../../localStorage/bookmarksStorage';
import type { SettingsRootStackParamList } from '../../routes'
import { Container, Section, Header, SettingsItem, FontSizeModal } from "../../components";
import { useTranslation, useLanguageContext, useAlignmentContext, useFontSizeContext, share } from '../../shared'
import { styles } from './SettingsScreen.styled'

type SettingsProps = StackScreenProps<SettingsRootStackParamList, "SettingsList">;

export const SettingsScreen: FC <SettingsProps> = ({navigation}) => {

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [message, setMessage] = useState('')
  const translation = useTranslation();
  const { language, changeLanguage } = useLanguageContext();
  const { alignment, changeAlignment } = useAlignmentContext()
  const { fontSize } = useFontSizeContext()
  const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.instagram.android&hl=en_IN&gl=US'
  const appStoreUrl = 'https://apps.apple.com/us/app/instagram/id389801252'

  useEffect (
    () => {
      if (Platform.OS === 'ios') {
        setMessage('Quran'+'\n'+ appStoreUrl)
      }
      if (Platform.OS === 'android') {
        setMessage('Quran'+'\n'+ playStoreUrl)
      }
    }, [Platform.OS]
  )

  function onPress () {
    console.log('click')
  }

  return (
    <Container>
      <Section>
          <Header title={translation.settings}/>
          <ScrollView>
            <View style={styles.list}>
              <View style={styles.itemBox}>
                <SettingsItem
                  onPress={() => setIsModalOpen(true)}
                  icon='TextAa'
                  optionName={translation.fontSize}
                  pick={fontSize}/>
                <SettingsItem
                  onPress={() => changeAlignment(alignment === 'left' ? 'right' : 'left')}
                  icon='Align' optionName={translation.textAlignment}
                  pick={alignment === 'left' ? translation.leftAlignment : translation.rightAlignment}/>
              </View>
              <View style={styles.itemBox}>
                <SettingsItem
                  onPress={onPress}
                  icon='Bookmarks'
                  optionName={translation.favoritesAndBookmarks}
                  moreInfo={false}/>
              </View>
              <View style={styles.itemBox}>
                <SettingsItem
                  onPress={onPress}
                  icon='Broom'
                  optionName={translation.clearFavorite}/>
                <SettingsItem
                  onPress={removeAllBookmarks}
                  icon='File'
                  optionName={translation.deleteAllBookmarks}/>
                <SettingsItem
                  onPress={onPress}
                  icon='Bell'
                  optionName={translation.deleteAllNotifications}/>
              </View>
              <View style={styles.itemBox}>
                <SettingsItem
                  onPress={() => changeLanguage(language === 'en' ? 'ua' : 'en')}
                  icon='Language' optionName={translation.appLanguage}
                  pick={language === 'en' ? 'English' : 'Українська'}/>
                <SettingsItem
                  onPress={onPress}
                  icon='Wrench'
                  optionName={translation.version}
                  pick={'1.0.1'}/>
                <SettingsItem
                  onPress={() => navigation.navigate('Help')}
                  icon='Help'
                  optionName={translation.help}/>
                <SettingsItem
                  onPress={() => navigation.navigate('Review')}
                  icon='Testimonials'
                  optionName={translation.writeReview}/>
                <SettingsItem
                  onPress={() => navigation.navigate('SendMessage')}
                  icon='Warning'
                  optionName={translation.reportProblem}/>
              </View>
              <View>
                <SettingsItem
                  onPress={async () => share(message)}
                  icon='Share'
                  optionName={translation.share}
                  moreInfo={false}/>
              </View>
            </View>
          </ScrollView>
      </Section>
      <FontSizeModal isModalVisible={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </Container>
  )
}