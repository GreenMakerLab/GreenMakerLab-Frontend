
function AboutUs() {
    return(
        <section id="about-us" className="p-5 bg-white m-4 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Sobre nós:</h2>
        {/* <p>Informações sobre o grupo...</p> */}
        <div id="address" className="mt-4">
            <h3 className="text-xl font-semibold mb-2">Endereço:</h3>
            <p className="leading-9">
                IFPB Campus Sousa - SEDE
                <br/>Sousa - PB
                <br/>Rua Presidente Tancredo Neves, s/n Jardim Sorrilândia
                <br/>CEP: 58805-345
            </p>
            <h3 className="text-xl font-semibold mt-4 mb-2">Contatos:</h3>
            <h4 className="font-normal">
                Celular:
                <br/>E-mail: <a id="email" href="mailto:greenmakerifpb@gmail.com"
                    className="text-blue-600 hover:text-blue-400 transition duration-200">greenmakerlab@ifpb.edu.br</a>
            </h4>
            <h3 className="text-xl font-semibold mt-4 mb-2">Localização:</h3>
            <iframe
                className="w-full h-96 border-0 rounded-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.9174361298847!2d-38.235355929762534!3d-6.779902751286702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7a45b887beb6173%3A0x52b84e871806379d!2sIFPB%20-%20Campus%20Sousa!5e0!3m2!1spt-BR!2sbr!4v1724121094456!5m2!1spt-BR!2sbr"
                allowFullScreen="" loading="lazy" ></iframe>
        </div>
    </section>
    )
}

export default AboutUs;