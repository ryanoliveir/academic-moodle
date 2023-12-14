import NavBar from "@/components/NavBar";
import Head from "next/head"

const HomePage = () => {

    return (
        <div className="flex flex-col h-screen">
        
            <Head>
                <title>Página Inicial</title>
            </Head>
            <NavBar />

            <section className="flex flex-1 text-center bg-gray-900">
                <div className="w-full text-4xl m-10">
                    Ambiente Virtual de Aprendizagem Moodle do Câmpus JCR
                </div>
                
            </section>
        </div>
    )
}


export default HomePage;