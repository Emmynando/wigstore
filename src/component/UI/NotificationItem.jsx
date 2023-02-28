import { useSelector } from "react-redux";
import Notification from "./Notification";
import styles from "./Notification.module.css";

function NotificationItem() {
  const notifSelector = useSelector((state) => state.ui.notification);
  return (
    <div className={styles.notif}>
      <Notification message={notifSelector} />
    </div>
  );
}

export default NotificationItem;
