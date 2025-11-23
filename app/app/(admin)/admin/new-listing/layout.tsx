import { NewListingStepBar } from "./_components/NewListingStepBar";

export default function NewListingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="relative w-full p-3 max-md:p-1 h-full flex flex-col items-center justify-start">
        <NewListingStepBar />

        <div className="w-full overflow-y-auto h-full">{children}</div>
      </div>
    </>
  );
}
