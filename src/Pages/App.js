import { useState } from "react";
import gitLogo from "../assets/github.png";
import Input from "../components/input";
import ItemRepos from "../components/itemRepos";
import { api } from "../service/api";

import { Container } from "./styles";
import Button from "../components/Button";

function App() {
  const [currentRepo, setCurrentRepo] = useState("");
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    try {
      const { data } = await api.get(`repos/${currentRepo}`);

      if (data && data.id) {
        const isExist = repos.find((repo) => repo.id === data.id);

        if (!isExist) {
          setRepos((prev) => [...prev, data]);
          setCurrentRepo("");
        } else {
          alert("Repositório já existe na lista!");
        }
      }
    } catch (error) {
      alert(
        "Erro ao buscar repositório. Verifique o nome digitado e tente novamente."
      );
    }
  };

 
  const handleRemoveRepo = (id) => {
    console.log('Removendo registro', id);
    const removeRepos = repos.filter((repo) => repo.id !== id);
    setRepos(removeRepos);
  }
  return (
    <Container>

      <h1>Wiki de Repositórios</h1>
      <img src={gitLogo} width={72} height={72} alt="logo do github" />


      <Input
        value={currentRepo}
        onChange={(e) => setCurrentRepo(e.target.value)}
      />
      <Button onClick={handleSearchRepo} />
      {repos.map((repo) => (
        <ItemRepos handleRemoveRepo={handleRemoveRepo} key={repo.id} repo={repo} />
      ))}

    </Container>
  );
}

export default App;
