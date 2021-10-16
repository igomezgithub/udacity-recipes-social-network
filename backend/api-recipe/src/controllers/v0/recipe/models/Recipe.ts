import {Table, Column, Model, CreatedAt, UpdatedAt} from 'sequelize-typescript';


@Table
export class Recipe extends Model<Recipe> {
  @Column
  public method!: string;

  @Column
  public url!: string;

  @Column
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
