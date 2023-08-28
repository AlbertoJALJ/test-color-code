import mongoose from "mongoose";
const URI = "mongodb://127.0.0.1:27017/colors";

const dbConnect = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Conectado correctamente a MongoDB");
  } catch (error) {
    console.log("Fallo de conexión a MongoDB", error);
  }
};

dbConnect();

export default mongoose;
