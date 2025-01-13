import { Plus } from "lucide-react"
import { AccountsRow } from "./AccountsRow"

const Accounts = () => {
    return (
        <div className="bg-white rounded-md shadow-md px-4 py-2 w-[40%]">
            <div className="flex flex-row w-full justify-between items-center">
                <p className="text-lg">Accounts</p>
                <Plus className="w-5 h-5"/>
            </div>
            <div className="py-4 gap-4 flex flex-col">
                <AccountsRow title={'Inter'}  value={'R$73 925,84'}/>
                <AccountsRow title={'Nubank'}  value={'R$2 751,42'}/>
                <AccountsRow title={'Santander'}  value={'R$452,69'}/>
            </div>
        </div>
    )
}

export  { Accounts }