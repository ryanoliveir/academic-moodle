import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { setCookie } from "cookies-next";
import { useLogin } from "@hooks/useLogin";
import Head from "next/head";
import Link from "next/link";
import { useRegisterUser } from "@/hooks/useRegisterUser";

const RegisterPage = () => {
  const router = useRouter();
  const [passwordShow, setPassword] = useState(false);

  const { mutate: registerUser, isLoading, isError } = useRegisterUser();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    registerUser(data, {
    
      onSuccess: async (token) => {
        setCookie("authorization", token.accessToken);
        router.push("/home", undefined, { shallow: true });
      },
      onError: (message) => {
        console.log(message);
      },
    });
  };

  return (
    <>
      <Head>
        <title>Registro</title>
      </Head>
      <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-gray-900 text-white">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
            Crie uma conta M o o d l e
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6"
              >
                Nome
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  {...register("name")}
                  type="name"
                  autoComplete="name"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-1.5 text-white bg-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="date"
                className="block text-sm font-medium leading-6"
              >
                Data de Nascimento
              </label>
              <div className="mt-2">
                <input
                  id="date"
                  {...register("bith_date")}
                  type="date"
                  autoComplete="date"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-1.5 text-white bg-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6"
              >
                E-email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  {...register("email")}
                  type="email"
                  autoComplete="email"
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
                  Senha
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  type="password"
                  {...register("password")}
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-1.5 text-white bg-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                
              >
                Confirmar
              </button>
            </div>
          </form>
          <div className="flex w-full flex-row justify-end mt-10 ">
            <Link  
                href="/login"
              >
                <span 
                className="font-semibold text-sm mr-1"
              >
                Já tem uma conta ?
              </span>
              <span 
                className="font-semibold text-sm text-green-600 hover:text-green-500"
              >
                 Faça o Login
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
