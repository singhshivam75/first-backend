import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
  {
    videoFile: {
      type: String,
      required
    },
    rhumbnail: {
      type: String,
      required
    },
    title: {
      type: String,
      required
    },
    discription: {
      type: Number,  
      required
    },
    duration: {
      type: Number,  
      default: 0
    },
    views: {
      type: Boolean,  
      default: true
    },
    type: {
      type: Schema.Types.ObjectId,  
      ref: "user"
    }
  }
)

videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video", videoSchema)