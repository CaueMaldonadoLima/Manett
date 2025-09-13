import { Plus } from "lucide-react";
import SubscriptionsRow from "./SubscriptionsRow";

export default function SubscriptionsArea() {
  return (
		<div className="w-full flex flex-col p-5 space-y-4">
        	<div className="flex items-center gap-2 space-y-0 border-b sm:flex-row">
				 <div className="flex flex-row items-center justify-between w-full">
					<p className="text-xl">Subscriptions</p>
					<button><Plus/></button>
				</div>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
				<SubscriptionsRow />
				<SubscriptionsRow />
				<SubscriptionsRow />
				<SubscriptionsRow />
				<SubscriptionsRow />
			</div>
		</div>
	)
}