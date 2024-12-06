import Link from "next/link";

export default function Navigator() {
  return (
    <nav>
      <h1>Navigation</h1>
      <ul>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
      </ul>
    </nav>
  );
}
