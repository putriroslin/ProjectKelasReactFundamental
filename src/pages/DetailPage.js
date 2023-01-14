import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import NoteDetail from '../components/NoteDetail';
import { getNote} from '../utils/local-data';
import PageNotFound from './PageNotFound';

function DetailPageWrapper() {
  const { id } = useParams();
  return <DetailPage id={id} />;
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getNote(props.id)
    };
  }

  render() {
    /*if (this.state.notes === 'undefined' ) {
      return <PageNotFound />
    }*/

    return (
        this.state.notes === undefined ? (
            <PageNotFound/> 
        ) : (
          <section>
            <h2>Detail Catatan</h2>
            <NoteDetail {...this.state.notes}/>
          </section>
        )
    );

    
  }
}

DetailPage.propType = {
  id: PropTypes.string.isRequired,
}

export default DetailPageWrapper;
