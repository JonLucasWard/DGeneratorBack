/**
 * A definition of the User class, so that our javascript can make copies of what it pulls from the database
 * each equivalent field is present here, and a constructor with some default values (needed for updates)
 */
/**
 * @export - Allows other files to use the data
 * @default - means that, if given NO other information, THIS code block will be exported
 */
export default class Test {
    public id; // Each field is just generally declared here, they are public so that all routers can access them
    public Name;
    public explanation;
    //constructor on how to create a "Test" object
    constructor(id: number = null, Name: string = null, explanation: string = null){
        //variable name being passed in, a data type which will be accepted, a starting data value (null)
        this.id = id; //this.id being the id of the test object, it is set to the "id" which is being passed in
        this.Name = Name;
        this.explanation = explanation;
    }
}