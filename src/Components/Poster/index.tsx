import * as React from 'react';
import {Link} from "react-router-dom";
import * as Styles from "./styles"


const Poster = () => {
    return (
        <Link to={"www"}>
            <Styles.Container>
                <Styles.Image/>
                <Styles.Rating>/10</Styles.Rating>
            </Styles.Container>
            <Styles.Title>G</Styles.Title>
            <Styles.Year>d</Styles.Year>
        </Link>
    );
};

export default Poster;