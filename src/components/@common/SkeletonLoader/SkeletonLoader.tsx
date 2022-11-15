import classNames from "classnames";
import styles from "./SkeletonLoader.module.css";


export type SkeletonLoaderProps = {
  className?: string;
  title?: string;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

const SkeletonLoader = ({
  className,
  title,
  children,
  onClick = () => {},
}: SkeletonLoaderProps) => {
  return (
    <div className={styles.wrapper}>
    <div className={styles.row}>
      <span className={styles['prod-img']}></span>    
      <div className="details">
        <span className="prod-name skeleton-loader"></span>
        <span className="prod-description skeleton-loader"></span>
      </div>
    </div>
    <div className="row">
      <span className="prod-img skeleton-loader"></span>    
      <div className="details">
        <span className="prod-name skeleton-loader"></span>
        <span className="prod-description skeleton-loader"></span>
      </div>
    </div>
    <div className="row">
      <span className="prod-img skeleton-loader"></span>    
      <div className="details">
        <span className="prod-name skeleton-loader"></span>
        <span className="prod-description skeleton-loader"></span>
      </div>
      <div className="others skeleton-loader"></div>
      <div className="others skeleton-loader"></div>
      <div className="others skeleton-loader"></div>
    </div>
    <div className="row">
      <span className="prod-img skeleton-loader"></span>    
      <div className="details">
        <span className="prod-name skeleton-loader"></span>
        <span className="prod-description skeleton-loader"></span>
      </div>
      <div className="others skeleton-loader"></div>
      <div className="others skeleton-loader"></div>
      <div className="others skeleton-loader"></div>
    </div>
  </div>
  )
  
};

export default SkeletonLoader;
