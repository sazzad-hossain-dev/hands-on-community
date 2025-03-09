import Footer from "./ui/Footer";
import Header from "./ui/Header";

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
