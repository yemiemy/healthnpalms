import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
} from "@/components/ui/card";
import { UsersIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import mountains from "../../../../public/mountains.avif";

type Props = {};

const MainContent = (props: Props) => {
    return (
        <div className="w-[70%] flex p-8">
            <Card className="w-full">
                <CardHeader className="p-0">
                    <div className="w-full relative h-40">
                        <Image
                            alt="Mountains"
                            src={mountains}
                            placeholder="blur"
                            quality={100}
                            fill
                            sizes="100vw"
                            className="object-cover rounded-md"
                        />
                        <div className="absolute w-32 h-32 top-2/3 left-6">
                            <Image
                                alt="Mountains"
                                src={mountains}
                                placeholder="blur"
                                quality={100}
                                fill
                                // sizes="100vw"
                                className="object-cover rounded-md"
                            />
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="pt-4 relative min-h-80">
                    <div className="absolute left-40 ml-2">
                        <h1 className="text-xl font-extrabold">Mical Doe</h1>
                        <h2 className="font-bold">#p - 123456</h2>
                        <h2 className="font-normal">
                            Joined: {new Date().toLocaleString()}
                        </h2>
                    </div>
                    <div className="pt-24">
                        <h1 className="text-xl font-bold">Some Nite</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Maxime mollitia, molestiae quas vel sint
                            commodi repudiandae consequuntur voluptatum laborum
                            numquam blanditiis harum quisquam eius sed odit
                            fugiat iusto fuga praesentium optio, eaque rerum!
                            Provident similique accusantium nemo autem.
                            Veritatis obcaecati tenetur iure eius earum ut
                            molestias architecto voluptate aliquam nihil,
                            eveniet aliquid culpa officia aut! Impedit sit sunt
                            quaerat, odit, tenetur error, harum nesciunt ipsum
                            debitis quas aliquid. Reprehenderit, quia. Quo neque
                            error repudiandae fuga? Ipsa laudantium molestias
                            eos sapiente officiis modi at sunt excepturi
                            expedita sint? Sed quibusdam recusandae alias error
                            harum maxime adipisci amet laborum. Perspiciatis
                            minima nesciunt dolorem! Officiis iure rerum
                            voluptates a cumque velit quibusdam sed amet
                            tempora. Sit laborum ab, eius fugit doloribus
                            tenetur fugiat, temporibus enim commodi iusto libero
                            magni deleniti quod quam consequuntur! Commodi
                            minima excepturi repudiandae velit hic maxime
                            doloremque. Quaerat provident commodi consectetur
                            veniam similique ad earum omnis ipsum saepe,
                            voluptas, hic voluptates pariatur est explicabo
                            fugiat, dolorum eligendi quam cupiditate excepturi
                            mollitia maiores labore suscipit quas? Nulla,
                            placeat. Voluptatem quaerat non architecto ab
                            laudantium modi minima sunt esse temporibus sint
                            culpa, recusandae aliquam numquam totam ratione
                            voluptas quod exercitationem fuga. Possimus quis
                            earum veniam quasi aliquam eligendi, placeat qui
                            corporis!
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default MainContent;
