export enum EventTypes {
    App = "app",
    Ads = "ads",
    CrossPromo = "crosspromo",
    LiveOps = "liveops",
}

export interface Event {
    id: string;
    name: string;
    description: string;
    type: EventTypes;
    priority: number;
    relatedEvents: Array<string>;
    createdById: string;
}
