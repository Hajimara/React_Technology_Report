import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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

// 응답 데이터 중 hashedPassword 를 제거하는 함수
UserSchema.methods.serialize = function() {
  console.log(this);
  const data = this.toJSON();
  delete data.hashedPassword;
  return data;
};

UserSchema.methods.generateToken = function() {
  console.log(this);
  const token = jwt.sign(
    {
      _id: this.id,
      username: this.username
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d" // 7일동안 유효
    }
  );
  return token;
};

const User = mongoose.model("User", UserSchema);
export default User;
