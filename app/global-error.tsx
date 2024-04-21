'use client'

import styles from "./global-error.module.scss";
import Link from "next/link";

export default function GlobalError({
                                        error,
                                        reset,
                                    }: {
    error: Error
    reset: () => void
}) {
    console.log(error)

    return (
      <html>
        <body>
            <section className={`${styles.page}`}>
              <h1 className={`title`}> Something went wrong, sorry :( </h1>
              <section
                className={`flex flex-col justify-center items-center gap-5 mt-10`}
              >
                <section
                  className={`flex flex-col justify-center items-center gap-1`}
                >
                  <p>
                    Please use the button below to go back to the{" "}
                    <Link className={`link`} href={"/"}>
                      home page
                    </Link>
                  </p>
                  <p>
                    You can also use the navigation bar or footer to find a
                    specific page
                  </p>
                </section>
                <button className={`${styles.button}`}>
                  <Link className={`link`} href={"/"}>
                    Home page
                  </Link>
                </button>
              </section>
            </section>
        </body>
      </html>
    );
}
