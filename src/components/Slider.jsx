import {Pagination} from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {RxCrop, RxDesktop, RxPencil2, RxArrowTopRight} from 'react-icons/rx';

const serviceData = [
    {
        icon: <RxCrop />,
        title: "Desarrollo de aplicaciones",
        description: "Diseño y desarrollo de aplicaciones de escritorio. Desde la concepción hasta la implementación, trabajo para ofrecer soluciones robustas y adaptables, garantizando la mejor experiencia para el usuario final.",
    },
    {
        icon: <RxPencil2 />,
        title: "Gestión de bases de datos",
        description: "Experiencia en gestión y optimización de bases de datos MySQL, SQL Server y SQLite. Desde el diseño de esquemas hasta la implementación de soluciones escalables, garantizo un almacenamiento de datos eficiente y seguro para su proyecto.",
    },
    {
        icon: <RxDesktop />,
        title: "Desarrollo Web",
        description: "Creación de interfaces atractivas y funcionales utilizando todos mis conocimientos, asegurando una experiencia de usuario intuitiva y adaptable a diferentes dispositivos.",
    },

];

export function Slider() {
    return (
        <Swiper
            breakpoints={{
                320: {
                    slidesPerView: 1,
                    spaceBetween: 15
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 15
                },
                1024: {
                    slidesPerView: 2,
                    spaceBetween: 15
                }
            }}
            freeMode={true}
            pagination={{
                clickable: true
            }}
            modules={[Pagination]}
            className="h-[300px] md:h-[390px] w-[370px] md:w-[550px]"
        >
            {serviceData.map((item, index) => (
                <SwiperSlide key={index}>
                    <div className="flex px-6 py-8 h-auto  md:h-auto rounded-lg cursor-pointer bg-[rgba(65,47,123,0.15)] sm:flex-col gap-x-6 sm:gap-x-0 group hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 ">
                        <div className="mb-4 text-4xl text-[#f5741c]">{item.icon}</div>
                        <div>
                            <h3 className=" text-xl text-[#f5741c]">{item.title}</h3>
                            <p className="text-sm mt-3">{item.description}</p>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
};

