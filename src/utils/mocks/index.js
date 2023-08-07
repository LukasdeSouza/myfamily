import fatherSVG from '../../assets/father.svg'
import motherSVG from '../../assets/mother.svg'
import sonSVG from '../../assets/son.svg'
import daughterSVG from '../../assets/daughter.svg'

const mockMembers = [
  {
    id: 1,
    img: fatherSVG,
    name: "Membro Teste",
    description: "Membro da família etc etc etc",
    type: "Father",
  },
  {
    id: 2,
    img: motherSVG,
    name: "Membro Teste 2",
    description: "Membro da família tec tec tec",
    type: "Mother",
  },
  {
    id: 3,
    img: sonSVG,
    name: "Membro Teste 3",
    description: "Membro da família tec tec tec",
    type: "Son",
  },
  {
    id: 4,
    img: daughterSVG,
    name: "Membro Teste 4",
    description: "Membro da família tec tec tec",
    type: "Daughter",
  }
]

export { mockMembers }