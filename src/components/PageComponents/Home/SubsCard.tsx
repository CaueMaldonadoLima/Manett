import { Plus, Tv } from "lucide-react"
import { SubsRow } from "./SubsRow"

const Subscriptions = () => {
    return (
        <div className="bg-white rounded-md shadow-md px-4 py-2 w-full">
            <div className="flex flex-row w-full justify-between items-center">
                <p className="text-lg">Subscriptions</p>
                <Plus className="w-5 h-5"/>
            </div>
            <div className="flex flex-col w-full">
                <div className="flex flex-row gap-4">
                    <SubsRow title={'Netflix'} date={'Today'} value={'- R$45,00'}/>
                    <SubsRow title={'Netflix'} date={'Today'} value={'- R$45,00'}/>
                    <SubsRow title={'Netflix'} date={'Today'} value={'- R$45,00'}/>
                </div>
                <div className="flex flex-row gap-4">
                    <SubsRow title={'Netflix'} date={'Today'} value={'- R$45,00'}/>
                    <SubsRow title={'Netflix'} date={'Today'} value={'- R$45,00'}/>
                    <div className="w-full"></div>
                </div>

            </div>
        </div>
    )
}

export { Subscriptions }