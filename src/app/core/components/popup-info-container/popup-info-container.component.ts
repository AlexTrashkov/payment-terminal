import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PopupInfoService } from '../../services/popup-info.service';
import { PopupInfoNotification } from '../../models/popup-info-notification';

@Component({
  selector: 'app-popup-info-container',
  templateUrl: './popup-info-container.component.html',
  styleUrls: ['./popup-info-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PopupInfoContainerComponent  {

  public notification$ = this.popupInfoService.notification$;

  constructor(private popupInfoService: PopupInfoService) { }

  public closeNotification(notification: PopupInfoNotification) {
    notification.closed$.next();
    notification.closed$.complete();
    this.popupInfoService.close();
  }
}
