import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new Schema({
  username: String,
  hashedPassword: String
});

// hashedPassword 적용하는 함수
UserSchema.methods.setPassword = async function(password) {
  const hash = await bcrypt.hash(password, 10);
  this.hashedPassword = hash;
};

// 파라미터로 받은 패스워드가 해당 계정 비밀번호와 일치하는지
UserSchema.methods.checkPassword = async function(password) {
  const result = await bcrypt.compare(password, this.hashedPassword);
  return result; // true / false
};

UserSchema.statics.findByUsername = function(username) {
  console.log(this);
  return this.findOne({ username });
};

const User = mongoose.model("User", UserSchema);
export default User;
