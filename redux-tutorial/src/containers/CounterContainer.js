import React ,{useCallback}from "react";
import Counter from "../components/Counter";
// import { connect } from "react-redux";
import { increase, decrease } from "../modules/counter";
import { useSelector, useDispatch } from "react-redux";

const CounterContainer = () => {
  const number = useSelector(state => state.counter.number);
  const dispatch = useDispatch();
  const onIncrease = useCallback(()=>dispatch(decrease()),[dispatch])
  const onDecrease = useCallback(()=>dispatch(increase()),[dispatch]);
  return <Counter number={number} increase={onIncrease} decrease={onDecrease} />;
};

export default CounterContainer;
// const mapStateToProps = state => ({
//   number: state.counter.number
// });

// const mapDispatchToProps = dispatch => ({
//   increase: () => {
//     dispatch(increase());
//   },
//   decrease: () => {
//     dispatch(decrease());
//   }
// });

// export default connect(
//   state => ({
//     number: state.counter.number
//   }),
//   dispatch => ({
//     increase: () => {
//       dispatch(increase());
//     },
//     decrease: () => {
//       dispatch(decrease());
//     }
//   })
// )(CounterContainer);

// export default connect(
//   state => ({
//     number: state.counter.number
//   }),
//   dispatch =>
//     bindActionCreators(
//       {
//         increase,
//         decrease
//       },
//       dispatch
//     )
// )(CounterContainer);

// export default connect(
//   state => ({
//     number: state.counter.number
//   }),
//   {
//     increase,
//     decrease
//   }
// )(CounterContainer);
// export default connect(
//   state => ({
//     number: state.counter.number
//   }),
//   {
//     increase,
//     decrease
//   }
// )(CounterContainer);
