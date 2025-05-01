import { useFieldArray } from "react-hook-form";
import { Input } from "./Utilities";
import { TrashIcon } from "@heroicons/react/24/outline";


export default function TablePhone({ control, register }) {
    const {
        fields: phoneFields,
        append: appendPhone,
        remove: removePhone,
      } = useFieldArray({
        control,
        name: "phonesClient",
      });

    return (
        <div className="border p-4 flex-1">
            <div className="flex items-center justify-between mb-2">
                <h2 className="font-semibold text-[var(--color-input-text)]">Números</h2>
                <button
                type="button"
                onClick={() => appendPhone({ number: "", main: false })}
                className="btn"
                >
                +
                </button>
            </div>
            {phoneFields.map((field, index) => (
                <div key={field.id} className="mb-2">
                    <Input {...register(`phonesClient.${index}.number`)} placeholder="Telefone" />
                    <div className="flex items-center">
                        <input type="checkbox" {...register(`phonesClient.${index}.main`)} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 focus:ring-2"/>
                        <label className="w-full py-3 ms-2 text-sm font-medium text-[var(--color-input-text)]">Principal</label>
                        <button type="button" onClick={() => removePhone(index)} className="ml-2 text-red-500"><TrashIcon className="h-5 w-5 text-red-500" /></button>
                    </div>
                    
                </div>
            ))}
        </div>
    )
}