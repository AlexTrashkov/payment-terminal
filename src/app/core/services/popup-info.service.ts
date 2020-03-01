import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { PopupInfoNotification } from '../models/popup-info-notification';

@Injectable({
  providedIn: 'root'
})
export class PopupInfoService {

  private setNotification$ = new Subject<PopupInfoNotification>();

  public notification$ = this.setNotification$.asObservable();

  public success(message: string, timeout?: number) {
    return this.showNotification('success', message, timeout);
  }

  public error(message: string, timeout?: number) {
    return this.showNotification('error', message, timeout);
  }

  public close() {
    this.setNotification$.next(null);
  }

  private showNotification(type: 'success' | 'error', message: string, timeout?: number) {
    const notification: PopupInfoNotification = {
      type,
      message,
      timeout,
      closed$: new Subject()
    };

    this.setNotification$.next(notification);

    return notification;
  }
}

