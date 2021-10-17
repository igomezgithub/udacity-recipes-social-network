import {Table, Column, Model, CreatedAt, UpdatedAt, DataType} from 'sequelize-typescript';


@Table({ tableName: 'Recipes' })
export class Recipe extends Model {
  @Column
  public title!: string;

  @Column(DataType.TEXT)
  public method!: string;

  @Column
  public url!: string;

  @Column(DataType.TEXT)
  public ingredients!: string;

  @Column
  public rate!: number;

  @Column
  @CreatedAt
  public createdAt: Date = new Date();

  @Column
  @UpdatedAt
  public updatedAt: Date = new Date();
}
