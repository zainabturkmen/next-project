import Link from "next/link";
import React from "react";
import Image from "next/image";

const DrinksList = ({ drinks }) => {
  return (
    <ul className="grid sm:grid-cols-2 gap-6 mt-6">
      {drinks.map((drink) => {
        return (
          <li key={drink.idDrink}>
            <Link href={`/drinks/${drink.id}`} className="text-xl font-medium">
              <div className="relative h-48 mb-4">
                <Image
                  src={drink.strDrinkThumb}
                  fill
                  sizes="(max-wdth: 768px) 100vw (max-width:1200px) 50vw"
                  className="rounded-md object-cover"
                />
              </div>
              {drink.strDrink}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default DrinksList;

// import Link from "next/link";
// import React from "react";

// const DrinksList = ({ drinks }) => {
//   return (
//     <ul className="menu menu-vertical pl-0">
//       {drinks.map((drink) => {
//         return (
//           <li key={drink.idDrink}>
//             <Link href={`/drinks/${drink.id}`} className="text-xl font-medium">
//               {drink.strDrink}
//             </Link>
//           </li>
//         );
//       })}
//     </ul>
//   );
// };

// export default DrinksList;
