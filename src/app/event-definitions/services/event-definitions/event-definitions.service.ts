import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { EventDefinition } from "@/app/event-definitions/models/event-definitions.model";
import { EventDefinitionsServicesModule } from "@/app/event-definitions/services/event-definitions-services.module";
import {
    AngularFirestore,
    AngularFirestoreCollection,
} from "@angular/fire/firestore";
import { fromPromise } from "rxjs/internal-compatibility";

@Injectable({
    providedIn: EventDefinitionsServicesModule,
})
export class EventDefinitionsService {
    private readonly eventDefinitionsCollection: AngularFirestoreCollection;

    constructor(private firestore: AngularFirestore) {
        this.eventDefinitionsCollection = this.firestore.collection<any>(
            "event-definitions",
        );
    }

    getAll(): Observable<any[]> {
        return this.eventDefinitionsCollection.valueChanges({ idField: "id" });
    }

    createItem(eventDefinition: EventDefinition): Observable<void> {
        return fromPromise(
            this.eventDefinitionsCollection
                .doc(eventDefinition.id)
                .set(eventDefinition),
        );
    }

    updateItem(eventDefinition: EventDefinition): Observable<void> {
        console.log("Event definiton from service", eventDefinition);

        return fromPromise(
            this.eventDefinitionsCollection
                .doc(eventDefinition.id)
                .update(eventDefinition),
        );
    }

    deleteItem(id: string): Observable<void> {
        return fromPromise(this.eventDefinitionsCollection.doc(id).delete());
    }
}
