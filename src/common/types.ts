import { ThemeType } from 'grommet';
import { UserObject } from '@api/schema';
import { NotificationStatus } from '@components/Notification/Notification';

export type Voidable<T> = undefined extends T ? void : T;

export type StringifyKeys<T> = {
  [P in keyof T]: string;
};

interface Notification {
  status: NotificationStatus;
  message: string;
}

interface Theme {
  id: number;
  name: string;
  icon: string;
  data: ThemeType;
  dark: boolean;
}

export interface Themes {
  [id: number]: Theme;
}

export interface AppState {
  currentUserId: number;
  users: Record<number, UserObject>;
  isSignedIn: boolean;
  notification: Notification | null;
  isSSR: boolean;
  themes: Themes;
  currentTheme: number;
}
