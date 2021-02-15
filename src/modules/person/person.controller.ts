import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from "@nestjs/common";
import { get } from "http";
import { Person } from "./person.entity";
import { PersonService } from "./person.service";

@Controller('person')
export class PersonController {

    constructor(
        private personService: PersonService
        ){

    }

    @Get()
    async findAll(@Query() query) {
        // return this.personService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id:string ): Promise<any> {
        return this.personService.findOne(id);
        return `Return entity of id ${id}`
    }

    @Post()
    async create(@Body() person : Person) {
        this.personService.create(person);
    }

    @Put()
    async update(@Body() person : Person) : Promise<Person>{
        return person
    }

    @Delete(':id')
    delete(@Param('id') id:string) : string {
        return `Delete person of id ${id}`
    }


    

}