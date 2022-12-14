import React from 'react';

type DevTagPositions = 'left-top' | 'left-bottom' | 'right-top' | 'right-bottom'
interface DevTagProps {
  text: string;
  color?: string;
  background?: string;
  position?: DevTagPositions;
}
function DevTag(props: DevTagProps) {
  const { text, position = 'left-top', color = '#282c34', background = '#61dafb' } = props;
  const style = {
    color,
    background,
    fontSize: 15,
    padding: '2px 8px',
    position: 'absolute',
    top: (position === 'left-top' || position === 'right-top') ? 0 : undefined,
    left: (position === 'left-top' || position === 'left-bottom') ? 0 : undefined,
    bottom: (position === 'left-bottom' || position === 'right-bottom') ? 0 : undefined,
    right: (position === 'right-top' || position === 'right-bottom') ? 0 : undefined,
  };
  return process.env.NODE_ENV !== 'production' ? (
    // @ts-ignore-next-line
    <div style={style}>{text}</div>
  ) : (<></>);
}

export default React.memo(DevTag);