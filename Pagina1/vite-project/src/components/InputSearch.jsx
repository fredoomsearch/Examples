export const InputSearch = ({ valueSearch, search }) => {
    return (
        <section className="col-xxl-8 form-group mx-auto">
            <h1 className="text-center text-white">Receta</h1>
            <input type="text" placeholder="Buscar Receta" className="form-control" value={valueSearch} onChange={(e) => search(e)} />
        </section>
    )
}
                                                                                                                                                   