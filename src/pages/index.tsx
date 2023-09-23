import { Grid } from "@mui/material";
import Head from "next/head";
import useSWR from "swr";

import { ProductList } from "../components/ProductList";
import { CartView } from "../components/CartView";
import { ProductsCategories } from "../components/ProductCategories";
import { useState } from "react";
import { FooterBar } from "../components/FooterBar";

export default function Home () {

  const [category, setCategory] = useState("");

  return (
      <>
        <Head>
          <title>SVZ POS</title>
        </Head>
        
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Categories onCategoryChange={(category) => setCategory(category)}/>
            <Products category={category}/>
          </Grid>
          <Grid item xs={4}>
            <CartView/>
          </Grid>
        </Grid>
        
      </>

    );
}

const fetcher = (url:string) => fetch(url).then(r => r.json())

type CategoryProps = {
  onCategoryChange: (category: string) => void;
}

function Categories({onCategoryChange}:CategoryProps) {
  const { data, isLoading } = useSWR('/api/categories', fetcher)
  return <ProductsCategories isLoading={isLoading} onCategoryChange={onCategoryChange} categories={data}/>
}

type ProductProps = {
  category: string
}

function Products({category} : ProductProps) {
  const { data, isLoading } = useSWR(`/api/${category}/products`.replaceAll("//","/"), fetcher)
  return <ProductList isLoading={isLoading} products={data} />
}
