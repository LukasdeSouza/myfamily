import fatherSVG from '../../assets/father.svg'
import motherSVG from '../../assets/mother.svg'
import sonSVG from '../../assets/son.svg'
import daughterSVG from '../../assets/daughter.svg'

const mockMembers = [
  {
    id: 0,
    img: fatherSVG,
    name: "Membro Pai",
    description: "Membro da família etc etc etc",
    type: "Father",
  },
  {
    id: 1,
    img: motherSVG,
    name: "Membro Mãe 2",
    description: "Membro da família tec tec tec",
    type: "Mother",
  },
  {
    id: 2,
    img: sonSVG,
    name: "Membro Filho 3",
    description: "Membro da família tec tec tec",
    type: "Son",
  },
  {
    id: 3,
    img: daughterSVG,
    name: "Membro Filha 4",
    description: "Membro da família tec tec tec",
    type: "Daughter",
  }
]

export { mockMembers }