import { Helmet } from "react-helmet-async";
import styles from "../utils/style";
import { posts } from "../utils/constants";
import BlogCard from "../components/blog/BlogCard";

export default function Blog() {
  return (
    <div>
      <Helmet>
        <title>blog;</title>
      </Helmet>

      <div className={`${styles.flexStart} w-full`}>
        <div className={`${styles.boxWidth}`}>
          <div className={`${styles.boxWidth} md:mt-4 mt-2 p-8 dark:text-gray-300`}>
            <h3 className="md:text-xl text-lg dark:text-gray-300 text-black mb-5">
              <span className="md:text-3xl text-xl text-violet-600">{"> "}</span>Just some rambling...
            </h3>
            <div className="relative flex mt-8 md:mb-[-2%] mb-[-8%] items-center">
              <div className="flex-grow border-t border-gray-400"></div>
              <span className="md:text-3xl text-2xl font-semibold flex-shrink mx-4 dark:text-gray-400">
                <span className="text-violet-600">{`>`}</span> Blog:
              </span>
              <div className="flex-grow border-t border-gray-400"></div>
            </div>
          </div>
          <div className={`${styles.boxWidth} border-violet-600 flex flex-col gap-4 p-6 dark:text-gray-300`}>
            {
              posts.map((post) => (
                <div className="flex">
                  <BlogCard id={post.id} title={post.title} date={post.date} category={post.category} description={post.description} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}
