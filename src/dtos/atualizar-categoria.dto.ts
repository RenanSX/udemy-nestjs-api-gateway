import { ArrayMinSize, IsArray, IsOptional, IsString } from 'class-validator';

export class AtualizarCategoriaDto {
  @IsOptional()
  @IsString()
  descricao: string;

  @IsArray()
  @ArrayMinSize(1)
  eventos: Array<Evento>;
}

interface Evento {
  name: string;
  operacao: string;
  valor: string;
}
