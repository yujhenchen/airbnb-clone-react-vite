const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 flex h-10 w-screen place-content-between items-center bg-gray-100 px-10 text-sm">
      <div className="flex space-x-1">
        <span>© 2023 ThePlace, Inc.</span>
        <ul className="inline-block items-center space-x-1">
          <li className="inline-block">
            <span className="">.</span>
            <a href={""}>Terms</a>
          </li>
          <li className="inline-block">
            <span>.</span>
            <a href={""}>Sitemap</a>
          </li>
          <li className="inline-block">
            <span>.</span>
            <a href={""}>Privacy</a>
          </li>
          <li className="inline-block">
            <span>.</span>
            <a href={""}>Your Privacy Choices</a>
          </li>
          <li className="inline-block">
            <span>.</span>
            <a href={""}>Destinations</a>
          </li>
        </ul>
      </div>
      <div className="flex space-x-4">
        <button className="min-w-0">English(US)</button>
        <button className="min-w-0">$TWD</button>
        <button className="min-w-0">Support & resources</button>
      </div>
    </footer>
  );
};

export default Footer;
