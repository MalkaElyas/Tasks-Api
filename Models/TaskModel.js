import mongoose from "mongoose";

const TaskSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        default: "new task"
    },
    complete: Boolean,
});

export default mongoose.model("tasks", TaskSchema);
