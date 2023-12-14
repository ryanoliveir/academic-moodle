import InfoCard from "@/components/InfoCard";
import NavBar from "@/components/NavBar";
import { RxAvatar } from "react-icons/rx";
import { getCookie } from "cookies-next";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { useStudent } from "@/hooks/useStudent";
import { useState } from "react";
import EditForm from "@/components/EditForm";
import { useUpdateProfile } from "@/hooks/useUpdateProfile";

const ProfilePage = () => {
  
  const { data: student } = useStudent(getCookie("authorization"));
  const { data: currentUser, isLoading } = useCurrentUser(
    getCookie("authorization")
  );
  const [showEditForm, setShowEditForm] = useState(false);

  const { mutate: updateProfile } = useUpdateProfile();


  const onSubmitEdit = (data: any) => {

    data = {
      ...data,
      studentId: student?.student[0].id
    }

    const mutationsParamns = { 
      ...data,
      token: getCookie('authorization') as string
    }
    updateProfile({...mutationsParamns }, {
      onSuccess: () => {
        console.log("Updated!");
      },
      onError: (message) => {
        console.log(message);
      }
    });
  }

  const closeForm = (flag: boolean) => {
    setShowEditForm(flag);
  }

 

  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <section className="flex-1 pt-12 bg-gray-900 flex justify-center">
        <div className="text-center items-center w-2/6">
          <div className="mb-4 flex flex-col items-center" >
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

            <button
              type="submit"
              className="flex w-1/2 justify-center rounded-md bg-blue-900 px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={() => setShowEditForm(!showEditForm)}
            >
              Editar
            </button>

            {
              showEditForm 
              ? <EditForm handleEdit={onSubmitEdit} showForm={(flag) => closeForm(flag)}/> 
              : <></> 
            }

          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfilePage;
