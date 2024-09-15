export default function Loading(show) {
    return (
        <div>
            {show && (
                <div className="loading">
                    <div className="loading__spinner"></div>
                    <p className="loading__text">Cargando...</p>
                </div>
            )}
        </div>
    );
}
