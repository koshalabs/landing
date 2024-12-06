import Header from "../_ui/Sections/Header";

export default function Layout({children}) {
  return (
    <>
    <Header isOtherPage={true} />
    <main className="flex justify-center overflow-x-hidden mt-[85px] text-koshaBlack">
      <div className="w-svw max-w-[1440px] px-4 footerPhoneBreak:px-10">
        {children}
      </div>
    </main>
    </>
  );
}