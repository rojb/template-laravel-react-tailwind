const { createRoot } = require("react-dom/client");

const Prueba = ({ data }) => {
    return <h1>Esta es una prueba con props. Props: {data}</h1>;
};

export default Prueba;

if (document.querySelector("#prueba")) {
    const data = document.querySelector("#prueba").getAttribute("data");
    const container = document.querySelector("#prueba");
    const root = createRoot(container);
    root.render(<Prueba data={data} />);
}
