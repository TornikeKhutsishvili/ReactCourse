import { ICat } from "@/core/interfaces/cat.interface";
import { fetchCats } from "@/core/services/getCats";
import Image from "next/image";
import { notFound } from "next/navigation";

// INTERFACES
interface CatPageProps {
  params: {
    id: string;
  };
}

// STATIC
export async function generateStaticParams() {
  const cats: ICat[] = await fetchCats();

  return cats.map((cat) => ({
    id: cat.id.toString(),
  }));
}

// FETCH
const fetchCat = async (id: string) => {
  const res = await fetch(`https://api.thecatapi.com/v1/images/${id}`);

  if (!res.ok) {
    notFound();
  }
  return res.json();
};

// COMPONENT
export default async function CatPage(props: CatPageProps) {
  const { id } = await props.params;
  const cat:ICat = await fetchCat(id);

  return (
    <div key={cat.id} className="w-56 h-64 relative m-2">
      <Image
        className="object-cover"
        src={cat.url}
        alt={`URL: ${cat.url} || Cat Image`}
        loading="lazy"
        fill={true}
        sizes="(max-width: 758px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
}
