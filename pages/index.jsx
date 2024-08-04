import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import BasicLayout from "@/layouts/BasicLayout";
import HomePage from "./home";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <BasicLayout>
      <HomePage />
    </BasicLayout>
  );
}
