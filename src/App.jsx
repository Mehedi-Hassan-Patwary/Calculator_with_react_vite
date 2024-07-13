import Display from './componenets/Display';
import Buttonscontainer from './componenets/Buttonscontainer';
import styles from'./App.module.css';

function App() {
  return (
    <>
      <div className={styles.calculator}>
        <Display></Display>

        <Buttonscontainer></Buttonscontainer>

      </div>
    </>
  )
}

export default App;
