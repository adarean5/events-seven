import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { UserState } from "@/app/app-store/user-store/user.state";
import { signOut } from "@/app/app-store/user-store/user.actions";
import { User } from "@/app/models/user.model";
import { Observable } from "rxjs";
import { selectUser } from "@/app/app-store/user-store/user.selectors";
import { filter } from "rxjs/operators";

@Component({
    selector: "app-shell",
    templateUrl: "./shell.component.html",
    styleUrls: ["./shell.component.scss"],
})
export class ShellComponent implements OnInit {
    user: Observable<User>;

    constructor(private store: Store<UserState>) {}

    ngOnInit(): void {
        this.user = this.store
            .select(selectUser)
            .pipe(filter((user) => user != null)) as Observable<User>;
    }

    signOut(): void {
        this.store.dispatch(signOut());
    }
}
