import { createRoot } from "react-dom/client"
import Main from "./Main"
import Header from "./Header"

const root = createRoot(document.getElementById("root"))

root.render(
    <>
        <Header />
        <Main />
    </>
)