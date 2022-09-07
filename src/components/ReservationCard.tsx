
import { useDispatch } from 'react-redux';
import { removeReservation } from "../features/resevationSlice";
import { addCustomer } from '../features/customerSlice';
import {v4 as uuid} from 'uuid'

interface ReservationCardtype {
  name: string;
  index: number;
}

export default function ReservationCard({name, index}: ReservationCardtype) {

  const dispatch = useDispatch()
  return (
    <div onClick={()=> {
      dispatch(removeReservation(index));
      dispatch(addCustomer({
        id: uuid(),
        name,
        food:[]
      }));
    }}
     className="reservation-card-container">{name}</div>
  )
}


