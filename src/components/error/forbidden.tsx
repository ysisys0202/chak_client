import Link from "next/link";
import { Button, Icon, Typography } from "chak-blocks/plain";
import path from "@/constants/path";
import { shades } from "@/constants/colors";
import { styles } from "./error.css";

const Forbidden = () => {
  return (
    <div className={styles.self}>
      <Icon name="warning-triangle" size={40} />
      <Typography color={shades[600]} className={styles.text}>
        해당 페이지에 접근할 수 없습니다.
      </Typography>
      <Link href={path.home} className={styles.button}>
        <Button as="div">홈 화면으로 돌아가기</Button>
      </Link>
    </div>
  );
};

export default Forbidden;
