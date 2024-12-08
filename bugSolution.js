```javascript
// pages/index.js

export async function getStaticProps() {
  // Fetch data from an external API or other source.
  const data = await fetchData();

  return {
    props: {
      data,
    },
  };
}

export default function Home({ data }) {
  return (
    <div>
      <h1>Next.js App</h1>
      <p>This is a test. Data from API: {data}</p>
    </div>
  );
}

async function fetchData() {
  // Replace with your actual data fetching logic
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  return data;
}
```