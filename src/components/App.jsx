import { search } from '../Utils/Api';
export const App = () => {
  search('cat').then(({ data }) => console.log(data.hits));
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      React homework template
    </div>
  );
};
