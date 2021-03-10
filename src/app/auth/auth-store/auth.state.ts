export interface AuthState {
    isLoading: boolean;
    error: string | null;
}

const initialAuthState: AuthState = {
    isLoading: false,
    error: null,
};

export function getInitialAuthState(): AuthState {
    return initialAuthState;
}
