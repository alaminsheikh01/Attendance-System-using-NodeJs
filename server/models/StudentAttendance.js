const { model, Schema } = require("mongoose");

const studentAttendanceSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: Date,
  adminAttendace: {
    type: Schema.Types.ObjectId,
    ref: "AdminAttendace",
  },
});

const StudentAttendace = model("StudentAttendace", studentAttendanceSchema);

module.exports = StudentAttendace;
