"use client";

import { categoryItems } from "@/app/lib/category-items";
import { Container } from "../Container";
import { CategoryBox } from "./CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";

export const Categories = () => {
  const pathName = usePathname();
  const params = useSearchParams();
  const categoryParam = params?.get("category");

  if (pathName == "/") {
    return (
      <Container categoriesContainer>
        <div
          className="
          flex
          flex-row
          gap-3
          items-center
          justify-between
          overflow-x-auto
          pb-1
        "
        >
          {categoryItems.map((category) => (
            <CategoryBox
              key={category.label}
              label={category.label}
              icon={category.icon}
              description={category.description}
              selected={categoryParam === category.label}
            />
          ))}
        </div>
      </Container>
    );
  }

  return <></>;
};
