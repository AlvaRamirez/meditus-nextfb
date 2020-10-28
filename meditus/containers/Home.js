import { Actividades, Videos, Nosotros, Contacto, Inicio, Footer } from 'components' 

const Home = () => {
    return (
        <div className="fondo">
            <>
                <Inicio />
                <Actividades />
                <Videos />
                <Nosotros />
                <Contacto />
                <Footer />
            </>
        </div>
    )
}

export default Home

