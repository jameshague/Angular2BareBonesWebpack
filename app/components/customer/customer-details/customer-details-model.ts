
export class CustomerDetailsModel {
    public firstName: string
    public surname: string
    public houseNumber: number
    public postcode: string
    public contactNumber: string
    public alternativeContactName: string
    public alternativeContactNumber: string

    initialise(firstName: string, surname: string, houseNumber: number, postcode: string, contactNumber: string) : CustomerDetailsModel {
        this.firstName = firstName
        this.surname = surname
        this.houseNumber = houseNumber
        this.postcode = postcode
        this.contactNumber = contactNumber
        return this
    }
}