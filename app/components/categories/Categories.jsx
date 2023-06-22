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
    description: "¡Esta propiedad está cerca de la playa!",
  },
  {
    label: "Granjas",
    icon: GiWindmill,
    description: "¡Esta propiedad tiene molinos de viento!",
  },
  {
    label: "Modernas",
    icon: MdOutlineVilla,
    description: "¡Esta propiedad es moderna!",
  },
  {
    label: "Zona rural",
    icon: TbMountain,
    description: "¡Esta propiedad está en el campo!",
  },
  {
    label: "Piscina",
    icon: TbPool,
    description: "¡Esta propiedad tiene una hermosa piscina!",
  },
  {
    label: "Islas",
    icon: GiIsland,
    description: "¡Esta propiedad está en una isla!",
  },
  {
    label: "Rios",
    icon: GiBoatFishing,
    description: "¡Esta propiedad está cerca de un lago!",
  },
  {
    label: "Skii",
    icon: FaSkiing,
    description: "¡Esta propiedad tiene actividades de esquí!",
  },
  {
    label: "Castillos",
    icon: GiCastle,
    description: "¡Esta propiedad es un castillo antiguo!",
  },
  {
    label: "Cuevas",
    icon: GiCaveEntrance,
    description: "¡Esta propiedad está en una cueva espeluznante!",
  },
  {
    label: "Camping",
    icon: GiForestCamp,
    description: "¡Esta propiedad ofrece actividades de camping!",
  },
  {
    label: "Artico",
    icon: BsSnow,
    description: "¡Esta propiedad está en un ambiente ártico!",
  },
  {
    label: "Desierto",
    icon: GiCactus,
    description: "¡Esta propiedad está en el desierto!",
  },
  {
    label: "Granero",
    icon: GiBarn,
    description: "¡Esta propiedad está en un granero!",
  },
  {
    label: "Lujoso",
    icon: IoDiamond,
    description: "¡Esta propiedad es nueva y lujosa!",
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
          pb-1
          mt-6
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
