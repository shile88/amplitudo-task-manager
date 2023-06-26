import classes from './TaskCard.module.scss';
import wishlist from '../../assets/images/wishlist.jpg';
import toDo from '../../assets/images/to-do.jpg';
import inProgress from '../../assets/images/in-progress.png';
import done from '../../assets/images/done.png';

const TaskCard = ({task}) => {


  const cardData = [];
  
  if (task.status === 'wishlist')
    cardData.push({color: 'blue', img: wishlist});
  else if (task.status === 'to-do')
    cardData.push({color: 'red', img: toDo});
  else if (task.status === 'in-progress')
    cardData.push({color: 'yellow', img: inProgress});
  else if (task.status === 'done')
    cardData.push({color: 'green', img: done});

    const imageSrc = cardData.length > 0 ? cardData[0].img : null;
    const borderColor = cardData.length > 0 ? cardData[0].color : null;

  return (
   
    
    <div className={`${classes['task-card']} ${classes[borderColor]}`}>
      <h2>{task.name}</h2>
      
      <p>{task.description}</p>
      <img src={imageSrc} alt="task image" />
    </div>
 
  )
}

export default TaskCard;