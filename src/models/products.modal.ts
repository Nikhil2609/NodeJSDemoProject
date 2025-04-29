import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../db';

export class ProductModal extends Model {
  declare id: number;
  declare name: string;
  declare price: number;
  declare description: string;
  declare categoryId: number;
}

ProductModal.init(
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
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    sequelize: sequelize,
    tableName: 'products'
  }
);
