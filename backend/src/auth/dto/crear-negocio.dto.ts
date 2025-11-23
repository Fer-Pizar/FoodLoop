import { IsEmail, IsNotEmpty, MinLength, IsOptional, IsInt, IsString,IsNumberString,} from 'class-validator';

export class CrearNegocioDto {
  @IsNotEmpty()
  @IsString()
  nombre!: string;

  @IsEmail()
  email!: string;

  @MinLength(6)
  password!: string;

  @IsOptional()
  @IsString()
  telefono?: string;

  @IsOptional()
  @IsString()
  direccion?: string;

  @IsOptional()
  @IsInt()
  idCategoria?: number;

  @IsOptional()
  @IsString()
  categoria?: string;

  @IsOptional()
  @IsNumberString()
  latitud?: string;

  @IsOptional()
  @IsNumberString()
  longitud?: string;
}
