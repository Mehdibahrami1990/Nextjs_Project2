import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import cls from "classnames";
import coffeeStoresData from "../../data/coffee-stores.json";
import styles from "../../styles/coffee-store.module.css";

export function getStaticProps({ params }) {
  //  const params = props.params
  // console.log(params)
  return {
    props: {
      coffeeStore: coffeeStoresData.find((coffeeStore) => {
        return coffeeStore.id.toString() === params.id;
      }),
    },
  };
}
export function getStaticPaths() {
  const paths = coffeeStoresData.map((coffeeStore) => {
    return {
      params: {
        id: coffeeStore.id.toString(),
      },
    };
  });
  return {
    paths: paths,
    // fallback: false,
    fallback: true,
  };
}

const CoffeeStore = (props) => {
  // console.log(props)
  const { name, address, neighbourhood, imgUrl } = props.coffeeStore;

  const handleUpvoteButton = () => {
    console.log("Up Vote!")
  }
  const router = useRouter();
  // console.log(router);
  if (router.isFallback) {
    return <div>Loading ....</div>;
  }
  return (
    <div className={styles.layout}>
      <Head>
        <title>{name}</title>
      </Head>

      {/* Coffee Store Page : {router.query.id} */}
      {/* <a href="/">Back to Home - a</a> */}
      <div className={styles.container}>
        <div className={styles.col1}>
          <div className={styles.backToHomeLink}>
            <Link href="/">Back To Home </Link>
          </div>
          <div className={styles.nameWrapper}>
            <h1 className={styles.name}>{name}</h1>
          </div>
          <Image
            src={imgUrl}
            width={600}
            height={360}
            className={styles.storeImg}
            alt={name}
          ></Image>
        </div>
        <div className={cls("glass", styles.col2)}>
          <div className={styles.iconWrapper}>
            <Image src="/images/icons/nearme.svg" width={24} height={24} />
            <p className={styles.text}>{address}</p>
          </div>
          <div className={styles.iconWrapper}>
            <Image src="/images/icons/place.svg" width={24} height={24} />
            <p className={styles.text}>{neighbourhood}</p>
          </div>
          <div className={styles.iconWrapper}>
            <Image src= "/images/icons/star.svg" width={24} height={24} />
            <p className={styles.text}>5</p>
          </div>
          <button onClick={handleUpvoteButton} className={styles.upvoteButton}>
            up vote!
          </button>
        </div>
      </div>
    </div>
  );
};
export default CoffeeStore;
