
export function UpcomingBirthdayCard() {
  return (
		<div className="flex items-center justify-between bg-secondary-400 rounded-xl p-3 pr-4 text-fs--1 mb-3">
			<div className="flex items-center">
				<div className="w-12 h-12 bg-purple-400 rounded-lg flex items-center justify-center">
					<p className="text-black font-semibold">DA</p>
				</div>
				<div className="ml-2">
					<p className=" mb-1">David Aronmwan</p>
					<p>
						<span className="text-fs-1">23</span>.August
					</p>
				</div>
			</div>
			<div>
				<p className=" font-semibold">In 5 days</p>
			</div>
		</div>
	);
}
