import { HeaderDiv, HeaderContact, ItemContact, HeaderSearch, OptionsDiv, ItemDiv, QuantItemCarrinho, CategoryDiv } from "./style";
import xioamiLogo from '../../assets/xiomi.png'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FiUser } from 'react-icons/fi';
import SearchBar from "../SearchBar";

export default function Header() {
    return (
        <HeaderDiv>
            <HeaderContact>
                <ItemContact>
                    <div>
                        <span>Produtos fictícios</span>
                    </div>
                    <div>
                        <div>
                            <span>Rastrear Pedido</span>
                        </div>
                        <div>
                            <span>Precisa de ajuda? Github.com/thArthur</span>
                        </div>
                        <div>
                            <span>Perguntas Frequentes</span>
                        </div>                        
                    </div>
                </ItemContact>
            </HeaderContact>
            <HeaderSearch>
                <img src={xioamiLogo}/>
                <SearchBar/>
                <OptionsDiv>
                    <ItemDiv>
                        <AiOutlineShoppingCart size='35'/>
                        <div>
                            <QuantItemCarrinho>0</QuantItemCarrinho>
                            <span>Carrinho</span>
                        </div>
                    </ItemDiv>
                    <ItemDiv>
                        <FiUser size='35'/>
                        <div>
                            <span>Login / Cadastrar</span>
                            <span>Minha conta</span>
                        </div>
                    </ItemDiv>
                </OptionsDiv>
            </HeaderSearch>
            <CategoryDiv>
                <span>Smartwatch</span>
                <span>Carros</span>
                <span>Áudio</span>
                <span>Smartphones</span>
                <span>Computador</span>
                <span>Casa inteligente</span>
            </CategoryDiv>
        </HeaderDiv>
    );
}

  