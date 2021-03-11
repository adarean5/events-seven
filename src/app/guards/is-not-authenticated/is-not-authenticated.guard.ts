import { Injectable } from "@angular/core";
import { CanActivate, CanLoad } from "@angular/router";
import { Observable } from "rxjs";
import { filter, map, take, tap } from "rxjs/operators";
import { User } from "@/app/models/user.model";
import { select, Store } from "@ngrx/store";
import { selectUser } from "@/app/app-store/user-store/user.selectors";
import { getUser } from "@/app/app-store/user-store/user.actions";
import { UserState } from "@/app/app-store/user-store/user.state";

@Injectable({
    providedIn: "root",
})
export class IsNotAuthenticatedGuard implements CanActivate, CanLoad {
    constructor(private store: Store<UserState>) {}

    canActivate(): Observable<boolean> {
        return this.getUserFromStore().pipe(
            map(() => {
                return true;
            }),
        );
    }

    canLoad(): Observable<boolean> {
        return this.getUserFromStore().pipe(
            map(() => {
                return true;
            }),
        );
    }

    getUserFromStore(): Observable<User | null | undefined> {
        return this.store.pipe(
            select(selectUser),
            tap((user: User | null | undefined) => {
                if (user == null) {
                    this.store.dispatch(getUser());
                }
            }),
            filter((user: User | null | undefined) => {
                return user == null;
            }),
            take(1),
        );
    }
}
