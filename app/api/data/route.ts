import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const dataPath = path.join(process.cwd(), "data", "siteData.json");

// helper for GitHub-based persistence
async function githubCommit(content: string) {
  const repo = process.env.GITHUB_REPO;
  const token = process.env.GITHUB_TOKEN;
  const filePath = process.env.GITHUB_DATA_PATH || "data/siteData.json";
  if (!repo || !token) return false;

  // fetch existing sha if present
  const apiBase = `https://api.github.com/repos/${repo}/contents/${filePath}`;
  const resp = await fetch(apiBase, {
    headers: { Authorization: `Bearer ${token}` },
  });

  let sha: string | undefined;
  if (resp.status === 200) {
    const json = await resp.json();
    sha = json.sha;
  }

  const putResp = await fetch(apiBase, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message: "Update site data",
      content: Buffer.from(content).toString("base64"),
      sha,
    }),
  });

  return putResp.ok;
}

export async function GET() {
  try {
    const json = await fs.readFile(dataPath, "utf8");
    return NextResponse.json(JSON.parse(json));
  } catch (err) {
    return NextResponse.json({ error: "Unable to read data" }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  // simple authorization check
  const secret = process.env.ADMIN_SECRET;
  if (secret) {
    const header = req.headers.get("x-admin-secret");
    if (header !== secret) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  }

  try {
    const body = await req.json();
    const dataString = JSON.stringify(body, null, 2);

    // if GitHub credentials provided, commit there instead of writing local file
    const usedGit = await githubCommit(dataString);
    if (!usedGit) {
      await fs.writeFile(dataPath, dataString);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: "Unable to write data" }, { status: 500 });
  }
}

// alias POST for convenience
export { PUT as POST };
