import { ConsoleLogger, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { Model } from 'mongoose';
import { IUser } from './common/interfaces/user.interface';
import { USER } from './common/models/models';
import { UserDTO } from './dto/user.dto';

@Injectable()
export class UserService {
    private readonly logger = new ConsoleLogger(UserService.name);

    constructor(@InjectModel(USER.name) private readonly model: Model<IUser>) { }

    async checkPassword(password: string, passwordDB: string): Promise<boolean> {
        this.logger.debug('Check Password service');
        return await bcrypt.compare(password, passwordDB);
    }

    async findByUsername(username: string) {
        this.logger.debug('Find by Username service');
        return await this.model.findOne({ username });
    }

    async hashPassword(password: string): Promise<string> {
        this.logger.debug('Evaluate hash password service');
        const salt = await bcrypt.genSalt(10);
        return await bcrypt.hash(password, salt);
    }

    async create(userDTO: UserDTO): Promise<IUser> {
        this.logger.debug('Create service');
        const hash = await this.hashPassword(userDTO.password);
        const newUser = new this.model({ ...userDTO, password: hash });
        return await newUser.save();
    }

    async findAll(): Promise<IUser[]> {
        this.logger.debug('Find All service');
        return await this.model.find();
    }

    async findOne(id: string): Promise<IUser> {
        this.logger.debug('Find One service');
        return await this.model.findById(id);
    }

    async update(id: string, userDTO: UserDTO): Promise<IUser> {
        this.logger.debug('Update service');
        const hash = await this.hashPassword(userDTO.password);
        const user = { ...userDTO, password: hash };
        return await this.model.findByIdAndUpdate(id, user, { new: true });
    }

    async delete(id: string) {
        this.logger.debug('Delete service');
        await this.model.findByIdAndDelete(id);
        return {
            status: HttpStatus.OK,
            msg: 'Deleted'
        }
    }
}
