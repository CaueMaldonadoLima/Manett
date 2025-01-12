import { Plus, Utensils } from "lucide-react"
import { EntriesRow } from "./EntriesRow"

const Entries = () => {
    return (
        <div className="bg-white rounded-md shadow-md px-4 py-2">
            <div className="flex flex-row w-full justify-between items-center">
                <p className="text-lg">Entries</p>
                <Plus className="w-5 h-5"/>
            </div>
            <div>
                <EntriesRow title={'Pizza Hut'} type={'Restaurants'} description={'Pizza night with the boys'} value={'- R$45,00'}/>
                <EntriesRow title={'Pizza Hut'} type={'Restaurants'} description={'Pizza night with the boys'} value={'- R$45,00'}/>
                <EntriesRow title={'Pizza Hut'} type={'Restaurants'} description={'Pizza night with the boys'} value={'- R$45,00'}/>
                <EntriesRow title={'Pizza Hut'} type={'Restaurants'} description={'Pizza night with the boys'} value={'- R$45,00'}/>
                {/* rows */}
                {/* rows */}
                {/* rows */}
                {/* rows  make it scrollable*/}
            </div>
        </div>
    )
}

export { Entries }