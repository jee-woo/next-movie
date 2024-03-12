"use client";

export default function Error(props) {
  console.log(props);
  return (
    <div>
      <h1>Error ㅠㅠ</h1>
      <div>{JSON.stringify(props.error.stack)}</div>
    </div>
  );
}
