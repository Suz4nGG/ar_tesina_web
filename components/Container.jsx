import Head from "next/head"
import Navigation from "./Navigation"
export const Container = (props) => {
  return <div>
    <Head>
      <title>Next.js</title>
    </Head>
    <Navigation />
    <div>
      {props.children}
    </div>
  </div>
}