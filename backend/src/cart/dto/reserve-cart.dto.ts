import { IsISO8601, IsOptional } from 'class-validator';

export class ReserveCartDto {
  @IsOptional()
  @IsISO8601()
  ventanaRetiroInicio?: string; 

  @IsOptional()
  @IsISO8601()
  ventanaRetiroFin?: string; 
}
