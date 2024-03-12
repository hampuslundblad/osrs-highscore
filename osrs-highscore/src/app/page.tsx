import Image from "next/image";
import { getStatsByGamemode, getSkillPage } from "osrs-json-hiscores";

async function getData() {
  const res = await getStatsByGamemode("inteals");
  console.log(res.skills.overall);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  return res;
}

export default async function Home() {
  const data = await getData();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>hellow orld!</div>
      <div> inteals {data.skills.overall.xp.toString()}</div>
    </main>
  );
}
