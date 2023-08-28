import mongoose from "./dbconfig";

const ColorsSchema = new mongoose.Schema({
  color: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
  },
  tolerance: {
    type: Number,
    required: true,
  },
  
});

export default mongoose.model("colors", ColorsSchema);
