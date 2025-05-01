import { useFieldArray } from "react-hook-form";
import { Button, Input } from "./Utilities";
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
            <Button
                onClick={() => appendAddress({ zipCode: "", cityId: "", cityName:"", uf:"" })}
            >
            +
            </Button>
        </div>
        {addressFields.map((field, index) => (
            <div key={field.id} className="mb-4 border p-2 rounded">
            <div className="grid grid-cols-2 gap-4">
              <Input {...register(`addressesClient.${index}.zipCode`)} placeholder="CEP" />
              <Input {...register(`addressesClient.${index}.street`)} placeholder="Rua" />
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-2">
              <Input {...register(`addressesClient.${index}.number`)} placeholder="Número" />
              <Input {...register(`addressesClient.${index}.neighborhood`)} placeholder="Bairro" />
            </div>
          
            <div className="mt-2">
              <Input {...register(`addressesClient.${index}.complement`)} placeholder="Complemento" />
            </div>
          
            <div className="grid grid-cols-2 gap-4 mt-2">
              <Input {...register(`addressesClient.${index}.cityName`)} placeholder="Nome da cidade" readOnly />
              <Input {...register(`addressesClient.${index}.uf`)} placeholder="UF" readOnly />
            </div>
          
            <div className="flex justify-end mt-2">
                <button type="button" onClick={() => removeAddress(index)} className="text-red-500">
                    <TrashIcon className="h-5 w-5 text-red-500" />
                </button>
            </div>
          </div>
        ))}
        </>
    )
}