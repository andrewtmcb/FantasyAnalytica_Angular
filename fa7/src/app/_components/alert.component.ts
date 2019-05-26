import { Component, OnInit, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';

// import { AlertService } from '@app/_services';

@Component ({
    selector: 'alert',
    templateUrl: 'alert.component.html'
})

export class AlertComponent implements OnInit, OnDestroy {
    private subscription: Subscription;
    message: any;

    constructor() {}

    ngOnInit() {
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
