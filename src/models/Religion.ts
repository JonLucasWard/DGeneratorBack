//GOVT TYPE, applies to religion as well
export class Religion {
    public Belief:string; // Each field is just generally declared here, they are public so that all routers can access them
    public BeliefExplanation:string; 
    public DivineIs:string; public DivineIsExplanation:string; 
    public RelationshipWithOtherReligions:string; public RelationshipWithOtherReligionsExplanation:string; 
    public StudyOfDivine:string; public StudyOfDivineExplanation:string;
    public Cosmology:string; public CosmologyExplanation:string;
    public ExistenceIs:string; public ExistenceIsExplanation:string;
    public PeopleAre:string; public PeopleAreExplanation:string;
    public TheAfterlifeIs:string; public TheAfterLifeIsExplanation:string;
    public GovtType:Array<string>; public GovtTypeExplanation:Array<string>;
    public ToBeSavedYou:string; public ToBeSavedYouExplanation:string;
    public EvilIs:string; public EvilIsExplanation:string;
    public NatureIs:string; public NatureIsExplanation:string;
    public OrganizedReligionIs:string; public OrganizedReligionIsExplanation:string;
    public vices:Array<string>; public virtues:Array<string>; public themes:Array<string>; 
    public PoliticalRelations:string; public Demographics:string;
    public ClergyQuirk:string; public ClergyQuirkExplanation:string;
    //constructor on how to create a "Test" object
    constructor(Belief:string = null, // Each field is just generally declared here, they are public so that all routers can access them
        BeliefExplanation:string = null, 
        DivineIs:string = null, DivineIsExplanation:string = null, 
        RelationshipWithOtherReligions:string = null, RelationshipWithOtherReligionsExplanation:string = null, 
        StudyOfDivine:string = null, StudyOfDivineExplanation:string = null,
        Cosmology:string = null, CosmologyExplanation:string = null,
        ExistenceIs:string = null, ExistenceIsExplanation:string = null,
        PeopleAre:string = null, PeopleAreExplanation:string = null,
        TheAfterlifeIs:string = null, TheAfterLifeIsExplanation:string = null,
        GovtType:Array<string> = [], GovtTypeExplanation:Array<string> = [],
        ToBeSavedYou:string = null, ToBeSavedYouExplanation:string = null,
        EvilIs:string = null, EvilIsExplanation:string = null,
        NatureIs:string = null, NatureIsExplanation:string = null,
        OrganizedReligionIs:string = null, OrganizedReligionIsExplanation:string = null, 
        vices:Array<string> = [], virtues:Array<string> = [], themes:Array<string> = [],  
        PoliticalRelations:string = null, Demographics:string = null, 
        ClergyQuirk:string = null, ClergyQuirkExplanation:string = null){
        //variable name being passed in, a data type which will be accepted, a starting data value (null)
        this.Belief = Belief; //this.id being the id of the test object, it is set to the "id" which is being passed in
        this.BeliefExplanation = BeliefExplanation;
        this.DivineIs = DivineIs; this.DivineIsExplanation = DivineIsExplanation;
        this.RelationshipWithOtherReligions = RelationshipWithOtherReligions; this.RelationshipWithOtherReligionsExplanation = RelationshipWithOtherReligionsExplanation;
        this.StudyOfDivine = StudyOfDivine; this.StudyOfDivineExplanation = StudyOfDivineExplanation;
        this.Cosmology = Cosmology; this.CosmologyExplanation = CosmologyExplanation;
        this.ExistenceIs = ExistenceIs; this.ExistenceIsExplanation = ExistenceIsExplanation;
        this.PeopleAre = PeopleAre; this.PeopleAreExplanation = PeopleAreExplanation;
        this.TheAfterlifeIs = TheAfterlifeIs; this.TheAfterLifeIsExplanation = TheAfterLifeIsExplanation;
        this.GovtType = GovtType; this.GovtTypeExplanation = GovtTypeExplanation;
        this.ToBeSavedYou = ToBeSavedYou; this.ToBeSavedYouExplanation = ToBeSavedYouExplanation;
        this.EvilIs = EvilIs; this.EvilIsExplanation = EvilIsExplanation;
        this.NatureIs = NatureIs; this.NatureIsExplanation = NatureIsExplanation;
        this.OrganizedReligionIs = OrganizedReligionIs; this.OrganizedReligionIsExplanation = OrganizedReligionIsExplanation;
        this.vices = vices; this.virtues = virtues; this.themes = themes;
        this.PoliticalRelations = PoliticalRelations; this.Demographics = Demographics;
        this.ClergyQuirk = ClergyQuirk; this.ClergyQuirkExplanation = ClergyQuirkExplanation;
    }
}


