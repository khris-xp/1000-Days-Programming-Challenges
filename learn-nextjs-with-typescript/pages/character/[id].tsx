import { GetServerSideProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import imageLoader from "../../imageLoader";
import { Character } from "../../type.confing";
import styles from "../../styles/Character.module.css";

function CharacterPage({ character }: { character: Character }) {
    const router = useRouter();

    return (
        <div className={styles.container}>
            <h1>{character.name}</h1>

            <Image loader={imageLoader} src={character.image} alt={character.name} width="200" height="200" />
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const res = await fetch(
        `https://rickandmortyapi.com/api/character/${context.query.id}`
    );
    const character = await res.json();

    return {
        props: {
            character,
        },
    };
};

export default CharacterPage;