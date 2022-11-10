import styles from "./Icon.module.css";

export type IconImgProps = React.ImgHTMLAttributes<HTMLButtonElement> & {
  src: string;
  alt: string;
};

const Icon = ({ className, src, alt, ...props } : IconImgProps) => {
  return (
    // <button className={styles.button} {...props}>
      <img  className={styles.img} src={src} alt={alt}  />
    // </button>
  );
};

export default Icon;
