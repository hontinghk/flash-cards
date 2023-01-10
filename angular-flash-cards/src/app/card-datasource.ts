import { BehaviorSubject, Observable, catchError, of, finalize } from "rxjs";
import { Card } from "./models/card";
import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { CardService } from "./services/card.service";

export class CardDataSource implements DataSource<Card> {

    private cardsSubject = new BehaviorSubject<Card[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();

    constructor(private cardService: CardService) { }

    connect(collectionViewer: CollectionViewer): Observable<Card[]> {
        return this.cardsSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.cardsSubject.complete();
        this.loadingSubject.complete();
    }

    loadCards() {
        this.loadingSubject.next(true);

        this.cardService.getAllCards().pipe(
            catchError(() => of([])),
            finalize(() => this.loadingSubject.next(false))
        ).subscribe(cards => this.cardsSubject.next(cards));
    }

}