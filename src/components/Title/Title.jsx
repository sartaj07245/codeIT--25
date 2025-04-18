import styles from "./Title.module.css";

const Title = ({title}) => {
  return <h2 className={styles.title}>{title}</h2>;
}; 

export default Title;
