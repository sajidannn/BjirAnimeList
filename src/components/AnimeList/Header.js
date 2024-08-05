import Link from "next/link";

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <header>
      <div className="flex justify-between items-center p-4">
        <h1 className="text-2xl">{title}</h1>
        {
          linkHref && linkTitle
            ?
            <Link href={linkHref} className="md:text-xl text-md underline hover:text-indigo-500
        transition-all">{linkTitle}
            </Link>
            : null
        }
      </div>
    </header>
  );
}

export default Header;