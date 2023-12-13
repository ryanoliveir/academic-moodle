import InfoCard from "@/components/InfoCard";
import NavBar from "@/components/NavBar";
import { RxAvatar } from "react-icons/rx";
import { getCookie } from "cookies-next";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { useStudent } from "@/hooks/useStudent";

const ProfilePage = () => {
  const { data: currentUser, isLoading  } = useCurrentUser(getCookie("authorization"));
  
  const { data: student } = useStudent(getCookie("authorization"));
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <section className="flex-1 pt-32 bg-gray-900 flex justify-center">
        <div className="text-center">
          <div className="mb-4">
            <div className="flex justify-center mb-10">
              <RxAvatar size="60" />
            </div>
            <div className="flex justify-center">
              <span className="text-white">{currentUser?.email}</span>
              <span className="text-white">{currentUser?.name}</span>
            </div>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              currentUser && (
                <InfoCard
                  name={student?.student[0].name as string}
                  birth_date={student?.student[0].birthDate}
                />
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfilePage;
