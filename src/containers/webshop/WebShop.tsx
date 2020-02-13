import React, { ReactElement } from "react";
import Banner from "../../components/webshop/Banner";
import CtaButtons from "../../components/webshop/CtaButtons";
import ContentArea from "../../components/webshop/ContentArea";
import PromoSection from "../../components/webshop/PromoSection";

export default function WebShop(): ReactElement {
    return (
        <>
            <Banner/>
            <CtaButtons/>
            <ContentArea/>
            <PromoSection/>
        </>
    );
}
