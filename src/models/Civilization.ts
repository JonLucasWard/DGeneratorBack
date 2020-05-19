//literacy rate 1-100%
//power scale relative to other nations
export class Biome {
    public PopulationDistribution:string;
    public Biomes:Array<string>;
    public BiomesExplanations:Array<string>;

    constructor(PopulationDistribution:string = null, Biomes:Array<string> = [], BiomesExplanations:Array<string> = []){
        this.PopulationDistribution = PopulationDistribution;
        this.Biomes = Biomes;
        this.BiomesExplanations = BiomesExplanations;
    }
}

export class Civilization {
    public GovtType:Array<string>; // Each field is just generally declared here, they are public so that all routers can access them
    public GovtTypeExplanation:Array<string>; 
    public Biome:Biome;
    public AreaControl:string; public AreaControlExplanation:string;
    public PopulationTrait:string;
    public MajoritiesAndMinorities:string; public MnMList:Array<string>;
    public TransportationInfrastructure:string;
    public EnergyInfrastructure:string; public EnergyInfrastructureExplanation:string;
    public GovtReligiousRelations:string; public GovtReligiousRelationsExplanation:string;
    public EconomicFocus:string; public EconomicFocusExplanation:string;
    public GenderRelations:string; public GenderRelationsExplanation:string;
    public MagicOrTechRelations:string; public MagicOrTechRelationsExplanation:string;
    public ForeignRelations:string; public ForeignRelationsExplanation:string;
    public MilitarySpecialty:string; public MilitarySpecialtyExplanation:string;
    public FrequentIssue:string; public FrequentIssueExplanation:string;
    public PopularIssue:string; public MajorCulturalValue:string; public MajorCulturalTaboo:string; public MajorCulturalIssue:string;
    public PowerScale:number;

    constructor(GovtType:Array<string> = [], // Each field is just generally declared here, they are public so that all routers can access them
        GovtTypeExplanation:Array<string> = [],
        AreaControl:string = null, AreaControlExplanation:string = null,
        PopulationTrait:string = null,
        MajoritiesAndMinorities:string = null, MnMList:Array<string> = [],
        TransportationInfrastructure:string = null,
        EnergyInfrastructure:string = null, EnergyInfrastructureExplanation:string = null,
        GovtReligiousRelations:string = null, GovtReligiousRelationsExplanation:string = null,
        EconomicFocus:string = null, EconomicFocusExplanation:string = null,
        GenderRelations:string = null, GenderRelationsExplanation:string = null,
        MagicOrTechRelations:string = null, MagicOrTechRelationsExplanation:string = null,
        ForeignRelations:string = null, ForeignRelationsExplanation:string = null,
        MilitarySpecialty:string = null, MilitarySpecialtyExplanation:string = null,
        FrequentIssue:string = null, FrequentIssueExplanation:string = null,
        PopularIssue:string = null, MajorCulturalValue:string = null, MajorCulturalTaboo:string = null, MajorCulturalIssue:string = null,
        PowerScale:number = null){
        //variable name being passed in, a data type which will be accepted, a starting data value (null)
        this.GovtType = GovtType; //this.id being the id of the test object, it is set to the "id" which is being passed in
        this.GovtTypeExplanation = GovtTypeExplanation;
        this.Biome = new Biome();
        this.AreaControl = AreaControl; this.AreaControlExplanation = AreaControlExplanation;
        this.PopulationTrait = PopulationTrait;
        this.MajoritiesAndMinorities = MajoritiesAndMinorities; this.MnMList = MnMList; 
        this.TransportationInfrastructure = TransportationInfrastructure;
        this.EnergyInfrastructure = EnergyInfrastructure, this.EnergyInfrastructureExplanation = EnergyInfrastructureExplanation;
        this.GovtReligiousRelations = GovtReligiousRelations; this.GovtReligiousRelationsExplanation = GovtReligiousRelationsExplanation;
        this.EconomicFocus = EconomicFocus; this.EconomicFocusExplanation = EconomicFocusExplanation;
        this.GenderRelations = GenderRelations; this.GenderRelationsExplanation = GenderRelationsExplanation;
        this.MagicOrTechRelations= MagicOrTechRelations; this.MagicOrTechRelationsExplanation = MagicOrTechRelationsExplanation;
        this.ForeignRelations = ForeignRelations; this.ForeignRelationsExplanation = ForeignRelationsExplanation;
        this.MilitarySpecialty = MilitarySpecialty; this.MilitarySpecialtyExplanation = MilitarySpecialtyExplanation;
        this.FrequentIssue = FrequentIssue; this.FrequentIssueExplanation = FrequentIssueExplanation,
        this.PopularIssue = PopularIssue; this.MajorCulturalValue = MajorCulturalValue; this.MajorCulturalTaboo = MajorCulturalTaboo; this.MajorCulturalIssue = MajorCulturalIssue;
        this.PowerScale = PowerScale;
    }
}

