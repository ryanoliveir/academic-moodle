import { useForm } from "react-hook-form";

interface LogoutButtonProps {
  handleEdit: (data: any) => void;
  showForm: (flag: boolean) => void;
}

const EditForm = ({ handleEdit, showForm }: LogoutButtonProps) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    handleEdit(data);
  };


  const closeEditForm = () => {
    showForm(false);
  }

  return (
    <>
      <form className="space-y-6  w-80 mt-10 " onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className="flex">
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6"
            >
              Nome
            </label>
          </div>
          <div className="mt-2">
            <input
              id="name"
              {...register("name")}
              type="text"
              required
              className="block w-full rounded-md border-0 py-1.5 px-1.5 text-white bg-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6"
            >
              Data de Nascimento
            </label>
          </div>
          <div className="mt-2">
            <input
              id="date"
              type="date"
              {...register("date")}
              required
              className="block w-full rounded-md border-0 py-1.5 px-1.5 text-white bg-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="flex flex-row justify-evenly items-center ">
          <button
            type="submit"
            className="w-24 justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Salvar
          </button>
          <button
            type="submit"
            className="w-24 justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => closeEditForm()}
          >
            Cancelar
          </button>
          
        </div>
        
      </form>
    </>
  );
};

export default EditForm;
