const Badges = ({ values }) => values.map((value) => (
  <div key={value.id} className="badge">
    {value.toLowerCase()}
  </div>
));

export default Badges;
