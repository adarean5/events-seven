export enum EventTypes {
    App = "app",
    Ads = "ads",
    CrossPromo = "crosspromo",
    LiveOps = "liveops",
}

export interface EventDefinition {
    id: string;
    name: string;
    description: string;
    type: EventTypes;
    priority: number;
    relatedEvents: Array<string>;
    createdById: string;
    dateCreated: string;
    dateUpdated: string;
}
