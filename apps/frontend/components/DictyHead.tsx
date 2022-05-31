import Head from "next/head"

export function DictyHead() {
  return (
    <Head>
      <link rel="shortcut icon" href="favicon.ico" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta name="theme-color" content="#000000" />
      <link rel="manifest" href="manifest.json" />
      <title>dictyBase</title>
    </Head>
  )
}
