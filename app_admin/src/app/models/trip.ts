export interface Trip {
    _id: string, 
    code: string, 
    name: string, 
    length: string, 
    start: Date,
    resort: string, 
    perPerson: string, 
    image: string, 
    description: string,
    max_availability: Number,
    current_availability: Number
}