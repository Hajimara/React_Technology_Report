let postId = 1; // id 초깃값

// posts 배열 초기 데이터
const posts = [
  {
    id: 1,
    title: "제목",
    body: "내용"
  }
];

/**
 * 포스트 작성
 * POST /api/posts
 * { title, body }
 */
export const write = ctx => {
  // REST API의 Request Body는 ctx.request.body에서 조회할 수 있다.
  console.log(ctx.request.body); // { title: '제목', body: '내용' }
  const { title, body } = ctx.request.body;
  postId += 1;
  const post = { id: postId, title, body };
  posts.push(post);
  ctx.body = post;
  console.log(ctx.body);
};

/**
 * 포스트 목록 조회
 * GET /api/posts
 */
export const list = ctx => {
  ctx.body = posts;
};

/**
 * 특정 포스트 조회
 * GET /api/posts/:id
 */
export const read = ctx => {
  const { id } = ctx.params;
  // 주어진 id값으로 포스트를 찾는다.
  // 파라미터로 받아 온 값은 문자열 형식이므로 파라미터를 숫자로 변환하거나
  // 비교할 p.id 값을 문자열로 변경해야 한다.
  const post = posts.find(p => p.id.toString() === id);
  // 포스트가 없으면 오류 반환
  if (!post) {
    ctx.status = 404;
    ctx.body = {
      message: "포스트가 존재하지 않습니다."
    };
    return;
  }
  ctx.body = post;
};

/**
 * 특정 포스트 제거
 * DELETE /api/posts/:id
 */
export const remove = ctx => {
  const { id } = ctx.params;
  // 해당 id 가진 post가 몇 번째인지 확인한다.
  const index = posts.findIndex(p => p.id.toString() === id);
  // 포스트가 없으면 오류 반환
  if (index === -1) {
    ctx.status = 404;
    ctx.body = {
      message: "포스트가 존재하지 않습니다."
    };
    return;
  }
  // index번 째 아이템을 제거한다.
  posts.splice(index, 1);
  ctx.body = 204; // No Content
};

/**
 * 포스트 수정
 * PUT /pai/posts/:id
 * { title, body }
 */
export const replace = ctx => {
  // PUT 메서드는 전체 포스트 정보를 입력하여 데이터를 통째로 교체할 때 사용한다.
  const { id } = ctx.params;
  const index = posts.findIndex(p => p.id.toString() === id);
  if (index === -1) {
    ctx.status = 404;
    ctx.body = {
      message: "포스트가 존재하지 않습니다."
    };
    return;
  }
  // 전체 객체를 덮어 씌운다.
  // 따라서 id를 제외한 기존 정보를 날리고, 객체를 새로 만든다.
  posts[index] = {
    id,
    ...ctx.request.body
  };
  ctx.body = posts[index];
};

/**
 * 포스트 수정( 특정 필드 변경 )
 * PATCH /api/posts/:id
 * { title, body }
 */
export const update = ctx => {
    // PATCH는 주어진 필드만 교체한다.
    const { id } = ctx.params;
    console.log(id);
    
    const index = posts.findIndex(p=>p.id.toString() === id);
    console.log(id);
    if(index === -1) {
        ctx.status = 404;
        ctx.body = {
        message:'포스트가 존재하지 않습니다.'
        }
        return;
    }
    console.log(posts[index]);
    console.log(ctx.request.body);
    // 기존 값에 정보를 덮어 씌운다.
    posts[index]={
        ...posts[index],
        ...ctx.request.body
    }
    ctx.body = posts[index];
}

