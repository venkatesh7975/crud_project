import Image from "next/image";
import Link from "next/link";  // Import the Link component from next/link

export default function Home() {
  return (
    <div>
      <h1>Signin</h1>

      <input placeholder="enter username" type="text"/>
      <input placeholder="enter password" type="password"/>
      <Link href="/">  {/* Correct usage of Link component */}
        <button>Home</button>         {/* Use an <a> tag inside the Link component */}
      </Link>
    </div>
  );
}
