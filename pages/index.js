import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>A peom...</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="A special Peom to a special person" />
        <p className="description">
         A mother's love is like a warm embrace,
It's always there to comfort and to ease the pain.
It's like a gentle breeze that blows away the tears,
And fills your heart with joy and happiness.

A mother's love is like a guiding light,
It shows you the way when you're lost in the night.
It's like a safe haven where you can always hide,
And know that you're loved and cherished.

A mother's love is like a precious gem,
It's something that you should never take for granted.
It's something that you should cherish and protect,
For it is a gift that is truly priceless. <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
