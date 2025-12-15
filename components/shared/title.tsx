import clsx from 'clsx';

type TitleSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

interface Props {
  size?: TitleSize;
  className?: string;
  text: string;
}

export const Title = ({ text, size = 'sm', className }: Props) => {
  const mapTagBySize: Record<TitleSize, 'h1' | 'h2' | 'h3' | 'h4' | 'h5'> = {
    xs: 'h5',
    sm: 'h4',
    md: 'h3',
    lg: 'h2',
    xl: 'h1',
    '2xl': 'h1',
  };

  const mapClassNameBySize: Record<TitleSize, string> = {
    xs: 'text-[16px]',
    sm: 'text-[22px]',
    md: 'text-[26px]',
    lg: 'text-[32px]',
    xl: 'text-[40px]',
    '2xl': 'text-[48px]',
  };

  const Tag = mapTagBySize[size];

  switch (Tag) {
    case 'h1':
      return <h1 className={clsx(mapClassNameBySize[size], className)}>{text}</h1>;
    case 'h2':
      return <h2 className={clsx(mapClassNameBySize[size], className)}>{text}</h2>;
    case 'h3':
      return <h3 className={clsx(mapClassNameBySize[size], className)}>{text}</h3>;
    case 'h4':
      return <h4 className={clsx(mapClassNameBySize[size], className)}>{text}</h4>;
    case 'h5':
      return <h5 className={clsx(mapClassNameBySize[size], className)}>{text}</h5>;
    default:
      return <h2 className={clsx(mapClassNameBySize[size], className)}>{text}</h2>;
  }
};