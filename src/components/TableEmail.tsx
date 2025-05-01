import { useFieldArray } from "react-hook-form";
import { Input } from "./Utilities";
import { TrashIcon } from '@heroicons/react/24/outline';



export default function TableEmail({ control, register }) {
    const {
        fields: emailFields,
        append: appendEmail,
        remove: removeEmail,
      } = useFieldArray({
        control,
        name: "emailsClient",
      });

    return (
        <div className="border p-4 flex-1">
            <div className="flex items-center justify-between mb-2">
                <h2 className="font-semibold text-[var(--color-input-text)]">Emails</h2>
                <button
                type="button"
                onClick={() => appendEmail({ address: "", main: false })}
                className="btn"
                >
                +
                </button>
            </div>

            {emailFields.map((field, index) => (
                <div key={field.id} className="mb-2">
                    <Input
                        {...register(`emailsClient.${index}.address`)}
                        placeholder="Email"
                    />
                    <div className="flex items-center">
                        <input type="checkbox" {...register(`emailsClient.${index}.main`)} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 focus:ring-2"/>
                        <label className="w-full py-3 ms-2 text-sm font-medium text-[var(--color-input-text)]">Principal</label>
                        <button type="button" onClick={() => removeEmail(index)} className="ml-2 text-red-500"><TrashIcon className="h-5 w-5 text-red-500" /></button>
                    </div>
                </div>
            ))}
        </div>

    )
}