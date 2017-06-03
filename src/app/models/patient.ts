export class Patient {
    firstname: string;
    middlename: string;
    lastname: string;
    sexe: string;
    age: string;
    dateOfBirth: string;
    placeOfBirth: string;
    email: string;
    adresse: string;
    phone1: string;
    phone2: string;
    country: string;
    bloodtype: string;

    constructor(patientData: any){
        this.firstname = patientData.firstname;
        this.middlename = patientData.middlename;
        this.lastname = patientData.lastname;
        this.sexe = patientData.sexe;
        this.age = patientData.age;
        this.dateOfBirth = patientData.dateOfBirth;
        this.placeOfBirth = patientData.placeOfBirth;
        this.email = patientData.email;
        this.adresse = patientData.adresse;
        this.phone1 = patientData.phone1;
        this.phone2 = patientData.phone2;
        this.country = patientData.country;
        this.bloodtype = patientData.bloodtype;

    }
}
