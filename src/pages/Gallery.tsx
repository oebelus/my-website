import { Helmet } from "react-helmet-async";
import styles from "../utils/style";
import { gallery, websites } from "../utils/constants";
import { Link } from "react-router-dom";

export default function Misc() {

    return (
        <div className='dark:bg-[#11181A] min-h-screen'>
            <Helmet>
                <title>gallery;</title>
            </Helmet>

            <div className={`${styles.flexStart} w-full mb-4`}>
                <div className={`w-full xl:max-w-[1000] `}>
                    <div className={`${styles.boxWidth} px-8 py-6 dark:text-gray-300`}>
                        <h3 className="text-2xl">This is dedicated to everything else I want to share;</h3>
                    </div>

                    <div className="relative flex py-5 items-center">
                        <div className="flex-grow border-t border-gray-400"></div>
                        <span className="text-3xl font-semibold flex-shrink mx-4 dark:text-gray-400"><span className="text-violet-600">{`>`}</span> Misc:</span>
                        <div className="flex-grow border-t border-gray-400"></div>
                    </div>

                    <div className="lg:grid lg:grid-cols-5">
                        <div className="mt-5 col-span-3">
                            {gallery.map((item) => (
                                <Link to={`/gallery/${item.id}`} key={item.id} className="cursor-pointer w-[90%] rounded-lg flex flex-col mx-auto mt-4 dark:bg-zinc-800 bg-violet-200 p-4 md:p-6">
                                    <h3 className="dark:text-white md:text-2xl text-xl">{item.name}</h3>
                                    <p className="dark:text-gray-300 text-gray-600">{item.description}</p>
                                </Link>
                            ))}
                            <div className="md:px-20 px-6 mt-4">
                                <p className="dark:text-white text-lg">{"{ "}Will add more stuff soon :D{" }"}</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative flex py-5 items-center">
                        <div className="flex-grow border-t border-gray-400"></div>
                        <span className="text-3xl font-semibold flex-shrink mx-4 dark:text-gray-400"><span className="text-violet-600">{`>`}</span> My other live websites:</span>
                        <div className="flex-grow border-t border-gray-400"></div>
                    </div>

                    <div className={`${styles.boxWidth} px-8 py-6 dark:text-gray-300`}>
                        <h3 className="text-lg">Beware, some of them are kinda wonky, but I'd like to share them anyways ;)</h3>
                    </div>

                    <div>
                        {websites.map(website => (
                            <p className="ml-2 md:ml-10 px-8 dark:text-gray-300 text-lg">- <a href={website.link} className="underline dark:text-violet-300">{website.name}:</a> {website.description}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
