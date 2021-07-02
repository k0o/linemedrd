//import { Schema as MSchema } from 'mongoose';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateAdressInput {
	@Field(() => String)
	street: string;

	@Field(() => String)
	sector: string;

	@Field(() => String)
	city: string;

	@Field(() => String)
	province: string;
}

@InputType()
export class UpdateAdressInput {
	@Field(() => String)
	_id: string;

	@Field(() => String, { nullable: true })
	street?: string;

	@Field(() => String, { nullable: true })
	sector?: string;

	@Field(() => String, { nullable: true })
	city?: string;

	@Field(() => String, { nullable: true })
	province?: string;
}
