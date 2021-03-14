import { EventDefinitionsService } from "@/app/event-definitions/services/event-definitions/event-definitions.service";
import { Actions, createEffect, ofType, OnInitEffects } from "@ngrx/effects";
import * as EventDefinitionActions from "./event-definitions.actions";
import { catchError, map, switchMap } from "rxjs/operators";
import { of } from "rxjs";
import { Action, createAction } from "@ngrx/store";
import { buildType } from "./event-definitions.actions";
import { Injectable } from "@angular/core";
import { EventDefinition } from "@/app/event-definitions/models/event-definitions.model";

@Injectable()
export class EventDefinitionsEffects implements OnInitEffects {
    constructor(
        private actions$: Actions,
        private eventDefinitionsService: EventDefinitionsService,
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
