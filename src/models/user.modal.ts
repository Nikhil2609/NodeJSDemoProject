import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../db';

export class UserModal extends Model {
  id!: number;
  name!: string;
  email!: string;
  password!: string;
  isActive!: boolean;
}

UserModal.init(
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
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  },
  {
    sequelize: sequelize,
    tableName: 'users',
    timestamps: false
  }
);
