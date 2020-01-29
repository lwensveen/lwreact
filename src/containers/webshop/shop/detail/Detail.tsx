import React, { ReactElement } from "react";
import { Box, Container, Toolbar } from "@material-ui/core";

export default function Detail(props: any): ReactElement {
    return (
        <Container>
            <Toolbar>Bla</Toolbar>
            <Box display="flex" flexDirection="row">
                <div>test</div>
            </Box>
        </Container>
    )
}
