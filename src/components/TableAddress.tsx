import { useFieldArray } from "react-hook-form";
import { Input } from "./Utilities";
import { TrashIcon } from "@heroicons/react/24/outline";


export default function TableAddress({ control, register }) {
    const {
        fields: addressFields,
        append: appendAddress,
        remove: removeAddress,
      } = useFieldArray({
        control,
        name: "addressesClient",
      });

    return (
        <>
        <div className="flex items-center justify-between mb-2">
            <h2 className="font-semibold text-[var(--color-input-text)]">Endereços</h2>
            <button
                type="button"
                onClick={() => appendAddress({ zipCode: "", cityId: "", cityName:"", uf:"" })}
                className="btn"
            >
            +
            </button>
        </div>
        {addressFields.map((field, index) => (
            <div key={field.id} className="mb-4 border p-2 rounded">
            <Input {...register(`addressesClient.${index}.zipCode`)} placeholder="CEP"/>
            <Input {...register(`addressesClient.${index}.street`)} placeholder="Rua"/>
            <Input {...register(`addressesClient.${index}.number`)} placeholder="Número"/>
            <Input {...register(`addressesClient.${index}.neighborhood`)} placeholder="Bairro"/>
            <Input {...register(`addressesClient.${index}.complement`)} placeholder="Complemento"/>
            <Input {...register(`addressesClient.${index}.cityName`)} placeholder="Nome da cidade" readOnly/>
            <Input {...register(`addressesClient.${index}.uf`)} placeholder="UF" readOnly/>
            <button type="button" onClick={() => removeAddress(index)} className="ml-2 text-red-500"><TrashIcon className="h-5 w-5 text-red-500" /></button>
            </div>
        ))}
        </>
    )
}