export const GovtTypeNames = 
[
    'Unitary State',
    'Federation',
    'Confederation',
    'Anarchy',
    'Democracy',
    'Oligarchy',
    'Autocracy',
    'Direct democracy',
    'Liquid Democracy',
    'Representative democracy',
    'Liberal democracy',
    'Social democracy',
    'Totalitarian democracy',
    'Electocracy',
    'Demarchy',
    'Aristocracy',
    'Plutocracy',
    'Kraterocracy',
    'Stratocracy',
    'Timocracy',
    'Meritocracy',
    'Technocracy',
    'Geniocracy',
    'Noocracy',
    'Theocracy',
    'Kritarchy',
    'Particracy',
    'Ergatocracy',
    'Netocracy',
    'Civilian Dictatorship',
    'Military Dictatorship',
    'Banana republic',
    'Bankocracy',
    'Corporatocracy',
    'Nepotocracy',
    'Kakistocracy',
    'Kleptocracy',
    'Ochlocracy',
    'Anocracy',
    'Adhocracy',
    'Bureaucracy',
    'Cybersynacy',
    'Nomocracy',
    'Band society',
    'Monarchy',
    'Republic',
    'Absolute monarchy',
    'Constitutional monarchy',
    'Crowned republic',
    'Constitutional Republic',
    'Democratic republic',
    'Parliamentary republic',
    'Presidential Republic',
    'Federal republic',
    'People`s republic',
    'Islamic Republic',
    'Tribalism',
    'Monarchism',
    'Republicanism',
    'Despotism',
    'Feudalism',
    'Colonialism',
    'Capitalism',
    'Minarchism',
    'Distributism',
    'Socialism',
    'Anarchism',
    'Communism',
    'Totalitarianism',
    'Commune',
    'City-State',
    'National Government',
    'Intergovernmental Organizations',
    'World Government'
    ]

