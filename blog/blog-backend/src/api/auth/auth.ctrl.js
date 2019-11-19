import Joi from "joi";
import User from "../../models/user";

/**
 *  POST /api/auth/register
 *  {
 *      username: 'park'
 *      password: '1234'
 *  }
 */
export const register = async ctx => {
  // 회원가입
  // Request body 검증하기
  const schema = Joi.object().keys({
    username: Joi.string()
      .alphanum()
      .min(2)
      .max(20)
      .required(),
    password: Joi.string().required()
  });
  const result = Joi.validate(ctx.request.body, schema);
  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }

  const { username, password } = ctx.request.body;
  try {
    // username 중복 확인
    const exists = await User.findByUsername(username);
    if (exists) {
      ctx.status = 409;
      return;
    }

    const user = new User({
      username
    });
    await user.setPassword(password); //비밀번호 설정
    await user.save(); // DB 저장

    // 응답할 데이터에서 패스워드 제거
    ctx.body = user.serialize();

    const token = user.generateToken();
    ctx.cookies.set("access_token", token, {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      httpOnly: true // XSS 방지
    });
  } catch (error) {
    ctx.throw(500, error);
  }
};

/**
 *  POST /api/auth/login
 *  {
 *      username: 'park'
 *      password: '1234'
 *  }
 */
export const login = async ctx => {
  // 로그인
  const { username, password } = ctx.request.body;

  if (!username || !password) {
    ctx.status = 401; // Unauthorized
    return;
  }

  try {
    const user = await User.findByUsername(username);
    if (!user) {
      ctx.status = 401;
      return;
    }
    const valid = await user.checkPassword(password);
    if (!valid) {
      ctx.status = 401;
      return;
    }
    ctx.body = user.serialize();

    const token = user.generateToken();
    ctx.cookies.set("access_token", token, {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      httpOnly: true // XSS 방지
    });
  } catch (error) {
    ctx.throw(500, error);
  }
};

/**
 * GET /api/auth/check
 */
export const check = async ctx => {
  // 로그인 상태 확인
  const { user } = ctx.state;
  if (!user) {
    // 로그인 중이 아님.
    ctx.state = 401;
    return;
  }
  ctx.body = user;
};

/**
 * POST /api/auth/logout
 */
export const logout = async ctx => {
  // 로그아웃
  ctx.cookies.set("access_token");
  ctx.status = 204;
};
