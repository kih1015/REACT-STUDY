import { IsOptional, IsString } from 'class-validator';

export class ListBooksDto {
  @IsOptional() @IsString() genre?: string;
  @IsOptional() @IsString() search?: string;
}