export const GovtTypeExplanations = [
    'A unitary state is a state governed as a single power in which the central government is ultimately supreme and any administrative divisions (sub-national units) exercise only the powers that the central government chooses to delegate. The majority of states in the world have a unitary system of government. Of the 193 UN member states, 165 are governed as unitary states.',
    'A federation (also known as a federal state) is a political entity characterized by a union of partially self-governing states or regions under a central (federal) government. In a federation, the self-governing status of the component states, as well as the division of power between them and the central government, is typically constitutionally entrenched and may not be altered by a unilateral decision of either party, the states or the federal political body. Alternatively, federation is a form of government in which sovereign power is formally divided between a central authority and a number of constituent regions so that each region retains some degree of control over its internal affairs.',
    'A confederation (also known as a confederacy or league) is a union of sovereign states, united for purposes of common action often in relation to other states. Usually created by a treaty, confederations of states tend to be established for dealing with critical issues, such as defense, foreign relations, internal trade or currency, with the general government being required to provide support for all its members. Confederalism represents a main form of inter-governmentalism, this being defined as ‘any form of interaction between states which takes place on the basis of sovereign independence or government.',
    'A society without a publicly enforced government or political authority. Sometimes said to be non-governance; it is a structure which strives for non-hierarchical, voluntary associations among agents. Anarchy is a situation where there is no state. When used in this sense, anarchy may[3] or may not[4]. This can be a natural, temporary result of civil war in a country, when an established state has been destroyed and the region is in a transitional period without definitive leadership. Alternatively, it has been presented as a viable long term choice by individuals known as anarchists who oppose the state and other forms of coercive hierarchies. These individuals typically think people should organize in non-hierarchical, voluntary associations where people voluntarily help each other. There are a variety of forms of anarchy that attempt to avoid the use of coercion, violence, force and authority, while still producing a productive and desirable society.',
    'Democracy, meaning "rule of the people", is a system of government in which the citizens exercise power directly or elect representatives from among themselves to form a governing body, such as a parliament. Democracy is sometimes referred to as "rule of the majority". Democracy is a system of processing conflicts in which outcomes depend on what participants do, but no single force controls what occurs and its outcomes.',
    'Oligarchy, meaning "rule of the few", is a form of power structure in which power rests with a small number of people. These people might be distinguished by nobility, wealth, family ties, education or corporate, religious or military control. Such states are often controlled by families who typically pass their influence from one generation to the next, but inheritance is not a necessary condition for the application of this term.',
    'Autocracy is a system of government in which supreme power (social and political) is concentrated in the hands of one person or polity, whose decisions are subject to neither external legal restraints nor regularized mechanisms of popular control (except perhaps for the implicit threat of a coup d`etat or mass insurrection). Absolute monarchy (such as Saudi Arabia, the United Arab Emirates, Oman, Brunei and eSwatini) and dictatorships (such as North Korea) are the main modern day forms of autocracy.',
    'Variant of democracy; government in which the people represent themselves and vote directly for new laws and public policy.',
    'Variant of democracy; government in which the people represent themselves or choose to temporarily delegate their vote to another voter to vote for new laws and public policy.',
    'Variant of democracy; wherein the people or citizens of a country elect representatives to create and implement public policy in place of active participation by the people.',
    'Variant of democracy; a form of government in which representative democracy operates under the principles of liberalism. It is characterised by fair, free, and competitive elections between multiple distinct political parties, a separation of powers into different branches of government, the rule of law in everyday life as part of an open society, and the protection of human rights and civil liberties for all persons. To define the system in practice, liberal democracies often draw upon a constitution, either formally written or uncodified, to delineate the powers of government and enshrine the social contract. After a period of sustained expansion throughout the 20th century, liberal democracy became the predominant political system in the world. A liberal democracy may take various constitutional forms: it may be a republic, such as France, Germany, India, Ireland, Italy, Taiwan, or the United States; or a constitutional monarchy, such as Japan, Spain, or the United Kingdom. It may have a presidential system (Colombia, Brazil, Mexico, or the United States), a semi-presidential system (France, Portugal, or Taiwan), or a parliamentary system (Australia, Canada, Germany, Ireland, India, Italy, New Zealand, or the United Kingdom).',
    'Variant of democracy; social democracy rejects the "either/or" phobiocratic/polarization interpretation of capitalism versus socialism. It claims that fostering a progressive evolution of capitalism will gradually result in the evolution of capitalist economy into socialist economy. Social democracy argues that all citizens should be legally entitled to certain social rights. These are made up of universal access to public services such as: education, health care, workers` compensation, public transportation, and other services including child care and care for the elderly. Social democracy is connected with the trade union labour movement and supports collective bargaining rights for workers. Contemporary social democracy advocates freedom from discrimination based on differences of: ability/disability, age, ethnicity, sex, gender, language, race, religion, sexual orientation, and social class.',
    'Variant of democracy; refers to a system of government in which lawfully elected representatives maintain the integrity of a nation state whose citizens, while granted the right to vote, have little or no participation in the decision-making process of the government.',
    'Variant of democracy; where citizens are able to vote for their government but cannot participate directly in governmental decision making and where the government does not share any power.',
    'Variant of democracy; government in which the state is governed by randomly selected decision makers who have been selected by sortition (lot) from a broadly inclusive pool of eligible citizens. These groups, More generally, random selection of decision makers from a larger group is known as sortition (from the Latin base for lottery). The Athenian democracy made much use of sortition, with nearly all government offices filled by lottery (of full citizens) rather than by election. Candidates were almost always male, Greek, educated citizens holding a minimum of wealth and status.  Sometimes termed "policy juries", "citizens` juries", or "consensus conferences", deliberately make decisions about public policies in much the same way that juries decide criminal cases. Demarchy, in theory, could overcome some of the functional problems of conventional representative democracy, which is widely subject to manipulation by special interests and a division between professional policymakers (politicians and lobbyists) vs. a largely passive, uninvolved and often uninformed electorate. According to Australian philosopher John Burnheim, random selection of policymakers would make it easier for everyday citizens to meaningfully participate, and harder for special interests to corrupt the process.',
    'Rule by the nobility; a system of governance where political power is in the hands of a small class of privileged individuals who claim a higher birth than the rest of society.',
    'Rule by the wealthy; a system wherein governance is indebted to, dependent upon or heavily influenced by the desires of the rich. Plutocratic influence can alter any form of government. For instance, in a republic, if a significant number of elected representative positions are dependent upon financial support from wealthy sources, it is a plutocratic republic.',
    'Rule by the strong; a system of governance where those who are strong enough to seize power through physical force, social maneuvering or political cunning.',
    'Rule by military service; a system of governance composed of military government in which the state and the military are traditionally or constitutionally the same entity. Citizens with mandatory or voluntary active military service or who have been honorably discharged have the right to govern. (Therefore, stratocracy is not to be confused with "military junta" or "military dictatorship".) The Spartan city-state is a historical example; its social system and constitution were completely focused on military training and excellence. Stratocratic ideology often attaches to the honor-oriented timocracy.',
    'Rule by the honourable; a system of governance ruled by honorable citizens and property owners. Socrates defines a timocracy as a government ruled by people who love honour and are selected according to the degree of honour they hold in society. This form of timocracy is very similar to meritocracy, in the sense that individuals of outstanding character or faculty are placed in the seat of power.',
    'Rule by the meritorious; a system of governance where groups are selected on the basis of people`s ability, knowledge in a given area, and contributions to society.',
    'Rule by the educated or technical experts; a system of governance where people who are skilled or proficient govern in their respective areas of expertise in technology would be in control of all decision making. Doctors, engineers, scientists, professionals and technologists who have knowledge, expertise, or skills would compose the governing body instead of politicians, businessmen and economists.[9] In a technocracy, decision makers would be selected based upon how knowledgeable and skillful they are in their field.',
    'Rule by the intelligent; a system of governance where creativity, innovation, intelligence and wisdom are required for those who wish to govern. Comparable to noocracy.',
    'Rule by the wise; a system of governance in which decision making is in the hands of philosophers. (advocated by Plato)',
    'Rule by a religious elite; a system of governance composed of religious institutions in which the state and the church are traditionally or constitutionally the same entity. The Vatican`s (see Pope), Iran`s (see Supreme Leader), Tibetan government`s (see Dalai Lama), Caliphates and other Islamic states are historically considered theocracies.',
    'Rule by various judges, the kritarchs; a system of governance composed of law enforcement institutions in which the state and the legal systems are traditionally or constitutionally the same entity. The kritarchs, magistrates and other adjudicators have the legal power to legislate and administer the enforcement of government laws in addition to the interposition of laws and the resolution of disputes. (Not to be confused with "judiciary" or "judicial system".) Somalia, ruled by judges with the tradition of xeer, as well as the Islamic Courts Union, is a historical example.',
    'Rule by a dominant political party (or parties).',
    'Rule by the proletariat, the workers, or the working class. Examples of ergatocracy include communist revolutionaries and rebels which control most of society and create an alternative economy for people and workers. See Dictatorship of the proletariat.',
    'Rule by social connections; a term invented by the editorial board of the American technology magazine Wired in the early 1990s. A portmanteau of Internet and aristocracy, netocracy refers to a perceived global upper-class that bases its power on a technological advantage and networking skills, in comparison to what is portrayed as a bourgeoisie of a gradually diminishing importance. The netocracy concept has been compared with Richard Florida`s concept of the creative class. Bard and Söderqvist have also defined an under-class in opposition to the netocracy, which they refer to as the consumtariat.',
    'A dictatorship where power resides in the hands of one single person or polity. That person may be, for example, an absolute monarch or a dictator, but can also be an elected president. The Roman Republic made dictators to lead during times of war; but the Roman dictators only held power for a small time. In modern times, an autocrat`s rule is one that not stopped by any rules of law, constitutions, or other social and political institutions. After World War II, many governments in Latin America, Asia, and Africa were ruled by autocratic governments. Examples of dictators include: Adolf Hitler, Josef Stalin, Mao Zedong, Idi Amin, Muammar Gaddafi, and Gamal Abdul Nasser.',
    'A dictatorship primarily enforced by the military. Military dictators are different from civilian dictators for a number of reasons: their motivations for seizing power, the institutions through which they organize their rule, and the ways in which they leave power. Often viewing itself as saving the nation from the corrupt or myopic civilian politicians, a military dictatorship justifies its position as “neutral” arbiters on the basis of their membership within the armed forces. For example, many juntas adopt titles, such as “National Redemption Council", “Committee of National Restoration", or “National Liberation Committee". Military leaders often rule as a junta, selecting one of them as the head.',
    'A politically unstable and kleptocratic government that economically depends upon the exports of a limited resource (fruits, minerals), and usually features a society composed of stratified social classes, such as a great, impoverished ergatocracy and a ruling plutocracy, composed of the aristocracy of business, politics, and the military. In political science, the term banana republic denotes a country dependent upon limited primary-sector productions, which is ruled by a plutocracy who exploit the national economy by means of a politico-economic oligarchy. In American literature, the term banana republic originally denoted the fictional Republic of Anchuria, a servile dictatorship that abetted, or supported for kickbacks, the exploitation of large-scale plantation agriculture, especially banana cultivation.[13] In U.S. politics, the term banana republic is a pejorative political descriptor coined by the American writer O. Henry in Cabbages and Kings (1904), a book of thematically related short stories derived from his 1896–1897 residence in Honduras, where he was hiding from U.S. law for bank embezzlement.',
    'Rule by banks; a system of governance with excessive power or influence of banks and other financial authorities on public policy-making. It can also refer to a form of government where financial institutions rule society.',
    'Rule by corporations; a system of governance where an economic and political system is controlled by corporations or corporate interests. Its use is generally pejorative. Examples include company rule in India and business voters for the City of London Corporation.',
    'Rule by nephews; favouritism granted to relatives regardless of merit; a system of governance in which importance is given to the relatives of those already in power, like a nephew (where the word comes from). In such governments even if the relatives aren`t qualified they are given positions of authority just because they know someone who already has authority. Pope Alexander VI (Borgia) was accused of this.',
    'Rule by the stupid; a system of governance where the worst or least-qualified citizens govern or dictate policies. Due to human nature being inherently flawed, it has been suggested that every government which has ever existed has been a prime example of kakistocracy.',
    'Rule by thieves; a system of governance where its officials and the ruling class in general pursue personal wealth and political power at the expense of the wider population. In strict terms kleptocracy is not a form of government but a characteristic of a government engaged in such behavior. Examples include Mexico as being considered a "narcokleptocracy", (narco-state) since its democratic government is perceived to be corrupted by those who profit from trade in illegal drugs smuggled into the United States.',
    'Rule by the crowd; a system of governance where mob rule is government by mob or a mass of people, or the intimidation of legitimate authorities. As a pejorative for majoritarianism, it is akin to the Latin phrase mobile vulgus meaning "the fickle crowd", from which the English term "mob" was originally derived in the 1680s. Ochlocratic governments are often a democracy spoiled by demagoguery, "tyranny of the majority" and the rule of passion over reason; such governments can be as oppressive as autocratic tyrants. Ochlocracy is synonymous in meaning and usage to the modern, informal term "mobocracy"',
    'A regime type where power is not vested in public institutions (as in a normal democracy) but spread amongst elite groups who are constantly competing with each other for power. Examples of anocracies in Africa include the warlords of Somalia and the shared governments in Kenya and Zimbabwe. Anocracies are situated midway between an autocracy and a democracy. The Polity IV dataset recognised anocracy as a category. In that dataset, anocracies are exactly in the middle between autocracies and democracies. Often the word is defined more broadly. For example, a 2010 International Alert publication defined anocracies as "countries that are neither autocratic nor democratic, most of which are making the risky transition between autocracy and democracy". Alert noted that the number of anocracies had increased substantially since the end of the Cold War. Anocracy is not surprisingly the least resilient political system to short-term shocks: it creates the promise but not yet the actuality of an inclusive and effective political economy, and threatens members of the established elite; and is therefore very vulnerable to disruption and armed violence.',
    'Rule by a government based on relatively disorganised principles and institutions as compared to a bureaucracy, its exact opposite.',
    'Rule by a system of governance with many bureaus, administrators, and petty officials',
    'Ruled by a data fed group of secluded individuals that regulates aspects of public and private life using data feeds and technology having no interactivity with the citizens but using "facts only" to decide direction.',
    'Rule by a government under the sovereignty of rational laws and civic right as opposed to one under theocratic systems of government. In a nomocracy, ultimate and final authority (sovereignty) exists in the law.',
    'Rule by a government based on small (usually family) unit with a semi-informal hierarchy, with strongest (either physical strength or strength of character) as leader. Very much like a pack seen in other animals, such as wolves.',
    'A monarchy is a form of government in which a group, generally a family representing a dynasty, embodies the country`s national identity and its head, the monarch, exercises the role of sovereignty. The actual power of the monarch may vary from purely symbolic (crowned republic), to partial and restricted (constitutional monarchy), to completely autocratic (absolute monarchy). Traditionally the monarch`s post is inherited and lasts until death or abdication. In contrast, elective monarchies require the monarch to be elected. Both types have further variations as there are widely divergent structures and traditions defining monarchy. For example, in some elected monarchies only pedigrees are taken into account for eligibility of the next ruler, whereas many hereditary monarchies impose requirements regarding the religion, age, gender, mental capacity, etc. Occasionally this might create a situation of rival claimants whose legitimacy is subject to effective election. There have been cases where the term of a monarch`s reign is either fixed in years or continues until certain goals are achieved: an invasion being repulsed, for instance.',
    'A republic (Latin: res publica) is a form of government in which the country is considered a "public matter", not the private concern or property of the rulers. The primary positions of power within a republic are not inherited, but are attained through elections expressing the consent of the governed. Such leadership positions are therefore expected to fairly represent the citizen body. It is a form of government under which the head of state is not a monarch. In American English, the definition of a republic can also refer specifically to a government in which elected individuals represent the citizen body, known elsewhere as a representative democracy (a democratic republic) and exercise power according to the rule of law (a constitutional republic).',
    'A traditional and historical system where the monarch exercises ultimate governing authority as head of state and head of government. Many nations of Europe during the Middle Ages were absolute monarchies. Modern examples include mainly Islamic countries such as Saudi Arabia, UAE, Oman, Brunei and one African country, eSwatini.',
    'Also called parliamentary monarchy, the monarch`s powers are limited by law or by a formal constitution, usually assigning them to those of the head of state. Many modern developed countries, including the United Kingdom, Norway, Netherlands, Australia, Canada, and Japan, are constitutional monarchy systems.',
    'A form of government where the monarch (and family) is an official ceremonial entity with no political power. The royal family and the monarch are intended to represent the country and may perform speeches or attend an important ceremonial events as a symbolical guide to the people, but hold no actual power in decision-making, appointments, et cetera.',
    'Republics where there is rule by a government whose powers are limited by law or a formal constitution, and chosen by a vote amongst at least some sections of the populace (Ancient Sparta was in its own terms a republic, though most inhabitants were disenfranchised). Republics that exclude sections of the populace from participation will typically claim to represent all citizens (by defining people without the vote as "non-citizens"). Examples include the United States, South Africa, India, etc.',
    'Republics where the running of the country is considered a "public matter" (Latin: res publica), not a private concern or property of rulers, and where offices of states are subsequently, directly or indirectly, elected or appointed – rather than inherited – where all eligible citizens have an equal say in the local and national decisions that affect their lives.',
    'Republics, like Germany, India or Singapore, with an elected head of state, but where the head of state and head of government are kept separate with the head of government retaining most executive powers, or a head of state akin to a head of government, elected by a parliament.',
    'Republics with an elected head of state, where the head of state is also the head of the government. Examples include United States, Mexico, Brazil, and Indonesia.',
    'Republics that are a federal union of states or provinces Examples include United States, Argentina, Austria, Brazil, Germany, India, Mexico, Russia, and Switzerland.',
    'Republics that include countries like China and Vietnam that are de jure governed for and by the people, but with no direct elections. The term People`s Republic is used to differentiate themselves from the earlier republic of their countries before the people`s revolution, like the Republic of China.',
    'Republics governed in accordance with Islamic law. Examples include Afghanistan, Iran, Mauritania, and Pakistan.',
    'A system based on a small complex society of varying degrees of centralisation that is led by an individual known as a chief.',
    'A system in which the government is headed by an agreed upon head of the nobility who is known as the monarch, usually in the form of a king or emperor (but also less commonly a queen or empress). In most monarchical systems the position of monarch is one inherited from a previous ruler by bloodline or marriage, but in other cases it may be a position elected by the nobility themselves, as was the case in the ancient Roman Kingdom and the medieval Holy Roman Empire.',
    'A system in which the laws and governmental policies of the state are considered a "public matter" and decided by the citizens of the society, whoever they may be. Most modern nation-states are examples of republics, but other examples include those of ancient Rome and Athens.',
    'A system in which the laws and resources of a nation are controlled by one individual, usually a monarch or dictator, who holds absolute political power. Examples include the pharaohs of Ancient Egypt and the Roman emperors. (Often used as a slur by republicans to refer to all monarchical systems, monarchists conversely use the term to refer to systems in which monarchs have overstepped their boundaries, or to refer to some of the more totalitarian republican systems)',
    'A system of land ownership and duties common to medieval Europe. Under feudalism, all the land in a kingdom belonged to the king. However, the king would give some of the land to the lords or nobles who fought for him. These presents of land were called manors. Then the nobles gave some of their land to vassals. The vassals then had to do duties for the nobles. The lands of vassals were called fiefs. A similar system is the Iqta, used by medieval Islamic societies of the middle east and north Africa. This functioned much like the feudal system but generally had titles that weren`t granted to a family dynasty but to individuals at the behest of the sultan and generally only required a tax from the lower classes, instead of military service and/or manual labour like in the feudal system.',
    'A system in which a native group (or their lands and resources) is subjugated by an external political power for their own economic and/or political benefit.',
    'A system in which the means of production (machines, tools, factories, etc.) are owned by private individuals, workers then negotiate with those individuals to use those means of production in exchange for a portion of what they produce, usually in the form of capital (money). The owners of the means of production are entitled to whatever portion of the products of the workers` labor that is agreed upon by the two parties. The capitalist system is usually accompanied by a Welfare state which plays a key role in the protection and promotion of the economic and social well-being of its citizens. It is based on the principles of equality of opportunity, equitable distribution of wealth, and public responsibility for those unable to avail themselves of the minimal provisions for a good life.',
    'A variant of capitalism which advocates for the State to exist solely to provide a very small number of services. A popular model of the State proposed by minarchists is known as the night-watchman state, in which the only governmental functions are to protect citizens from aggression, theft, breach of contract, and fraud as defined by property laws, limiting it to three institutions: the military, the police, and courts.',
    'A variant of capitalism which views widespread property ownership as fundamental right; the means of production are spread as widely as possible rather than being centralized under the control of the state (as in state socialism), or a few individuals/corporations (as in what proponents of distributism call "crony capitalism") Distributism fundamentally opposes socialism and capitalism, which distributists view as equally flawed and exploitative. In contrast, distributism seeks to subordinate economic activity to human life as a whole, to our spiritual life, our intellectual life, our family life".',
    'A system in which workers, democratically and/or socially own the means of production. The economic framework may be decentralized and self-managed in autonomous economic units, as in libertarian systems, or centrally planned, as in authoritarian systems. Public services such as healthcare and education would be commonly, collectively, and/or state owned.',
    'A system that advocates self-governed societies based on voluntary institutions. These are often described as stateless societies, although several authors have defined them more specifically as institutions based on non-hierarchical or free associations. Anarchism holds the state to be undesirable, unnecessary, and/or harmful.',
    'A socialist system in which the means of production are commonly owned (either by the people directly, through the commune, or by a communist state or society), and production is undertaken for use, rather than for profit. Communist society is thus, in theory, stateless, classless, moneyless, and democratic — it is usually regarded as the "final form" of a socialist or anarchist society.',
    'A system in which the land and resources of a nation are controlled by a centralised authoritarian state that holds absolute political power, usually under a dictatorship or single political party. Examples include the Soviet Union and Nazi Germany.',
    'From the Medieval Latin communia. An intentional community of people living together, sharing common interests, often having common values and beliefs, as well as shared property, possessions, resources, and, in some communes, work, income or assets.',
    'A sovereign state, also described as a type of small independent country, that usually consists of a single city and its dependent territories. Historically, this included cities such as Rome, Athens, Carthage, and the Italian city-states during the Renaissance. Today only a handful of sovereign city-states exist, with some disagreement as to which are city-states. A great deal of consensus exists that the term properly applies currently to Singapore, Monaco, and Vatican City. City states are also sometimes called micro-states which however also includes other configurations of very small countries.',
    'The government of a nation-state and is a characteristic of a unitary state. This is the same thing as a federal government which may have distinct powers at various levels authorized or delegated to it by its member states, though the adjective "central" is sometimes used to describe it. The structure of central governments varies. Many countries have created autonomous regions by delegating powers from the central government to governments at a sub national level, such as a regional, state or local level. Based on a broad definition of a basic political system, there are two or more levels of government that exist within an established territory and govern through common institutions with overlapping or shared powers as prescribed by a constitution or other law.',
    'Also known as international governmental organizations (IGOs): the type of organization most closely associated with the term "international organization", these are organizations that are made up primarily of sovereign states (referred to as member states). Notable examples include the United Nations (UN), Organization for Security and Co-operation in Europe (OSCE), Council of Europe (COE), International Labour Organization (ILO) and International Police Organization (INTERPOL). The UN has used the term "intergovernmental organization" instead of "international organization" for clarity.',
    'The notion of a common political authority for all of humanity, yielding a global government and a single state that exercises authority over the entire Earth. Such a government could come into existence either through violent and compulsory world domination or through peaceful and voluntary supranational union.'
]

