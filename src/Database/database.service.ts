import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import {User} from "./database.interface";
import { CreateUserDTO} from './database.dto'

@Injectable()
export class CustomerService {
    constructor(@InjectModel('Customer') private readonly customerModel: Model<User>) { }
    // fetch all customers
    async getAllCustomer(): Promise<User[]> {
        const customers = await this.customerModel.find().exec();
        console.log(customers)
        return customers;
    }
    // Get a single customer
    // async getCustomer(customerID): Promise<Customer> {
    //     const customer = await this.customerModel.findById(customerID).exec();
    //     return customer;
    // }
    // // post a single customer
    // async addCustomer(createCustomerDTO: CreateCustomerDTO): Promise<Customer> {
    //     const newCustomer = await this.customerModel(createCustomerDTO);
    //     return newCustomer.save();
    // }
    // // Edit customer details
    // async updateCustomer(customerID, createCustomerDTO: CreateCustomerDTO): Promise<Customer> {
    //     const updatedCustomer = await this.customerModel
    //         .findByIdAndUpdate(customerID, createCustomerDTO, { new: true });
    //     return updatedCustomer;
    // }
    // // Delete a customer
    // async deleteCustomer(customerID): Promise<any> {
    //     const deletedCustomer = await this.customerModel.findByIdAndRemove(customerID);
    //     return deletedCustomer;
    // }
}