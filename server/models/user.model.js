
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    email: { type: String, require },
    data: Array,
    title: { type: String },
    description: { type: String }
}, {
    timestamps: true,
    versionKey: false,
})

// UserSchema.pre("save", async function (next) {
//     const hash = bcrypt.hashSync(this.password, 8);
//     this.password = hash;
//     return next;
// });

// UserSchema.methods.matchPassword = async function (password) {
//     return await bcrypt.compare(password, this.password);
// }

module.exports = mongoose.model("user", UserSchema);
