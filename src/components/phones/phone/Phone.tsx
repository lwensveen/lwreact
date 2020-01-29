import React, { ReactElement } from "react";
import { Box, Card, CardContent, CardHeader, Typography } from "@material-ui/core";

export default function Phone(props: any): ReactElement {
    console.log(props)
    return (
        <a href={'/examples/webshop/shop/product/' + props.fixUrl(props.phone.brand + props.phone.model) + '/' + props.phone.id}>
            <Card className="phone-card">
                <Box display="flex" flexDirection="column" alignItems="center">
                    <CardHeader/>

                    <img src={props.phone.images.front} alt={props.phone.phonetitle}/>

                    {/*{props.phone.phonecolors.map(((color) => <Chip color={color.color}>{color.color}</Chip>))}*/}

                    <CardContent>
                        <CardHeader title={props.phone.brand} subheader={props.phone.model}/>
                        <Typography variant="h4">
                            € 46,50
                        </Typography>
                        <Typography component="p">
                            Bijbetaling toestel € 59,00 excl. eenmalige kosten 5 GB + 120 min. bellen
                        </Typography>
                    </CardContent>
                </Box>
            </Card>
        </a>
    )
}
