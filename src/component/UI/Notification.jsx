import styles from "./Notification.module.css";
function Notification(props) {
  return (
    <div className={styles.notif}>
      <p> {props.message}</p>
    </div>
  );
}

export default Notification;
