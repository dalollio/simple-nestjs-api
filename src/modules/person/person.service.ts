import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm"
import { InjectRepository } from "@nestjs/typeorm";
import { Person } from "./person.entity";

@Injectable()
export class PersonService {
    constructor(
        @InjectRepository(Person)
        private readonly personRepository: Repository<Person>
    ){

    }
    private readonly person: Person[] = [];


    create(person: Person) {
        try { 
            // this.personRepository.create(person);
            return true;
        } catch {
            return false;
        }
    }

    findAll() {
        return this.personRepository.find();
        // return this.person;
    }

    findOne(id){
        // return this.personRepository.findOne(id)
    }
}