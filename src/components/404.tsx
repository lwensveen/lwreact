import Box from "@material-ui/core/Box";
import React from "react";
import { Card, CardContent } from "@material-ui/core";

export default function NoMatch({location}: any) {
    return (
        <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center">
            <Card>
                <CardContent>
                    <h2>404</h2>
                    <p>{location.pathname}</p>
                </CardContent>
            </Card>
        </Box>
    )
}
