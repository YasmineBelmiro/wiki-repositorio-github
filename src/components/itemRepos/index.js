import React from 'react';
import { ItemContainer } from './styles';


function ItemRepos({repo, handleRemoveRepo}) {

  const handleRemove = () => {
    handleRemoveRepo(repo.id);
  }


  return (
    <ItemContainer onClick={handleRemove}>
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p>
        <p>{repo.description}</p>
        <a href={repo.html_url} target='blank'>Ver Repositório</a><br/>
        <a href='#' className='remover'>Remover</a>
        <hr />
    </ItemContainer>
  )
}
export default ItemRepos;