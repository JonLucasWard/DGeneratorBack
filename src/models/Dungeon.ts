//Location: Biome + Building
//Reason for Dungeon / Decay (there is none and its just crime, secret experiments, natural inhabitants, etc)
//"Quality" of dungeon (nice, crappy, etc)
//Building Material 1 and 2 of Dungeon (Wood, brass, stone, porcelain, glass, etc)
//Light Level in Dungeon generally (low, bright, pitch black, blinding)
//Monster Stationary Behavior
//Monster Wandering Behavior

export class Dungeon {
    public Building:string;
    public BiomeName:string; public BiomeExplanation:string;
    public ReasonForDungeonName: string; public ReasonForDungeonExplanation: string;
    public Quality: string; public Material1: string; public Material2: string;
    public LightLevel: string;
    public MonsterStationaryName: string; public MonsterStationaryExplanation: string;
    public MonsterWanderingName: string; public MonsterWanderingExplanation: string;

    constructor(Building:string = null,
        BiomeName:string = null, BiomeExplanation:string = null,
        ReasonForDungeonName: string = null, ReasonForDungeonExplanation: string = null,
        Quality: string = null, Material1: string = null, Material2: string = null,
        LightLevel: string = null,
        MonsterStationaryName: string = null, MonsterStationaryExplanation: string = null,
        MonsterWanderingName: string = null, MonsterWanderingExplanation: string = null){
       
        this.Building = Building;
        this.BiomeName = BiomeName; this.BiomeExplanation = BiomeExplanation;
        this.ReasonForDungeonName = ReasonForDungeonName; this.ReasonForDungeonExplanation = ReasonForDungeonExplanation;
        this.Quality = Quality; this.Material1 = Material1; this.Material2 = Material2;
        this.LightLevel = LightLevel;
        this.MonsterStationaryName = MonsterStationaryName; this.MonsterStationaryExplanation = MonsterStationaryExplanation;
        this.MonsterWanderingName = MonsterWanderingName; this.MonsterWanderingExplanation = MonsterWanderingExplanation;
    }
}

export const ReasonForDungeonNames = [
    'Reason 1',
    'Reason 2',
    'Reason 3'
]

export const ReasonForDungeonExplanation=[
    'explain1',
    'explain2',
    'explain3'
]

export const QualityOfDungeon = [
    'Decrepid',
    'Ancient',
    'New',
    'Polished',
    'Well Made'
]

export const Material = [
    'Wood',
    'Marble',
    'Stone'
]

export const LightLevel =[
    'Pitch Black',
    'Normal',
    'Blinding'
]

export const MonsterStationaryBehaviorNames =[
    'Behavior1',
    'Behavior2',
    'Behavior3'
]

export const MonsterStationaryBehaviorExplanation =[
    'explain1',
    'e2',
    'e3'
]

export const MonsterWanderingBehaviorNames =[
    'Behavior1',
    'Behavior2',
    'Behavior3'
]

export const MonsterWanderingBehaviorExplanation =[
    'e1',
    'e2',
    'e3'
]

//Random Treasure
//Traps