import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { PopupInfoNotification } from 'src/app/core/models/popup-info-notification';

@Component({
  selector: 'app-popup-info-item',
  templateUrl: './popup-info-item.component.html',
  styleUrls: ['./popup-info-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopupInfoItemComponent implements OnChanges {

  @Input()
  public notification: PopupInfoNotification;

  @Output()
  public closeNotification = new EventEmitter();

  private closeTimeout: any;

  public ngOnChanges(changes: SimpleChanges) {
    const nextNotification: PopupInfoNotification = changes.notification && changes.notification.currentValue;

    if (nextNotification) {
      clearTimeout(this.closeTimeout);
    }

    if (nextNotification && nextNotification.timeout) {
      this.closeTimeout = setTimeout(() => this.closeNotification.emit(), nextNotification.timeout);
    }
  }
}
