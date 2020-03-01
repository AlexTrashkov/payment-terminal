import { Component, ChangeDetectionStrategy, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { pluck, switchMap, map, startWith, tap, withLatestFrom, takeUntil, finalize, filter, distinctUntilChanged } from 'rxjs/operators';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { TelecomOperatorsService } from 'src/app/core/services/telecom-operators.service';
import { RefillBalanceService } from './refill-balance.service';
import { PopupInfoService } from 'src/app/core/services/popup-info.service';

@Component({
  selector: 'app-refill-balance',
  templateUrl: './refill-balance.component.html',
  styleUrls: ['./refill-balance.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RefillBalanceComponent implements OnInit, OnDestroy {

  public phonePrefix = '+7';

  public maxPaymentAmount = 1000;

  private operatorName$: Observable<string> = this.activatedRoute.params.pipe(
    pluck('operatorName')
  );

  private operator$ = this.operatorName$.pipe(
    switchMap((name) => this.telecomOperatorsService.getOperatorByName(name)),
    tap((operator) => !operator && this.router.navigate([''])),
    filter((operator) => !!operator),
  );

  public areOperatorDetailsLoaded$ = this.operator$.pipe(
    map(() => true),
    startWith(false),
  );

  private operatorId$ = this.operator$.pipe(
    pluck('id'),
  );

  public operatorLogo$ = this.operator$.pipe(
    pluck('logoUrl'),
    map((url) => `url(${url})`),
  );

  public form = this.fb.group({
    phoneNumber: [null, Validators.required],
    paymentAmount: [null, [Validators.required, Validators.min(1), Validators.max(this.maxPaymentAmount)]]
  });

  public isSubmitting$ = new BehaviorSubject(false);

  public submit$ = new Subject();

  private destroy$ = new Subject();

  constructor(
    private telecomOperatorsService: TelecomOperatorsService,
    private refillBalanceService: RefillBalanceService,
    private popupInfoService: PopupInfoService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
  ) { }

  public ngOnInit() {
    this.form.valueChanges
      .pipe(
        pluck('paymentAmount'),
        distinctUntilChanged(),
        filter((paymentAmount: number) => paymentAmount > this.maxPaymentAmount),
        takeUntil(this.destroy$)
      )
      .subscribe(() => this.form.patchValue({ paymentAmount: this.maxPaymentAmount }));

    this.submit$
      .pipe(
        withLatestFrom(this.operatorId$),
        takeUntil(this.destroy$)
      )
      .subscribe(([_, operatorId]) => this.submit(operatorId));
  }

  public ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private submit(operatorId: number) {
    this.form.markAllAsTouched();

    if (this.form.invalid) {
      return;
    }

    const { phoneNumber, paymentAmount } = this.form.value as RefillBalanceForm;

    this.isSubmitting$.next(true);

    const fullPhone = this.phonePrefix + phoneNumber;

    this.refillBalanceService
      .processPayment(operatorId, fullPhone, paymentAmount)
      .pipe(finalize(() => this.isSubmitting$.next(false)))
      .subscribe(
        (message) => {
          this.popupInfoService
            .success(message, 5000)
            .closed$
            .subscribe(() => this.router.navigate(['/']));
        },
        (message) => {
          this.popupInfoService.error(message);
        }
      );
  }
}

interface RefillBalanceForm {
  phoneNumber: string;
  paymentAmount: number;
}
