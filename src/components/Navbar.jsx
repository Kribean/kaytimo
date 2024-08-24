import { Pacifico } from "next/font/google";
const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400", // Définir le poids de la police, 400 pour normal
});

export const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a
          href="./"
          className={pacifico.className + " btn btn-ghost  text-xl "}
        >
          Kay Ti Mo
        </a>
      </div>
      <div className="flex-1">
        <div className=" hidden lg:block w-full menu menu-horizontal">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="./activities">Toutes les Activités</a>
            </li>
            <li>
              <a href="./account">Mon Compte</a>
            </li>
          </ul>
        </div>
        <ul className="menu menu-horizontal px-1">
          <li className="mr-4 lg:hidden block">
            <details>
              <summary>Menu</summary>
              <ul className="p-2">
                <li>
                  <a href="./activities">Toutes les Activités</a>
                </li>
                <li>
                  <a href="./account">Mon Compte</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};
