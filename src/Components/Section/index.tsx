import * as React from "react";
import { FunctionComponent } from "react";
import * as Styles from "./styles";

const Section: FunctionComponent<any> = ({ title, children }) => {
    return (
        <Styles.Container>
            <Styles.Title>{title}</Styles.Title>
            <Styles.Grid>{children}</Styles.Grid>
        </Styles.Container>
    )
};

export default Section;