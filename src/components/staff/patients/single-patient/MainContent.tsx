import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ActivitySquareIcon, Ruler, WeightIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import mountains from "../../../../../public/mountains.avif";

type Props = {};

const MainContent = (props: Props) => {
    return (
        <div className="w-full md:w-[70%] flex flex-col gap-4 p-8">
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
                    </div>
                </CardHeader>
                <CardContent className="pt-4 relative min-h-80">
                    <div className="flex gap-4">
                        <div className="-mt-14">
                            <Image
                                alt="Mountains"
                                src={mountains}
                                placeholder="blur"
                                quality={100}
                                className="rounded-md w-28 h-28"
                            />
                        </div>

                        <div>
                            <h1 className="text-xl font-extrabold">
                                Mical Doe
                            </h1>
                            <h2 className="font-bold">#p - 123456</h2>
                            <h2 className="font-normal">
                                Joined: {new Date().toLocaleString()}
                            </h2>
                        </div>
                    </div>
                    <div className="mt-8">
                        <h1 className="text-xl font-bold">Some Note</h1>
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

            <Card className="w-full">
                <CardHeader className="border-b">
                    <div className="w-full">
                        <h1 className="font-bold">Current Details:</h1>
                    </div>
                </CardHeader>
                <CardContent className="">
                    <div className="flex flex-row justify-between border-b py-4">
                        <div>
                            <p className="text-gray-500">Patient Name:</p>
                            <p className="font-semibold">Mical Doe</p>
                        </div>
                        <div className="text-right">
                            <p className="text-gray-500">Patient ID:</p>
                            <p className="font-semibold">123456</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-8">
                        <div className="flex flex-col justify-center items-center py-6">
                            <WeightIcon strokeWidth={1} />
                            <small>Weight</small>
                            <p className="font-semibold">230 lbs</p>
                        </div>

                        <div className="flex flex-col justify-center items-center py-6 border-l">
                            <Ruler strokeWidth={1} />
                            <small>Height</small>
                            <p className="font-semibold">6&apos;1</p>
                        </div>
                        <div className="flex flex-col justify-center items-center py-6 border-l">
                            <ActivitySquareIcon strokeWidth={1} />
                            <small>BMI</small>
                            <p className="font-semibold">23.64</p>
                        </div>
                    </div>
                    <div className="border-t pt-4">Smoking status: No</div>
                </CardContent>
            </Card>
        </div>
    );
};

export default MainContent;
