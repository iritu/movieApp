class PersonModel {
    constructor(FirstName, LastName, BirthDay, Image, Link) {
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.BirthDay = BirthDay;
        this.Image = Image;
        this.Link = Link;
      
        this.age = this.CalcAge(this.BirthDay);
    }

    CalcAge(BirthDay) {
        var today = new Date();
        var datestamp = Date.parse(BirthDay);
        var birthDate = new Date(datestamp);
        var age = today.getFullYear() - birthDate.getFullYear();
        return age;
    }
 
}

export default PersonModel ;
