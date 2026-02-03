import { IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateServiceDto {
    @IsString()
    @MaxLength(120)
    name: string;

    @IsOptional()
    @IsString()
    description?: string;

    // description for v1
    @IsOptional()
    @IsString()
    @MaxLength(256)
    v1Description?: string;

    // default "1.0.0" if not provided
    @IsOptional()
    @IsString()
    @MaxLength(50)
    v1Version?: string;
}
