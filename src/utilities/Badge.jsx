const Badges = ({ values }) => values.map((value) => (
  <div key={value.id} className="badge">
    {value}
  </div>
));

export default Badges;
