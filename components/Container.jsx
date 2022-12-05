import Navigation from "./Global/Navigation"

export const Container = (props) => {
  return <div className="mx-auto max-w-9xl">
    <Navigation />
    <div>
      {props.children}
    </div>
  </div>
}