import { IsEmail, IsNotEmpty, IsOptional, IsString, IsNumber } from 'class-validator';

export class CrearNegocioDto {
  @IsString() @IsNotEmpty()
  nombre_negocio: string;

  @IsOptional() @IsString()
  telefono?: string;

  @IsOptional() @IsString()
  direccion?: string;

  @IsOptional() @IsString()
  categoria?: string;

  @IsOptional() @IsNumber()
  latitud?: number;

  @IsOptional() @IsNumber()
  longitud?: number;


}
