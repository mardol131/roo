import { NewListingStepBar } from "./_components/NewListingStepBar";

export default function NewListingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="w-full h-full flex flex-col items-center justify-start gap-10">
        <div className="flex w-full flex-col items-center text-center gap-3">
          <NewListingStepBar />
        </div>

        {children}
      </div>
    </>
  );
}
