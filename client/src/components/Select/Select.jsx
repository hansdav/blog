const Select = ({ className, onChange, value }) => {
	return (
		<select className={className} onChange={onChange} value={value}>
			{props.values.map((value) => {
				return <option value={value}>{value}</option>;
			})}
		</select>
	);
};

export default Select;