export const BeliefNames =[
'One Supreme God',
'Opposed Cosmic Forces',
'Atheist',
'Small group of gods',
'Many gods',
'Spirits exist',
'Ancestors / Ghosts',
'"God" is everything',
'"God" is a person',
'"God" is an animal/plant',
'"God" is a material thing',
'"God" is a force',
'Multiple Divine Forces',
'Nature is "God"'
]

export const BeliefExplanations =[
    'A singular entities holds total control/power in the world',
    'There are 2 concepts, such as Good and Evil, which are directly opposed and try to gain dominance in the world',
    'There is no higher power, or at the very least it is explainable using understood methods',
    'There are multiple gods, but not many, they may exemplify particular broad traits or concepts such as the 7 sins or virtues, or the elements.',
    'There is a large pantheon of gods, resulting from a large family hierarchy or each embodying a particular aspect of existence.',
    'The natural world itself has entities which embody certain things, such as a tree spirit or a conscious mountain. Alternatively all inanimate things or concepts have "spirits" which communicate, such as the spirit of a home, or the spirit of all tigers',
    'The "veil" between life and death is thin, with the souls of the dead still present but unable to behave as they once did in life. These spirits are to be appeased and venerated',
    'All things are divine by direct association with "God" in some way',
    'An almighty being is a real, physical person you can interact with today',
    'An almighty being is a real physical non-human/sapient organism you can interact with today. Or a class of organisms are considered to exemplify God in some way, and are respected as such',
    'An almighty being is simply an object or artificial intelligence, such as an almighty computer or the land itself',
    'A particular force of nature is venerated above all others, such as gravity or electromagnetism, or some other more alien power',
    'There are multiple "forces" which are considered divine, examples would be Good, Evil, Order, Chaos, Gravity, Heat, Darkness, Light, etc',
    'All which is non-sapient, or otherwise "natural" to the world is considered to be divine'
    ]

export const DivineIsNames =[
'Good',
'Dead',
'Evil',
'Neutral / Uncaring',
'Missing',
'Beyond reality / understanding',
'Alien',
'Chaotic / Random',
'Orderly / Predictable',
'Alive / Changing'
]

export const DivineIsExplanation =[
    'The Divine is considered to be fundamentally beneficial for worshippers or reality as a whole',
    'There was once Divinity, but it is now "dead" and no longer a factor or in existence',
    'The Divine is considered to be actively unhostile or antagonistic for worshippers or reality as a whole',
    'The Divine takes no interest or sides in mortal affairs, and its existence or lack thereof wouldnt matter much',
    'There was once a Divine, but it suddenly stopped existing as people expect it to. There is no evidence that it is truly "dead" or gone, or maybe it went somewhere away from the world and its worshippers',
    'The Divine exemplifies a super reality or other operates on natural laws alien and foreign to the current one',
    'The Divine is not natural to the world at all, and came from elsewhere',
    'No one can anticipate what the Divine will do next, or it can otherwise freely and regularly change',
    'You can anticipate what the Divine will do next, or cannnot be changed',
    'The Divine is "alive" much as we or another organism would be, it changes over time and may even have a sense of free will. Though this change is not truly chaotic'
    ]

export const RelationsWithOtherReligionsNames =[
'Accepted as equally valid',
'Accepted as a misunderstanding',
'Unaccepted as misguided',
'Actively hostile',
'Condemned verbally',
'Doesnt acknowledge them'
]

export const RelationsWithOtherReligionsExplanation =[
    'The religion is either very humble to other beliefs, or it wholly accepts other beliefs as being part of its own dogma somehow',
    'The religion does not deny other religions, but insist that they do not have the "full story" as it were',
    'While other religions may not be wholly wrong or evil, they are considered undesirable and fundamentally incorrect somehow',
    'The religion is militaristic and actively seeks to impede the spread of or destroy other religions',
    'The religion actively practices counter-evangelicism against other religions and actively denies or claims they are immoral, but does not take further action',
    'The religion outright doesnt believe other religions could even exist, or otherwise doesnt interact with them at all as part of their own beliefs'
]

