import SessionPanel from '@/components/SessionPanel';
import SideBar from '@/components/SideBar';

export default function Session() {
  const admin = true;
  return (
    <main>
      <SideBar role={admin} />
      <SessionPanel role={admin} />
    </main>
  );
}
