import React from "react";
import CelularRevistas from "@/assets/CelularRevistas.png";
import Revistas from "@/assets/paranhanarevistas.png";
import LogoParanhanaRevistas from "@/assets/LogoParanhanaRevistas.png";

const ParanhanaRevistas: React.FC = () => {
    return (
        <section
            className="relative w-full h-screen bg-cover bg-center"
            style={{
                backgroundImage: `url(${Revistas})`,
            }}
        >
            <div className="absolute inset-0 bg-orange-500 bg-opacity-90"></div>

            <div className="absolute top-48 left-1/3 transform -translate-x-1/4 lg:top-[20%]">
                <img src={LogoParanhanaRevistas} alt="ParanhanaNet" className="w-96 lg:w-96 lg:relative lg:-left-48" />
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
                <div className="absolute left-1/2 transform -translate-x-1/2">
                    <img
                        src={CelularRevistas}
                        alt="Celular Revistas"
                        className="h-auto object-center w-80 lg:w-[500px] lg:relative lg:-right-96"
                    />
                </div>
                <div className="mt-[400px] w-[90%] max-w-4xl px-4 md:px-6 text-center lg:relative lg:-left-60 lg:-top-[20%] lg:max-w-3xl">
                    <p className="text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl font-semibold">
                        Plataforma digital completa, com diversas opções de revistas para você acessar quando e onde quiser.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ParanhanaRevistas;