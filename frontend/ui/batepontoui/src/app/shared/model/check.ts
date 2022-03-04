import { Person } from "./person";

export interface Check{
    id: string;
    checkIn: string;
    checkOut: string;
    person: Person;
}