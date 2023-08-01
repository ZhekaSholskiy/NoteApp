import {createBrowserRouter} from "react-router-dom";
import {Main} from "./Main";
import {Editor} from "./Views/Editor";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/editor",
                element: <Editor />,
            },
            {
                path: "/idea",
                element: <div>Somebody was told me</div>
            }
        ],
    },
]);