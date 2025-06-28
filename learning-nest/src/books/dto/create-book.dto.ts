import {
  IsBoolean,
  IsDateString,
  IsIn,
  IsInt,
  IsNotEmpty,
  IsOptional,
  Max,
  Min,
} from 'class-validator';

export class CreateBookDto {
  @IsNotEmpty() title!: string;
  @IsNotEmpty() author!: string;
  @IsNotEmpty() genre!: string;

  @IsDateString() publishedDate!: string;

  @IsInt() @Min(1) @Max(5) rating!: number;

  @IsBoolean() available!: boolean;
}
