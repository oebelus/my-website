import hljs from "highlight.js/lib/core";
import scheme from "highlight.js/lib/languages/scheme";

hljs.registerLanguage("scheme", scheme);

export default function Fractals() {
    return (
        <div className="font-sans mb-4 text-lg">
            Yesterday, I enthusiastically reached the part of the "Systematic Program Design" course that covers generative recursion (a.k.a. fractals), and since I like some challenge, I tried to implement the <b className="text-base font-sans">Sierpinski</b> Triangle and Carpet by myself, Before going through the course material—while still following the design recipe, of course. <br /><br />

            Here is the design recipe: <br /><br />

            <pre className="language-scheme rounded-md bg-gray-200 dark:bg-zinc-800 p-4 overflow-x-auto">
                <code>
{`(define (genrec-fn d)
  (cond [(trivial? d) (trivial-answer d)]
        [else
         (... d 
              (genrec-fn (next-problem d)))]))`}
                </code>
            </pre>
            <br />

            The function to implement the Sierpinski Triangle being: <br /><br />

            <pre className="language-scheme rounded-md bg-gray-200 dark:bg-zinc-800 p-4 overflow-x-auto">
                <code>
{`(require 2htdp/image)

(define BASE 10)

(define (sierpinski s)
  (if (>= BASE s)
      (triangle BASE "outline" "red")
      (overlay (triangle s "outline" "red")
               (local [(define sub (sierpinski (/ s 2)))]
                 (above sub
                        (beside sub sub))))))`}
                </code>
            </pre>
            <br />

            And the result was, just, S-T-U-N-N-I-N-G: <br /><br />

            <div className="flex justify-center">
                <img src="https://i.imgur.com/wLyZzju.png" alt="triangle" className="max-w-full h-auto" />
            </div>
            <br />

            Step 1 done. It was easy. But when I tried to implement the Sierpinski carpet, I generated a lot of patterns before reaching the final result. <br /><br />

            I don't call them failed attempts since they generates very beautiful Arabesques. Here are some examples: <br /><br />

            <h3 className="text-2xl font-sans">/ A giant stack of Roman Columns: </h3><br />

            <pre className="language-scheme rounded-md bg-gray-200 dark:bg-zinc-800 p-4 overflow-x-auto">
                <code>
{`(define (carpet s)
  (if (>= BASE s)
      (square BASE "outline" "red")
      (overlay (square s "outline" "red")
               (local [(define sub (carpet (/ s 2)))]
                 (above (beside sub sub sub)
                        (beside sub (square (/ s 2) "outline" "red") sub)
                        (beside sub sub sub))))))`}
                </code>
            </pre>
            <br />

            <div className="flex justify-center">
                <img src="https://i.imgur.com/OUQqJen.png" alt="columns" className="max-w-full h-auto" />
            </div>
            <br />

            <h3 className="text-2xl font-sans">/ A vine: </h3><br />

            <pre className="language-scheme rounded-md bg-gray-200 dark:bg-zinc-800 p-4 overflow-x-auto">
                <code>
{`(define (vine s)
  (if (>= BASE s)
      (square BASE "outline" "green")
      (overlay (square s "outline" "green")
               (local [(define sub (vine (/ s 2)))]
                 (above (beside sub sub sub)
                        (beside sub sub)
                        (beside sub sub))))))`}
                </code>
            </pre>
            <br />

            <div className="flex justify-center">
                <img src="https://i.imgur.com/JzSOdlW.png" alt="vine" className="max-w-full h-auto" />
            </div>
            <br />

            <h3 className="text-2xl font-sans">/ A Chip (XD): </h3><br />

            <pre className="language-scheme rounded-md bg-gray-200 dark:bg-zinc-800 p-4 overflow-x-auto">
                <code>
{`(define (chip s)
  (if (>= BASE s)
      (square BASE "outline" "darkgreen")
      (overlay (square s "outline" "darkgreen")
               (local [(define sub (chip (/ s 2)))]
                 (above (beside sub sub)
                        (beside sub sub))))))`}
                </code>
            </pre>
            <br />

            <div className="flex justify-center">
                <img src="https://i.imgur.com/qbwYJhZ.png" alt="chip" className="max-w-full h-auto" />
            </div>
            <br />

            And finally, after finding out what has been generating these abominations and not a clean Sierpinski Carpet, I got this result: <br /><br />

            <pre className="language-scheme rounded-md bg-gray-200 dark:bg-zinc-800 p-4 overflow-x-auto">
                <code>
{`(define (sierpinski-carpet s)
  (if (>= BASE s)
      (square s "solid" "red")
      (overlay (square s "outline" "red")
               (local [(define sub (sierpinski-carpet (/ s 3)))
                       (define blk (square (/ s 3) "solid" "white"))]
                 (above (beside sub sub sub)
                        (beside sub blk sub)
                        (beside sub sub sub))))))`}
                </code>
            </pre>
            <br />

            And TAA-DAAAA: <br /><br />

            <div className="flex justify-center">
                <img src="https://i.imgur.com/b2HJ1oU.png" alt="sierpinski carpet" className="max-w-full h-auto" />
            </div>
        </div>
    )
}