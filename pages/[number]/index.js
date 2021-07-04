import { useRouter } from "next/router";
export async function getStaticPaths() {
  return {
    paths: [
      { params: { number: `1`, locale: "es" } },
      { params: { number: `1`, locale: "en" } },
      { params: { number: `2`, locale: "es" } },
      { params: { number: `2`, locale: "en" } },
    ],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const { number } = params;
  return {
    props: {
      message: `working ${number}`,
    },
  };
}

export default function PageComponent({ message }) {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      The passed message is <strong>{message}</strong> with the locale{" "}
      <strong>{router.locale}</strong>
    </div>
  );
}
