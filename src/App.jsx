import Random from "./component/Random";
import Tag from "./component/Tag";



export default function App() {

  return (
    <div className="w-full h-screen flex flex-col background px-2 overflow-x-hidden">
      <div className="mt-7
      ">
      <h1 className="bg-white rounded-md py-4 text-center text-2xl font-bold">Random GIFS</h1>
      <div className="flex flex-col gap-5 w-full  items-center">
        <Random/>
        <Tag/>
      </div>
      </div>
    </div>
  );

}
