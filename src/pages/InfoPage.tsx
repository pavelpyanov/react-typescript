import {FC} from "react";
import { useHistory } from "react-router-dom";

export const InfoPage: FC = () => {
  const history = useHistory()

  return(
    <>
      <h2>Информаиця</h2>
      <p>
        Данное приложение сделано с целью обучения языку програмирования TypeScript
      </p>
      <a className='btn' onClick={() => history.push('/')}>Назад</a>
    </>
  )
}