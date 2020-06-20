//follow same as KFC
//Won't need multiple arrays, just 1 of objects should do as each monster entry should be different

export class FifthMonster{
    public name: string;
    public cr: number;
    public size: string;
    public type: string;
    public alignment: string;
    public environment: string;
    public source: string;

    constructor(name:string = null, cr:number = null, size:string = null, type:string = null, alignment:string = null,
        environment:string = null, source:string = null){
            this.name = name; this.cr = cr; this.size = size; this.type = type; this.alignment = alignment;
            this.environment = environment; this.source = source;
        }
}

export let CRValues = {
    0: 10,
    0.125: 25,
    0.25: 50,
    0.5: 100,
    1: 200,
    2: 450,
    3: 700,
    4: 1100,
    5: 1800,
    6: 2300,
    7: 2900,
    8: 3900,
    9: 5000, 
    10: 5900,
    11: 7200,
    12: 8400,
    13: 10000,
    14: 11500,
    15: 13000,
    16: 15000,
    17: 18000,
    18: 20000,
    19: 22000,
    20: 25000,
    21: 33000,
    22: 41000,
    23: 50000,
    24: 62000,
    25: 75000,
    26: 90000,
    27: 105000,
    28: 120000,
    29: 135000,
    30: 155000
}

export let categories = [
    'name',
    'cr',
    'size',
    'type',
    'alignment',
    'environment',
    'source'
]

export let FifthEMonsters = [

['Aaztar-Ghola', 4, 'Medium', 'Humanoid', 'chaotic evil', '', 'Fifth Edition Foes: 5'],
['Adherer',	2,	'Medium',	'Aberration', 'lawful evil', 'forest, underground', 'Fifth Edition Foes: 6'],
['Adult Leucrotta',	2,	'Large',	'Monstrosity', 'chaotic evil', 'forest', 'Fifth Edition Foes: 164']

]