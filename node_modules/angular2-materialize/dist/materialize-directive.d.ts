import { ElementRef, DoCheck, OnChanges, OnDestroy, AfterViewInit } from '@angular/core';
export declare class MaterializeDirective implements AfterViewInit, DoCheck, OnChanges, OnDestroy {
    private _el;
    private _params;
    private _functionName;
    private previousValue;
    private changeListenerShouldBeAdded;
    constructor(_el: ElementRef);
    materializeParams: any;
    materialize: string;
    materializeSelectOptions: any;
    ngAfterViewInit(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
    ngDoCheck(): boolean;
    private performElementRemotion();
    private performElementUpdates();
    private performLocalElementUpdates();
    private isTooltip();
    private isSelect();
    private isDatePicker();
    private enableDPButtons();
}
