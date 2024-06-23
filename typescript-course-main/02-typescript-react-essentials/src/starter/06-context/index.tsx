import { useTheme, ThemeProvider } from "./context";

function ParentComponent() {
  return (
    <ThemeProvider>
      <Component />
    </ThemeProvider>
  )
}


function Component() {
  const context = useTheme();
  console.log(context)





  return (
    <div>
      <button onClick={
        () => {
          if(context.theme === "dark"){
            context.setTheme("system")
            return
          } else {
            context.setTheme("dark")
          }
        }
      } className="btn btn-center">Change Theme</button>
    </div>
  );
}
export default ParentComponent;
