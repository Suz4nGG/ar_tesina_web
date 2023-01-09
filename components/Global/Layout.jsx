import HeaderPages from "../../pages/estudiante/components/HeaderPages"
import { PageProvider } from "../../pages/context/pagesContext"
export default function Layout(props) {
  return <div className="container mx-auto sm:px-2 lg:px-4 flex min-h-full flex-col justify-center">
    <HeaderPages data={props.data}/>
    {props.children}</div>
}
