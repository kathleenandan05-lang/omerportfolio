'use client';

import { useEffect, useState } from "react";

export default function AdminPage() {
  const [json, setJson] = useState("{}");
  const [status, setStatus] = useState<string | null>(null);
  const [secret, setSecret] = useState("");

  useEffect(() => {
    fetch('/api/data')
      .then(res => res.json())
      .then(data => setJson(JSON.stringify(data, null, 2)))
      .catch(err => console.error(err));
  }, []);

  const save = async () => {
    try {
      const parsed = JSON.parse(json);
      const headers: Record<string, string> = { 'Content-Type': 'application/json' };
      if (secret) headers['x-admin-secret'] = secret;

      const res = await fetch('/api/data', {
        method: 'PUT',
        headers,
        body: JSON.stringify(parsed),
      });
      if (res.ok) {
        setStatus('Saved successfully');
      } else if (res.status === 401) {
        setStatus('Unauthorized - bad secret');
      } else {
        setStatus('Save failed');
      }
    } catch (err) {
      setStatus('Invalid JSON');
    }
  };

  return (
    <main style={{ padding: '1rem' }}>
      <h1>Admin</h1>
      <p>Edit the JSON data for resume and portfolio below.</p>
      <div style={{ marginBottom: '0.5rem' }}>
        <label>
          Admin secret:&nbsp;
          <input
            type="password"
            value={secret}
            onChange={e => setSecret(e.target.value)}
            style={{ fontFamily: 'monospace' }}
          />
        </label>
      </div>
      <textarea
        style={{ width: '100%', height: '400px', fontFamily: 'monospace' }}
        value={json}
        onChange={e => setJson(e.target.value)}
      />
      <button onClick={save} style={{ marginTop: '0.5rem' }}>
        Save
      </button>
      {status && <p>{status}</p>}
    </main>
  );
}
