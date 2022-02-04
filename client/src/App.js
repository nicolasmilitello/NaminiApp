import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Home from "./components/Home/Home";
import RecipeCreate from "./components/RecipeCreate/RecipeCreate";
import RecipeDetails from "./components/RecipeDetails/RecipeDetails";
import NavBar from "./components/NavBar/NavBar";
import CategoryCreate from "./components/CategoryCreate/CategoryCreate";
import IngredientCreate from "./components/IngredientCreate/IngredientCreate";
import RecipeEdit from "./components/RecipeEdit/RecipeEdit";
import StepsEdit from "./components/StepsEdit/StepsEdit";
import IngredientsEdit from "./components/IngredientsEdit/IngredientsEdit";
import NameEdit from "./components/NameEdit/NameEdit";
import CategoryEdit from "./components/CategoryEdit/CategoryEdit";
import ServingsEdit from "./components/ServingsEdit/ServingsEdit";
import ImgEdit from "./components/ImgEdit/ImgEdit";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/home" component={Home} />
          <Route path="/home/:id" component={RecipeDetails} />
          <Route path="/edit/:id" component={RecipeEdit} />
          <Route path="/img/:id" component={ImgEdit} />
          <Route path="/name/:id" component={NameEdit} />
          <Route path="/category/:id" component={CategoryEdit} />
          <Route path="/servings/:id" component={ServingsEdit} />
          <Route path="/steps/:id" component={StepsEdit} />
          <Route path="/ingredients/:id" component={IngredientsEdit} />
          <Route path="/recipe" component={RecipeCreate} />
          <Route path="/category" component={CategoryCreate} />
          <Route path="/ingredient" component={IngredientCreate} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

// <Route exact path="/" component={LandingPage} />
// <Route exact path="/home">
//   <NavBar />
//   <Home />
// </Route>
// <Route path="/home/:id">
//   <NavBar />
//   <RecipeDetails />
// </Route>
// <Route path="/edit/:id">
//   <NavBar />
//   <RecipeEdit />
// </Route>
// <Route path="/img/:id">
//   <NavBar />
//   <ImgEdit />
// </Route>
// <Route path="/name/:id">
//   <NavBar />
//   <NameEdit />
// </Route>
// <Route path="/category/:id">
//   <NavBar />
//   <CategoryEdit />
// </Route>
// <Route path="/servings/:id">
//   <NavBar />
//   <ServingsEdit />
// </Route>
// <Route path="/steps/:id">
//   <NavBar />
//   <StepsEdit />
// </Route>
// <Route path="/ingredients/:id">
//   <NavBar />
//   <IngredientsEdit />
// </Route>
// <Route path="/recipe">
//   <NavBar />
//   <RecipeCreate />
// </Route>
// <Route path="/category">
//   <NavBar />
//   <CategoryCreate />
// </Route>
// <Route path="/ingredient">
//   <NavBar />
//   <IngredientCreate />
// </Route>

export default App;
