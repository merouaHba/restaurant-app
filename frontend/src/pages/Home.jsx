import {AboutUs, BookTable, CookingIngredients, Hero, Menu, Reviews, Special, Statics} from "../components"

const home = () => {
  return (
    <>
      <Hero /> 
      <AboutUs />
      <Special />
      <Menu />
      <BookTable />
      <CookingIngredients />
      <Statics />
      <Reviews/>
    </>
  )
}

export default home