export class Event {
    public Event:string;
    public EventEffect:string;
    public EventEffectExplanation:string;

    constructor(Event:string = null, EventEffect:string = null, EventEffectExplanation:string = null){
        this.Event = Event;
        this.EventEffect = EventEffect;
        this.EventEffectExplanation = EventEffectExplanation;
    }
}

//Traveling
export const RandTravelEvent=[
    'Event 1',
    "Event 2",
    'Event 3'
]

//In town
export const RandTownEvent=[
    'Event 1',
    'Event 2',
    'Event 3'
]

//In "dungeon"
export const RandDungeonEvent=[
    'Event 1',
    'Event 2',
    'Event 3'
]

//Mechanical Effect of Event (deals damage, roll a trap, get a treasure, learn plot, etc)
export const RandEventEffectNames=[
    'Effect 1',
    'Effect 2',
    'Effect 3'
]

export const RandEventEffectExplanations=[
    'Explain 1',
    'Explain 2',
    'Explain 3'
]