export const StudyOfDivineNames =[
'Expressly Forbidden',
'Limited only to highest religious class',
'Limited only to religious class',
'a Controlled canon',
'a Free-For-All',
'Revelation Based',
'Science based',
'Philosophy Based'
]

export const StudyOfDivineExplanations =[
    'Whatever is currently known is only what is allowed to be known. The religion cannot be expanded upon or re-interpreted at risk of heresy. Research of the religion itself may even be forbidden.',
    'Only the holy leaders are allowed to add to the religion, conduct extensive research, or offer interpretations',
    'Only the religious class is allowed to add to the religion, conduct research, or offer interpretations',
    'There is a controlled and stable set of beliefs, stories, teachings, and writings that define the religion. The religion changes with this accepted canon',
    'Anyone can add to, research, or interpret the religion. All such additions are considered equally valid',
    'Only those who experience divine revelations can expand on the beliefs of the religion, of course the revalator must be accepted themself',
    'The divine can be studied in an orderly fashion like a science. These "discoveries" are added to the beliefs',
    'One can purpose logical arguments and "think through" an understanding of the divine, these logical arguments and proposals are added to the beliefs'
    ]

export const CosmologyNames =[
'Universe only',
'Infinite Multiverse',
'Realms for each core concept',
'Divine realm and Material Realm',
'Material Realm, Positive Realm, Negative Realm',
'Infinite Timeloop'
]

export const CosmologyExplanations =[
    'There is only the current world or reality',
    'There are an infinite number of worlds or realities',
    'There is a world, realm, or reality for a given set of core concepts',
    'There is a reality specifically for the Divine, and another for material things',
    'Example: Earth, Heaven, Hell. A world where people are now, a "good" world, and a "bad" world',
    'There is only the one world or reality, but there have been different "iterations" or "forms" that this world has taken in the past'
]

export const ExistenceIsNames =[
    'A test',
    'An illusion',
    'Pre-determined',
    'To serve the divine',
    'To destroy/harm the divine',
    'what you perceive',
    'relative',
    'Separate/Independent from the divine',
    'All encompassing',
    'meaningless',
    'what we make of it'
]

export const ExistenceIsExplanation =[
    'The purpose of mortal life is to test the individual, as a DM or creative you should decide what is being "tested"',
    'The experienced material world is inherently false or not valid for some reason',
    'There is no free will or randomness in reality itself, everything is just "along for the ride"',
    'The purpose of reality and existence is to serve to the whims of the divine',
    'Reality and life are inherently harmful to the divine for some reason',
    'Reality is subjective, and only exists when you personally experience it',
    'Reality can "change" relative to certain things, these can be literal physical locations IE "a land of fire/water/air" where physics itself changes in these regions, or certain objects which invoke changes. Of course it could simply be more philosphical, where the experience of reality changes from person to person',
    'If the Divine didnt exist, reality and life would continue on in some fashion',
    'All things are a part of reality or existence, there are no exceptions',
    'For whatever reason, the actions or events which occur in the current reality simply do not matter',
    'Reality is whatever the experiencer wants it to be, there is no purpose aside from a self given one.'
]

export const PeopleAreNames =[
    'Fundamentally evil',
'Fundamentally good',
'neutral',
'Having free will',
'Pre-determined',
'Some are divine',
'divine',
'Damned',
'Irrelevant',
'Independent of the divine',
'alien to the world'
]

export const PeopleAreExplanations =[
    '',
'',
'People are neither "good" or "bad" inherently',
'People can make choices in the world and cannot be truly predicted',
'People dont have free will and can be wholly predicted',
'Some people may have an unusually close connection to the divine, if not outright so for some reason',
'People are inherently divine for some reason',
'No matter what they do, people are doomed or inherently against the divine',
'The actions of people dont really matter for some reason',
'People can operate as normal with the divine',
'People or sapient life are completely alien to reality for some reason'
]

export const TheAfterlifeIsNames =[
'Eternal void/sleep',
'Obliteration/non-existence',
'Transcend to a higher plane',
'dependent on behavior during life',
'Reincarnation',
'dependent on "final" actions',
'being a ghost/spirit'
]

