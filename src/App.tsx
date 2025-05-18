import { Clock, HeartPulse, Users } from "lucide-react";
import { Timeline } from "./components/Timeline";

const timelineDataDrums = [
  {
    title: "Quando tudo começou",
    description: "É! Começou com um simples olhar, com um toque no ombro e um oii, que deu coragem e conteceu com mais sequencia, até chegar em uma reação de um storys",
    icon: <HeartPulse size={23} />,
    align: "left",
  },
  {
    title: "A reação a um storys",
    description: "Quem diria que uma reação de um storys, uma reação cheia de duvidas 'será que ela vai me responder?´ desenvolveu uma conexão tão grande e um amor tão forte que eu não consigo explicar",
    icon: <Clock size={20} />,
    align: "right",
  },
  {
    title: "O dia da Coragem",
    description: "Em um dia, 10 minutos antes do natal, eu mando uma menssagem, e vc amor me responde depois, e ai chegar 00:00 junto com o felz natal, veio ahh eu vou falar, e foi a primeira vez que falei o que sentia a tempos de observação por você",
    icon: <Users size={20} />,
    align: "left",
  },

  {
    title: "O Início do Percurso...",
    description: "Simm!!! Começamos a orar, o seu sim foi a cura de um machucado e uma resposta de oração, feita no passado em um quarto em um pior dia de natal que havia passado. Te conhecer e ter vc amor é a melhor esperiencia que e o maior presente que Deus me deu",
    icon: <Users size={20} />,
    align: "right",
  },
  {
    title: "O Percurso...",
    description: "Ficamos tão próximos em tão pouco tempo, nos conctamos de uma forma, que não dar para explicar, porém lembrar: A primeira vez que marcamos de nos encontrar no volei, Lembra? saí do ensaio correndo para te ver, e você estava lá, com aquele abraço, ficamos o jogo todo colados e o povo não entendendo nada rsrs",
    icon: <Users size={20} />,
    align: "left",
  },
  {
    title: "Continuação...",
    description: "Quando fomos tomar um banho de noite na prai, foi a primeira vez que vi o seu sorriso genuio, e parei para pensar: Cara que sortudo sou, não posso perder de jeito nenhum, Foi a melhor noite que tive, olhar para vc se divertindo e jogando agua em mim, e ver os seus olhos brilhando, sem óculos no mar, foi umas das melhores experiencias que tive amoor",
    icon: <Users size={20} />,
    align: "right",
  },
  {
    title: "Continuação... Macahé",
    description: "Mas antes do macahé, aconteceu algo que nos supreendeu lembra ? o que ? A nossa conexão, estavamos comendo um sorvete, e apareceu um homem vendendo paçoca, e esse homem estava todo para baixo falando besteiras, e nos olhamos e com um só olhar eu entedi o que vc quis dizer e fiz...",
    icon: <Users size={20} />,
    align: "left",
  },
  {
    title: "Finalmente Macahé",
    description: "Simm!!! até um certo dia, foi o dia mais feliz da minha vida, falo isso pq vc me faz ser sentir amado de uma forma que eu nuca fui... e esse dia com vc nos meus ombros dormindo de mãos dadas comigo, eu nuca vou esquecer, o tempo parou para mim, os meninos falando eu eu entendendo nada, e logo após saímos de mãos dadas, e eu recebi o primeiro beijo na boxexa de mosinho rsrs, te amar é o maior presente que Deus me deu, em um momento que eu não via nada em mim, vc me mostrou e me mostra como é ser amado por uma pessoa",
    icon: <Users size={20} />,
    align: "right",
  },
  {
    title: "...",
    description: "Amorr, tem mais coisa nessa linha do tempo que temos e vou fazer a parte dois rsrs. Mas amor, talvez vc estja cansada de palavras e palavras, mas saíba que, quando eu acordo todos os dias eu lembro que tenho uma baixinha para tirar um sorriso e irritar, rsrs lembro que tenho que creser o mais rápido possivel papar poder busca-la pra mim, as vezes bate umas inseguranças, porque a minha cabeça fica: 'elá é perfeita de mais, será que eu mereço isso mesmo`, 'não tenho nada, porque ela me escolheu'. Me perdoe se eu agi de uma forma que vc não esperava Mais sabia amor, as minhas atitudes vão deminstrar que eu quero vc para minha vida toda, pois é isso que eu quero.",
    icon: <Users size={20} />,
    align: "left",
  },

  {
    title: "Futuro...",
    description: "Como assim futuro? Amor, eu quero casar com vc, eu quero chegar do trabalho com a mente cansada e com o seu abraço sair tudo sabe, quero dar um abraço em nossa filha e dizer: 'filhaaa papai chegou' e olhar tudo em nossa volta e tudo que conquistamos juntos e dizer: 'Amor conseguimos!!!' Esse é o meu maior sonho e eu vou lutar por isso, debaixo da graças de Deus!!! e digo e sempe vou dizer: Amor eu te amo, e te amo muitooo, mesmo vacilando em algumas atitudes que hj estar doendo pq eu quero, mas saiba amor, eu te amo e eu vou agir quando eu devo agir e vc sabe disso minha princesa. Amo vc Amor!",
    icon: <Users size={20} />,
    align: "right",
  },
];

function App() {
  return (
    <section className="w-full h-svh p-1 py-10 space-y-15">
      <p className="text-center text-xl font-semibold text-pink-500">Linha do Tempo</p>
      <div className="flex flex-col md:flex-row md:flex-wrap">
        {timelineDataDrums.map((item, index) => (
          <Timeline
            key={index}
            title={item.title}
            description={item.description}
            icon={item.icon}
            align={item.align as "left" | "right"}
          />
        ))}
      </div>
    </section>
  )
}

export default App
