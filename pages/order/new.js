import Layout from "@/components/Layout";
import OrderForm from "@/components/OrderForm";
import Head from "next/head";
import React from "react";

function NewOrderPage() {
  return (
    <>
      <Head>
        <title>Create New Order </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <OrderForm />
      </Layout>
    </>
  );
}

export default NewOrderPage;