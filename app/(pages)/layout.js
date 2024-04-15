import Footer from "@/components/Footer";
import Header from "@/components/Header";



function PageLayout({ children }){
    return(
        <>
            <Header />

            <main className="w-100 mt-5 pt-5">
                {children}
            </main>

            <Footer />
        </>
    )
}

export default PageLayout;