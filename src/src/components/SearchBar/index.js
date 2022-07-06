import { Bar } from "./style";
import xioamiLogo from '../../assets/xiomi.png'
import { AiOutlineSearch } from 'react-icons/ai';

export default function SearchBar() {
    return (
        <Bar>
            <input placeholder="Busque em nossa loja"/>
            <AiOutlineSearch size={35}/>
        </Bar>
    );
}

  