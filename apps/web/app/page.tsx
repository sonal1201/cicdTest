import { client } from "@repo/db/client";

export default async function Home() {
  const user = await client.user.findFirst();

  return (
    <div>
      <h1>CHANDAN PASIA BEJ RE LAVDE 160</h1>
      <div>
        <p>Username: {String(user?.username)}</p>
      </div>
    </div>
  );
}
