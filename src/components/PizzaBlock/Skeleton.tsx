import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <circle cx="578" cy="529" r="74" />
    <rect x="219" y="271" rx="0" ry="0" width="1" height="1" />
    <rect x="9" y="33" rx="0" ry="0" width="260" height="260" />
    <rect x="9" y="307" rx="0" ry="0" width="260" height="30" />
    <rect x="8" y="351" rx="0" ry="0" width="260" height="49" />
    <rect x="7" y="412" rx="0" ry="0" width="106" height="38" />
    <rect x="163" y="411" rx="0" ry="0" width="104" height="39" />
  </ContentLoader>
);

export default Skeleton;
