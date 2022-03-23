import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { TransactionService } from "src/common/transaction.service";
import { BaseRepository } from "src/repositories/base.repository";
import { EmployeeRepository } from "src/repositories/employee/employee.repository";
import { Employee, EmployeeSchema } from "./schemas/employee.schema";

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Employee.name, schema: EmployeeSchema }]),
    ],
    providers: [
        TransactionService,
        EmployeeRepository
    ],
    exports: [
        TransactionService,
        EmployeeRepository
    ]
})
export class EmployeeRepositoryModule { }