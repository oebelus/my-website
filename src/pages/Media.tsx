import { Helmet } from "react-helmet-async";
import styles from "../utils/style";
import { games, media_books } from "../utils/constants";
import MusicPlayer from "../components/MusicPlayer";

export default function Media() {

  return (
    <div className="mb-10">
      <Helmet>
        <title>media;</title>
      </Helmet>
      <div className={`${styles.flexStart} w-full`}>
        <div className={`${styles.boxWidth}`}>
          <main className="mt-10 text-xl dark:text-gray-200 text-gray-700">

            {/* Section Divider */}
            <div className="relative flex items-center py-5">
              <div className="flex-grow border-t border-gray-400" />
              <span className="mx-4 flex-shrink text-3xl font-semibold">
                <span className="text-violet-600">&gt;</span> Media:
              </span>
              <div className="flex-grow border-t border-gray-400" />
            </div>

            {/* Currently Section */}
            <div className="p-4">
              <div className="p-4">
                <div className="bg-violet-500 p-4 mt-4 rounded-md">
                  <h3>Music</h3>
                </div>

                <div className="col-span-2 mt-4">
                    <p className="md:px-8 text-2xl dark:text-gray-300 text-gray-600"><span>{"> "}</span> The music I am currently listening to non-stop:</p>
                    <MusicPlayer />
                </div>
              </div>

              <div className="p-4">
                <div className="bg-violet-500 p-4 mt-4 rounded-md">
                  <h3>Games</h3>
                </div>

                <div className="col-span-2 mt-4">
                  <p className="px-8 mb-3 text-2xl dark:text-gray-300 text-gray-600"><span>{"> "}</span>Currently playing: </p>
                  <div className="md:px-8">
                    {games.map((game) => (
                      <div className="flex mb-2 border-2 border-zinc-700 rounded-md">
                        <div>
                          <img className="h-52 w-40" src={game.image} alt={game.id} />
                        </div>
                        <div className="flex flex-1 flex-col justify-center items-center text-center">
                          <h4 className="p-4">{game.name}</h4>
                          <p className="text-sm">{game.comment}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* <div className="p-4">
                <div className="bg-violet-500 p-4 mt-4 rounded-md">
                  <h3>Series</h3>
                </div>

                <div className="col-span-2 mt-4">
                    <p className="px-8 text-2xl dark:text-gray-300 text-gray-600"><span>{"> "}</span> The music I am currently listening to non-stop:</p>
             
                </div>
              </div> */}

              <div className="p-4">
                <div className="bg-violet-500 p-4 mt-4 rounded-md">
                  <h3>Books</h3>
                </div>

                <div className="col-span-2 mt-4 flex">
                    {media_books.map((item) => (
                      <div className="p-4">
                        <div>
                          <p>{item}</p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}