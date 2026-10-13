// 🔵 John - Componente Loader
import './Loader.css';

interface LoaderProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  text?: string;
  fullScreen?: boolean;
}

export const Loader = ({
  size = 'medium',
  color = '#646cff',
  text,
  fullScreen = false,
}: LoaderProps) => {
  const spinner = (
    <div className={`loader-container ${fullScreen ? 'loader-fullscreen' : ''}`}>
      <div className={`loader loader-${size}`} style={{ borderTopColor: color }}></div>
      {text && <p className="loader-text">{text}</p>}
    </div>
  );

  if (fullScreen) {
    return <div className="loader-overlay">{spinner}</div>;
  }

  return spinner;
};
