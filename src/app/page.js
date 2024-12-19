import FirstBox from "@/components/firstpage/FirstBox";
import Post from "@/components/firstpage/Post";
import SecondBox from "@/components/firstpage/SecondBox";

export default function Home() {

const data = [
  {
    id: 1,
    text: "Kichu Ekta Likhlam",
    details: "Join Factoryze"
  },
  {
    id: 2,
    text: "Kichu Ekta Likhlam 2",
    details: "Join Factoryze 2"
  },
  {
    id: 3,
    text: "Kichu Ekta Likhlam 3",
    details: "Join Factoryze 3"
  },
  {
    id: 4,
    text: "Kichu Ekta Likhlam 4",
    details: "Join Factoryze 4"
  },
  {
    id: 5,
    text: "Kichu Ekta Likhlam 5",
    details: "Join Factoryze 5"
  },
]

  return (
    <div>
    <div className="text-5xl text-center p-6 flex flex-col gap-4">
      {data.map((d, key)=>{
        return <Post key={key} x={d}/>
      })}
    </div>
    <div className="text-5xl text-center p-6 flex flex-col gap-4">
      {data.map((d, key)=>{
        return <a key={key} href={"/about/"+d.id}>{d.text}</a>
      })}
    </div>
    <a href="/about">Go To About</a>
  </div>
  );
}
