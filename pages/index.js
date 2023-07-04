import Head from "next/head";
import styles from "../styles/Home.module.css";
import Banner from "../components/banner";
import Card from "../components/cards";
import coffeeStoresData from "../data/coffee-stores.json";
// import Image from "next/image";

// Server Side Rendering

export async function getStaticProps(context) {
  // console.log("server side")
  return {
    props: {
      coffeeStores: coffeeStoresData,
    }, // will be passed to the page component as props
  };
}
// Client Side Rendering

export default function Home(props) {
  // console.log("props", props);
  // console.log("client side");
  const handleOnBannerBtnClick = () => {
    console.log("Hi My Frnd");
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Connoisseur</title>
      </Head>

      <main className={styles.main}>
        <Banner
          buttonText="View stores nearby"
          handleClick={handleOnBannerBtnClick}
        />
        {/* <div className={styles.heroImage}>
          <Image src="/images/hero-image.png" width={900} height={500} />;
        </div> */}

        {props.coffeeStores.length > 0 && (
          <>
            <h2 className={styles.heading2}>List Of Coffee Stores</h2>

            <div className={styles.cardLayout}>
              {props.coffeeStores.map((coffeeStore) => {
                return (
                  <Card
                    key={coffeeStore.id}
                    className={styles.card}
                    name={coffeeStore.name}
                    imgUrl={coffeeStore.imgUrl}
                    href={`/coffee-store/${coffeeStore.id}`}
                  />
                );
              })}
            </div>
          </>
        )}
      </main>
    </div>
  );
}
