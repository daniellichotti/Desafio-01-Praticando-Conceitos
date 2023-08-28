import styles from './TasksCreation.module.css'

import plus from '../assets/plus.svg'

export function TasksCreation(){
    return (
        <div className={styles.creation}>
            <input type="text" 
            id="meuCampoDeTexto" name="nome" 
            placeholder="Adicione uma nova tarefa" />
            <button type="button">
                Criar
                <img src={plus} alt="Sinal de soma"/>
            </button>
        </div>
    );
}