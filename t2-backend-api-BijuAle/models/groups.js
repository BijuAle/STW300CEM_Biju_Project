var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var groupSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    },
    image: {
      type: String,
      default: ""
    },
    members:[{type:Schema.Types.ObjectId, ref: 'User'}]
  },
  { timestamps: true }
);

var Groups = mongoose.model("group", groupSchema);
module.exports = Groups;
