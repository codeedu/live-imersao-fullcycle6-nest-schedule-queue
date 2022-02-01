import { Table, Column, Model } from 'sequelize-typescript';

@Table({
  tableName: 'tweets',
})
export class Tweet extends Model {
  @Column
  text: string;
}

//sqlite
//biblioteca persistencia
