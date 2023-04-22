const Select = ({ className, onChange, value, values }) => {
	return (
		<select className={className} onChange={onChange}>
			{values.map((value) => {
				return (
					<option key={value} value={value}>
						{value}
					</option>
				);
			})}
		</select>
	);
};

export default Select;