export const BiomeNames = [
'Wet Coastal Ecosystems',
'Dry Coastal Ecosystems',
'Polar and Alpine Tundra',
'Mires, Swamp, Bog, Fen, and Moor',
'Temperate Deserts and Semi-Deserts',
'Coniferous Forests',
'Temperate Deciduous Forests',
'Natural Grasslands',
'Heathlands and Related Shrublands',
'Mediterranean-Type Shrublands',
'Hot Deserts and Arid Shrublands',
'Tropical Savannas',
'Tropical Rain Forest Ecosystems',
'Wetland Forests',
'Ecosystems of Disturbed Ground',
'Managed Grasslands',
'Field Crop Ecosystems',
'Tree Crop Ecosystems',
'Cave System',
'Lake and Reservoir Ecosystem',
'River and Stream Ecosystems',
'Green House Ecosystem',
'Intertidal and Littoral Ecosystems',
'Coral Reefs',
'Estuaries and Enclosed Seas',
'Ecosystems of the Continental Shelves',
'Ecosystems of the Deep Ocean',
'Managed Aquatic Ecosystems',
'Bioindustrial Ecosystems'
]

export const BiomeExplanations = [
'Where land meets a large body of water, and precipitation is plentiful in the area such as a vibrant jungle at the edge of sea.',
'Where land meets a large body of water, but the area does not receive notable precipitation such as an Oasis or desert Sea.',
'An area of extreme cold for most of the year',
'A typically moist area with a layer of life that is not completely decomposed, this layer of "half-death" being the key feature.',
'Deserts which experience some notable precipitation through the year, but not enough to support a full forest-like ecosystem.',
'A forest in a cold area, primarily with "evergreen" trees that hold their leaves year-round.',
'A forest in a region that experiences multiple seasons (presumably winter to summer) with flora and fauna that adapt accordingly.',
'Rolling plains of grass, typically the area does not become a full forest-like ecosystem due to a lack of water, soil nutrition or depth, or some other event which limits growth',
'Hot and dry regions which often receive just enough precipitation to allow the growth of bush-like plants, but not enough for a full forest-like ecosystem. Fires may occur in this area which also limit growth',
'Mild-wet winters and hot-dry summers define this biome, allowing for a dense variety of life, but limiting growth. Fire may be an agent of change in this environment',
'An area that is extremely dry for most of the year, resulting in loose or sandy soil',
'A warm region with a distinct dry and wet season, each lasting about half a year, life here has adapted to such dramatic seasons',
'A forest with a hot and wet climate, life is abundant and diverse in these "ideal" conditions',
'Forests where the floor layer is one of water',
'An ecosystem where an extreme or pronounced event happens regularly, yet not temporarily, and not even to the whole system at a given time. Things such as a yearly forest fire, earthquake, or tidal wave, and how life adapts to these regular events, defines this system',
'A "man-made" grassland that is actively tended to so as to not grow out into a full forest, but not become infertile either',
'A farm set up in such a way as to be totally to the benefit of non-tree crop plants, such as rows of corn or wheat',
'A farm set up in such a way as to be totally to the benefit of tree crop plants, such as rows of apple or orange trees',
'Any "underground" or mountain interior region of caves. These can vary greatly depending on where you are exactly and what you`re inside of. What materials make up the walls, what specifically lives within, precipitation from outside seeping in, etc.',
'mostly Land-locked bodies of fresh water',
'Areas defined by a notable river or a system of various streams and how they cut through or shape the environment depending on their flow',
'A non-natural ecosystem occuring in an enclosed space, managed or set up by an intelligent source so that specific interactions or patterns may emerge among particular lifeforms',
'An area where sea tides cause great differences and the local life has adapted accordingly to when the space is filled with water to when it is not',
'A region where a particular life-form, often corals, changes the topography of the region on its own and allows for other life to find a habitat within it',
'Areas of land-locked salt water',
'An ocean based ecosystem that is still close to the surface, before the land drops off and leads into the deep sea. Think fishes or other animals that could swim up to a beach',
'The deep ocean, although this can vary depending on the amount of pressure and depth, amount of light received, and if there are other unusual features such as a geothermal vent nearby',
'A non-natural aquatic ecosystem, such as a pond that is designed and tended to by humans',
'These ecosystems revolve around domesticated animals, whether they be environments designed explicitly for the benefit of that animal, or the result of "farming" practices relative to that animal on the surrounding ecosystem'
]

