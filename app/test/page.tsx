// type result= {
//     "userId": number,
//     "id": number,
//     "title": string,
//     "completed": boolean
// };
// export default function Page() {
//     const results = fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json));
//       console.log(results);

//     return (
//     <p>re</p>
// )
// }
export default async function Page() {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await data.json()
    return (
      <ul>
        {posts.map((post:any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    )
  }