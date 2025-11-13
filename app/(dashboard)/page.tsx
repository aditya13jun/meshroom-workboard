import DashboardPage from "./_components/dashboard-page";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ search?: string; favorites?: string }>;
}) {
  //Unwrap the promise here (this is now async)
  const params = await searchParams;

  //Pass plain data into the client component
  return <DashboardPage searchParams={params} />;
}
