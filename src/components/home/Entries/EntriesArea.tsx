import EntriesRow from "./EntriesRow";
import { EntriesDialog } from "./EntriesDialog";

export default function EntriesArea() {
  return (
    <div className="flex flex-col p-5 space-y-4">
        <div className="flex items-center gap-2 space-y-0 border-b sm:flex-row">
            <div className="flex flex-row items-center justify-between w-full">
                <p className="text-xl">Entries</p>
                <EntriesDialog />
            </div>
        </div>
        <EntriesRow />
        <EntriesRow />
        <EntriesRow />
        <EntriesRow />
    </div>
  )
}