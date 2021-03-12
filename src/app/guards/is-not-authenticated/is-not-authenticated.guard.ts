import { Injectable } from "@angular/core";
import { CanActivate, CanLoad, Router, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { User } from "@/app/models/user.model";
import { IsAuthenticatedGuard } from "@/app/guards/is-authenticated/is-authenticated.guard";

@Injectable({
    providedIn: "root",
})
export class IsNotAuthenticatedGuard implements CanActivate, CanLoad {
    constructor(
        private isAuthenticatedGuard: IsAuthenticatedGuard,
        private router: Router,
    ) {}

    canActivate(): Observable<boolean | UrlTree> {
        return this.isAuthenticatedGuard
            .getUserFromStore()
            .pipe(map((user) => this.isNotAuthenticated(user)));
    }

    canLoad(): Observable<boolean | UrlTree> {
        return this.isAuthenticatedGuard
            .getUserFromStore()
            .pipe(map((user) => this.isNotAuthenticated(user)));
    }

    isNotAuthenticated(user: User | null | undefined): boolean | UrlTree {
        return user === null || this.router.parseUrl("");
    }
}
