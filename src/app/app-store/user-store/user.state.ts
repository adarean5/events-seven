import { User } from "@/app/models/user.model";

export interface UserState {
    user: User | null;
    error: string | null;
    isLoading: boolean;
}

const initialUserState: UserState = {
    user: null,
    error: null,
    isLoading: false,
};

export function getInitialUserState(): UserState {
    return initialUserState;
}
