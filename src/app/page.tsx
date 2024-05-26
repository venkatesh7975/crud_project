import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/signup">
        <button>Signup</button>
      </Link>
      <Link href="/signin">
        <button>SignIn</button>
      </Link>
    </div>
  );
}
