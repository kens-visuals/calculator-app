import { useReducer } from 'react';

export const ACTIONS = {
  ADD_DIGIT: 'add-digit',
  CHOOSE_OPERATOR: 'choose-operator',
  RESET: 'reset',
  DELETE_DIGIT: 'delete',
  EVAL: 'eval',
};

const evaluation = function ({ currOperand, prevOperand, operation }) {
  let computation = '';
  const prev = parseFloat(prevOperand);
  const curr = parseFloat(currOperand);

  if (isNaN(prev) || isNaN(curr)) return '';

  switch (operation) {
    case '+':
      computation = prev + curr;
      break;
    case '-':
      computation = prev - curr;
      break;
    case '*':
      computation = prev * curr;
      break;
    case '/':
      computation = prev / curr;
      break;
    default:
      return '';
  }

  return computation.toString();
};

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          currOperand: payload.digit,
          overwrite: false,
        };
      }
      if (payload.digit === '0' && state.currOperand === '0') return state;
      if (
        payload.digit === '.' &&
        state.currOperand &&
        state.currOperand.includes('.')
      ) {
        return state;
      }

      return {
        ...state,
        currOperand: `${state.currOperand || ''}${payload.digit}`,
      };

    case ACTIONS.CHOOSE_OPERATOR:
      if (state.currOperand == null && state.prevOperand == null) return state;
      if (state.currOperand == null) {
        return {
          ...state,
          operation: payload.operation,
        };
      }
      if (state.prevOperand == null) {
        return {
          ...state,
          operation: payload.operation,
          prevOperand: state.currOperand,
          currOperand: null,
        };
      }

      return {
        ...state,
        prevOperand: evaluation(state),
        operation: payload.operation,
        currOperand: null,
      };

    case ACTIONS.DELETE_DIGIT:
      if (state.overwrite)
        return {
          ...state,
          overwrite: false,
          currOperand: null,
        };
      if (state.currOperand == null) return state;
      if (state.currOperand.length === 1)
        return { ...state, currOperand: null };

      return {
        ...state,
        currOperand: state.currOperand.slice(0, -1),
      };

    case ACTIONS.EVAL:
      if (
        state.operation == null ||
        state.currOperand == null ||
        state.prevOperand == null
      )
        return state;

      return {
        ...state,
        overwrite: true,
        operation: null,
        prevOperand: null,
        currOperand: evaluation(state),
      };

    case ACTIONS.RESET:
      return {};

    default:
      return state;
  }
}

export default function useCalc() {
  const [{ currOperand, prevOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );

  return { currOperand, prevOperand, operation, dispatch };
}
