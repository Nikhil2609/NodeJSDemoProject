import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../db';

export class Customer extends Model {
  id!: number;
  name!: string;
  email!: string;
  password!: string;
  mobile!: string;
  createdAt!: Date;
  updatedAt!: Date;
}

Customer.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    mobile: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize: sequelize,
    tableName: 'Users'
  }
);
