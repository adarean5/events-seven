import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { UserState } from "@/app/app-store/user-store/user.state";
import { signOut } from "@/app/app-store/user-store/user.actions";

@Component({
    selector: "app-shell",
    templateUrl: "./shell.component.html",
    styleUrls: ["./shell.component.scss"],
})
export class ShellComponent implements OnInit {
    constructor(private store: Store<UserState>) {}

    ngOnInit(): void {}

    signOut(): void {
        this.store.dispatch(signOut());
    }
}
