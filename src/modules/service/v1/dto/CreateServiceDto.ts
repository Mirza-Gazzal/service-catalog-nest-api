import { IsOptional, IsString, MaxLength, MinLength } from 'class-validator';
import { CollapseSpaces, Trim } from '../../../../system/common/transformers/string.transformers';

export class CreateServiceDto {
    @CollapseSpaces()
    @IsString()
    @MinLength(2)
    @MaxLength(120)
    name: string;

    @IsOptional()
    @CollapseSpaces()
    @IsString()
    @MaxLength(256)
    description?: string;

    @IsOptional()
    @CollapseSpaces()
    @IsString()
    @MaxLength(256)
    versionDescription?: string;
}
