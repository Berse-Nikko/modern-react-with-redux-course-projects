import Accordion from "../components/Accordion"

const AccordionPage = () => {
  const items = [
    {
      id: Math.floor(Math.random() * 9999),
      label: "React is fun",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio ipsa culpa veritatis nobis perferendis quam sit nostrum laudantium laborum tenetur!",
    },
    {
      id: Math.floor(Math.random() * 9999),
      label: "React is not really hard",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio ipsa culpa veritatis nobis perferendis quam sit nostrum laudantium laborum tenetur!",
    },
    {
      id: Math.floor(Math.random() * 9999),
      label: "React is very easy to understand",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio ipsa culpa veritatis nobis perferendis quam sit nostrum laudantium laborum tenetur!",
    },
  ]

  return <Accordion items={items} />
}
export default AccordionPage
