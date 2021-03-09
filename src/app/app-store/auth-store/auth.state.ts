import { User } from "@/app/models/user.model";

export interface AuthState {
    user: User | null;
    isLoading: boolean;
    error: string | null;
}

// TODO Split auth and user state and lift user state to the root
const initialAuthState: AuthState = {
    user: null,
    isLoading: false,
    error: null,
};

export function getInitialAuthState(): AuthState {
    return initialAuthState;
}
