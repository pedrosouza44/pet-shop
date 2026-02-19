type Props = {
  title: string;
}

const Component = ({ title }: Props) => {
  console.log(title);

  return (
    <>
      <h2>Component</h2>
    </>
  )
}

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h2>Rocketseat</h2>

      <Component title={1} />
    </div>
  );
}
