import mongoose, { Document, Schema } from "mongoose";
import { IRestaurant } from "./restaurant.model";
import DeleteStatus from "../constants";

export interface IDish extends Document {
  image: string;
  name: string;
  ingredients: string[];
  tags: string[];
  price: number;
  restaurant: IRestaurant;
  status: DeleteStatus;
}

const DishSchema: Schema = new mongoose.Schema<IDish>({
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  ingredients: [
    {
      type: String,
      required: true,
    },
  ],
  tags: [
    {
      type: String,
    },
  ],
  price: {
    type: Number,
    required: true,
  },
  restaurant: {
    type: Schema.Types.ObjectId,
    ref: "Restaurant",
  },
  status: {
    type: String,
    enum: DeleteStatus,
    default: DeleteStatus.ACTIVE,
  },
});

export default mongoose.model<IDish>("Dish", DishSchema);
