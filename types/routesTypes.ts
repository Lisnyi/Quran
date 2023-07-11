import { NavigatorScreenParams } from '@react-navigation/native';
import type { Ayat } from './surasTypes';

export type UserRootStackParamList = {
    Home: NavigatorScreenParams<HomeRootStackParamList>;
    Bookmarks: undefined;
    Settings: undefined;
  };

export type HomeRootStackParamList = {
    Content: undefined;
    Chapter: NavigatorScreenParams<ChapterRootStackParamList>;
  };

export type ChapterRootStackParamList = {
    Introduction: {
      suraId: string,
      suraOrder: number,
      title: string,
      introduction: string,
      ayats: Array<Ayat>
    }
    Details: {
      suraId: string,
      suraOrder: number,
      title: string,
      ayats: Array<Ayat>
    };
  };