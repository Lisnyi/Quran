import { Share } from "react-native";

export const share = async (message: string): Promise<void> => {
    try {
        const result = await Share.share({
          message: message
        });
        if (result.action === Share.sharedAction) {
          if (result.activityType) {
            // shared with activity type of result.activityType
          } else {
            // shared
          }
        } else if (result.action === Share.dismissedAction) {
          // dismissed
        }
      } catch (error) {
        console.log( error )
      }
  };