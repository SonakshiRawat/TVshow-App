import './Card.css'

function Cast(props) {

    // console.log(props.mov);
  return (
    <div className={props.num?'block length':'block'} key={props.mov.character.id}>
      <img
        src={`${props.mov.person.image.original}`}
        alt="movie"
        className="trending"
      />
      <div className="layer2">
       

        <div className="nam">{props.mov.person.name}
        <br/>
       <div className='char'>{props.mov.character.name}</div> 
        </div>
       
       
      </div>
    </div>
  );
}

export default Cast;
