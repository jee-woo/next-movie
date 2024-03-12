export default async function AboutUs() {
  const test = await fetch("http://localhost:3000/api/about");

  const json = await test.json();

  return (
    <div>
      <h1>about us...</h1>
      <div>{JSON.stringify(json)}</div>
    </div>
  );
}
