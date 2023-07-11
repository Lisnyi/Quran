import AsyncStorage from '@react-native-async-storage/async-storage'
import { sendToast } from '../shared' 
import type { Bookmark } from '../types'

export const addBookmark = async (value:Bookmark): Promise<void> => {
    try {
        const { suraId, ayatOrder } = value
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(`${suraId}${ayatOrder}`, jsonValue)
        sendToast('Successfully added')
    } catch (e) {
        sendToast('Something went wrong')
    }
}

export const getBookmarks = async (): Promise<Bookmark[] | undefined> => {
    try {
        const bookmarks: Array<Bookmark> = []
        const keys = await AsyncStorage.getAllKeys()
        const jsonValue = await AsyncStorage.multiGet(keys)
        jsonValue.forEach((item)=>
            item[1] !== null
            ? bookmarks.push(JSON.parse(item[1]))
            : null
        )
        return bookmarks       
    } catch(e) {
        sendToast('Something went wrong')
    }
}

export const removeBookmark = async (suraId: string, ayatOrder: number): Promise<void> => {
    try {
      await AsyncStorage.removeItem(`${suraId}${ayatOrder}`)
      sendToast('Successfully deleted')
    } catch(e) {
        sendToast('Something went wrong')
    }
}

export const removeAllBookmarks = async (): Promise<void> => {
    try {
        const keys = await AsyncStorage.getAllKeys()
        await AsyncStorage.multiRemove(keys)
        sendToast('Successfully deleted')
    } catch(e) {
        sendToast('Something went wrong')
    }
}