export const AreaControlNames = [
    'City-State', 
    'Small State',
    'Medium State', 
    'Large State', 
    'Massive State',
    'Continental Empire',
    'Colonial Empire',
    'Multi-Continental Empire',
    'Hegemony',
    'World Government'
]

export const AreaControlExplanations = [
    '<1% of area controlled',
    '<5% of area controlled',
    '<10% of area controlled',
    '<15% of area controlled',
    '<20% of area controlled',
    '<25% of area controlled',
    '15%-35% of area controlled',
    '25%-40% of area controlled',
    '50% of area controlled',
    '50%+ of area controlled'
]

export const PopulationDistributionNames = [
'Evenly distributed. Following biome is associated with the civilization',
'% lives in a given biome, the rest is distributed evenly in other biome types',
'% lives in major cities, rest is distributed across the area evenly. Following biome is associated with the civilization',
'% in each given biome'
]

export const MajoritiesandMinoritiesNames = [
'One minority group controls most parts of society',
'The majority group controls most major parts of society',
'All groups wield roughly equal power',
'"Power" is distributed across different groups as a %.'
]

export const PopulationTraitNames = [
'Anxious',
'Happy / Jubilant',
'Apathetic',
'Angry / Rebellious',
'Sad',
'Angry / Hatred / Warmongering (in general, or roll to see who they hate)',
'Prideful',
'Envious of another nation (roll to see which)',
'Salty towards another nation (roll to see which)',
'Insane',
'Paranoid',
'Distrustful of X (roll a population group, or another nation)',
'Docile / Content',
'Naive / Ignorant',
'Peaceful',
'Really passive aggressive',
'Scholarly',
'Greedy / Entitled'
]

