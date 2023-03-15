import { search } from '../Utils/Api';

export const App = () => {
  search('cat').then(({ data: { totalHits, hits } }) => {
    if (totalHits > 0) {
      // hits це масив
      console.log(hits);
    } else {
      console.log('No hits');
    }
  });

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
