import { IsEmail, IsNotEmpty, MinLength, IsOptional } from 'class-validator';

export class CrearNegocioDto {
  @IsNotEmpty() nombre!: string;
  @IsEmail() email!: string;
  @MinLength(6) password!: string;
  @IsOptional() telefono?: string;
  @IsOptional() direccion?: string;
  @IsOptional() categoria?: string;
  @IsOptional() latitud?: string;  
  @IsOptional() longitud?: string;  
}