export const TransportationInfrastructureNames = [
'Roads (Horseback)',
'Roads (Walking)',
'Sailing',
'Rivers / Canals',
'Roads (Vehicle)',
'Trains and Rail',
'Air Travel',
'Teleportation'
]

export const EnergyInfrastructureNames = [
'Bio Fuels',
'Gas',
'Geothermal',
'Magic',
'Oil/Coal', 
'Necromancy',
'Hydro-Electric',
'Wind',
'Solar',
'Divine Source',
'Nuclear',
'Slaves'
]

export const EnergyInfrastructureExplanations =[
    'Organic matter (animals, plants, etc) is burned for energy',
    'Deposits of unique air (aka, gas) is burned or otherwise used for energy',
    'The heat or energy of the world itself is harnessed for energy',
    'It`s magic, I don`t gotta` explain a thing!',
    'The compressed remains of dead life are burned for energy',
    'People use skeletons and corpses for their energy needs, think undead slaves',
    'Water itself is used to generate energy',
    'The wind or air itself is used to generate energy',
    'The light from the sun is used to generate energy',
    'The energy is given by or harness from a God or Spirit, it may be fundamentally other-wordly',
    'Atomic energy is used, the very foundations of the universe itself is harnessed',
    'People run all equipment or "power", think slaves or the "car" from Flintstones'
]

