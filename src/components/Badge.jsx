import { v4 as uuidv4 } from 'uuid';

const Badges = ({ values }) => values.map((value) => (
  <div key={uuidv4()} className="badge">
    {value}
  </div>
));

export default Badges;
