const ToggleSwitch: React.FC = () => {
  return (
    <>
      <label className="relative inline-block h-10 w-14">
        <input className="h-0 w-0 opacity-0" type="checkbox" checked />
        <span className="before:content-[' '] absolute bottom-0 left-0 right-0 top-0 rounded-3xl bg-slate-300 before:absolute before:bottom-1 before:left-1 before:h-8 before:w-8 before:rounded-full before:bg-white" />
      </label>
    </>
  );
};

export default ToggleSwitch;
