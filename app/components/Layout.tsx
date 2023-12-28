import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <>
      <main className="flex-grow px-8 md:px-16 pb-8 md:max-w-[1440px] md:mx-auto">{children}</main>
      {/* <Footer /> */}
    </>
  );
}

export default Layout;
