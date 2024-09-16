import Link from "next/link";

export function Footer() {
  return (
    <>
      <section>
        <div className="w-full h-24 flex justify-center items-center bg-black">
          <Link href="/">
            <p className="text-gray-100">
              Desgined by <span className="text-white">Simplyanai</span>
            </p>
          </Link>
        </div>
      </section>
    </>
  );
}
