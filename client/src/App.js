import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";
import RecipeCreate from "./components/RecipeCreate";
import RecipeDetails from "./components/RecipeDetails";
import NavBar from "./components/NavBar";
import CategoryCreate from "./components/CategoryCreate";
import IngredientCreate from "./components/IngredientCreate";
import RecipeEdit from "./components/RecipeEdit";
import StepsEdit from "./components/StepsEdit";
import IngredientsEdit from "./components/IngredientsEdit";
import NameEdit from "./components/NameEdit";
import CategoryEdit from "./components/CategoryEdit";
import ServingsEdit from "./components/ServingsEdit";
import ImgEdit from "./components/ImgEdit";
//ImgEdit.jsx

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

export default App;
