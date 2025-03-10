import { DataTypes, Model } from "sequelize";
import sequelize from "../db";

// Define the attributes of the Job model
interface JobAttributes {
  id: number;
  title: string;
  type: string;
  location: string;
  description: string;
  salary: string;
  companyName: string;
  companyDescription: string;
  contactEmail: string;
  contactPhone: string;
}

// Define the Job model class
class Job extends Model<JobAttributes> implements JobAttributes {
  public id!: number;
  public title!: string;
  public type!: string;
  public location!: string;
  public description!: string;
  public salary!: string;
  public companyName!: string;
  public companyDescription!: string;
  public contactEmail!: string;
  public contactPhone!: string;
}

// Initialize the Job model
Job.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    type: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    location: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    salary: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    companyName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    companyDescription: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    contactEmail: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    contactPhone: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Job",
    tableName: "job",
    timestamps: false, // Enable timestamps (createdAt and updatedAt)
  }
);

export default Job;