export const GovtReligiousRelationsNames =[
'State Religion', 
'State Supported Religion', 
'Dominant Religion',
'Anti-Religion',
'Free Religion'
]

export const GovtReligiousRelationsExplanations =[
    'others religions are legally forbidden',
    'others religions are legally allowed, but not supported',
    'There is a preferred religion culturally, but it is legally not preferred',
    'religions are all illegal',
    'All religions are legally allowed if not protected'
]

export const EconomicFocusNames =[
'Farming / Food Production',
'Sea-Faring and Fishing',
'Precious Metals',
'Trading',
'Service Economy',
'Research / Innovation / Tech Economy',
'Raiding / Tribute Economy',
'Industrial Production',
'“Criminal” goods',
'Energy Exporter',
'Tourism / Entertainment'
]

export const EconomicFocusExplanations =[
    '',
    '',
    '',
    '“Middle-man” nation, it is able to efficiently port goods from one location to another', 
    'The nation does not "create" things, but performs a valued service well', 
    '', 
    'The nation conquers others and simply takes or taxes their resources',
    'The nation can produce particular artificial goods with extreme efficiency', 
    'Drugs, slaves, weapons, etc. Stuff that is probably illegal in other nations', 
    'The nation can create energy of some kind and transport it for use later, or in another location',
    'People from other nations like to visit and entertain themselves here'
]

