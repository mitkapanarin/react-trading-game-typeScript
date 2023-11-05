import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Products, ProfitCalculator, SwapProfits } from "./Pages/Index";
import SideBar from "./components/SideBar/SideBar";
// interface iData {
//   name: string
//   id: number
//   age: number
// }

function App() {
  // const [count, setCount] = useState<number>(0)

  // const a: string = '10'
  // const b: number = 10
  // const c: string | number = '10'
  // const d : boolean = true

  // const sample: iData = {
  //   name : 'Joy',
  //   id: 1,
  //   age: 100
  // }

  // const [data, setData] = useState<iData>({
  //   name: "Karolina",
  //   id: 2,
  //   age: 7
  // })

  return (
    <BrowserRouter>
      <SideBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/profit-calculator" element={<ProfitCalculator />} />
          <Route path="/swap-profits" element={<SwapProfits />} />
        </Routes>
      </SideBar>
    </BrowserRouter>
  );
}

export default App;
