import React, { useEffect } from 'react';

import Helmet from '~/components/Main/Helmet';
import Section, { SectionBody, SectionTitle } from '~/components/Main/Section';
import Grid from '~/components/Main/Grid';
import ProductCard from '~/components/Main/ProductCard';
import ProductView from '~/components/Main/ProductView';

import outwear_productData from '~/assets/fake-data/outwear_products';

const ProductOutwear = (props) => {
    const product = outwear_productData.getProductBySlug(props.match.params.slug);

    const relatedProducts = outwear_productData.getProducts(4);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [product]);

    return (
        <Helmet title={product.title}>
            <Section>
                <SectionBody>
                    <ProductView product={product} />
                </SectionBody>
            </Section>

            <Section>
                <SectionTitle>Khám phá thêm</SectionTitle>
                <SectionBody>
                    <Grid col={4} mdCol={2} smCol={1} gap={20}>
                        {relatedProducts.map((item, index) => (
                            <ProductCard
                                key={index}
                                img01={item.image01}
                                img02={item.image02}
                                name={item.title}
                                price={Number(item.price)}
                                slug={item.slug}
                            />
                        ))}
                    </Grid>
                </SectionBody>
            </Section>
        </Helmet>
    );
};

export default ProductOutwear;
