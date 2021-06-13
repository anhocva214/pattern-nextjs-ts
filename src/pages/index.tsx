import PrintName from "@/components/PrintName";
import MainLayout from "@/layouts/MainLayout";


export default function Home() {
  return (
    <>
      <MainLayout>
        <h1>Hi <PrintName name={"hello world"} /> </h1>
      </MainLayout>
    </>
  )
}
