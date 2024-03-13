export default function Company() {
  async function handleSubmit() {
    "use server";
    // 서버에 바로 접근하는 코드
    // 빌드 시점에 미리 클라이언트에서 분리시키고 서버로 옮김으로써 클라이언트 번들링 결과물에는 포함되지 않고 서버에서만 실행도히는 서버 액션 만듦
    // 서버 컴포넌트에서는 use server가 없으면 form의 action을 사용할 수 없음

    console.log(
      "해당 작업은 서버에서 수행합니다... 따라서 CORS 이슈가 없습니다..."
    );

    // POST 요청
    const response = await fetch("http://localhost:3000/api/about", {
      method: "post",
      body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const result = await response.json();
    console.log("result", result);
  }

  return (
    <div>
      <h1>Company</h1>
      <form action={handleSubmit}>
        <button type="submit">form 요청</button>
      </form>
    </div>
  );
}
