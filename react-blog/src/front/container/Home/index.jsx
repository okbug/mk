import { parseJsonByString } from '../../../common/utils';
import Banner from './component/Banner';
import Footer from './component/Footer';
import List from './component/List';

const pageSchema = parseJsonByString(window.localStorage.schema, {});
const children = pageSchema.children || [{name: 'Banner'}, {name: 'List'}, {name: 'Footer'}];

const map = { Footer, Banner, List };

const render = (index, item) => {
  const Component = map[item.name];
  return Component ? <Component key={index} schema={item} /> : null;
}

console.log(1)

const Home = () => {
  return (
    <div>{children.map((item, index) => render(index, item))}</div>
  );
}

export default Home;