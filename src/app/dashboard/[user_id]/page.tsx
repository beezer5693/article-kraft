export default async function Dashboard({ params }: { params: { user_id: string } }) {
  return <div>{params.user_id}</div>;
}