export const GenderRelationsNames =[
'Patriarchal',
'Matriarchal',
'Equal',
'Inverted Norms',
'Alien'
]

export const GenderRelationsExplanation =[
    'Males hold higher status in society',
    'Females hold higher status in society',
    'There is little to no power inbalance between genders',
    'The genders perform opposite roles than what is expected',
    'Concepts of gender and their roles are considered utterly alien'
]

export const MagicOrTechRelationsNames =[
'Open Hostility',
'Illegal, but socially accepted',
'Legal, but socially unpopular',
'Legal',
'Legal, and encouraged',
]

export const MagicOrTechRelationsExplanations =[
    'The government has made advancements illegal and actively moves to stop them from happening',
    '',
    '',
    '',
    ''
]

export const ForeignRelationsNames =[
'Hostile and Aggressive',
'Verbally aggressive (all talk)',
'Economic Interests only',
'Social Interests only',
'Peaceful',
'Active “leader” internationally',
'Isolationist'
]

export const ForeignRelationsExplanations =[
    'The government regularly motions aggressively towards other nations, frequently making threats and acting on them',
    'The government regularly threatens other nations, but does not actually take any actions',
    'The nation only interacts with others for economic gain',
    'The nation only interacts with others for the advancement of a particular social or cultural cause',
    'The nation is generally helpful to other societies',
    'The nation is respected by others, and leads multi-national efforts',
    'The nation regularly avoids interactions with others'
]

export const MilitarySpecialtyNames =[
'Highly Experienced Troops',
'Technologically Advanced',
'Population Advantage',
'Political Advantage',
'Chaotic / Guerrilla Experts',
'Information Advantage',
'Economic Advantage',
'Superior Navy',
'Superior Army',
'Superior Air-Force / Other Terrain',
'Pacifism',
'Nation has defensive geography',
'Espionage and Disinformation Superiority'
]

export const MilitarySpecialtyExplanations =[
    '',
    '',
    '',
    'The nation is bolstered by contracts and treaties with other entities who will come to defend it',
    'The nation is completely unpredictable in warfare',
    'The nation knows weaknesses of other combatants by some means',
    'The nation can merely outlast an opponent with a surplus of supplies',
    '',
    '',
    '',
    'The nation relies on mercenaries or allies to fight for it',
    'Non-native forces are at disadvantage if they try to invade',
    'The nation can easily wage proxy wars, sow disinformation, and cause chaos in an enemy nation'
]

export const FrequentIssueNames =[
'Barbaric Neighbors/Raids',
'Hurricanes',
'Wild Fires',
'Droughts',
'Freezes',
'Earthquakes',
'Hostile Wildlife',
'Flooding',
'Volcanoes',
'Pollution',
'Climate Change',
'Supernatural / Technologic Catastrophes',
'Serial Killers / Frequent Madness',
'Criminal Underworld',
'Decaying/Unstable Infrastructure'
]

export const FrequentIssueExplanations =[
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    'Hysteria regularly grips the population for some reason',
    '',
    ''
]

export const PopularIssueNames =[
'Class Divisions',
'Corruption in the Government',
'Foreign Relations',
'Gender Divisions',
'Cultural Divisions',
'Age Discrimination',
'Military',
'International Ethics',
'Religion',
'Expansion / Exploration',
'Technology / Magic',
'Environment',
'Individual Rights',
'Economy',
'Infrastructure',
'Healthcare',
'Terrorism',
'Laws / Legal System'
]

export const MajorCulturalValueNames =[
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
'Generosity'
]

export const MajorTabooNames =[
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
'Hedonism'
]

export const MajorSocialProblemNames =[
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
'Abandonment'
]