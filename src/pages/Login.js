import React, { useState } from "react";
import logo from "../assets/icones/logo.svg";
import logoHeader from "../assets/icones/logo-header.svg";
import mail from "../assets/icones/mail.svg";
import lock from "../assets/icones/lock.svg";
import { Input } from "../components/Input";
import { executaRequisicao } from "../services/api";
import { handleError } from "../services/logs";

export const Login = (props) => {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [msgErro, setMsgErro] = useState("");

  const executaLogin = async (evento) => {
    try {
      evento.preventDefault();
      setLoading(true);
      setMsgErro("");

      const body = {
        login,
        senha,
      };

      const resultado = await executaRequisicao("login", "post", body);
      console.log("resultado", resultado);
      if (resultado?.data?.token) {
        localStorage.setItem("accessToken", resultado.data.token);
        localStorage.setItem("usuarioNome", resultado.data.nome);
        localStorage.setItem("usuarioEmail", resultado.data.email);
        props.setAccessToken(resultado.data.token);
      }
    } catch (e) {
      console.log(e);
      handleError(e.message, e);
      if (e?.response?.data?.erro) {
        setMsgErro(e.response.data.erro);
      } else {
        setMsgErro(
          "Não foi possível efetuar o login, fale com o administrador."
        );
      }
    }
    setLoading(false);
  };

  return (
    <div className="container-login">
      <section className="container-logo">
        <img src={logo} alt="Logo Kanbang" className="logo" />
        <img src={logoHeader} alt="Texto Kanbang" className="logo" />
      </section>
      <section className="container-form">
        <form>
          {msgErro && <p>{msgErro}</p>}
          <h2>Faça login</h2>
          <div className="form-input-container">
            <Input
              srcImg={mail}
              altImg={"Icone email"}
              inputType="text"
              inputName="login"
              inputPlaceholder="Informe seu email"
              value={login}
              setValue={setLogin}
              className="input"
            />
            <Input
              srcImg={lock}
              altImg={"Icone senha"}
              inputType="password"
              inputName="senha"
              inputPlaceholder="Informe sua senha"
              value={senha}
              setValue={setSenha}
              className="input"
            />
            <button onClick={executaLogin} disabled={isLoading}>
              {isLoading === true ? "...Carregando" : "Entrar"}
            </button>
          </div>

        </form>
      </section>
    </div>
  );
};
