import { Injectable } from "@angular/core";
import { CanActivate, CanLoad, Router, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { select, Store } from "@ngrx/store";
import { UserState } from "@/app/app-store/user-store/user.state";
import { selectUser } from "@/app/app-store/user-store/user.selectors";
import { map, skipWhile, take } from "rxjs/operators";
import { User } from "@/app/models/user.model";

@Injectable({
    providedIn: "root",
})
export class IsAuthenticatedGuard implements CanActivate, CanLoad {
    constructor(private store: Store<UserState>, private router: Router) {}

    canActivate(): Observable<true | UrlTree> {
        return this.getUserFromStore().pipe(
            map((user) => this.isAuthenticated(user)),
        );
    }

    canLoad(): Observable<true | UrlTree> {
        return this.getUserFromStore().pipe(
            map((user) => this.isAuthenticated(user)),
        );
    }

    isAuthenticated(user: User | null | undefined): true | UrlTree {
        return user != null || this.router.parseUrl("/auth/sign-in");
    }

    getUserFromStore(): Observable<User | null | undefined> {
        return this.store.pipe(
            select(selectUser),
            // Make sure the user is defined before proceeding
            skipWhile((user) => typeof user === "undefined"),
            take(1),
        );
    }
}
