const { model, Schema } = require("mongoose");

const studentAttendanceSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    adminAttendace: {
      type: Schema.Types.ObjectId,
      ref: "AdminAttendace",
    },
  },
  { timestamps: true }
);

const StudentAttendace = model("StudentAttendace", studentAttendanceSchema);

module.exports = StudentAttendace;
