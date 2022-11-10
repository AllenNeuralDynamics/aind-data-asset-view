import { v4 as uuidv4 } from 'uuid';

const Badges = ({ values }) => values.map((value, key) => (
  <div key={uuidv4()} className="badge">
    {value}
  </div>
));

export default Badges;
