import React from "react";

async function getData() {
  const base = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const res = await fetch(`${base}/api/data`, {
    cache: "no-store",
  });
  return res.json();
}

export default async function PortfolioPage() {
  const data = await getData();
  const items = data.portfolio || [];

  return (
    <main style={{ padding: "1rem" }}>
      <h1>Portfolio</h1>
      <ul>
        {items.map((item: any, idx: number) => (
          <li key={idx} style={{ marginBottom: "1rem" }}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            {item.link && (
              <p>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  View project
                </a>
              </p>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}
