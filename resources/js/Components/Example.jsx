const { createRoot } = require("react-dom/client");

function Example() {
    return <div className="text-red-500">Hello World from React</div>;
}

if (document.querySelector("#app")) {
    const container = document.querySelector("#app");
    const root = createRoot(container);
    root.render(<Example />);
}
