import { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { ClientFormData } from "../../intefaces/Client";
import { Profession } from "../../intefaces/Profession";
import { Input } from "../../components/Utilities";
import TableEmail from "../../components/TableEmail";
import TablePhone from "../../components/TablePhone";
import TableAddress from "../../components/TableAddress";
import { SelectEnumComponent } from "../../components/SelectEnumComponent";
import { MatrialStatusOptions } from "../../enums/MatrialEnum";
import { GenderEnumOptions } from "../../enums/GenderEnum";
import { SelectReturnApiComponent } from "../../components/SelectReturnApiComponent";
import useTenant from "../../hooks/useTenant";
import useAuth from "../../hooks/useAuth";
import ConnectProfession from "../../apis/profession";
import ConnectClient from "../../apis/client";
import toast from "react-hot-toast";
import ConnectCity from "../../apis/city";

export default function Register() {
  const { tenant } = useTenant();
  const { user, login } = useAuth();

  const apiProfession = new ConnectProfession(user?.token || '',tenant?.url || '')
  const apiClient = new ConnectClient(user?.token || '',tenant?.url || '')
  const apiCity = new ConnectCity(user?.token || '',tenant?.url || '')

  const [typeClient, setTypeClient] = useState<number>(1);
  const [professions, setProfessions] = useState<Profession[]>([]);

  const { register, handleSubmit, watch, setValue, control } = useForm<ClientFormData>({
    defaultValues: {
      typeClient: 1,
      addressesClient: [{ zipCode: "", cityId: "", cityName:"", uf:"", number: "", complement: "" }],
      emailsClient: [{ address: "", main: true }],
      phonesClient: [{ number: "", main: true }],
    },
  });

  const getAllProfessions = async() =>{
    const response = await apiProfession.getAll();
    setProfessions(response.data)
  } 

  const getByNameAndUf = async(index: number, cityName: string, uf: string ) =>{
    try{
      const url = `?name=${encodeURIComponent(cityName)}&uf=${uf}`
      const response = await apiCity.getByNameAndUf(url);
      setValue(`addressesClient.${index}.cityId`, response.data.id);
      setValue(`addressesClient.${index}.cityName`, response.data.name);
      setValue(`addressesClient.${index}.uf`, uf);
    }
    catch(error){
      console.error("Error em buscar cidade:", error);
      toast.error(`error ${error}`);
      return;
    }
  } 

  const createClient = async(data: ClientFormData) =>{
    try {
      await apiClient.create(data);
      login(data.emailMain, data.password)
    } catch (error) {
        console.error("Error in login:", error);
        toast.error(`error ${error}`);
        return;
    }
  }

  useEffect(() => {
    try
    {
      getAllProfessions()
    }
    catch(error){
      console.log(error)
    }
  }, []);

  const watchZipCodes = watch("addressesClient").map((a) => a.zipCode);

  useEffect(() => {
    watchZipCodes.forEach((zip, index) => {
      if (zip?.length === 8) {
        axios
          .get(`https://viacep.com.br/ws/${zip}/json/`)
          .then((res) => {
            if (!res.data.erro) {
              setValue(`addressesClient.${index}.street`, res.data.logradouro);
              setValue(`addressesClient.${index}.neighborhood`, res.data.bairro);
              const cityName = res.data.localidade;
              const uf = res.data.uf;
              getByNameAndUf(index, cityName, uf)
            }
          })
          .catch(console.error);
      }
    });
  }, [watchZipCodes.join(",")]);

  const onSubmit = (data: ClientFormData) => {
    data.typeClient = Number(data.typeClient);
    data.gender = Number(data.gender);
    data.matrialStatus = Number(data.matrialStatus);

    createClient(data)
  };

  return (
    <div className="min-h-screen bg-[var(--color-primary)] flex flex-col items-start justify-start">
      <div className="max-w-6xl mx-auto p-6 rounded-xl shadow">
        <h1 className="text-2xl text-[var(--color-input-text)] font-bold mb-4">Cadastro de Cliente</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-3 gap-4">
          <div className="col-span-2 border p-4">
            <h2 className="font-semibold mb-2 text-[var(--color-input-text)]">Cadastro Base</h2>

            <div>
              <label className="mr-4">
                <input
                  type="radio"
                  value={1}
                  checked={typeClient === 1}
                  onChange={() => {
                    setTypeClient(1);
                    setValue("typeClient", 1);
                  }}
                />
                PF
              </label>
              <label className="ml-4">
                <input
                  type="radio"
                  value={2}
                  checked={typeClient === 2}
                  onChange={() => {
                    setTypeClient(2);
                    setValue("typeClient", 2);
                  }}
                />
                PJ
              </label>
            </div>

            <Input {...register("name")} placeholder="Nome" />
            <Input {...register("emailMain")} placeholder="Email Principal" />
            <Input {...register("password")} placeholder="Senha" type="password" />
            <Input {...register("confirmPassword")} placeholder="Confirmar Senha" type="password" />
            <Input {...register("document")} placeholder="CPF/CNPJ" />

            {typeClient === 1 ? (
              <>
                <Input {...register("birthDate")} type="date"  />
                <SelectReturnApiComponent register={register("professionId")} options={professions} title="Selecione a profissão"/>
                <SelectEnumComponent register={register("gender")} options={GenderEnumOptions} title="Selecione o gênero"/>
                <SelectEnumComponent register={register("matrialStatus")} options={MatrialStatusOptions} title="Selecione o estado civil"/>
                <Input {...register("identity")} placeholder="Identidade" />
                <Input {...register("dispatcherOrganizationIdentity")} placeholder="Órgão Emissor" />
                <Input {...register("dateIssuanceIdentity")} type="date" />
              </>
            ) : (
              <>
                <Input {...register("fantasyName")} placeholder="Nome Fantasia" />
                <Input {...register("cnae")} placeholder="CNAE" />
                <Input {...register("crea")} placeholder="CREA" />
                <Input {...register("municipalRegistrationNumber")} placeholder="Inscrição Municipal" />
                <Input {...register("stateRegistrationNumber")} placeholder="Inscrição Estadual" />
              </>
            )}
          </div>

          <div className="flex flex-col gap-4">
            <TableEmail control={control} register={register}/>
            <TablePhone control={control} register={register}/>
          </div>

          <div className="col-span-3 border p-4 mt-4">
            <TableAddress control={control} register={register}/>
          </div>

          <div className="col-span-3 mt-4">
            <button type="submit" className="btn w-full">Cadastrar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
