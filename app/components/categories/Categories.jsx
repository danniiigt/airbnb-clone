"use client";

import { Container } from "../Container";
import { CategoryBox } from "./CategoryBox";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import { FaSkiing } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";
import { MdOutlineVilla } from "react-icons/md";
import { usePathname, useSearchParams } from "next/navigation";

export const categoryItems = [
  {
    label: "Playa",
    icon: TbBeach,
    description: "This property is close to the beach!",
  },
  {
    label: "Granjas",
    icon: GiWindmill,
    description: "This property is has windmills!",
  },
  {
    label: "Modernas",
    icon: MdOutlineVilla,
    description: "This property is modern!",
  },
  {
    label: "Zona rural",
    icon: TbMountain,
    description: "This property is in the countryside!",
  },
  {
    label: "Piscina",
    icon: TbPool,
    description: "This is property has a beautiful pool!",
  },
  {
    label: "Islas",
    icon: GiIsland,
    description: "This property is on an island!",
  },
  {
    label: "Rios",
    icon: GiBoatFishing,
    description: "This property is near a lake!",
  },
  {
    label: "Skii",
    icon: FaSkiing,
    description: "This property has skiing activies!",
  },
  {
    label: "Castillos",
    icon: GiCastle,
    description: "This property is an ancient castle!",
  },
  {
    label: "Cuevas",
    icon: GiCaveEntrance,
    description: "This property is in a spooky cave!",
  },
  {
    label: "Camping",
    icon: GiForestCamp,
    description: "This property offers camping activities!",
  },
  {
    label: "Artico",
    icon: BsSnow,
    description: "This property is in arctic environment!",
  },
  {
    label: "Desierto",
    icon: GiCactus,
    description: "This property is in the desert!",
  },
  {
    label: "Granero",
    icon: GiBarn,
    description: "This property is in a barn!",
  },
  {
    label: "Lujoso",
    icon: IoDiamond,
    description: "This property is brand new and luxurious!",
  },
];

export const Categories = () => {
  const pathName = usePathname();
  const params = useSearchParams();
  const categoryParam = params?.get("category");

  if (pathName == "/") {
    return (
      <Container>
        <div
          className="
          flex
          flex-row
          gap-3
          items-center
          justify-between
          overflow-x-auto
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
