import styles from "../styles/components/Profile.module.css";

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://www.hdnit.com.br/assinatura/foto-gabrielsouza.jpg" alt="Gabriel" />
      <div>
        <strong>Gabriel Rodrigues</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          Lavel 3
        </p>
      </div>
    </div>
  );
}
