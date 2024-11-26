import { Button } from "../Button/Button";

const Navbar = () => {

  return (
    <nav className="bg-white shadow-md">
    <div className="container mx-auto px-4  py-4">
        <div className="flex justify-between items-center text-xl">
            <div>
                <h1 className="text-xl font-bold text-gray-800">HARDWAREGAMER</h1>
            </div>
            <div>
                <ul className="flex space-x-6 text-gray-600">
                    <li>
                        <Button text="Inicio"/>
                        <Button text="Productos"/>
                        <Button text="Notebooks"/>
                        <Button text="Armá tu PC"/>
                        <Button text="Ayuda"/>
                    </li>
                </ul>
            </div>
            <div>
                <Button text="Ingresar"/>
                <Button text={<span class="material-symbols-outlined flex justify-center items-center text-lg">shopping_cart</span>}/>
            </div>
        </div>
    </div>
</nav>

  );
};

export default Navbar;