export const TheAfterlifeIsExplanations =[
'There is only darkness after you die, but it is comforting, like being asleep',
'There is absolutely nothing after death, there is nothing to experience. If you were to ressurect someone they would think it is just a moment after their death, regardless of actual time',
'Upon death you enter to a new, super reality',
'Where you go after death depends on the sum of your actions in life, think like a "fair" Heaven and Hell',
'When you die you become a new being in the same reality',
'Where you go after your death only depends on your absolute final action, think like an "unfair" Heaven and Hell',
'You do not leave the world or stop experiencing it, however you instead become a ghost or spirit, and linger on. Witnessing reality but with limitations on how you interact with it.'
]

export const ToBeSavedYouNames =[
    'Reject the divine',
'Reject reality',
'perform "Good" behavior',
'perform "Bad" behavior',
'Embrace nothingness',
'Embrace a concept wholly',
'Eliminate a concept wholly',
'Sacrifice something important',
'Do nothing, its irrelevant'
]

export const ToBeSavedYouExplanations =[
    'Acting against the divine, or otherwise not accepting it, gets your life a "good" ending',
    'Acting against reality or the world itself, or otherwise not accepting it, gets your life a "good" ending',
    'Do "good" things and you get good in return',
    'Do "bad" things and you get good things in return',
    'Reject everything, even the ability to experience at all, for a "good" ending to your life',
    'By "becoming" or exemplifying a given concept, you get good things in return. An example would be "To become fire" and behaving impulsively as part of that.',
    'In being actively hostile to a given concept, you get good things in return. An example would be to "eliminate filth" and live as a neat-freak to get into Heaven',
    'Salvation is not free, to achieve it you must sacrifice something of great value. This can be symbolic to the religion or literal for a given person',
    'Either there is no salvation at all in the first place, or no matter what a particular outcome is guaranteed, so dont worry about it'
]

export const EvilIsName =[
'Some concept',
'a "living" entity',
'inherent to reality',
'a choice',
'a mistake',
'permanent',
'can be forgiven'
]

export const EvilIsExplanations =[
'A particular idea is considered to be "Evil", such as fire, kindness, violence, etc',
'Evil is somehow sapient or otherwise acts in a real, material way in the world as a unique entity. Whether a specific creature is true "evil", or a sapient "force" in the world.',
'Evil cannot ever be defeated or removed from reality, it is inherent to the world and without it reality may crumble',
'Evil only exists at the moment a choice is made',
'Nothing is truly "evil" but merely misunderstandings or unintended situations/actions. That or evil only exists literally because of some divine accident',
'There will always be evil, it simply, is. That or once you commit an evil act, you are considered to always be evil forever',
'Evil things happen and they matter, but you can atone for evil deeds and be "good" again'
]

export const NatureIsNames =[
    'divine',
'an extension of divine',
'inclusive of people',
'inclusive of non-persons',
'inclusive of inanimate',
'evil',
'good',
'neutral'
]

export const NatureIsExplanation =[
    'It is directly divine in some capacity',
    'While not divine itself, nature is often used by the divine or was otherwise created by it',
    'People are considered to be part of "nature" or are natural',
    'Nature includes non-sapient creatures, or otherwise beings that simply do not have "personhood"',
    'Nature includes inanimate things, such as objects, rock, still water, etc',
    'Nature is inherently evil for some reason, and is considered to be harmful or unaligned with the divine or worshippers',
    'Nature is inherently good and is considered to be helpful or aligned with the divine or worshippers',
    'Nature is considered to be a neutral party, and not harmful or helpful to any particular thing'
]

export const OrganizedReligionIsNames =[
'Divine in reality',
'Persons best attempt to connect to divine',
'Founded by divine',
'living / can change',
'static / unchanging',
'Peoples interpretation of divine',
'A distraction'
]

export const OrganizedReligionIsExplanations =[
    'The organized religion is the closest thing you can get to Divinity in the world',
'To connect and understand the divine, the organized religion considers itself to be your best possible option',
'The organized religion was founded by the divine itself in some direct fashion',
'The organized religion is able to change with time and its membership, changing beliefs and dogma as needed',
'The organized religion is unable to change for some reason',
'The organized religion considers itself to simply be an interpretation of the divine',
'Somehow, for some reason, the religion disavows itself and states that organization for religious purposes is inherently missing the point. The religion is likely very disorganized or behaves "unofficially"'
]

