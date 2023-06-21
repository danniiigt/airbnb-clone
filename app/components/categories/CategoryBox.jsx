import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useCallback } from "react";
import qs from "query-string";

export const CategoryBox = ({ label, icon: Icon, selected }) => {
  const router = useRouter();
  const params = useSearchParams();
  const pathname = usePathname();

  const handleClick = useCallback(() => {
    let currentQuery = {};

    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    const updatedQuery = {
      ...currentQuery,
      category: label,
    };

    if (params?.get("category") === label) {
      delete updatedQuery.category;
    }

    console.log({ updatedQuery });

    const url = qs.stringifyUrl(
      {
        url: pathname,
        query: updatedQuery,
      },
      { skipEmptyString: true, skipNull: true }
    );

    router.push(url);
  }, []);

  return (
    <button
      onClick={handleClick}
      className={`
      flex
      flex-col
      items-center
      justify-center
      gap-2
      p-3
      py-1.5
      first:pl-0
      border-b-2
      hover:border-neutral-400
      hover:text-neutral-800
      transition
      cursor-pointer
      ${selected ? "border-b-neutral-600" : "border-transparent"}
      ${selected ? "text-neutral-800" : "text-neutral-500"}
    `}
    >
      <Icon size={24} />
      <span className="text-sm truncate">{label}</span>
    </button>
  );
};
