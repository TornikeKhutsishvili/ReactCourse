import { ICat } from "@/core/interfaces/cat.interface";
import { fetchCats } from "@/core/services/getCats";
import Image from "next/image";
import Link from "next/link";

export default async function CatsPage() {
  const cats: ICat[] = await fetchCats();

  return (
    <div className="flex w-200 m-auto my-2 flex-wrap">
      {cats.map(({ id, url }: ICat) => (
        <Link key={id} href={`/ssr/cats/${id}`}>
          <div className="w-56 h-64 relative m-2">
            <Image
              className="object-cover"
              src={url}
              alt={`URL: ${url} || Cat Image`}
              loading="lazy"
              fill={true}
              sizes="{max-width: 758px} 100vw, {max-width: 1200px} 50vw, 33vw"
            />
          </div>
        </Link>
      ))}
    </div>
  );
};
