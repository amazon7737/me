import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import BasicLayout from "@/layouts/BasicLayout";
import ProjectPage from "./project1";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <BasicLayout>
      <div>홈입니다.</div>
    </BasicLayout>
  );
}
