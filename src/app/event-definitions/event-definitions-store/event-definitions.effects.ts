import { EventDefinitionsService } from "@/app/event-definitions/services/event-definitions/event-definitions.service";
import { Actions, createEffect, ofType, OnInitEffects } from "@ngrx/effects";
import * as EventDefinitionActions from "./event-definitions.actions";
import {
    catchError,
    exhaustMap,
    map,
    switchMap,
    withLatestFrom,
} from "rxjs/operators";
import { of } from "rxjs";
import { Action, createAction, Store } from "@ngrx/store";
import { buildType } from "./event-definitions.actions";
import { Injectable } from "@angular/core";
import { EventDefinition } from "@/app/event-definitions/models/event-definitions.model";
import { selectUser } from "@/app/app-store/user-store/user.selectors";

@Injectable()
export class EventDefinitionsEffects implements OnInitEffects {
    constructor(
        private actions$: Actions,
        private eventDefinitionsService: EventDefinitionsService,
        private store: Store,
    ) {}

    eventDefinitionsEffectsInit = createAction(buildType("Init"));

    getEventDefinitions = createEffect(() =>
        this.actions$.pipe(
            ofType(EventDefinitionActions.getEventDefinitions),
            switchMap(() => this.eventDefinitionsService.getAll()),
            map((eventDefinitionsCollection) => {
                const eventDefinitions: EventDefinition[] = eventDefinitionsCollection.map(
                    (eventDefinition) => ({
                        ...eventDefinition,
                        relatedEvents: [],
                    }),
                );

                return EventDefinitionActions.getEventDefinitionsSuccess({
                    eventDefinitions,
                });
            }),
            catchError((error: Error) =>
                of(EventDefinitionActions.getEventDefinitionsError({ error })),
            ),
        ),
    );

    updateEventDefinition = createEffect(
        () =>
            this.actions$.pipe(
                ofType(EventDefinitionActions.updateEventDefinition),
                switchMap((action) =>
                    this.eventDefinitionsService.updateItem(
                        action.eventDefinition,
                    ),
                ),
                catchError((error) => {
                    console.error(error);
                    return of();
                }),
            ),
        { dispatch: false },
    );

    createEventDefinition = createEffect(
        () =>
            this.actions$.pipe(
                ofType(EventDefinitionActions.createEventDefinition),
                withLatestFrom(this.store.select(selectUser)),
                switchMap(([action, user]) => {
                    const eventDefinition: EventDefinition = {
                        ...action.eventDefinition,
                        createdById: user?.uid as string,
                        relatedEvents: [],
                    };
                    console.log(
                        "Event definition from effects",
                        eventDefinition,
                    );
                    return this.eventDefinitionsService.createItem(
                        eventDefinition,
                    );
                }),
                catchError((error) => {
                    console.error(error);
                    return of();
                }),
            ),
        { dispatch: false },
    );

    deleteEventDefinition = createEffect(
        () =>
            this.actions$.pipe(
                ofType(EventDefinitionActions.deleteEventDefinition),
                exhaustMap((action) =>
                    this.eventDefinitionsService.deleteItem(action.id),
                ),
                catchError((error) => {
                    console.error(error);
                    return of();
                }),
            ),
        { dispatch: false },
    );

    init = createEffect(() =>
        this.actions$.pipe(
            ofType(this.eventDefinitionsEffectsInit),
            map(() => EventDefinitionActions.getEventDefinitions()),
        ),
    );

    ngrxOnInitEffects(): Action {
        return this.eventDefinitionsEffectsInit();
    }
}
