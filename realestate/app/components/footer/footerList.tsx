interface FooterListProps{
    children: React.ReactNode;
}

const FooterList: React.FC<FooterListProps> = ({children }) => {
  return (
    <div className="w-full sm:1/2 md:1/4   mb-6 flex flex-col gap-4">
        {children}
    </div>
  )
}

export default FooterList