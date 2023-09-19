import Directory from "./components/directory/Directory"

const App = () => {
  const categories = [
    {
      id: 1,
      title: "Hats",
      imagePath: "https://i.ibb.co/cvpntL1/hats.png",
    },
    {
      id: 2,
      title: "Jackets",
      imagePath: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      id: 3,
      title: "Sneakers",
      imagePath: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
    {
      id: 4,
      title: "Womens",
      imagePath: "https://i.ibb.co/GCCdy8t/womens.png",
    },
    {
      id: 5,
      title: "Mens",
      imagePath: "https://i.ibb.co/R70vBrQ/men.png",
    },
  ]

  return (
    <div className="App">
      <Directory categories={categories} />
    </div>
  )
}

export default App
