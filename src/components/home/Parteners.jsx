'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import part1 from '/public/customers/1.png';
import part2 from '/public/customers/2.png';
import part3 from '/public/customers/3.png';
import part4 from '/public/customers/4.png';
import part5 from '/public/customers/5.png';
import part6 from '/public/customers/6.png';
import part7 from '/public/customers/7.png';
// import part8 from '/public/customers/8.png';
// import part9 from '/public/customers/9.png';
// import part10 from '/public/customers/10.png';
import NumberTicker from '../ui/number-ticker';
import Marquee from '../ui/marquee';
import { cn } from '@/lib/utils';
// import { cn } from "@/lib/utils";
// import Marquee from "@/components/magicui/marquee";

export default function Parteners() {

    const ReviewCard = ({
        img,
    }) => {
        return (
            <figure
                className={cn(

                )}
            >
                <div className="part-cont" >
                    <Image src={img} alt="Mazar" width={200} height={200} />
                </div>
            </figure>
        );
    };
    let parts = [{ img: part1.src }, { img: part2 }, { img: part3 }, { img: part4 }, { img: part5 }, { img: part6 }, { img: part7 }];
    let numbers = [
        { name: "وفرنا", number: 500000, p: "ريال سعودي لعميل واحد في منتج واحد" },
        { name: "أنجزنا", number: 17000, p: "رحله عبر النظام" },
        { name: "نقلنا", number: 580, p: "مليون لتر" },
        { name: "استخدمنا", number: 60000, p: "قفلا مخصصا" },
    ]
    return (
        <div className="parteners" >
            <div className="container  m-auto" >
                <div className="parts-cont">
                    <div className="partss">
                        <div className="relative flex  w-full flex-col items-center justify-center overflow-hidden ">
                            <Marquee pauseOnHover className="[--duration:20s]">
                                {parts.map((review, index) => (
                                    <ReviewCard key={index} {...review} />
                                ))}
                            </Marquee>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
