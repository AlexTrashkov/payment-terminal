import { Subject } from 'rxjs';

export interface PopupInfoNotification {
  type: 'success' | 'error';
  message: string;
  timeout?: number;
  closed$: Subject<void>;
}
