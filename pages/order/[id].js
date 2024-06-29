import Layout from "@/components/Layout";
import OrderDetail from "@/components/OrderDetail";
import Head from "next/head";
import React from "react";

function Order() {
  return (
    <>
      <Head>
        <title>Order Details </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <OrderDetail />
      </Layout>
    </>
  );
}

export default Order;