export const ViceThemeVirtueNames =[
    'Appearance',
'Strength',
'Athleticism',
'Intelligence',
'Trade / Job Skills',
'Social Status',
'Charisma',
'Military Prowess',
'Bravery',
'Education',
'Professional Success',
'Wisdom',
'Piety',
'Obedience',
'Family',
'Creativity',
'Ethics',
'Conformity',
'Worldliness / Travel',
'Dexterity',
'Spirituality',
'Individuality',
'Promiscuity',
'Positivity',
'Humility',
'Cunning',
'Single-Mindedness',
'Leadership',
'Generosity',
'Strong emotions',
'Death',
'Mental Illness',
'Superstitious Stuff',
'Bodily Functions',
'Certain clothes',
'Hygiene',
'Death',
'Money / Wealth',
'Physical Contact',
'Magic / Tech',
'Eye Contact',
'Sex',
'Displays of Affection',
'Individuality',
'Attachments',
'Positivity',
'Negativity',
'Cunning',
'Cowardice',
'Apologizing',
'Criticizing superiors/elders',
'Breaking protocol / tradition',
'Single-Mindedness',
'Trickery / Deception',
'A specific occupation',
'Violence',
'Lack of emotions',
'Certain Numbers',
'Various natural phenomena',
'Pride',
'Hedonism',
'Greed',
'Omission of a behavior',
'Laziness',
'Solitude',
'Stubborness',
'Happiness',
'Mercy',
'Justice',
'Endurance',
'Temperance',
'Chastity',
'Patience',
'Drugs',
'Animals',
'Plants',
'A particular object',
'A particular symbol',
'Having permission',
'Being with another group of people',
'Time',
'Sacrifice',
'War',
'Rebirth',
'Life',
'Betrayal',
'Poverty',
'Amnesia',
'Platonic Love',
'Familial Love',
'Romantic Love',
'Love',
'Euphoria',
'Transcending Reality',
'Art',
'Creation',
'Beauty',
'Forgiveness',
'Remembering',
'Conflict',
'Decay',
'Growth',
'Change',
'Nature',
'A specific crime',
'Addiction',
'Mental Illness',
'Corruption',
'Domestic Abuse',
'Crime',
'Drugs',
'Gangs',
'Gambling',
'Fraud',
'Homelessness',
'Bribery',
'Infidelity',
'Cult Practices',
'Identity Theft',
'Organized Crime',
'Alcoholism',
'Discrimination',
'Sexism',
'Racism',
'Harassment',
'Pyramid Schemes',
'Tax Evasion',
'Abandonment',
'Understanding',
'Comfort'
]

export const PoliticalRelationsNames =[
'Officially oppressed, but not in practice',
'Practically oppressed, but not officially',
'Actively hostile',
'Viewed as equal to other religions',
'Dominant religion in this area'
]

export const DemographicNames =[
    'Male',
'Female',
'Universal',
'Elderly',
'Middle Aged',
'Youth',
'A specific Cultural group',
'A specific Racial group',
'Rich',
'Poor',
'Middle Income',
'Non-binary Gender',
'Specific Occupation',
'Specific Life Event'
]

export const ClergyQuirkNames =[
    'Clergy are powerful',
'Clergy are selected from a single demographic',
'Clergy exhibit a virtue most',
'Clergy exhibit a vice most',
'Clergy exhibit a theme most',
'Clergy are of a bloodline'
]

export const ClergyQuirkExplanations = [
    'As in the clergy have great power/authority in the religion or in society because of their role. Or that to be a clergy member you must literally be a powerful person, whether in wealth, strength, etc',
    'You must be of a particular gender/occupation/age/income/etc to be a member of the clergy',
    'To be a member of the clergy, you must be closely related to something the religion considers to be "good"',
    'To be a member of the clergy, you must be closely related to something the relgiion considers to be "bad',
    'To be a member of the clergy, you must be closely related to a major theme in the religion, such as a mythical event or an aspect of the divine',
    'You must be a member of a specific family to be in the clergy'
]