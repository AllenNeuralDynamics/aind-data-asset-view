const Badges = ({ values }) => values.map((value) => (
  <div key={value.uuid} className="badge">
    {value}
  </div>
));

export default Badges;
