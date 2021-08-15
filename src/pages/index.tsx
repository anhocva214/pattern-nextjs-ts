import PrintName from "@components/PrintName";
import MainLayout from "@layouts/MainLayout";


export default function Home() {
  return (
    <>
      <MainLayout>
        <i className="fa-solid fa-user"></i>
        <h1>Hi <PrintName name={"hello world"} /> </h1>
        <h1>Example heading <span className="badge bg-secondary">New</span></h1>
        <div className="container">
          <div className="form-input"></div>
        </div>
      </MainLayout>
    </>
  )
}
